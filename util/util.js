const path = require('path');
const fs = require('fs').promises;

const CURRENT_DIR = process.cwd();

/**
 * Generates a DiscordJS project. If framework is enabled, it will set the framework
 * key in djs.json to "commando". 
 */
module.exports.generateProject = async function(type, projectName, framework, configObj) {
    if(type === 'djs') {
        const usingFramework = framework === 'y' || framework === 'yes';
        let opts = usingFramework ? { framework: 'commando', groups: [] } : { framework: 'none' }

        fs.mkdir(path.join(CURRENT_DIR, projectName))
        .then(() => fs.mkdir(path.join(CURRENT_DIR, projectName, 'config'))) // Create Config Folder.
        .then(() => usingFramework ? fs.copyFile(path.join(__dirname, '..', 'templates', 'registry.js'), path.join(CURRENT_DIR, projectName, 'config', 'registry.js')) : Promise.resolve())
        .then(() => usingFramework ? fs.copyFile(path.join(__dirname, '..', 'templates', 'commando.js'), path.join(CURRENT_DIR, projectName, 'bot.js')) : fs.copyFile(path.join(__dirname, '..', 'templates', 'bot.js'), path.join(CURRENT_DIR, projectName, 'bot.js')))
        .then(() => fs.writeFile(path.join(CURRENT_DIR, projectName, 'config', 'config.json'), JSON.stringify(configObj, null, 4)))
        .then(() => fs.writeFile(path.join(CURRENT_DIR, projectName, 'djs.json'), JSON.stringify(opts, null, 4)))
        .then(() => fs.readFile(path.join(CURRENT_DIR, projectName, 'djs.json')))
        .then(() => usingFramework ? fs.mkdir(path.join(CURRENT_DIR, projectName, 'commands')) : Promise.resolve())
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
    
}