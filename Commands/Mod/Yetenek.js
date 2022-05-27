const Discord = require('discord.js')
const Config = require('../../config.json')
const roller = require('../../roller.json')
const kanallar = require('../../kanallar.json')

exports.run = async (client, message, args) => {
        message.channel.send(new Discord.MessageEmbed().setDescription(`\
Öncelikle bir rol vermek istiyorsanız <@&${roller.botkomutyetki}> rolüne sahip olmalısınız!
------------------------------------------------------------
<@&931994056161108130>  \`.savage @pntonas/ID\`
<@&${roller.designer}> \`.pntonas @pntonas/ID\`
<@&${roller.sponsor}>   \`.kairos @pntonas/ID\`
`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('2F3136')
            .setAuthor('Yardım Menüsü!')
            .setFooter(Config.footer)
        ) 
    }

    exports.conf = {
        aliases:["savage"]
    };
    
    exports.help = {
        name:'rolver'
    }
