# 北京大学数学科学学院学生会学术组网站

## 📖 项目简介

这是北京大学数学科学学院学生会学术组的官方网站，致力于为数学学院师生提供学术交流平台。网站采用现代化的响应式设计，展示学术组的各类活动、团队成员信息以及数学竞赛题目等内容。

## ✨ 主要功能特性

### 🎨 用户体验
- **响应式设计**：完美适配桌面端、平板和移动设备
- **现代化UI**：采用深蓝主题色系，界面简洁美观
- **流畅动画**：页面滚动淡入效果、按钮波纹动效
- **打字动画**：首页独特的欢迎文字动画效果

### 🖼️ 多媒体展示
- **轮播图系统**：首页大图轮播，活动页面图片轮播
- **图片优化**：自动适配不同屏幕尺寸，支持触摸滑动
- **加载动画**：统一的页面加载体验

### 📚 学术功能
- **九章征解**：数学竞赛题目展示与解答系统
- **Markdown支持**：题目内容支持Markdown格式
- **数学公式**：集成MathJax，完美渲染LaTeX数学公式
- **PDF资源**：模拟考试试题和解答文档

### 💬 互动功能
- **评论系统**：基于Giscus的GitHub评论集成
- **反馈机制**：倾听心声页面收集用户反馈
- **团队展示**：成员风采展示页面

## 🏗️ 页面结构

| 页面 | 功能描述 | 特色功能 |
|------|----------|----------|
| `index.html` | 首页 | 打字动画、轮播图、最新发布、致谢 |
| `activities.html` | 活动掠影 | 四大活动展示、图片轮播 |
| `team.html` | 团队风采 | 成员信息展示 |
| `join.html` | 加入我们 | 招募信息、联系方式 |
| `feedback.html` | 倾听心声 | 评论系统集成 |
| `challenge.html` | 九章征解 | 数学题目展示、解答系统 |
| `loading.html` | 加载页面 | 统一加载体验 |

## 🔧 技术架构

### 前端技术栈
- **HTML5** - 语义化页面结构
- **CSS3** - 现代化样式与动画
- **JavaScript ES6+** - 交互逻辑与功能实现
- **Marked.js** - Markdown内容解析
- **MathJax** - 数学公式渲染引擎
- **Giscus** - GitHub评论系统集成

### 核心功能模块

#### 1. 加载页面系统
```javascript
// 自动重定向机制
if (!sessionStorage.getItem('fromLoading')) {
    sessionStorage.setItem('fromLoading', 'true');
    window.location.href = 'loading.html?page=目标页面.html';
}
```

#### 2. 轮播图组件
- 自动轮播（4秒间隔）
- 手动控制（按钮、圆点）
- 触摸滑动支持
- 键盘导航支持
- 鼠标悬停暂停

#### 3. 数学公式渲染
```javascript
// MathJax配置
function renderMathJax() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        return MathJax.typesetPromise();
    }
}
```

## 📁 项目结构

```
Academic-Department-Website/
├── 📄 页面文件
│   ├── index.html          # 首页
│   ├── activities.html     # 活动掠影
│   ├── team.html          # 团队风采
│   ├── join.html          # 加入我们
│   ├── feedback.html      # 倾听心声
│   ├── challenge.html     # 九章征解
│   └── loading.html       # 加载页面
├── 📁 样式与脚本
│   ├── css/
│   │   └── styles.css     # 主样式文件 (1600+ 行)
│   ├── js/
│   │   └── marked.min.js  # Markdown解析库
│   └── main.js           # 主要JavaScript逻辑 (422 行)
├── 📁 内容资源
│   ├── images/           # 图片资源 (20+ 张)
│   ├── challenges/       # 九章征解题目文件
│   │   └── issue1.md    # 第一期题目
│   └── pdfs/            # PDF解答文件
│       ├── midterm1.pdf # 24年数学类模拟试题
│       └── midterm2.pdf # 23年数学类模拟试题
└── 📄 项目文档
    ├── README.md         # 项目说明
    └── LICENSE          # MIT许可证
```

## 🎯 四大核心活动

### 1. 学术PIZZA沙龙
- **目的**：增进本科生对学科前沿的理解
- **特色**：邀请知名教授与学生深入交流
- **最新举办**：2025-05-13

### 2. 分系讲座&手册
- **目的**：帮助同学们明晰分系方向
- **特色**：邀请学长学姐分享分系心得
- **最新举办**：2025-04-26

### 3. 数学一小时
- **目的**：帮助有志于学术的同学们增长见识
- **特色**：邀请著名教授讲授前沿内容
- **最新举办**：2025-05-22

### 4. 四推模拟面试
- **目的**：帮助大三同学熟悉四推面试
- **特色**：邀请大四本科生或博士生作为面试官
- **最新举办**：2025-04-12

## 🚀 开发指南

### 环境要求
- 现代浏览器（Chrome 80+, Firefox 75+, Safari 13+）
- 本地服务器（推荐使用 Live Server）

### 添加新页面
1. 创建新的HTML文件
2. 在`<head>`部分添加重定向脚本：
```html
<script>
    if (!sessionStorage.getItem('fromLoading')) {
        sessionStorage.setItem('fromLoading', 'true');
        window.location.href = 'loading.html?page=新页面.html';
    }
</script>
```

### 添加新活动
1. 在`activities.html`中添加新的`<article>`区块
2. 准备活动图片并放入`images/`目录
3. 更新活动信息和链接

### 添加九章征解题目
1. 在`challenges/`目录创建新的`.md`文件
2. 在`challenge.html`中添加题目链接
3. 准备PDF解答文件放入`pdfs/`目录

## 🎨 设计特色

### 深蓝主题色系
```css
:root {
  --main-gradient: linear-gradient(90deg, #232946 0%, #394867 100%);
  --main-color: #232946;
  --main-color-dark: #1a1f2b;
  --main-color-light: #5f6f94;
  --main-accent: #a7bbc7;
}
```

### 响应式断点
- **桌面端**：≥1400px
- **平板端**：900px - 1399px
- **手机端**：≤899px
- **小屏手机**：≤480px

## 📱 移动端优化

- 触摸友好的导航栏
- 手势支持的轮播图
- 优化的按钮尺寸和间距
- 适配不同屏幕密度的图片

## 🌐 部署说明

### 静态网站托管
网站为纯静态网站，支持部署到以下平台：
- **GitHub Pages** - 免费托管
- **Netlify** - 自动部署
- **Vercel** - 快速部署
- **阿里云OSS** - 国内访问
- **腾讯云COS** - 国内访问

### 部署步骤
1. 克隆项目到本地
2. 上传到托管平台
3. 配置自定义域名（可选）
4. 启用HTTPS（推荐）

## 🤝 贡献指南

### 如何贡献
1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 代码规范
- 使用语义化的HTML标签
- 遵循CSS命名规范
- JavaScript使用ES6+语法
- 保持代码注释的完整性

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源许可证。

## 🙏 致谢

感谢所有为学术组发展做出贡献的老师、同学和朋友们！

特别感谢：
- 北京国际数学研究中心的各位教授与工作人员
- 每一位参与学术活动的同学
- 肖梁教授对学术组的悉心指导与支持

---

**北京大学数学科学学院学生会学术组**  
*让数学之美在北大绽放*
