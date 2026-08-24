const express = require('express');
const { Client, CustomStatus, RichPresence } = require('discord.js-selfbot-v13');

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

  // Cấu hình Rich Presence chuẩn cú pháp
  const r = new RichPresence(client)
    .setApplicationId('1541368136379404368')
    .setType('PLAYING')
    .setName('FORGET SAMA')
    .setDetails('iu eimhuyen')
    .setState('Online 24/7')
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('avatar') // Tên key ảnh bạn đặt trên Developer Portal
    .setAssetsLargeText('FORGET SAMA')
    .addButton('BIO', 'https://guns.lol/forgetsama')
    .addButton('DISCORD', 'https://discord.gg/zxCxC75cmx');

  // Truyền trực tiếp r vào setPresence
  client.user.setPresence({
    activities: [r],
    status: 'online'
  });

  console.log('Rich Presence da set thanh cong!');
});

client.login(process.env.DISCORD_TOKEN);
