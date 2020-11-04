// main.js
// 2depth menu effect
$(function(){
    $('.depth1 > li').hover(
        function(){
            $('.depth1 > li > .depth2').stop().slideDown(300);
        },
        function(){
            $('.depth1 > li > .depth2').stop().fadeOut(300);
        });
});

// main_visual : 메인 배너 슬라이더
$(function(){
    $('.fixed_img').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        arrows: false
    });    
});

// 메인 메뉴 슬라이더
$(function(){
    $('.sliders').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false
    });
})


// best store 슬라이더

$(function(){
    $('.store_slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

// sub1_1 이미지 슬라이더
$(function(){
    $('.imgs_slider').slick({
        arrows: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

// 메뉴 호버
$(function(){
    $('.menu_first div').hover(
        function(){
            $(this).find('img').fadeTo(500, 0.8);
            $(this).find('.hover').show(500);
        },
        function(){
            $(this).find('img').stop().show(500);
            $('.hover').stop().fadeOut(500);
        })
})

$(function(){
    $('.menu_second div').hover(
        function(){
            $(this).find('img').fadeTo(500, 0.8);
            $(this).find('.hover').show(500);
        },
        function(){
            $(this).find('img').stop().show(500);
            $('.hover').stop().fadeOut(500);
        })
})

// 메인페이지 탑버튼

$(function(){
    var goTop = $('#topBtn');
    var delay = 1000;

    $(window).on('scroll touchmove mousewheel DOMMouseScroll', function(){
        if($(window).scrollTop()>=500) {
            $(goTop).fadeIn(500);
        } else { $(goTop).fadeOut(500); }
    });

    $(goTop).click(function(){
        $('html, body').animate({scrollTop: 0}, delay);
    });
});

