# 北京大学数学科学学院学生会学术组官网
(Academic Department, SMS Student Union, PKU)

欢迎访问北京大学数学科学学院学生会学术组官方网站仓库。本网站旨在搭建师生桥梁，引领学术风尚，服务同学成长，提供学术资源共享、活动发布与回顾、九章征解互动等功能。

## 🌟 功能特色

*   **九章征解**：在线发布每期征解题目，支持 Markdown + KaTeX 数学公式渲染，提供往期解答下载及在线提交入口。
*   **学术资源**：汇聚选课手册、双学位方案、专业资料及常用链接，方便同学们快速获取信息。
*   **模拟期中**：提供历年模拟期中考试题及解答下载，助力新生备考。
*   **活动掠影**：展示学术组举办的各类讲座、沙龙、面试模拟等活动精彩瞬间。
*   **团队风采**：介绍学术组现任及往届成员，展示团队文化。
*   **响应式设计**：基于 Tailwind CSS 开发，完美适配桌面端与移动端访问。

## 🛠 技术栈

本项目采用现代前端技术栈构建，注重性能与开发体验：

*   **核心框架**: [React 18](https://react.dev/)
*   **构建工具**: [Vite](https://vitejs.dev/)
*   **编程语言**: [TypeScript](https://www.typescriptlang.org/)
*   **样式方案**: [Tailwind CSS](https://tailwindcss.com/)
*   **路由管理**: [React Router v6](https://reactrouter.com/)
*   **动画效果**: [Framer Motion](https://www.framer.com/motion/)
*   **图标库**: [Lucide React](https://lucide.dev/)
*   **Markdown渲染**: [marked](https://marked.js.org/) + [KaTeX](https://katex.org/)

## 🚀 快速开始

如果您想在本地运行本项目，请遵循以下步骤：

### 环境要求
*   Node.js >= 16.0.0
*   npm 或 yarn

### 安装与运行

1.  **克隆仓库**
    ```bash
    git clone https://github.com/wjjpku/Academic-Department-Website.git
    cd Academic-Department-Website
    ```

2.  **安装依赖**
    ```bash
    npm install
    ```

3.  **启动开发服务器**
    ```bash
    npm run dev
    ```
    访问 `http://localhost:5173` 即可预览。

4.  **构建生产版本**
    ```bash
    npm run build
    ```

## 📂 项目架构与原理

本项目经过深度模块化重构，采用**配置驱动（Configuration Driven）**的设计理念，实现了内容与代码的分离。

### 目录结构

```
src/
├── components/     # 通用 UI 组件 (Navbar, Footer, Card 等)
├── config/         # [核心] 网站内容配置中心
│   ├── modules/    # 各板块独立配置文件
│   │   ├── activities.ts   # 活动数据
│   │   ├── challenges.ts   # 征解题目配置
│   │   ├── resources.ts    # 资源列表
│   │   └── ...
│   └── index.ts    # 统一导出入口
├── pages/          # 页面组件 (对应路由)
├── types/          # TypeScript 类型定义
└── ...
public/             # 静态资源 (图片、PDF、Markdown)
```

### 核心原理：配置驱动
绝大多数网站内容的更新（如发布新活动、添加新资源、更新团队成员）**无需修改页面代码**，只需修改 `src/config/modules/` 下对应的 TypeScript 配置文件即可。

例如，要添加一个新的学术资源，只需编辑 `src/config/modules/resources.ts`，在 `items` 数组中追加对象即可，页面会自动渲染。

## 🤝 贡献指南

我们热烈欢迎所有同学参与到网站的维护与改进中来！

### 1. 内容更新（适合非开发者）
如果您只是想更新网站内容（如上传新一期征解、添加讲座预告）：
1.  Fork 本仓库。
2.  将相关资源文件（图片、PDF）上传至 `public/` 对应目录。
3.  修改 `src/config/modules/` 下对应的 `.ts` 配置文件。
4.  提交 Pull Request (PR)。

### 2. 代码开发（适合开发者）
如果您想改进网站功能、修复 Bug 或优化 UI：
1.  **Fork & Clone**：Fork 项目到您的仓库并克隆到本地。
2.  **创建分支**：
    ```bash
    git checkout -b feat/your-feature-name
    # 或
    git checkout -b fix/your-bug-fix
    ```
3.  **开发与提交**：进行代码修改，确保本地 `npm run dev` 运行正常且无报错。
4.  **提交 PR**：Push 代码到您的仓库，并向本仓库的 `main` 分支发起 Pull Request。
    *   PR 标题请遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范（如 `feat: add dark mode`, `fix: mobile layout issue`）。
    *   请在描述中简要说明修改内容。

### 注意事项
*   **静态资源引用**：在配置文件中引用 `public` 目录下的资源时，路径应以 `/` 开头（例如 `/images/activity1.jpg`）。
*   **Markdown 文件**：征解题目的详细内容推荐使用 Markdown 编写，放置在 `public/challenges/` 下，并通过配置文件的 `contentPath` 字段引用。

## 📄 许可证

本项目基于 MIT License 开源。详情请参阅 [LICENSE](LICENSE) 文件。

---
© 2025 SMS Academic Department, Peking University.
