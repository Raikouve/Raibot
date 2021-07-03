const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

const csgoMaps = ['mirage', 'inferno', 'dust2', 'overpass', 'nuke', 'vertigo', 'ancient', 'cache', 'train'];
const nadeTypes = ['smoke', 'flash', 'he'];

client.once('ready', () => {
  console.log('Raibot online!');
  client.user.setActivity('Prefixo: $');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'igl') {
    client.commands.get('igl').execute(message, args);
  }
  // if(command === 'hltv.top10') {
    // message.channel.send(`**CS:GO World ranking on June 28th, 2021**`);
  // }
  if(command === `${nadeTypes[0]}.${csgoMaps[1]}.caixao`) {
    message.channel.send(`Tick: **128** 
Mouse: **esquerdo**
Movimento: **parado**
https://giant.gfycat.com/AlarmingEnormousDodobird.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[1]}.ct1`) {
    message.channel.send(`Tick: **ambos**
Mouse: **esquerdo**
Movimento: **parado**
https://giant.gfycat.com/UncomfortableAdoredGilamonster.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[1]}.ct2`) {
    message.channel.send(`Tick: **ambos**
Mouse: **esquerdo**
Movimento: **parado + jumpthrow**
https://giant.gfycat.com/CookedUnfoldedAnnashummingbird.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[1]}.ct3`) {
    message.channel.send(`Tick: **ambos**
Mouse: **esquerdo**
Movimento: **correndo**
https://giant.gfycat.com/DarkCalculatingCivet.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[1]}.nip1`) {
    message.channel.send(`Tick: **128**
Mouse: **esquerdo**
Movimento: **parado**
https://giant.gfycat.com/IgnorantTimelyIslandwhistler.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[1]}.nip2`) {
    message.channel.send(`Tick: **ambos**
Mouse: **esquerdo**
Movimento: **parado**
https://giant.gfycat.com/MediumDelectableCatbird.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[1]}.nip3`) {
    message.channel.send(`Tick: **ambos**
Mouse: **esquerdo**
Movimento: **parado + jumpthrow**
https://giant.gfycat.com/WelldocumentedFarFrillneckedlizard.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[1]}.nip4`) {
    message.channel.send(`Tick: **ambos**
Mouse: **esquerdo**
Movimento: **parado + jumpthrow**
https://giant.gfycat.com/HandyPlaintiveLeveret.mp4`);
  }
    if(command === `${nadeTypes[0]}.${csgoMaps[2]}.ct1`) {
    message.channel.send(`Tick: **ambos**
Mouse: **esquerdo**
Movimento: **correndo**
https://giant.gfycat.com/MiserableFlashyDamselfly.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[2]}.ct2`) {
    message.channel.send(`Tick: **64**
Mouse: **esquerdo**
Movimento: **correndo + jump throw**
https://giant.gfycat.com/MiserableFlashyDamselfly.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[2]}.varanda1`) {
    message.channel.send(`Tick: **128**
Mouse: **esquerdo**
Movimento: **parado**
Bônus: **one way**
https://giant.gfycat.com/IdioticCoordinatedBison.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[2]}.varanda2`) {
    message.channel.send(`Tick: **128**
Mouse: **esquerdo**
Movimento: **parado**
Bônus: **one way**
https://giant.gfycat.com/MadAncientAustraliancurlew.mp4`);
  }
  if(command === `${nadeTypes[0]}.${csgoMaps[5]}.rampa`) {
    message.channel.send(`Tick: **ambos**
Mouse: **esquerdo**
Movimento: **parado**
Bônus: **one way**
https://giant.gfycat.com/WindingPlasticAtlanticspadefish.mp4`);
  }
  if(command === `${nadeTypes[1]}.${csgoMaps[5]}.madarastyle`) {
    message.channel.send(`Tick: **64**
Mouse: **esquerdo**
Movimento: **parado**
Bônus: **Madarastyle**
https://www.youtube.com/watch?v=m9BZNfC0Oyg&ab_channel=Lu%C3%ADsFernando`);
  }
});

client.login('secret');
