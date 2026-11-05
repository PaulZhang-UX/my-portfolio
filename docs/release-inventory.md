# 发布资源清单

这份清单用于腾讯云上线前确认“必须上传什么”和“哪些内容暂时不要动”。它不执行删除操作。

## 当前代码实际引用的资源

### 下载文件

- `public/zhang-yong-resume.png`
- `public/zhang-yong-portfolio.pdf`

### 项目封面

- `public/projects/covers/project-01.png`
- `public/projects/covers/project-02.png`
- `public/projects/covers/project-03.png`
- `public/projects/covers/project-04.png`
- `public/projects/covers/project-01-red.png`
- `public/projects/covers/project-02-red.png`
- `public/projects/covers/project-03-red.png`
- `public/projects/covers/project-04-red.png`

### 项目案例

- `public/projects/mirror/`
- `public/projects/ui-trace/`
- `public/projects/meituan/`
- `public/projects/chatgpt-progress/1.png` 至 `8.png`
- `public/projects/chat-board/Group-999.png`

### Demo、视频、音乐

- `public/demo/`
- `public/videos/ui-trace/workflow.mp4`
- `public/music/song1.mp3` 至 `song3.mp3`

### 头像与页面资源

- `public/avatar.png`
- `public/avatar-hermes.png`
- `public/avatar-hermes-light.png`
- `public/avatar-magazine.png`
- `public/avatar-magazine-portrait.webp`
- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`

## 需要人工确认的历史或重复资源

以下内容目前没有被应用源码直接引用，不能在没有确认的情况下删除，但可以作为后续归档或减重候选：

- `public/portfolio/chatgpt-redesign/`：与项目三图片重复的另一套目录，含 `01–08` 和 `17–24` 命名版本。
- `public/projects/chatgpt-progress/17.png` 至 `24.png`：与项目三当前 `1.png` 至 `8.png` 内容重复。
- `public/projects/mirror/*-v20260806-2.png`：Mirror 的带版本后缀图片。
- `public/projects/mirror/content-01.png` 至 `content-09.png`：当前源码未直接引用的 Mirror 资源。
- `public/touxiang.html`：当前源码未发现引用。
- `experiments/`、`logo.html`、`extract-avatar.js`、`replace-project3.ps1`：开发或历史维护资料，不应进入生产发布包。

## 体积重点

当前 `public/` 约 498MB：

- `public/demo/`：约 290MB
- `public/videos/`：约 109MB
- `public/projects/`：约 49MB
- `public/portfolio/`：约 17MB
- `public/music/`：约 11MB

第一次上线可以保留完整 `public/`，以减少路径变更风险。若服务器存储或带宽有限，优先把 `public/videos/ui-trace/workflow.mp4` 迁移到 COS；迁移前必须同步修改视频 URL、CORS 和缓存策略。

## Git 发布边界

当前工作区同时存在已修改、未跟踪和历史开发文件。不要直接使用会执行 `git add .` 的旧脚本。建议人工确认后只提交：

- `app/`
- `components/`
- `content/`
- `context/`
- `utils/`
- `public/` 中确认要上线的资源
- `package.json`、`package-lock.json`、`next.config.ts`、`tsconfig.json`、`postcss.config.mjs`、`eslint.config.mjs`
- `docs/` 和 `scripts/preflight-deploy.ps1`
