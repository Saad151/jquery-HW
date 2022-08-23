$(function () {
    $(window).on('load', function () {
        $('#preloder').fadeOut(1000);
    })


    $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop()


        if (scrollPosition > 200) {
            $('#header').addClass('active')
            $('#header').addClass('bg_color')
            $('nav div ul li a').addClass('menu_color')
        }else{
            $('#header').removeClass('active')
            $('#header').removeClass('bg_color')
            $('nav div ul li a').removeClass('menu_color')
        }
    })

})