import { ClientOptions, Intents } from "discord.js";

export default {
  channel: process.env.DISCORD_CHANNEL_ID,
  bot: {
    token: process.env.DISCORD_TOKEN,
  },
  client: {
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  } as ClientOptions,
};
