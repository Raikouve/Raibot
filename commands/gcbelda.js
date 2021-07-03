module.exports = {
  name: 'gcbelda',
  description: 'Retorna status do perfil do Belda na GC',
  execute(message, args, Discord) {
    const embedBelda = new Discord.MessageEmbed()
    .setColor('#308CF4')
    .setTitle(`GC Belda`)
    .setDescription('ID: 1016561')
    .setURL('https://gamersclub.com.br/jogador/643795')
    .setThumbnail('https://static.gamersclub.com.br/players/avatar/643795/643795_full.jpg')
    .addFields(
      {name: 'KDR', value: '1.3'},
      {name: 'ADR', value: '94.97'},
      {name: 'KAST%', value: '72%'},
      {name: 'HS%:', value: '21%'},
      {name: 'PRECISÃO%', value: '24%'},
    )
      .setFooter('Gamers Club, 03/07', 'https://assets.gamersclub.com.br/header/img/gamers_club_logo.4e618b33.svg')

    message.channel.send(embedBelda);
  }
}
