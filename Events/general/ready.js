const Config = require('../../config.json')
module.exports = (client) => {
    client.user.setActivity(Config.Bot_Aktivite)
    console.log(`pntonas 💛 116 `)
};
