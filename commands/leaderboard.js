const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('e$'))return; 
  let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
  let content = "";
  for (let i = 0; i < money.length; i++) {
    let user = bot.users.get(money[i].ID.split('_')[2]).username
      content += `${i+1}. ${user} ~ ${money[i].data}\n`
  
    }

  const embed = new Discord.RichEmbed()
  .setDescription(`**${message.guild.name}'s Leaderboard**\n\n${content}`)
  .setColor("#800080")

}