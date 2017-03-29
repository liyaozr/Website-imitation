var timer=null;
var index = 1;
$(function () {
	showimg(index);
	// 鼠标移入移出
	$("article").hover(function () {
		clearTimeout(timer);
	}, function () {
		timer = setTimeout("showimg(" + index + ")", 3000);
	});
});

function showimg(num) {
	 index = num;
	 $("article").removeClass("active");
	 $("article").eq(index-1).addClass("active");
	 index = index + 1 > 3 ? 1 : index + 1;
	 timer = setTimeout("showimg(" + index + ")", 3000);
}