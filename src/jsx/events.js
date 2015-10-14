"use strict";
(() => {
	var $header = $("header");

	$(document).mousemove((event) => {
		let $background = $header.find("background");

		$background.css({
			top: -5400 + event.y,
			left: -4700 + event.x
		});
	});
})();