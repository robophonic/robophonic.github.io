//ScrollTo
$('.home_link').click(function() {
  var destination = $('.head').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});

$('.about_link').click(function() {
  var destination = $('.about_me').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});

$('.portfolio_link').click(function() {
  var destination = $('.portfolio').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});

$('.contact_link').click(function() {
  var destination = $('.footer').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});

//FancyBox 
$(document).ready(function() {
  $(".fancybox").fancybox();
});