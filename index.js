const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI1NTIxNTg5NDEwMzQ5MDg3.YcuVJg.VHup1yK0w5WkFLXhtLSUfHCSECw"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "!restock"){
        message.reply("GTA Accounts: 3, Fortnite accounts: 3, 3 Month Nitro: 20")
    }
}) 

client.login (process.env.TOKEN)