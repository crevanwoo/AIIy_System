;
(function () {



    $('.scroll_button').on('click', function () {


    })




    /* page about */

    /* second_slider */

    ;
    (function () { /*slider*/
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


        /* structure: slider, slide, data-slide-num in slider_nav_button and slide; numerable from 1*/


    })();


    ;
    (function () { //slider_arrow




        var nav_arrow = document.querySelectorAll('.slider .arrow');
        var index = 0;
        var size = 0;
        var slider_offset;


        if (nav_arrow[0].classList.contains('slider_arr')) {

            slider_offset = 20
        } else {
            slider_offset = 33.33
        }








        for (var i = 0; i < nav_arrow.length; i++) {
            nav_arrow[i].addEventListener('click', sliderMove)
        }

        function sliderMove(e) {
            var slider = getParent(e, 'slider'); //takes slider
            var slides_block = slider.querySelector('.slides_block');


            if (e.target.classList.contains('arrow_left') && index > 0) {

                size -= slider_offset;
                console.log(size);
                slides_block.style.transform = "translate(-" + size + "%,0)";


                index--;
            } else if (e.target.classList.contains('arrow_right') && index < 2) {

                size += slider_offset;
                console.log(size);
                slides_block.style.transform = "translate(-" + size + "%,0)";
                index++
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
    
    
    



})();