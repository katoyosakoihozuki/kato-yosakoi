document.addEventListener('DOMContentLoaded', () => {

    // 1. スライドショー (Swiper)
    const swiper = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1500,
    });

    // 2. スマホ用 ハンバーガーメニュー
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
            }
        });
    });

    // 3. スクロールアニメーション (Intersection Observer)
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
});

// ==========================================
// 写真ポップアップ（モーダル）を開閉する関数
// ==========================================
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    // 背面のスクロールを禁止
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    // 背面のスクロールを許可
    document.body.style.overflow = 'auto';
}
