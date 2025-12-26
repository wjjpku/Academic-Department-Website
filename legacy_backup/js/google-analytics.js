// Google Analytics 4 集成
class GoogleAnalyticsManager {
    constructor() {
        this.measurementId = 'G-XXXXXXXXXX'; // 替换为你的GA4测量ID
        this.isInitialized = false;
        this.init();
    }
    
    init() {
        // 加载Google Analytics脚本
        this.loadGAScript();
        
        // 初始化数据层
        window.dataLayer = window.dataLayer || [];
        
        // 配置GA4
        window.gtag = function() {
            dataLayer.push(arguments);
        };
        
        gtag('js', new Date());
        gtag('config', this.measurementId, {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
                'custom_parameter_1': 'visitor_type',
                'custom_parameter_2': 'page_category'
            }
        });
        
        this.isInitialized = true;
        console.log('Google Analytics 已初始化');
        
        // 绑定页面事件
        this.bindPageEvents();
    }
    
    loadGAScript() {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
        document.head.appendChild(script);
    }
    
    // 跟踪页面访问
    trackPageView(pageName, pageCategory = 'general') {
        if (!this.isInitialized) return;
        
        gtag('event', 'page_view', {
            page_title: pageName,
            page_category: pageCategory,
            custom_parameter_1: 'academic_website',
            custom_parameter_2: pageCategory
        });
        
        console.log(`页面访问已跟踪: ${pageName}`);
    }
    
    // 跟踪自定义事件
    trackEvent(eventName, eventCategory, eventAction, eventLabel = null) {
        if (!this.isInitialized) return;
        
        gtag('event', eventName, {
            event_category: eventCategory,
            event_action: eventAction,
            event_label: eventLabel,
            custom_parameter_1: 'academic_website'
        });
        
        console.log(`事件已跟踪: ${eventName} - ${eventCategory} - ${eventAction}`);
    }
    
    // 跟踪用户交互
    trackUserInteraction(elementType, elementName, interactionType) {
        this.trackEvent('user_interaction', elementType, interactionType, elementName);
    }
    
    // 跟踪下载事件
    trackDownload(fileName, fileType) {
        this.trackEvent('file_download', 'download', 'click', `${fileName} (${fileType})`);
    }
    
    // 跟踪外部链接点击
    trackExternalLink(url, linkText) {
        this.trackEvent('external_link', 'link', 'click', `${linkText} -> ${url}`);
    }
    
    // 跟踪表单提交
    trackFormSubmit(formAction, formName) {
        this.trackEvent('form_submit', 'form', 'submit', `${formName} -> ${formAction}`);
    }
    
    // 跟踪九章征解题目查看
    trackChallengeView(challengeName) {
        this.trackEvent('challenge_view', 'challenge', 'view', challengeName);
    }
    
    // 跟踪活动查看
    trackActivityView(activityName) {
        this.trackEvent('activity_view', 'activity', 'view', activityName);
    }
    
    // 绑定页面事件
    bindPageEvents() {
        // 跟踪PDF下载
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.href.includes('.pdf')) {
                const fileName = e.target.href.split('/').pop();
                this.trackDownload(fileName, 'PDF');
            }
        });
        
        // 跟踪外部链接
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.href.startsWith('http') && 
                !e.target.href.includes(window.location.hostname)) {
                this.trackExternalLink(e.target.href, e.target.textContent);
            }
        });
        
        // 跟踪按钮点击
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.classList.contains('btn')) {
                this.trackUserInteraction('button', e.target.textContent, 'click');
            }
        });
        
        // 跟踪表单提交
        document.addEventListener('submit', (e) => {
            if (e.target.tagName === 'FORM') {
                this.trackFormSubmit(e.target.action, e.target.name || 'unknown_form');
            }
        });
        
        // 跟踪九章征解题目点击
        document.addEventListener('click', (e) => {
            if (e.target.closest('.challenge-item') || e.target.closest('.challenge-link')) {
                const challengeName = e.target.textContent || e.target.closest('.challenge-item')?.textContent;
                if (challengeName) {
                    this.trackChallengeView(challengeName);
                }
            }
        });
        
        // 跟踪活动查看
        document.addEventListener('click', (e) => {
            if (e.target.closest('.activity-item') || e.target.closest('.activity-link')) {
                const activityName = e.target.textContent || e.target.closest('.activity-item')?.textContent;
                if (activityName) {
                    this.trackActivityView(activityName);
                }
            }
        });
    }
    
    // 跟踪当前页面
    trackCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const pageCategory = this.getPageCategory(currentPage);
        this.trackPageView(document.title, pageCategory);
    }
    
    // 获取页面分类
    getPageCategory(pageName) {
        const categories = {
            'index.html': 'homepage',
            'activities.html': 'activities',
            'team.html': 'team',
            'join.html': 'join',
            'feedback.html': 'feedback',
            'challenge.html': 'challenge',
            'about.html': 'about'
        };
        return categories[pageName] || 'general';
    }
}

// 导出Google Analytics管理器
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GoogleAnalyticsManager;
} 