module.exports = {
  name: 'csranking',
  description: 'Retorna o ranking dos melhores times de CSGO da atualidade',
  execute(message, args, Discord) {
    const embedRanking = new Discord.MessageEmbed()
    .setColor('#F7A51D')
    .setTitle(`RANKING ATUAL HLTV`)
    .setDescription('Top 10 Jun, 2021')
    .setURL('https://www.hltv.org/ranking/teams/2021/june/28')
    .setThumbnail('https://liquipedia.net/commons/images/thumb/6/68/Gambit_2020.png/600px-Gambit_2020.png')
    .addFields(
      {name: '#1', value: 'Gambit'},
      {name: 'Jogadores:', value: 'Hobbit, interz, Ax1Le, sh1ro, nafany'},
      {name: '#2', value: 'Natus Vincere'},
      {name: 'Jogadores:', value: 'S1mple, electronic, Boompl4, Perfecto, B1T'},
      {name: '#3', value: 'G2'},
      {name: 'Jogadores:', value: 'JaCkz, NiKo, huNter-, AmaNEk, nexa'},
      {name: '#4', value: 'Heroic'},
      {name: 'Jogadores:', value: 'cadiaN, refrezh, stavn, TeSeS, sjuush'},
      {name: '#5', value: 'NIP'},
      {name: 'Jogadores:', value: 'device, REZ, hampus, Plopski, LNZ'},
      {name: '#6', value: 'Virtus.pro'},
      {name: 'Jogadores:', value: 'SANJI, buster, Qikert, Jame, YEKINDAR'},
      {name: '#7', value: 'mousesports'},
      {name: 'Jogadores:', value: 'dexter, frozen, acoR, ropz, Bymas'},
      {name: '#8', value: 'Astralis'},
      {name: 'Jogadores:', value: 'Xyp9x, dupreeh, gla1ve, Magisk, Bubzkji'},
      {name: '#9', value: 'BIG'},
      {name: 'Jogadores:', value: 'tabseN, tiziaN, syrsoN, XANTARES, k1to'},
      {name: '#10', value: 'Vitality'},
      {name: 'Jogadores:', value: 'shox, apEX, ZywOo, misutaaa, Kyojin'},
    )
      .setFooter('CS:GO World ranking on June 28th, 2021', 'https://www.hltv.org/img/static/TopSmallLogo2x.png')

    message.channel.send(embedRanking);
  }
}
