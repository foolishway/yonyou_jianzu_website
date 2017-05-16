function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

$.fn.extend({
	pcMenuInit: function() {
		var $this = $(this),
			menuList = $this.find("ul");
		if(menuList) {
			menuList.each(function(i, v) {
				$(v).find("li").each(function(index, value) {
					var $v = $(value);
					$v.hover(function() {
						$(this).children("a").addClass("p_active");
						if($v.data("flag") == "parent") {
							$(this).find("ul").stop().slideDown(100);
						} else {
							$(this).children("a").addClass("c_active");
						}
					}, function() {
						$(this).children("a").removeClass("p_active");
						if($v.data("flag") == "parent") {
							$(this).find("ul").stop().slideUp(100);
						} else {
							$(this).children("a").removeClass("c_active");
						}
					});
				});
			});
		}
	},
	mobileMenuInit: function() {
		var $this = $(this),
			menuList = $this.find("ul");
		if(menuList) {
			menuList.each(function(i, v) {
				$(v).find("li").each(function(index, value) {
					var $v = $(value);
					$v.click(function(event) {
						$(this).children("a").addClass("p_active").parent("li").siblings().each(
							function(si, sv) {
								$(sv).find("a").removeClass("p_active");
							}
						);
						if($(event.target).parent("li").data("flag") == "parent") {
							var cMenu = $(this).find("ul");
							if(cMenu.is(":hidden")) {
								cMenu.stop().slideDown(100);
							} else {
								cMenu.stop().slideUp(100);
							}
						}
						event.stopPropagation();
					});
				});
			});
		}
	}
});

$(function() {
	$(".header_menu").pcMenuInit();
	$(".app_menu").mobileMenuInit();
	$("span.app_menu_btn").on("click", function(e) {
		if($(".app_menu").is(":hidden")) {
			$(".app_menu").stop().slideDown(100);
			$("span.app_menu_btn").html("&#xe63d;")
		} else {
			$(".app_menu").stop().slideUp(100);
			$("span.app_menu_btn").html("&#xe628;")
		}
		e.stopPropagation();
	});
	$(document).click(function() {
		if(!$(".app_menu").is(":hidden")) {
			$(".app_menu").stop().slideUp(100);
			$("span.app_menu_btn").html("&#xe628;");
		}
	});
	$("div.header_log").on({
		"mouseover": function() {
			$(this).css("cursor", "pointer");
		},
		"click": function() {
			window.location.href = "index.html";
		}
	});
});