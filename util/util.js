const path = require('path');
const fs = require('fs').promises;

const CURRENT_DIR = process.cwd();

module.exports.generateProject = async function(type, projectName, framework, configObj) {
    if(type === 'djs') {
        let opts = {
            'framework' : 'none',
            'groups' : []
        };
        if(framework === 'y' || framework === 'yes')
            opts.framework = 'commando'

        fs.mkdir(path.join(CURRENT_DIR, projectName))
        .then(() => fs.mkdir(path.join(CURRENT_DIR, projectName, 'config')))
        .then(() => fs.copyFile(path.join(__dirname, '..', 'templates', 'bot.js'), path.join(CURRENT_DIR, projectName, 'bot.js')))
        .then(() => fs.writeFile(path.join(CURRENT_DIR, projectName, 'config', 'config.json'), JSON.stringify(configObj, null, 4)))
        .then(() => fs.writeFile(path.join(CURRENT_DIR, projectName, 'djs.json'), JSON.stringify(opts, null, 4)))
        .then(() => fs.readFile(path.join(CURRENT_DIR, projectName, 'djs.json')))
        .then(file => console.log(JSON.parse(file)))
        .then(() => console.log("Generated Discord.JS Project"))
        .catch(err => console.log(err));

    }
}

module.exports.exists = async function(projectName) {
    let file = path.join(CURRENT_DIR, projectName);
    try {
        const res = await fs.access(file);
        return Promise.resolve(false); // Resolve False if project directory doesn't exist.
    }
    catch(err) {
        return Promise.resolve(true); // Resolve true if project directory doesn't exist.
    }
}
/**
 * Generates a DJS Commando Project.
 */
module.exports.generateCommandoProject = async function(projectName) {
    try {
        let res = await module.exports.exists(path.join(__dirname, projectName, 'djs.json'));
        console.log(res);
        console.log("Hello.")
    }
    catch(err) {
        console.log(err);
    }
    const template = `
        const commando = require('discord.js-commando');
        const client = new commando.Client({});
        const path = require('path');
        const config = require(path.join(__dirname, 'config', 'config.json'));

        client.login(config.token);

        client.registry
        .registerGroups()
        .registerDefaults()
        .registerCommandsIn(path.join(__dirname, 'commands'));

        client.on('ready', () => {
            console.log(client.user.username + " has logged in.");
        })
    `;

}