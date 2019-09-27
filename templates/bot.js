const discord = require('discord.js');
const client = new discord.Client({});
const registry = require('./config/registry')(client);