 ;
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