require('dotenv').config();
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

// Command handler
client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands').filter((file) => file.endsWith('.js'));

commandFiles.forEach((file) => {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
});

// Event handler
const eventFiles = fs.readdirSync('./src/events').filter((file) => file.endsWith('.js'));

eventFiles.forEach((file) => {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
});

client.login(process.env.TOKEN).then();
