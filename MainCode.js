const Discord = require('discord.js')
const client = new Discord.Client

client.once('ready', () => {
  console.log('Bot is online!')
})

client.on('message', async (message) => {
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'ping'){
    message.channel.send('Pong!')
  }
})


client.login('your-bot-token')
