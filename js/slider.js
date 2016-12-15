;
(function () {



    var width_num = parseInt($('.slide').css('width')) * ($('.slide').length),
        width_rem = width_num + 'rem';

    $('.slider_port .slide').each(function () {
        var atrnum = $(this).attr("data-index");

        var slide_transition = atrnum * width_num + "rem";
        $(this).css('left', slide_transition)
        
    })








    $('.slide_wrapper').css('width', width);

    var tick = 0;
    $('.arrow_right').click(
        function () {

            if (tick < $('.slide').length - 1) {
                tick++;
                $('.slide_wrapper').animate({
                    right: tick + '00%',
                });

            };
        })


    $('.arrow_left').click(
        function () {


            if (tick > 0) {
                tick--;
                $('.slide_wrapper').animate({
                    right: tick + '00%',
                });
            }
        })






})();