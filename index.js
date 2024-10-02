const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1154459332914720878')
    .setType('PLAYING')
    .setURL('https://twitch.tv/discord')
    .setState('Team MGC 💀')

    .setName('Bleeding KidneY 🍒')
    .setDetails('Playing As Duggles D Xebec ♂️')
    .setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })

    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/external/g0dRFUr3eL4xv76GNWWUjAT9c2MEkXWtxGkumpjbHeU/https/i.pinimg.com/originals/19/f7/e8/19f7e88ecdf3ead830ee96a82e3de21a.gif')
    .setAssetsSmallImage('https://media.discordapp.net/external/eK_s96YiVIfvG14xk6TFz4ZQWuVTRi0M_I7oPZhpoto/https/emoji.discadia.com/emojis/798267a5-3e6c-4168-a56c-9fc4be65aad3.gif')
    
    .setAssetsLargeText('Team MGC')
    .addButton('Connect To Server🌡️', 'https://dsc.gg/kurukkanmoola')
    .addButton('CHROME 🦄', 'https://google.com');
  
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)

// Join discord.gg/CyberSec for support! //
