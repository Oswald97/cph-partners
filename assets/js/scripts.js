$('.burger').click(function () {
    $(this).toggleClass('active');
    $("#nav").toggleClass("show-menu");
    $("#nav").fadeIn();

});