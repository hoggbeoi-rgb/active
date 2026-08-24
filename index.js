const express = require('express');
const { Client, RichPresence } = require('discord.js-selfbot-v13');

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

  const r = new RichPresence(client)
    .setApplicationId('1541368136379404368')
    .setType('PLAYING')
    .setDetails('Nguoi bat an')          // Dòng 2 (Details)
    .setState('Online 24/7')             // Dòng 3 (State) giữ nguyên
    .setStartTimestamp(Date.now())       // Đếm thời gian
    .setAssetsLargeImage('anh1')         // Key ảnh của bạn
    .setAssetsLargeText('Emc4')          // Chữ khi rê chuột vào ảnh
    .addButton('BIO', 'https://guns.lol/forgetsama')
    .addButton('DISCORD', 'https://discord.gg/zxCxC75cmx');

  client.user.setPresence({
    activities: [r],
    status: 'online'
  });

  console.log('Rich Presence da cap nhat thanh cong!');
});

client.login(process.env.DISCORD_TOKEN);
