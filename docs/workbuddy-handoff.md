# WorkBuddy 部署交接说明

这份文件是交给腾讯 WorkBuddy 执行最后部署时的工作说明。WorkBuddy 应以当前项目工作区为准，不要只从 GitHub 的旧提交重新拉取代码；当前工作区包含已经完成的页面、项目资源、下载文件和部署文档。

## 交付目标

将这个 Next.js 个人作品集部署到腾讯云轻量应用服务器，并通过域名、EdgeOne 和 HTTPS 对外提供访问。

推荐链路：

```text
域名 → EdgeOne → Nginx → 127.0.0.1:3000 → Next.js production server
```

COS 不是当前版本运行的必需项。后续如果服务器带宽或存储压力较大，再将 UI Trace 视频迁移到 COS。

## 当前项目事实

- Next.js：`16.2.10`
- React：`19.2.4`
- Node.js 要求：`>=20.9.0`
- 建议服务器使用 Node.js 22 LTS；不要使用 `npm run dev` 作为生产服务。
- 当前应用无数据库、无后端 API、无必须配置的环境变量。
- 当前 `public/` 约 498MB。
- `public/demo/` 约 290MB。
- `public/videos/ui-trace/workflow.mp4` 约 109MB。
- `public/zhang-yong-portfolio.pdf` 约 17.7MB，共 33 页。

## 必须保留的页面和资源

页面：

- `/`
- `/work/mirror`
- `/work/ui-trace`
- `/work/chatgpt-redesign`
- `/work/meituan`

Demo：

- `/demo/`
- `/demo/chat-board/`

下载：

- `/zhang-yong-resume.png`
- `/zhang-yong-portfolio.pdf`

项目资源：

- `public/projects/`
- `public/demo/`
- `public/videos/`
- `public/music/`
- `public/avatar*.png`
- `public/avatar-magazine-portrait.webp`

## 发布来源和 Git 注意事项

当前工作区有大量既有未提交和未跟踪文件；其中一部分正是当前网站实际使用的代码和资源。不要直接执行旧的 `deploy.bat`，因为它会运行 `git add .`，可能把日志、实验目录和临时资源一起提交。

如果 WorkBuddy 从 Git 部署，必须先确认远程仓库中已经包含当前工作区的最新应用代码和 `public/` 资源；如果远程仓库不是最新版本，应使用当前工作区制作发布包，或先由用户确认后再做一次明确的 Git 提交。

不要上传：

- `node_modules/`
- `.next/`
- `experiments/`
- 开发日志和临时截图
- `.env*`
- `tmp-*.png`
- `optimized-*.bin`
- `logo.html`
- `extract-avatar.js`
- `replace-project3.ps1`

## 服务器执行顺序

在服务器项目目录执行：

```bash
npm ci
npm run build
npm run start -- -H 127.0.0.1 -p 3000
```

将 Next.js 进程交给 systemd、PM2 或腾讯云进程守护能力托管。Nginx 只反向代理到 `127.0.0.1:3000`，不要把 3000 端口直接暴露到公网。

安全组至少开放 `80` 和 `443`；配置完成后，确认 `3000` 仅本机可访问。

## Next.js 特殊配置

`next.config.ts` 中保留了两个 Demo 重写：

- `/demo/` → `/demo/index.html`
- `/demo/chat-board/` → `/demo/chat-board/index.html`

不要删除 `skipTrailingSlashRedirect` 或上述重写，否则两个静态 Demo 入口可能无法访问。

## 上线验收

WorkBuddy 完成部署后逐项检查：

1. 正式域名 HTTPS 可访问首页。
2. 四个 `/work/...` 项目页面均返回 200。
3. `/demo/` 和 `/demo/chat-board/` 均能打开。
4. 项目三显示 8 张页面，不出现第 9 个占位符。
5. 点击简历下载，文件名为 `张雍简历.png` 或英文对应文件名。
6. 点击作品集下载，文件名为 `张雍作品集.pdf`，页数为 33 页。
7. UI Trace 视频可以播放或至少能正常加载视频资源。
8. EdgeOne HTTPS、域名解析和源站回源均正常。
9. 公网不能直接访问服务器的 3000 端口。
10. 记录 `npm run build` 的结果；若失败，先保留完整错误日志，不要为了上线删除页面或资源。

## 已准备好的辅助文件

- `scripts/preflight-deploy.ps1`：部署前只读预检，不运行完整 build。
- `docs/tencent-cloud-deployment.md`：腾讯云、Nginx、EdgeOne、COS 部署说明。
- `docs/release-inventory.md`：线上资源与历史候选资源清单。
- `README.md`：项目运行和发布入口说明。

## 交接边界

WorkBuddy 可以执行：服务器初始化、文件上传、Node.js 安装、依赖安装、生产构建、进程托管、Nginx、EdgeOne、域名、HTTPS、COS 和线上验收。

WorkBuddy 不应擅自执行：删除项目图片、删除 Demo、改变页面布局、重构组件、替换项目文案、修改项目三图片映射，或把历史占位 PDF 重新接回下载入口。
