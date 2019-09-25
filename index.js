const prompts = require('prompts');

(async () => {
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
    console.log(response);
    console.log(fileName)
})();