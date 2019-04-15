$(window).on("load", function () {

    //    menu

//        $('.menu_slider').slick({
//            dots: true,
//            arrows: true,
//            pauseOnFocus: true,
//            pauseOnHover: true,
//            autoplaySpeed: 5000,
//            speed: 1500,
//            adaptiveHeight: true,
//            slidesToShow: 1,
//            slidesToScroll: 1,
//            autoplay: true,
//        });

    //    $('.dropdown-menu').toggleClass('active');
    //    setTimeout(function () {
    //        $('.dropdown-menu').slideDown(1);
    //        $('.dropdown-menu').slideUp(1);
    //        $('.dropdown-menu').toggleClass('active');
    //    }, 100);

    $('.owl-carousel').owlCarousel({
        smartSpeed: 1500,
        autoplayTimeout: 5000,
        autoplay: true,
        margin: 20,
        loop: true,
        nav: true,
        autoplayHoverPause: true,
        dots: false,
//        autoHeight:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    if ($(window).width() > 768) {
        $('.dropdown').hover(function () {
            $(this).find('.dropdown-menu').slideToggle(10);
            //            $('.menu_slider').slick('slickNext');
        });
    }
    if ($(window).width() < 768) {
        $('.dropdown').click(function () {
            $(this).find('.dropdown-menu').slideToggle(10);
            //            $('.menu_slider').slick('slickNext');
        });
        $('.dropdown > a').removeAttr('href');
    };
    //nav
    $('.navbar-toggle').click(function () {
        $('.navbar-collapse').slideToggle(400);
    });
    //плагин сколла
    $(".content").mCustomScrollbar();


    $('.box_title').click(function () {
        $(this).parent('.box').find('.box_main').slideToggle(400);
        $(this).toggleClass('active');
    });

    //search
    $('.b-search button').hover(function () {
        $('.b-search').addClass('active');
        setTimeout(function () {
            $('.b-search button').attr('type', 'submit');
        }, 10);
    });
    $('.wrapp').click(function () {
        $('.b-search').removeClass('active');
        setTimeout(function () {
            $('.b-search button').attr('type', 'button');
        }, 10);
    });
    //    carousel
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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
    }
  ]
    });
    $('.reviews_slider').slick({
        dots: true,
        arrows: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        speed: 1500,
        adaptiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
    }
  ]
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
    $('.about_company_slider').slick({
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
    $('.section_main_slide').slick({
        dots: true,
        arrows: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        speed: 1500,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        //        autoplay: true,
    });






});
