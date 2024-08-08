const {Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,  GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message)=>{
    console.log(message.content);
    if (message.author.bot) return ;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1]
        message.reply({
            content:"generating short Id"+ url,
        });
    }
    message.reply({
        content:"hi from bot"
    })
    
})

client.on("interactionCreate", (interaction)=>{
    console.log(interaction);
    interaction.reply("pong")   
})

client.login(
    "MTI3MDY0MTE1MDY5MjI5ODc3Mw.G51Khf.9mbXZLlPCRcQLxL2N4Kii72Dk0TuNVcWaCqF5w"
)