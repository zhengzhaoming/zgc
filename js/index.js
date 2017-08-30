$(function(){
	//轮播图
	function banner(){
		var imgInfo = [
			{
				img:"images/banner01.jpg"
			},
			{
				img:"images/banner02.jpg"
			},
			{
				img:"images/banner03.jpg"
			},
			{
				img:"images/banner04.jpg"
			}
		];
		var width = $(window).width();
		var data = {
			json:imgInfo
		};
		var html = template('slider',data);
		$('#inner').html(html);
	}
	$(window).on('resize',banner).trigger('resize');
	
	//文件渐变
	var index = 0;
	var timer = null;
	var timer2 = null;
	autoText();
//	autoJigou();
	/*****自动播放文字的定时器****/
	function autoText() {
		clearInterval(timer);
		timer = setInterval(function() {
			$(".right_list_title .item").eq(index).css('display','none').animate({'opacity':'0'}, 500);
			index++;
			if (index > 5) {
				index = 0;
				for(var i=0;i<$(".right_list_title .item").length;i++){
					$(".right_list_title .item").eq(i).css('display','none');
				}
			}
		$(".right_list_title .item").eq(index).css({'display':'block','opacity':0}).animate({'opacity':'1'}, 500);
		}, 5100);
	}
//	
//	function autoJigou(){
//		clearInterval(timer2);
//		timer2 = setInterval(function() {
//			$(".zgc_organization #temp").css({'display':'block','height':'0px'}).animate({'height':'129px'}, 800).animate({'height':'0px'}, 0);
//		}, 2000);
//	}
	
});