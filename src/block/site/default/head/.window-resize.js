var h_window = $(window).height(), 
 	w_window = $(window).width();

var h_header = $('.header-site-second').outerHeight(true), //!
	h_footer = $('.footer-site').outerHeight(true), //!
	h_navbar_fixed = $('.navbar-fixed-top').outerHeight(true), //!
	h_navbar_header = $('.navbar-header').outerHeight(true), //!
	h_navbar_second = $('.navbar-second-page').outerHeight(true),
	h_heading = $('._czr__container-fluid').outerHeight(true),
	h_catalog = $('.catalog-page-content').outerHeight(true),
	h_news_left = $('._nb__left-block').outerHeight(true),
 	h_resize = h_window - h_header - h_footer - h_navbar_fixed, //!
 	h_resize_xs = h_window,
 	h_modal = h_window,
 	h_navbar_collapse = h_window - h_navbar_header; //!

if (device.mobile() || device.tablet()) {
	//$('.navbar').addClass('navbar-fixed-top');
	//$('body').css("padding-top", h_navbar_fixed);
	$('.modal .modal-content').css("min-height", h_modal);
	$('.navbar-collapse').css("max-height", h_navbar_collapse);
} else {}
if (device.mobile()) {
	$('.content-site').removeAttr("style");

} else {
	$('.content-site').css("min-height", h_resize);

}
$("nav.navbar-fixed-top").autoHidingNavbar();