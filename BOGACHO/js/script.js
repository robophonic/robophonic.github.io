$(window).on("load", function () {
    //    menu
    $('.dropdown').hover(function () {
        $(this).find('.dropdown-menu').slideToggle(10);
    });
    $('.dropdown').click(function () {
        $(this).find('.dropdown-menu').slideToggle(400);
    });
    //nav
    $('.navbar-toggle').click(function () {
        $('.navbar-collapse').slideToggle(400);
    });
    //плагин сколла
    $(".content").mCustomScrollbar();
    //sort
    $('.view_box span').click(function () {
        $('.view_box span').removeClass('active');
        $(this).addClass('active');
    });
    $('.view_box .grid').click(function () {
        $('.products').removeClass('list');
    });

    $('.view_box .list').click(function () {
        $('.products').addClass('list');
    });


    $('.sort_box span').click(function () {
        $('.sort_box span').removeClass('active');
        $(this).addClass('active');
    });

    $('.box_title').click(function () {
        $(this).parent('.box').find('.box_main').slideToggle(400);
        $(this).toggleClass('active');
    });

    //    price
    $("#price").slider({
        from: 8000,
        to: 50000,
        heterogeneity: ['50/40000'],
        step: 1000,
        limits: false,
        dimension: '&nbsp;p'
    });
    //search
    $('.b-search').hover(function () {
        $('.b-search').addClass('active');
    });
    $('body').click(function () {
        $('.b-search').removeClass('active');
    });
    //    carousel
    $('.advertising_slider').slick({
        dots: true,
        arrows: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        speed: 1500,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });
    $('.reviews_slider').slick({
        dots: true,
        arrows: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        speed: 1500,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
    }

      ]
    });
    $('.product_slider').slick({
        dots: true,
        arrows: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        speed: 2000,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
    }
  ]
    });
    $('.gallery_slider').slick({
        dots: true,
        arrows: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        speed: 1500,
        adaptiveHeight: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
    }
  ]
    });
    $('.slider-for').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: false,
        infinite: true,
        adaptiveHeight: true
    });
    $('.slider-nav').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        infinite: true,
        adaptiveHeight: true
    });
    $('.card-slider-for').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card-slider-nav',
        autoplay: false,
        infinite: true,
        adaptiveHeight: true
    });
    $('.card-slider-nav').slick({
        dots: false,
        arrows: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.card-slider-for',
        focusOnSelect: true,
        infinite: true,
        vertical: true,
        adaptiveHeight: true
    });

    $('.nav-tabs').click(function () {
        $('.product_slider ').slick('slickNext');
    });









});
