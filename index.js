const prompts = require('prompts');
const fs = require('fs');
const path = require('path');
const utils = require('./util/util');

(async () => {
    console.log(process.cwd())
    const response = await prompts({
      type: 'text',
      name: 'lib',
      message: 'Which library are you using?',
      validate: lib => lib === 'djs' || lib === 'discordjs' || lib === 'discord.js' || lib == 'dpy' || lib === 'discord.py'
    });
    const projectName = await prompts({
        type: 'text',
        name: 'file',
        message: 'Enter the name of the project'
    });
    const botToken = await prompts({
        type: 'text',
        name: 'token',
        message: "Please enter your bot token"
    });

    // Now generate the file.

    if(response.lib === 'djs') {
        console.log("Generating DiscordJS project");
        let mkdir = utils.promisify(fs.mkdir);
        await mkdir(path.join(process.cwd(), projectName.file))
        await mkdir(path.join(process.cwd(), projectName.file, 'config'));
        let copyFile = utils.promisify(fs.copyFile);
        await copyFile(path.join(__dirname, 'templates', 'bot.js'), path.join(process.cwd(), projectName.file, 'bot.js'));
        let configObj = {
            "token" : botToken.token
        }
        let writeFile = utils.promisify(fs.writeFile);
        await writeFile(path.join(process.cwd(), projectName.file, 'config', 'config.json'), JSON.stringify(configObj));
    }
})();
