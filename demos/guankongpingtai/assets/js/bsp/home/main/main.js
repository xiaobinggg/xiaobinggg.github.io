
var distance=0;
var mainScreenWidth = 800;
var mainScreenHeight = 400;
var divnum;
var currdiv = 1;
var currAngle;
var originalCircleImg;
var originalMenuContentImg;
var secondmenuhovercolor;
var vm_index = avalon.define({
	 $id: "vm_index",
	 menus : [],
	 secondmenus:[],
	 secondmenucolor:'#157B6A',
	 secondmenucolor_triangle:'#157B6A  transparent transparent transparent',
	 leftpanecolor:"#FF0000",
	 topMenuTitle:'e',
	 tmclick:function(topMenu){
		 if(!topMenu.children){
			 eval(topMenu.click);
		 }else{
			 $("#secondmenudiv").fadeIn("fast");
			 $("#secondmenutitle").text(topMenu.name);
			 var secondmenus = [];
			 var secondmenucolor = getSecondTitleColor(topMenu.menucontenturl);
			 $("#secondmenutitle").css("background-color","#"+secondmenucolor[1]);
			 $("#escarea").css("background-color","#"+secondmenucolor[1]);
			 secondmenuhovercolor = "#"+secondmenucolor[2];
			 vm_index.secondmenucolor = "#"+secondmenucolor[2];
			 vm_index.secondmenucolor_triangle = vm_index.secondmenucolor+"  transparent transparent transparent";
			 vm_index.leftpanecolor ="#"+secondmenucolor[2];

			 for(var i=0;i<topMenu.children.length;i++){
				 if(!topMenu.children[i].children){
					 secondmenus[i] = topMenu.children[i].$model;
				 }else{
					 secondmenus[i] = {};
					 secondmenus[i].id = topMenu.children[i].id;
					 secondmenus[i].name = topMenu.children[i].name;


					 secondmenus[i].click = topMenu.children[i].click;
					 secondmenus[i].children = [];
					 for(var j=0;j<topMenu.children[i].children.length;j++){
						 secondmenus[i].children[j] = topMenu.children[i].children[j].$model;
						 if(secondmenus[i].children[j].name.length>7){
						 	secondmenus[i].children[j].shotname = secondmenus[i].children[j].name.substring(0,7)+"...";
						 }else{
						 	secondmenus[i].children[j].shotname = secondmenus[i].children[j].name;
						 }

					 }
					 if(secondmenus[i].children.length==0){
						 secondmenus[i].showtriangle = false;
					 }else{
						 secondmenus[i].showtriangle = true;
					 }
				 }
			 }
			 vm_index.secondmenus = [];
			 vm_index.secondmenus = secondmenus;

			 if($("#secondmenucontent").height()<=550){
 				 $(".leftpane").css("height","25px");
 				 $(".secondmenuname").css("padding","2px 0px 2px 17px");
 			 }
 			 else{
 				 $(".secondmenuname").css("padding","4px 0px 4px 17px");
 			 }

			 $(".thirdmenulist").each(function(i){
				 if($(this).height()>($("#secondmain").height()-68)){
					 $(this).css("max-height",$("#secondmain").height()-68);
					 $(this).css("overflow-y","auto");
				 }else{
					 $(this).css("overflow-y","hidden");
				 }

			 });
			 if(secondmenus.length<=8){
				 $("#secondmenucontent").css("overflow-x","hidden");
			 }

			 $("#secondmenudetail").css("width",secondmenus.length*130+(secondmenus.length-1)*15+20);
			
		 }

	 },
	 circleOver:function(menu){
			originalMenuContentImg = menu.menucontenturl;
			var menuContentImgHover = getCircleImgInfo(menu.menucontenturl);
			menu.menucontenturl = menuContentImgHover;

			originalCircleImg = menu.circleurl;
			var hoverCircleImg = getCircleImgInfo(menu.circleurl);
			menu.circleurl = hoverCircleImg;

			var angle = 0;

			interval = setInterval(function(){
			    angle +=10;
			    $("#"+menu.id).rotate(angle);
			}, 30);
	 },
	 circleOut:function(menu){
		 menu.circleurl = originalCircleImg;
		 menu.menucontenturl = originalMenuContentImg;
		 window.clearInterval(interval);
	 },
	 secondMClick:function(menu){
		if(menu.click && menu.click!=""){
			eval(menu.click);
		}
	 },

	 sencondmenumouseover:sencondmenumouseover,
	 sencondmenumouseout:sencondmenumouseout,
	 a:""
});



