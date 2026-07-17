@echo off
chcp 65001 >nul
echo ==============================================
echo        张勇个人网站 - 一键同步部署脚本
echo ==============================================
echo.
echo [1/3] 正在暂存本地修改...
git add .
echo.
set /p commit_msg="请输入本次修改的描述说明 (直接回车默认使用 'update portfolio'): "
if "%commit_msg%"=="" set commit_msg="update portfolio"
echo.
echo [2/3] 正在提交到本地仓库...
git commit -m "%commit_msg%"
echo.
echo [3/3] 正在推送至 GitHub 远程仓库...
git push -u origin master
echo.
echo ==============================================
echo   同步命令发送完毕！EdgeOne Makers 将在 1 分钟内自动更新上线。
echo ==============================================
pause
