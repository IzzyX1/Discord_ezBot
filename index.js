const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '$';
const cheerio = require('cheerio');
const request = require('request');
const ping = require('minecraft-server-util');
//-----------------------------------------------------------------------------------------------

bot.on('ready', () => {
    console.log('ezBot is online!')
    let activities = ["$help", `${bot.guilds.cache.size} Guilds`];
    setInterval(function(){
        bot.user.setActivity(activities[Math.floor(Math.random() * activities.length)])
        }, 10000)    
    }
);
bot.on('message', message=>{
    if(message.content === "nani"){
        message.reply('https://media1.tenor.com/images/a079c945e1ce01bcaccbd6edcee8d305/tenor.gif');
    }
    bot.on('message', message=>{
        if(message.content === "clown"){
            message.reply('https://www.thesun.co.uk/wp-content/uploads/2016/10/23097226jpg-js272868302.jpg?w=670');
}}
//---------------------------------- BOT USER ACTIVITY ------------------------------------------    
//---------------------------------- BOT USER ACTIVITY ------------------------------------------
)})
// ----------------------------------------------------------------------------------------------
// ------------------------------------ COMMANDS BELOW ------------------------------------------
bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
//-------------------------------------- PING COMMAND ------------------------------------------        
        case 'ping':
            message.reply('pong!');
        break;
//-------------------------------------- CLEAR COMMAND -----------------------------------------        
        case 'clear':
            if(!args[1]) return message.reply('Error, please define a second arg.')
            message.channel.bulkDelete(args[1]);
        break;
//-------------------------------------- HELP COMMAND ------------------------------------------        
        case 'help':
            const embed = new Discord.MessageEmbed()
            .setTitle('Commands Help:')
            .addField('Commands:', 'Ban, Kick, Meme, Clown, Dead, RIP, Cri, Omg, Thonk, Clear, MC')
            .addField('Support Server:', 'https://discord.gg/ac3KQu2')
            .setColor(0x03C4FF)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Thank you for using ezBot!')
            message.channel.send(embed);
        break; 
//------------------------------------ KICK COMMAND -------------------------------------------        
        case 'kick':
            if(!args[1]) message.channel.send('You need to specify a person!')
            const usertokick = message.mentions.members.first();
            if(usertokick ){
                usertokick .kick('You were kicked from the server!').then(() =>{
                    message.reply(`Successfuly kicked ${usertokick.user.tag}`);
            }).catch(err =>{
                message.reply('I was unable to kick the member.');
                console.log(err);
            });
        } else {
            message.reply("That user isn\'t in this guild!")
        }
        break;
//--------------------------------- BAN COMMAND -----------------------------------------------            
        case 'ban':
            if(!args[1]) message.channel.send('You need to specify a person!')
            const usertoban = message.mentions.members.first();
            if(usertoban ){
                usertoban .ban({ression: 'You were banned from the server!'}).then(() =>{
                    message.reply(`Successfully banned ${usertoban.user.tag}`)
            });
        } else {
            message.reply("That user isn\'t in this guild!")
        }

        break;
//--------------------------------- REACTION COMMANDS ------------------------------------------            
        case 'clown':
            message.react('🤡');
        break;
        case 'dead':
            message.react('💀');
        break;
        case 'omg':
            message.react('😱');
        break;
        case 'cri':
            message.react('😢');
        break;
        case 'thonk':
            message.react('🤔');
        break;
        case 'rip':
            message.react('🙏');
        break;
//---------------------------- MC COMMAND -----------------------------------------------------
        case 'mc':
            if(!args[1]) return message.channel.send('You must type a minecraft server IP!')
            if(!args[2]) return message.channel.send('You must type a minecraft server Port!')
            ping(args[1], parseInt(args[2]), (error, reponse) =>{
                if(error) throw error
                const Embed = new Discord.MessageEmbed()
                .setTitle('Server Status')
                .setColor('0x7cfc00')
                .addField('Server IP', reponse.host)
                .addField('Server Version', reponse.version)
                .addField('Online Players', reponse.onlinePlayers)
                .addField('Max Players', reponse.maxPlayers)
                message.channel.send(Embed);
    })
        break;
//--------------------------------------------------------------------------------------------------------
        case 'meme':
            image(message);
        break;
}
});
function image(message){
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "dankmeme",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
        $ = cheerio.load(responseBody);
        var links = $(".image a.link");
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            return;
        }
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
}
// ---------------------------------- COMMANDS ABOVE ----------------------------------------------
bot.login(process.env.token);