;
(function () {
    'use strict';

    $('.side_button_part').attr('hidden', 'hidden');
    $('#red_button').on('click', function () { //$('.side_button_part').css('top', pageY_offset);
        $('.side_button_part').removeAttr('hidden');
    })
    $('#close_modal_window').on('click', function () {
        $('.side_button_part').attr('hidden', 'hidden');
    })




    $('.client_part').attr('hidden', 'hidden');
    $('#client').on('click', function () {
        $(this).addClass('active');
        $('#job_seeker').removeClass('active');
        $('.client_part').removeAttr('hidden');
        $('.job_seeker_part').attr('hidden', 'hidden');


    })
    $('#job_seeker').on('click', function () {
        $(this).addClass('active');
        $('#client').removeClass('active');
        $('.job_seeker_part').removeAttr('hidden');
        $('.client_part').attr('hidden', 'hidden');


    })



})();