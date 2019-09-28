#!/usr/bin/env node
const prompts = require('prompts');
const utils = require('./util/util');
const constants = require('./util/Constants');
const questions = require('./util/Prompts');

(async () => {
    process.argv.shift();
    process.argv.shift();
    let args = process.argv;
    if(args.length === 0) {
        const res = await prompts(questions.optionsPrompts);
        checkArguments(res.option);
    }
    else if(args.length === 1) {
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
                let res = await prompts(questions.generate, { onCancel: () => process.exit(1)});
                const exists = await utils.exists('djs.json');
                if(!exists) throw new Error("Cannot find djs.json. Please make sure you're in your project directory.");

                let file = await utils.readFile('djs.json');
                let fileObj = JSON.parse(file);

                if(res.option === constants.COMMAND) {
                    await generateCommand(fileObj.framework);
                        
                }
                else if(res.option === constants.EVENT) {
                    // Generate Event.
                    let res = await prompts(questions.event);
                    await utils.addEventHandler(res.events);
                }
                
                break;
            case constants.DEL:
            case constants.DELETE:
                console.log("Deleting...");
                break;
            case constants.HELP:

                default:
                throw new Error("Invalid option.");
        }
    }
    catch(err) {
        console.log(err)
    }
}

async function generateCommand(framework) {
    let djsObj = JSON.parse(await utils.readFile('djs.json'));
    const res = await prompts(questions.commandQuestions);
    res['framework'] = framework;
    await utils.generateCommandTemplate(djsObj.project, res);
}
async function createProject() {
    const res = await prompts(questions.questions, { onCancel: (prompt, answers) => process.exit(1)});
    utils.generateProject(res.lib, res.file, res.framework, {
        "token" : res.token,
        "prefix" : "!"
    });
}
