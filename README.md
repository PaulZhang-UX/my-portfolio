# Zhang Yong Portfolio

张雍的个人作品集网站，基于 Next.js App Router 构建，包含首页、四个项目案例、两个交互 Demo、音乐播放器、简历和作品集下载。

## 页面与资源

- `/`：首页（Magazine / Hermes 两种视觉入口）
- `/work/mirror`：Mirror 项目
- `/work/ui-trace`：UI Trace 项目
- `/work/chatgpt-redesign`：ChatGPT 进展板项目
- `/work/meituan`：美团移动体验研究项目
- `/demo/`：Mirror 交互 Demo
- `/demo/chat-board/`：ChatGPT 进展板 Web / Mobile Demo
- `/zhang-yong-resume.png`：简历下载
- `/zhang-yong-portfolio.pdf`：33 页作品集下载

## 本地开发

```bash
npm ci
npm run dev
```

打开 <http://localhost:3000>。

开发预览使用 `next dev --webpack`。不要把开发服务器当作生产服务使用；此前的开发进程曾因反复编译和大体积静态资源出现高内存占用。

## 发布前检查

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\preflight-deploy.ps1
```

该检查只验证关键文件、下载入口、Demo 路由和静态资源，不代替生产构建。

## 生产运行

Next.js 官方 Node.js 自托管流程为：

```bash
npm ci
npm run build
npm run start -- -H 127.0.0.1 -p 3000
```

腾讯云部署、Nginx / EdgeOne、COS 迁移和资源清单见 [docs/tencent-cloud-deployment.md](docs/tencent-cloud-deployment.md) 与 [docs/release-inventory.md](docs/release-inventory.md)。

交给腾讯 WorkBuddy 执行最终部署时，优先阅读 [docs/workbuddy-handoff.md](docs/workbuddy-handoff.md)。

## 目录说明

- `app/`：页面路由与全局样式
- `components/`：页面、案例和交互组件
- `content/`：项目文案和章节配置
- `public/`：项目图片、Demo、视频、音乐、简历和作品集文件
- `scripts/`：发布前检查脚本和历史维护脚本

不要提交 `node_modules/`、`.next/`、日志、临时截图、实验目录或环境变量文件。当前工作区仍包含一批历史未提交文件，正式上线前请先人工确认 Git 提交边界。