//自适应高度
function initHeight(){
	var screenHeight = document.body.offsetHeight;
	var screenWidth = document.body.offsetWidth;
	var leftGap = (screenWidth-mainScreenWidth)/2;

	//first
	$('#mainFrame').height(screenHeight-$('#top').height());
	$('#firstmenudiv').height(screenHeight-$('#top').height());
	$('.firstmenucontent').css("top",$('#firstmenudiv').height()/2-$('.firstmenucontent').height()/2+$('#top').height());
	$("#firstmenucontent").css("left",leftGap);
	$('.leftFunctionArea').css("padding-top",$('#firstmenudiv').height()/2-$('#turnLeftImg').height()/2);
	$('.rightFunctionArea').css("padding-top",$('#firstmenudiv').height()/2-$('#turnLeftImg').height()/2);

	$("#topMenuMoving").width($('.eightDiv').width()*(parseInt(menuJson.length%8)+1));
	//second
	$("#secondmenudiv").height((screenHeight - $("#top").height()));
	$("#secondmenucontent").height($("#secondmenudiv").height()-$("#secondmenutitle").height()-15);

	$("#turnLeftImg").attr("onclick","null");
	$('#secondmain').css("top",$('#secondmenucontent').height()/2-$('#secondmain').height()/2+$('#top').height());
	$('#secondmod18').css("padding-top",$('#secondmenucontent').height()/2-$('#turnLeftImg').height()/2);
	$('#secondmod19').css("padding-top",$('#secondmenucontent').height()/2-$('#turnLeftImg').height()/2);
	$('.list-group-item').css("background-color","rgba(220,230,223,0.85)");
	
	
	 $(".secondtop").css("width",screenWidth*0.915);	//8*130+7*15+20
	 $("#secondmenudiv").css("width",$(".secondtop").width());
	 $("#secondmenucontent").css("width",$(".secondtop").width());
	 $("#secondmenudiv").css("left",(screenWidth-$(".secondtop").width())/2);

}
function initTurnImg(){
	if(topMenuGroupNum ==1){
		 $("#turnLeftImg").hide();
		 $("#turnRightImg").hide();
	}
	else{
		 $('#firstmenudiv').mouseover(function() {
			 $("#turnLeftImg").show();
			 $("#turnRightImg").show();
	 });
	}
}
//$注册事件
function initEvent(){
	$('#loginImg').mouseover(function() {
        $('#logoutDetail').show();
       var logoutLeft = $(this).position().left;
       var logoutTop = $(this).position().top;

      $('#logoutDetail').css("left",logoutLeft-$('#logoutDetail').width()/2+$(this).width());
      $('#logoutDetail').css("top",logoutTop+$(this).height()+3);
	 });

	 $('#logoutDetail').mouseenter(function() {
		 $('#logoutDetail').mouseleave(function() {
			 $(this).hide();
			 $("#loginImg").attr("src","assets/image/bsp/home/tile/userview.png");
		 });
	 });

	 $("#firstmenudiv").mouseleave(function(){
		 $("#turnLeftImg").hide();
		 $("#turnRightImg").hide();
	 });
	 $('#loginImg').mouseover(function() {
		 $("#loginImg").css("cursor","pointer");
		 $("#loginImg").attr("src","assets/image/bsp/home/tile/userviewOver.png");
	 });
	 $('#sysmanageImg').mouseover(function() {
		 $("#sysmanageImg").css("cursor","pointer");
		 $("#sysmanageImg").attr("src","assets/image/bsp/home/tile/sysmanageOver.png");
	 });
	 $('#sysmanageImg').mouseleave(function() {
		 $("#sysmanageImg").attr("src","assets/image/bsp/home/tile/sysmanage.png");
	 });
	 $('#mapImg').mouseover(function() {
		 $("#mapImg").css("cursor","pointer");
		 $("#mapImg").attr("src","assets/image/bsp/home/tile/mapviewOver.png");
	 });
	 $('#mapImg').mouseleave(function() {
		 $("#mapImg").attr("src","assets/image/bsp/home/tile/mapview.png");
	 });

	 $('#escarea').mouseover(function() {
		 $(this).css("cursor","pointer");
	 });
	 $('#esc').click(function() {
		 $("#secondmenudiv").fadeOut("fast");
	 });

}
function sencondmenumouseover(menu){
	$(".secondmenuname[secondmenunameid="+menu.id+"]").css("background-color","white");
	$("#"+menu.id).css("display","block");
	$(".secondmenuname[secondmenunameid="+menu.id+"]").css("cursor","pointer");
	$(".secondmenuname[secondmenunameid="+menu.id+"]").css("color",secondmenuhovercolor);


}
function sencondmenumouseout(menu){
	$(".secondmenuname[secondmenunameid="+menu.id+"]").css("background-color","#dce6df");
	$("#"+menu.id).css("display","none");
	$(".secondmenuname[secondmenunameid="+menu.id+"]").css("color","black");
}
function getSecondTitleColor(imgurl){
	var imgSplit = imgurl.split("/");
	var imgNameAndType = imgSplit[imgSplit.length-1];
	var imgNameAndTypeArray = imgNameAndType.split(".");
	var imgName = imgNameAndTypeArray[0];
	var imgNameInfo = imgName.split("_");
	return imgNameInfo;
}

