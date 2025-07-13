// 页面滚动淡入动画
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
fadeEls.forEach(el => observer.observe(el));

// 返回顶部按钮
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop && backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 按钮点击波纹动效
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple');
  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) ripple.remove();
  button.appendChild(circle);
}
const rippleBtns = document.querySelectorAll('button, .btn, .join-method a');
rippleBtns.forEach(btn => {
  btn.addEventListener('click', createRipple);
});

// 首页轮播图初始化
function initHomeCarousel() {
  const carouselItems = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentIndex = 0;
  let carouselTimer = null;
  let isPaused = false;

  console.log('主页轮播图: 图片数量=', carouselItems.length, '圆点数量=', dots.length);

  function showSlide(idx) {
    if (idx < 0 || idx >= carouselItems.length) return;
    
    // 移除所有active类
    carouselItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // 添加active类到当前项
    carouselItems[idx].classList.add('active');
    dots[idx].classList.add('active');
    
    currentIndex = idx;
    console.log('切换到第', idx + 1, '张图片');
  }
  
  function nextSlide() {
    const nextIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(nextIndex);
  }
  
  function prevSlide() {
    const prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(prevIndex);
  }
  
  function startCarousel() {
    if (carouselTimer) clearInterval(carouselTimer);
    if (!isPaused) {
      carouselTimer = setInterval(nextSlide, 4000);
      console.log('启动自动轮播');
    }
  }
  
  function stopCarousel() {
    if (carouselTimer) {
      clearInterval(carouselTimer);
      carouselTimer = null;
      console.log('停止自动轮播');
    }
  }
  
  function pauseCarousel() {
    isPaused = true;
    stopCarousel();
  }
  
  function resumeCarousel() {
    isPaused = false;
    startCarousel();
  }
  
  if (carouselItems.length > 0) {
    console.log('初始化轮播图...');
    
    // 确保第一张图片显示
    showSlide(0);
    
    // 启动自动轮播
    startCarousel();
    
    // 绑定按钮事件
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('点击下一张按钮');
        stopCarousel();
        nextSlide();
        startCarousel();
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('点击上一张按钮');
        stopCarousel();
        prevSlide();
        startCarousel();
      });
    }
    
    // 绑定圆点事件
    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('点击圆点', i + 1);
        stopCarousel();
        showSlide(i);
        startCarousel();
      });
    });
    
    // 鼠标悬停暂停轮播
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
      heroCarousel.addEventListener('mouseenter', () => {
        console.log('鼠标进入，暂停轮播');
        pauseCarousel();
      });
      heroCarousel.addEventListener('mouseleave', () => {
        console.log('鼠标离开，恢复轮播');
        resumeCarousel();
      });
    }
    
    // 添加触摸滑动支持
    let startX = 0;
    let endX = 0;
    
    heroCarousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    
    heroCarousel.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // 最小滑动距离
        if (diff > 0) {
          console.log('向左滑动，下一张');
          stopCarousel();
          nextSlide();
          startCarousel();
        } else {
          console.log('向右滑动，上一张');
          stopCarousel();
          prevSlide();
          startCarousel();
        }
      }
    });
    
    // 添加键盘支持
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        stopCarousel();
        prevSlide();
        startCarousel();
      } else if (e.key === 'ArrowRight') {
        stopCarousel();
        nextSlide();
        startCarousel();
      }
    });
    
    console.log('轮播图初始化完成');
    
    // 添加全局测试函数
    window.testCarousel = function() {
      console.log('手动测试轮播功能');
      const items = document.querySelectorAll('.carousel-item');
      const dots = document.querySelectorAll('.carousel-dots .dot');
      console.log('找到轮播项:', items.length);
      console.log('找到圆点:', dots.length);
      
      // 测试切换到第二张图片
      if (items.length > 1) {
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        items[1].classList.add('active');
        dots[1].classList.add('active');
        console.log('手动切换到第二张图片');
      }
    };
  } else {
    console.log('未找到轮播图元素');
  }
}

// ===== 打字动画 =====
function showTypingAnimation(text, callback) {
  const mask = document.getElementById('typing-mask');
  const typingText = mask ? mask.querySelector('.typing-text') : null;
  if (!mask || !typingText) { callback && callback(); return; }
  let i = 0;
  function type() {
    typingText.textContent = text.slice(0, i);
    if (i < text.length) {
      i++;
      setTimeout(type, text[i-1] === '\n' ? 600 : 80);
    } else {
      setTimeout(() => {
        mask.style.opacity = 0;
        setTimeout(() => {
          mask.style.display = 'none';
          callback && callback();
        }, 600);
      }, 600);
    }
  }
  mask.style.display = 'flex';
  mask.style.opacity = 1;
  type();
}

