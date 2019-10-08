const path = require('path');
const fs = require('fs').promises;
const templates = require(path.join(__dirname, 'Templates'));
const CURRENT_DIR = process.cwd();
const constants = require('./Constants');
/**
 * Generates a DiscordJS project. If framework is enabled, it will set the framework
 * key in djs.json to "commando". 
 */
module.exports.generateProject = function(type, projectName, usingFramework, configObj) {
    if(type === 'djs') {
        let opts = 
        { 
            project: projectName, 
            framework: usingFramework, 
            groups: [['test', 'test command']],
            events: [] 
        }
        fs.mkdir(path.join(CURRENT_DIR, projectName))
        .then(() => fs.mkdir(path.join(CURRENT_DIR, projectName, 'config'))) // Create Config Folder.
        .then(() => fs.writeFile(path.join(CURRENT_DIR, projectName, 'config', 'config.json'), JSON.stringify(configObj, null, 4)))
        .then(() => fs.writeFile(path.join(CURRENT_DIR, projectName, 'djs.json'), JSON.stringify(opts, null, 4)))
        .then(() => fs.mkdir(path.join(CURRENT_DIR, projectName, 'commands'))) // Generate Commands Folder for both Scaffolds.
        .then(() =>  fs.mkdir(path.join(CURRENT_DIR, projectName, 'events'))) // Generate Events Folder for both Scaffolds.
        .then(() => copyTemplates({ usingFramework: usingFramework, projectName: projectName}))
        .then(() => console.log("Generated Discord.JS Project"))
        .catch(err => console.log(err));
    }
}

async function copyTemplates(opts) {

    try {
        // Copy ready.js event to both scaffolds
        await fs.copyFile(path.join(__dirname, '..', 'templates', 'ready.js'), path.join(CURRENT_DIR, opts.projectName, 'events', 'ready.js'));
        opts.usingFramework ? false : await fs.copyFile(path.join(__dirname, '..', 'templates', 'message.js'), path.join(CURRENT_DIR, opts.projectName, 'events', 'message.js'));
        // Copy registry files depending on which scaffold
        opts.usingFramework ? await fs.copyFile(path.join(__dirname, '..', 'templates', 'registry.js'), path.join(CURRENT_DIR, opts.projectName, 'config', 'registry.js')) : await fs.copyFile(path.join(__dirname, '..', 'templates', 'mainregistry.js'), path.join(CURRENT_DIR, opts.projectName, 'config', 'registry.js'));
        // Copy main template based on which scaffold
        opts.usingFramework ? fs.copyFile(path.join(__dirname, '..', 'templates', 'commando.js'), path.join(CURRENT_DIR, opts.projectName, 'bot.js')) : fs.copyFile(path.join(__dirname, '..', 'templates', 'bot.js'), path.join(CURRENT_DIR, opts.projectName, 'bot.js'));
        // Copy commands based on which scaffold user uses.
        // If user is using framework, create the test subdir for commands dir.
        opts.usingFramework ? await fs.mkdir(path.join(CURRENT_DIR, opts.projectName, 'commands', 'test')) : false
        // Copy test command depending on which scaffold user chooses.
        opts.usingFramework ? await fs.copyFile(path.join(__dirname, '..', 'templates', 'sample_commands', 'commando-test.js'), path.join(CURRENT_DIR, opts.projectName, 'commands', 'test', 'test.js')) : await fs.copyFile(path.join(__dirname, '..', 'templates', 'sample_commands', 'test.js'), path.join(CURRENT_DIR, opts.projectName, 'commands', 'test.js'))
        
    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Copied templates...");
    }
}

module.exports.addEventHandler = async function(events, fileObj) {
    console.log(events)
    await asyncForEach(events, fs.writeFile, fs.access, fileObj);
}

async function asyncForEach(arr, writeFile, access, fileObj) {
    for (let i = 0; i < arr.length; i++) {
        if(constants.EVENT_TEMPLATES.hasOwnProperty(arr[i]))
        {
            try {
                await access(path.join(CURRENT_DIR, 'events', `${arr[i]}.js`));
            }
            catch(err) {
                await writeFile(path.join(CURRENT_DIR, 'events', `${arr[i]}.js`), constants.EVENT_TEMPLATES[arr[i]]);
            }
        }
    }
}
module.exports.exists = async function(filename) {
    let file = path.join(CURRENT_DIR, filename);
    try {
        const res = await fs.access(file);
        return Promise.resolve(true); // Resolve true if project directory exists.
    }
    catch(err) {
        // If fs.access throws an err, that means file doesn't exist.
        return Promise.resolve(false); // Resolve false if project directory doesn't exist.
    }
}

module.exports.rmdir = async function(file) {
    try {
        let del = await fs.rmdir(path.join(CURRENT_DIR, file));
        console.log(del)
    }
    catch(err) {
        console.log(err);
    }
}
module.exports.readFile = async function(file) {
    return await fs.readFile(path.join(CURRENT_DIR, file), 'utf8');
}

module.exports.generateCommandTemplate = async function(projectName, options) {
    const template = templates.generateCommand(options);
    // First check if the group directory exists.
    let doesExist = await this.exists(path.join('commands', `${options.group}`));
    if(doesExist) {
        let cmdExist = options.framework ? await this.exists(path.join('commands', `${options.group}`, `${options.name}Command.js`)) : await this.exists(path.join('commands', `${options.group}`, `${options.name}.js`));
        if(!cmdExist) {
            options.framework ? await fs.writeFile(path.join(CURRENT_DIR, 'commands', `${options.group}`, `${options.name}Command.js`), template) : fs.writeFile(path.join(CURRENT_DIR, 'commands', `${options.group}`, `${options.name}.js`), template);
        } else {
            throw new Error("Command already exists under that group.");
        }
    }
    else {
        // Create group name regardless of scaffold.
        await fs.mkdir(path.join(CURRENT_DIR, 'commands', `${options.group}`));
        // Create template name based on scaffold
        options.framework ? await fs.writeFile(path.join(CURRENT_DIR, 'commands', `${options.group}`, `${options.name}Command.js`), template) : await fs.writeFile(path.join(CURRENT_DIR, 'commands', `${options.group}`, `${options.name}.js`), template)
    }

    let obj = JSON.parse(await this.readFile('djs.json'));
    
    if(!obj.groups.some(el => el[0] === `${options.group}`)) {
        
        obj.groups.push([`${options.group}`, `${options.group} commands`]);
        await fs.writeFile(path.join(CURRENT_DIR, 'djs.json'), JSON.stringify(obj, null, 4));
    }
}
// Get all commands and return it
module.exports.deleteCommand = async function() {
    var cmds = []
    await recursiveReaddir(path.join(CURRENT_DIR, 'commands'), cmds);
    return cmds;
}

async function recursiveReaddir(dir, cmds) {
    var files = await fs.readdir(dir);
    if(files.length === 0)
        return;
    else {
        await files.readdirAsync(dir, fs.lstat, cmds);
    }
}
Array.prototype.readdirAsync = async function(dir, cb, cmds) {
    for(var i = 0; i < this.length; i++) {
        let stats = await cb(path.join(dir, this[i]));

        if(stats.isDirectory()) {
            await recursiveReaddir(path.join(dir, this[i]), cmds);
        }
        else {
            cmds.push(this[i]);
        }
    }
}