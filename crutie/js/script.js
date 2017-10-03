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

	//	форма регистрации
	$("#registration-form").on('submit', function(e) {
	    $('#registration-btn').addClass('inactive');
	    $('#registration-btn').prop('disabled', true);
	    var $form = $(this);
	    $form.hide();
	    $('.modal-title').hide();
	    $('.modal-info').hide();
	    $form.html('<p class="callback-success-info"><b>Спасибо!</b></p>').show();
	    e.preventDefault();
	    $.ajax({
	        type: 'POST',
	        url: 'http://genesis.altrecipe.com/save_application/endPoint.php',
	        dataType: 'json',
	        data: $form.serialize(),
	        success: function(response) {
	            console.info(response);
	            if (response.status == 'success') {

	            }
	        }
	    })
	});