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

  // Trừ lùi 130508 giờ
  const timeOffset = 130508 * 60 * 60 * 1000;
  const fakeStartTime = Date.now() - timeOffset;

  // Dùng ký tự khoảng trắng đặc biệt 'ㅤ' (Hangul Filler) để không hiện chữ gì
  const invisibleName = 'ㅤ';

  const r = new RichPresence(client)
    .setApplicationId('1541368136379404368')
    .setType('WATCHING')
    .setName(invisibleName)
    .setDetails('𝗘𝗺𝗰𝟰')                  // Dòng to cạnh ảnh
    .setState('𝗡𝗴𝘂𝗼𝗶 𝗯𝗮𝘁 𝗮𝗻')             // Dòng dưới Emc4
    .setStartTimestamp(fakeStartTime)
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1411619155257327673/1541499578854019166/Gemini_Generated_Image_jtcemcjtcemcjtce.png?ex=6a8fcb1b&is=6a8e799b&hm=304655853bb768c056c0978e0e60db2e18baa9f063d0487f2e81340f1062e8c5&=&format=webp&quality=lossless&width=384&height=384')
    .setAssetsLargeText('Emc4')
    .addButton('BIO', 'https://guns.lol/fjshlaca');

  client.user.setPresence({
    activities: [{
      name: invisibleName,
      type: 'WATCHING',
      details: r.details,
      state: r.state,
      timestamps: r.timestamps,
      assets: r.assets,
      buttons: r.buttons,
      application_id: r.application_id
    }],
    status: 'online'
  });

  console.log('Rich Presence da cap nhat thanh cong!');
});

client.login(process.env.DISCORD_TOKEN);
