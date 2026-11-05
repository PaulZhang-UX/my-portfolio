#!/usr/bin/env python3
"""预览 Next.js 静态导出产物（out/）的轻量本地服务。

为什么不用 `npm run dev`：这个项目依赖重、媒体文件多（36MB 视频），
webpack dev server 会持续吃内存（实测涨到 2GB 后无响应），
不适合长时间本地验收。静态产物内存占用小，而且和线上部署结果一致。

用法：
    python scripts/serve-static.py [端口] [产物目录]
默认：端口 3000，目录 out/
"""

from __future__ import annotations

import functools
import http.server
import os
import sys
from http.server import ThreadingHTTPServer

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
DIRECTORY = sys.argv[2] if len(sys.argv) > 2 else os.path.join(ROOT, "out")

CONTENT_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".avif": "image/avif",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".otf": "font/otf",
    ".mp3": "audio/mpeg",
    ".pdf": "application/pdf",
}


class ExportHandler(http.server.SimpleHTTPRequestHandler):
    """支持 Next.js 静态导出：/work/readdy -> /work/readdy.html 或 /work/readdy/index.html"""

    # 开启长连接，避免每个小资源都重新建连（本地预览明显更快）。
    # SimpleHTTPRequestHandler 对 GET 总会带 Content-Length，因此 HTTP/1.1 是安全的。
    protocol_version = "HTTP/1.1"

    def translate_path(self, path: str) -> str:
        # 去掉查询串和 hash
        path = path.split("?", 1)[0].split("#", 1)[0]
        local = super().translate_path(path)

        # 目录：优先 index.html
        if os.path.isdir(local):
            index = os.path.join(local, "index.html")
            if os.path.isfile(index):
                return index
            return local

        # 已有文件直接用
        if os.path.isfile(local):
            return local

        # 无扩展名时补 .html（Next 导出的 clean URL）
        if not os.path.splitext(local)[1]:
            candidate = local + ".html"
            if os.path.isfile(candidate):
                return candidate

        return local

    def send_head(self):
        """加上 Range 支持，让 <video> 能拖动进度、按需分段加载。"""
        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().send_head()

        try:
            size = os.path.getsize(path)
            fileobj = open(path, "rb")
        except OSError:
            return super().send_head()

        content_type = self.guess_type(path)
        range_header = self.headers.get("Range")
        if not range_header or not range_header.startswith("bytes="):
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(size))
            self.send_header("Accept-Ranges", "bytes")
            self.end_headers()
            return fileobj

        # 只处理单段 range（浏览器对视频就是用这种）
        try:
            raw = range_header.split("=", 1)[1].split(",", 1)[0].strip()
            start_text, _, end_text = raw.partition("-")
            if start_text:
                start = int(start_text)
                end = int(end_text) if end_text else size - 1
            else:
                # 形如 "bytes=-500"，表示最后 500 字节
                start = max(0, size - int(end_text))
                end = size - 1
        except (ValueError, TypeError):
            fileobj.close()
            return super().send_head()

        start = max(0, min(start, size - 1))
        end = max(start, min(end, size - 1))
        length = end - start + 1

        self.send_response(206)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Content-Length", str(length))
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()

        fileobj.seek(start)
        return _LimitedFile(fileobj, length)

    def guess_type(self, path: str) -> str:
        ext = os.path.splitext(path)[1].lower()
        if ext in CONTENT_TYPES:
            return CONTENT_TYPES[ext]
        return super().guess_type(path)

    def end_headers(self) -> None:
        # 本地预览永远拿最新的，避免缓存干扰验收
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, fmt: str, *args) -> None:
        # 保持输出安静，只打印错误
        if args and str(args[1]).startswith(("4", "5")):
            sys.stderr.write("  %s\n" % (fmt % args))


class _LimitedFile:
    """只允许读取前 length 个字节的包装，供 Range 响应使用。"""

    def __init__(self, fileobj, length: int):
        self._file = fileobj
        self._remaining = length

    def read(self, size: int = -1) -> bytes:
        if self._remaining <= 0:
            return b""
        if size < 0 or size > self._remaining:
            size = self._remaining
        data = self._file.read(size)
        self._remaining -= len(data)
        return data

    def close(self) -> None:
        self._file.close()


def main() -> int:
    if not os.path.isdir(DIRECTORY):
        print(f"找不到产物目录：{DIRECTORY}")
        print("请先运行 npm run build 生成 out/ 目录。")
        return 1

    handler = functools.partial(ExportHandler, directory=DIRECTORY)

    # 必须用 ThreadingHTTPServer：协议是 HTTP/1.1（长连接），浏览器会保持多条连接不关闭。
    # 单线程的 TCPServer 会卡在第一条连接上，导致后面的请求全部超时（服务假死）。
    ThreadingHTTPServer.allow_reuse_address = True
    ThreadingHTTPServer.daemon_threads = True

    with ThreadingHTTPServer(("127.0.0.1", PORT), handler) as httpd:
        print(f"静态预览已启动：http://localhost:{PORT}")
        print(f"产物目录：{DIRECTORY}")
        print("按 Ctrl+C 停止。")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n已停止。")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
