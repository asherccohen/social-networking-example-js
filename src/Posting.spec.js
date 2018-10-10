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


class Game {
    constructor() {
        this.tokenPosition = 0;
    }

    start() {
        this.tokenPosition = 1;
        console.log('Game started');
    }

    moveTokenThreeSpaces() {
        this.tokenPosition += 3;
    }

    moveTokenFourSpaces() {
        this.tokenPosition += 4;
    }

}

describe('token can move across the board', () => {

    it('token starts on square one', () => {
        const game = new Game();
        game.start();

        expect(game.tokenPosition).toEqual(1);
    });
    it('token before game starts is on square zero', () => {
        const game = new Game();

        expect(game.tokenPosition).toEqual(0);
    });
    it('token moved three spaces and is on square four', () => {
        const game = new Game();
        game.start();
        game.moveTokenThreeSpaces();

        expect(game.tokenPosition).toEqual(4);

    });
    it('token moved three spaces and moved four spaces is on square eight', () => {
        const game = new Game();
        game.start();
        game.moveTokenThreeSpaces();
        game.moveTokenFourSpaces();

        expect(game.tokenPosition).toEqual(8);
    });
    it('token moved four spaces and moved three spaces is on square eight', () => {
        const game = new Game();
        game.start();
        game.moveTokenFourSpaces();
        game.moveTokenThreeSpaces();

        expect(game.tokenPosition).toEqual(8);
    });

});


/* */