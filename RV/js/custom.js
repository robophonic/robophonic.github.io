(function($){


//Preloader
	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});
	$(document).ready(function() {
		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 50
		})
	$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});
	$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

//Background image
		$('#intro').backstretch(['images/bg4.jpg']);

//Navbar
		var navbar = $('.navbar');
		var navHeight = navbar.height();
		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});
		if($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}
		$(window).resize(function() {
			if($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});

//Count to
		$('#stats').waypoint(function() {
			$('.timer').each(function() {
				counter = $(this).attr('data-count'),
				$(this).delay(6000).countTo({
					from: 0,
					to: counter,
					speed: 3000,// Stats Counter Speed
					refreshInterval: 50,
				});
			});
		 }, { offset: '70%', triggerOnce: true });


//WOW Animation
		wow = new WOW({
			mobile: false
		});
		wow.init();


//Rotate
		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});


//Portfolio pop up
//		$('#portfolio').magnificPopup({
//			delegate: 'a.pop-up',
//			type: 'image',
//			gallery: {
//				enabled: true,
//				navigateByImgClick: true,
//				preload: [0,1]
//			},
//			image: {
//				titleSrc: 'title',
//				tError: 'The image could not be loaded.',
//			}
//		});
//		$('.video-pop-up').magnificPopup({
//			type: 'iframe'
//		});


//A jQuery plugin for fluid width video embeds
		$(".video").fitVids();


//Contact form ajax
//		$('#contact-form').find('input,textarea').jqBootstrapValidation({
//			preventSubmit: true,
//			submitError: function($form, event, errors) {
				// additional error messages or events
//			},
//			submitSuccess: function($form, event) {
//				event.preventDefault();
//
//				var submit          = $('#contact-form submit');
//				var ajaxResponse    = $('#contact-response');
//				var name            = $('#contact-form [name="name"]').val();
//				var email           = $('#contact-form [name="email"]').val();
//				var message         = $('#contact-form [name="message"]').val();
//
//				$.ajax({
//					type: 'POST',
//					url: 'reg.php',
//					dataType: 'json',
//					data: {
//						name: name,
//						email: email,
//						message: message,
//					},
//					cache: false,
//					beforeSend: function(result) {
//						submit.empty();
//						submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
//					},
//					success: function(result) {
//						if(result.sendstatus == 1) {
//							ajaxResponse.html(result.message);
//							$form.fadeOut(500);
//						} else {
//							ajaxResponse.html(result.message);
//						}
//					}
//				});
//			}
//		});
//
	});


//Contact form
$('#contact-form').on('submit', function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);

        var data = {
            name: $form.find('input[name="name"]').val(),
//            surname: $form.find('input[name="surname"]').val(),
            email: $form.find('input[name="email"]').val(),
//            phone: $form.find('input[name="phone"]').val(),
//            expect: $form.find('textarea[name="expect"]').val(),
//            location: $form.find('input[name="location"]').val(),
//            type: $form.find('select[name="type"]').val(),
//            date: $form.find('input[name="date"]').val(),
            message: $form.find('textarea[name="message"]').val(),
        };

        var script = document.createElement('script');
        script.src = 'https://script.google.com/macros/s/AKfycbweTZ-43dPbSXI4x7M6G6XzmoWC8X9TF64SzK57XLIcSzmUOSs/exec' +
            data.name + '&surname=' + data.surname + '&email=' + data.email + '&phone=' + data.phone + '&expect=' + data.expect +
            '&location=' + data.location + '&type=' + data.type + '&date=' + data.date + '&background=' + data.background;
        script.type = 'text/javascript';
        $("body").append(script);

        setTimeout(function() {
            window.location.href = "s.html";
        }, 500);
    });
})(jQuery);