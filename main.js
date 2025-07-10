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

// 首页轮播图
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.carousel-dots .dot');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;
let carouselTimer = null;

function showSlide(idx) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle('active', i === idx);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
  currentIndex = idx;
}
function nextSlide() {
  showSlide((currentIndex + 1) % carouselItems.length);
}
function prevSlide() {
  showSlide((currentIndex - 1 + carouselItems.length) % carouselItems.length);
}
function startCarousel() {
  carouselTimer = setInterval(nextSlide, 4000);
}
function stopCarousel() {
  clearInterval(carouselTimer);
}
if (carouselItems.length) {
  startCarousel();
  nextBtn.addEventListener('click', () => { stopCarousel(); nextSlide(); startCarousel(); });
  prevBtn.addEventListener('click', () => { stopCarousel(); prevSlide(); startCarousel(); });
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stopCarousel(); showSlide(i); startCarousel(); });
  });
  // 鼠标悬停暂停轮播
  document.querySelector('.hero-carousel').addEventListener('mouseenter', stopCarousel);
  document.querySelector('.hero-carousel').addEventListener('mouseleave', startCarousel);
}

// ===== 打字动画与加载动画 =====
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
let loaderStartTime = 0;
let loaderProgress = 0;
let loaderAnimating = false;
function animateLoaderBar(target, duration, onComplete) {
  const bar = document.querySelector('#page-loader .loader-bar');
  if (!bar) return;
  loaderAnimating = true;
  const start = loaderProgress;
  const startTime = performance.now();
  function animate(now) {
    const elapsed = now - startTime;
    let percent = start + (target - start) * Math.min(elapsed / duration, 1);
    bar.style.width = (percent * 100) + '%';
    loaderProgress = percent;
    if (elapsed < duration) {
      requestAnimationFrame(animate);
    } else {
      bar.style.width = (target * 100) + '%';
      loaderProgress = target;
      loaderAnimating = false;
      onComplete && onComplete();
    }
  }
  requestAnimationFrame(animate);
}
function showPageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  loader.style.display = 'flex';
  loader.style.opacity = 1;
  document.body.style.overflow = 'hidden';
  loaderStartTime = Date.now();
}
function hidePageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  const elapsed = Date.now() - loaderStartTime;
  const minDuration = 1000; // 至少1秒
  const delay = Math.max(0, minDuration - elapsed);
  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => { loader.style.display = 'none'; document.body.style.overflow = ''; }, 500);
  }, delay);
}
function preloadImages(imgs, onProgress, onComplete) {
  let loaded = 0;
  const total = imgs.length;
  if (total === 0) { onComplete && onComplete(); return; }
  imgs.forEach(src => {
    const img = new window.Image();
    img.onload = img.onerror = () => {
      loaded++;
      onProgress && onProgress(loaded / total);
      if (loaded === total) onComplete && onComplete();
    };
    img.src = src;
  });
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
// 首页打字动画
window.addEventListener('DOMContentLoaded', function() {
  const mask = document.getElementById('typing-mask');
  // 判断是否首页（有打字动画）
  if (mask) {
    // 只显示打字动画，其它内容隐藏
    document.body.style.visibility = 'visible';
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
      // 首页不再显示任何加载动画
    });
  } else {
    // 非首页页面加载动画（只保留闪烁图片，无进度条）
    document.body.style.visibility = 'hidden';
    const loader = document.getElementById('page-loader');
    if (loader) {
      showPageLoader();
      const imgs = Array.from(document.images).map(img => img.src);
      let finished = false;
      let timeout = setTimeout(() => {
        finished = true;
        hidePageLoader();
        showToast('加载失败');
      }, 3000);
      preloadImages(imgs, null, function() {
        if (timeout) clearTimeout(timeout);
        finished = true;
        hidePageLoader();
      });
      setTimeout(() => { document.body.style.visibility = ''; }, 100);
    } else {
      document.body.style.visibility = '';
    }
  }
});
// 页面跳转加载动画
function interceptLinks() {
  document.querySelectorAll('a').forEach(a => {
    if (a.target === '_blank' || a.href.startsWith('mailto:')) return;
    a.addEventListener('click', function(e) {
      if (a.href && a.href !== window.location.href) {
        e.preventDefault();
        showPageLoader();
        // 预加载目标页面图片（简单处理，实际可用ajax预取或直接延时）
        setTimeout(() => { window.location = a.href; }, 800);
      }
    });
  });
}
window.addEventListener('DOMContentLoaded', interceptLinks); 