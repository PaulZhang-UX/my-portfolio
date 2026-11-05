# 腾讯云生产部署清单

这份项目是一个需要 Node.js 运行时的 Next.js 应用，不能只把源码目录交给普通静态文件服务器。正式部署应使用 `next build` 生成生产构建，再用 `next start` 常驻运行。

## 当前可发布内容

- 首页：`/`
- 项目一：`/work/mirror`
- 项目二：`/work/ui-trace`
- 项目三：`/work/chatgpt-redesign`
- 项目四：`/work/meituan`
- Mirror Demo：`/demo/`
- ChatGPT 进展板 Demo：`/demo/chat-board/`
- 简历下载：`/zhang-yong-resume.png`
- 作品集下载：`/zhang-yong-portfolio.pdf`（33 页，约 17.7MB）

## 服务器上需要保留的内容

发布包至少需要以下目录和文件：

- `app/`
- `components/`
- `content/`
- `context/`
- `utils/`
- `public/`
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `postcss.config.mjs`
- `eslint.config.mjs`

不要上传或提交：

- `node_modules/`
- `.next/`
- 开发日志、临时截图、实验目录和本地缓存
- `.env*` 中的私密配置

当前 `public/` 约 480MB。网站实际使用的 Demo、项目图片、音乐、UI Trace 视频和下载文件都仍在本地资源路径中，因此第一次上线可以完整上传 `public/`。其中 `public/videos/ui-trace/workflow.mp4` 约 109MB，后续如果服务器带宽或磁盘压力较大，再单独迁移到腾讯云 COS，并同步修改视频地址和跨域配置。

## 轻量应用服务器部署

在服务器安装与本地兼容的 Node.js LTS、Git 和 Nginx。进入项目目录后执行：

```bash
npm ci
npm run build
npm run start -- -H 127.0.0.1 -p 3000
```

生产进程应由 systemd、PM2 或腾讯云的进程守护服务托管，不要使用 `npm run dev`。Next.js 官方自托管建议在 Next.js 前面放置 Nginx 等反向代理，用于 HTTPS、请求限制和连接管理。

Nginx/EdgeOne 的源站只需要转发到服务器的 `127.0.0.1:3000`。安全组公开 `80` 和 `443`，不建议把 `3000` 直接暴露给公网。

## 域名、备案和 EdgeOne

1. 确认域名已完成 ICP 备案并解析到 EdgeOne。
2. 在 EdgeOne 中添加站点和加速域名。
3. 将源站设置为轻量服务器公网地址。
4. 配置 HTTPS 证书，并将 HTTP 重定向到 HTTPS。
5. 先用源站或 EdgeOne 临时域名验收首页、四个项目页、两个 Demo 和两个下载文件，再切换正式域名。

## COS 建议

当前版本不需要 COS 才能运行。作品集 PDF 约 18MB，短期直接放在服务器最简单；109MB 的 UI Trace 视频是最适合后续迁移到 COS 的资源。迁移时需要同时处理：

- 代码中的视频 URL；
- COS 公共读或签名 URL；
- EdgeOne/COS 的缓存策略；
- CORS 允许的域名。

## 发布前命令

在本地项目根目录先运行只读预检：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\preflight-deploy.ps1
```

预检通过后，再在服务器执行 `npm ci`、`npm run build` 和 `npm run start`。当前项目没有自动化测试，生产构建仍应在服务器或本地单独执行并记录结果；本次整理没有代替这一步运行完整构建。

## 当前已知事项

- `components/DownloadSection.tsx` 是当前首页实际使用的下载组件，简历和作品集入口均已接通。
- `components/Download.tsx` 是旧的未引用下载卡片，内部仍有占位 PDF 逻辑；它不参与当前首页渲染，但正式清理时应删除或明确归档。
- 现有 `deploy.bat` 使用 `git add .`，会把未整理文件一并加入提交，不建议直接使用。
- 本仓库当前工作区包含大量既有未提交和未跟踪文件，发布前应先完成一次人工确认和明确提交边界。
