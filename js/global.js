$( document ).ready(function() {
    var tab_1 = $("#tab-one");
	var tab_2 = $("#tab-two");
	
	var tab_act = $("#tab_act");
	var tab_com = $("#tab_com");
	
	tab_1.addClass("tabs-act");
	tab_com.hide();
	
	tab_1.on("click", function() {
	  tab_1.addClass("tabs-act");
	  tab_2.removeClass("tabs-act");
	  
	  tab_act.show();
	  tab_com.hide();
	});
	
	tab_2.on("click", function() {
	  tab_2.addClass("tabs-act");
	  tab_1.removeClass("tabs-act");
	  
	  tab_com.show();
	  tab_act.hide();
	});

});