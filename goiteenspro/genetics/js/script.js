    //ScrollTo
$('.link_programm').click(function() {
  var destination = $('.program').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});
$('.link_format').click(function() {
  var destination = $('.details').offset().top - 0;
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

  $("#city").click(function(){
    if ($('#city').val() == 'kiev' && $('.child_age').val() < 15) {
      $('.price_summ').val('2500');
      $('#registrationType').val('steamKiev');
    }
    else if ($('#city').val() == 'kiev' && $('.child_age').val() >= 15) {
      $('.price_summ').val('3000');
      $('#registrationType').val('proKiev');
    }
  });
  $("#city").click(function(){
    if ($('#city').val() == 'lviv' && $('.child_age').val() < 15) {
      $('.price_summ').val('2000');
      $('#registrationType').val('steamLviv');
    }
    else if ($('#city').val() == 'lviv' && $('.child_age').val() >= 15) {
      $('.price_summ').val('2500');
      $('#registrationType').val('proLviv');
    }
  });
