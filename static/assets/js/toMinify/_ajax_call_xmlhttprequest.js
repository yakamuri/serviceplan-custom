var ajax_XmlHttpRequest = (function () {

    var total_images = 0;
    var loaded_images_count = 0;

    function loadImage(){
        var section = $('section');
        total_images = section.length;
        for(var i = 0; i < section.length; i++){

            initXMLHttpRequest(i);
        }
    }

    function initXMLHttpRequest(this_index){

        var ww = window.innerWidth;
        var section_bg = $('section').eq(this_index).find('.bg');
        var bg_img = section_bg.attr('data-image-src-big');
        var bg_img_s = section_bg.attr('data-image-src-small');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200){
                var img = document.getElementsByClassName('image')[this_index];
                var url = window.URL || window.webkitURL;
                img.src = url.createObjectURL(this.response);
                //createObjectURL creates a DOM string containing a URL repres. the object given in the parameter.
            }
        };
        xhr.open('GET', bg_img);
        xhr.responseType = 'blob';
        xhr.send();
        $(".se-pre-con").fadeOut("slow");

        var call_xmlhttprequest = new CustomEvent('call_xmlhttprequest',
            {
                'detail': this_index
            }
        );
        document.dispatchEvent(call_xmlhttprequest);
    }

    function init(){
        //loadImage();
    }

    return {
        init: init
    }

})();
$(document).ready(function(){
   ajax_XmlHttpRequest.init();
});