"use strict";
(function ($, Util) {
	var $header = $("header");

	$(document).mousemove(function (event) {
		var $background = $header.find("background");

		$background.css({
			top: -5400 + event.pageY,
			left: -4700 + event.pageX
		});
	});

	var writeDeveloper = function writeDeveloper($developerText) {
		var $tick = $header.find(".tick");

		$tick.hide();
		Util.tickWrite({
			text: "./developer",
			element: $developerText,
			ms: 60,
			clear: true,
			callback: function callback() {
				$tick.show();
			}
		});
	};

	var handleWriteDeveloper = function handleWriteDeveloper() {
		var $developerText = $header.find("#developer-text");

		if (Util.$isVisible($developerText)) {
			clearTimeout(window.devTimeout);

			window.devTimeout = setTimeout(function () {
				writeDeveloper($developerText);
			}, 2000);
		}
	};

	$(document).ready(handleWriteDeveloper);
	$(document).scroll(function () {
		handleWriteDeveloper();
	});
})(jQuery, window.Util);