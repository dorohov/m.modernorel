$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
var url = window.location.pathname;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 
$('._apc__btn-block .btn-site[href="'+url+'"]').addClass('active'); 
$('._epc__btn-block .btn-site[href="'+url+'"]').addClass('active'); 
$('._hsi__owl').owlCarousel({
	margin: 			0,
	loop: 				true,
	items: 				1,
	dots: 				false,
	nav: 				true,
	navText: 			[],
	autoplay: 			true,
	autoplayTimeout: 	10000,
	autoplayHoverPause: true
}); 
$('._ipc__action__owl').owlCarousel({
	margin: 		0,
	dots: 			true,
	nav: 			false,
	responsive:{
	    0:{
	        items: 	1
	    },
	   	768:{
	        items: 	2
	    }
	}
});
$('#modal-team').on('shown.bs.modal', function (e) {
	$('._tpc__owl').owlCarousel({
		margin: 		0,
		dots: 			true,
		nav: 			false,
		responsive:{
		    0:{
		        items: 	1
		    },
		   	768:{
		        items: 3
		    },
		   	1000:{
		        items: 	4
		    }
		}
	});
});

$('._gipc__owl').owlCarousel({
	margin: 		0,
	dots: 			true,
	nav: 			false,
	responsive:{
	    0:{
	        items: 	1
	    },
	   	420:{
	        items: 	2,
	        margin: 20,
	    }
	}
});
$('._cip__owl').owlCarousel({
	margin: 20,
	navText: [],
	responsive:{
	    0:{
	        items:1,
			dots: true,
			nav: false,
	    },
	    480:{
	        items:2,
			dots: true,
			nav: false,
	    },
	   	768:{
	        items:3,
			dots: true,
			nav: false,
	    },
	    1025:{
	        items:3,
			dots: false,
			nav: true
	    }
	}
});
$('.fancybox').fancybox();
// конструкция для активации fancybox <a class="fancybox-buttons" data-fancybox-group="button" href="" data-title=""><img src="" alt="" /></a>
$('.fancybox-buttons').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	prevEffect : 'none',
	nextEffect : 'none',
	closeBtn  : false,
	helpers : {
		title : {
			type : 'inside'
		},
		buttons	: {}
	},
	afterLoad : function() {
		this.title = this.title;
	}
});