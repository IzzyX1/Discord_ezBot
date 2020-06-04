const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('e$'))return;  


    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Rank:**\n\nPrice: 25000 Coins [e$buy vip]\n\n**Lifestyle Items:**\n\nFresh Sneakers: 600 [e$buy sneakers]\nSupercar: 800 [e$buy supercar]\nMansion: 1200 [e$buy mansion]\nPrivate Jet: 5000 [e$buy privatejet]\nHelicopter: 4000 [e$buy helicopter]\n\n**Food:**\n\nBiscuits: 100 [e$buy biscuit]\nTacos: 5 [e$buy taco]")
    .setColor("#800080")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}