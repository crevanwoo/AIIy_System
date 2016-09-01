;
(function () {
	
	
	

/*function calc_slider_size() {*/



    
    $('.slide').each(function () {
      var atrnum =  $(this).attr("data-index");
        console.log(atrnum);
        var slide_transition = atrnum * width + "px";
        $(this).css('left', slide_transition)


    })

/*}*/
	
	
	
	
	
	
	
	
	
	var width = ($('.slide').css('width')) * ($('.slide').length) + 'px';
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