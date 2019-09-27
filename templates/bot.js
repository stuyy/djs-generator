const discord = require('discord.js');
const client = new discord.Client({});
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json'));
const registry = require(path.join(__dirname, 'config', 'registry'))(client);
client.login(config.token);
