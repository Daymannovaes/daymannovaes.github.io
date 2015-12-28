"use strict";

(($, ScrollHandler) => {

	// ---- DEFINE REQUIRED ELEMENTS
	var $me = $("#me").find(".profile-container");
	var $mapCefet = $("#map_cefet");
	var $mapUfmg = $("#map_ufmg");

	var Scroll = {};

	// ---- DEFINE CALLBACKS
	Scroll.pulseMe = new ScrollHandler($me, function(element, ms) {
		setTimeout(() => element.addClass("pulse"), ms || 800);
	});
	Scroll.pulseCefet = new ScrollHandler($mapCefet, function(element, ms) {
		setTimeout(() => element.addClass("pulse"), ms || 800);
	});
	Scroll.pulseUfmg = new ScrollHandler($mapUfmg, function(element, ms) {
		setTimeout(() => element.addClass("pulse"), ms || 800);
	});

	// just exposuring
	var ScrollEvents = Scroll;
	window.ScrollEvents = ScrollEvents;
})(jQuery, window.ScrollHandler);