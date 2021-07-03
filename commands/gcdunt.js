module.exports = {
  name: 'gcdunt',
  description: 'Retorna status do perfil do Dunt na GC',
  execute(message, args, Discord) {
    const embedGcDunt = new Discord.MessageEmbed()
    .setColor('#308CF4')
    .setTitle(`GC Dunt`)
    .setDescription('ID: 50037')
    .setURL('https://gamersclub.com.br/jogador/50037')
    .setThumbnail('https://static.gamersclub.com.br/players/avatar/50037/50037_full.jpg')
    .addFields(
      {name: 'KDR', value: '1.19'},
      {name: 'ADR', value: '106.28'},
      {name: 'KAST%', value: '71%'},
      {name: 'HS%:', value: '42%'},
      {name: 'PRECISÃO%', value: '16%'},
    )
      .setFooter('Gamers Club, 03/07', 'https://assets.gamersclub.com.br/header/img/gamers_club_logo.4e618b33.svg')

    message.channel.send(embedGcDunt);
  }
}
