$(document).ready(function() {
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

var divItemTemplate = '\
    <div class="item">\
        <div class="item-title">#{title}</div>\
        <div class="item-image">\
            <img src="#{imgUrl}" title="#{title}" />\
        </div>\
        <div class="item-link">#{itemLink}</div>\
    </div>';

var addItem = function(link, title, imgUrl) {
    var actualTab = document.getElementById('tab_act');

    actualTab.innerHTML = divItemTemplate.replace(/#{title}/g, title)
                                          .replace(/#{imgUrl}/g, imgUrl)
                                          .replace(/#{itemLink}/g, link) + actualTab.innerHTML;

    shiftItem(actualTab);
};

function shiftItem(actualTab) {
    var divs = [].slice.call(actualTab.getElementsByTagName('div'));
    divs = divs.filter(function(elem) {
        return elem.className === 'item';
    });
    if (divs.length > 11) {
        var shifted = divs.pop();
        actualTab.removeChild(shifted);
    }
};

//function validateWebLink(link) {
//    '^(?:ftp|http|https):\/\/(?:[\w\.\-\+]+:{0,1}[\w\.\-\+]*@)?(?:[a-z0-9\-\.]+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+)|\?(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+))?$'
//};
