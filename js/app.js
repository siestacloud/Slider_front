let images = [{
    url: "img/i12.png",
    title: "Rostov-on-Don, Admiral"
}, {
    url: "img/i2.png",
    title: "Sochi Thieves"
}, {
    url: "img/i3.png",
    title: "Rostov-on-Don Patriotic"
}];



function initSlider(opt) {
    if (!images || !images.length) return;
    opt = opt || {
        titles: true,
        dots: true,
        autoplay: true,
        autoplayInterval: 5000
    }

    // ишу элементы
    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");



}
options = {
    dots: true,
    titles: true,
    autoplay: true,
    autoplayInterval: 5000
}

document.addEventListener("DOMContentLoaded", function () {
    initSlider(options)
});
