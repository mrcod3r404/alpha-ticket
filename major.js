const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login("MTA2NjQzNTQxODMxMDA1MzkzOA.GDWutb.ZlTb2yNiSg_TEE-UbuKZQ5ovaARtQuNoawl-TA")
