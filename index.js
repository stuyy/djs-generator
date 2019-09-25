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
    const fileName = await prompts({
        type: 'text',
        name: 'file',
        message: 'Enter the name of the file',
        validate: file => file.endsWith(".js") || file.endsWith(".py")
    });

    // Now generate the file.

    if(response.lib === 'djs') {
        console.log("Generating DiscordJS project");
        let mkdir = utils.promisify(fs.mkdir);
        await mkdir(path.join(process.cwd(), 'src'))
    }
})();
