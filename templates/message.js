module.exports = (client, message) => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === 'hello')
        message.reply('Hello!');
}