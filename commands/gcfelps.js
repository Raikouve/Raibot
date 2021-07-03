module.exports = {
  name: 'gcfelps',
  description: 'Retorna status do perfil do Felps na GC',
  execute(message, args, Discord) {
    const embedFelps = new Discord.MessageEmbed()
    .setColor('#308CF4')
    .setTitle(`GC Felps`)
    .setDescription('ID: 1823351')
    .setURL('https://gamersclub.com.br/jogador/1823351')
    .setThumbnail('https://static.gamersclub.com.br/players/avatar/1823351/1823351_full.jpg')
    .addFields(
      {name: 'KDR', value: '0.88'},
      {name: 'ADR', value: '69.39'},
      {name: 'KAST%', value: '71%'},
      {name: 'HS%:', value: '49%'},
      {name: 'PRECISÃO%', value: '15%'},
    )
      .setFooter('Gamers Club, 03/07', 'https://assets.gamersclub.com.br/header/img/gamers_club_logo.4e618b33.svg')

    message.channel.send(embedFelps);
  }
}
