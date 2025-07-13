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

// 首页打字动画
window.addEventListener('DOMContentLoaded', function() {
  const mask = document.getElementById('typing-mask');
  // 判断是否首页（有打字动画）
  if (mask) {
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
    });
  }
});

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
window.addEventListener('DOMContentLoaded', interceptLinks); 