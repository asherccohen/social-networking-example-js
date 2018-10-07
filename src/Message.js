/*jshint esversion: 6 */
/* module.exports = class Message {

    id() {
        return this.id;
    }
    text() {
        return this.text;
    }
    createdAt() {
        return this.createdAt;
    }

    _nextId() {
        let _nextId = 0;
        return _nextId;
    }

    nextId() {
        let next = this._nextId();
        let nextPlus = next++;
        return nextPlus;
    }

    constructor(text) {
        this.id = this.nextId();
        this.text = text;
        this.createdAt = Date.now();
    }

};
 */
module.exports = class Message {

    /*    id() {
           return this.id;
       }
       text() {
           return this.text;
       }
       createdAt() {
           return this.createdAt;
       }
*/

    static _nextId() {
        /*  var _nextId = 1; */
        return 0;
    }
    static nextId() {
        /* let next = this._nextId;
        let nextPlus = next++; */
        /* var nextPlus = Message._nextId() + 1; */
        /* nextPlus = nextPlus + 1; */
        /* console.log('_nextId:', Message._nextId(), 'nextPlus:', nextPlus); */
        return Message._nextId() + 1;
    }

    constructor(text) {
        /* this._nextId = 0; */
        this.id = Message.nextId();
        console.log('id', Message.nextId());

        this.text = text;
        this.createdAt = Date.now();
    }

};