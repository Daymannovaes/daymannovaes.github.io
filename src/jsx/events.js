"use strict";

(($, Util, ScrollHandler, TickHandler) => {
	var $header = $("header");

	var mult = 3;
	var windowH = $(window).height();
	var windowW = $(window).width();
	var backgroundSize = mult * Math.max(windowW, windowW);
	$("section.background").parent().mousemove(function(event) {
		let $background = $(this).find(".background__color");

		$background.css({
			top: -windowH + event.pageY - $background.data("offsetTop"),
			left: -windowW + event.pageX
		});
	});
	var setOffsetBackground = () => {
		let $background = $(".background__color");

		$background.each(function() {
			$(this).css({
				width: backgroundSize,
				height: backgroundSize,
				border: backgroundSize + "px solid transparent"
			});

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
	Tick.construction = new TickHandler("#under-construction .text", "this site is under construction", document, 30);

	var Scroll = {};
	Scroll.writeDeveloper = new ScrollHandler(Tick.developer.element, Tick.developer.execute);

	var $me = $("#me").find(".profile-container");
	Scroll.pulseMe = new ScrollHandler($me, function(element, ms) {
		setTimeout(() => $me.addClass("pulse"), ms || 800);
	});
	//Scroll.writeProject = new ScrollHandler("#project-text", handleWriteProject);


	$(document).ready(() => {
		setOffsetBackground();
		handleScrollTo();

		Scroll.writeDeveloper.execute(2000);
		Scroll.pulseMe.execute(100);
		Tick.construction.execute(100);
		//Scroll.writeProject.execute(1200);
	});
	$(document).scroll(() => {
		Scroll.writeDeveloper.execute(800);
		//Scroll.writeProject.execute(800);

		Scroll.pulseMe.execute(400);
	});

	var Events = {};
	Events.writeDeveloper = Tick.developer.execute;

	window.Events = Events;
})(jQuery, window.Util, window.ScrollHandler, window.TickHandler);