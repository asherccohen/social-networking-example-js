/*jshint esversion: 6 */
/* Define a class for the timeline, a container of messages for each user */
module.exports = class Timeline {
    constructor() {
        var messages = [];
        this.messages = messages;
    }
    addMessage(message) {
        this.messages.push(message);
    }
};