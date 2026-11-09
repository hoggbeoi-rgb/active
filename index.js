const express = require('express');
const { Client, RichPresence } = require('discord.js-selfbot-v13');

const app = express();
const port = process.env.PORT || 3000;

// Web server giữ sống dịch vụ trên Render/Railway
app.get('/', (req, res) => res.send('Discord Rich Presence 24/7 is Running!'));
app.listen(port, () => console.log(`Server running on port: ${port}`));

const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`Da dang nhap: ${client.user.tag}`);

  // Trừ lùi 130508 giờ (khoảng 14.8 năm)
  const fakeStartTime = Date.now() - (210707 * 60 * 60 * 1000);

  // Cấu hình Rich Presence
  const r = new RichPresence(client)
    .setApplicationId('1541368136379404368')
    .setType('WATCHING')
    .setName('ㅤ') // Ký tự tàng hình (Hangul Filler)
    .setDetails('Emc4')
    .setState('Nguoi bat an')
    .setStartTimestamp(fakeStartTime)
    .setAssetsLargeImage('1541490373447262311')
    .setAssetsLargeText('Emc4')
    .addButton('BIO', 'https://guns.lol/fjshlaca');

  client.user.setPresence({
    activities: [r],
    status: 'online'
  });
  
  console.log('Active da cap nhat thanh cong!');
});

// --- ANTI-CRASH: Giữ bot sống sót khi mạng chập chờn hoặc Discord API lỗi ---
process.on('unhandledRejection', (reason) => console.log('[Anti-Crash] Unhandled Rejection:', reason));
process.on('uncaughtException', (err) => console.log('[Anti-Crash] Uncaught Exception:', err));
process.on('uncaughtExceptionMonitor', (err) => console.log('[Anti-Crash] Uncaught Exception Monitor:', err));

client.login(process.env.DISCORD_TOKEN);
