document.onmousemove = function(event) {
	var $background = $("#background");

	$background.css({
		top: -5400 - 000 + event.y,
		left: -4700 - 000 + event.x
	});
}

var writeTo = function(text, element, ms, clear, callback) {
	element = $(element)[0];

	if(clear) element.text = "";
	for(var i in text) {
		setTimeout(function(character, index) {
			element.text += character;

			if(index == text.length-1) {
				callback();
			}
		}.bind(this, text[i], i), ms*i);
	}
};

$(document).ready(function() {
	setTimeout(function() {
		$(".tick").hide();
		writeTo("Developer.", $("#developer"), 60, true, function() {
			$(".tick").show();
		});
	}, 2000);
});