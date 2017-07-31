var scrollmagic = (function(){

    function init() {
        // Init ScrollMagic
        var ctrl = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: "onLeave",
                duration: $(window).outerHeight(true)
            }
        });

        // Create scene
        $("section").each(function () {

            var name = $(this).attr('id');
            var number = $(this).attr('id').slice(-1);

            new ScrollMagic.Scene({
                triggerElement: this
            })
                .setPin(this, {pushFollowers: false})
                .setClassToggle('#high' + number, 'active')
                .addIndicators({
                    colorStart: "rgba(255,255,255,0.5)",
                    colorEnd: "rgba(255,255,255,0.5)",
                    colorTrigger: "rgba(255,255,255,1)",
                    name: name
                })
                .addTo(ctrl);
        });
    }

    return {
        init: init
    }

})();

$(document).ready(function(){
   scrollmagic.init();
});