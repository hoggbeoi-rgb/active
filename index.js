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
    .setAssetsLargeImage('https://scontent.fhan14-4.fna.fbcdn.net/v/t1.15752-9/825311041_3358265091046940_7277998184925748172_n.png?stp=dst-png&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGs_WEOMSdj--0RpJrkcKYXQqGNwp5UCTpCoY3CnlQJOnvMdkzoxChVsEmm3fhH4cdhqgc5d3j4BafcIIxEhz3v&_nc_ohc=RxINmWijqWUQ7kNvwGZ7-nM&_nc_oc=AdqL40C-Z-IvcX1xe8vhqvvrcsUkhPXoyBIxWQqmPQorWkWNpIUjirYWrSOvtVWeFCbsz0Bc9eMeXAT_POqjIp_4&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_ss=7b2a8&oh=03_Q7cD6gGRgCBQIUf1J4dWefBCjqXXDP9WyE2FPjt35F6NMvbe4w&oe=6AE20D4A')
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
