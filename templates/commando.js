const commando = require('discord.js-commando');
const client = new commando.Client({});
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json'));
const registry = require('./config/registry')(client);

client.login(config.token);

client.on('ready', () => {
    console.log(client.user.username + " has logged in.");
})