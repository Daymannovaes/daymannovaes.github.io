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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($isVisible) {
	var ScrollHandler = (function () {
		function ScrollHandler(element, fn) {
			_classCallCheck(this, ScrollHandler);

			this.element = element;
			this.fn = fn;
		}

		_createClass(ScrollHandler, [{
			key: "execute",
			value: function execute() {
				if (!this.executed && this.isVisible) {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					args.unshift(this.element);
					this.fn.apply(this, args);
					this.executed = true;
				}
			}
		}, {
			key: "isVisible",
			get: function get() {
				return $isVisible(this.element);
			}
		}]);

		return ScrollHandler;
	})();

	window.ScrollHandler = ScrollHandler;
})(window.Util.$isVisible);