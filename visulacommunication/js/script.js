	//nav
	$(window).scroll(function() {
	    return $(".navbar").toggleClass("navbar_fixed", $(window).scrollTop() > 0)
	})

	$('.age .nav-tabs>li a.digital_design_link, .digital_design_l').click(function() {
	    $('.collapse.navbar-collapse').removeClass('active1');
	    $('.digital_design_menu').addClass('active1');
	    $('.tab-pane').removeClass('active');
	    $('.tab-pane').removeClass('in');
	    $('#DIGITALDESIGN').addClass('active');
	    $('#DIGITALDESIGN').addClass('in');
	    $('.age .nav-tabs>li').removeClass('active');
	    $('.DIGITAL').addClass('active');
	    $('.bs-example-navbar-collapse-1, .bs-example-navbar-collapse-2').toggleClass('active');
	});
	$('.age .nav-tabs>li a.smart_design_link, .smart_design_l').click(function() {
	    $('.collapse.navbar-collapse').removeClass('active1');
	    $('.smart_design_menu').addClass('active1');
	    $('.tab-pane').removeClass('active');
	    $('.tab-pane').removeClass('in');
	    $('#SMARTDESIGN').addClass('active');
	    $('#SMARTDESIGN').addClass('in');
	    $('.age .nav-tabs>li').removeClass('active');
	    $('.SMART').addClass('active');
	    $('.bs-example-navbar-collapse-1, .bs-example-navbar-collapse-2').toggleClass('active');
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

	$(function() {
	    //маска
	    $(".phone").inputmask("+38(999)99-99-999");
	    //	форма регистрации
	    $("#registration-form").on('submit', function(e) {
	        $('#registration-btn').addClass('inactive');
	        $('#registration-btn').prop('disabled', true);
	        e.preventDefault();
	        var $form = $(this);
	        $.ajax({
	            type: 'POST',
	            url: 'http://goiteens.ua/registration/index.php',
	            dataType: 'json',
	            data: $form.serialize(),
	            success: function(response) {
	                console.info(response);
	                if (response.status == 'success') {
	                    $form.hide();
	                    $('.modal-title').hide();
	                    $('.modal-info').hide();
	                    $form.html('<p class="callback-success-info callback-success-info-ru"><b>Спасибо!</b>Ваша заявка принята, ожидайте звонка нашего менеджера! </p> <p class="callback-success-info callback-success-info-ua"><b>Дякую! </b> Ваша заявка прийнята, чекайте дзвінка нашого менеджера! </p>').show();

	                    dataLayer.push({
	                        'event': 'Form_Submit'
	                    });

	                }
	            }
	        })
	    });
	});


    $("#course, #city").click(function() {
        if ($('#course').val() == 'digital_design' && $('#city').val() == 'kiev') {
            $('.price_summ').val('2500');
            $('#registrationType').val('digitalKiev');
        } else if ($('#course').val() == 'digital_design' && $('#city').val() == 'lviv') {
            $('.price_summ').val('2000');
            $('#registrationType').val('digitalLviv');
        } else if ($('#course').val() == 'digital_design' && $('#city').val() == 'kharkov') {
            $('.price_summ').val('2000');
            $('#registrationType').val('digitalKharkov');
        } else if ($('#course').val() == 'digital_design' && $('#city').val() == 'odessa') {
            $('.price_summ').val('2000');
            $('#registrationType').val('digitalOdessa');
        } else if ($('#course').val() == 'smart_design' && $('#city').val() == 'kiev') {
            $('.price_summ').val('3000');
            $('#registrationType').val('smartKiev');
        } else if ($('#course').val() == 'smart_design' && $('#city').val() == 'lviv') {
            $('.price_summ').val('2500');
            $('#registrationType').val('smartLviv');
        } else if ($('#course').val() == 'smart_design' && $('#city').val() == 'kharkov') {
            $('.price_summ').val('2500');
            $('#registrationType').val('smartKharkov');
        } else if ($('#course').val() == 'smart_design' && $('#city').val() == 'odessa') {
            $('.price_summ').val('2500');
            $('#registrationType').val('smartOdessa');
        }
    });
//    $("#course, #city").click(function() {
//        if ($('#course').val() == 'PRO' && $('#city').val() == 'kharkov') {
//            $('.price_summ').css('background', 'red');
//            $("#registration-btn").prop("disabled", true);
//            $('.price_summ_ua').val('Виберіть інший курс');
//            $('.price_summ_ru').val('Выберите другой курс');
//        } else if ($('#course').val() == 'PRO' && $('#city').val() == 'odessa') {
//            $('.price_summ').css('background', 'red');
//            $("#registration-btn").prop("disabled", true);
//            $('.price_summ_ua').val('Виберіть інший курс');
//            $('.price_summ_ru').val('Выберите другой курс');
//        } else {
//            $('.price_summ').css('background', '#f5f4f4');
//            $("#registration-btn").prop("disabled", false);
//        }
//    });