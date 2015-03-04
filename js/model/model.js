/**
 * New node file
 */
var Category = {
    constructor: function(name) {
        this.name = name;
        return this;
    }
};

var Preview = {
    constructor: function(link, topic, image, shortText, category) {
        this.link = link;
        this.topic = topic;
        this.image = image;
        this.shortText = shortText;
        this.category = category;
        return this;
    }
};

var Article = {
    constructor: function(topic, text) {
        this.topic = topic;
        this.text = text;
        return this;
    }
};