function getCircleImgInfo(imgurl){
	var imgSplit = imgurl.split("/");
	var relativePath = "";
	for(var i=0;i<imgSplit.length-1;i++){
		relativePath+=imgSplit[i]+"/";
	}
	var imgNameAndType = imgSplit[imgSplit.length-1];
	var imgNameAndTypeArray = imgNameAndType.split(".");
	var imgName = imgNameAndTypeArray[0];
	var imgType = imgNameAndTypeArray[1];
	return relativePath+imgName+"_hover."+imgType;
}
function gettoplevelImgInfo(imgurl){
	var imgSplit = imgurl.split("/");
	var imgNameAndType = imgSplit[imgSplit.length-1];
	var imgNameAndTypeArray = imgNameAndType.split(".");
	var imgName = imgNameAndTypeArray[0];
	var imgType = imgNameAndTypeArray[1];
	var imgNameInfo = imgName.split("_");
	var imgRotateCircleOldColor = imgNameInfo[1]+"."+imgType;
	var imgRotateCircleNewColor = imgNameInfo[1]+"_hover"+"."+imgType;
	var relativePath = "";
	for(var i=0;i<imgSplit.length-1;i++){
		relativePath+=imgSplit[i]+"/";
	}
	var imgInfo = [relativePath,imgRotateCircleOldColor,imgRotateCircleNewColor];
	return imgInfo;
}
var menus = [];

var topMenuGroupNum;
var isDivided = menuJson.length/8;
if(isInteger(isDivided)){
	topMenuGroupNum = parseInt(menuJson.length/8);
}else{
	topMenuGroupNum = parseInt(menuJson.length/8+1);
}
divnum =topMenuGroupNum;

for(var i=0;i<topMenuGroupNum;i++){
	menus[i] = {};
	menus[i].name = 'dd'+i;
	menus[i].group = [];
	for(var j=0;j<8;j++){
		if(i*8+j>=menuJson.length){
			break;
		}
		//menuJson[i*8+j].imgurl = 'assets/image/bsp/home/tile/'+menuJson[i*8+j].id+'.png';
		//var firstImgInfo = getFirstImgInfo(menuJson[i*8+j].menucontenturl);
		//var firstImgInfo =getFirstImgInfo("assets/image/bsp/home/tile/testImg/1_0FE20F_0FF33F.png");
//		menuJson[i*8+j].circleurl = firstImgInfo[0]+firstImgInfo[1];
		menus[i].group[j] = menuJson[i*8+j];
	}
}

vm_index.menus = menus;


$(document).ready(function() {
	initHeight();
	initEvent();
	initTurnImg();
	$(window).resize(function() {
		initHeight();
    });
	window.onbeforeunload = function(event) {  
	    return beforunload(event);  
	};  

});
function beforunload(event) {  
    /*event = event ? event : (window.event ? window.event : null);  
    var myIE = myBrowser();  
    if (myIE=="IE") { // IE  
        var cy = event.clientY || event.target.event.clientY;  
        var ak = event.altKey || event.target.event.altKey;  
        if (cy < 0 || ak) {  
            return "确定要离开本页面吗？";  
        }  
    } else {  
        // Firefox、Chrome  
        var nodeName = event.currentTarget.document.activeElement.nodeName;  
        if (nodeName!="A") {  
            return "确定要离开本页面吗？";  
        }  
    }  */
}  
function myBrowser() {  
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isOpera = userAgent.indexOf("Opera") > -1;  
    if (isOpera) { //判断是否Opera浏览器  
        return "Opera";  
    };  
    if (userAgent.indexOf("Firefox") > -1) { //判断是否Firefox浏览器  
        return "FF";  
    };  
    if (userAgent.indexOf("Chrome") > -1){  
        return "Chrome";  
    };  
    if (userAgent.indexOf("Safari") > -1) { //判断是否Safari浏览器  
        return "Safari";  
    };  
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) { //判断是否IE浏览器  
        return "IE";  
    };  
}  
function moveDiv(direction){ //左１　右　０
	if(currdiv==1){
		$("#turnLeftImg").attr("onclick","null");
	}
	if(direction == 1){
		distance =distance+800;
		currdiv-=1;
	}else{
		distance =distance-800;
		currdiv+=1;
	}
	$("#topMenuMoving").animate( {
        left: distance+'px'
    },500);
	if(currdiv==divnum){
		$("#turnLeftImg").attr("src","assets/image/bsp/home/tile/turnLeft.png");
		$("#turnLeftImg").attr("onclick","moveDiv(1)");
		$("#turnLeftImg").show();
		$("#turnRightImg").attr("src","assets/image/bsp/home/tile/turnRightNoClick.png");
		$("#turnRightImg").attr("onclick","null");
	}
	if(currdiv==1){
		$("#turnLeftImg").attr("src","assets/image/bsp/home/tile/turnLeftNoClick.png");
		$("#turnLeftImg").attr("onclick","null");
		$("#turnRightImg").attr("src","assets/image/bsp/home/tile/turnRight.png");
		$("#turnRightImg").attr("onclick","moveDiv(0)");
	}
}
function isInteger(obj) {
	 return obj%1 === 0
}
