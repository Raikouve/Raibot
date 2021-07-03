module.exports = {
  name: 'avatar',
  description: 'Retorna o próprio avatar',
  execute(message, args, Discord) {
    const embedAvatar = new Discord.MessageEmbed()
    .setColor('#3C5186')
    .setTitle(`Seu avatar, ${message.member.user.tag}:`)
    // .setDescription('Comando para ver seu próprio avatar')
    .addFields(
      {name: 'Nota:', value: Math.random().toFixed(1) * 10},
    )
    .setImage(message.author.displayAvatarURL());

    message.channel.send(embedAvatar);
  }
}