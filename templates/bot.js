const discord = require('discord.js');
const client = new discord.Client({});
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json'));

client.on('ready', () => {
    console.log(`${client.user.username}#${client.user.discriminator} logged in.`);
});

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === 'ping') {
        message.reply('pong');
    }
});

client.login(config.token);