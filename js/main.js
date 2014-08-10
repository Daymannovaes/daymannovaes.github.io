var show = function(selector) {
	$("span[for='" + selector + "']").stop().animate({opacity:1}, 100);
};
var hide = function(selector) {
	$("span[for='" + selector + "']").stop().animate({opacity:0}, 400);
};
var hoverall = function() {
	$(".project").css("opacity", 0).addClass("jqhover").animate({opacity:1}, 200);
	show('bussola');
	show('mongoui');
	show('keybindjs');

	setTimeout(function() {
		$(".project").animate({opacity:0}, 50).removeClass("jqhover").delay(100).animate({opacity: 1}, 100);
		hide('bussola');
		hide('mongoui');
		hide('keybindjs');

	}, 1000);
}