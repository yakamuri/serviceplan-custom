var ajax_getAjax = (function(){
    function initgetAjax() {


        var url = "http://stage.cp-plan.net/timea/img_server/test1.json";
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function(result) {
                console.log(result);
                var output="<div class='row'>" +
                                    "<div class='col'>Name</div>" +
                                    "<div class='col'>Provider</div>" +
                                    "<div class='col'>URl</div>" +
                                "</div>";
                for (var i = 0; i < result.length; i++) {
                    output+="<div class='row'>" +
                            "<div class='col'>" + result[i]['name'] + "</div>" +
                            "<div class='col'>" + result[i]['provider'] + "</div>" +
                            "<div class='col'>" + result[i]['url'] + "</div>" +
                        "</div>";
                }
                textContainer.html(output);
            }
        });
    }

    function init() {
        //initgetAjax();
    }

    return {
        init: init
    }
})();
$(document).ready(function(){
    ajax_getAjax.init();
});