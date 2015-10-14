"use strict";
(($, Util) => {
	var $header = $("header");

	$(document).mousemove((event) => {
		let $background = $header.find(".background");

		$background.css({
			top: -5400 + event.pageY,
			left: -4700 + event.pageX
		});
	});

	var writeDeveloper = ($developerText) => {
		let $tick = $header.find(".tick");

		$tick.hide();
		Util.tickWrite({
			text: "./developer",
			element: $developerText,
			ms: 60,
			clear: true,
			callback: function() {
				$tick.show();
			}
		});
	};

	var handleWriteDeveloper = () => {
		let $developerText = $header.find("#developer-text");

		if(Util.$isVisible($developerText)) {
			clearTimeout(window.devTimeout);

			window.devTimeout = setTimeout(() => {
				writeDeveloper($developerText);
			}, 2000);
		}
	};

	$(document).ready(handleWriteDeveloper);
	$(document).scroll(() => {
		handleWriteDeveloper();
	});
})(jQuery, window.Util);