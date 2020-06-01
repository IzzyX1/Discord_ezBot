const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('e$'))return;  
  
    if (args[0] == 'vip') {
    
      let embed = new Discord.MessageEmbed()
      .setDescription("**VIP Rank**\n\nBenefits: Chance to get more coins from robbing someone")
      .setColor("#800080")
      message.channel.send(embed)
    } else if(args[0] == 'sneakers') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Fresh Sneakers**\n\nBenefits: Chance to win coins, Extra Perks + More by leading the leaderboard")
      .setColor("#800080")
      message.channel.send(embed)
    } else if(args[0] == 'supercar') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Supercar**\n\nBenefits: Chance to win coins, Extra Perks + More by leading the leaderboard")
      .setColor("#800080")
      message.channel.send(embed)
  } else if(args[0] == 'mansion') {
    let embed = new Discord.MessageEmbed()
    .setDescription("**Mansion**\n\nBenefits: Chance to win coins, Extra Perks + More by leading the leaderboard")
    .setColor("#800080")
    message.channel.send(embed)
  }

  }

  
  module.exports.help = {
    name:"storeinfo",
    aliases: ["si"]
  }