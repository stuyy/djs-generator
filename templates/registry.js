const commando = require('discord.js-commando');
const config = require('../djs.json');
const path = require('path');
const fs = require('fs').promises;

module.exports = function(client) {
    client.registry.registerGroups(config.groups)
    .registerCommandsIn(path.join(__dirname, '..', 'commands'));

    fs.readdir(path.join(__dirname, '..', 'events'))
    .then(files => files.filter(file => file.endsWith(".js")))
    .then(files => files.forEach(file => {
        let eventName = file.substr(0, file.indexOf(".js"));
        let event = require(path.join(__dirname, '..', 'events', eventName));
        client.on(eventName, event.bind(null, client));
    }))
    .catch(err => console.log(err));
}