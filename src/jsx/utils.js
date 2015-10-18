"use strict";

(($) => {
	var Util = {};

	Util.tickWrite = ({text, element, ms, clear, callback}) => {
		let writeRecursive = (character) => {
			element.text(element.text().toString() + character.toString());

			if(i == text.length-1)
				(typeof callback == "function") && callback();
			else {
				i++;
				Util.tickWriteTimeout = setTimeout(writeRecursive.bind(this, text[i]), ms);
			}
		};
		let i = 0;

		element = $(element);
		clear && element.text("");

		return setTimeout(writeRecursive.bind(this, text[i]), ms);

	};

	Util.$isVisible = (element) => {
	    var vpH = $(window).height(), // Viewport Height
	        st = $(window).scrollTop(), // Scroll Top
	        y = $(element).offset().top,
	        elementHeight = $(element).height();

	    return ((y < (vpH + st)) && (y > (st - elementHeight)));
	}

	window.Util = Util;
})(jQuery);