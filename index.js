const { MessageAttachment, MessageEmbed, Intents, Client } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const moment = require('moment');
const {
    token,
    prefix
} = require('./config.json')
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES
    ] 
});
 // Declare client to be a new Discord Client (bot)
require('http').createServer((req, res) => res.end(`
Dveloper Bot : Ahmed Clipper
Server Support : https://dsc.gg/clipper-tv
`)).listen(3000) //Dont remove this 
  /*
  Code Below provides info about the bot 
  once it's ready
  */

const Discord = require('discord.js');
const Timers = new Map();
const color = "#0099ff"

//Fix Erorr Project
process.on("uncaughtException" , err => {
return;
})
 
process.on("unhandledRejection" , err => {
return;
})
 
process.on("rejectionHandled", error => {
  return;
});
client.on('ready', () => {
  console.log(``);
  console.log(`</> Logged in as : ${client.user.tag}!`);
  console.log(`</> Servers : ${client.guilds.cache.size}`);
  console.log(`</> Users : ${client.users.cache.size}`);
  console.log(`</> channels : ${client.channels.cache.size}`);
  console.log(`</> Name : ${client.user.username}`);
  client.user.setStatus('idle');///dnd/online/idle
  let status = [`By : Ahmed Clipper`];
  setInterval(()=>{
  client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})



//help
client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle("> **The Bot Calculates The Credit Tax**")
      .setDescription(`
🟢\`+ㅤㅤㅤㅤㅤㅤ \`❯ 1. prefix bot
🟢\`botㅤㅤㅤㅤㅤ \`❯ 2. Reply with bot
🟢\`taxㅤㅤㅤㅤㅤ \`❯ 3. Calculates credit tax with broker tax
🟢\`userㅤㅤㅤㅤㅤ\`❯ 4. Displays information about the person
🟢\`pingㅤㅤㅤㅤㅤ\`❯ 5. Ping bot displays
🟢\`dailyㅤㅤㅤㅤ \`❯ 6. Daily gift
🟢\`timerㅤㅤㅤㅤ \`❯ 7. To find out the number of seconds in numbers
🟢\`membrsㅤㅤ ㅤ \`❯ 8. View server member statuses
🟢\`serverㅤㅤㅤㅤ\`❯ 9. View server information
🟢\`avatarㅤㅤㅤㅤ\`❯ 10. View profile picture
🟢\`profileㅤㅤㅤ \`❯ 11. View profile
🟢\`banner server\`❯ 12. Server banner display
🟢\`avatar server\`❯ 13. Show server main image
           `)
    .addFields(
        { name: 'Websit', value: '**__[Click Here](https://pro-tax.netlify.app)__**', inline: true },
        { name: 'Support Server', value: '**__[Click Here](https://dsc.gg/clipper-tv)__**', inline: true },
        { name: 'Developer Bot', value: '<@803873969168973855>', inline: true }
    );

        message.reply({ embeds: [embed] });
    }
});



//t-value
client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 't-value') {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle("> **🧮 Tax Value**")
            .setDescription(`1. ${prefix}Tax 1k (K) = 1000 (Thousand) \n2. ${prefix}Tax 1b (B) = 1000000000 (Billion) \n3. ${prefix}Tax 1t (T) = 1000000000000 (Trillion) \n4. ${prefix}Tax 1q (Q) = 1000000000000000 (Quadrillion)`);

        message.reply({ embeds: [embed] });
    }
});



