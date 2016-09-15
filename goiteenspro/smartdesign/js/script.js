///*animate.css*/
//(function($) {
//  $.fn.viewportChecker = function(useroptions) {
//    // Define options and extend with user
//    var options = {
//      classToAdd: 'visible',
//      offset: 100,
//      callbackFunction: function(elem) {}
//    };
//    $.extend(options, useroptions);
//
//    // Cache the given element and height of the browser
//    var $elem = this,
//      windowHeight = $(window).height();
//
//    this.checkElements = function() {
//      // Set some vars to check with
//      var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
//        viewportTop = $(scrollElem).scrollTop(),
//        viewportBottom = (viewportTop + windowHeight);
//
//      $elem.each(function() {
//        var $obj = $(this);
//        // If class already exists; quit
//        if ($obj.hasClass(options.classToAdd)) {
//          return;
//        }
//
//        // define the top position of the element and include the offset which makes is appear earlier or later
//        var elemTop = Math.round($obj.offset().top) + options.offset,
//          elemBottom = elemTop + ($obj.height());
//
//        // Add class if in viewport
//        if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
//          $obj.addClass(options.classToAdd);
//
//          // Do the callback function. Callback wil send the jQuery object as parameter
//          options.callbackFunction($obj);
//        }
//      });
//    };
//
//    // Run checkelements on load and scroll
//    $(window).scroll(this.checkElements);
//    this.checkElements();
//
//    // On resize change the height var
//    $(window).resize(function(e) {
//      windowHeight = e.currentTarget.innerHeight;
//    });
//  };
//
//  if ($(window).width() > 1200) {
//    $('.down').addClass("hidden_animation").viewportChecker({
//      classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
//      offset: 0
//    });
//    $('.left').addClass("hidden_animation").viewportChecker({
//      classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
//      offset: 0
//    });
//    $('.right').addClass("hidden_animation").viewportChecker({
//      classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
//      offset: 0
//    });
//    $('.up').addClass("hidden_animation").viewportChecker({
//      classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
//      offset: 0
//    });
//    $('.in').addClass("hidden_animation").viewportChecker({
//      classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
//      offset: 0
//    });
//  }
//
//})(jQuery);

//ScrollTo
$('.link_programm').click(function() {
  var destination = $('.program').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});
$('.link_format, .link_format_1').click(function() {
  var destination = $('.format_1').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});
$('.link_schedule').click(function() {
  var destination = $('.schedule').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});
$('.link_head').click(function() {
  var destination = $('.head').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});
$('.link_format_2').click(function() {
  var destination = $('.format_2').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});
$('.link_format_3').click(function() {
  var destination = $('.format_3').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});
$('.link_legend').click(function() {
  var destination = $('.legend').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});

//Modal
$("#registration-form").on('submit', function (e) {
    $('#registration-btn').addClass('inactive');
    $('#registration-btn').prop('disabled', true);
    e.preventDefault();
    var $form = $(this);
    $.ajax({
      type: 'POST',
      url: '/registration/index.php',
      dataType: 'json',
      data: $form.serialize(),
      success: function (response) {
        console.info(response);
        if (response.status == 'success') {
        $form.hide();
        $('.modal-title').hide();
        $('.modal-info').hide();
        $form.html('<p class="callback-success-info"><b>Спасибо!</b>Ваша заявка принята, ожидайте звонка нашего менеджера! </p>').show();
        }
      }
    })
  });