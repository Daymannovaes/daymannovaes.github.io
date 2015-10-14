"use strict";

(function ($) {
	var Util = {};

	Util.tickWrite = function (_ref) {
		var text = _ref.text;
		var element = _ref.element;
		var ms = _ref.ms;
		var clear = _ref.clear;
		var callback = _ref.callback;

		element = $(element);
		clear && element.text("");

		for (var i in text) {
			var character = text[i];

			setTimeout((function (_ref2) {
				var character = _ref2.character;
				var i = _ref2.i;

				element.text(element.text().toString() + character.toString());

				if (i == text.length - 1 && typeof callback == "function") callback();
			}).bind(undefined, { character: character, i: i }), ms * i);
		}
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