/*jshint esversion: 6 */
const Timeline = require('./Timeline');

module.exports = class User {

    constructor(name) {
        this.timeline = new Timeline();
        this.subscriptions = [];
        this.subscribers = [];
        this.name = name;
    }

    publishMessage(message) {
        this.timeline.addMessage(message);
    }

    readMessages(user) {
        return user.timeline.messages;
    }
    subscribeTo(user) {
        this.subscriptions.push(user);
        user.subscribe(this);
    }
    subscribe(user) {
        this.subscribers.push(user);
    }
    subscriptionsTimeLine() {
        const messages = [];
        for (let i = 0; i < this.subscriptions.length; i++) {
            const user = this.subscriptions[i];
            const userName = user.name;
            for (let j = 0; j < user.timeline.messages.length; j++) {
                user.timeline.messages[j].name = userName;
                const message = user.timeline.messages[j];
                messages.push(message);
            }
        }

        return messages.sort(
            (a, b) => a.createdAt > b.createdAt
        );
    }
};