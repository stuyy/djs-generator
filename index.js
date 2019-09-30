#!/usr/bin/env node
const utils = require('./util/util');
const constants = require('./util/Constants');
const prompt = require('./util/Prompts').prompt;

(async () => {
    process.argv.shift();
    process.argv.shift();
    let args = process.argv;
    if(args.length === 0) {
        let res = await prompt(constants.DEFAULT);
        checkArguments(res.option);
    }
    else if(args.length === 1) {
        await checkArguments(args[0]);
    }
    else {
        
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
                if(!exists) throw new Error("Cannot find djs.json. Please make sure you're in your project directory.");
                let res = await prompt(constants.GEN);

                let file = await utils.readFile('djs.json');
                let fileObj = JSON.parse(file);

                if(res.option === constants.COMMAND) {
                    await generateCommand(fileObj.framework);
                        
                }
                else if(res.option === constants.EVENT) {
                    // Generate Event.
                    let res = await prompt(constants.EVENT)
                    await utils.addEventHandler(res.events, fileObj);
                }
                
                break;
            case constants.DEL:
            case constants.DELETE:
                let djsExists = await utils.exists('djs.json')
                if(djsExists) {
                    let response = await prompt(constants.DEL)
                    console.log(response)
                    // Display all of the user's commands.
                }
                else {
                    throw new Error("djs.json not found");
                }


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
    const res = await prompt(constants.COMMAND)
    res['framework'] = framework;
    await utils.generateCommandTemplate(djsObj.project, res);
}
async function createProject() {
    console.log("yo")
    const res = prompt(constants.NEW);
    utils.generateProject(res.lib, res.file, res.framework, {
        "token" : res.token,
        "prefix" : "!"
    });
}
