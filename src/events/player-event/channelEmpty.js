const languages = require('../../util/languages/languages')

module.exports = (player, message, queue) => {

    const {guild} = message
    message.channel.send(`${languages(guild, 'CEVT')}`)

};