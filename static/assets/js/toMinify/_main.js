var customLoad = (function(){

    function bindEvents(){

        var ww = window.innerWidth;

            $( "section" ).each(function() {
                var bg_img = $(this).attr('data-image-src-big');
                var bg_img_s = $(this).attr('data-image-src-small');

                if (typeof bg_img !== typeof undefined && bg_img !== false) {
                    if(ww < 768){
                        $(this).css('background-image', 'url('+bg_img_s+')');
                    }
                    else {
                        $(this).css('background-image', 'url('+bg_img+')');
                    }
                }
            });
    }

    function openContent() {
        $('.btn-more').on('click', function(){
            $('.bottom-arrow').addClass('toTop');
            $(this).parent().animate({
                top: "-=95%"
            }, 1000, function(){
                $('.block-info').addClass('anim');
            });
        });
        // $('.toTop').on('click', function(){
        //     $(this).find('.bottom-arrow').removeClass('toTop');
        //     $(this).parent().animate({
        //         top: "+=95%"
        //     }, 1000, function(){
        //         $('.block-info').removeClass('anim');
        //     });
        // });

        $('.btn-minus').on('click', function(){
            var sect = $(this).parents('section');
            sect.find('.bottom-arrow').removeClass('toTop');
            sect.animate({
                top: "+=95%"
            }, 1000, function(){
                $('.block-info').removeClass('anim');
            });
        });
    }

    function dotNav(){
        $('.dot-navigation ul li a').on('click', function () {
            //e.preventDefault();
            $('.dot-navigation ul li a').removeClass('active');
            $(this).addClass('active');
        });
    }

    function init() {
        bindEvents();
        $(window).load(function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
        });
        openContent();
        dotNav();
    }

    return {
        init: init
    }
})();
$(document).ready(function(){
   customLoad.init();
});