
var rooturl = document.URL.split("/")[0] + "/" + document.URL.split("/")[1] + "/" + document.URL.split("/")[2] + "/" + document.URL.split("/")[3];
var itemList = null;
var distance=0;
var BATCH_COUNT = 8;
var BASEURL = null;
var srcImg=null;
$(document).ready(function() { 
	 $("#secondmenudiv").fadeIn("slow");
	 
	 $("#center").height($(document).height() - $("#top").height());
	 $("#secondmenudiv").height(($(document).height() - $("#top").height())*0.9);
	 $("#secondmenucontent").height($("#secondmenudiv").height()-$("#secondmenutitle").height());
//	 $("#secondmenudetail").css('margin-left',($("#secondmenucontent").width()-$("#secondmenudetail").width())/2-$("#secondmenuturnleft").width());
	 $("#main").css("left",$(document).width()/2-$("#main").width()/2+10);
	 $(".panel").css("background-color","rgba(0,0,0,0.85)");
	 $(".list-group-item").css("border-bottom-color","black");
	 $(".panel-title").css("margin-top","-1px");
	 $(".btn").css("padding-left","0px !important");
	 $(".btn").css("padding-right","9px !important");
	
	 
	 
	 	$("#prevTop").attr("onclick","null");
		$("#prevTop").hide();
		$("#nextTop").hide();
		var screenHeight = $(document).height();
		$('#center').height(screenHeight-$('#top').height());
		$('.main').css("top",$('#secondmenucontent').height()/2-$('.main').height()/2+$('#top').height()+$('.panel-title').height());
		$('.mod18').css("padding-top",$('#secondmenucontent').height()/2-$('#prevTop').height()/2);
		$('.mod19').css("padding-top",$('#secondmenucontent').height()/2-$('#prevTop').height()/2);
		 $('#secondmenucontent').mouseover(function() { 
				 $("#prevTop").show();
				 $("#nextTop").show();
		 });
		 $("#secondmenucontent").mouseleave(function(){
			 $("#prevTop").hide();
			 $("#nextTop").hide();
			});
 
});
var divnum = 2;
var currdiv = 1;
function moveDiv(direction){ //左１　右　０
	if(currdiv==1){
		$("#prevTop").attr("onclick","null");
	}
	if(direction == 1){
		distance =distance+1200;
		currdiv-=1;
	}else{
		distance =distance-1200;
		currdiv+=1;
	}
	$("#secondTest").animate( {
        left: distance+'px'
    },500);
	if(currdiv==divnum){
		$("#prevTop").attr("src","assets/image/bsp/home/tile/prevBtnTop.png");
		$("#prevTop").attr("onclick","moveDiv(1)");
		$("#prevTop").show();
		$("#nextTop").attr("src","assets/image/bsp/home/tile/nextBtnTopNoClick.png");
		$("#nextTop").attr("onclick","null");
	}
	if(currdiv==1){
		$("#prevTop").attr("src","assets/image/bsp/home/tile/prevBtnTopNoClick.png");
		$("#prevTop").attr("onclick","null");
		$("#nextTop").attr("src","assets/image/bsp/home/tile/nextBtnTop.png");
		$("#nextTop").attr("onclick","moveDiv(0)");
	}
}
function isInteger(obj) {
	 return obj%1 === 0
}