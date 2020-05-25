const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '$';
const cheerio = require('cheerio');
const request = require('request');
const ping = require('minecraft-server-util');
const usedCommandRecently = new Set();
//----------------------------------------- ANTI-SPAM CONFIGURATION -----------------------------------------
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 5, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 5000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 3, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 5, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 7, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});
bot.on('message', (message) => antiSpam.message(message)); // Anti-Spam Function.
//----------------------------------------- ANTI-SPAM CONFIGURATION ---------------------------------------
//----------------------------------------- BOT USER ACTIVITY ---------------------------------------------
bot.on('ready', () => {
    console.log('ezBot is online!')
    let activities = ["$help", `${bot.guilds.cache.size} Servers`];
    setInterval(function(){
        bot.user.setActivity(activities[Math.floor(Math.random() * activities.length)])
        }, 10000)    
    }
);
bot.on('guildCreate', async () => {
    console.log('ezBot has joined another guild.')
    let activities = ["$help", `${bot.guilds.cache.size} Servers`];
    setInterval(function(){
        bot.user.setActivity(activities[Math.floor(Math.random() * activities.length)])
        }, 10000)    
    })
//----------------------------------------- BOT USER ACTIVITY -----------------------------------------
//----------------------------------------- ANTI-SPAM HELP ------------------------------------------
bot.on('message', message=>{
    if(message.content === "$antispamhelp"){
        const embed = new Discord.MessageEmbed()
        .setTitle('Anti-Spam Help:')
        .addField('⚠️ Warn:', '3 messages in a row will result in a warning.')
        .addField('🦿 Kick:', '5 messages in a row will result in a kick.')
        .addField('🔨 Ban:', '7 messages in a row or return & spam after a kick will result in a ban.')
        .setColor(0x6a0dad)
        .setThumbnail(message.author.avatarURL)
        .setFooter('Thank you for using ezBot!')
        message.channel.send(embed);
    }});
//----------------------------------------- GIF MESSAGE REPLIES ----------------------------------
bot.on('message', message=>{
    if(message.content === "nani"){
        message.reply('https://media1.tenor.com/images/a079c945e1ce01bcaccbd6edcee8d305/tenor.gif');
    }
});
bot.on('message', message=>{
    if(message.content === "clown"){
        message.reply('https://www.marketingmag.com.au/wp-content/uploads/2016/10/ronald-mcdonald.jpeg');
    }});
    bot.on('message', message=>{
        if(message.content === "yoshi"){
            message.reply('http://www.superluigibros.com/images/supermariokart_gifs/yoshi.gif');
        }});
//------------------------------------------- MINESWEEPER GAMES ---------------------------------------
    bot.on('message', message=>{
        if(message.content === "$minesweeper1"){
            message.channel.send('**Minesweeper 5x5 with 4 bombs.**')
            message.channel.send('||0️⃣||||1️⃣||||💥||||1️⃣||||0️⃣||');
            message.channel.send('||0️⃣||||1️⃣||||1️⃣||||1️⃣||||0️⃣||');
            message.channel.send('||0️⃣||||0️⃣||||0️⃣||||1️⃣||||1️⃣||');
            message.channel.send('||1️⃣||||1️⃣||||1️⃣||||1️⃣||||💥||');
            message.channel.send('||1️⃣||||💥||||1️⃣||||1️⃣||||1️⃣||');
        }});
    bot.on('message', message=>{
        if(message.content === "$minesweeper2"){
            message.channel.send('**Minesweeper 6x6 with 8 bombs.**')
            message.channel.send('||1️⃣||||1️⃣||||1️⃣||||0️⃣||||1️⃣||||💥||');
            message.channel.send('||2️⃣||||💥||||2️⃣||||0️⃣||||1️⃣||||1️⃣||');
            message.channel.send('||3️⃣||||💥||||2️⃣||||💥||||0️⃣||||0️⃣||');
            message.channel.send('||💥||||2️⃣||||1️⃣||||💥||||0️⃣||||0️⃣||');
            message.channel.send('||1️⃣||||1️⃣||||0️⃣||||0️⃣||||💥||||0️⃣||');
            message.channel.send('||0️⃣||||0️⃣||||💥||||0️⃣||||0️⃣||||0️⃣||');
        }});
    bot.on('message', message=>{
        if(message.content === "$minesweeper3"){
            message.channel.send('**Minesweeper 10x10 with 15 bombs.**')
            message.channel.send('||0️⃣||||0️⃣||||0️⃣||||1️⃣||||💥||||2️⃣||||💥||||2️⃣||||💥||||1️⃣||');
            message.channel.send('||0️⃣||||0️⃣||||0️⃣||||1️⃣||||1️⃣||||2️⃣||||1️⃣||||2️⃣||||1️⃣||||1️⃣||');
            message.channel.send('||0️⃣||||0️⃣||||1️⃣||||💥||||1️⃣||||0️⃣||||0️⃣||||0️⃣||||💥||||0️⃣||');
            message.channel.send('||💥||||💥||||1️⃣||||💥||||1️⃣||||💥||||0️⃣||||0️⃣||||0️⃣||||0️⃣||');
            message.channel.send('||0️⃣||||0️⃣||||1️⃣||||1️⃣||||1️⃣||||0️⃣||||0️⃣||||💥||||0️⃣||||0️⃣||');
            message.channel.send('||0️⃣||||0️⃣||||0️⃣||||0️⃣||||1️⃣||||1️⃣||||1️⃣||||0️⃣||||0️⃣||||0️⃣||');
            message.channel.send('||0️⃣||||💥||||0️⃣||||0️⃣||||1️⃣||||💥||||1️⃣||||0️⃣||||💥||||0️⃣||');
            message.channel.send('||0️⃣||||0️⃣||||0️⃣||||💥||||1️⃣||||1️⃣||||1️⃣||||0️⃣||||0️⃣||||0️⃣||');
            message.channel.send('||0️⃣||||0️⃣||||0️⃣||||0️⃣||||0️⃣||||0️⃣||||0️⃣||||💥||||0️⃣||||0️⃣||');
            message.channel.send('||0️⃣||||0️⃣||||0️⃣||||0️⃣||||0️⃣||||0️⃣||||0️⃣||||0️⃣||||0️⃣||||0️⃣||')
        }});
