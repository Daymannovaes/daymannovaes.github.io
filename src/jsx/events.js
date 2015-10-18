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
	};

	var handleScrollTo = () => {
		let $scrollers = $("[data-scroll-to]");

		$scrollers.click(function(event) {
			let offsetTop = $($(this).data("scroll-to")).offset().top;

			event.preventDefault();
			$('html, body').animate({
				scrollTop: offsetTop
			}, 1000, "easeInOutQuint");
		});
	};

	var Tick = {};
	Tick.developer = new TickHandler("#developer-text", "./developer", $header);

	var Scroll = {};
	Scroll.writeDeveloper = new ScrollHandler(Tick.developer.element, Tick.developer.execute);
	//Scroll.writeProject = new ScrollHandler("#project-text", handleWriteProject);


	$(document).ready(() => {
		setOffsetBackground();
		handleScrollTo();

		Scroll.writeDeveloper.execute(2000);
		//Scroll.writeProject.execute(1200);
	});
	$(document).scroll(() => {
		Scroll.writeDeveloper.execute(800);
		//Scroll.writeProject.execute(800);
	});
})(jQuery, window.Util, window.ScrollHandler, window.TickHandler);