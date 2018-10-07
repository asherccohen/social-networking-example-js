/*jshint esversion: 6 */
module.exports = class Message {
    static _nextId() {
        return 0;
    }
    static nextId() {
        return Message._nextId() + 1;
    }

    constructor(text) {
        this.id = Message.nextId();
        /* console.log('', Message.nextId()); */
        console.log(text + ' (1 thousand years ago)');
        /* console.log(text); */

        this.text = text;
        this.createdAt = Date.now();
    }

};