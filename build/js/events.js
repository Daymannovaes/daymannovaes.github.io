"use strict";

(function ($, Util, ScrollHandler, TickHandler) {
	var $header = $("header");

	$(document).mousemove(function (event) {
		var $background = $(".background__color");

		$background.each(function () {
			$(this).css({
				top: -5400 + event.pageY - $(this).data("offsetTop"),
				left: -4700 + event.pageX
			});
		});
	});
	var _setOffsetBackground = function setOffsetBackground() {
		var $background = $(".background__color");

		$background.each(function () {
			var $parent = $(this).parent();
			$(this).data("offsetTop", $parent.offset().top);
		});

		_setOffsetBackground = function () {};
	};

	var handleScrollTo = function handleScrollTo() {
		var $scrollers = $("[data-scroll-to]");

		$scrollers.click(function (event) {
			var offsetTop = $($(this).data("scroll-to")).offset().top;

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

	$(document).ready(function () {
		_setOffsetBackground();
		handleScrollTo();

		Scroll.writeDeveloper.execute(2000);
		//Scroll.writeProject.execute(1200);
	});
	$(document).scroll(function () {
		Scroll.writeDeveloper.execute(800);
		//Scroll.writeProject.execute(800);
	});
})(jQuery, window.Util, window.ScrollHandler, window.TickHandler);