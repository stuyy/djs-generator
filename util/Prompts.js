module.exports.questions = [
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

module.exports.optionsPrompts = [
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