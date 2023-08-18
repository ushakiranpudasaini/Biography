document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        perPage: 4,
        rewind: true,
        height: 400,
         autoplay: 'true',
        type: 'loop',
        gap: '6',
    });
    splide.mount();
});