module.exports.generateCommand = (options) => {
    return options.framework ? 
`const commando = require('discord.js-commando');
module.exports = class ${options.name}Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: '${options.name.toLowerCase()}',
            description: '${options.description}',
            group: '${options.group.toLowerCase()}',
            memberName: '${options.memberName.toLowerCase()}'
        })
    }
    async run(msg) {
        msg.channel.send("${options.name} command works!");
    }
}` :
`module.exports.run = (client, message, args) => {
    message.channel.send('${options.name} command works')
}
`;
}