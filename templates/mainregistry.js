const path = require('path');
const config = require(path.join(__dirname, 'config.json'));
const fs = require('fs').promises;

module.exports = function(client) {
    // Register Events, Commands.
    client.login(config.token);
    registerEvents(client)
    registerCommands(client)
}

function registerEvents(client) {
    fs.readdir(path.join(__dirname, '..', 'events'))
    .then(files => files.filter(file => file.endsWith(".js")))
    .then(files => files.forEach(file => {
        let eventName = file.substr(0, file.indexOf(".js"));
        let event = require(path.join(__dirname, '..', 'events', eventName));
        client.on(eventName, event.bind(null, client));
    }))
    .catch(err => console.log(err));
}

function registerCommands(client) {
    
}