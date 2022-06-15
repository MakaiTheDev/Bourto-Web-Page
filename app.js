//Swpier JS Video Slider
var swiper = new Swiper('.swiper', {
    observer: true,
     observeParents: true,
     loop: true,
     spaceBetween: 20,
     slidesPerView: 5,
     freeMode: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true, 
     pagination: {
       el: '.swiper-pagination',
       type: 'progressbar',
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     breakpoints: {
        960: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        720: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
    }
});

