const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('e$'))return;  


    let embed = new Discord.MessageEmbed()
    .setTitle("Economy Help Centre [Prefix: e$]")
    .addField("Economy Commands", "`work` `beg` `balance` `profile` `withdraw` `deposit` `daily` `weekly` `store` `buy` `sell`")
    .addField("Gambling Commmands", "`roulette` `slots`")
    .addField("Store Information Command:", "`storeinfo [item]`")
    .setColor("#00080")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help",
  aliases: [""]
}