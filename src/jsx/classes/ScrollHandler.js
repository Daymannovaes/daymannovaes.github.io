"use strict";

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