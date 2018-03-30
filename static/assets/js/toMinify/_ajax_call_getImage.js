var ajax_getTmage = (function(){

    function initgetImage(this_index){

        var ww = window.innerWidth;
        var section_bg = $('section').eq(this_index).find('.bg');
        var bg_img = section_bg.attr('data-image-src-big');
        var bg_img_s = section_bg.attr('data-image-src-small');

        var this_img = new Image();
        this_img.onload = function() {
            loaded_images_count++;
            if (loaded_images_count == total_images) {
                $(".se-pre-con").fadeOut("slow");
            }
            section_bg.find("img").attr("src", this.src);
        };

        if (typeof bg_img !== typeof undefined && bg_img !== false) {
            if(ww < 768){
                console.log("<768");
                this_img.src = bg_img_s;

            }
            else {
                console.log(">768");
                this_img.src = bg_img;
            }
        }
    }

    function init(){
        //initgetImage();
    }

    return {
        init:init
    }
})();
$(document).ready(function(){
   ajax_getTmage.init();
});