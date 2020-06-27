$(window).on("load", function () {

    if ($(window).width() < 991) {
        $('.packages .row').addClass('slider');
    }

    $('.slider').slick({
        dots: true,
        arrows: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        speed: 2000,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });

    $('.mob_menu_icon').click(function () {
        $(this).toggleClass('active');
        $('header').toggleClass('active');
    });

    $('.chat_room_btn, .btn_close').click(function () {
        $('.chat_room').toggleClass('active');
    });

    $('a[href*=#]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    $("form").on('submit', function (e) {
        console.log('113');
        e.preventDefault();
        var $form = $(this);
        $.ajax({
            type: 'POST',
            url: 'send.php',
            dataType: 'json',
            data: $form.serialize(),
        });
        $($form).hide();
        $($form).html('<p class="callback-success-info">Спасибо! Ваше письмо отправленно </p>').show();
    });
});
