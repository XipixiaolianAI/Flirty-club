// 添加视觉元素和装饰效果
document.addEventListener('DOMContentLoaded', function() {
    // 添加装饰点
    function addDecorationDots() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            // 为每个部分添加5-10个装饰点
            const dotsCount = Math.floor(Math.random() * 6) + 5;
            
            for (let i = 0; i < dotsCount; i++) {
                const dot = document.createElement('div');
                dot.classList.add('decoration-dot');
                
                // 随机位置
                const top = Math.floor(Math.random() * 100);
                const left = Math.floor(Math.random() * 100);
                
                // 随机大小
                const size = Math.floor(Math.random() * 6) + 5;
                
                dot.style.top = `${top}%`;
                dot.style.left = `${left}%`;
                dot.style.width = `${size}px`;
                dot.style.height = `${size}px`;
                
                // 随机透明度
                dot.style.opacity = (Math.random() * 0.5 + 0.1).toFixed(2);
                
                section.appendChild(dot);
            }
            
            // 添加1-2个装饰圆
            const circlesCount = Math.floor(Math.random() * 2) + 1;
            
            for (let i = 0; i < circlesCount; i++) {
                const circle = document.createElement('div');
                circle.classList.add('decoration-circle');
                
                // 随机位置
                const top = Math.floor(Math.random() * 100);
                const left = Math.floor(Math.random() * 100);
                
                // 随机大小
                const size = Math.floor(Math.random() * 150) + 100;
                
                circle.style.top = `${top}%`;
                circle.style.left = `${left}%`;
                circle.style.width = `${size}px`;
                circle.style.height = `${size}px`;
                
                // 随机透明度
                circle.style.opacity = (Math.random() * 0.1 + 0.05).toFixed(2);
                
                section.appendChild(circle);
            }
        });
    }
    
    // 添加动画类
    function addAnimationClasses() {
        // 为标题添加动画
        const headings = document.querySelectorAll('h2, h3');
        headings.forEach((heading, index) => {
            heading.classList.add('animate-fadeInUp');
            heading.style.animationDelay = `${index * 0.1}s`;
        });
        
        // 为卡片添加动画
        const cards = document.querySelectorAll('.model-card, .feature-card, .plan-card, .goal-card, .strategy-card, .challenge-card, .step-card, .optimization-card, .phase-card');
        cards.forEach((card, index) => {
            card.classList.add('animate-fadeInUp');
            card.style.animationDelay = `${0.2 + index * 0.1}s`;
        });
        
        // 为CTA按钮添加脉冲动画
        const ctaButtons = document.querySelectorAll('.cta .btn');
        ctaButtons.forEach(button => {
            button.classList.add('animate-pulse');
        });
    }
    
    // 创建Logo
    function createLogo() {
        const logoContainers = document.querySelectorAll('.logo');
        
        logoContainers.forEach(container => {
            // 检查是否已经有logo-container
            if (container.querySelector('.logo-container')) {
                return;
            }
            
            // 保存原始内容
            const originalContent = container.innerHTML;
            
            // 创建新的logo容器
            const logoContainer = document.createElement('div');
            logoContainer.classList.add('logo-container');
            
            // 创建logo文本
            const logoText = document.createElement('div');
            logoText.classList.add('logo-text');
            logoText.textContent = 'Flirty';
            
            // 创建logo图标
            const logoIcon = document.createElement('div');
            logoIcon.classList.add('logo-icon');
            logoIcon.innerHTML = '<i class="fas fa-heart"></i>';
            
            // 组装logo
            logoContainer.appendChild(logoText);
            logoContainer.appendChild(logoIcon);
            
            // 替换原始内容
            container.innerHTML = '';
            
            // 创建链接包装
            const logoLink = document.createElement('a');
            logoLink.href = 'index.html';
            logoLink.appendChild(logoContainer);
            
            container.appendChild(logoLink);
        });
    }
    
    // 执行视觉增强
    setTimeout(() => {
        addDecorationDots();
        addAnimationClasses();
        // 暂时不替换Logo，保留原始Logo
        // createLogo();
    }, 100);
    
    // 选项卡功能增强
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有按钮的active类
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // 添加当前按钮的active类
            this.classList.add('active');
            
            // 获取目标面板
            const targetId = this.getAttribute('data-tab');
            
            // 隐藏所有面板
            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // 显示目标面板
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // 移动端菜单切换
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (nav.style.display === 'block') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'block';
                nav.style.position = 'absolute';
                nav.style.top = '70px';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = 'white';
                nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                nav.style.padding = '20px';
            }
        });
    }
    
    // 在窗口调整大小时重置导航样式
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.style.display = '';
            nav.style.position = '';
            nav.style.top = '';
            nav.style.left = '';
            nav.style.width = '';
            nav.style.backgroundColor = '';
            nav.style.boxShadow = '';
            nav.style.padding = '';
        }
    });
    
    // 视频播放按钮
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 这里可以添加视频播放逻辑
            alert('视频播放功能将在实际部署时实现');
        });
    });
    
    // 图片懒加载
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // 回退到传统的懒加载
        let lazyLoadThrottleTimeout;
        
        function lazyLoad() {
            if (lazyLoadThrottleTimeout) {
                clearTimeout(lazyLoadThrottleTimeout);
            }
            
            lazyLoadThrottleTimeout = setTimeout(function() {
                const scrollTop = window.pageYOffset;
                
                lazyImages.forEach(function(img) {
                    if (img.offsetTop < window.innerHeight + scrollTop) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                });
                
                if (lazyImages.length === 0) {
                    document.removeEventListener('scroll', lazyLoad);
                    window.removeEventListener('resize', lazyLoad);
                    window.removeEventListener('orientationChange', lazyLoad);
                }
            }, 20);
        }
        
        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationChange', lazyLoad);
    }
});
