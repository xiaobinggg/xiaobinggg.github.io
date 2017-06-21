jQuery.fn.selector = function(settings){
	settings = jQuery.extend({
		seletedResultor : null, // 输出给用户看的选择器
		seletedResulId : null // 返回的选择结果的ID的选择器
	}, settings);
	var handle = jQuery(this);
	var IdName = "id_"+handle.attr('class');
	var init = function()
	{
		handle.click(function(){
			$('#'+IdName+'_area_selector').show().end();return false;
		});
		selectorHtmlInit();
		selectorDataInit();
		selectorTabInit();
		$('#'+IdName+'_area_close').click(function(){
			$('#'+IdName+'_area_selector').hide().end();
		});
		//click area link
		$("#"+IdName+"_area_con a").click(function(){
			$('#'+IdName+'_select_id').attr('value',$(this).attr('id'));
			$('#'+IdName+'_search_input').attr('value',$(this).html());
			//$('#'+IdName+'_show_select span').html("<strong>已选择: "+$(this).html()+"</strong>");
			$('#'+IdName+'_btn').css('display','inline');
			return false;
		});
		// click ok button
		$('#'+IdName+'_btn').click(function(){
			$('#'+IdName+'_area_selector').hide().end();
			settings.seletedResultor.html($('#'+IdName+'_search_input').attr('value'));
			settings.seletedResulId.attr('value',$('#'+IdName+'_select_id').attr('value'));
			handle.html('重新选择 ▼');
		});
		autoComplete();
	};
	var autoComplete = function()
	{
		var areaData = subAreaData();
		$('#'+IdName+'_search_input').autocomplete(areaData, {
			minChars: 1,
			width: 200,
			scroll: true,
			scrollHeight: 180,
			matchContains: "word",
			autoFill: false,
			formatItem: function(row, i, max) {
				return "<i>"+ i + "/" + max + "</i>: \"" + row.name + "\" ";
			},
			formatMatch: function(row, i, max) {
				return row.name;
			},
			formatResult: function(row) {
				return row.name;
			}
		});
		$('#'+IdName+'_search_input').result(function(event, data, formatted){
			$('#'+IdName+'_show_select span').html("<strong>"+(!data ? "No match!" : "Selected: " + formatted)+"</strong>");
			$('#'+IdName+'_btn').css('display','inline');
			$('#'+IdName+'_select_id').attr('value',data.id);
		});
		var left = handle.offset().left;
		var top = handle.offset().top; 
		$('#'+IdName+'_area_selector').css({'top':top+20,'left':left});
		
	};
	var selectorHtmlInit = function()
	{
		$('body').append("<div id="+IdName+"_area_selector class='area_selecotr' style='display:none;position:absoulte'><div><input style='float:left;width:200px;height:18px;padding-left:3px;color:#333' type='text' readonly id="+IdName+"_search_input class='area_search_input'/><input type='hidden' id="+IdName+"_select_id><span class='area_close' id="+IdName+"_area_close style='float:right'>X</span></div><p style='clear:both' id="+IdName+"_show_select class='show_select'><span></span><input style='display:none' type='button' value='OK' id="+IdName+"_btn class='area_btn'></p><p id="+IdName+"_area_tab class='area_tab'></p><div id="+IdName+"_area_con class='area_con'></div></div>"
		);
	};
	var selectorDataInit = function()
	{
		var iLen = area.topArea.length;
		var sTabHtml = "";
		var sConHtml = ""
		var temp ="";
		for(var i=0; i<iLen; i++){
			var topAreaId = area.topArea[i].id;
			var subArea = "area_"+topAreaId;
			sTabHtml+="<span id="+IdName+"_"+area.topArea[i].id+">"+area.topArea[i].name+"</span>";
			var iSubAreaLen = area[subArea].length;
			for(var j=0; j<iSubAreaLen; j++){
				sConHtml+="<li><a href='#' id="+area[subArea][j].id +" valu="+area.topArea[i].name+"-"+area[subArea][j].name+">"+area[subArea][j].name+"</a></li>";
			}
			sConHtml = "<ul class="+IdName+"_"+topAreaId+">"+sConHtml+"</ul>"
			$('#'+IdName+'_area_con').append(sConHtml);
		}
		$('#'+IdName+'_area_tab').append(sTabHtml);
	};
	var selectorTabInit = function()
	{
		$("#"+IdName+"_area_tab span:first").addClass("on"); 
		$("#"+IdName+"_area_con ul:not(:first)").hide(); 
		$("#"+IdName+"_area_tab span").mouseover(function() {
			$("#"+IdName+"_area_tab span").removeClass("on"); 
			$(this).addClass("on");
			$("#"+IdName+"_area_con ul").hide();
			$("." + $(this).attr("id")).show();
		});
	};
	var subAreaData = function ()
	{
		var iLen = area.topArea.length;
		var subAreaData = new Array();
		for(var i=0; i<iLen; i++){
			var topAreaId = area.topArea[i].id;
			var subArea = "area_"+topAreaId;
			subAreaData = subAreaData.concat(area[subArea]);
		}
		return subAreaData;
	};
	init();
}
