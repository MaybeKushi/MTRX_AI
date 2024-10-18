const TelegramBot = require('node-telegram-bot-api');

const token = '7794707456:AAHs7tP4Z9T12gDXs9qIxl4Y5rpWT0ntwv0';
const bot = new TelegramBot(token, { polling: true });

const imageURL = 'https://i.ibb.co/XDPzBWc/pngtree-virtual-panel-generate-ai-image-15868619.jpg';
const messageText = `Want to know how cool your Telegram presence is? 
Check your profile rating and unlock awesome rewards with $MTX Matrix AI!

Time to vibe ✨ and step into the world of Web3.
$MTX is on the way... Ready to explore something new?

Take the first step and see just how you stack up!`;

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendPhoto(chatId, imageURL, {
    caption: messageText,
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Play Now !', web_app: { url: 'https://mtx-ai-bot.vercel.app' } }],
        [{ text: 'Join Community', url: 'https://telegram.me/MatrixAi_Ann' }]
      ]
    }
  });
});
