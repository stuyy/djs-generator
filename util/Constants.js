module.exports = {
    NEW: 'NEW',
    GENERATE: 'GENERATE',
    GEN: 'GEN',
    DEL: 'DEL',
    DELETE: 'DELETE',
    COMMAND: 'COMMAND',
    EVENT: 'EVENT',
    HELP: 'HELP',
    PROJECT: 'PROJECT',
    DEFAULT: 'DEFAULT'
};

module.exports.EVENTS = {
    'READY' : 'ready',
    'CHANNEL_CREATE' : 'channelCreate',
    'CHANNEL_PINS_UPDATE' : 'channelPinsUpdate',
    'CHANNEL_UPDATE' : 'channelUpdate',
    'CLIENT_USER_GUILD_SETTINGS_UPDATE' : 'clientUserGuildSettingsUpdate',
    'CLIENT_USER_SETTINGS_UPDATE' : 'clientUserGuildSettingsUpdate',
    'DEBUG' : 'debug',
    'DISCONNECT' : 'disconnect',
    'EMOJI_CREATE' : 'emojiCreate',
    'EMOJI_DELETE' : 'emojiDelete',
    'EMOJI_UPDATE' : 'emojiUpdate',
    'ERROR' : 'error',
    'GUILD_BAN_ADD' : 'guildBanAdd',
    'GUILD_BAN_REMOVE' : 'guildBanRemove',
    'GUILD_CREATE' : 'guildCreate',
    'GUILD_DELETE' : 'guildDelete',
    'GUILD_INTEGRATIONS_UPDATE' : 'guildIntegrationsUpdate',
    'GUILD_MEMBER_ADD' : 'guildMemberAdd',
    'GUILD_MEMBER_AVAILABLE' : 'guildMemberAvailable',
    'GUILD_MEMBER_REMOVE' : 'guildMemberRemove',
    'GUILD_MEMBERS_CHUNK' : 'guildMembersChunk',
    'GUILD_MEMBERS_SPEAKING' : 'guildMembersSpeaking',
    'GUILD_MEMBER_UPDATE' : 'guildMemberUpdate',
    'GUILD_UNAVAILABLE' : 'guildUnavailable',
    'GUILD_UPDATE' : 'guildUpdate',
    'MESSAGE' : 'message',
    'MESSAGE_DELETE' : 'messageDelete',
    'MESSAGE_DELETE_BULK' : 'messageDeleteBulk',
    'MESSAGE_REACTION_ADD' : 'messageReactionAdd',
    'MESSAGE_REACTION_REMOVE' : 'messageReactionRemove',
    'MESSAGE_REACTION_REMOVE_ALL' : 'messageReactionRemoveAll',
    'MESSAGE_UPDATE' : 'messageUpdate',
    'PRESENCE_UPDATE' : 'presenceUpdate',
    'RATE_LIMIT' : 'rateLimit',
    'RECONNECTING' : 'reconnecting',
    'RESUME' : 'resume',
    'ROLE_CREATE' : 'roleCreate',
    'ROLE_DELETE' : 'roleDelete',
    'ROLE_UPDATE' : 'roleUpdate',
    'TYPING_START' : 'typingStart',
    'TYPING_STOP' : 'typingStop',
    'USER_NOTE_UPDATE' : 'userNoteUpdate',
    'USER_UPDATE' : 'userUpdate',
    'VOICE_STATE_UPDATE' : 'voiceStateUpdate',
    'WARN' : 'warn',
    'WEBHOOK_UPDATE' : 'webhookUpdate'   
}

