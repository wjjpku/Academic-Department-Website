# 北京大学数学科学学院学生会学术组网站

## 项目简介

这是北京大学数学科学学院学生会学术组的官方网站，展示学术组的活动、团队成员和相关信息。

## 功能特性

- **响应式设计**：适配各种设备屏幕
- **现代化UI**：采用北大红主题色，界面美观
- **独立加载页面**：统一的加载动画体验
- **打字动画**：首页独特的欢迎动画
- **轮播图展示**：首页活动图片轮播
- **评论系统**：基于Giscus的GitHub评论
- **数学公式支持**：支持LaTeX数学公式渲染

## 页面结构

- `index.html` - 首页（包含打字动画）
- `activities.html` - 活动掠影
- `team.html` - 团队风采
- `join.html` - 加入我们
- `feedback.html` - 倾听心声（评论系统）
- `challenge.html` - 九章征解题目与解答
- `loading.html` - 独立加载页面

## 加载页面系统

网站采用统一的加载页面系统：

1. **独立加载页面**：`loading.html` 包含完整的加载动画
2. **自动重定向**：直接访问任何页面都会先跳转到加载页面
3. **进度显示**：动态进度条和轮换提示信息
4. **预加载优化**：自动预加载目标页面资源

### 使用方法

- 直接访问任何页面（如 `index.html`）会自动跳转到 `loading.html?page=index.html`
- 页面间导航也会通过加载页面进行跳转
- 加载完成后自动跳转到目标页面

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和动画
- **JavaScript** - 交互逻辑
- **Marked.js** - Markdown解析
- **MathJax** - 数学公式渲染
- **Giscus** - GitHub评论系统

## 文件结构

```
Academic-Department-Website/
├── index.html          # 首页
├── activities.html     # 活动页面
├── team.html          # 团队页面
├── join.html          # 加入页面
├── feedback.html      # 反馈页面
├── challenge.html     # 九章征解页面
├── loading.html       # 加载页面
├── main.js           # 主要JavaScript逻辑
├── css/
│   └── styles.css    # 样式文件
├── js/
│   └── marked.min.js # Markdown解析库
├── images/           # 图片资源
├── challenges/       # 九章征解题目文件
└── pdfs/            # PDF解答文件
```

## 开发说明

### 添加新页面

1. 创建新的HTML文件
2. 在head部分添加重定向脚本：
```javascript
<script>
    if (!sessionStorage.getItem('fromLoading')) {
        sessionStorage.setItem('fromLoading', 'true');
        window.location.href = 'loading.html?page=新页面.html';
    }
</script>
```

### 修改加载动画

编辑 `loading.html` 文件中的样式和JavaScript逻辑。

## 部署

网站为纯静态网站，可直接部署到任何静态网站托管服务上，如：
- GitHub Pages
- Netlify
- Vercel
- 阿里云OSS
- 腾讯云COS

## 许可证

MIT License
