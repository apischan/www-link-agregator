/**
 * New node file
 */
var Category = function(name) {
    this.name = name;
};

var Preview = function(link, topic, image, shortText, category) {
    this.link = link;
    this.topic = topic;
    this.image = image;
    this.shortText = shortText;
    this.category = category;
};

var Article = function(topic, text) {
    this.topic = topic;
    this.text = text;
};

var Item = function() {
    this.link = $('#linkInput').val();
    this.title = $('#titleInput').val();
    this.imgUrl = $('#imgUrlInput').val();
    console.log($('#linkInput'));
    this.divItemTemplate = '\
        <div class="item-title">#{title}\
            <span class="edit-ico"><img src="img/edit.png" title="edit" /></span>\
        </div>\
        <div class="item-image">\
            <img src="#{imgUrl}" title="#{title}" />\
        </div>\
        <div class="item-link">#{itemLink}</div>';
};

Item.prototype.divText = function() {
    return divItemTemplate.replace(/#{title}/g, this.title)
                          .replace(/#{imgUrl}/g, this.imgUrl)
                          .replace(/#{itemLink}/g, this.link)
};
