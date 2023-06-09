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
    const faqMessage = 'Frequently Asked Questions:\n\n\n\nQuestion 1:What is Stacks(STX)?\nAnswer 1:Stacks 2.0 is a blockchain that connects to Bitcoin and allows smart contract creation for dApps.\n\nQuestion 2:What is Proof-of-Transfer (PoX)?\nAnswer 2:Proof-of-Transfer (PoX) is a novel category of consensus mechanism that transfers a base cryptocurrency to mint units of a new cryptocurrency. In the case of Stacks implementation of PoX, it is anchoring itself to Bitcoin as the underlying asset. The protocol works by Miners sending their bitcoin, in exchange for the right to compete to mine Stacks token. Stackers add value to the network and lock up their tokens to earn the BTC that’s being paid by miners to compete to mine STX.\n\nQuestion 3:What relationship does PoX and PoW have?\nAnswer 3:PoX uses the proof-of-work cryptocurrency of an established blockchain to secure a new blockchain. In the case of Stacks. The consensus mechanism is mimicking Bitcoin’s Proof-of-Work mechanism. But instead of using energy to produce new blocks, Stacks miners use bitcoin — that they need to buy at the market rate — to maintain the Stacks blockchain. Since this approach incurs costs for Stacks miners, they are compensated accordingly. Compensation is also similar to Bitcoin as it is provided in the form of block rewards and transactions fees from the Stacks network. The compensation is issued by the protocol in STX, Stacks’ native blockchain coin.\n\nQuestion 4:Why did stacks choose Bitcoin to power its consensus?\nAnswer 4:There are a number of reasons that Stacks chose Bitcoin as the blockchain to power consensus.\n1) Its the oldest blockchain protocol, having launched in 2009, and has become a recognized asset outside of the cryptocurrency community.\n2) Bitcoin has the characteristics of money (durability, portability, fungibility, scarcity, divisibility, and recognizability) and is based on the properties of mathematics rather than relying on physical properties (like gold and silver) or trust in central authorities (like fiat currencies)..\n3) Bitcoin champions simplicity and stability, and has stood the test of time. Influencing or attacking the network is economically illogical for any potential hackers. Its one of the only cryptocurrencies to capture public attention.\n4)Bitcoin is a household name, and is recognized as an asset by governments, large corporations, and legacy banking institutions. Lastly, Bitcoin is largely considered a reliable store of value, and provides extensive infrastructure to support the PoX consensus mechanism.\nSIP-001 provides a full list of reasons why Bitcoin was chosen to secure Stacks.\n\nQuestion 5:Why is Stacks (STX) called Layer 1.5 (L 1.5)? What does it mean?\nAnswer 5:Stacks (STX) is called L1.5 because STX is not a sovereign system, meaning it cannot exist without Bitcoin but at the same time it doesn’t fall into an L2 category, because it brings functionality that cannot be implemented with Bitcoin script, specifically fully expressive smart contracts. This is what makes Stacks (STX) unique, it makes Bitcoin Dapps programmable.\n\nQuestion 6:What is Clarity smart contract\nAnswer 6:Clarity is the language for smart contracts developers use to build on the Stacks blockchain.\nClarity is a decidable smart contract language that optimizes for predictability and security, designed for the Stacks blockchain. Smart contracts allow developers to encode essential business logic on Bitcoin Blockchain.\nThe design decisions behind Clarity were based heavily on taking lessons learned in common Solidity exploits and creating a language that has been purpose-built for safety and security in mind.\nClarity is Turing incomplete similar to how Bitcoin is. Due to being Turing incomplete, a developer’s code will have to behave exactly to what the developer codes. This limits the room for hackers to exploit and easier for auditors and community members to understand how the code will behave.';

    bot.sendMessage(chatId, faqMessage);
  }
});
