$(window).on("scroll", function() {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
});
$(".go-top").on("click", function() {
    $("html, body").animate({ scrollTop: "0" }, );
});