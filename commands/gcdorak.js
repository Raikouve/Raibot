module.exports = {
  name: 'gcdorak',
  description: 'Retorna status do perfil do Dorak na GC',
  execute(message, args, Discord) {
    const embedDorak = new Discord.MessageEmbed()
    .setColor('#308CF4')
    .setTitle(`GC Dorak`)
    .setDescription('ID: 1446577')
    .setURL('https://gamersclub.com.br/jogador/1446577')
    .setThumbnail('https://static.gamersclub.com.br/players/avatar/1446577/1446577_full.jpg')
    .addFields(
      {name: 'KDR', value: '0.78'},
      {name: 'ADR', value: '83.9'},
      {name: 'KAST%', value: '68%'},
      {name: 'HS%:', value: '37%'},
      {name: 'PRECISÃO%', value: '14%'},
    )
      .setFooter('Gamers Club, 03/07', 'https://assets.gamersclub.com.br/header/img/gamers_club_logo.4e618b33.svg')

    message.channel.send(embedDorak);
  }
}
