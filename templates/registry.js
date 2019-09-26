const commando = require('discord.js-commando');
const config = require('../djs.json');
const path = require('path');
module.exports = function(client) {
    client.registry.registerGroups(config.groups)
    .registerCommandsIn(path.join(__dirname, '..', 'commands'));;
}
