module.exports = {
    name: "salty",
    description: "Tell someone they're being salty",
    aliases: [],
    usage: '',
    args: false,
    execute(message, args) {
        return message.channel.send('', {
            file: 'https://cdn.discordapp.com/attachments/401173462816784404/431518522489962496/ac15367378dc1aadf3e03752093c3d5b.png'
        });
    },
};