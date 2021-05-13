$(".js-menu-button").on("click", function() {
    $(".js-menu").addClass("burger-menu_open")
    $("body").css("overflow-y", "hidden")
})

$(".js-menu-button_close").on("click", function() {
    $(".js-menu").removeClass("burger-menu_open")
    $("body").css("overflow-y", "auto")

})