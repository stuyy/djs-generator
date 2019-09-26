#!/usr/bin/env node
const prompts = require('prompts');
const utils = require('./util/util');
const constants = require('./util/Constants');

const questions = [
    {
        type: 'text',
        name: 'file',
        message: 'Enter the name of the project',
        validate: async input => !(await utils.exists(input)) ? true : 'Project name exists already'
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

const optionsPrompts = [
    {
        type: 'select',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                title: 'New',
                description: 'Create a new Discord Bot Project',
                value: constants.NEW
            },
            {
                title: 'Generate',
                description: 'Generate a Command',
                value: constants.GEN
            },
            {
                title: 'Delete',
                description: 'Delete a command',
                value: constants.DEL
            }
        ]
    }
];

(async () => {
    process.argv.shift();
    process.argv.shift();
    let args = process.argv;
    if(args.length === 0) {
        const res = await prompts(optionsPrompts);
        checkArguments(res.option);
    }
    else if(args.length === 1) {
        console.log(args[0]);
        await checkArguments(args[0]);
    }
})();

async function checkArguments(arg) {
    try {
        switch(arg.toUpperCase()) {
            case constants.NEW:
                await createProject();
                break;
            case constants.GEN:
            case constants.GENERATE:
                const exists = await utils.exists('djs.json');
                if(exists) {
                    console.log("Generating...");
                    // Call Generate Command Function
                }
                else 
                    throw new Error("Cannot find djs.json. Please make sure you're in your project directory.")
                break;
            case constants.DEL:
            case constants.DELETE:
                console.log("Deleting...");
                break;
            default:
                throw new Error("Invalid option.");
        }
    }
    catch(err) {
        console.log(err)
    }
}
async function createProject() {
    const res = await prompts(questions);
    await utils.generateProject(res.lib, res.file, res.framework, {
        "token" : res.token
    });
}