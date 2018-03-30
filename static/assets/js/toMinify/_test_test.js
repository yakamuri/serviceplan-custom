
var magic = (function() {

    function init(){
        var controller = new ScrollMagic.Controller({
            //to get on the fly updates from a mobile browser, the controller needs
            //to be attached to a container with overflow: scroll enabled
            container: '#scroll-container'

            //these scene option apply to all scenes attached to this controller
            //note that for the purposes of experimentation, these have been added to
            //each scene individually
            // globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: '#p1',
            duration: "200%",
            triggerHook: 1
        })
            .setTween('#p1 > .bg', {y: "80%", ease: Linear.easeNone})
            .setClassToggle('#high1', 'active')
            .addTo(controller);

        var scene = new ScrollMagic.Scene({
            triggerElement: '#p2',
            duration: "200%",
            triggerHook: 1
        })
            .setTween('#p2 > .bg', {y: "60%", ease: Linear.easeNone})
            .setClassToggle('#high2', 'active')
            .addTo(controller);

        var scene = new ScrollMagic.Scene({
            triggerElement: '#p3',
            duration: "200%",
            triggerHook: 1
        })
            .setTween('#p3 > .bg', {y: "40%", ease: Linear.easeNone})
            .setClassToggle('#high3', 'active')
            .addTo(controller);

        var scene = new ScrollMagic.Scene({
            triggerElement: '#p4',
            duration: "200%",
            triggerHook: 1
        })
            .setTween('#p4 > .bg', {y: "40%", ease: Linear.easeNone})
            .setClassToggle('#high4', 'active')
            .addTo(controller);
    }

    return {
        init: init
    }

})();

$(document).ready(function(){
   magic.init();
});