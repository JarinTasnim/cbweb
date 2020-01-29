$(function ($) {
    'use strict';



    var controller = new ScrollMagic.Controller();

    $('nav').each(function () {
        var t1 = new TimelineMax();

        t1
            .to('.header_content h1', 1.5, {
                opacity: 1,
                y: 0,
                ease: Power4.easeOut
            }, "-=4.8")
            .to('.header_content h3', 2.5, {
                opacity: 1,
                y: 0,
                delay: .5,
                ease: Power4.easeOut
            }, "-=4.8")
            .to('.banner_btn', 2.5, {
                opacity: 1,
                y: 0,
                delay: 2.5,
                ease: Power4.easeOut
            }, "-=4.8")
            .to('.banner_img .svg_lines svg', 2.5, {
                opacity: 1,
                y: 0,
                delay: 1.5,
                ease: Power4.easeOut
            }, "-=4.8")
            .to('.banner_img img', 2.5, {
                opacity: 1,
                y: 0,
                delay: 2.5,
                ease: Power4.easeOut
            }, "-=4.8")
            .to('.personal_page .header_content p', 2.5, {
                opacity: 1,
                y: 0,
                delay: 2,
                ease: Power4.easeOut
            }, "-=4.8")
            .to('.personal_page_img img', 2.5, {
                opacity: 1,
                y: 0,
                delay: 2.5,
                ease: Power4.easeOut
            }, "-=4.8")





        var scene = new ScrollMagic.Scene({
                triggerElement: "header",
                triggerHook: "onLeave"
            })

            .setTween(t1)
            .addTo(controller);

    });


    var controller2 = new ScrollMagic.Controller();

    $('.about_part').each(function () {
        var t2 = new TimelineMax();
        t2

            .to('.about_part h2', 2.5, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=4.8")
            .to('.about_part .about_title_p', 2.5, {
                opacity: 1,
                y: 0,
                //            delay:.6,
                ease: Power3.easeOut
            }, "-=4.8")

            .to('.about_cards_1', 1.5, {
                opacity: 1,
                y: 0,
                delay: 1.2,
                ease: Power3.easeOut
            }, "-=2.8")

            .to('.about_cards_2', 1.5, {
                opacity: 1,
                y: 0,
                delay: 1.5,
                ease: Power3.easeOut
            }, "-=2.8")
            .to('.about_cards_3', 1.5, {
                opacity: 1,
                y: 0,
                delay: 1.8,
                ease: Power3.easeOut
            }, "-=2.8")



        var scene = new ScrollMagic.Scene({
                triggerElement: ".about_part",
                triggerHook: "onLeave",
                offset: -300,
                reverse: false
            })

            .setTween(t2)
            .addTo(controller2);

    });

    var controller3 = new ScrollMagic.Controller();

    $('.features_part').each(function () {
        var t3 = new TimelineMax();
        t3.to('.features_part h2', 2.5, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=4.8")
            .to('.features_part h4', 2.5, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=3.8")
            .to('.features_items', 2.5, {
                opacity: 1,
                y: 0,
                delay: .6,
                ease: Power3.easeOut
            }, "-=2.8")
            .to('.parallax-js .layer:nth-child(1) img', 2.5, {
                opacity: 1,
                x: -204,
                y: 248,
                delay: .6,
                ease: Power3.easeOut
            }, "-=2.8")
            .to('.parallax-js .layer:nth-child(2) img', 2.5, {
                opacity: 1,
                x: -60,
                y: 192,
                delay: .8,
                ease: Power3.easeOut
            }, "-=2.8")
            .to('.parallax-js .layer:nth-child(3) img', 2.5, {
                opacity: 1,
                x: -15,
                y: 56,
                delay: 1,
                ease: Power3.easeOut
            }, "-=2.8")

        var scene = new ScrollMagic.Scene({
                triggerElement: ".features_part",
                offset: -350,
                triggerHook: "onLeave",
                reverse: false
            })



            .setTween(t3)
            .addTo(controller3);



    });


    var controller4 = new ScrollMagic.Controller();

    $('.screenshot_part').each(function () {
        var t4 = new TimelineMax();
        t4
            .to('.screenshot_part h2', 4, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=4.8")
            .to('.screenshot_part h4', 2.5, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=3.8")




        var scene = new ScrollMagic.Scene({
                triggerElement: ".screenshot_part",
                triggerHook: "onLeave",
                offset: -350,
                reverse: false
            })


            .setTween(t4)
            .addTo(controller4);

    });


    var controller5 = new ScrollMagic.Controller();

    $('.video_part').each(function () {
        var t5 = new TimelineMax();

        t5
            .to('.video_part h2', 4, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=4.8")


        var scene = new ScrollMagic.Scene({
                triggerElement: ".video_part",
                triggerHook: "onLeave",
                offset: -250
            })



            .setTween(t5)
            .addTo(controller5);

    });

    var controller6 = new ScrollMagic.Controller();

    $('.wallet_part').each(function () {
        var t6 = new TimelineMax();

        t6
            .to('.wallet_part h2', 4, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=4.8")


        var scene = new ScrollMagic.Scene({
                triggerElement: ".wallet_part",
                triggerHook: "onLeave",
                offset: -250,
                reverse: false
            })



            .setTween(t6)
            .addTo(controller6);

    });

    var controller7 = new ScrollMagic.Controller();

    $('.newsletter_part').each(function () {
        var t7 = new TimelineMax();

        t7

            .to('.contact_part', 1.5, {
                opacity: 1,
                y: 0,
                delay: .4,
                ease: Power3.easeOut
            }, "-=4.8")
            .to('.contact_form', 1.5, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=4.8")



        var scene = new ScrollMagic.Scene({
                triggerElement: ".newsletter_part",
                triggerHook: "onLeave",
                offset: -250,
                reverse: false
            })



            .setTween(t7)
            .addTo(controller7);
    });

    var controller8 = new ScrollMagic.Controller();

    $('.footer_link').each(function () {
        var t8 = new TimelineMax();

        t8
            .to('.quick_link', 2, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=4.8")
            .to('.subscription_form', 2, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=4.8")




        var scene = new ScrollMagic.Scene({
                triggerElement: ".footer_link",
                triggerHook: "onLeave",
                offset: -850,
                reverse: false
            })



            .setTween(t8)
            .addTo(controller8);
    });

    
    var controller9 = new ScrollMagic.Controller();

    $('.step_part').each(function () {
        var t9 = new TimelineMax();
        t9

            .to('.step_part h2', 2.5, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=4.8")
            .to('.step_part .step_P', 2.5, {
                opacity: 1,
                y: 0,
                delay:.6,
                ease: Power3.easeOut
            }, "-=4.8")

            .to('.steps_card_1', 1.5, {
                opacity: 1,
                y: 0,
                delay: 1.2,
                ease: Power3.easeOut
            }, "-=2.8")

            .to('.steps_card_2', 1.5, {
                opacity: 1,
                y: 0,
                delay: 1.5,
                ease: Power3.easeOut
            }, "-=2.8")
            .to('.steps_card_3', 1.5, {
                opacity: 1,
                y: 0,
                delay: 1.8,
                ease: Power3.easeOut
            }, "-=2.8")



        var scene = new ScrollMagic.Scene({
                triggerElement: ".step_part",
                triggerHook: "onLeave",
                offset: -300,
                reverse: false
            })

            .setTween(t9)
            .addTo(controller9);

    });

    var controller10 = new ScrollMagic.Controller();

    $('.personal_tab_part').each(function () {
        var t10 = new TimelineMax();
        t10

            .to('.personal_tab_part h2', 2.5, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }, "-=4.8")
            .to('.personal_tab', 2.5, {
                opacity: 1,
                y: 0,
                delay:.6,
                ease: Power3.easeOut
            }, "-=4.8")


        var scene = new ScrollMagic.Scene({
                triggerElement: ".personal_tab_part",
                triggerHook: "onLeave",
                offset: -300,
                reverse: false
            })

            .setTween(t10)
            .addTo(controller10);

    });

});
