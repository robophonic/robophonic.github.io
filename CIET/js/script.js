$(window).on("load", function () {
    $(".date").datepicker();

    //mob_menu
    $('.mob_menu_icon').click(function () {
        $(this).toggleClass('active');
        $('header, body').toggleClass('active');
    });
});
