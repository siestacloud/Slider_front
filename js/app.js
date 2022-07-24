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


// initSlider реализует функциональность слайдера
function initSlider(opt) {
    // проверка опций, уст дефолтнве значения
    if (!images || !images.length) return;
    opt = opt || {
        titles: true,
        dots: true,
        autoplay: true,
        autoplayInterval: 5000
    }

    // поиск элементов в DOM
    let sliderImages = document.querySelector(".slider__images"); // блок с картинками
    let sliderArrows = document.querySelectorAll(".slider__click"); // блоки с кнопками (NodeList)
    let sliderDots = document.querySelector(".slider__dots"); //блок с пунктами (точками) (only desktop)
    let sliderItems = document.querySelector(".slider__items"); // блок с ссылками над слайдером (only desktop)


    initImages(); // добавляю imgs в DOM
    initArrows(); // добавляю обработчик для всех кнопок(стрелок) в DOM
    initDots(); // добавляю dots в DOM, вешаю обработчик

    if (opt.titles) {
        initTitles(); // добавляю ссылки над слайдером, вешаю обработчик
    }

    if (options.autoplay) {
        initAutoplay(); // перемещаю класс active с заданным интервалом
    }


    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url})"; data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        })
    }


    function initArrows() {
        sliderArrows.forEach(Arr => {

            Arr.querySelectorAll(".slider__arrow").forEach(arrow => { // добавляю 1 обработчик на 2 элемента
                arrow.addEventListener("click", function () {
                    console.log("ok");

                    let curNumber = +sliderImages.querySelector(".active").dataset.index; //определяю номер активного элемента
                    let nextNumber;
                    if (arrow.classList.contains("left")) {
                        nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                    } else {
                        nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                    }
                    moveSlider(nextNumber)
                });
            });
        })
    }


    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}" ></div>`
            sliderDots.innerHTML += dot;
            sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
                dot.addEventListener("click", function () {
                    moveSlider(this.dataset.index)
                })
            })
        });
    }


    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        if (options.dots) {
            sliderDots.querySelector(".active").classList.remove("active");
            sliderDots.querySelector(".n" + num).classList.add("active");
        }
        if (opt.titles) {
            sliderItems.querySelector(".active").classList.remove("active");
            sliderItems.querySelector(".n" + num).classList.add("active");
        }
    }

    function initTitles() {
        images.forEach((image, index) => {
            let titleDiv = `<div class="slider__item mod__hover_solid n${index} ${index === 0 ? "active" : ""}"  data-index="${index}">${images[index].title}</div>`;
            sliderItems.innerHTML += titleDiv;
            sliderItems.querySelectorAll(".slider__item").forEach(title => {
                title.addEventListener("click", function () {
                    console.log();

                    moveSlider(this.dataset.index)
                })
            })
        });
    };



    function initAutoplay() {
        setInterval(() => {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
            moveSlider(nextNumber);
        }, options.autoplayInterval);
    }


}
options = {
    dots: true,
    titles: true,
    autoplay: true,
    autoplayInterval: 5000
}

// Точка входа
document.addEventListener("DOMContentLoaded", function () {
    initSlider(options)
});
