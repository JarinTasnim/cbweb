$(document).ready(function () {

    function footerOnload() {
        var url = window.location.href;
        var hash = url.substring(url.indexOf("#") + 14);

        if (hash === "pbenefits") {
            console.log(hash);
            $(".personal_tab_details").removeAttr("style").show();
            $(".personal_tab_details_2").removeAttr("style").hide();
            $(".personal_tab_details_3").removeAttr("style").hide();
            $(".personal_tab_details_4").removeAttr("style").hide();
            $(".personal_tab_link_1").css({
                'left': '50%',
                'transform': 'translateX(-50%)'
            });
            $(".personal_tab_link").removeClass("personal_tab_link_active");
            $(".personal_tab_link_one").addClass("personal_tab_link_active");
        }

        if (hash === "pfeatures") {
            console.log(hash);
            $(".personal_tab_details").removeAttr("style").hide();
            $(".personal_tab_details_2").removeAttr("style").show();
            $(".personal_tab_details_3").removeAttr("style").hide();
            $(".personal_tab_details_4").removeAttr("style").hide();
            $(".personal_tab_link_1").css({
                'left': '130%',
                'transform': 'translateX(0px)'
            });
            $(".personal_tab_link").removeClass("personal_tab_link_active");
            $(".personal_tab_link_two").addClass("personal_tab_link_active");
        }

        if (hash === "plimits") {
            console.log(hash);
            $(".personal_tab_details").removeAttr("style").hide();
            $(".personal_tab_details_2").removeAttr("style").hide();
            $(".personal_tab_details_3").removeAttr("style").show();
            $(".personal_tab_details_4").removeAttr("style").hide();
            $(".personal_tab_link_1").css({
                'left': '242%',
                'transform': 'translateX(0px)'
            });
            $(".personal_tab_link").removeClass("personal_tab_link_active");
            $(".personal_tab_link_three").addClass("personal_tab_link_active");
        }

        if (hash === "pfees") {
            console.log(hash);
            $(".personal_tab_details").removeAttr("style").hide();
            $(".personal_tab_details_2").removeAttr("style").hide();
            $(".personal_tab_details_3").removeAttr("style").hide();
            $(".personal_tab_details_4").removeAttr("style").show();
            $(".personal_tab_link_1").css({
                'left': '352%',
                'transform': 'translateX(0px)'
            });
            $(".personal_tab_link").removeClass("personal_tab_link_active");
            $(".personal_tab_link_four").addClass("personal_tab_link_active");
        }

        if (hash === "bbenefits") {
            console.log(hash);
            $(".personal_tab_details").removeAttr("style").show();
            $(".personal_tab_details_2").removeAttr("style").hide();
            $(".personal_tab_details_3").removeAttr("style").hide();
            $(".personal_tab_details_4").removeAttr("style").hide();
            $(".personal_tab_link_1").css({
                'left': '50%',
                'transform': 'translateX(-50%)'
            });
            $(".personal_tab_link").removeClass("personal_tab_link_active");
            $(".personal_tab_link_one").addClass("personal_tab_link_active");
        }

        if (hash === "bfeatures") {
            console.log(hash);
            $(".personal_tab_details").removeAttr("style").hide();
            $(".personal_tab_details_2").removeAttr("style").show();
            $(".personal_tab_details_3").removeAttr("style").hide();
            $(".personal_tab_details_4").removeAttr("style").hide();
            $(".personal_tab_link_1").css({
                'left': '130%',
                'transform': 'translateX(0px)'
            });
            $(".personal_tab_link").removeClass("personal_tab_link_active");
            $(".personal_tab_link_two").addClass("personal_tab_link_active");
        }

        if (hash === "blimits") {
            console.log(hash);
            $(".personal_tab_details").removeAttr("style").hide();
            $(".personal_tab_details_2").removeAttr("style").hide();
            $(".personal_tab_details_3").removeAttr("style").show();
            $(".personal_tab_details_4").removeAttr("style").hide();
            $(".personal_tab_link_1").css({
                'left': '242%',
                'transform': 'translateX(0px)'
            });
            $(".personal_tab_link").removeClass("personal_tab_link_active");
            $(".personal_tab_link_three").addClass("personal_tab_link_active");
        }

        if (hash === "bfees") {
            console.log(hash);
            $(".personal_tab_details").removeAttr("style").hide();
            $(".personal_tab_details_2").removeAttr("style").hide();
            $(".personal_tab_details_3").removeAttr("style").hide();
            $(".personal_tab_details_4").removeAttr("style").show();
            $(".personal_tab_link_1").css({
                'left': '352%',
                'transform': 'translateX(0px)'
            });
            $(".personal_tab_link").removeClass("personal_tab_link_active");
            $(".personal_tab_link_four").addClass("personal_tab_link_active");
        }
    };
    var url = window.location.href;
    var hash = url.substring(url.indexOf("#") + 14);

    if (hash === "pbenefits") {
        console.log(hash);
        $(".personal_tab_details").removeAttr("style").show();
        $(".personal_tab_details_2").removeAttr("style").hide();
        $(".personal_tab_details_3").removeAttr("style").hide();
        $(".personal_tab_details_4").removeAttr("style").hide();
        $(".personal_tab_link_1").css({
            'left': '50%',
            'transform': 'translateX(-50%)'
        });
        $(".personal_tab_link").removeClass("personal_tab_link_active");
        $(".personal_tab_link_one").addClass("personal_tab_link_active");
    }

    if (hash === "pfeatures") {
        console.log(hash);
        $(".personal_tab_details").removeAttr("style").hide();
        $(".personal_tab_details_2").removeAttr("style").show();
        $(".personal_tab_details_3").removeAttr("style").hide();
        $(".personal_tab_details_4").removeAttr("style").hide();
        $(".personal_tab_link_1").css({
            'left': '130%',
            'transform': 'translateX(0px)'
        });
        $(".personal_tab_link").removeClass("personal_tab_link_active");
        $(".personal_tab_link_two").addClass("personal_tab_link_active");
    }

    if (hash === "plimits") {
        console.log(hash);
        $(".personal_tab_details").removeAttr("style").hide();
        $(".personal_tab_details_2").removeAttr("style").hide();
        $(".personal_tab_details_3").removeAttr("style").show();
        $(".personal_tab_details_4").removeAttr("style").hide();
        $(".personal_tab_link_1").css({
            'left': '242%',
            'transform': 'translateX(0px)'
        });
        $(".personal_tab_link").removeClass("personal_tab_link_active");
        $(".personal_tab_link_three").addClass("personal_tab_link_active");
    }

    if (hash === "pfees") {
        console.log(hash);
        $(".personal_tab_details").removeAttr("style").hide();
        $(".personal_tab_details_2").removeAttr("style").hide();
        $(".personal_tab_details_3").removeAttr("style").hide();
        $(".personal_tab_details_4").removeAttr("style").show();
        $(".personal_tab_link_1").css({
            'left': '352%',
            'transform': 'translateX(0px)'
        });
        $(".personal_tab_link").removeClass("personal_tab_link_active");
        $(".personal_tab_link_four").addClass("personal_tab_link_active");
    }

    if (hash === "bbenefits") {
        console.log(hash);
        $(".personal_tab_details").removeAttr("style").show();
        $(".personal_tab_details_2").removeAttr("style").hide();
        $(".personal_tab_details_3").removeAttr("style").hide();
        $(".personal_tab_details_4").removeAttr("style").hide();
        $(".personal_tab_link_1").css({
            'left': '50%',
            'transform': 'translateX(-50%)'
        });
        $(".personal_tab_link").removeClass("personal_tab_link_active");
        $(".personal_tab_link_one").addClass("personal_tab_link_active");
    }

    if (hash === "bfeatures") {
        console.log(hash);
        $(".personal_tab_details").removeAttr("style").hide();
        $(".personal_tab_details_2").removeAttr("style").show();
        $(".personal_tab_details_3").removeAttr("style").hide();
        $(".personal_tab_details_4").removeAttr("style").hide();
        $(".personal_tab_link_1").css({
            'left': '130%',
            'transform': 'translateX(0px)'
        });
        $(".personal_tab_link").removeClass("personal_tab_link_active");
        $(".personal_tab_link_two").addClass("personal_tab_link_active");
    }

    if (hash === "blimits") {
        console.log(hash);
        $(".personal_tab_details").removeAttr("style").hide();
        $(".personal_tab_details_2").removeAttr("style").hide();
        $(".personal_tab_details_3").removeAttr("style").show();
        $(".personal_tab_details_4").removeAttr("style").hide();
        $(".personal_tab_link_1").css({
            'left': '242%',
            'transform': 'translateX(0px)'
        });
        $(".personal_tab_link").removeClass("personal_tab_link_active");
        $(".personal_tab_link_three").addClass("personal_tab_link_active");
    }

    if (hash === "bfees") {
        console.log(hash);
        $(".personal_tab_details").removeAttr("style").hide();
        $(".personal_tab_details_2").removeAttr("style").hide();
        $(".personal_tab_details_3").removeAttr("style").hide();
        $(".personal_tab_details_4").removeAttr("style").show();
        $(".personal_tab_link_1").css({
            'left': '352%',
            'transform': 'translateX(0px)'
        });
        $(".personal_tab_link").removeClass("personal_tab_link_active");
        $(".personal_tab_link_four").addClass("personal_tab_link_active");
    }

    $("#pbenefits").click(function () {
        window.location.host + "/personal#fee-personal-pbenefits";
        console.log(window.location.host + "/personal#fee-personal-pbenefits");
        footerOnload();
    });
    $("#pfees").click(function () {
        window.location.host + "/personal#fee-personal-pfees";
        console.log(window.location.href);
        footerOnload();
    });
    $("#plimits").click(function () {
        window.location.host + "/personal#fee-personal-plimits";
        console.log(window.location.href);
        footerOnload();

    });
    $("#pfeatures").click(function () {
        window.location.host + "/personal#fee-personal-pfeatures";
        console.log(window.location.href);
        footerOnload();
    });

    $("#bbenefits").click(function () {
        window.history.pushState('obj', 'bbenefits', '/business#fee-business-bbenefits');
        location.reload();
    });
    $("#bfees").click(function () {
        window.history.pushState('obj', 'bfees', '/business#fee-business-bfees');
        location.reload();
    });
    $("#blimits").click(function () {
        window.history.pushState('obj', 'blimits', '/business#fee-business-blimits');
        location.reload();
    });
    $("#bfeatures").click(function () {
        window.history.pushState('obj', 'bfeatures', '/business#fee-business-bfeatures');
        location.reload();
    });

});