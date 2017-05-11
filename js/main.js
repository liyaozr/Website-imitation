// 加载动画
function preLoad() {
	$(window).on('load', function() {
	    var $preload = $('.preload');
	    $preload.delay(250).fadeOut(800);
	});
}
preLoad();

// 导航菜单





var timer=null;
var index = 1;
$(function () {
	showimg(index);
	// 鼠标移入移出
	$("article").hover(function () {
		clearTimeout(timer);
	}, function () {
		timer = setTimeout("showimg(" + index + ")", 5000);
	});
});

function showimg(num) {
	 index = num;
	 $("article").removeClass("active");
	 $("article").eq(index-1).addClass("active");
	 index = index + 1 > 3 ? 1 : index + 1;
	 timer = setTimeout("showimg(" + index + ")", 5000);
}

if (window.width()>768) $(".arrow").show();
$(window).scroll(function() {
	if (!$("body").hasClass("old_Android") && !$("body").hasClass("old_iOS")) {
		if ($(window).scrollTop() > 800 - $(".navbar-default").height() - 1 && !$(".navbar-default").hasClass("attop")){
			$(".navbar-default").addClass("attop");

		}
		if ($(window).scrollTop() < 800 - $(".navbar-default").height() - 1 && $(".navbar-default").hasClass("attop")) {
			$(".navbar-default").removeClass("attop");
		}
	}
	if ($(window).scrollTop()) $(".arrow").hide();
	if (($(window).scrollTop()===0)&&(window.width()>768)) $(".arrow").show();
	// else if (!$("body").hasClass("touch")) $(".arrow").show();
});

$("a").click(function() {

	if ($("body").hasClass("home") && $(this).attr("href")) {
		el = $.attr(this, "href").replace("/", "");
		if (el != "#") {
			$("html, body").animate({
				scrollTop: $(el).offset().top - $(".navbar-default").height()
			}, 500);
			if ($(".navmenu.offcanvas").hasClass("in")) $(".navbar-toggle").click();
			return false;
		}
	}
});

var bg=['url(image/bg1.jpg)','url(image/bg2.jpg)','url(image/bg3.jpg)'];
$(function () {
	var num;
	num  = Math.floor(Math.random()*3);
	$('#wrapall').css('background', bg[num]+'no-repeat');
});
