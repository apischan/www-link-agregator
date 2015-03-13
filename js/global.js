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
        <div class="item-title">\
            #{title}\
            <input type="button" value="edit" onclick="" />\
        </div>\
        <div class="item-image">\
            <img src="#{imgUrl}" title="#{title}" />\
        </div>\
        <div class="item-link">#{itemLink}</div>';

var addItem = function(link, title, imgUrl) {
    var actualTab = document.getElementById('tab_act');

    var divItem = document.createElement('div');
    divItem.setAttribute('class', 'item');
    
    var itemStr = divItemTemplate.replace(/#{title}/g, title)
                                          .replace(/#{imgUrl}/g, imgUrl)
                                          .replace(/#{itemLink}/g, link);
    divItem.innerHTML = itemStr;
    
    addEditEvent(divItem);
    shiftItem(actualTab, divItem);
    removeAfterTimeout(1000*5, actualTab, divItem);
};

function removeAfterTimeout(delay, actualTab, divItem) {
    func = function(actualTab, divItem) {
        return function() {
            actualTab.removeChild(divItem);
        };
    }
    window.setTimeout(func(actualTab, divItem), delay);
};

function addEditEvent(divItem) {
    var editButton = [].slice.call(divItem.getElementsByTagName('input'))[0];
    editButton.addEventListener('click', function(e) {
        var targetButton = e.target;
        var divItem = targetButton.parentNode.parentNode;
        
        var linkInput = document.getElementById('linkInput');
        var titleInput = document.getElementById('titleInput');
        var imgUrlInput = document.getElementById('imgUrlInput');
        
        
    });
}

function shiftItem(actualTab, newItem) {
    var divs = [].slice.call(actualTab.getElementsByTagName('div'));
    divs = divs.filter(function(elem) {
        return elem.className === 'item';
    });
    console.log(actualTab);
    actualTab.insertBefore(newItem, divs[0]);
    if (divs.length === 11) {
        var shifted = divs.pop();
        actualTab.removeChild(shifted);
    }
    
};

//function validateWebLink(link) {
//    '^(?:ftp|http|https):\/\/(?:[\w\.\-\+]+:{0,1}[\w\.\-\+]*@)?(?:[a-z0-9\-\.]+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+)|\?(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+))?$'
//};
