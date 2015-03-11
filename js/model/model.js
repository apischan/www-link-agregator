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
