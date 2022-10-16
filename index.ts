import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import dotenv from 'dotenv';

import { botReply } from './src/handlers/botReply';

dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log('Raibot Online!');
});


client.on('messageCreate', (message) => {
  
  console.log(message);

  if(message.content.includes('http://gamersclub.com.br/j/')) {

  const date = new Date();

    const embedGcInvite = new EmbedBuilder()
    .setColor('#308CF4')
    .setTitle(`Entrar Lobby GC`)
    .setURL(message.toString())
    .setDescription(`${message.author.username} criou um lobby`)
    .setThumbnail('https://yt3.ggpht.com/ytc/AMLnZu823-1THZbfZ_NL3hId3fVuj2m9gYZ_IdXjQ_qP0Q=s900-c-k-c0x00ffffff-no-rj')
    // .setFooter({ text: `A sala fecha em <t:${date.valueOf()}:R>` })
    .setTimestamp(date.valueOf())

      message.channel.send({embeds: [embedGcInvite]});
      message.delete();
  }

  botReply(message, 'Preguiçoso', 'cs', 'https://tenor.com/view/no-donkeys-shrek-gif-16041065');

  botReply(message, 'Preguiçoso', 'karai', 'https://tenor.com/view/homer-simpson-drool-gif-24799777');

  botReply(message, 'Ygor', 'que isso', 'https://tenor.com/view/moyai-moyai-emoji-moai-moai-meme-moai-emoji-gif-25202348');

});

client.login(process.env.TOKEN)