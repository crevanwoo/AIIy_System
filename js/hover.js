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