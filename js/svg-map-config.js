// SVG地图配置文件
const SVG_MAP_CONFIG = {
    // 地图文件路径
    mapFile: 'world.svg',
    
    // 地图尺寸 (基于world.svg的实际尺寸)
    mapWidth: 2000,
    mapHeight: 857,
    
    // 显示容器尺寸
    containerWidth: 800,
    containerHeight: 600,
    
    // 地图投影参数 (基于真实世界地图)
    projection: {
        // 经度范围 (-180 到 180)
        longitudeMin: -180,
        longitudeMax: 180,
        
        // 纬度范围 (-90 到 90)
        latitudeMin: -90,
        latitudeMax: 90,
        
        // 地图边界 (基于SVG坐标)
        mapBounds: {
            left: 0,
            right: 2000,
            top: 0,
            bottom: 857
        }
    },
    
    // 坐标转换函数
    coordinateConverter: {
        // 将地理坐标转换为SVG坐标
        geoToSvg: function(lat, lng) {
            // 标准化经纬度
            const normalizedLng = (lng + 180) / 360; // 0-1
            const normalizedLat = (90 - lat) / 180;   // 0-1 (翻转Y轴)
            
            // 转换为SVG坐标
            const x = normalizedLng * 2000;
            const y = normalizedLat * 857;
            
            return { x: Math.round(x), y: Math.round(y) };
        },
        
        // 将SVG坐标转换为地理坐标
        svgToGeo: function(x, y) {
            // 标准化SVG坐标
            const normalizedX = x / 2000;
            const normalizedY = y / 857;
            
            // 转换为地理坐标
            const lng = normalizedX * 360 - 180;
            const lat = 90 - normalizedY * 180;
            
            return { lat: Math.round(lat * 100) / 100, lng: Math.round(lng * 100) / 100 };
        }
    },
    
    // 访客标记样式
    visitorMarker: {
        radius: 4,
        fillColor: '#ff4444',
        strokeColor: '#ffffff',
        strokeWidth: 2,
        opacity: 0.8
    },
    
    // 地图样式
    mapStyle: {
        fill: '#e6e6e6',
        stroke: '#cccccc',
        strokeWidth: 0.5
    },
    
    // 调试模式
    debug: false
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SVG_MAP_CONFIG;
} 