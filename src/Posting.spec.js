/* import { User } from './User'
import { Message } from './Message' */
const User = require('./User');
const Message = require('./Message');

describe('posting a message to a personal timeline', () => {

    it('Alice can publish a message to a personal timeline', () => {
        const alice = new User('alice')
        const message = new Message('hello world')

        alice.publishMessage(message)
        expect(alice.timeline.messages).toEqual([
            message,
        ])

    })

})