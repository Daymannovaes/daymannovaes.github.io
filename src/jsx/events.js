"use strict";
(($, Util) => {
	var $header = $("header");
	class ScrollHandler {
		constructor(queryElement, fn) {
			this.queryElement = queryElement;
			this.fn = fn;
		}

		get element() {
			return $header.find(this.queryElement);	
		}

		get isVisible() {
			return Util.$isVisible(this.element);
		}

		execute(...args) {
			if(!this.executed && this.isVisible) {
				this.fn.apply(this, args);
				this.executed = true;
			}
		}
	}

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

	var handleWriteDeveloper = (element, ms) => {
		let $developerText = element || $header.find("#developer-text");

		clearTimeout(window.devTimeout);

		window.devTimeout = setTimeout(() => {
			writeDeveloper($developerText);
		}, ms || 2000);
	};

	var Scroll = {};
	Scroll.writeDeveloper = new ScrollHandler("#developer-text", handleWriteDeveloper);

	$(document).ready(() => {
		Scroll.writeDeveloper.execute(Scroll.writeDeveloper.element, 2000);
	});
	$(document).scroll(() => {
		Scroll.writeDeveloper.execute(Scroll.writeDeveloper.element, 800);
	});
})(jQuery, window.Util);