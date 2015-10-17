"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	var ScrollHandler = (function () {
		function ScrollHandler(queryElement, fn, context) {
			_classCallCheck(this, ScrollHandler);

			this.queryElement = queryElement;
			this.fn = fn;
			this.context = context || document;
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
			key: "element",
			get: function get() {
				return $(this.queryElement, this.context);
			}
		}, {
			key: "isVisible",
			get: function get() {
				return Util.$isVisible(this.element);
			}
		}]);

		return ScrollHandler;
	})();

	window.ScrollHandler = ScrollHandler;
})();