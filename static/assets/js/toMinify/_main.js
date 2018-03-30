var customLoad = (function(){

    var total_images = 0;
    var loaded_images_count = 0;

    function loadImage(){
        var section = $('section');
        total_images = section.length;
        for(var i = 0; i < section.length; i++){
            initImage(i);
            openContent(i);
        }
    }

    function initImage(this_index) {

        var ww = window.innerWidth;
        var section_bg = $('section').eq(this_index).find('.bg');
        var bg_img = section_bg.attr('data-image-src-big');
        var bg_img_s = section_bg.attr('data-image-src-small');

        function imgLoad(url) {
            // Create new promise with the Promise() constructor;
            return new Promise(function(resolve, reject) {
                // Standard XHR to load an image
                var request = new XMLHttpRequest();
                request.open('GET', url);
                request.responseType = 'blob';

                // When the request loads, check whether it was successful
                request.onload = function() {
                    if (request.status === 200) {
                        // If successful, resolve the promise by passing back the request response
                        resolve(request.response);
                    } else {
                        // If it fails, reject the promise with a error message
                        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
                    }
                };

                request.onerror = function() {
                    // Also deal with the case when the entire request fails to begin with
                    // This is probably a network error, so reject the promise with an appropriate message
                    reject(Error('There was a network error.'));
                };

                // Send the request
                request.send();
            });
        }

        // Get a reference to the body element, and create a new image object
        var body = document.getElementsByClassName('bg')[this_index];
        var myImage = new Image();

        // Call the function with the URL we want to load, but then chain the
        // promise then() method on to the end of it. This contains two callbacks
        imgLoad(bg_img).then(function(response) {
            // The first runs when the promise resolves, with the request.reponse
            // specified within the resolve() method.
            var imageURL = window.URL.createObjectURL(response);
            myImage.src = imageURL;
            body.appendChild(myImage);
            // The second runs when the promise
            // is rejected, and logs the Error specified with the reject() method.

            loaded_images_count++;
            if (loaded_images_count === total_images) {
                $(".se-pre-con").fadeOut("slow");
            }

        }, function(Error) {
            console.log(Error);
        });


    }

    function openContent(this_index) {

        var button_plus = $('section').eq(this_index).find('.btn-more');
        button_plus.unbind('click').bind('click', function(){
            var textContainer = $(this).siblings('.block-info').find('.container');

            var url = "http://stage.cp-plan.net/timea/img_server/test1.json";

            function textLoad(url) {
                return new Promise(function(resolve, reject) {
                    var request = new XMLHttpRequest();
                    request.open('GET', url);
                    request.send();
                    request.onload  = function() {
                        if (request.status === 200) {
                            var resp = request.responseText;
                            var respJson = JSON.parse(resp);
                            resolve(respJson);
                        } else {
                            reject(Error('Text didn\'t load successfully; error code:' + request.statusText));
                        }
                    };
                    request.onerror = function() {
                        reject(Error('There was a network error.'));
                    };

                });
            }

            textLoad(url).then(function(response) {

                var output="<div class='row'>" +
                    "<div class='col'>Name</div>" +
                    "<div class='col'>Provider</div>" +
                    "<div class='col'>URl</div>" +
                    "</div>";
                for (var i = 0; i < response.length; i++) {
                    output+="<div class='row'>" +
                        "<div class='col'>" + response[i].name + "</div>" +
                        "<div class='col'>" + response[i].provider + "</div>" +
                        "<div class='col'>" + response[i].url + "</div>" +
                        "</div>";
                }
                textContainer.html(output);

            }, function(Error) {
                console.log(Error);
            });


            $(this).siblings('.arrow').addClass('toTop');
            $(this).parent().find('.bg').addClass('closed');
            $(this).siblings('.block-info').addClass('anim');
        });

        var button_minus = $('section').eq(this_index).find('.btn-minus');
        button_minus.unbind('click').bind('click', function(){
            $(this).siblings('.container').find('.row').remove();
            var sect = $(this).parents('section');
            sect.find('.arrow').removeClass('toTop');
            sect.find('.bg').removeClass('closed');
            $(this).parents('.block-info').removeClass('anim');
        });
    }

    function init() {
        loadImage();
    }

    return {
        init: init
    }
})();
$(window).load(function(){
   customLoad.init();
});