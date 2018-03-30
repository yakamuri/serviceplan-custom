var ajax_getPromise = (function(){

    function initgetPromise(){

        function imgLoad(url) {
            // Create new promise with the Promise() constructor;
            // This has as its argument a function
            // with two parameters, resolve and reject
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
        var body = document.querySelector('body');
        var myImage = new Image();

        // Call the function with the URL we want to load, but then chain the
        // promise then() method on to the end of it. This contains two callbacks
        imgLoad('https://i.imgur.com/Kusegys.jpg').then(function(response) {
            // The first runs when the promise resolves, with the request.reponse
            // specified within the resolve() method.
            var imageURL = window.URL.createObjectURL(response);
            myImage.src = imageURL;
            body.appendChild(myImage);
            // The second runs when the promise
            // is rejected, and logs the Error specified with the reject() method.
        }, function(Error) {
            console.log(Error);
        });

        // var bg_img = $('section').attr('data-image-src-big');
        // imgLoad(bg_img);

        var call_promise = new CustomEvent('call_promise');
        document.dispatchEvent(call_promise);
    }

    function init() {
        //initgetPromise();
    }

    return {
        init: init
    }
})();
$(document).ready(function(){
   ajax_getPromise.init();
});