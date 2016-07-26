var h_window = $(window).height(), 
 	w_window = $(window).width();

var h_header = $('.header-site').outerHeight(true),
	h_footer = $('.footer-site').outerHeight(true),
	h_navbar_fixed = $('.navbar-fixed-top').outerHeight(true),
	h_navbar_header = $('.navbar-header').outerHeight(true),
	h_navbar_second = $('.navbar-second-page').outerHeight(true),
	h_heading = $('._czr__container-fluid').outerHeight(true),
	h_catalog = $('.catalog-page-content').outerHeight(true),
	h_news_left = $('._nb__left-block').outerHeight(true),
 	h_resize = h_window - h_header - h_navbar_second - h_footer,
 	h_resize_map = h_window - h_header - h_heading - 50,
 	h_resize_xs = h_window,
 	h_navbar_collapse = h_window - h_navbar_header;
 	//h_resize = h_window + 50;

if (device.mobile() || device.tablet()) {
	//$('.navbar').addClass('navbar-fixed-top');
	$('body').css("padding-top", h_navbar_fixed);
	$('.navbar-collapse').css("max-height", h_navbar_collapse);
} else {	
	$('._nb__right-block').css("min-height", h_news_left);
	$('.product-item').hover(
		function(){
			$(this).addClass('active');
		},
		function(){
			$(this).removeClass('active');
		}
	);
}
if (device.mobile()) {
	$('.content-site.content-site__second .content-site-inner').removeAttr("style");

} else {
	$('.content-site.content-site__second .content-site-inner').css("min-height", h_resize);

}

$("nav.navbar-fixed-top").autoHidingNavbar();