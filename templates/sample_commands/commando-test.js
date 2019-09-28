const commando = require('discord.js-commando');
module.exports = class TestCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'test',
            group: 'test',
            memberName: 'test',
            description: 'A simple test command'
        });
    }
    async run(msg) {
        msg.channel.send("Test command works!")
    }
}