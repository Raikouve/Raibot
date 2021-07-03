module.exports = {
  name: 'gcraijin',
  description: 'Retorna status do perfil do Raijin na GC',
  execute(message, args, Discord) {
    const embedRaijin = new Discord.MessageEmbed()
    .setColor('#308CF4')
    .setTitle(`GC rdg`)
    .setDescription('ID: 75465')
    .setURL('https://gamersclub.com.br/jogador/75465')
    .setThumbnail('https://static.gamersclub.com.br/players/avatar/75465/75465_full.jpg')
    .addFields(
      {name: 'KDR', value: '1.23'},
      {name: 'ADR', value: '121.43'},
      {name: 'KAST%', value: '70%'},
      {name: 'HS%:', value: '47%'},
      {name: 'PRECISÃO%', value: '24%'},
    )
      .setFooter('Gamers Club, 03/07', 'https://assets.gamersclub.com.br/header/img/gamers_club_logo.4e618b33.svg')

    message.channel.send(embedRaijin);
  }
}
