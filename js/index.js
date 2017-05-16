$(document).ready(function(){  
    $('.banner_carousel').flexslider({  
        directionNav: false,  
        pauseOnAction: false,
		animation: "slide"
    });
    
    //监听nav滚动 
	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop(),header = $("div.header"); 
		if(scrollTop == 0){
			if(header.hasClass("header_scoll")){
				header.removeClass("header_scoll").find(".header_menu a").css("color","#fff").end()
				.find(".header_c_menu_list").removeClass("header_c_menu_list_scroll")
				.addClass("header_c_menu_list_normal")
				.end().find("div.header_log_text").removeClass("header_log_text_333").addClass("header_log_text_fff");
			}
		}else{ 
			if(!header.hasClass("header_scoll")){
				header.addClass("header_scoll").find(".header_menu a").css("color","#333333").end()
				.find(".header_c_menu_list").addClass("header_c_menu_list_scroll")
				.removeClass("header_c_menu_list_normal")
				.end().find("div.header_log_text").removeClass("header_log_text_fff").addClass("header_log_text_333");
			}
		}
	});
}); 