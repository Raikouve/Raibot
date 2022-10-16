export function botReply(
  message: { author: { username: string }; reply: Function; content: string },
  user: string,
  query: string,
  msgContent: string
): void {
  if (message.author.username === user && message.content.includes(query)) {
    message.reply({
      content: msgContent,
    });
  }
}
