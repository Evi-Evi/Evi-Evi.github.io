$(document).ready(function() {

    var menuOffset = $(".over-menu").offset().top;

    $(window).scroll(function() {

        var menu = $(".over-menu");

        var headerMid = $(".header-mid");
        //  var menuHeight = menu.innerHeight();

        if ($(this).scrollTop() > menuOffset) {
            menu.css({
                position: "fixed",
                top: "0",
                left: "0",
                background: "#fff",
                width: "100%",
                zIndex: "100"
            });

            headerMid.css("margin-top", menu.innerHeight() + "px");
        } else {
            menu.css({
                position: "static"
            });
            headerMid.css("margin-top", "0");
        }
    });

    $(".touch-menu").click(function() {
        $(".menu").slideToggle(1000);
    });

    $(window).resize(function() {
        $(".menu").removeAttr("style");
    });

    $(".reward-box").slick({
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                infinite: true,
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                infinite: true,
                arrows: false,
                slidesToShow: 1,
            }
        }]
    });

    $(".production-slider").slick({

        fade: true,
        arrows: false,
        dots: true,
    });

    $(".gallery-box").slick();

    $(".gallary-box").find("img").hover(function(e) {// e.preventDefault;
    })

    //плавный скролл

    $(".menu a").click(function(e) {
        e.preventDefault();

        var path = $(this).attr("href");

        $("body, html").animate({
            scrollTop: $(path).offset().top - $(".over-menu").innerHeight() - 20
        }, 1000);
    });

});

$(".reward-block").click(function() {

    if ($(window).width() > 1200) {
        $(".gallery").show(0);
        $("body").css({
            overflow: "hidden"
        })
    }

});

$(".ex").click(function() {

    $(".gallery").hide(0);
    $("body").css({
        overflow: "auto",
    })
});

$(".js-call").click(function(e) {
    e.preventDefault();

    $(".modal-js").fadeIn(300);
    $(".modal-js").siblings(".overlay").fadeIn(300);
});

$(".js-close").click(function(e) {
    e.preventDefault();

    $(this).parent(".modal-js").fadeOut(300);
    $(".modal-js").siblings(".overlay").fadeOut(300);
})

$(".btn-bar_close").click(function() {
    $(this).closest(".modal").fadeOut(300);
    $(".overlay").fadeOut(300);
});

$(".js-buy").click(function(e) {
    //e.preventDefault();

    $(".modal-js-2").fadeIn(300);
    $(".modal-js-2").siblings(".overlay").fadeIn(300);
});

$(".js-close").click(function(e) {
    e.preventDefault();

    $(this).parent(".modal-js-2").fadeOut(300);
    $(".modal-js-2").siblings(".overlay").fadeOut(300);
})

$(".js-partner").click(function(e) {
    e.preventDefault();

    $(".modal-js-3").fadeIn(300);
    $(".modal-js-3").siblings(".overlay").fadeIn(300);
});

$(".js-close").click(function(e) {
    e.preventDefault();

    $(this).parent(".modal-js-3").fadeOut(300);
    $(".modal-js-3").siblings(".overlay").fadeOut(300);
})

$(".js-sale").click(function(e) {
    e.preventDefault();

    $(".modal-js-4").fadeIn(300);
    $(".modal-js-4").siblings(".overlay").fadeIn(300);
});

$(".js-close").click(function(e) {
    e.preventDefault();

    $(this).parent(".modal-js-4").fadeOut(300);
    $(".modal-js-4").siblings(".overlay").fadeOut(300);
})

$(".header-btn").click(function(e) {

    $(".modal-js-5").fadeIn(300);
    $(".modal-js-5").siblings(".overlay").fadeIn(300);
});

$(".modal__btn-bar").click(function() {
    $(this).closest(".modal").fadeOut(300);

    $(".modal-js-5").fadeIn(300);
})

$(".js-close").click(function(e) {
    e.preventDefault();

    $(this).parent(".modal-js-5").fadeOut(300);
    $(".modal-js-5").siblings(".overlay").fadeOut(300);
})

//buy

$(".modal-js-2 form").submit(function(e) {
    e.preventDefault();

    var msg = $(this).serialize();

    $.ajax({
        type: 'POST',
        url: 'handler.php',
        data: msg,
        success: function(data) {},
        error: function(xhr, str) {
            alert('Возникла ошибка');
        }
    });
});

//dugust

$(".header-form").submit(function(e) {
    e.preventDefault();

    var msg = $(this).serialize();

    $.ajax({
        type: 'POST',
        url: 'handler.php',
        data: msg,
        success: function(data) {
            if (data == "1") {
                $(".modal-js-5").fadeIn(300);
                $(".modal-js-5").siblings(".overlay").fadeIn(300);
            }

        },
        error: function(xhr, str) {
            alert('Возникла ошибка');
        }
    });
});

//заказ звонка

$(".modal-js form").submit(function(e) {
    e.preventDefault();

    var msg = $(this).serialize();

    $.ajax({
        type: 'POST',
        url: 'handler.php',
        data: msg,
        success: function(data) {

            $(".modal-js").fadeIn(300);
            $(".modal-js").siblings(".overlay").fadeIn(300);

        },
        error: function(xhr, str) {
            alert('Возникла ошибка');
        }
    });
});

$(".modal-js-4 form").submit(function(e) {
    e.preventDefault();

    var msg = $(this).serialize();

    $.ajax({
        type: 'POST',
        url: 'handler.php',
        data: msg,
        success: function(data) {},
        error: function(xhr, str) {
            alert('Возникла ошибка');
        }
    });
});

$(".modal-js-3 form").submit(function(e) {
    e.preventDefault();

    var msg = $(this).serialize();

    $.ajax({
        type: 'POST',
        url: 'handler.php',
        data: msg,
        success: function(data) {},
        error: function(xhr, str) {
            alert('Возникла ошибка');
        }
    });
});

$(".modal-js-6 form").submit(function(e) {
    e.preventDefault();

    var msg = $(this).serialize();

    $.ajax({
        type: 'POST',
        url: 'handler.php',
        data: msg,
        success: function(data) {},
        error: function(xhr, str) {
            alert('Возникла ошибка');
        }
    });
});