//----------------------------------------------------- MINESWEEPER HELP -------------------------------------
    bot.on('message', message=>{
        if(message.content === "$minesweeperhelp"){
            const embed = new Discord.MessageEmbed()
            .setTitle('Minesweeper Help:')
            .addField('Commands:', '$minesweeper1, $minesweeper2, $minesweeper3')
            .addField('❔ Why is the game generation slow?', 'To avoid the anti-spam.')
            .setColor(0xFF0000)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Thank you for using ezBot!')
            message.channel.send(embed);
        }});
//----------------------------------------------------- GIF HELP --------------------------------------------
    bot.on('message', message=>{
        if(message.content === "$gifhelp"){
            const embed = new Discord.MessageEmbed()
            .setTitle('GIF Help:')
            .addField('Reponse to Text:', 'nani, clown, poggers, yoshi')
            .addField('❔ What does this do?', 'It will reply with a funny GIF if you say those messages in chat!')
            .setColor(0xFFFF00)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Thank you for using ezBot!')
             message.channel.send(embed);
        }});
//---------------------------------------------------- MC HELP ------------------------------------------------
    bot.on('message', message=>{
        if(message.content === "$mchelp"){
            const embed = new Discord.MessageEmbed()
            .setTitle('mc Help:')
            .addField('Usage:', '$mc <Server IP> e.g hypixel.net <Port> e.g 25565')
            .addField('❔ What does this do?', 'It will give you the version, and other stats of an mc server.')
            .setColor(0xFFA500)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Thank you for using ezBot!')
            message.channel.send(embed);
        }});
//---------------------------------------------------- RANDOM EZ FEATURE -------------------------------------- 
    bot.on('message', message=>{
        if(message.content === "ez"){
            message.reply('ez');
    }
}); // Added just to make the bot look like ez, since it's called ezBot! :D
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
            if(!message.member.permissions.has("MANAGE_MESSAGES")){
                return message.reply(`Sorry you don't have permissions to use this command!`)
            }
            message.channel.bulkDelete(args[1]);
        break;
//-------------------------------------- HELP COMMAND ------------------------------------------        
        case 'help':
            const embed = new Discord.MessageEmbed()
            .setTitle('Commands Help:')
            .addField('Commands:', 'ban, kick, meme, clown, dead, rip, cri, omg, thonk, poggers, clear, mc, minesweeperhelp, gifhelp, mchelp, antispamhelp')
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
            if(!message.member.permissions.has("KICK_MEMBERS")){
                return message.reply(`Sorry you don’t have permissions to use this command!`);
            }
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
            if(!message.member.permissions.has("BAN_MEMBERS")){
                return message.reply(`Sorry you don’t have permissions to use this command!`);
            }
            if(usertoban ){
                usertoban .ban('You were banned from the server!').then(() =>{
                    message.reply(`Successfuly banned ${usertokick.user.tag}`);
                }).catch(err =>{
                    message.reply('I was unable to ban the member.');
                    console.log(err);
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
//------------------------------------------------------ COOL DOWN GIF POGGERS COMMAND ------------------------------------        
        case 'poggers':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('You cannot use this command for another 30 seconds!')
            } else{
                message.reply('https://media.discordapp.net/attachments/702707570900729919/710178169394823278/POGGERS.gif');
                usedCommandRecently.add(message.author.id);
                setTimeout(() =>{
                 usedCommandRecently.delete(message.author.id); // This cooldown was added because of tards in a minecraft server.
                }, 30000);
            }    
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
//----------------------------------------- MEME COMMAND ------------------------------------
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
//------------------------------------- ADDITIONAL NOTES: -----------------------------------------
// PACKAGES TO INSTALLED:
// npm i minecraft-server-util
// npm install cherio --save
// npm install request --save
// npm install discord-anti-spam
// THIS CODE WAS DEVELOPED BY EZ, FOR THE EZBOT FOR DISCORD. 