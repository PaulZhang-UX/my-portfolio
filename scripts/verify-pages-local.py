"""本地静态服务器验证 release-pages 的路由（模拟 EdgeOne Pages 目录索引）。"""
import http.server
import socketserver
import threading
import urllib.request
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERVE_DIR = os.path.join(ROOT, "release-pages")
PORT = 8899

# 关键路由（注意：trailingSlash 后页面都在子目录 index.html）
ROUTES = [
    "/",
    "/work/mirror/",
    "/work/ui-trace/",
    "/work/chatgpt-redesign/",
    "/work/meituan/",
    "/demo/",
    "/demo/chat-board/",
    "/zhang-yong-resume.png",
    "/zhang-yong-portfolio.pdf",
    "/projects/covers/project-01.png",
    "/demo/assets/fonts/PingFang%20Regular_0.ttf",
]


def main():
    os.chdir(SERVE_DIR)
    handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("127.0.0.1", PORT), handler)

    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()

    print(f"本地服务器已启动: http://127.0.0.1:{PORT}\n")
    ok = 0
    fail = 0
    for route in ROUTES:
        url = f"http://127.0.0.1:{PORT}{route}"
        try:
            req = urllib.request.Request(url)
            with urllib.request.urlopen(req, timeout=10) as resp:
                status = resp.status
                size = len(resp.read(1024))  # 读前 1KB 判断非空
                print(f"  {status}  {route}  (前1KB={size}B)")
                if status == 200 and size > 0:
                    ok += 1
                else:
                    fail += 1
        except Exception as e:
            print(f"  错误  {route}  -> {e}")
            fail += 1

    httpd.shutdown()
    print(f"\n结果: {ok} 通过 / {fail} 失败")
    return 1 if fail else 0


if __name__ == "__main__":
    raise SystemExit(main())