function showToast(msg) {
  const toast = document.getElementById('global-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// 页面跳转加载动画
function interceptLinks() {
  document.querySelectorAll('a').forEach(a => {
    if (a.target === '_blank' || a.href.startsWith('mailto:') || a.href.includes('#')) return;
    a.addEventListener('click', function(e) {
      if (a.href && a.href !== window.location.href) {
        e.preventDefault();
        const targetPage = a.href.split('/').pop() || 'index.html';
        // 只有不是loading.html时才清除fromLoading，防止重复加载
        if (!window.location.pathname.endsWith('loading.html')) {
          sessionStorage.removeItem('fromLoading');
        }
        window.location.href = `loading.html?page=${targetPage}`;
      }
    });
  });
}

// 活动掠影页面轮播图
function initActivityCarousels() {
  const activityCarousels = document.querySelectorAll('.activity-carousel');
  console.log('找到活动轮播图数量:', activityCarousels.length);

  activityCarousels.forEach((carousel, carouselIndex) => {
    const images = carousel.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    let currentIndex = 0;
    
    console.log(`轮播图 ${carouselIndex + 1}: 图片数量=${images.length}, 上一张按钮=${!!prevBtn}, 下一张按钮=${!!nextBtn}`);
    
    // 确保第一张图片显示
    if (images.length > 0) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === 0);
      });
    }
    
    function showActivitySlide(idx) {
      console.log(`轮播图 ${carouselIndex + 1}: 切换到第 ${idx + 1} 张图片`);
      images.forEach((img, i) => {
        img.classList.toggle('active', i === idx);
      });
      currentIndex = idx;
    }
    
    function nextActivitySlide() {
      const nextIndex = (currentIndex + 1) % images.length;
      showActivitySlide(nextIndex);
    }
    
    function prevActivitySlide() {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      showActivitySlide(prevIndex);
    }
    
    // 绑定按钮事件
    if (prevBtn) {
      prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(`轮播图 ${carouselIndex + 1}: 点击上一张按钮`);
        prevActivitySlide();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(`轮播图 ${carouselIndex + 1}: 点击下一张按钮`);
        nextActivitySlide();
      });
    }
    
    // 添加触摸滑动支持
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', function(e) {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // 最小滑动距离
        if (diff > 0) {
          nextActivitySlide(); // 向左滑动，下一张
        } else {
          prevActivitySlide(); // 向右滑动，上一张
        }
      }
    });
    
    // 添加键盘支持
    carousel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        prevActivitySlide();
      } else if (e.key === 'ArrowRight') {
        nextActivitySlide();
      }
    });
    
    // 设置轮播图可聚焦
    carousel.setAttribute('tabindex', '0');
  });
}

// 统一的DOMContentLoaded事件处理
window.addEventListener('DOMContentLoaded', function() {
  // 初始化页面跳转
  interceptLinks();
  
  // 首页打字动画（仅首次进入播放）
  const mask = document.getElementById('typing-mask');
  if (mask) {
    if (!localStorage.getItem('hasSeenTyping')) {
      // 只显示打字动画，其它内容隐藏
      Array.from(document.body.children).forEach(child => {
        if (child !== mask) child.style.display = 'none';
      });
      mask.style.display = 'flex';
      showTypingAnimation('欢迎来到本站\n这里是数院学生会学术组', function() {
        mask.style.display = 'none';
        // 显示主页内容
        Array.from(document.body.children).forEach(child => {
          if (child !== mask) child.style.display = '';
        });
        // 标记已看过打字动画
        localStorage.setItem('hasSeenTyping', 'true');
        // 打字动画完成后初始化轮播图
        setTimeout(() => {
          initHomeCarousel();
          initActivityCarousels();
        }, 100);
      });
    } else {
      // 已看过，直接显示主页内容
      mask.style.display = 'none';
      Array.from(document.body.children).forEach(child => {
        if (child !== mask) child.style.display = '';
      });
      // 直接初始化轮播图
      setTimeout(() => {
        initHomeCarousel();
        initActivityCarousels();
      }, 100);
    }
  } else {
    // 没有打字动画，直接初始化轮播图
    setTimeout(() => {
      initHomeCarousel();
      initActivityCarousels();
    }, 100);
  }
}); 