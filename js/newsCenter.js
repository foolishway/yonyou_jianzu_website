$(function() {
	$("div.banner_footer").on("click", "a", function(e) {
		e.preventDefault();
		var $this = $(this),
			flag = $this.data("flag"),
			newsList = $("div.news_list"),
			noticeList = $("div.notice_list"),
			historyList = $("div.history_list");
		if(!$this.hasClass("active")){
			$this.addClass("active").parent("li").siblings().each(function(i,v){
				$(v).find("a").removeClass("active");
			});
		}
		if(flag == "news") {
			if(newsList.hasClass("hide")) {
				newsList.removeClass("hide");
				noticeList.addClass("hide");
				historyList.addClass("hide");
			}
		}
		if(flag == "notice") {
			if(noticeList.hasClass("hide")) {
				noticeList.removeClass("hide");
				newsList.addClass("hide");
				historyList.addClass("hide");
			}
		}
		if(flag == "history") {
			if(historyList.hasClass("hide")) {
				historyList.removeClass("hide");
				newsList.addClass("hide");
				noticeList.addClass("hide");
			}
		}

	});
});