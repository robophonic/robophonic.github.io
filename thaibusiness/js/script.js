$(function() {
	
//owl-carousel
$('.owl-carousel').owlCarousel({
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 12000, //Время смены слайда
	  items:4,
    loop:false,
    center:true,
//    autoplay: true,
    margin: 60,
//    nav: true,
    stopOnHover: true,
    //	  animateIn: 'fadeIn',
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
	
});
