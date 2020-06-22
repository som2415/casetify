$(function(){
	
	/*gnb*/
	setInterval(function(){
		$("#gnb").slideDown();
		},300);	

	$("#gnb>li").mouseenter(function(){
		$(this).find("ul").fadeIn(200);	
	});
	$("#gnb>li").mouseleave(function(){
		$(this).find("ul").hide();	
	});
	
	/*이미지 fadeIn, fadeOut*/
	setInterval(function(){
	$(".fadein li:eq(2)").fadeOut(2000,function(){
		$(".fadein li:eq(2)").insertBefore(".fadein li:eq(0)");
		$(".fadein li:eq(0)").fadeIn();
		});
		},3000);
	
	
	/*section2 케이스*/
	/*$("#section2").mouseenter(function(){
			$("#section2 img:nth-child(2)").animate({left:"55px"});	
	});*/
	
	$(window).scroll(function(){
		var aa=parseInt($(this).scrollTop()); 
		if (aa>200) {
		$("#section2 img:nth-child(2)").animate({left:"55px"});	
		}
		});	
		
	$("#section2 a").mouseenter(function(){
		$(this).stop().animate({letterSpacing:"3px", color:"#c14848",backgroundColor:"#fff"});
	});
	$("#section2 a").mouseleave(function(){
		$(this).stop().animate({letterSpacing:"2px", color:"#fff",backgroundColor:"#c14848"});
	});
	
	$(window).scroll(function(){
		var aa=parseInt($(this).scrollTop()); 
		if (aa>800) {
		$("#section3 ul li:nth-of-type(1)").fadeIn()
		$("#section3 ul li:nth-of-type(2)").delay(300).fadeIn()
		$("#section3 ul li:nth-of-type(3)").delay(500).fadeIn()		
		}
		$("#section3 ul li").mouseenter(function(){
		$(this).stop().animate({top:"-10px", left:"-10px"},500);
		$(this).find("a").stop().animate({backgroundColor:"#fff", color:"#000"});
	});	
	$("#section3 ul li").mouseleave(function(){
		$(this).stop().animate({top:"0", left:"0"});
		$(this).find("a").stop().animate({backgroundColor:"#000",color:"#fff"});
	});
		});	

	$("#section3>a").mouseenter(function(){
		$(this).stop().animate({letterSpacing:"3px", color:"#fff",backgroundColor:"#c14848"});
	});
	$("#section3>a").mouseleave(function(){
		$(this).stop().animate({letterSpacing:"2px", color:"#c14848",backgroundColor:"#fff"});
	});	
	
	$(window).scroll(function(){
		var aa=parseInt($(this).scrollTop()); 
		if (aa>1800) {
		$("#section4 div:nth-of-type(2)").stop().animate({width:"71%"});
		$(".moveBar").stop().animate({left:"67.7%"},700)
		}
		});
	

	
	
	
	
	
	
});