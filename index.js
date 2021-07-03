const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Raibot online!');
  client.user.setActivity('Prefixo: !');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'igl') {
    client.commands.get('igl').execute(message, args);
  }
  if(command === 'avatar') {
    client.commands.get('avatar').execute(message, args, Discord);
  }
  if(command === 'csranking') {
    client.commands.get('csranking').execute(message, args, Discord);
  }
});

client.login('secret');
