;
(function () {
	
	
	

/*function calc_slider_size() {*/

var width_num = parseInt($('.slide').css('width')) * ($('.slide').length),
  width_rem = width_num + 'rem';
 console.log(width_num);
    
    $('.slider_port .slide').each(function () {
      var atrnum =  $(this).attr("data-index");
       
        var slide_transition = atrnum * width_num + "rem";
             console.log(slide_transition);
        $(this).css('left', slide_transition)


    })

/*}*/
	
	
	
	
	
	
	
	
	
	
		console.log(width);
	$('.slide_wrapper').css('width', width);
	
	var tick = 0;
    $('.arrow_right').click(
        function () {console.log(tick);
            if (tick < $('.slide').length - 1) {
                tick++;
                $('.slide_wrapper').animate({
                    right: tick + '00%',
                });
                
            };
        })


    $('.arrow_left').click(
		function () {console.log('tick');
  
        if (tick > 0) {
            tick--;
            $('.slide_wrapper').animate({
                right: tick + '00%',
            });          
        }
    })
	
	
	
	
	
	
})();