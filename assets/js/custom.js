

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



$(function () {
	$.i18n().load({
		en: "assets/i18n/en.json",
		de: "assets/i18n/de.json",
	}).done(function () {
		$("body").i18n()
	})
	var loc = $.urlParam("lang")
	if (loc) {
		$.i18n({
			locale: loc
		})
	}

	var cookies = `
	<section id="cookie-bar" class="light-bg cookie-bar">
		<div class="container inner-xs">
			<div class="row">
				<div class="col-md-10 mx-auto text-center">
					<p>
						We use cookies to ensure you get the best experience on	our website. We may share your information with our advertizing and analytic partners. Find out ore bout cookies by reading our <a class="text" href="terms.html">Terms & Conditions</a> which contains further information about cookies and other technologies we use and information about how to disable them
					</p>
				</div>
				<!-- /.col -->
			</div>
			<div class="row justify-content-center mt-3">
				<a id="learn-more" href="privacy.html" class="btn">Learn More</a>
				<button id="accept-cookies" type="button" class="btn mx-3">I Agree</button>
			</div>
			<!-- /.row -->
		</div>
		<!-- /.container -->
	</section>
	`
	if (!sessionStorage.getItem("accepted")) {
		$("body").append(cookies)
	}

	$("#accept-cookies, #learn-more").click(function () {
		sessionStorage.setItem("accepted", "true")
		$("#cookie-bar").hide()
	})

	// Align Navbar items to center except get started button


})


