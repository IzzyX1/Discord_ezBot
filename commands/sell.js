const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('e$'))return;  
    
    let user = message.author;

    if(args[0] == 'sneakers') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`❌ You don't have Sneakers to sell`);

        let nikeses = await db.fetch(`nikes_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Sold Fresh Sneakers For 600 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)








    } else if(args[0] == 'supercar') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`❌ You don't have a Supercar to sell`);

       let cars = await db.fetch(`car_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.subtract(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Sold a Car For 800 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)






    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`❌ You don't have a Mansion to sell`);

        let houses = await db.fetch(`house_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.subtract(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Sold a Mansion For 1200 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)




    } else if(args[0] == 'privatejet') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`❌ You don't have a Private Jet to sell`);

        let privatejets = await db.fetch(`privatejet_${message.guild.id}_${user.id}`)

        if (privatejets < 1) return message.channel.send(Embed2)
       
        db.fetch(`privatejet_${message.guild.id}_${user.id}`)
        db.subtract(`privatejet_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Sold a Private Jet For 5000 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed3)




    } else if(args[0] == 'biscuit') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`❌ You don't have a Biscuit to sell`);

        let biscuits = await db.fetch(`biscuit_${message.guild.id}_${user.id}`)

        if (biscuits < 1) return message.channel.send(Embed2)
       
        db.fetch(`biscuit_${message.guild.id}_${user.id}`)
        db.subtract(`biscuit_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Sold a Biscuit For 100 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 100)
        message.channel.send(Embed3)


    } else if(args[0] == 'taco') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`❌ You don't have a Taco to sell`);

        let tacos = await db.fetch(`taco_${message.guild.id}_${user.id}`)

        if (tacos < 1) return message.channel.send(Embed2)
       
        db.fetch(`taco_${message.guild.id}_${user.id}`)
        db.subtract(`taco_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Sold a Taco For 5 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 5)
        message.channel.send(Embed3)




    } else if(args[0] == 'helicopter') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`❌ You don't have a Helicopter to sell`);

        let helicopters = await db.fetch(`helicopter_${message.guild.id}_${user.id}`)

        if (helicopters < 1) return message.channel.send(Embed2)
       
        db.fetch(`helicopter_${message.guild.id}_${user.id}`)
        db.subtract(`helicopter_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Sold a Helicopter For 4000 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 4000)
        message.channel.send(Embed3)






























    };

}
  
  module.exports.help = {
    name:"sell",
    aliases: [""]
  }