// particlesJS('particles-js',

//   {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 5,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#eee",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": false,
//       "background_color": "#fff",
//       "background_image": "",
//       "background_position": "50% 50%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }
//   }

// );
$(document).ready(function() {
  var $scene = $(".parallax-js").parallax({
    scalarX: 100,
    scalarY: 100
  });
});

$(document).ready(function() {
  "use strict";

  // features login-logout

  $(".login_status").on("click", function() {
    $(".logout_status").toggleClass("show_logout");
  });

  $(".features_tab").on("click", function() {
    $(".features_tab").removeClass("active_features_tab");
    $(this)
      .not()
      .addClass("active_features_tab");
  });

  // animation

  var wave1 = $("#feel-the-wave").wavify({
    height: 100,
    bones: 5,
    amplitude: 60,
    //        color: '#B289EF',
    //        color: '#eeeeee',
    //        color: 'rgba(150, 97, 255, .3)',
    color: "rgba(224,224,224,.2)",
    speed: 0.15
  });

  var wave2 = $("#feel-the-wave-two").wavify({
    height: 90,
    bones: 5,
    amplitude: 40,
    //        color: 'rgba(150, 97, 255, .8)',
    //        color: 'rgba(150, 97, 255, .3)',
    //        color: 'rgba(0, 153, 255, .2)',
    color: "rgba(224,224,224,.3)",
    speed: 0.25
  });
  var wave2 = $("#feel-the-wave-five").wavify({
    height: 100,
    bones: 5,
    amplitude: 40,
    //        color: 'rgba(150, 97, 255, .8)',
    //        color: 'rgba(150, 97, 255, .3)',
    color: "#fff",
    speed: 0.25
  });

  var wave3 = $("#feel-the-wave-three").wavify({
    height: 60,
    bones: 4,
    amplitude: 40,
    //        color: 'rgba(150, 97, 255, .8)',
    color: "#B7E3FF",
    speed: 0.25
  });

  var wave4 = $("#feel-the-wave-four").wavify({
    height: 100,
    bones: 5,
    amplitude: 40,
    //        color: 'rgba(150, 97, 255, .8)',
    color: "#fff",
    speed: 0.25
  });

  var wave4 = $("#feel-the-wave-six").wavify({
    height: 40,
    bones: 5,
    amplitude: 30,
    //        color: 'rgba(150, 97, 255, .8)',
    color: "rgba(0,153,255, .3)",
    speed: 0.3
  });

  var wave5 = $("#feel-the-wave-seven").wavify({
    height: 50,
    bones: 3,
    amplitude: 45,
    //        color: 'rgba(150, 97, 255, .8)',
    color: "rgba(0,153,255,.4)",
    speed: 0.25
  });

  var wave4 = $("#feel-the-wave-eight").wavify({
    height: 45,
    bones: 5,
    amplitude: 60,
    //        color: 'rgba(150, 97, 255, .8)',
    color: "rgba(0,153,255, .3)",
    speed: 0.3
  });

  var wave5 = $("#feel-the-wave-nine").wavify({
    height: 55,
    bones: 4,
    amplitude: 50,
    //        color: 'rgba(150, 97, 255, .8)',
    color: "rgba(0,153,255, 1)",
    speed: 0.25
  });

  // menufix start....

  var menutop = $("nav").offset().top;

  $(window).scroll(function() {
    var scrollto = $(window).scrollTop();

    if (scrollto > menutop) {
      $("nav").addClass("menufix");
    } else {
      $("nav").removeClass("menufix");
    }
    if (scrollto > 200) {
      $(".arrow_top").fadeIn(1000);
    } else {
      $(".arrow_top").fadeOut(1000);
    }
  });

  // scrolling system....

  $('a[href*="#"]:not([href="#').on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $('a[href*="#"]:not([href="#').removeClass("active_class");
        $(this).addClass("active_class");
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70
          },
          1000
        );
        return false;
      }
    }
  });

  // waller animation

  $(".personal_walllet_class").mouseenter(function() {
    $(".wallet_box").css("background", "#0099ff");
  });

  $(".personal_walllet_class").mouseleave(function() {
    $(".wallet_box").css("background", "#ececec");
  });

  $(".input_field_one").on("focus", function() {
    $(".label_one")
      .css("top", "-10px")
      .css("font-size", "14px");
    if ($(".input_field_one").val().length >= 1) {
      $(".label_one")
        .css("top", "-10px")
        .css("font-size", "14px");
    }
  });
  $(".input_field_one").on("blur", function() {
    if ($(".input_field_one").val().length == 0) {
      $(".label_one")
        .css("top", "10px")
        .css("font-size", "16px");
    } else {
      $(".label_one")
        .css("top", "-10px")
        .css("font-size", "14px");
    }
  });

  $(".input_field_two").on("focus", function() {
    $(".label_two")
      .css("top", "-10px")
      .css("font-size", "14px");
    if ($(".input_field_two").val().length >= 1) {
      $(".label_two")
        .css("top", "-10px")
        .css("font-size", "14px");
    }
  });
  $(".input_field_two").on("blur", function() {
    if ($(".input_field_two").val().length == 0) {
      $(".label_two")
        .css("top", "10px")
        .css("font-size", "16px");
    } else {
      $(".label_two")
        .css("top", "-10px")
        .css("font-size", "14px");
    }
  });

  $(".input_field_three").on("focus", function() {
    $(".label_three")
      .css("top", "-10px")
      .css("font-size", "14px");
    if ($(".input_field_three").val().length >= 1) {
      $(".label_three")
        .css("top", "-10px")
        .css("font-size", "14px");
    }
  });
  $(".input_field_three").on("blur", function() {
    if ($(".input_field_three").val().length == 0) {
      $(".label_three")
        .css("top", "10px")
        .css("font-size", "16px");
    } else {
      $(".label_three")
        .css("top", "-10px")
        .css("font-size", "14px");
    }
  });

  //   $(".modais").iziModal({
  //     history: false,
  //     iframe: true,
  //     fullscreen: true,
  //     //         autoOpen:true,
  //     overlayColor: "rgba(0,153,255,0.6)",
  //     headerColor: "#fff",
  //     background: "rgba(0,153,255,1)",

  //     //    group: 'group1',
  //     loop: true,
  //     zindex: 9999
  //   });

  var $circles = $(".circle"),
    tl = new TimelineMax();

  TweenMax.set($circles, {
    scale: 0
  });

  tl.insert(
    TweenMax.staggerTo(
      $circles.toArray(),
      1,
      {
        opacity: 1,
        scale: 1,
        ease: Power1.easeIn
      },
      0.2
    )
  );

  tl.insert(
    TweenMax.staggerTo(
      $circles.toArray(),
      0.5,
      {
        scale: 1.2,
        boxShadow: "0 25px 25px rgba(0, 0, 0, 0.4)",
        repeat: -1,
        yoyo: true,
        ease: Power1.easeOut
      },
      0.2
    ),
    "-=0.4"
  );

  //preloader js
  //    $(window).on('load', function () {
  //        $(".loader").delay(2000).css('display','none');
  //    });

  // e-wallet animation

  $(".personal_bg").mouseenter(function() {
    TweenMax.to(this, 1.4, {
      x: " 25%",
      ease: Power4.easeOut
    });
    TweenMax.to(".business_wallet", 1.2, {
      x: "-3%",
      opacity: 0,
      ease: Power4.easeOut
    });
    TweenMax.to(".business_part .text_personal", 0.5, {
      x: "3%",
      opacity: 0,
      ease: Power4.easeOut
    });
    TweenMax.to(".business_part .text_personal_2", 1.2, {
      x: "-20%",
      opacity: 1,
      visibility: "visible",
      ease: Power4.easeOut
    });
    $(".personal_part .personal_bg .personal_bg_overlay").css(
      "background",
      "#0099ff"
    );
    TweenMax.to(".business_wallet_hover", 1.2, {
      skewX: "10",
      x: -30,
      opacity: 1,
      visibility: "visible",
      ease: Power4.easeOut
    });
    TweenMax.to(".business_bg", 1.4, {
      x: "10%",
      ease: Power4.easeOut
    });
  });

  $(".personal_bg").mouseleave(function() {
    TweenMax.to(this, 1.2, {
      x: " 0%",
      ease: Power4.easeOut
    });
    TweenMax.to(".business_wallet", 1.2, {
      x: "0%",
      opacity: 1,
      ease: Power4.easeOut
    });
    TweenMax.to(".business_part .text_personal", 0.5, {
      x: "0%",
      opacity: 1,
      ease: Power4.easeOut
    });

    TweenMax.to(".business_part .text_personal_2", 0.2, {
      x: "0%",
      opacity: 0,
      visibility: "hidden",
      ease: Power4.easeOut
    });
    $(".personal_part .personal_bg .personal_bg_overlay").css(
      "background",
      "#151515"
    );
    TweenMax.to(".business_wallet_hover", 1.2, {
      x: 30,
      opacity: 0,
      skewX: "10",
      visibility: "hidden",
      ease: Power4.easeOut
    });
    TweenMax.to(".business_bg", 1.4, {
      x: "0%",
      ease: Power4.easeOut
    });
  });

  $(".business_bg").mouseenter(function() {
    TweenMax.to(this, 1.4, {
      x: " -30%",
      ease: Power4.easeOut
    });

    TweenMax.to(".personal_bg", 1.4, {
      x: "-25%",
      ease: Power4.easeOut
    });
    $(".business_part .business_bg .business_bg_overlay").css(
      "background",
      "#0099ff"
    );

    TweenMax.to(".business_part .text_personal", 0.5, {
      x: "-3%",
      opacity: 0,
      ease: Power4.easeOut
    });
    TweenMax.to(".personal_part .text_personal", 0.5, {
      x: "0%",
      opacity: 0
    });
    TweenMax.to(".personal_part .text_personal_2", 1.2, {
      x: "45%",
      opacity: 1,
      visibility: "visible",
      ease: Power4.easeOut
    });

    TweenMax.to(".personal_wallet", 1.2, {
      x: "3%",
      opacity: 0,
      ease: Power4.easeOut
    });
    TweenMax.to(".personal_wallet_hover", 1.2, {
      skewX: "0%",
      x: 30,
      opacity: 1,
      visibility: "visible",
      ease: Power4.easeOut
    });
  });
  $(".business_bg").mouseleave(function() {
    TweenMax.to(this, 1.4, {
      x: "0%",
      ease: Power4.easeOut
    });
    TweenMax.to(".personal_wallet", 1.2, {
      x: "0%",
      opacity: 1,
      ease: Power4.easeOut
    });
    TweenMax.to(".personal_bg", 1.4, {
      x: "0%",
      ease: Power4.easeOut
    });
    $(".business_part .business_bg .business_bg_overlay").css(
      "background",
      "#1d1d1d"
    );

    TweenMax.to(".personal_part .text_personal", 0.5, {
      x: "0%",
      opacity: 1,
      visibility: "visible",
      ease: Power4.easeOut
    });
    TweenMax.to(".business_part .text_personal", 0.5, {
      x: "0%",
      opacity: 1,
      visibility: "visible",
      ease: Power4.easeOut
    });
    TweenMax.to(".personal_part .text_personal_2", 0.2, {
      x: "0%",
      opacity: 0,
      visibility: "hidden",
      ease: Power4.easeOut
    });
    TweenMax.to(".personal_wallet", 1.2, {
      x: "0%",
      opacity: 1,
      ease: Power4.easeOut
    });
    TweenMax.to(".personal_wallet_hover", 1.2, {
      skewX: "0",
      x: 30,
      opacity: 0,
      visibility: "hidden",
      ease: Power4.easeOut
    });
  });

  // features tab animation

  $(".features_tab_1").on("click", function() {
    $(".features_deatails_layout").css("display", "block");
    $(".features_deatails_layout_2").css("display", "none");
    $(".features_deatails_layout_3").css("display", "none");
    $(".features_deatails_layout_4").css("display", "none");
    $(".features_deatails_layout_5").css("display", "none");
    $(".features_deatails_layout_6").css("display", "none");
    $(".features_deatails_layout_7").css("display", "none");
    $(".features_deatails_layout_8").css("display", "none");
  });
  $(".features_tab_2").on("click", function() {
    $(".features_deatails_layout").css("display", "none");
    $(".features_deatails_layout_2").css("display", "block");
    $(".features_deatails_layout_3").css("display", "none");
    $(".features_deatails_layout_4").css("display", "none");
    $(".features_deatails_layout_5").css("display", "none");
    $(".features_deatails_layout_6").css("display", "none");
    $(".features_deatails_layout_7").css("display", "none");
    $(".features_deatails_layout_8").css("display", "none");
  });
  $(".features_tab_3").on("click", function() {
    $(".features_deatails_layout").css("display", "none");
    $(".features_deatails_layout_2").css("display", "none");
    $(".features_deatails_layout_3").css("display", "block");
    $(".features_deatails_layout_4").css("display", "none");
    $(".features_deatails_layout_5").css("display", "none");
    $(".features_deatails_layout_6").css("display", "none");
    $(".features_deatails_layout_7").css("display", "none");
    $(".features_deatails_layout_8").css("display", "none");
  });
  $(".features_tab_4").on("click", function() {
    $(".features_deatails_layout").css("display", "none");
    $(".features_deatails_layout_2").css("display", "none");
    $(".features_deatails_layout_3").css("display", "none");
    $(".features_deatails_layout_4").css("display", "block");
    $(".features_deatails_layout_5").css("display", "none");
    $(".features_deatails_layout_6").css("display", "none");
    $(".features_deatails_layout_7").css("display", "none");
    $(".features_deatails_layout_8").css("display", "none");
  });
  $(".features_tab_5").on("click", function() {
    $(".features_deatails_layout").css("display", "none");
    $(".features_deatails_layout_2").css("display", "none");
    $(".features_deatails_layout_3").css("display", "none");
    $(".features_deatails_layout_4").css("display", "none");
    $(".features_deatails_layout_5").css("display", "block");
    $(".features_deatails_layout_6").css("display", "none");
    $(".features_deatails_layout_7").css("display", "none");
    $(".features_deatails_layout_8").css("display", "none");
  });
  $(".features_tab_6").on("click", function() {
    $(".features_deatails_layout").css("display", "none");
    $(".features_deatails_layout_2").css("display", "none");
    $(".features_deatails_layout_3").css("display", "none");
    $(".features_deatails_layout_4").css("display", "none");
    $(".features_deatails_layout_5").css("display", "none");
    $(".features_deatails_layout_6").css("display", "block");
    $(".features_deatails_layout_7").css("display", "none");
    $(".features_deatails_layout_8").css("display", "none");
  });
  $(".features_tab_7").on("click", function() {
    $(".features_deatails_layout").css("display", "none");
    $(".features_deatails_layout_2").css("display", "none");
    $(".features_deatails_layout_3").css("display", "none");
    $(".features_deatails_layout_4").css("display", "none");
    $(".features_deatails_layout_5").css("display", "none");
    $(".features_deatails_layout_6").css("display", "none");
    $(".features_deatails_layout_7").css("display", "block");
    $(".features_deatails_layout_8").css("display", "none");
  });
  $(".features_tab_8").on("click", function() {
    $(".features_deatails_layout").css("display", "none");
    $(".features_deatails_layout_2").css("display", "none");
    $(".features_deatails_layout_3").css("display", "none");
    $(".features_deatails_layout_4").css("display", "none");
    $(".features_deatails_layout_5").css("display", "none");
    $(".features_deatails_layout_6").css("display", "none");
    $(".features_deatails_layout_7").css("display", "none");
    $(".features_deatails_layout_8").css("display", "block");
  });

  $(".personal_tab_link").on("click", function() {
    $(".personal_tab_link").removeClass("personal_tab_link_active");
    $(this)
      .not()
      .addClass("personal_tab_link_active");
  });

  $(".personal_tab_link_one").on("click", function() {
    $(".personal_tab_link_1")
      .css("left", "50%")
      .css("transform", "translateX(-50%)");
    $(".personal_tab_details")
      .css("display", "block")
      .css("animation", ".5s 1 alternate slide_up");
    $(".personal_tab_details_2").css("display", "none");
    $(".personal_tab_details_3").css("display", "none");
    $(".personal_tab_details_4").css("display", "none");
  });
  $(".personal_tab_link_two").on("click", function() {
    $(".personal_tab_link_1")
      .css("left", "130%")
      .css("transform", "translateX(0px)");
    $(".personal_tab_details").css("display", "none");
    $(".personal_tab_details_2")
      .css("display", "block")
      .css("animation", ".5s 1 alternate slide_up");
    $(".personal_tab_details_3").css("display", "none");
    $(".personal_tab_details_4").css("display", "none");
  });
  $(".personal_tab_link_three").on("click", function() {
    $(".personal_tab_link_1")
      .css("left", "242%")
      .css("transform", "translateX(0px)");
    $(".personal_tab_details").css("display", "none");
    $(".personal_tab_details_2").css("display", "none");
    $(".personal_tab_details_3")
      .css("display", "block")
      .css("animation", ".5s 1 alternate slide_up");
    $(".personal_tab_details_4").css("display", "none");
  });
  $(".personal_tab_link_four").on("click", function() {
    $(".personal_tab_link_1")
      .css("left", "352%")
      .css("transform", "translateX(0px)");
    $(".personal_tab_details").css("display", "none");
    $(".personal_tab_details_2").css("display", "none");
    $(".personal_tab_details_3").css("display", "none");
    $(".personal_tab_details_4")
      .css("display", "block")
      .css("animation", ".5s 1 alternate slide_up");
  });

  //    $('.menu_bar').on('click', function () {
  //        $('header').toggleClass('mobile_toggleClass');
  //        $('nav').toggleClass('mobile_nav_toggleClass');
  //    });

  $("body").on("click", "div.menu_bar", function(event) {
    event.preventDefault();
    $("header").toggleClass("mobile_toggleClass");
    $("nav").toggleClass("mobile_nav_toggleClass");
  });
});
