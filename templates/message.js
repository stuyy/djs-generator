const config = require('../config/config.json');

module.exports = (client, message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;
    
    // Parse Commands
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);

    cmd ? cmd.run(client, message, args) : message.channel.send("Command doesn't exist.");

}