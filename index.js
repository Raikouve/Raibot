const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';

const csgoMaps = ['mirage', 'inferno', 'dust2', 'overpass', 'nuke', 'vertigo', 'ancient', 'cache', 'train'];
const nadeTypes = ['smoke', 'flash', 'he'];

client.once('ready', () => {
  console.log('Raibot online!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'igl?') {
    message.channel.send('É o Mad poha!');
  }
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
});

client.login('ODYwNDE4NjM2MDY5NzMyMzgy.YN69TA.kmlHDnf4Vh3FAtoy3mubOIaX1GQ');
