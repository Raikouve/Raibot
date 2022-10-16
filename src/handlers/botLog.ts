import { Message, Client, EmbedBuilder } from "discord.js";

export function botLog(
  message: Message,
  client: Client
): void {
  if (message.author.id !== "860418636069732382") {
    const botLog: any = client.channels.cache.get("1031182228312555530");
    if (message.attachments.toJSON().length > 0 && message.attachments.toJSON().every((value) => value.contentType === 'image/png' || value.contentType === 'image/jpg')) {
      const date = new Date();

      const logMessage = new EmbedBuilder()
        .setColor('#308CF4')
        .setTitle(`${message.guild}`)
        .setThumbnail(`${message.author.avatarURL({ extension: "png" })}`)
        .addFields(
          { name: `${message.author.username} enviou:`, value: `${message.attachments.toJSON()[0].url}` },
        )
        .setTimestamp(date.valueOf())
        botLog.send({embeds: [logMessage]});
    } else {
      const date = new Date();

      const logMessage = new EmbedBuilder()
        .setColor('#308CF4')
        .setTitle(`${message.guild}`)
        .setThumbnail(`${message.author.avatarURL({ extension: "png" })}`)
        .addFields(
          { name: `${message.author.username} enviou:`, value: `${message.content}` },
        )
        .setTimestamp(date.valueOf())
        botLog.send({embeds: [logMessage]});
    }
  }
}
