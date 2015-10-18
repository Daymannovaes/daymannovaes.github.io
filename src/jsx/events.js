"use strict";

(($, Util, ScrollHandler, TickHandler) => {
	var $header = $("header");

	$(document).mousemove((event) => {
		let $background = $(".background__color");

		$background.each(function() {
			$(this).css({
				top: -5400 + event.pageY - $(this).data("offsetTop"),
				left: -4700 + event.pageX
			});
		});
	});
	var setOffsetBackground = () => {
		let $background = $(".background__color");

		$background.each(function() {
			let $parent = $(this).parent();
			$(this).data("offsetTop", $parent.offset().top);
		});

		setOffsetBackground = () => {};
	}

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

		clearTimeout(window.projTimeout);

		window.projTimeout = setTimeout(() => {
			writeProject($projectText);
		}, ms || 2000);
	};

	var Tick = {};
	Tick.developer = new TickHandler("#developer-text", "./developer", $header);

	var Scroll = {};
	Scroll.writeDeveloper = new ScrollHandler(Tick.developer.element, Tick.developer.execute);
	Scroll.writeProject = new ScrollHandler("#project-text", handleWriteProject);


	$(document).ready(() => {
		setOffsetBackground();

		Scroll.writeDeveloper.execute(2000);
		Scroll.writeProject.execute(1200);
	});
	$(document).scroll(() => {
		Scroll.writeDeveloper.execute(800);
		Scroll.writeProject.execute(800);
	});
})(jQuery, window.Util, window.ScrollHandler, window.TickHandler);