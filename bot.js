const TelegramBot = require('node-telegram-bot-api');
const token = '6079968844:AAERcB1afA8ab4-HXddXJIJKaPL7B4fZxp0'; 
const bot = new TelegramBot(token, { polling: true });



bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = 'Welcome to the FAQ bot! How can I assist you?';
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'FAQ',
            callback_data: 'faq'
          }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, message, options);
});

// Handle inline keyboard button click
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === 'faq') {
    const faqMessage = 'Frequently Asked Questions:\n\nQuestion 1: What is Stacks(STX)\nAnswer 1: Stacks 2.0 is a blockchain that connects to Bitcoin and allows smart contract creation for dApps.\n\nQuestion2: What is Proof-of-Transfer (PoX)?\nAnswer 2: Proof-of-Transfer (PoX) is a novel category of consensus mechanism that transfers a base cryptocurrency to mint units of a new cryptocurrency. In the case of Stacks implementation of PoX, it is anchoring itself to Bitcoin as the underlying asset. The protocol works by Miners sending their bitcoin, in exchange for the right to compete to mine Stacks token. Stackers add value to the network and lock up their tokens to earn the BTC that’s being paid by miners to compete to mine STX.\n...';

    bot.sendMessage(chatId, faqMessage);
  }
});
