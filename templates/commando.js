const commando = require('discord.js-commando');
const client = new commando.Client({});
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json'));
const registry = require(path.join(__dirname, 'config', 'registry'))(client);

client.login(config.token);
