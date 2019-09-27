module.exports = function(client) {
    // Register Events, Commands.
    registerEvents()
    registerCommands()
}

function registerEvents() {
    fs.readdir(path.join(__dirname, '..', 'events'))
    .then(files => files.filter(file => file.endsWith(".js")))
    .then(files => files.forEach(file => {
        let eventName = file.substr(0, file.indexOf(".js"));
        let event = require(path.join(__dirname, '..', 'events', eventName));
        client.on(eventName, event.bind(null, client));
    }))
    .catch(err => console.log(err));
}

function registerCommands() {

}