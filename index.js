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
    const res = await prompts(questions.questions);
    await utils.generateProject(res.lib, res.file, res.framework, {
        "token" : res.token
    });
}