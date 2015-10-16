"use strict";

(function ($) {
	var Util = {};

	Util.tickWrite = function (_ref) {
		var text = _ref.text;
		var element = _ref.element;
		var ms = _ref.ms;
		var clear = _ref.clear;
		var callback = _ref.callback;

		var writeRecursive = function writeRecursive(character) {
			element.text(element.text().toString() + character.toString());

			if (i == text.length - 1) typeof callback == "function" && callback();else {
				i++;
				Util.tickWriteTimeout = setTimeout(writeRecursive.bind(undefined, text[i]), ms);
			}
		};
		var i = 0;

		element = $(element);
		clear && element.text("");

		Util.tickWriteTimeout = setTimeout(writeRecursive.bind(undefined, text[i]), ms);
	};

	Util.$isVisible = function (element) {
		var vpH = $(window).height(),
		    // Viewport Height
		st = $(window).scrollTop(),
		    // Scroll Top
		y = $(element).offset().top,
		    elementHeight = $(element).height();

		return y < vpH + st && y > st - elementHeight;
	};

	window.Util = Util;
})(jQuery);