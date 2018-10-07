/*jshint esversion: 6 */
module.exports = class Timeline {
    constructor() {
        var messages = [];
        this.messages = messages;
    }
    addMessage(message) {
        this.messages.push(message);
    }
};

/* module.exports = Timeline; */