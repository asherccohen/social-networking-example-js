/*jshint esversion: 6 */
module.exports = () => {
    console.log('Welcome to my Social Networking Kata!');
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console_out('Welcome to my Social Networking Kata!Type a name and then a command to start...');
/* const Timeline = require('./Timeline'); */
const User = require('./src/User');
const Message = require('./src/Message');

const alice = new User('Alice');
const bob = new User('Bob');
const charlie = new User('Charlie');


readline.on('line', function(line) {
    var activeUser = line.split(" ")[0];
    switch (activeUser) {
        case 'alice':
            activeUser = alice;
            giveCommand();
            break;
        case 'bob':
            activeUser = bob;
            giveCommand();
            break;
        case 'charlie':
            activeUser = charlie;
            giveCommand();
            break;
        default:
            console_out("That is not a valid command.");
    }

    function giveCommand() {
        if (line.split(" ").length > 1) {
            var cmd = line.split(" ")[1];
            var arg = line.substr(activeUser.name.length + 1 + cmd.length + 1, line.length);
            chat_command(activeUser, cmd, arg);
        } else {
            var userMessages = activeUser.readMessages(activeUser);
            for (let index = 0; index < userMessages.length; index++) {
                const element = userMessages[index].text;
                console_out(element + ' (1 thousand years ago)');
            }
        }
    }
});

function chat_command(activeUser, cmd, arg) {
    switch (cmd) {

        case '->':
            const message = new Message(arg);
            activeUser.publishMessage(message);
            for (let index = 0; index < activeUser.timeline.messages.length; index++) {
                const element = activeUser.timeline.messages[index].text;
                console_out(activeUser.name + ' has posted: ' + element + ' (1 thousand years ago)');
            }

            break;

        case 'follows':
            switch (arg) {
                case 'alice':
                    arg = alice;
                    break;
                case 'bob':
                    arg = bob;
                    break;
                case 'charlie':
                    arg = charlie;
                    break;
                default:
                    console_out("That is not a valid command.");
            }

            activeUser.subscribeTo(arg);
            for (let index = 0; index < activeUser.subscriptions.length; index++) {
                const element = activeUser.subscriptions[index].name;
                console_out(activeUser.name + ' has subscribed to ' + element);
            }

            break;
        case 'wall':

            for (let index = 0; index < activeUser.subscriptionsTimeLine().length; index++) {
                const element = activeUser.subscriptionsTimeLine()[index].text;
                const elementName = activeUser.subscriptionsTimeLine()[index].name;
                console_out(elementName + ' - ' + element + ' (1 trillion years ago)');
            }

            break;

        default:
            console_out("That is not a valid command.");

    }
}

function console_out(msg) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(msg);
    readline.prompt(true);
}