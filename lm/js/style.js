// JavaScript Document
$(window).load(function(){
	var htmlHeight = (document.documentElement.scrollHeight >document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.clientHeight; 
	var screenHeight=window.screen.height;
	if(htmlHeight<screenHeight)
	{
		$(".bottom").addClass("Absolutebottom");
	}
})
$(function(){
	$(".navul li").click(function(e) {
		$(this).addClass("selectpage");
		$(this).parent().siblings().children().removeClass("selectpage"); 
    });
	$(".sbhelpUl li").click(function(e) {
    $(this).addClass("selectLi");
	$(this).siblings().removeClass("selectLi");
	var num=$(this).attr("num");
	$(".show").hide();
	$(".show").each(function() {
        var num1=$(this).attr("num");
		if(num1==num){
			$(this).show();
		}
    });
});
	var screenWidth=window.screen.width;
	var fydz=(screenWidth-88-88-38-38-88-88-960)/2;
	$(".uniqueCarouselleft").css("left",(fydz/screenWidth)*100+"%");
	$(".uniqueCarouselright").css("right",(fydz/screenWidth)*100+"%");
	$('.iconul li').mouseover(function(e) {
	var length2=$(this).children(".leftImg").children("img").attr("src").split(".")[0]+"-hover.png";
	$(this).children(".leftImg").children("img").attr("src",length2);
	$(this).addClass("selectIconLi");
	$(this).children(".selectImg").addClass("selectImg");
	$(this).parent().siblings().children().removeClass("selectIconLi");
	$(this).parent().siblings().children().children(".selectImg").removeClass("selectImg");
	}).mouseout(function(e) {
	var length2=$(this).children(".leftImg").children("img").attr("src").split("-")[0]+".png";
    $(this).children(".leftImg").children("img").attr("src",length2);
	$(this).removeClass("selectIconLi");
	$(this).children(".selectImg").removeClass("selectImg");
    });
	$(".gameUl li").mouseover(function(e) {
        $(this).children(".floatDiv").children(".gamems").show();
		$(this).siblings().children(".floatDiv").children(".gamems").hide();
    });
	$(".gameUl li").mouseout(function(e) {
        $(this).children(".floatDiv").children(".gamems").hide();
    });
	
	$(".mainul li").mouseover(function(e) {
    var length2=$(this).children("div:first").children("img").attr("src").split(".")[0]+"-hover.png";
	$(this).children("div:first").children("img").attr("src",length2);
	$(this).children("a").children(".djBtn").addClass("selectDj");
	$(this).siblings().children("a").children(".djBtn").removeClass("selectDj");
    });
	
	$(".mainul li").mouseout(function(e) {
    var length2=$(this).children("div:first").children("img").attr("src").split("-")[0]+".png";
	$(this).children("div:first").children("img").attr("src",length2);
	$(this).children("a").children(".djBtn").removeClass("selectDj");
    });
});
function mdFun(obj)
{
	var id=$(obj).attr("href");
	$("html,body").animate({scrollTop: $(id).offset().top}, 1000);  
}