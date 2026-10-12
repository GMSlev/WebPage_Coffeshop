(function () {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('.slide'));
    const dots = Array.from(carousel.querySelectorAll('.dot'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let atual = 0;
    let timer = null;

    function mostrar(indice) {
        atual = (indice + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle('ativo', i === atual));
        dots.forEach((d, i) => {
            d.classList.toggle('ativo', i === atual);
            if (i === atual) d.setAttribute('aria-current', 'true');
            else d.removeAttribute('aria-current');
        });
    }

    function iniciar() {
        if (reduceMotion || timer) return;
        timer = setInterval(() => mostrar(atual + 1), 5000);
    }

    function parar() {
        clearInterval(timer);
        timer = null;
    }

    carousel.querySelectorAll('.carousel-btn').forEach((btn) => {
        btn.addEventListener('click', () => mostrar(atual + Number(btn.dataset.dir)));
    });
    dots.forEach((dot) => {
        dot.addEventListener('click', () => mostrar(Number(dot.dataset.slide)));
    });

    // Pausa quando o usuário interage com o carrossel
    carousel.addEventListener('mouseenter', parar);
    carousel.addEventListener('mouseleave', iniciar);
    carousel.addEventListener('focusin', parar);
    carousel.addEventListener('focusout', iniciar);

    // Deslizar no celular
    let inicioX = null;
    const viewport = carousel.querySelector('.carousel-viewport');
    viewport.addEventListener('touchstart', (e) => { inicioX = e.touches[0].clientX; parar(); }, { passive: true });
    viewport.addEventListener('touchend', (e) => {
        if (inicioX !== null) {
            const dx = e.changedTouches[0].clientX - inicioX;
            if (Math.abs(dx) > 40) mostrar(atual + (dx < 0 ? 1 : -1));
        }
        inicioX = null;
        iniciar();
    });

    iniciar();
})();
