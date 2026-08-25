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

  // Trừ lùi 130508 giờ (hợp lệ với hệ thống Discord)
  const timeOffset = 130508 * 60 * 60 * 1000;
  const fakeStartTime = Date.now() - timeOffset;

  const r = new RichPresence(client)
    .setApplicationId('1541368136379404368')
    .setType('WATCHING')
    .setName('𝗘𝗺𝗰𝟰')
    .setDetails('𝗡𝗴𝘂𝗼𝗶 𝗯𝗮𝘁 𝗮𝗻')
    .setStartTimestamp(fakeStartTime)    // Hiển thị mốc 130508 giờ
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1411619155257327673/1541499578854019166/Gemini_Generated_Image_jtcemcjtcemcjtce.png?ex=6a8dd0db&is=6a8c7f5b&hm=993cb487f3ecd9f735ac97881a58c539777852524c7f89c15927971cf39d7bff&=&format=webp&quality=lossless&width=768&height=768')
    .setAssetsLargeText('Emc4')
    .addButton('BIO', 'https://guns.lol/fjshlaca');

  client.user.setPresence({
    activities: [r],
    status: 'online'
  });

  console.log('Rich Presence da cap nhat thanh cong!');
});

client.login(process.env.DISCORD_TOKEN);
