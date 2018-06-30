$(document).ready(function(){
    $(".nav-menu").click(function(){
        $(".nav-menu_list").show()
    });
    $(".nav-menu_list").click(function(){
        $(this).hide();
    });

    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        touchSensitivity: 5,
        dragAndMove: true,
        scrollOverflow: false,
        verticalCentered: false
    });
});

$(".parallax-element").inertiaScroll({
    parent: $(".container")
});

$(".parallax-element").each(function(){
    var speed = $(this).data("speed");
    var height = $(this).height() + "px";
    $(this).css("line-height",height).text(speed);
});

