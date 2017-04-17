$('.home-header').parallax({imageSrc: 'image/header_bg.jpg'});

function preLoad() {
	$(window).on('load', function() {
	    var $preload = $('.preload'),
	        $wrap = $preload.find('.wrap');
	    $wrap.fadeOut();
	    $preload.delay(250).fadeOut(800);
	});
}
preLoad();