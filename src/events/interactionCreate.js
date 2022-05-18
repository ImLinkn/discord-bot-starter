module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    console.log(`Client#interactionCreate event triggered by ${interaction.user.tag} in #${interaction.channel.name}`);
    if (!interaction.isCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) return;
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  },
};
