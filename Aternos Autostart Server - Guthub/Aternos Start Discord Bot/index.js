const {Client, GatewayIntentBits} = require('discord.js')
require('dotenv/config')

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]})

client.on('ready', () => {
    console.log("Bot Ready")
})

client.on('messageCreate', message => {
    if(message.content === "!startMc"){
        message.reply("Starting Aternos...")
        require('child_process').exec('start "" https://aternos.org/server/');
    }
})

client.login(process.env.TOKEN)
