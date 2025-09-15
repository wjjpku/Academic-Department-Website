# 北京大学数学科学学院学生会学术组官方网站

## 项目简介

这是北京大学数学科学学院学生会学术组的官方网站，采用现代化的响应式设计，为师生提供学术交流、活动信息、团队介绍等功能的综合性平台。

## 主要功能

- **首页轮播展示**: 动态轮播图展示学术组活动精彩瞬间
- **活动掠影**: 丰富的活动照片展示和详细介绍
- **九章征解**: 数学挑战题目发布与PDF解答下载
- **团队风采**: 学术组成员介绍和团队文化展示
- **倾听心声**: 用户反馈收集系统
- **关于本站**: 网站介绍和发展历程
- **加载动画**: 优雅的页面加载过渡效果

## 技术特色

- **HTML5**: 语义化页面结构
- **CSS3**: 现代化样式与动画效果
- **JavaScript ES6+**: 交互逻辑与功能实现
- **响应式设计**: 完美适配桌面端、平板和移动设备
- **现代化UI**: 深蓝主题色系，界面简洁美观
- **流畅动画**: 页面滚动淡入效果、按钮波纹动效
- **打字动画**: 首页独特的欢迎文字动画效果
- **轮播图系统**: 首页大图轮播，活动页面图片轮播
- **加载页面**: 页面间跳转的流畅加载动画
- **Markdown支持**: 九章征解页面支持Markdown格式题目显示
- **云端部署**: 支持Cloudflare Workers部署

## 文件结构

```
Academic-Department-Website/
├── index.html              # 首页（带轮播图和打字动画）
├── main.js                 # 主要JavaScript功能文件
├── wrangler.jsonc          # Cloudflare Workers配置文件
├── html/                   # 页面文件目录
│   ├── about.html          # 关于本站页面
│   ├── activities.html     # 活动掠影页面
│   ├── challenge.html      # 九章征解（数学挑战）页面
│   ├── feedback.html       # 倾听心声（反馈）页面
│   ├── join.html           # 加入我们页面
│   ├── loading.html        # 页面加载动画
│   └── team.html           # 团队风采页面
├── css/
│   └── styles.css          # 主样式文件
├── js/
│   ├── google-analytics.js # Google Analytics配置
│   ├── marked.min.js       # Markdown解析库
│   └── svg-map-config.js   # SVG地图配置文件
├── images/                 # 图片资源（活动照片、首页轮播图等）
├── pdfs/                   # PDF文档（九章征解题目等）
├── challenges/             # 挑战题目Markdown文件
│   └── issue1.md          # 挑战题目1
├── templates/              # 模板文件目录
├── CNAME                   # 域名配置文件
└── LICENSE                 # MIT许可证文件
```

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 移动端支持

- 响应式设计，完美适配各种屏幕尺寸
- 触摸友好的交互界面
- 优化的移动端导航栏

## 开发说明

### 本地开发
- 所有页面文件位于 `html/` 目录，主页为根目录的 `index.html`
- 样式文件统一在 `css/styles.css` 中维护
- 主要交互逻辑在根目录的 `main.js` 中实现
- 图片资源存放在 `images/` 目录
- PDF文档存放在 `pdfs/` 目录

### 功能模块
- **加载系统**: 页面间跳转会自动显示loading动画
- **轮播组件**: 首页和活动页面的图片轮播功能
- **Markdown渲染**: 使用marked.js渲染九章征解的题目内容
- **响应式导航**: 自适应移动端的导航菜单

### 部署配置
- 支持GitHub Pages部署（使用CNAME文件）
- 支持Cloudflare Workers部署（使用wrangler.jsonc配置）

## 更新日志

### v3.0.0 (最新)
- ✅ 重构项目结构，页面文件移至html目录
- ✅ 添加页面加载动画系统
- ✅ 优化首页轮播图功能
- ✅ 集成Markdown渲染支持
- ✅ 添加Cloudflare Workers部署支持
- ✅ 优化移动端响应式设计

### v2.0.0
- ✅ 优化页面结构和样式
- ✅ 添加地图功能
- ✅ 简化页面架构

### v1.0.0
- ✅ 基础网站功能
- ✅ 响应式设计
- ✅ 活动展示系统

## 联系方式

- **邮箱**: wjj_math@stu.pku.edu.cn
- **地址**: 北京大学数学科学学院
- **微信公众号**: SMS Stu Union

## 许可证

本项目采用 MIT 许可证，详见 [LICENSE](LICENSE) 文件。

---

*本项目由北京大学数学科学学院学生会学术组开发和维护*
