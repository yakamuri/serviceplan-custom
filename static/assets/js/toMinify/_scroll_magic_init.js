var scrollmagic = (function(){

    function init() {
        // Init ScrollMagic
        var ctrl = new ScrollMagic.Controller(
            {
                globalSceneOptions: {
                    triggerHook: "onLeave",
                    duration: $(window).outerHeight(true)
                }
            }
            // {
            //     globalSceneOptions: {
            //         triggerHook: "onEnter",
            //         duration: "200%"
            //     }
            // }
        );

        //build scene
        // new ScrollMagic.Scene({triggerElement: "#parallax1"})
        //     .setTween("#parallax1 > .inside", {y: "80%", ease: Linear.easeNone})
        //     .addIndicators()
        //     .addTo(ctrl);
        //
        // new ScrollMagic.Scene({triggerElement: "#parallax2"})
        //     .setTween("#parallax2 > .inside", {y: "80%", ease: Linear.easeNone})
        //     .addIndicators()
        //     .addTo(ctrl);
        //
        // new ScrollMagic.Scene({triggerElement: "#parallax3"})
        //     .setTween("#parallax3 > .inside", {y: "80%", ease: Linear.easeNone})
        //     .addIndicators()
        //     .addTo(ctrl);
        //
        // new ScrollMagic.Scene({triggerElement: "#parallax4"})
        //     .setTween("#parallax4 > .inside", {y: "80%", ease: Linear.easeNone})
        //     .addIndicators()
        //     .addTo(ctrl);


        //define movement of panel
        var wipeAnimation = new TimelineMax()
            .fromTo('section#parallax2 > .inside', 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}) //in from left
            .fromTo('section#parallax3 > .inside', 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  //in from right
            .fromTo('section#parallax4 > .inside', 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); //in from top


        //create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#block-wrapper",
            triggerHook: "onLeave",
            duration: "300%"
        })
            .setPin("#block-wrapper")
            .setTween(wipeAnimation)
            .addIndicators()
            .addTo(ctrl);


        // Create scene
        // $("section").each(function () {
        //
        //     var name = $(this).attr('id');
        //     var number = $(this).attr('id').slice(-1);
        //
        //     new ScrollMagic.Scene({
        //         triggerElement: this,
        //         offset: 0
        //     })
        //         .setPin(this, {pushFollowers: false})
        //         .setClassToggle('#high' + number, 'active')
        //         //.setTween(this, 0.5, {scale: 1.5})
        //         .addIndicators({
        //             name: name
        //         })
        //         .addTo(ctrl);
        // });
    }

    return {
        init: init
    }

})();

$(document).ready(function(){
   //scrollmagic.init();
});