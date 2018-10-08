/*jshint esversion: 6 */
/* Define a class for a message and export it */
module.exports = class Message {
    static _nextId() {
        return 0;
    }
    static nextId() {
        return Message._nextId() + 1;
    }

    constructor(text) {
        this.id = Message.nextId();
        console.log(text + ' (1 thousand years ago)');
        this.text = text;
        this.createdAt = Date.now();
    }

};