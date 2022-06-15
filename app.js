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
});

