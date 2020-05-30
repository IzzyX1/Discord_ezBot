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
    warnThreshold: 5, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 9, // Amount of messages sent in a row that will cause a ban.
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
bot.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`ezBot has started, with ${bot.users.cache.size} users, in ${bot.channels.cache.size} channels of ${bot.guilds.cache.size} guilds.`); 
    bot.user.setActivity(`In ${bot.guilds.cache.size} Servers | $help`, { type: 'WATCHING'});
  });
  
  bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setActivity(`In ${bot.guilds.cache.size} Servers | $help`);
  });
  
  bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    bot.user.setActivity(`In ${bot.guilds.cache.size} Servers | $help`);
  });
//----------------------------------------- BOT USER ACTIVITY -----------------------------------------
//----------------------------------------- ANTI-SPAM HELP ------------------------------------------
bot.on('message', message=>{
    if(message.content === "$antispamhelp"){
        const embed = new Discord.MessageEmbed()
        .setTitle('Anti-Spam Help:')
        .addField('⚠️ Warn:', '5 messages in a row will result in a warning.')
        .addField('🦿 Kick:', '7 messages in a row will result in a kick.')
        .addField('🔨 Ban:', '9 messages in a row or return & spam after a kick will result in a ban.')
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
            .addField('Reponse to Text:', 'nani, poggers, yoshi')
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
        bot.on('message', message=>{
            if(message.content === "$reactionshelp"){
                const embed = new Discord.MessageEmbed()
                .setTitle('Reaction Messages Help:')
                .addField('Commands:', 'clown, dead, rip, cri, omg, thonk, nou, flushed, owo, liar')
                .addField('What does this do?', 'This is a cool feature where the bot adds reactions to your commands!')
                .addField('Support Server:', 'https://discord.gg/ac3KQu2')
                .setColor(0x00008b)
                .setThumbnail(message.author.avatarURL)
                .setFooter('Thank you for using ezBot!')
                message.channel.send(embed);
            }});
            bot.on('message', message=>{
                if(message.content === "$randomfeatures"){
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Random Features Help:')
                    .addField('Commands:', 'clown, nou, nitro, gift')
                    .addField('These random features are...', 'Some cool images that appear if you use these commands!')
                    .addField('Support Server:', 'https://discord.gg/ac3KQu2')
                    .setColor(0xffff00)
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
            .addField('Commands:', 'ban, kick, meme, clear, mc, minesweeperhelp, gifhelp, mchelp, antispamhelp, reactionshelp, randomfeatures')
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
        case 'flushed':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('You cannot use this command for another 15 seconds!')
            } else{
                message.react('😳');
                usedCommandRecently.add(message.author.id);
                setTimeout(() =>{
                 usedCommandRecently.delete(message.author.id); // This cooldown was added because of tards in a minecraft server.
                }, 15000);
            }
        break;
        case 'liar':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('You cannot use this command for another 15 seconds!')
            } else{
                message.channel.send('Liar liar pants on fire!')
                message.react('👖');
                message.react('🔥')
                usedCommandRecently.add(message.author.id);
                setTimeout(() =>{
                 usedCommandRecently.delete(message.author.id); // This cooldown was added because of tards in a minecraft server.
                }, 15000);
            }
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
        case 'nou':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('You cannot use this command for another 20 seconds!')
                } else{
                    message.reply('**UNO REVERSE** https://pics.me.me/12-56-pm-nou-omattel-the-homemade-uno-cards-be-like-60502937.png');
                    usedCommandRecently.add(message.author.id);
                    setTimeout(() =>{
                        usedCommandRecently.delete(message.author.id); // This cooldown was added because of tards in a minecraft server.
                    }, 20000);
                }    
        break;
        case 'asd':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('You cannot use this command for another 20 seconds!')
            } else{
                message.react('🇦');
                message.react('🇸');
                message.react('🇩');
                usedCommandRecently.add(message.author.id);
                setTimeout(() =>{
                 usedCommandRecently.delete(message.author.id); // This cooldown was added because of tards in a minecraft server.
                }, 20000);
            }    
        break;
        case 'owo':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('You cannot use this command for another 15 seconds!')
            } else{
                message.react('🅾️');
                message.react('🇼');
                message.react('🇴');
                usedCommandRecently.add(message.author.id);
                setTimeout(() =>{
                 usedCommandRecently.delete(message.author.id); // This cooldown was added because of tards in a minecraft server.
                }, 15000);
            }
        break;
        case 'nitro':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('You cannot use this command for another 15 seconds!')
                } else{
                    message.reply('Free Discord Nitro? ;p https://external-preview.redd.it/52nZu7zpt_EE0pJ27CAZABLIP_Evv3XnoFw6dR7Oaho.png?auto=webp&s=8f1a333e7537ef78c0892a1334cfd9c0e944c332');
                    message.channel.send('**SIKE YOU JUST GOT GNOMED! :D**');
                    usedCommandRecently.add(message.author.id);
                    setTimeout(() =>{
                        usedCommandRecently.delete(message.author.id); // This cooldown was added because of tards in a minecraft server.
                    }, 15000);
                }    
        break;
        case 'gift':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('You cannot use this command for another 15 seconds!')
                } else{
                    message.reply('Here, enjoy your free gift: discord.gift/ytNyKkwxaPEdQcTAx4FVFdDV');
                    message.channel.send('Yes, that\'s right, free gucci flip flops.')
                    usedCommandRecently.add(message.author.id);
                    setTimeout(() =>{
                        usedCommandRecently.delete(message.author.id); // This cooldown was added because of tards in a minecraft server.
                    }, 15000);
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
        url: "http://results.dogpile.com/serp?qc=images&q=" + "redditmemes",
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
bot.on('message', message => {

    if (message.author.bot) return;
    if (message.content.indexOf(PREFIX) !== 0) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'rps') {
        let replies = ['rock', 'paper', 'scissors'];
        let result = Math.floor((Math.random() * replies.length));

        let uReply = args[0];
        if (!uReply) return message.channel.send(`Please play with one of these responses: \`${replies.join(', ')}\``);
        if (!replies.includes(uReply)) return message.channel.send(`Only these responses are accepted: \`${replies.join(', ')}\``);

        if (replies[result] === uReply) {
            console.log(replies[result]);
            return message.channel.send('It\'s a tie! We had the same choice. ');
        } else if (uReply === 'rock') {
            console.log(replies[result]);
            if (replies[result] === 'paper') return message.channel.send('Oop, you lost. I had Paper. 📰');
            else return message.channel.send('Oop, you lost. I had Rock.');
        } else if (uReply === 'scissors') {
            console.log(replies[result]);
            if (replies[result] === 'rock') return message.channel.send('Oop, you lost. I had Scissors. ✂️');
            else return message.channel.send('I had Paper. You won!');
        } else if (uReply === 'paper') {
            console.log(replies[result]);
            if (replies[result] === 'scissors') return message.channel.send('Oop, you lost. I had Rock. 🗻');
            else return message.channel.send('Amazing. You won! 🎉');
        }
    }
});
// ---------------------------------- COMMANDS ABOVE ----------------------------------------------
bot.login(process.env.token);
//------------------------------------- ADDITIONAL NOTES: -----------------------------------------
// PACKAGES TO INSTALLED:
// npm i minecraft-server-util
// npm install cherio --save
// npm install request --save
// npm install discord-anti-spam
// THIS CODE WAS DEVELOPED BY EZ, FOR THE EZBOT FOR DISCORD. 