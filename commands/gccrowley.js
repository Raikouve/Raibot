module.exports = {
  name: 'gccrowley',
  description: 'Retorna status do perfil do Crowley na GC',
  execute(message, args, Discord) {
    const embedCrowley = new Discord.MessageEmbed()
    .setColor('#308CF4')
    .setTitle(`GC Crowley`)
    .setDescription('ID: 650911')
    .setURL('https://gamersclub.com.br/jogador/650911')
    .setThumbnail('https://static.gamersclub.com.br/players/avatar/650911/650911_full.jpg')
    .addFields(
      {name: 'KDR', value: '0.99'},
      {name: 'ADR', value: '90.38'},
      {name: 'KAST%', value: '66%'},
      {name: 'HS%:', value: '35%'},
      {name: 'PRECISÃO%', value: '16%'},
    )
      .setFooter('Gamers Club, 03/07', 'https://assets.gamersclub.com.br/header/img/gamers_club_logo.4e618b33.svg')

    message.channel.send(embedCrowley);
  }
}
