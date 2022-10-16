export function botLog(
  message: {
    author: { id: string; username: string };
    channel: string;
    reply: Function;
    content: string;
    attachments: { url: string; contentType: string, toJSON: Function };
    createdAt: { getHours: Function; getMinutes: Function };
  },
  client: any
): void {
  let logMessage = "";
  if (message.author.id !== "860418636069732382") {
    const botLog: any = client.channels.cache.get("1031182228312555530");
    if (message.attachments.toJSON().every((value: { contentType: string }) => value.contentType === 'image/png' || value.contentType === 'image/jpg')) {
      logMessage = `Mensagem enviada em ${message.channel} por ${
        message.author.username
      } às ${message.createdAt.getHours()}h${message.createdAt.getMinutes()}: ${
        message.attachments.toJSON()[0].url
      }`;
    } else {
      logMessage = `Mensagem enviada em ${message.channel} por ${
        message.author.username
      } às ${message.createdAt.getHours()}h${message.createdAt.getMinutes()}: ${
        message.content
      }`;
    }
    botLog.send({ content: logMessage });
  }
}
