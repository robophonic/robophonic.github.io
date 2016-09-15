
$(function() {
  if ($(window).width() > 1200) {
      
     $('.parallax-layer').parallax({
				mouseport: jQuery(".godesignfinal")
});    


//ScrollTo
$('.week-link').click(function() {
  var destination = $('.reviews2').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});
$('.why_java-link').click(function() {
  var destination = $('.tel_box').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});
$('.career-link-menu').click(function() {
  var destination = $('.types').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});
$('.program_link').click(function() {
  var destination = $('.programs').offset().top - 0;
  $('body,html').animate({
    scrollTop: destination
  }, 1000);
});  
      

      
  // ways
  $('.ways_box1').mouseenter(function() {
    $('.ways_box1').addClass('active');
    $('.ways_box2').removeClass('active');
    $('.ways_img_1white').addClass('active1');
    $('.ways_img_1').removeClass('active1');  
  });
  $('.ways_box1').mouseleave(function() {
    $('.ways_box1').removeClass('active');
      $('.ways_img_1').addClass('active1');
    $('.ways_img_1white').removeClass('active1');
  });
    
    
  $('.ways_box2').mouseenter(function() {
    $('.ways_box2').addClass('active');
  });
  $('.ways_box2').mouseleave(function() {
    $('.ways_box2').removeClass('active');
  });

//хедер
$(window).scroll(function() {
  return $('.head').toggleClass("header_fixed", $(window).scrollTop() > 0);
});

$(window).scroll(function() {
  return $('.no_active').toggleClass("call-me-btn", $(window).scrollTop() > 100);
});

//tell
  $('.part_tel_1, .phone_text1').mouseenter(function() {
    $('.phone_text1').css({
      color: 'blue'
    });
  });
 $('.part_tel_1, .phone_text1').mouseleave(function() {
    $('.phone_text1').css({
      color: 'black'
    });
  });
     $('.part_tel_2, .phone_text2').mouseenter(function() {
    $('.phone_text2').css({
      color: 'blue'
    });
  });
 $('.part_tel_2, .phone_text2').mouseleave(function() {
    $('.phone_text2').css({
      color: 'black'
    });
  });
     $('.part_tel_3, .phone_text3').mouseenter(function() {
    $('.phone_text3').css({
      color: 'blue'
    });
  });
 $('.part_tel_3, .phone_text3').mouseleave(function() {
    $('.phone_text3').css({
      color: 'black'
    });
  });

//achievements
$('.achievements').waypoint(function() {   
    $('.achievements_img1, .achievements_box2').delay(100).animate({opacity: 1}, 1000);
    $('.achievements_img2, .achievements_box1').delay(1100).animate({opacity: 1}, 1000);
    $('.achievements_img3, .achievements_box3').delay(2100).animate({opacity: 1}, 1000); 
}); 
$('.value').waypoint(function() {     
    $(".value_img").animate({left:'+=700px'}, 4600);
    $('.value4').delay(100).animate({opacity: 1}, 1000);
    $('.value2').delay(1100).animate({opacity: 1}, 1000); 
    $('.value1').delay(2100).animate({opacity: 1}, 1000);
    $('.value3').delay(3600).animate({opacity: 1}, 1000);
});    
$('.ways_box2').waypoint( function() {     
    $(".help_img_2").animate({right:'+=20px'}, 500);
    $(".help_img_2").animate({top:'+=35px'}, 500);
    $(".help_img_2").animate({right:'+=35px'}, 1500);
    $(".help_img_2").animate({top:'+=33px'}, 500);
    $(".help_img_2").animate({right:'+=35px'}, 1500);
    $(".help_img_2").animate({top:'+=33px'}, 500);
    $('.li_4').delay(500).animate({opacity: 1}, 1000);
    $('.li_1').delay(2500).animate({opacity: 1}, 1000); 
    $('.li_2, .li_3').delay(4500).animate({opacity: 1}, 1000);
});
$('.selection').waypoint( function() {     
    $('.selection1').delay(100).animate({opacity: 1}, 1000);
    $('.selection2').delay(1100).animate({opacity: 1}, 1000); 
    $('.selection3').delay(2100).animate({opacity: 1}, 1000);
});
      
//$(".contries1").delay(100).animate({top:'+=100px'}, 300);
      
 $('.countres').waypoint( function() {     
     $(".contries1").delay(100).animate({top:'35px'}, 300);
     $(".contries2").delay(200).animate({top:'-20px'}, 300);
     $(".contries3").delay(300).animate({top:'-3px'}, 300);
     $(".contries4").delay(400).animate({top:'58px'}, 300);
     $(".contries5").delay(500).animate({top:'-150px'}, 300);
});     
      
      
      
//meetings
      $('.meetings_right1, .meetings_left3, .meetings_indicators2').click(function() {
          $('.meetings_right1, .meetings_left1').removeClass('active2');
          $('.meetings_right3, .meetings_left2').addClass('active2');
          $('.meetings_right2, .meetings_left3').removeClass('active2');
          });
      $('.meetings_right3, .meetings_left1, .meetings_indicators3').click(function() {
          $('.meetings_right3, .meetings_left2').removeClass('active2');
          $('.meetings_right2, .meetings_left3').addClass('active2');
          $('.meetings_right1, .meetings_left1').removeClass('active2');
          });
      $('.meetings_right2, .meetings_left2, .meetings_indicators1').click(function() {
          $('.meetings_right3, .meetings_left2').removeClass('active2');
          $('.meetings_right1, .meetings_left1').addClass('active2');
          $('.meetings_right2, .meetings_left3').removeClass('active2');
          });     
      
 
  } else {
    $('.selection1, .selection2, .selection3, .li_4, .li_3, .li_2, .li_1, .achievements_img1, .achievements_box1, .achievements_img2, .achievements_box2, .achievements_img3, .achievements_box3, .value1, .value2, .value3, .value4').css({opacity: 1});
    }
    });