//tax
client.on("messageCreate", async message => {
  if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);

  const command = args.shift().toLowerCase();

  if (command === 'tax') {
    const args2 = args.join(" ").toLowerCase().replace(/k/g, "000").replace(/m/g, "000000").replace(/b/g, "000000000").replace(/t/g, "000000000000").replace(/q/g, "000000000000000");
    const tax = Math.floor(args2 * (20 / 19) + 1);
    const tax2 = Math.floor(tax - args2);
    const tax3 = Math.floor(tax2 * (20 / 19) + 1);
    const tax4 = Math.floor(tax2 + tax3 + args2);

    if (!args2 || isNaN(args2) || args2 < 1) {
      const errorEmbed = new MessageEmbed()
      const embed = new MessageEmbed()
      .setColor("#2c2c34")
      .setDescription(`**>⚙️ Please Wait.. **`);

const embedMsg = await message.reply({ embeds: [embed] });

setTimeout(() => {
      const taxEmbed = new MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`**❌ Error**`)
    .setDescription(`\`\`\`Please Write The Amount\`\`\``);
      embedMsg.edit({ embeds: [taxEmbed] });
    }, 1000);
      return message.reply({ embeds: [errorEmbed] });
    }

    const embed = new MessageEmbed()
      .setColor("#2c2c34")
      .setDescription(`**⚙️ Please Wait.. **`);
    const embedMsg = await message.reply({ embeds: [embed] });

    setTimeout(() => {
      const taxEmbed = new MessageEmbed()
            .setColor("#43B582")
            .setTitle(`**✅ The Final Cost Is**`)
            .addFields(
                { name: "1. Amount Total", value: `\`\`\`${tax}\`\`\``, inline: true },
                { name: "2. Amount Tax", value: `\`\`\`${tax2}\`\`\``, inline: false }
        );
      embedMsg.edit({ embeds: [taxEmbed] });
    }, 1000);
  }
});



//daily
client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'daily') {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle("**> 🎁 Daily Gifts**")
            .addFields(
            { name: '**Daily Probot**', value: '**__[Click Here](https://probot.io/daily)__**', inline: true },
            { name: '**Vote Probot**', value: '**__[Click Here](https://top.gg/bot/probot/vote)__**', inline: true }
            )             

        message.reply({ embeds: [embed] });
    }
});



//ping
client.on("messageCreate", async (black) => {
    if (black.content.startsWith(prefix + "ping")) {
        black.channel.send({
            embeds: [
                new MessageEmbed()
                    .setDescription("**⚙ Please Wait...**")
            ]
        }).then((m) => {
            setTimeout(() => {
                m.edit({
                    embeds: [
                        new MessageEmbed()
                            .setTitle("> **🤖 Bot Statuss**")
                            .setColor('#0099ff')
                            .addFields(
                            { name: '**📶 My Ping Is**', value: `**__${client.ws.ping}__ms**`, inline: true },
                            { name: '**⌛ TimeDiff**', value: `**__${(Date.now() - black.createdTimestamp)}__ms**`, inline: true }
                            )
                    ]
                });
            }, 1000);
        });
    }
});



//avatar
client.on("messageCreate", async message => {

    if (message.content.toLowerCase().startsWith(`${prefix}avatar`)) {
        const args = message.content.split(" ");
        const user = message.mentions.users.first() || client.users.cache.get(args[1]) || message.author;

        if (args[1] !== "server") {
            message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setAuthor(user.username, user.displayAvatarURL({ dynamic: true }))
                        .setDescription(`[**Avatar Link**](${user.displayAvatarURL()})`)
                        .setImage(user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
                ]
            });
        } else if (args[1] === "server") {
            message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                        .setDescription(`[**Avatar Link**](${message.guild.iconURL({ dynamic: true })})`)
                        .setImage(message.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
                ]
            });
        }
    }
});



//user
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + "user".toLowerCase())) {
        if (!message.guild) return;
        const args = message.content.split(" ")[1];
        let mID = message.guild.members.cache.get(args);
        let member;
        let user;
        if (args && !message.mentions.members.first() && !mID) return message.lineReplyNoMention({embed:{description:`😒 - **${message.author.username}**, **I can't find \`${args}\` in the server Please Join Your Id a Server**`,color:color}});
        if (message.mentions.members.first() || mID) {
            member = message.mentions.members.first() || mID;
            user = member.user;
        } else {
            member = message.member;
            user = message.author;
        }
        let em = new Discord.MessageEmbed()
            .setColor(color)
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            .setTitle("> **User Info**")
            .addFields(
                { name: 'Joined Discord :', value: `\n\`\`${moment(user.createdAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(user.createdAt).fromNow()}**`, inline: true },
                { name: 'Joined Server :', value: `\`\`${moment(member.joinedAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(member.joinedAt).fromNow()}**`, inline: true }
            )
        message.lineReply(em);
    }
});



client.login(token)
