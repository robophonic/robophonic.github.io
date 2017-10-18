$(function() {

    //owl-carousel
    $('.owl-carousel').owlCarousel({
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 12000, //Время смены слайда
        items: 2,
        loop: false,
        center: true,
        //    autoplay: true,
        margin: 60,
        //    nav: true,
        stopOnHover: true,
        responsive: {
            0: {
                items: 1
            },
            990: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


    //scroll
    $(document).ready(function() {
        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 50
        })
        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('a[href*=#]').bind("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    });

    //	registration
    $('.step3 a, .step2 a, .step1 a').click(function() {
        var text = $(this).parents('.step_box').find('h3').text();
        $('.modal_title').text(text);
        $('.hidden_info').val(text);
    });
    $('header a, .reviews a').click(function() {
        $('.modal_title').text('Заявка');
        $('.hidden_info').val('Заявка');
    });
    $('.registration_form_btn').click(function() {
        $('.myModal .close').trigger('click');
        //				$('body').addClass('active');
    });
    //		    $('.registration, .close').click(function() {
    //				$('body').removeClass('active');
    //    });
    //		    $('.registration .modal-content').click(function() {
    //				$('body').addClass('active');
    //    });

    $('.owl-prev ').text('<');
    $('.owl-next ').text('>');



    $(document).ready(function() {
        $('#email').blur(function() {
            if ($(this).val() != '') {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (pattern.test($(this).val())) {
                    $(this).css({
                        'border': '1px solid #569b44'
                    });
                    $('#registration_btn').addClass('active');
                    $('#registration_btn').prop('disabled', false);
                    $('#valid').text('');
                    $('.modal_info').text('Заполните форму ниже и с вами свяжется наш менеджер');
                    $('.icon-check').removeClass('active');
                    $('.icon-warning-empty').removeClass('active');
                    $("#registration_form").on('submit', function(e) {
                        $('#registration_btn').addClass('inactive');
                        $('#registration_btn').prop('disabled', true);
                        $('#registration_btn').text('Готово');
                        $('.icon-check').addClass('active');
                        $('.icon-warning-empty').removeClass('active');
                        $('.modal_info').text('Заявка успешно отправлена');
                        var email_text = $('#email').val();
                        $('.email_text').text(email_text);

                        e.preventDefault();
                        var $form = $(this);
                        $.ajax({
                            type: 'POST',
                            url: 'reg.php',
                            dataType: 'json',
                            data: $form.serialize(),
                            success: function(response) {
                                console.info(response);
                                if (response.status == 'success') {

                                }
                            }
                        })
                    });

                } else {
                    $(this).css({
                        'border': '1px solid #ff0000'
                    });
                    $('.icon-check').removeClass('active');
                    $('.icon-warning-empty').addClass('active');
                    $('#valid').text('Не верно введен email');
                    $('.modal_info').text('Произошла ошибка. Пожалуйста повторите попытку еще раз.');
                    $('#registration_btn').addClass('inactive');
                    $('#registration_btn').prop('disabled', true);
                }
            } else {
                $(this).css({
                    'border': '1px solid red'
                });
                $('.icon-check').removeClass('active');
                $('.icon-warning-empty').addClass('active');
                $('#valid').text('Поле email не должно быть пустым');
            }
        });
    });



});