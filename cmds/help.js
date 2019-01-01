const Discord = require("Discord.js");
module.exports.run = async (bot,message,args) => {

    let embed = new Discord.RichEmbed()
    .setColor("#C0C0C0")
    .setTitle("Green");
    message.channel.send(embed)
    message.channel.send("test")
}


module.exports.help = {
    name: "help"
}
