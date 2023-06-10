const TelegramBot = require('node-telegram-bot-api');
const token = '6026269774:AAF6aTQ8M5IxFSIJUla2CuT50oNc_JIjAKo'; 
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
          },
          {
            text: 'HELP',
            callback_data: 'help'
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
    var faqMessage = '\n\nQuestion 1:What is Stacks(STX)?\nAnswer 1:Stacks 2.0 is a blockchain that connects to Bitcoin and allows smart contract creation for dApps.\n\nQuestion 2:What is Proof-of-Transfer (PoX)?\nAnswer 2:Proof-of-Transfer (PoX) is a novel category of consensus mechanism that transfers a base cryptocurrency to mint units of a new cryptocurrency. In the case of Stacks implementation of PoX, it is anchoring itself to Bitcoin as the underlying asset. The protocol works by Miners sending their bitcoin, in exchange for the right to compete to mine Stacks token. Stackers add value to the network and lock up their tokens to earn the BTC thats being paid by miners to compete to mine STX.\n\nQuestion 3:What relationship does PoX and PoW have?\nAnswer 3:PoX uses the proof-of-work cryptocurrency of an established blockchain to secure a new blockchain. In the case of Stacks. The consensus mechanism is mimicking Bitcoins Proof-of-Work mechanism. But instead of using energy to produce new blocks, Stacks miners use bitcoin — that they need to buy at the market rate — to maintain the Stacks blockchain. Since this approach incurs costs for Stacks miners, they are compensated accordingly. Compensation is also similar to Bitcoin as it is provided in the form of block rewards and transactions fees from the Stacks network. The compensation is issued by the protocol in STX, Stacks native blockchain coin.\n\nQuestion 4:Why did stacks choose Bitcoin to power its consensus?\nAnswer 4:There are a number of reasons that Stacks chose Bitcoin as the blockchain to power consensus.\n1) Its the oldest blockchain protocol, having launched in 2009, and has become a recognized asset outside of the cryptocurrency community.\n2) Bitcoin has the characteristics of money (durability, portability, fungibility, scarcity, divisibility, and recognizability) and is based on the properties of mathematics rather than relying on physical properties (like gold and silver) or trust in central authorities (like fiat currencies).\n3) Bitcoin champions simplicity and stability, and has stood the test of time. Influencing or attacking the network is economically illogical for any potential hackers. Its one of the only cryptocurrencies to capture public attention.\n4)Bitcoin is a household name, and is recognized as an asset by governments, large corporations, and legacy banking institutions. Lastly, Bitcoin is largely considered a reliable store of value, and provides extensive infrastructure to support the PoX consensus mechanism.\nSIP-001 provides a full list of reasons why Bitcoin was chosen to secure Stacks.\n\nQuestion 5:Why is Stacks (STX) called Layer 1.5 (L 1.5)? What does it mean?\nAnswer 5:Stacks (STX) is called L1.5 because STX is not a sovereign system, meaning it cannot exist without Bitcoin but at the same time it doesnt fall into an L2 category, because it brings functionality that cannot be implemented with Bitcoin script, specifically fully expressive smart contracts. This is what makes Stacks (STX) unique, it makes Bitcoin Dapps programmable.\n\n';
    var faqMessage1 = 'Question 6:What is Clarity smart contract\nAnswer 6:Clarity is the language for smart contracts developers use to build on the Stacks blockchain.\nClarity is a decidable smart contract language that optimizes for predictability and security, designed for the Stacks blockchain. Smart contracts allow developers to encode essential business logic on Bitcoin Blockchain.\nThe design decisions behind Clarity were based heavily on taking lessons learned in common Solidity exploits and creating a language that has been purpose-built for safety and security in mind.\nClarity is Turing incomplete similar to how Bitcoin is. Due to being Turing incomplete, a developers code will have to behave exactly to what the developer codes. This limits the room for hackers to exploit and easier for auditors and community members to understand how the code will behave.https://docs.stacks.co/docs/clarity/\n\nQuestion 7:What is Velar?\nAnswer 7:Velar v1 codenamed “Velar Dharma” is a DEX and a IDO Launchpad platform built on Stacks secured by Bitcoin. Velar offers a suite of decentralized financial applications with Bitcoin finality built with the foundation of core decentralized ethos shared by Bitcoin.\n\nQuestion 8:Why is Velar built using Clarity and not on an other blockchain language?\nAnswer 8:Predictability: The Clarity language uses precise and unambiguous syntax that allows developers to predict exactly how their contracts will be executed.\nSecurity: The Clarity language allows users to supply their own conditions for transactions that ensure that a contract may never unexpectedly transfer a token owned by a user.\nNo compiler: Contracts written in Clarity are broadcasted on the Stacks blockchain exactly as they are written by developers. This ensures that the code developers wrote, analyzed, and tested, is exactly what gets executed.\n\n'
    var faqMessage2 = 'Question 9:What is the design behind Clearity ?\nAnswer 9:1. The language is interpreted and broadcast on the blockchain as is (not compiled)\n- Interpreted language ensures that the executed code is human-readable and auditable, which unlike solidity you require a compiler to read the code and how it will execute, which could allow a malicious code to be introduced into the codebase if developers and users are not careful.\n2. The language is decidable (Turing incomplete)\n- A decidable language like Clarity makes it possible to determine precisely which code is executed, for any function.\n\nQuestion 10:What is the biggest difference between Clarity And Solidity ?\nAnswer 10:1. Clarity is a non-Turing complete language, whereas Solidity is a Turing complete language. https://101blockchains.com/solidity-vs-move-vs-clarity/\n2. Clarity is a decidable programming language by design. A major advantage of Clarity being a decidable language is that contract termination and the transaction fee can be guaranteed, whereas in Solidity that is not the case.\n3. Clarity is an interpreted programming language whereas Solidity is not. In Clarity, contracts are written in human-readable form, and are accessible to any professional auditor or casual onlooker. The code deployed onto the Stacks 2.0 blockchain is “What You See Is What You Get", and prevents the surfacing of the compiler bugs. Whereas, In Solidity, the source code is not published , only the compiled version of the source code is published to the blockchain. This causes the difficulty to audit the code once pushed into the chain. https://app.sigle.io/learnblock.id.blockstack/kjB7ymtoQg8qBiB6alPYa\n4. Design principles. When it comes to design principles, Solidity differs from Clarity by using an imperative style of programming (think C++, Python and JavaScript), whereas Clarity uses a functional style (think Scala, Scheme, and LISP).\n5. Security. Clarity has post-conditions on tokens, which allows users to proactively defend their assets from theft or destruction by unknown attackers and unknown bugs in other contracts. Also, in Clarity, the set of reachable code can be efficiently determined, so you can ensure that your transaction only ever runs code you have vetted yourself first. https://stacks.org/bringing-clarity-to-8-dangerous-smart-contract-vulnerabilities/'
    bot.sendMessage(chatId, faqMessage)
    .then(() => {
      return bot.sendMessage(chatId, faqMessage1);
    }).then(() => {
      return bot.sendMessage(chatId, faqMessage2);
    })
  }
if (data === 'help') {
    const helpMessage = 'Please join our Discord server and open a ticket for direct support: https://discord.com/invite/velar';

    bot.sendMessage(chatId, helpMessage);
  }
});
