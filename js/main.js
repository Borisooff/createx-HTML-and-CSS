$(function () {

    var mixer = mixitup('.direction__list');

    $('.direction__filter-btn').on('click', function () {
        $('.direction__filter-btn').removeClass('direction__filter-btn--active')
        $(this).addClass('direction__filter-btn--active')
    })

    $('.team__slider').slick({
        waitForAnimate: false,
        arrows: false,
        slidesToShow: 4,
        draggble: false,
        appendArrows: $('.team__slider-arrows'),
        responsive:
            [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
    })

    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        waitForAnimate: false,
        arrows: false,
        slidesToShow: 1,
        draggble: false,
        dots: true,
        appendArrows: $('.testimonials__arrow'),
        appendDots: $('.testimonials__dots'),
    })

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    // $('.program__accardion-link').on('click', function (e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__accardion-link--active')
    //     $(this).children('.program__acc-text').slideToggle()
    // }) //Если все открыты
    $('.program__accardion-link').on('click', function (e) {
        e.preventDefault()
        // $('.program__accardion-link').removeClass('program__accardion-link--active')
        // $('.program__acc-text').slideUp()
        // $(this).toggleClass('program__accardion-link--active')       
        if ($(this).hasClass('program__accardion-link--active')) {
            $(this).removeClass('program__accardion-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__accardion-link').removeClass('program__accardion-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__accardion-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })

    $(".header__nav-list a, .header__top-btn, .footer__go-top, .header__content-btns a, .footer__site-map a").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault()
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 50
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1000);
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0);

    $(".burger, .overlay, .header__top a").on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--opened')
    })

    $('.footer__top-title--slide').on('click', function(){
        $(this).next().slideToggle(''),
        $(this).toggleClass('footer__slide--active')
    })
})
