"use strict";

(function(tickWrite) {
	class TickHandler {
		constructor(queryElement, text, context, tickTimeout) {
			this.queryElement = queryElement;
			this.text = text;
			this.context = context || document;
			this.tickTimeout = tickTimeout || 60;
		}


		get element() {
			return $(this.queryElement, this.context);
		}

		get $tick() {
			return $(".tick", this.context);
		}

		get _execute() {
			return function() {
				this.$tick.hide();

				tickWrite({
					text: this.text,
					element: this.element,
					ms: this.tickTimeout,
					clear: true,
					callback: () => {
						this.$tick.show();
					}
				});
			}
		}

		get execute() {
			return (element, ms) => {
				clearTimeout(this.timeout);

				this.timeout = setTimeout(() => {
					this._execute(this.element);
				}, ms || 2000);
			}
		}
	}

	window.TickHandler = TickHandler;
})(window.Util.tickWrite);