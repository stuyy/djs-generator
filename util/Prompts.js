const constants = require('./Constants');
const utils = require('./util');

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
          { title: 'discord.py', description: 'Python library for interacting with the Discord API', value: 'dpy' }
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

module.exports.commandQuestions = [
    {
        type: 'text',
        name: 'name',
        message: 'Name of command?',
        validate: input => input.match(/\d/) ? 'Invalid Command' : true
    },
    {
        type: 'text',
        name: 'group',
        message: 'Group of command?',
        validate: input => input.match(/\d/) ? 'Invalid Group Name' : true
    },
    {
        type: 'text',
        name: 'memberName',
        message: 'Member name?',
        validate: input => input.match(/\d/) ? 'Invalid member name' : true
    },
    {
        type: 'text',
        name: 'description',
        message: 'Please enter a description'
    }
];

module.exports.generate = [
    {
        type: 'select',
        name: 'option',
        message: 'What would you like to generate?',
        choices: [
            {
                title: 'Command',
                description: 'Generate a new text command',
                value: constants.COMMAND
            },
            {
                title: 'Event',
                description: 'Generate a new event handler',
                value: constants.EVENT
            }
        ]
    }
];
module.exports.event = [
    {
        type: 'autocompleteMultiselect',
        name: 'events',
        message: 'Which event(s) would you like to generate?',
        choices: [
            { title: 'READY', value: 'ready' },
            { title: 'CHANNEL_CREATE', value: 'channelCreate' },
            { title: 'CHANNEL_PINS_UPDATE', value: 'channelPinsUpdate'},
            { title: 'CHANNEL_UPDATE', value:  'channelUpdate' },
            { title: 'CLIENT_USER_GUILD_SETTINGS_UPDATE', value: 'clientUserGuildSettingsUpdate' },
            { title: 'CLIENT_USER_SETTINGS_UPDATE', value: 'clientUserGuildSettingsUpdate' },
            { title: 'DEBUG', value: 'debug' },
            { title: 'DISCONNECT', value: 'disconnect' },
            { title: 'EMOJI_CREATE', value: 'emojiCreate' },
            { title: 'EMOJI_DELETE', value: 'emojiDelete' },
            { title: 'EMOJI_UPDATE', value: 'emojiUpdate' },
            { title: 'ERROR', value: 'error' },
            { title: 'GUILD_BAN_ADD', value: 'guildBanAdd' },
            { title: 'GUILD_BAN_REMOVE', value:'guildBanRemove' },
            { title: 'GUILD_CREATE', value: 'guildCreate' },
            { title: 'GUILD_DELETE', value: 'guildDelete' },
            { title: 'GUILD_INTEGRATIONS_UPDATE', value: 'guildIntegrationsUpdate'},
            { title: 'GUILD_MEMBER_ADD', value: 'guildMemberAdd'},
            { title: 'GUILD_MEMBER_AVAILABLE', value: 'guildMemberAvailable'},
            { title: 'GUILD_MEMBER_REMOVE' , value:'guildMemberRemove'},
            { title: 'GUILD_MEMBERS_CHUNK', value: 'guildMembersChunk' },
            { title: 'GUILD_MEMBERS_SPEAKING', value: 'guildMembersSpeaking' },
            { title: 'GUILD_MEMBER_UPDATE' , value:'guildMemberUpdate'},
            { title: 'GUILD_UNAVAILABLE', value: 'guildUnavailable'},
            { title: 'GUILD_UPDATE', value: 'guildUpdate' },
            { title: 'MESSAGE', value: 'message' },
            { title: 'MESSAGE_DELETE', value: 'messageDelete'},
            { title: 'MESSAGE_DELETE_BULK', value: 'messageDeleteBulk' },
            { title: 'MESSAGE_REACTION_ADD', value: 'messageReactionAdd'},
            { title: 'MESSAGE_REACTION_REMOVE', value: 'messageReactionRemove' },
            { title: 'MESSAGE_REACTION_REMOVE_ALL', value: 'messageReactionRemoveAll' },
            { title: 'MESSAGE_UPDATE', value: 'messageUpdate'},
            { title: 'PRESENCE_UPDATE', value: 'presenceUpdate' },
            { title: 'RATE_LIMIT', value: 'rateLimit' },
            { title: 'RECONNECTING', value: 'reconnecting' },
            { title: 'RESUME', value: 'resume' },
            { title: 'ROLE_CREATE', value: 'roleCreate'},
            { title: 'ROLE_DELETE', value: 'roleDelete'},
            { title: 'ROLE_UPDATE', value: 'roleUpdate'},
            { title: 'TYPING_START' , value: 'typingStart'},
            { title: 'TYPING_STOP', value: 'typingStop'},
            { title: 'USER_NOTE_UPDATE', value: 'userNoteUpdate'},
            { title: 'USER_UPDATE' , value:'userUpdate'},
            { title: 'VOICE_STATE_UPDATE', value: 'voiceStateUpdate'},
            { title: 'WARN', value: 'warn'},
            { title: 'WEBHOOK_UPDATE', value: 'webhookUpdate'}
        ],
        hint: '- Space to select. Return to submit'
    }
]