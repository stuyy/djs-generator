const path = require('path');
const fs = require('fs').promises;

module.exports.generateProject = function(type, projectName, configObj) {
    const CURRENT_DIR = process.cwd();
    if(type === 'djs') {
        fs.mkdir(path.join(CURRENT_DIR, projectName))
        .then(() => fs.mkdir(path.join(CURRENT_DIR, projectName, 'config')))
        .then(() => fs.copyFile(path.join(__dirname, '..', 'templates', 'bot.js'), path.join(CURRENT_DIR, projectName, 'bot.js')))
        .then(() => fs.writeFile(path.join(CURRENT_DIR, projectName, 'config', 'config.json'), JSON.stringify(configObj)))
        .then(() => console.log("Generated Discord.JS Project")).catch(err => console.log(err));
    }
}