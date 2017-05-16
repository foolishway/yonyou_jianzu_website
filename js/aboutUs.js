$(function(){
	var isMoblie = false;
	$("div.tab_list").on("click","div",function(e){
		var $this = $(this);
		if($this.hasClass("tab_company_des")){
			$("div.company_intro").removeClass("hide");
			$("div.join_us").addClass("hide");
		}else{
			$("div.company_intro").addClass("hide");
			$("div.join_us").removeClass("hide");
		}
		e.preventDefault();
	});
	$("div.zhaopin_item_title").on("click",function(e){
		var $this = $(this);
		if($this.parents(".zhaopin_item").find("div.zhaopin_content").eq(0).is(":hidden")){
			$this.parents(".zhaopin_item").find("div.zhaopin_content").eq(0).slideDown(100);
			isMoblie = true;
		}else if(!$this.parents(".zhaopin_item").find("div.zhaopin_content").eq(0).is(":hidden") && isMoblie){
			$this.parents(".zhaopin_item").find("div.zhaopin_content").eq(0).slideUp(100);
		}
		e.stopPropagation();
	});
});
