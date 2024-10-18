const TelegramBot = require('node-telegram-bot-api');
const { exec } = require('child_process');

const token = '7646877814:AAFx-LjNMqIqzLs-30pTwM_vVrV0w5DHDLA';
const bot = new TelegramBot(token, { polling: true });

const imageURL = 'https://i.ibb.co/XDPzBWc/pngtree-virtual-panel-generate-ai-image-15868619.jpg';
const adminIds = [5430259245, 7019407723];

bot.use((msg, next) => {
    if (!adminIds.includes(msg.from.id)) {
        return;
    }
    next();
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;
    const username = msg.from.username ? `@${msg.from.username}` : firstName;

    const messageText = `Hey ${username}, Want to know how cool your Telegram presence is ? 
    Check your profile rating and unlock awesome rewards with $MTX Matrix AI !

    Time to vibe ✨ and step into the world of Web3.
    $MTX is on the way... Ready to explore something new ?

    Take the first step and see just how you stack up !`;

    bot.sendPhoto(chatId, imageURL, {
        caption: messageText,
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Play Now 🪂', web_app: { url: 'http://mtx-ai-bot.vercel.app' } }],
                [{ text: 'Join Community 🔥', url: 'https://telegram.me/MatrixAi_Ann' }]
            ]
        }
    });
});

bot.onText(/\/update/, (msg) => {
    const chatId = msg.chat.id;

    exec('git pull', (error, stdout, stderr) => {
        if (error) {
            bot.sendMessage(chatId, `Error: ${stderr}`);
            return;
        }

        const uptimeInSeconds = process.uptime();
        const uptimeInMinutes = Math.floor(uptimeInSeconds / 60);
        const uptimeInHours = Math.floor(uptimeInMinutes / 60);
        const uptimeFormatted = `${uptimeInHours} hours, ${uptimeInMinutes % 60} minutes`;

        bot.sendMessage(chatId, `Update successful! Please restart the bot to apply changes.\nUptime: ${uptimeFormatted}`);
    });
});
