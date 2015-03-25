"use strict";

$(document).ready(function () {
    var tab_1 = $("#tab-one");
    var tab_2 = $("#tab-two");

    var tab_act = $("#tab_act");
    var tab_com = $("#tab_com");

    tab_1.addClass("tabs-act");
    tab_com.hide();

    tab_1.on("click", function () {
        tab_1.addClass("tabs-act");
        tab_2.removeClass("tabs-act");

        tab_act.show();
        tab_com.hide();
    });

    tab_2.on("click", function () {
        tab_2.addClass("tabs-act");
        tab_1.removeClass("tabs-act");

        tab_com.show();
        tab_act.hide();
    });
    
	var slid = $(".slider-nav");
	var slid_one = $("#slider-one");
	var slid_one_nav = $("#slider-one-nav");
	
	slid.text("(show/hide)");
	
	slid_one_nav.on("click", function () {
        slid_one.toggle( "hide", function() {
			// Animation show\hide.
		});
    });
	
});

function clearInputs() {
    $('.links-input').each(function() {
        $(this).val('');
    });
}

function removeAfterTimeout(delay, divItem) {
    func = function(divItem) {
        return function() {
            divItem.remove();
        };
    }
    window.setTimeout(func(divItem), delay);
};

function addDoneEvent(divItem) {
    var editButton = divItem.find('.done-ico').on('click', function(e) {
        var targetButton = e.target;
        var divItem = $(targetButton).closest(".item");
        
        divItem.detach().appendTo('.tab-completed');
    });
};
