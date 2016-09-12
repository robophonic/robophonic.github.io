//price
$(function() {
$('.order-add').click(function() {
    $('#orderType').val('order-add');
    $('.live_workshops_yes').addClass('active');
    $('.live_workshops_no').removeClass('active');

  });
 $('.order-no').click(function() {
    $('#orderType').val('order-no');
    $('.live_workshops_no').addClass('active');
    $('.live_workshops_yes').removeClass('active');
  });
    
// meetings  
 $('.meetings_indicators1').click(function() {
    $('.meetings_indicators1').addClass('active');
    $('.meetings_indicators2, .meetings_indicators3 ').removeClass('active');
  });   
    
     $('.meetings_indicators2').click(function() {
    $('.meetings_indicators2').addClass('active');
    $('.meetings_indicators1, .meetings_indicators3 ').removeClass('active');
  });   
    
    $('.meetings_indicators3').click(function() {
    $('.meetings_indicators3').addClass('active');
    $('.meetings_indicators2, .meetings_indicators1 ').removeClass('active');
  });   
    
var caunt = 0;
    
    $('.meetings_right1').click(function() {
        
var n = 3;
     
       var next = $('.qw div.active').next(); 
       $('.qw div').removeClass('active');
       next.addClass('active');
       console.log (next);
       caunt++;

        
     if (caunt == n) { 
         $('.qw div').removeClass('active');
         $('.qw div').first().addClass('active');;
         caunt = 0;
     }  

    
    console.log (caunt);
   });  
    
// ways
 $('.ways_box1').mouseenter(function() {
     $('.ways_box1').addClass('active');
     $('.ways_box2').removeClass('active');
});
    $('.ways_box1').mouseleave(function() {
     $('.ways_box1').removeClass('active');
});
     $('.ways_box2').mouseenter(function() {
     $('.ways_box2').addClass('active');
});
    $('.ways_box2').mouseleave(function() {
     $('.ways_box2').removeClass('active');
});
    
     });

//хедер
$(window).scroll(function() {
  return $('.head').toggleClass("header_fixed", $(window).scrollTop() > 0);
});

$(window).scroll(function() {
  return $('.no_active').toggleClass("call-me-btn", $(window).scrollTop() > 100);
});

//tell  !!!!!!!!!!!!!
$(function(){ 
    $('.tel img:nth-child(2), .phone_text li').mouseenter(function(){
    $('.phone_text li:nth-child(1)').animate({color:'blue'},2500);
                            });
    $('.tel img:nth-child(2), .phone_text li').mouseleave(function(){
    $('.phone_text li:nth-child(1)').css("color","black");
    });
//    $('.phone_text li').mouseenter(function(){
//    $('.phone_text li:nth-child(1)').css("color","blue");
//    });
    
    });