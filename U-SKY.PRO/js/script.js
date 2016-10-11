$(function() {
  //    scroll
  $('.about').click(function() {
    var destination = $('.feels').offset().top - 0;
    $('body,html').animate({
      scrollTop: destination
    }, 1000);
  });
  $('.forwhom').click(function() {
    var destination = $('.essential_title_big').offset().top - 0;
    $('body,html').animate({
      scrollTop: destination
    }, 1000);
  });
  $('.teacher').click(function() {
    var destination = $('.essential_title2').offset().top - 0;
    $('body,html').animate({
      scrollTop: destination
    }, 1000);
  });
  $('.testimonials').click(function() {
    var destination = $('.steps').offset().top - 0;
    $('body,html').animate({
      scrollTop: destination
    }, 1000);
  });
  $('.courseprogram').click(function() {
    var destination = $('.content_title').offset().top - 0;
    $('body,html').animate({
      scrollTop: destination
    }, 1000);
  });
  $('.price').click(function() {
    var destination = $('.price_box').offset().top - 0;
    $('body,html').animate({
      scrollTop: destination
    }, 1000);
  });
  $('.contactus, .main_btn, .interested_btn').click(function() {
    var destination = $('.contact').offset().top - 0;
    $('body,html').animate({
      scrollTop: destination
    }, 1000);
  });
  //    menu
  if ($(window).width() < 700) {
    $('.mob-btn').click(function() {
      $('.menu').toggle();
    });
    $('.menu-item').click(function() {
      $('.menu').toggle();
    });
  }
  //    section content
  $('.circle_text').on('click', function() {
    $(this)
      .addClass('active').siblings().removeClass('active');
  });

  var phone,
    count,
    number_op,
    operator_truth,
    operator_truth_repeat;
  var operator = ['039', '050', '063', '066', '067', '068', '091', '092', '093', '094', '095', '096', '097'];
  var operator_repeat = ['1111111', '2222222', '3333333', '4444444', '5555555', '6666666', '7777777', '8888888', '9999999', '0000000'];

  $('#registration-form').on('submit', function(e) {
    $('#registration-btn').addClass('inactive');
    $('#registration-btn').prop('disabled', true);

    $('.valid-info').remove();
    phone = $('#phone').val();
    count = phone.match(/\d/g).length;
    number_op = phone.match(/\d/g).join('').substring(2, 5);
    number_repeat = phone.match(/\d/g).join('').substring(5, 13);

    operator_truth = false;
    operator_truth_repeat = false;

    for (var i = 0; i < operator.length; i++) {
      if (operator[i] === number_op) {
        operator_truth = true;
        break;
      }
    }

    for (var j = 0; j < operator_repeat.length; j++) {
      if (operator_repeat[j] === number_repeat) {
        operator_truth_repeat = true;
        break;
      }
    }

    if (count != 12 || operator_truth != true || operator_truth_repeat != false || phone == '') {
      e.preventDefault();
      $('.pos-rel').append('<span class="valid-info">Введите правильный телефон</span>');
      setTimeout(function() {
        $('.valid-info').remove();
      }, 1500);
      $('#registration-btn').removeClass('inactive');
      $('#registration-btn').prop('disabled', false);
    }

  });
  $("#phone").inputmask("+38(999)999-99-99");
});