"use strict";
/*
 * ---- This class execute a given function 
 * ---- when a given element is visible on screen
 *
 * first, define the element and the callback:
 	var scroll = new ScrollHandler($element, function(element, ms) {
		setTimeout(() => $element.addClass("pulse"), ms || 800);
	});
 *
 * then, define the execution with the specific parameters
 * (you can, for example, pass diferent parameters
 * in the document.onready and the document.onscroll):
 	scroll.execute(400);
 *
 * In this case, the first parameter will be the element,
 * and the second will be "400", passed into "ms" variable.
 */

(function($isVisible) {
	class ScrollHandler {
		constructor(element, fn) {
			this.element = element;
			this.fn = fn;
		}

		get isVisible() {
			return $isVisible(this.element);
		}

		execute(...args) {
			if(!this.executed && this.isVisible) {
				args.unshift(this.element);
				this.fn.apply(this, args);
				this.executed = true;
			}
		}
	}

	window.ScrollHandler = ScrollHandler;
})(window.Util.$isVisible);