"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (tickWrite) {
	var TickHandler = (function () {
		function TickHandler(queryElement, text, context, tickMs) {
			_classCallCheck(this, TickHandler);

			this.queryElement = queryElement;
			this.text = text;
			this.context = context || document;
			this.tickMs = tickMs || 60;
		}

		_createClass(TickHandler, [{
			key: "element",
			get: function get() {
				return $(this.queryElement, this.context);
			}
		}, {
			key: "$tick",
			get: function get() {
				return $(".tick", this.context);
			}
		}, {
			key: "_execute",
			get: function get() {
				return function () {
					var _this = this;

					this.$tick.hide();

					this.tickTimeout = tickWrite({
						text: this.text,
						element: this.element,
						ms: this.tickMs,
						clear: true,
						callback: function callback() {
							_this.$tick.show();
						}
					});
				};
			}
		}, {
			key: "execute",
			get: function get() {
				var _this2 = this;

				return function (element, ms) {
					clearTimeout(_this2.timeout);
					clearTimeout(_this2.tickTimeout);

					_this2.timeout = setTimeout(function () {
						_this2._execute(_this2.element);
					}, ms || 2000);
				};
			}
		}]);

		return TickHandler;
	})();

	window.TickHandler = TickHandler;
})(window.Util.tickWrite);