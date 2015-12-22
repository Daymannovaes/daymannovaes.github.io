"use strict";

(($) => {
	var Util = {};

	Util.tickWrite = ({text, element, ms, clear, callback, obj}) => {
		let writeRecursive = (character) => {
			element.text(element.text().toString() + character.toString());

			if(i == text.length-1)
				(typeof callback == "function") && callback();
			else {
				i++;
				(!obj || !obj.clear) && setTimeout(writeRecursive.bind(this, text[i]), ms);
			}
		};
		let i = 0;

		element = $(element);
		clear && element.text("");

		return (!obj || !obj.clear) && setTimeout(writeRecursive.bind(this, text[i]), ms);

	};

	Util.$isVisible = (element) => {
	    var vpH = $(window).height(), // Viewport Height
	        st = $(window).scrollTop(), // Scroll Top
	        y = $(element).offset().top,
	        elementHeight = $(element).height();

	    return ((y < (vpH + st)) && (y > (st - elementHeight)));
	}

	Util.$isOnTop = (element, offset) => {
		offset = offset || 0;
	    var st = $(window).scrollTop(), // Scroll Top
	        y = $(element).offset().top;

	    return st + offset >= y;	
	}

	window.Util = Util;
})(jQuery);