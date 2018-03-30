var ajax_getJson = (function(){

    function initGetJson(){

        $.getJSON( "http://stage.cp-plan.net/timea/img_server/text.json", function( data ) {
            var items = [];
            $.each( data, function( key, val ) {
                items.push( "<div class='" + key + "'>" + val + "</div>" );
                console.log("items: " + items);
            });
            $( "<div/>", {
                "class": "row",
                html: items.join( "" )
            }).appendTo(textContainer);
        });
    }

    function init(){
        //initGetJson();
    }

    return {
        init:init
    }

})();
$(document).ready(function(){
   ajax_getJson.init();
});