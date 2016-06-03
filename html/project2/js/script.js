var menuElem = document.querySelector('.header_menu');
var titleElem = menuElem.querySelector('.main_list');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};

//read more
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

//ScrollTo
$('.header_link_about').click(function() {
  var destination = $("#about").offset().top - 50;
  $("body,html").animate({
    scrollTop: destination
  }, 500);
});

$('.header_link_blog').click(function() {
  var destination = $("#blog").offset().top - 50;
  $("body,html").animate({
    scrollTop: destination
  }, 500);
});

$('.header_link_partners').click(function() {
  var destination = $("#partners").offset().top - 50;
  $("body,html").animate({
    scrollTop: destination
  }, 500);
});

$('.header_link_news').click(function() {
  var destination = $("#news").offset().top - 50;
  $("body,html").animate({
    scrollTop: destination
  }, 500);
});