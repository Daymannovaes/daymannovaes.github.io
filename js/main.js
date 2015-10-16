"use strict";

document.onmousemove = function (event) {
	var $background = $("#background");

	$background.css({
		top: -5400 + event.y,
		left: -4700 + event.x
	});
};

var writeTo = function writeTo(text, element, ms, clear, callback) {
	element = $(element)[0];

	if (clear) element.text = "";
	for (var i in text) {
		setTimeout((function (character, index) {
			element.text += character;

			if (index == text.length - 1) {
				callback();
			}
		}).bind(this, text[i], i), ms * i);
	}
};

var writeDeveloper = function writeDeveloper() {
	$(".tick").hide();
	writeTo("./developer", $("#developer"), 60, true, function () {
		$(".tick").show();
	});
};

var devTimeout;
$(document).ready(function () {
	devTimeout = setTimeout(writeDeveloper, 2000);
});