module.exports.EVENT_TEMPLATES = {

'channelCreate' : 

`/**
* Event: channelCreate
* Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate
*/
module.exports = (client, channel) => { 
    // Implementation goes here
}`, 

'channelPinsUpdate' : 
`/**
* Event: channelPinsUpdate
* Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelPinsUpdate
*/
module.exports = (client, channel, date) => { 
    // Implementation goes here
}`,

'channelUpdate' : 
`/**
 * Event: channelUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelUpdate
 */
module.exports = (client, oldChannel, newChannel) => { 
    // Implementation goes here
}`,

'clientUserGuildSettingsUpdate' :
`/**
* Event: clientUserGuildSettingsUpdate
* Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-clientUserGuildSettingsUpdate
*/
module.exports = (client, settings) => { 
    // Implementation goes here
}`,

'debug' : 
`/**
 * Event: debug
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-debug
 */
module.exports = (client, info) => { }`,

'disconnect' : 
`
/**
 * Event: disconnect
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-disconnect
 */
module.exports = (client, event) => {
    // Implementation goes here
}
`,
'emojiCreate' :
`
/**
 * Event: emojiCreate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiCreate
 */
module.exports = (client, emoji) => {

}`,
'emojiDelete' :
`
/**
 * Event: emojiDelete
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiDelete
 */
module.exports = (client, emoji) => {

}`,
'emojiUpdate' :
`
/**
 * Event: emojiUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiUpdate
 */
module.exports = (client, oldEmoji, newEmoji) => {

}`,
'error' : 
`
/**
 * Event: error
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-error
 */
module.exports = (client, error) => {
    console.log(error)
}
`,
'guildBanAdd' : 
`
/**
 * Event: guildBanAdd
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildBanAdd
 */
module.exports = (client, guild, user) => {

}
`,
'guildBanRemove' :
`
/**
 * Event: guildBanRemove
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildBanRemove
 */
module.exports = (client, guild, user) => {

}
`,
'guildCreate' : 
`
/**
 * Event: guildCreate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
 */
module.exports = (client, guild) => {

}
`,
'guildDelete' :
`
/**
 * Event: guildDelete
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildDelete
 */
module.exports = (client, guild) => {

}`,
'guildIntegrationsUpdate' :
`
/**
 * Event: guildIntegrationsUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildIntegrationsUpdate
 */
module.exports = (client, guild) => {

}`,
'guildMemberAdd' :
`
/**
 * Event: guildMemberAdd
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
 */
module.exports = (client, member) => {

}`,
'guildMemberAvailable' :
`
/**
 * Event: guildMemberAvailable
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAvailable
 */
module.exports = (client, member) => {

}`,
'guildMemberRemove' :
`
/**
 * Event: guildMemberRemove
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
 */
module.exports = (client, member) => {
    console.log(member.name + " left the guild.")
}`,
'guildMembersChunk' :
`
/**
 * Event: guildMembersChunk
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMembersChunk
 */
module.exports = (client, members, guild) => {

}`,
'guildMemberSpeaking' : 
`
/**
 * Event: guildMemberSpeaking
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberSpeaking
 */
module.exports = (client, member, speaking) => {

}
`,
'guildMemberUpdate' :
`
/**
 * Event: guildMemberUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberUpdate
 */
module.exports = (client, oldMember, newMember) => {

}`,
'guildUnavailable' : 
`
/**
 * Event: guildUnavailable
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildUnavailable
 */
module.exports = (client, guild) => {

}`,
'guildUpdate':
`
/**
 * Event: guildUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildUpdate
 */
module.exports = (client, oldGuild, newGuild) => {

}`,
'message' :
`
/**
 * Event: message
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
 */
module.exports = (client, message) => {

}`,

'messageDelete' :
`
/**
 * Event: messageDelete
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageDelete
 */
module.exports = (client, message) => {
    console.log(message.content + " was deleted.");
}`,

'messageDeleteBulk' :
`
/**
 * Event: messageDeleteBulk
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageDeleteBulk
 */
module.exports = (client, messages) => {

}
`,

'messageReactionAdd' :
`
/**
 * Event: messageReactionAdd
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionAdd
 */
module.exports = (client, reaction, user) => {

}`,

'messageReactionRemove' : 
`
/**
 * Event: messageReactionRemove
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemove
 */
module.exports = (client, reaction, user) => {

}`,

'messageReactionRemoveAll' :
`
/**
 * Event: messageReactionRemoveAll
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemoveAll
 */
module.exports = (client, message) => {

}`,

'messageUpdate' :
`
/**
 * Event: messageUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageUpdate
 */
module.exports = (client, oldMessage, newMessage) => {
    
}`,

'presenceUpdate' : 
`
/**
 * Event: presenceUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-presenceUpdate
 */
module.exports = (client, oldMember, newMember) => {

}`,

'rateLimit' : 
`
/**
 * Event: rateLimit
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-rateLimit
 */
module.exports = (client, rateLimitInfo, limit, timeDifference, path, method) => {

}`,

'ready' :
`
/**
 * Event: ready
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-ready
 */
module.exports = (client) => {
    console.log(client.user.username + " has logged in.")
}`,

'reconnecting' : 
`
/**
 * Event: reconnecting
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-reconnecting
 */
module.exports = (client) => {

}`,

'resume' : 
`
/**
 * Event: resume
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-resume
 */
module.exports = (client, replayed) => {

}`,

'roleCreate' : 
`
/**
 * Event: roleCreate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-roleCreate
 */
module.exports = (client, role) => {
    console.log(role.name + ' was created');
}`,

'roleDelete' : 
`
/**
 * Event: roleDelete
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-roleDelete
 */
module.exports = (client, role) => {
    console.log(role.name + ' was deleted.');
}`,

'roleUpdate' : 
`
/**
 * Event: roleUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-roleUpdate
 */
module.exports = (client, oldRole, newRole) => {

}`,

'typingStart' : 
`
/**
 * Event: typingStart
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-typingStart
 */
module.exports = (client, channel, user) => {

}`,

'typingStop' : 
`
/**
 * Event: typingStop
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-typingStop
 */
module.exports = (client, channel, user) => {

}`,

'userNoteUpdate' :
`
/**
 * Event: userNoteUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-userNoteUpdate
 */
module.exports = (client, user, oldNote, newNote) => {

}`,

'userUpdate' :
`
/**
 * Event: userUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-userUpdate
 */
module.exports = (client, oldUser, newUser) => {

}`,

'voiceStateUpdate' : 
`
/**
 * Event: voiceStateUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-voiceStateUpdate
 */
module.exports = (client, oldMember, newMember) => {

}`,

'warn' : 
`
/**
 * Event: warn
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-warn
 */
module.exports = (client, info) => {

}`,

'webhookUpdate' : 
`
/**
 * Event: webhookUpdate
 * Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-webhookUpdate
 */
module.exports = (client, channel) => {
    
}`
}

