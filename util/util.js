const path = require('path');
const fs = require('fs').promises;

const CURRENT_DIR = process.cwd();

module.exports.generateProject = function(type, projectName, framework, configObj) {
    if(type === 'djs') {
        let opts = {};
        console.log(framework);
        if(framework === 'y' || framework === 'yes')
            opts.framework = 'commando'
        console.log(opts)
        fs.mkdir(path.join(CURRENT_DIR, projectName))
        .then(() => fs.mkdir(path.join(CURRENT_DIR, projectName, 'config')))
        .then(() => fs.copyFile(path.join(__dirname, '..', 'templates', 'bot.js'), path.join(CURRENT_DIR, projectName, 'bot.js')))
        .then(() => fs.writeFile(path.join(CURRENT_DIR, projectName, 'config', 'config.json'), JSON.stringify(configObj)))
        .then(() => fs.writeFile(path.join(CURRENT_DIR, projectName, 'djs.json'), JSON.stringify(opts)))
        .then(() => console.log("Generated Discord.JS Project")).catch(err => console.log(err));
    }
}

module.exports.exists = async function(projectName) {
    let file = path.join(CURRENT_DIR, projectName);
    try {
        const res = await fs.access(file);
        return Promise.resolve(false);
    }
    catch(err) {
        return Promise.resolve(true);
    }
}