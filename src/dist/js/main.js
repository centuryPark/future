$(document).ready(function () {
    //alert(1);
});

var MENUE_BODY = $("#menu_body");
var MENUE_OPEN = false;

$("#menu_control")
    .on("mouseenter", function (event) {
        if (!MENUE_OPEN) {
            MENUE_OPEN = true;
            setTimeout(function () {
                MENUE_BODY.slideDown();
            }, 10);
        }
    })
    .on("mouseleave", function () {
        if (MENUE_OPEN) {
            MENUE_OPEN = false;
            MENUE_BODY.slideUp();
        }
    });

$(document).on("click", function (e) {
    var key = e.target.id;
    /*switch (key) {
        case "go_zaojiu":
            console.log("zaojiu");
            break;
    }*/
});
