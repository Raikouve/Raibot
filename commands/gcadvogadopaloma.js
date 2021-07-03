module.exports = {
  name: 'gcadvogadopaloma',
  description: 'Retorna status do perfil do Advogado Paloma na GC',
  execute(message, args, Discord) {
    const embedAdvogadoPaloma = new Discord.MessageEmbed()
    .setColor('#308CF4')
    .setTitle(`GC Advogado Paloma`)
    .setDescription('ID: 310631')
    .setURL('https://gamersclub.com.br/jogador/310631')
    .setThumbnail('https://static.gamersclub.com.br/players/avatar/310631/310631_full.jpg')
    .addFields(
      {name: 'KDR', value: '1.04'},
      {name: 'ADR', value: '103.14'},
      {name: 'KAST%', value: '72%'},
      {name: 'HS%:', value: '42%'},
      {name: 'PRECISÃO%', value: '12%'},
    )
      .setFooter('Gamers Club, 03/07', 'https://assets.gamersclub.com.br/header/img/gamers_club_logo.4e618b33.svg')

    message.channel.send(embedAdvogadoPaloma);
  }
}
