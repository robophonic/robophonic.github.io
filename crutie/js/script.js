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