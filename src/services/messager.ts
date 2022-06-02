import { MessageEmbed, TextChannel } from "discord.js";
import api from "./api";

export const sendMessage = async (channel: TextChannel) => {
  const content = await api();

  if (!content) {
    return;
  }

  channel.send({
    embeds: [
      new MessageEmbed()
        .setTitle(content.title)
        .setURL(`https://tabnews.com.br/${content.username}/${content.slug}`)
        .setAuthor({
          name: content.username,
          url: `https://tabnews.com.br/${content.username}`,
        })
        .setColor("#0099ff")
        .setTimestamp(content.published_at),
    ],
  });
};
