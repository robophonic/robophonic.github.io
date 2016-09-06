var price1 = $('.test_price1').text();
$('.tabs_credit li:first-child .tabs_price').text(price1);

var price2 = $('.test_price2').text();
$('.tabs_credit li:last-child .tabs_price').text(price2);

$(function() {

  $('.tabs_credit').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active');
    var tabs_price = $('.active .tabs_price').text();
    var noSpace = tabs_price.replace(/\s+/g, '');
    var n = parseFloat(noSpace);
    $('.credit_price').text(n + ' ГРН');
    $('.payments li.active').trigger('click');
  });

  $('.payments').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active');
  });

  $('.payments li:nth-child(1)').on('click', function() {
    var tabs_price = $('.active .tabs_price').text();
    var noSpace = tabs_price.replace(/\s+/g, '');
    var n = parseFloat(noSpace);
    $('.credit_price').text(n + ' ГРН');
  });
    
  $('.payments li:nth-child(2)').on('click', function() {
    var tabs_price = $('.active .tabs_price').text();
    var noSpace = tabs_price.replace(/\s+/g, '');
    var n = parseFloat(noSpace);
    $('.credit_price').text(Math.round((n + 60) / 3) + ' ГРН');
  });
    
  $('.payments li:nth-child(3)').on('click', function() {
    var tabs_price = $('.active .tabs_price').text();
    var noSpace = tabs_price.replace(/\s+/g, '');
    var n = parseFloat(noSpace);
    $('.credit_price').text(Math.round(((20 * 6) + n + ((n / 6 * 2) * 0.03) + ((n / 6 * 1) * 0.03)) / 6) + ' ГРН');
  });
    
  $('.payments li:nth-child(4)').on('click', function() {
    var tabs_price = $('.active .tabs_price').text();
    var noSpace = tabs_price.replace(/\s+/g, '');
    var n = parseFloat(noSpace);
    $('.credit_price').text(Math.round(((20 * 12) + n + ((n / 12 * 8) * 0.03) + ((n / 12 * 7) * 0.03) + ((n / 12 * 6) * 0.03) + ((n / 12 * 5) * 0.03) + ((n / 12 * 4) * 0.03) + ((n / 12 * 3) * 0.03) + ((n / 12 * 2) * 0.03) + ((n / 12 * 1) * 0.03)) / 12) + ' ГРН');
  });

});