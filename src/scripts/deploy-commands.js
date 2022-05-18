require('dotenv').config();
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [];
const commandFiles = fs.readdirSync('./src/commands').filter((file) => file.endsWith('.js'));

commandFiles.forEach((file) => {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const command = require(`../commands/${file}`);
  commands.push(command.data.toJSON());
});

// noinspection JSClosureCompilerSyntax, JSCheckFunctionSignatures
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest
  .put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
