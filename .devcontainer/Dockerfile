# 使用官方 Node.js 镜像作为基础镜像
FROM node:20

# 安装一些基本工具
RUN apt-get update && \
    apt-get install -y git curl wget bash

# 安装 Vite 和其他必要工具
RUN npm install -g vite

# 设置默认工作目录
WORKDIR /workspace

# 添加用户（可选，确保容器内的用户与主机系统权限一致）
RUN useradd -m vscode && echo "vscode:vscode" | chpasswd && adduser vscode sudo
USER vscode