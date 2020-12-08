

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
	setTimeout(() => { $("[data-i18n]").i18n() }, 1000)
	var cookies = `
	<button id="toggle-modal" type="button" style="display:none;" data-toggle="modal" href="#modal-notification01">Open modal</button>
	<div class="modal fade" id="modal-notification01" tabindex="-1" role="dialog" aria-labelledby="modal-notification01" aria-hidden="false">
		<div class="modal-dialog modal-xs">
			<div class="modal-content">
				
				<div class="modal-header">
					<h4 class="modal-title" id="modal-notification01">Accept Cookies</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="icon-cancel-1"></i></span></button>
				</div><!-- /.modal-header -->
				
				<!-- ============================================================= MODAL CONTENT ============================================================= -->
				
				<div class="modal-body">
					
					<div class="container inner-xs text-center">
						<h2>High five!</h2>
						<p>In order to be compliant to European law, (GDPR) the website visitor must be asced to accept cookies!</p>
					</div><!-- /.container -->
					
				</div><!-- /.modal-body -->
				
				<!-- ============================================================= MODAL CONTENT : END ============================================================= -->
				
				<div class="modal-footer">
					<div>
						<button id="accept-cookies" type="button" class="btn" data-dismiss="modal">Accept</button>
						<button id="decline-cookies" type="button" class="btn" data-dismiss="modal">Close</button>
					</div>
					
				</div><!-- /.modal-footer -->
				
			</div><!-- /.modal-content -->	
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
	`
	if (!sessionStorage.getItem("accepted")) {
		$("body").append(cookies)
		$("#toggle-modal").trigger("click")
	}

	$("#accept-cookies").click(function () {
		sessionStorage.setItem("accepted", "true")
	})


})


