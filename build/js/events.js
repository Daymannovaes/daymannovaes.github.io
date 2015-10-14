"use strict";
(function () {
	$(document).mousemove(function (event) {
		var $background = $("header.background");

		$background.css({
			top: -5400 + event.y,
			left: -4700 + event.x
		});
	});
})();