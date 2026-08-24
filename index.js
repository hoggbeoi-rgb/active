const express = require('express');
const { Client, CustomStatus } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');

const app = express();
const port = process.env.PORT || 3000;

// Web server để Render không bị báo lỗi và dùng để ping giữ sống dịch vụ
app.get('/', (req, res) => {
  res.send('Discord Rich Presence 24/7 is Running!');
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại port: ${port}`);
});

const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`Đã đăng nhập thành công tài khoản: ${client.user.tag}`);

  // Cấu hình Rich Presence
  const rpc = new Discord.RichPresence(client)
    .setApplicationId(process.env.CLIENT_ID || 'ID_APPLICATION_CUA_BAN')
    .setType('PLAYING') // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
    .setName('FORGET SAMA') // Tên hiển thị
    .setDetails(process.env.DETAILS || 'iu eimhuyen') // Dòng chi tiết 1
    .setState(process.env.STATE || '') // Dòng chi tiết 2
    .setStartTimestamp(Date.now()) // Thời gian bắt đầu đếm
    .setAssetsLargeImage(process.env.LARGE_IMAGE_KEY || 'avatar_large') // Key ảnh đã upload
    .setAssetsLargeText('FORGET SAMA') // Text khi rê chuột vào ảnh
    .addButton('BIO', process.env.BUTTON_URL_1 || 'https://guns.lol/forgetsama') // Nút 1
    .addButton('DISCORD', process.env.BUTTON_URL_2 || 'https://discord.gg/zxCxC75cmx'); // Nút 2

  client.user.setActivity(rpc);

  console.log('Rich Presence đã được kích hoạt thành công!');
});

client.login(process.env.DISCORD_TOKEN);
