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

var addItem = function(link, title, imgLication) {
    var actualTab = document.getElementById('tab_act');

    var divItem = document.createElement('div');
    var divTitle = document.createElement('div');
    var divImage = document.createElement('div');
    var divLink = document.createElement('div');

    var imageElem = document.createElement('img');

    divItem.setAttribute('class', 'item');
    divTitle.setAttribute('class', 'item-title');
    divImage.setAttribute('class', 'item-image');
    divLink.setAttribute('class', 'item-link');

    imageElem.setAttribute('src', imgLication);
    imageElem.setAttribute('title', title);

    divImage.appendChild(imageElem);

    divTitle.appendChild(document.createTextNode(title));
    divLink.appendChild(document.createTextNode(link));

    divItem.appendChild(divTitle);
    divItem.appendChild(divImage);
    divItem.appendChild(divLink);
    
    shiftItem(actualTab, divItem);
};

function shiftItem(actualTab, divItem) {
    var divs = [].slice.call(actualTab.getElementsByTagName('div'));
    divs = divs.filter(function(elem) {
        return elem.className == 'item';
    });
    if (divs.length === 11) {
        var shifted = divs.shift();
        actualTab.removeChild(shifted);
    }
    actualTab.insertBefore(divItem, divs[0]);
};

function validateWebLink(link) {
    '^(?:ftp|http|https):\/\/(?:[\w\.\-\+]+:{0,1}[\w\.\-\+]*@)?(?:[a-z0-9\-\.]+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+)|\?(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+))?$'
};
