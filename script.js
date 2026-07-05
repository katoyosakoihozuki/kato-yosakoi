document.addEventListener('DOMContentLoaded', () => {

    // 1. メインビジュアルのスライドショー制御 (Swiper)
    const swiper = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade', // なめらかに切り替わるフェード効果
        autoplay: {
            delay: 4000, // 4秒ごとに自動切り替え
            disableOnInteraction: false,
        },
        speed: 1500, // 切り替えにかかる時間（1.5秒）
    });

    // 2. スマホ用メニュー（ハンバーガーメニュー）の開閉処理
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    burger.addEventListener('click', () => {
        // メニューの表示・非表示を切り替え
        nav.classList.toggle('nav-active');
        // 三本線アイコンのアニメーション切り替え
        burger.classList.toggle('toggle');
    });

    // メニュー内のリンクをクリックしたら自動でメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    // 3. スクロールアニメーションの制御 (画面に入ったらふわっと浮き出る)
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const observerOptions = {
        root: null, // 画面全体を基準にする
        rootMargin: '0px',
        threshold: 0.1 // 対象セクションが10%見えたらアニメーション開始
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // 1度表示されたら監視を終了して負荷を減らす
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
