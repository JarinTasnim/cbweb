$(function ($) {
    'use strict';


    // nav buttton animation
    
    $('.nav_buttons a:nth-child(2)').mouseenter(function () {
        $(this).css('color','#fff').css('box-shadow','0px 0px 34px #ececec');
        TweenMax.to('.nav_buttons a:nth-child(2) span', 1.2, {
//            x: -3,
//            y: -42,
            x:-18,
            y:-43,
            ease: Bounce.easeOut
        });
        
    });
    
    $('.nav_buttons a:nth-child(2)').mouseleave(function () {
        $(this).css('color','#3c3c3c');
        TweenMax.to('.nav_buttons a:nth-child(2) span', 1.2, {
            x: -127,
            y: -9,
            ease: Bounce.easeOut
        });
        
    });  
    
    $('.nav_buttons a:nth-child(1)').mouseenter(function () {
        $(this).css('color','#3c3c3c');
        TweenMax.to('.nav_buttons a:nth-child(1) span', 1.2, {
            x: -120,
            y: -10,
            ease: Bounce.easeOut
        });
        
    });
    
    $('.nav_buttons a:nth-child(1)').mouseleave(function () {
        $(this).css('color','#fff');
        TweenMax.to('.nav_buttons a:nth-child(1) span', 1.2, {
            x: -25,
            y: -38,
            ease: Bounce.easeOut
        });
        
    });
    
  


    
});

//$('header').waypoint(function () {});
