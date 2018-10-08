/*jshint esversion: 6 */
module.exports = () => {
    console.log('Welcome to my Social Networking Kata!');
};
//Import the readline module to read and write input and output to console
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console_out('Welcome to my Social Networking Kata!Type a name and then a command to start...');
//Import the classes from each js file
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
        if (line.split(" ").length > 1) { //If Enter is hit readline reads the input and process it
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

function chat_command(activeUser, cmd, arg) { //Parse the commands separating them from user and message
    switch (cmd) {

        case '->': //Command to write message, if found a message is created and published to timeline
            const message = new Message(arg);
            activeUser.publishMessage(message);
            /*             for (let index = 0; index < activeUser.timeline.messages.length; index++) {
                            const element = activeUser.timeline.messages[index].text;
                        } */

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
                    console_out("That is not a valid user.");
            }

            activeUser.subscribeTo(arg); //If the argument is a user then subscribe to it
            for (let index = 0; index < activeUser.subscriptions.length; index++) {
                const element = activeUser.subscriptions[index].name;
                console_out(activeUser.name + ' has subscribed to ' + element);
            }

            break;

        case 'wall': //Command to read an aggregated list of all messages from all subscibed users

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

function console_out(msg) { //Fix readline console.log issue that breaks a new line
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(msg);
    readline.prompt(true);
}