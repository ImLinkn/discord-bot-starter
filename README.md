# Discord Bot Starter Project

## Intent
A Discord bot starter project based around Node.js and [discord.js](https://discord.js.org/#/).

Project organization is based around the [discord.js Guide](https://discordjs.guide/).  It is **highly** recommended to fully understand the guide **before** attempting to use this starter project.

## Requirements
- [nvm](https://github.com/nvm-sh/nvm) or, *not recommended*, a local installation of [Node.js](https://nodejs.org/en/download/) (see [Installing Node.js and discord.js](https://discordjs.guide/preparations/#installing-node-js) for more details on **Installing Node.js**)
- *Optional*: [Docker](https://docs.docker.com/get-docker/)

## Build Instructions
In order to successfully build and deploy your Discord bot, you **must** [set up a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html) and [add the bot to your server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html).

It is **highly** encouraged that you **DO NOT** use your production server for active development. Create a test server using your server template.

### Local Build
1. Copy the included `.env.example` file and name the new file as `.env`.
2. Replace the placeholder values with your client ID, guild ID and token.
3. Install project dependencies via `npm install`.
4. Run the project via `npm start` or, if you are currently undergoing **active development**, via `npm run dev`.
5. Verify your bot is active in your server.

### Containerized Build
1. Create your image via `docker image build -t discord-bot .`.
2. Ensure your Docker Swarm is initialized via `docker swarm init`.
3. Add the following Docker secrets via `echo "some value" | docker secret create SECRET_NAME -`:

* discord-test-application-client-id: **YOUR TEST SERVER CLIENT ID**
* discord-test-server-guild-id: **YOUR TEST SERVER GUILD ID**
* discord-test-bot-token: **YOUR BOT TOKEN**
* discord-application-client-id: **YOUR PRODUCTION SERVER CLIENT ID**
* discord-server-guild-id: **YOUR PRODUCTION SERVER GUILD ID**
* discord-bot-token: **YOUR BOT TOKEN**

4. Deploy your stack via:

* **For active development**: `docker stack deploy -c ./docker/test.yml STACK_NAME`
* **For production deployment**: `docker stack deploy -c ./docker/prod.yml STACK_NAME`

5. Verify your bot is active in your server.
