#!/usr/bin/env node
const prompts = require('prompts');
const utils = require('./util/util');
const constants = require('./util/Constants');

const questions = [
    {
        type: 'text',
        name: 'file',
        message: 'Enter the name of the project',
        validate: async input => await utils.exists(input) ? true : 'Project name exists already'
    },
    {
        type: 'select',
        name: 'lib',
        message: 'Which library are you using?',
        choices: [
          { title: 'Discord.JS', description: 'NodeJS library for interacting with the Discord API', value: 'djs' },
          { title: 'discord.py', description: 'Python library for interacting with the Discord API', value: 'dpy'}
        ],
        initial: 0
    },
    {
        type: 'toggle',
        name: 'framework',
        message: prev => prev === 'djs' ? 'Install the Commando Framework?' : 'Install commands Extension?',
        initial: true,
        active: 'yes',
        inactive: 'no'
    },
    {
        type: 'invisible',
        name: 'token',
        message: "Please enter your bot token"
    }

];

(async () => {
    process.argv.shift();
    process.argv.shift();
    let args = process.argv;
    if(args.length === 0) {
        const res = await prompts(questions);
        await utils.generateProject(res.lib, res.file, res.framework, {
            "token" : res.token
        });
        
    }
    else if(args.length === 1) {
        console.log("Yay")
    }

})();
