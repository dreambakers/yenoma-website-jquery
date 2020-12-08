

/*===================================================================================*/
/*	CUSTOM JS/JQUERY SCRIPTS
/*===================================================================================*/

// Insert your own scripts in here!
$.urlParam = function (name) {
	var results = new RegExp('[\?&]' + name + '=([^&#]*)')
		.exec(window.location.search);

	return (results !== null) ? results[1] || 0 : false;
}
$.isScrolledIntoView = function (elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$.i18n().load({
	en: "assets/i18n/en.json",
	de: "assets/i18n/de.json",
})

$(function () {
	var loc = $.urlParam("lang")
	if (loc) {
		$.i18n({
			locale: loc
		})
	}
	setTimeout(() => { $("[data-i18n]").i18n() }, 2000)

	// $.each($("[data-i18n]"), function (idx, el) {
	// 	if ($.isScrolledIntoView(el)) $(el).i18n()
	// })

})


