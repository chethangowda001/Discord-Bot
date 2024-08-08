const { REST, Routes } = require('discord.js');


const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTI3MDY0MTE1MDY5MjI5ODc3Mw.G51Khf.9mbXZLlPCRcQLxL2N4Kii72Dk0TuNVcWaCqF5w"); // Use an environment variable for the token

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands("1270641150692298773"), // Use an environment variable for the client ID
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
