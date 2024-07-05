'use strict'
let swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1500
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    },
    pagination: {
        el: '.swiper-pagination', 
        type: 'bullets', 
        clickable: true, 
    },
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    },
    scrollbar: {
        el: '.swiper-scrollbar', 
    },
});

window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.scrollAnimation');
    boxes.forEach(function(box) {
    const distanceToBox = box.offsetTop;
    if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
    }
    });
});