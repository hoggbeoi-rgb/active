const express = require('express');
const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Discord Rich Presence 24/7 is Running!');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`Da dang nhap: ${client.user.tag}`);

  // Khoi tao Rich Presence
  const r = new Discord.RichPresence(client)
    .setApplicationId('1541368136379404368') // ID ung dung cua ban
    .setType('PLAYING')
    .setName('FORGET SAMA')
    .setDetails('iu eimhuyen')
    .setState('Online 24/7')
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('avatar') // Thay dung ten Key anh ban dat tren Developer Portal
    .setAssetsLargeText('Emc4')
    .addButton('BIO', 'https://guns.lol/forgetsama')
    .addButton('DISCORD', 'https://discord.gg/zxCxC75cmx');

  // Set activity qua build() de Discord nhan dien ngay lap tuc
  client.user.setActivity(r.build());

  console.log('Rich Presence da set thanh cong!');
});

client.login(process.env.DISCORD_TOKEN);
