//const Discord = require('discord.js')
//const db = require('quick.db')

//module.exports.run = async (bot, message, args) => {
  //if(!message.content.startsWith('e$'))return;
  //const embed = new Discord.MessageEmbed()
  //.setDescription(`**Input a Leaderboard Option**\n\nCoin Leaderboard: e$leaderboard coins\nFresh Sneakers Leaderboard: e$leaderboard sneakers\nCar Leaderboard: e$leaderboard supercar\nMansion Leaderboard: e$leaderboard mansion`)
  //.setColor("#800080")

  //if(!args[0]) return message.channel.send(embed)

    //if (args[0] == 'coins') {
      //let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
      //let content = "";

      //for (let i = 0; i < money.length; i++) {
      //let user = bot.users.cache.get(money[i].ID.split('_')[2]).username
      //content += `${i+1}. ${user} ~ ${money[i].data}\n`

      //}

    //const embed = new Discord.MessageEmbed()
    //.setDescription(`**${message.guild.name}'s Coin Leaderboard**\n\n${content}`)
    //.setColor("#800080")

    //message.channel.send(embed)
 //} else if(args[0] == 'sneakers') {
   //let nike = db.all(`sneakers_${message.guild.id}`, { sort: '.data'})
  //let content = "";

    //for (let i = 0; i < nike.length; i++) {
      //let user = bot.users.cache.get(nike[i].ID.split('_')[2]).username

      //content += `${i+1}. ${user} ~ ${nike[i].data}\n`
    //}

    //const embed = new Discord.MessageEmbed()
    //.setDescription(`**${message.guild.name}'s Fresh Sneakers Leaderboard**\n\n${content}`)
    //.setColor("#800080")

    //message.channel.send(embed)
  //} else if(args[0] == 'supercar') {
    //let cars = db.all(`car_${message.guild.id}`, { sort: '.data'})
    //let content = "";

    //for (let i = 0; i < cars.length; i++) {
      //let user = bot.users.cache.get(cars[i].ID.split('_')[2]).username
      //content += `${i+1}. ${user} ~ ${cars[i].data}\n`
   //}

    //const embed = new Discord.MessageEmbed()
    //.setDescription(`**${message.guild.name}'s Supercar Leaderboard**\n\n${content}`)
    //.setColor("#800080")

   //message.channel.send(embed)
  //} else if(args[0] == 'mansion') {
    //let mansions = db.all(`house_${message.guild.id}`, { sort: '.data'})
    //let content = "";

    //for (let i = 0; i < mansions.length; i++) {
      //let user = bot.users.cache.get(mansions[i].ID.split('_')[2]).username

        //content += `${i+1}. ${user} ~ ${mansions[i].data}\n`
   //}

    //const embed = new Discord.MessageEmbed()
    //.setDescription(`**${message.guild.name}'s Mansion Leaderboard**\n\n${content}`)
    //.setColor("#800080")

    //message.channel.send(embed)
  //}

//}
//module.exports.help = {
  //name:"leaderboard",
  //aliases: ["leader"]
//}