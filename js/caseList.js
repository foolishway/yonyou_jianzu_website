var caseList = {
	"loadCaseList": function(flag) {
		$("div.case_banner_btn").find("li").each(function(i, v) {
			var f = $(v).find("a").eq(0).data("flag");
			if(flag == f) {
				$(v).find("a").addClass("active");
			}
		});
		$("div.case_list." + flag).show();
		$("div.case_list").not("." + flag).hide();
	}
}
$(function() {
	var flag = getQueryString("flag");
	if(flag) {
		caseList.loadCaseList(flag);
	}
	$("div.case_banner_btn").on("click", "a", function(e) {
		e.preventDefault();
		var $this = $(this),
			flag = $this.data("flag");
		if(!$this.hasClass("active")) {
			$this.addClass("active").parent("li").siblings("li").each(function(i, v) {
				$(v).find("a").removeClass("active");
			});
		}
		caseList.loadCaseList(flag);
	});
})