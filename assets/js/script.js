$(document).ready(function() {

    // Nav Mega Menu
    $(".main_header_nav_item_has_child").hover(function() {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

});