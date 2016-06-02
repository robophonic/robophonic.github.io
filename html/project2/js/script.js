var menuElem = document.querySelector('.header__menu');
var titleElem = menuElem.querySelector('.main__list');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};

$(function() {
  var h = 300,
    t = $('#about_1'),
    max = t[0].scrollHeight,
    min = 170;
  $('.about_link1').on('click', function(event) {
    var H = t.height();
    if (H == max) {
      H = min
    } else if (H + h > max) {
      H = max
    } else {
      H += h
    };
    t.height(H);
    $(this).text(H == max ? 'END READ' : 'READ MORE')
    return false
  })
})

$(function() {
  var h = 300,
    t = $('#about_2'),
    max = t[0].scrollHeight,
    min = 170;
  $('.about_link2').on('click', function(event) {
    var H = t.height();
    if (H == max) {
      H = min
    } else if (H + h > max) {
      H = max
    } else {
      H += h
    };
    t.height(H);
    $(this).text(H == max ? 'END READ' : 'READ MORE')
    return false
  })
})

$(function() {
  var h = 300,
    t = $('#about_3'),
    max = t[0].scrollHeight,
    min = 170;
  $('.about_link3').on('click', function(event) {
    var H = t.height();
    if (H == max) {
      H = min
    } else if (H + h > max) {
      H = max
    } else {
      H += h
    };
    t.height(H);
    $(this).text(H == max ? 'END READ' : 'READ MORE')
    return false
  })
})

////планый ScrollTo
//$('a[href^="#"]').click(function(){
////Сохраняем значение атрибута href в переменной:
//var target = $(this).attr('href');
//$('html, body').animate({scrollTop: $(target).offset().top}, 800);
//return false;
//});