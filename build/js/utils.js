"use strict";

(function ($) {
	var Util = {};

	Util.tickWrite = function (_ref) {
		var text = _ref.text;
		var element = _ref.element;
		var ms = _ref.ms;
		var clear = _ref.clear;
		var callback = _ref.callback;
		var obj = _ref.obj;

		var writeRecursive = function writeRecursive(character) {
			element.text(element.text().toString() + character.toString());

			if (i == text.length - 1) typeof callback == "function" && callback();else {
				i++;
				(!obj || !obj.clear) && setTimeout(writeRecursive.bind(undefined, text[i]), ms);
			}
		};
		var i = 0;

		element = $(element);
		clear && element.text("");

		return (!obj || !obj.clear) && setTimeout(writeRecursive.bind(undefined, text[i]), ms);
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

	Util.$isOnTop = function (element, offset) {
		offset = offset || 0;
		var st = $(window).scrollTop(),
		    // Scroll Top
		y = $(element).offset().top;

		return st + offset >= y;
	};

	window.Util = Util;
})(jQuery);