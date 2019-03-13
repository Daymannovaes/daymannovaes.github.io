"use strict";

(function(tickWrite) {
	class TickHandler {
		constructor(queryElement, text, context, tickMs) {
			this.queryElement = queryElement;
			this.texts = text instanceof Array ? text : [text];
			this.context = context || document;
			this.tickMs = tickMs || 60;

			this.obj = {clear:false};
		}

		get clear() {
			return function() {
				this.obj.clear = true;
			};
		}


		get element() {
			return $(this.queryElement, this.context);
		}

		get $tick() {
			return $(".tick", this.context);
		}

        get text() {
            var randomIndex = Math.floor(Math.random() * this.texts.length);

            return this.texts[randomIndex];
        }

		get _execute() {
			return function() {
				this.$tick.hide();

				this.tickTimeout = tickWrite({
					text: this.text,
					element: this.element,
					ms: this.tickMs,
					clear: true,
					callback: () => {
						this.$tick.show();
					},
					obj: this.obj
				});
			}
		}

		get execute() {
			return (element, ms, obj) => {
				this.obj = obj || this.obj;

				clearTimeout(this.timeout);
				clearTimeout(this.tickTimeout);

				this.timeout = setTimeout(() => {
					this._execute(this.element);
				}, ms || 2000);

				return this.timeout;
			}
		}
	}

	window.TickHandler = TickHandler;
})(window.Util.tickWrite);