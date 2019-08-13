const TelegramBot = require('node-telegram-bot-api');
const config = require('./config/token');

const bot = new TelegramBot(config.token, {polling: true})


bot.onText(/\/cat/, function(msg) {
    let chatId = msg.chat.id;
    let photo = './images/cat.jpeg';
    bot.sendPhoto(chatId, photo, {caption: 'This is cat!'});
});
bot.onText(/\/dog/, function(msg) {
    let chatId = msg.chat.id;
    let photo = './images/dog.jpeg';
    bot.sendPhoto(chatId, photo, {caption: 'This is dog!'});
});
bot.onText(/\/mice/, function(msg) {
    let chatId = msg.chat.id;
    let photo = './images/mice.jpeg';
    bot.sendPhoto(chatId, photo, {caption: 'This is mice!'});
});
