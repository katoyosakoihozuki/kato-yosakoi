document.addEventListener('DOMContentLoaded', () => {

    // 1. スライドショー (Swiper)
    const swiper = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade', // フェード
        autoplay: {
            delay: 4000, // 4秒
            disableOnInteraction: false,
        },
        speed: 1500, // 1.5秒
    });

    // 2. スマホメニュー
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    // 3. スクロールアニメーション
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10%
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
