const { MessageAttachment, MessageEmbed } = require('discord.js')
const path = require('path')

module.exports = {
    run: async(client, message, args) => {
        const owner = client.users.cache.get('723185654044950539')
        console.log
        if(message.author.id === owner.id) {
            const content = message.content.replace('!test', '')
            if(content) {
                client.user.setPresence({
                    activity: {
                        name: content,
                        type: "WATCHING"
                    }
                })
            }
        }
        
    }, aliases: ['sts'], description: 'mudar o status do bot'
}
