"use strict";
(($, Util) => {
	var $header = $("header");

	class ScrollHandler {
		constructor(queryElement, fn, context) {
			this.queryElement = queryElement;
			this.fn = fn;
			this.context = context || document;
		}

		get element() {
			return $(this.queryElement, this.context);
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

	var writeProject = ($projectText) => {
		let $tick = $projectText.parent().find(".tick");

		$tick.hide();
		Util.tickWrite({
			text: "daymannovaes@gmail.com",
			element: $projectText,
			ms: 60,
			clear: true,
			callback: function() {
				$tick.show();
			}
		});
	};

	var handleWriteProject = (element, ms) => {
		let $projectText = element || $header.find("#project-text");

		clearTimeout(window.devTimeout);

		window.devTimeout = setTimeout(() => {
			writeProject($projectText);
		}, ms || 2000);
	};

	var Scroll = {};
	Scroll.writeDeveloper = new ScrollHandler("#developer-text", handleWriteDeveloper);
	Scroll.writeProject = new ScrollHandler("#project-text", handleWriteProject);

	$(document).ready(() => {
		Scroll.writeDeveloper.execute(Scroll.writeDeveloper.element, 2000);
		Scroll.writeProject.execute(Scroll.writeProject.element, 1200);
	});
	$(document).scroll(() => {
		Scroll.writeDeveloper.execute(Scroll.writeDeveloper.element, 800);
		Scroll.writeProject.execute(Scroll.writeProject.element, 800);
	});
})(jQuery, window.Util);