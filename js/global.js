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
    
    $('#editItem').hide();
    $('#addItem').on('click', addItem);
});

var addItem = function() {
    var actualTab = $('#tab_act');

    var divItem = getDivItem();
    
    shiftItem(actualTab, divItem);
    
    clearInputs();
//    removeAfterTimeout(1000*5, $(divItem));
};

function clearInputs() {
    $('.links-input').each(function() {
        $(this).val('');
    });
}

function getDivItem() {
    var item = new Item();
    var itemStr = item.divText();

    var divItem = jQuery('<div>', {
        'class': 'item',
        html: itemStr
    });
    
    addEditEvent(divItem);
    addDoneEvent(divItem);
    return divItem;
}

function removeAfterTimeout(delay, divItem) {
    func = function(divItem) {
        return function() {
            divItem.remove();
        };
    }
    window.setTimeout(func(divItem), delay);
};

function addEditEvent(divItem) {
    var editButton = divItem.find('.edit-ico').on('click', function(e) {
        var targetButton = e.target;
        var divItem = $(targetButton).closest(".item");
        
        $('#linkInput').val(divItem.find('.item-link').text().trim());
        $('#titleInput').val(divItem.find('.item-title').text().trim());
        $('#imgUrlInput').val(divItem.find('.item-image').find('img').attr('src').trim());
        
        $('#addItem').hide();
        var editButton = $('#editItem');
        editButton.show();
        
        editButton.on('click', doEdit(divItem));
    });
};

function addDoneEvent(divItem) {
    var editButton = divItem.find('.done-ico').on('click', function(e) {
        var targetButton = e.target;
        var divItem = $(targetButton).closest(".item");
        
        divItem.detach().appendTo('.tab-completed');
    });
};

function doEdit(oldDivItem) {
    return function(e) {
        var newDiv = getDivItem();
        
        oldDivItem.replaceWith(newDiv);
        
        $('#addItem').show();
        $('#editItem').hide();
        clearInputs();
        $(e.target).off();
    };
};

function shiftItem(actualTab, newItem) {
    var divs = [].slice.call(actualTab.find('div'));
    divs = divs.filter(function(elem) {
        return elem.className === 'item';
    });
    actualTab.prepend(newItem);
    if (divs.length === 11) {
        var shifted = divs.pop();
        shifted.remove();
    }
};

//function validateWebLink(link) {
//    '^(?:ftp|http|https):\/\/(?:[\w\.\-\+]+:{0,1}[\w\.\-\+]*@)?(?:[a-z0-9\-\.]+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+)|\?(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+))?$'
//};
