;
(function () {



    $('.scroll_button').on('click', function () {


    })




    /* page about */

    /* second_slider */

    ;
    (function () {
        var nav_button = document.querySelectorAll('.slider_nav_button');
        for (var i = 0; i < nav_button.length; i++) {
            nav_button[i].addEventListener('click', sliderMove)
        }

        function sliderMove(e) {
            var index = e.target.getAttribute('data-slide-num');
            var slider = getParent(e, 'slider'); //takes slider
            var slide = slider.querySelector('.slide[data-slide-num="' + index + '"]'); //takes slide with defined attr
            slider.querySelector('.slide.active').setAttribute('hidden', '');
            slider.querySelector('.slide.active').classList.remove('active');
            slide.removeAttribute('hidden');
            slide.classList.add('active');
            slider.querySelector('.slider_nav_button.active').classList.remove('active');
            e.target.classList.add('active');
        }

        function getParent(e, class_name) {
            var elem = e.target;
            while (!elem.classList.contains(class_name)) {
                elem = elem.parentElement
            }
            return elem
        }





    })();


    ;
    (function () {




        var nav_arrow = document.querySelectorAll('.slider .arrow');
        var index = 0;
        var size = 0;
        var slider_offset;









        for (var i = 0; i < nav_arrow.length; i++) {
            nav_arrow[i].addEventListener('click', sliderMove)
        }

        function sliderMove(e) {
            if (nav_arrow[0] && e.target.classList.contains('slider_arr')) {

                slider_offset = 20
            } else {
                slider_offset = 33.33
            }

            var slider = getParent(e, 'slider'); //takes slider
            var slides_block = slider.querySelector('.slides_block');


            if (e.target.classList.contains('arrow_left') && index > 0) {

                size -= slider_offset;
                console.log(size);
                slides_block.style.transform = "translate(-" + size + "%,0)";


                index--;

                if (index == 0) {
                    document.querySelector('.slider_phone .arrow_left').setAttribute('hidden', '')
                }
                if (index < 2) {
                    document.querySelector('.slider_phone .arrow_right').removeAttribute('hidden')

                }
            } else if (e.target.classList.contains('arrow_right') && index < 2) {

                size += slider_offset;
                console.log(size);
                slides_block.style.transform = "translate(-" + size + "%,0)";
                index++
                if (index == 2) {
                    document.querySelector('.slider_phone .arrow_right').setAttribute('hidden', '')
                }
                if (index > 0) {
                    document.querySelector('.slider_phone .arrow_left').removeAttribute('hidden')

                }
            }

        }

        function getParent(e, class_name) {
            var elem = e.target;
            while (!elem.classList.contains(class_name)) {
                elem = elem.parentElement
            }
            return elem
        }

    })();








    setModalButton();
    var header = document.querySelector('header');



    function setModalButton() {
        $('#red_button').on('click', modalOpen);
        $('.play').on('click', modalOpen);
        for (var i = 0; i < document.querySelectorAll('.modal .close').length; i++) {
            document.querySelectorAll('.modal .close')[i].addEventListener('click', modalClose);
        }
    }


    function modalOpen(e) {
        e.preventDefault();
        takeUsedButton(e);
        var modal_id = e.target.getAttribute('data-modal-id');

        document.getElementById(modal_id).style.display = "block";
        var int = setInterval(function () {
            if ((getComputedStyle(document.getElementById(modal_id)).opacity) < 0.98) {
                document.getElementById(modal_id).style.opacity = +document.getElementById(modal_id).style.opacity + 0.1;
            } else {
                clearInterval(int)
            }
        }, 30)
        var body_width = document.body.offsetWidth;
        window_offset = window.pageYOffset;
        document.body.style.marginRight = window.innerWidth - body_width + "px";
        header.style.marginRight = window.innerWidth - body_width + "px";
        document.body.style.width = body_width + "px";
        document.body.style.top = "-" + window_offset + "px";
        document.body.classList.add('hidden');
        header.style.display = "none";


    }

    function modalClose(e) {
        var elem = e.target;
        while (!elem.classList.contains('modal')) {
            elem = elem.parentElement;
        }
        var modal_id = elem.id;
        document.getElementById(modal_id).style.display = "none";
        document.getElementById(modal_id).style.opacity = "0";
        document.body.style.marginRight = 0;
        header.style.marginRight = 0;
        document.body.style.width = (document.body.offsetHeight >= 1200) ? "100%" : "100vw";
        document.body.classList.remove('hidden');
        window.scrollTo(0, window_offset);
        header.style.display = "block";

    }

    function takeUsedButton(e) {
        if (e.target.hasAttribute('data-trigger-ident')) {
            document.getElementById('takes_used_button').value = e.target.getAttribute('data-trigger-ident')
        }
    }

    /*body  &.hidden {
        //overflow: hidden //old scrolling
        position: fixed; //new scrolling
        left: 0; //new scrolling
    }*/




    $('.scroll_button').on('click', function () {
        $('html, body').animate({
            scrollTop: "550rem"
        }, 1000);
    })







    $('.content_about').find('.cell_2_w, .cell_1, .cell_2_w_2_h').each(function () {
        $(this).find('.title').attr('data-top', $(this).find('.title').css('top'))
    }).hover(
        function () {
            $(this).find('.title').addClass('active').animate({
                top: 0,
            })
        },
        function () {
            $(this).find('.title').animate({
                top: $(this).find('.title').removeClass('active').attr('data-top')
            })
        }
    )







    var tick = 0;

    $('.content_about').find('.arrow_left_').on('click', function (e) {
        if (tick > 0) {
            tick--;
            $('.vert_slider .slides_container').animate({
                top: -tick * 100 + '%'
            })
            $("#runner").animate({
                left: tick * 11.11 + "%"



            })
            $("#red_year").text(2007 + tick);
            if (tick === 0) {
                $('.content_about').find('.arrow_left_').attr('hidden', '')
            }
            if (tick < $('.vert_slider .slides_container .slide').length - 1) {
                $('.content_about').find('.arrow_right_').removeAttr('hidden')
            }
        }


    })


    $('.content_about').find('.arrow_right_').on('click', function () {

        if (tick < $('.vert_slider .slides_container .slide').length - 1) {
            tick++;
            $('.vert_slider .slides_container').animate({
                top: -tick * 100 + '%'
            })
            $("#runner").animate({
                left: tick * 11.11 + "%"



            })
            $("#red_year").text(2007 + tick)
            if (tick == $('.vert_slider .slides_container .slide').length - 1) {
                $('.content_about').find('.arrow_right_').attr('hidden', '')
            }

            if (tick > 0) {
                $('.content_about').find('.arrow_left_').removeAttr('hidden')
            }
        }


    })








})();






