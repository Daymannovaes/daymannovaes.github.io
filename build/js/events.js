"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($, Util) {
	var $header = $("header");

	var ScrollHandler = (function () {
		function ScrollHandler(queryElement, fn) {
			_classCallCheck(this, ScrollHandler);

			this.queryElement = queryElement;
			this.fn = fn;
		}

		_createClass(ScrollHandler, [{
			key: "execute",
			value: function execute() {
				if (!this.executed && this.isVisible) {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					this.fn.apply(this, args);
					this.executed = true;
				}
			}
		}, {
			key: "element",
			get: function get() {
				return $header.find(this.queryElement);
			}
		}, {
			key: "isVisible",
			get: function get() {
				return Util.$isVisible(this.element);
			}
		}]);

		return ScrollHandler;
	})();

	$(document).mousemove(function (event) {
		var $background = $header.find(".background");

		$background.css({
			top: -5400 + event.pageY,
			left: -4700 + event.pageX
		});
	});

	var writeDeveloper = function writeDeveloper($developerText) {
		var $tick = $header.find(".tick");

		$tick.hide();
		Util.tickWrite({
			text: "./developer",
			element: $developerText,
			ms: 60,
			clear: true,
			callback: function callback() {
				$tick.show();
			}
		});
	};

	var handleWriteDeveloper = function handleWriteDeveloper(element, ms) {
		var $developerText = element || $header.find("#developer-text");

		clearTimeout(window.devTimeout);

		window.devTimeout = setTimeout(function () {
			writeDeveloper($developerText);
		}, ms || 2000);
	};

	var Scroll = {};
	Scroll.writeDeveloper = new ScrollHandler("#developer-text", handleWriteDeveloper);

	$(document).ready(function () {
		Scroll.writeDeveloper.execute(Scroll.writeDeveloper.element, 2000);
	});
	$(document).scroll(function () {
		Scroll.writeDeveloper.execute(Scroll.writeDeveloper.element, 800);
	});
})(jQuery, window.Util);