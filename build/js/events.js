"use strict";

(function ($, Util, ScrollHandler, TickHandler) {
	var $header = $("header");

	var mult = 3;
	var windowH = $(window).height();
	var windowW = $(window).width();
	var backgroundSize = mult * Math.max(windowW, windowW);
	$("section.background").parent().mousemove(function (event) {
		var $background = $(this).find(".background__color");

		var type = $background.data("type") || "page";
		$background.css({
			top: -windowH + event[type + "Y"] - $background.data("offsetTop"),
			left: -windowW + event[type + "X"]
		});
	});
	var _setOffsetBackground = function setOffsetBackground() {
		var $background = $(".background__color");

		$background.each(function () {
			$(this).css({
				width: backgroundSize,
				height: backgroundSize,
				border: backgroundSize + "px solid transparent"
			});

			var $parent = $(this).parent();
			$(this).data("offsetTop", $parent.offset().top);
		});

		_setOffsetBackground = function () {};
	};

	var handleScrollTo = function handleScrollTo() {
		var $scrollers = $("[data-scroll-to]");

		$scrollers.click(function (event) {
			var offsetTop = $($(this).data("scroll-to")).offset().top;
			offsetTop += parseInt($(this).data("offset")) || 0;

			var ms = parseInt($(this).data("ms")) || 1000;

			$(this).removeAttr("data-scroll-to");
			event.preventDefault();
			$('html, body').animate({
				scrollTop: offsetTop
			}, ms, "easeInOutQuint");
		});
	};

	var lastScrollTop = 0;
	var delta = 5;
	var fixedHeader;
	var fixedHeaderIcon;
	var $inTop = $();
	var fixedHeaderTH = { clear: function clear() {} };
	var handleSetFixed = function handleSetFixed() {
		var scrollTop = $(window).scrollTop();

		if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

		var $toTop = $();
		$(".section-header").each(function () {
			if (Util.$isOnTop($(this))) $toTop = $(this);
		});
		if ($toTop[0] && Util.$isOnTop($toTop, -$toTop.height())) {
			if ($toTop[0] != $inTop[0]) {
				$inTop = $toTop;
				fixedHeader.removeClass("education-header project-header experience-header skill-header");
				fixedHeader.addClass("visible").addClass($toTop[0].id);
				fixedHeader.fadeIn(100);
				fixedHeaderIcon.removeClass("fa-rocket fa-graduation-cap fa-flask fa-gavel");
				fixedHeaderIcon.addClass($toTop.data("icon"));

				fixedHeader.find("h3").data("scroll-to", "#" + $toTop[0].id);

				setTimeout(fixedHeaderTH.timeout);
				fixedHeaderTH.clear();
				fixedHeaderTH = new TickHandler("#fixed-header-text", $toTop.find("h2").text(), fixedHeader, 60);
				fixedHeaderTH.timeout = fixedHeaderTH.execute(null, 200);
			}
		} else {
			fixedHeader.removeClass("education-header project-header experience-header skill-header");
			fixedHeader.fadeOut(200);
			fixedHeaderTH.clear();
			fixedHeaderTH.execute(null, 200);
			$inTop = [null];
		}

		lastScrollTop = scrollTop;
	};

	var Tick = {};
	Tick.developer = new TickHandler("#developer-text", "./developer", $header);
	Tick.construction = new TickHandler("#under-construction .text", "this site is under construction", document, 30);

	var Scroll = {};
	Scroll.writeDeveloper = new ScrollHandler(Tick.developer.element, Tick.developer.execute);

	var $me = $("#me").find(".profile-container");
	Scroll.pulseMe = new ScrollHandler($me, function (element, ms) {
		setTimeout(function () {
			return $me.addClass("pulse");
		}, ms || 800);
	});
	//Scroll.writeProject = new ScrollHandler("#project-text", handleWriteProject);

	var didScroll = false;
	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);
	var hasScrolled = function hasScrolled() {
		handleSetFixed();
	};
	$(document).ready(function () {
		_setOffsetBackground();
		fixedHeader = $("#fixed-header");
		fixedHeaderIcon = $("#fixed-header-icon");
		handleScrollTo();

		Scroll.writeDeveloper.execute(2000);
		Scroll.pulseMe.execute(100);
		Tick.construction.execute(100);
		//Scroll.writeProject.execute(1200);
	});
	$(document).scroll(function () {
		didScroll = true;

		Scroll.writeDeveloper.execute(800);
		//Scroll.writeProject.execute(800);

		Scroll.pulseMe.execute(400);
	});

	var Events = {};
	Events.writeDeveloper = Tick.developer;

	window.Events = Events;
})(jQuery, window.Util, window.ScrollHandler, window.TickHandler);