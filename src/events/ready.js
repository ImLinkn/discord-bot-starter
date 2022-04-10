module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`Client#ready event triggered by ${client.user.tag}`);
  },
};
