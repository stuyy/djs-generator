#!/usr/bin/env node
const prompts = require('prompts');
const utils = require('./util/util');
(async () => {
    process.argv.shift();
    process.argv.shift();
    let args = process.argv;
    if(args.length === 0) {
        const projectName = await prompts({
            type: 'text',
            name: 'file',
            message: 'Enter the name of the project',
            validate: async input => await utils.exists(input) ? true : 'Project name exists already'
        });
        const library = await prompts({
            type: 'select',
            name: 'value',
            message: 'Which library are you using?',
            choices: [
              { title: 'Discord.JS', description: 'NodeJS library for interacting with the Discord API', value: 'djs' },
              { title: 'discord.py', description: 'Python library for interacting with the Discord API', value: 'dpy'}
            ],
            initial: 1
        });
        const confirm = await prompts({
            type: 'toggle',
            name: 'value',
            message: response.lib === 'djs' ? 'Install Commando?' : 'Install Commands Extension?',
            initial: true,
            active: 'yes',
            inactive: 'no'
        });
        const framework = await prompts({
            type: 'text',
            name: 'choice',
            message: `Do you want to use the commands framework for ${response.lib}? (Y/N)`,
            validate: input => input.toLowerCase() === 'y' || input.toLowerCase() === 'yes' || input.toLowerCase() === 'n' || input.toLowerCase() === 'no'
        })
        const botToken = await prompts({
            type: 'invisible',
            name: 'token',
            message: "Please enter your bot token"
        });
        console.log(confirm.value);
        await utils.generateProject(response.lib, projectName.file, framework.choice, {
            "token" : botToken.token
        });
        
    }
    else if(args.length === 1) {

    }
    
    

})();
