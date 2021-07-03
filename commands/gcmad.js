module.exports = {
  name: 'gcmad',
  description: 'Retorna status do perfil do Madara na GC',
  execute(message, args, Discord) {
    const embedMadara = new Discord.MessageEmbed()
    .setColor('#308CF4')
    .setTitle(`GC Madara`)
    .setDescription('ID: 1506668')
    .setURL('https://gamersclub.com.br/jogador/1506668')
    .setThumbnail('https://static.gamersclub.com.br/players/avatar/1506668/1506668_full.jpg')
    .addFields(
      {name: 'KDR', value: '0.46'},
      {name: 'ADR', value: '54.31'},
      {name: 'KAST%', value: '58%'},
      {name: 'HS%:', value: '19%'},
      {name: 'PRECISÃO%', value: '15%'},
    )
      .setFooter('Gamers Club, 03/07', 'https://assets.gamersclub.com.br/header/img/gamers_club_logo.4e618b33.svg')

    message.channel.send(embedMadara);
  }
}
