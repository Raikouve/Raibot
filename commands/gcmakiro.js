module.exports = {
  name: 'gcmakiro',
  description: 'Retorna status do perfil do Makiro na GC',
  execute(message, args, Discord) {
    const embedMakiro = new Discord.MessageEmbed()
    .setColor('#308CF4')
    .setTitle(`GC Mak1ro`)
    .setDescription('ID: 1016561')
    .setURL('https://gamersclub.com.br/jogador/1016561')
    .setThumbnail('https://static.gamersclub.com.br/players/avatar/1016561/1016561_full.gif')
    .addFields(
      {name: 'KDR', value: '1.15'},
      {name: 'ADR', value: '96.67'},
      {name: 'KAST%', value: '67%'},
      {name: 'HS%:', value: '17%'},
      {name: 'PRECISÃO%', value: '12%'},
    )
      .setFooter('Gamers Club, 03/07', 'https://assets.gamersclub.com.br/header/img/gamers_club_logo.4e618b33.svg')

    message.channel.send(embedMakiro);
  }
}
