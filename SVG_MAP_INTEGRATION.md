# SVG世界地图集成指南

## 📋 概述

本指南将帮助你集成你下载的椭圆版本SVG世界地图到访客统计系统中。

## 🗺️ 步骤1：准备SVG地图文件

### 方法一：使用外部SVG文件
1. 将你的SVG地图文件重命名为 `world-map.svg`
2. 将文件放在 `images/` 目录下
3. 确保SVG文件可以在浏览器中正常显示

### 方法二：直接嵌入SVG内容
1. 打开你的SVG地图文件
2. 复制SVG内容（从 `<svg>` 标签开始到 `</svg>` 结束）
3. 将内容粘贴到 `js/svg-map-config.js` 文件中的 `SVG_WORLD_MAP` 变量

## 🔧 步骤2：配置地图参数

### 调整地图尺寸
在 `js/svg-map-config.js` 中修改 `MAP_CONFIG`：

```javascript
const MAP_CONFIG = {
    width: 800,    // 地图宽度
    height: 400,   // 地图高度
    // ... 其他配置
};
```

### 调整椭圆投影参数
如果你的地图使用不同的投影方式，可以调整这些参数：

```javascript
const MAP_CONFIG = {
    centerX: 400,  // 地图中心X坐标
    centerY: 200,  // 地图中心Y坐标
    radiusX: 350,  // 椭圆X轴半径
    radiusY: 180,  // 椭圆Y轴半径
    // ... 其他配置
};
```

## 📍 步骤3：调整坐标转换

### 检查坐标转换函数
在 `js/svg-map-config.js` 中的 `convertCoordinates` 函数：

```javascript
function convertCoordinates(lng, lat) {
    // 根据你的地图调整这个函数
    const centerX = MAP_CONFIG.centerX;
    const centerY = MAP_CONFIG.centerY;
    const radiusX = MAP_CONFIG.radiusX;
    const radiusY = MAP_CONFIG.radiusY;
    
    // 椭圆投影公式
    const lngRad = (lng * Math.PI) / 180;
    const latRad = (lat * Math.PI) / 180;
    
    const x = centerX + radiusX * Math.cos(lngRad);
    const y = centerY + radiusY * Math.sin(latRad);
    
    return {
        x: Math.max(10, Math.min(MAP_CONFIG.width - 10, x)),
        y: Math.max(10, Math.min(MAP_CONFIG.height - 10, y))
    };
}
```

### 测试坐标转换
使用测试页面验证坐标转换是否正确：

1. 访问 `map-test-advanced.html`
2. 输入已知城市的经纬度坐标
3. 检查访客点是否出现在正确位置

## 🎨 步骤4：自定义样式

### 调整访客点样式
在 `MAP_CONFIG` 中修改：

```javascript
const MAP_CONFIG = {
    visitorDotRadius: 4,           // 普通访客点半径
    currentVisitorDotRadius: 6,    // 当前访客点半径
    visitorDotColor: '#4a90e2',   // 普通访客点颜色
    currentVisitorDotColor: '#ff6b6b', // 当前访客点颜色
    // ... 其他配置
};
```

### 调整地图样式
```javascript
const MAP_CONFIG = {
    backgroundColor: '#f8f9fa',    // 背景颜色
    mapOpacity: 0.8,              // 地图透明度
    strokeColor: '#ccc',           // 边框颜色
    strokeWidth: 1,                // 边框宽度
    fillColor: '#e9ecef',         // 填充颜色
    // ... 其他配置
};
```

## 🧪 步骤5：测试和调试

### 创建测试页面
我已经创建了 `map-test-advanced.html` 测试页面，包含：

- 显示世界地图
- 测试坐标转换
- 添加测试访客
- 自定义访客位置

### 调试技巧
1. **检查控制台**：打开浏览器开发者工具查看错误信息
2. **验证SVG文件**：确保SVG文件格式正确
3. **测试坐标**：使用已知城市坐标测试位置标注
4. **调整参数**：根据实际效果调整投影参数

## 📁 文件结构

```
Academic-Department-Website/
├── images/
│   └── world-map.svg          # 你的SVG地图文件
├── js/
│   ├── ellipse-world-map.js   # 椭圆世界地图访客统计器
│   ├── svg-map-config.js      # SVG地图配置文件
│   └── google-analytics.js    # Google Analytics集成
├── about.html                 # 关于页面（使用新地图）
└── map-test-advanced.html     # 地图测试页面
```

## 🔍 常见问题

### Q: 地图显示不正确？
A: 检查SVG文件路径和格式，确保文件可以正常加载。

### Q: 访客位置标注不准确？
A: 调整 `convertCoordinates` 函数中的投影参数。

### Q: 地图太大或太小？
A: 修改 `MAP_CONFIG` 中的 `width` 和 `height` 参数。

### Q: 如何添加更多地图样式？
A: 在 `createEllipseWorldMap` 函数中修改SVG样式属性。

## 📞 技术支持

如果遇到问题：
1. 检查浏览器控制台的错误信息
2. 验证SVG文件格式
3. 测试坐标转换函数
4. 调整地图配置参数

---

*最后更新：2025年1月* 