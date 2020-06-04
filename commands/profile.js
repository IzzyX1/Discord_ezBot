const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('e$'))return;  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`vip_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = ' ✅ Active'

  let shoes = await db.fetch(`nikes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let newprivatejet = await db.fetch(`privatejet_${message.guild.id}_${user.id}`)
  if(newprivatejet === null) newprivatejet = '0'

  let newbiscuit = await db.fetch(`biscuit_${message.guild.id}_${user.id}`)
  if(newbiscuit === null) newbiscuit = '0'

  let newtaco = await db.fetch(`taco_${message.guild.id}_${user.id}`)
  if(newtaco === null) newtaco = '0'

  let newhelicopter = await db.fetch(`helicopter_${message.guild.id}_${user.id}`)
  if(newhelicopter === null) newhelicopter = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#800080")
  .setDescription(`**${user}'s Profile**\n\nPocket: ${money}\nBank: ${bank}\nVIP Status: ${vip}\n\n**Inventory**\n\n👟 Sneakers: ${shoes}\n🏎️ Supercars: ${newcar}\n🏠 Mansions: ${newhouse}\n✈️ Private Jets: ${newprivatejet}\n🚁 Helicopters: ${newhelicopter}\n\n**Food:**\n\n🍪 Biscuits: ${newbiscuit}\n🌮 Tacos: ${newtaco}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"profile",
  aliases: ["pro"]
}