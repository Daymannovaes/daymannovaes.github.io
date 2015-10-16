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

	var Scroll = {};

	Scroll.writeDeveloper = {
		executed: false,
		_element: $header.find("#developer-text"),
		element: () => Scroll.writeDeveloper._element.length == 0 ? $header.find("#developer-text") : Scroll.writeDeveloper._element,
		isVisible: () => Util.$isVisible(Scroll.writeDeveloper.element()),
		fn: () => {
			if(!Scroll.writeDeveloper.executed && Scroll.writeDeveloper.isVisible()) {
				handleWriteDeveloper();
				Scroll.writeDeveloper.executed = true;
			}
		}
	};
	$(document).ready(() => {
		Scroll.writeDeveloper.fn();
	});
	$(document).scroll(() => {
		Scroll.writeDeveloper.fn();
	});
})(jQuery, window.Util);