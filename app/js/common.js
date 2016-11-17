$(function() {

	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
	})
	.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu").children("ul").removeClass("sf-menu").removeClass("sf-menu_theme_banket")
	.parent().mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню"
		}
	});

$("#mobile-menu").mmenu({
    extensions      : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
    navbar: {
        title: "Меню"
    }
});

$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
});
var api = $("#mobile-menu").data("mmenu");
api.bind("closed", function () {
        $(".toggle-mnu").removeClass("on");
});
	
	// Unslider
	$('.banner').unslider({
      speed: 500,               //  The speed to animate each slide (in milliseconds)
      delay: 5000,              //  The delay between slide animations (in milliseconds)
      complete: function() {},  //  A function that gets called after every slide animation
      keys: false,               //  Enable keyboard (left, right) arrow shortcuts
      dots: true,               //  Display dot navigation
      fluid: true,             //  Support responsive design. May break non-responsive designs
      autoplay: true,
      arrows: false
    });

});