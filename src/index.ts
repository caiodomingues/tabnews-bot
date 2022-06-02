import { Client, TextChannel } from "discord.js";
import config from "./config";
import { sendMessage } from "./services/messager";

const DISCORD_CLIENT = new Client(config.client);

DISCORD_CLIENT.on("ready", async () => {
  const channel = DISCORD_CLIENT.channels.cache.get(config.channel!);

  if (!channel?.isText()) {
    throw new Error("Channel is not a TextChannel");
  }

  sendMessage(channel as TextChannel);

  setInterval(async () => {
    sendMessage(channel as TextChannel);
  }, 60000 * 5);
});

DISCORD_CLIENT.login(config.bot.token);