(function () {
    'use strict';
    var header_menu_item = document.getElementsByClassName('header_hidden_contact');
    for (var i = 0; i < header_menu_item; i++) {
        header_menu_item[i].hidden = true;
    }


    window.onclick = function (e) {
        console.log(e.target);
        var header_menu_elem = document.getElementsByClassName('header_hidden_contact');
        if (e.target.hasAttribute('data-arrow') && e.target.getAttribute('data-arrow') != 'spread' && e.target.className == "arrow") {
            for (var i = 0; i < header_menu_elem.length; i++) {
                header_menu_item[i].hidden = false;
                header_menu_elem[i].classList.add("active");
            }
            document.querySelector('.arrow').style = "transform: rotate(225deg)";
            document.querySelector('.arrow').setAttribute('data-arrow', 'spread')


        } else if (!e.target.hasAttribute('data-arrow') || e.target.hasAttribute('data-arrow') && e.target.getAttribute('data-arrow') == 'spread' && e.target.className == "arrow") {
            for (var i = 0; i < header_menu_elem.length; i++) {
                header_menu_item[i].hidden = true;
                header_menu_elem[i].classList.remove("active");
            }

            document.querySelector('.arrow').style = "transform: rotate(45deg)";
            document.querySelector('.arrow').setAttribute('data-arrow', 'hide')
        }
    }




    var header_height = document.getElementsByTagName('header')[0].offsetHeight;
    var top_part = parseFloat(getComputedStyle(document.getElementsByClassName('top_part')[0]).height);

    function nav_color() {
        if (window.pageYOffset >= (top_part - header_height)) {
            console.log((window.pageYOffset - top_part - header_height));
            document.getElementsByTagName('header')[0].classList.add('active');

        } else if (window.pageYOffset < (top_part - header_height)) {
            document.getElementsByTagName('header')[0].classList.remove('active');

        }

    }
    window.onscroll = function () {
        nav_color();

    };


    window.onload = function () {
        nav_color();

    };

})();



;
(function () {
    'use strict';


    var hover_parent = document.getElementsByClassName('hover_parent');
    for (var i = 0; i < hover_parent.length; i++) {
        hover_parent[i].getElementsByClassName('hover_block')[0].hidden = true;
        hover_parent[i].onmouseenter = function () {

            this.classList.add('active');
            this.getElementsByClassName('hover_block')[0].hidden = false;
        }
        hover_parent[i].onmouseleave = function () {
            this.classList.remove('active');
            this.getElementsByClassName('hover_block')[0].hidden = true;
        }
    }

})();



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

$(document).ready(function () {
    $('.about_page_slider').slick({
        dots: true,
        swipeToSlide: true,
    });
});



$(document).ready(function () {
    $('.slider_excellense').slick({
        dots: true,
        swipeToSlide: true,
    });
});

$(document).ready(function () {
    $('.home_page_portfolio_slider').slick({
        dots: true,
        swipeToSlide: true,
    });
});

$(document).ready(function () {
    $('.testimonials_slider').slick({
        dots: true,
        swipeToSlide: true,
    });
});


$(document).ready(function () {
    $('.modal_carousel_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
    });
});

$(document).ready(function () {
    $('.page_portfolio_slider').slick({
        dots: true,
        swipeToSlide: true,
    });
});



$(document).ready(function () {
    $('.smartphone_slider').slick({     
        swipeToSlide: true,
    });
});