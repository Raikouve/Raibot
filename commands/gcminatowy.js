module.exports = {
  name: 'gcminatowy',
  description: 'Retorna status do perfil do Minatowy na GC',
  execute(message, args, Discord) {
    const embedMinatowy = new Discord.MessageEmbed()
    .setColor('#308CF4')
    .setTitle(`GC Minatowy`)
    .setDescription('Banido')
    .setURL('')
    .setThumbnail('https://i.imgur.com/GIV362v.png')
    .addFields(
      {name: 'KDR', value: '???'},
      {name: 'ADR', value: '???'},
      {name: 'KAST%', value: '???'},
      {name: 'HS%:', value: '???'},
      {name: 'PRECISÃO%', value: '???'},
    )
      .setFooter('Gamers Club, 03/07', 'https://assets.gamersclub.com.br/header/img/gamers_club_logo.4e618b33.svg')

    message.channel.send(embedMinatowy);
  }
}
