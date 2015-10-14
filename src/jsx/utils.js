"use strict";

(($) => {
	var Util = {};

	Util.tickWrite = ({text, element, ms, clear, callback}) => {
		element = $(element);
		clear && element.text("");

		for(var i in text) {
			let character = text[i];

			setTimeout(
				(function({character, i}) {
					element.text(element.text().toString() + character.toString());

					if(i == text.length-1 && typeof callback == "function")
						callback();
				}).bind(this, {character, i}),
				ms * i
			);
		}
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