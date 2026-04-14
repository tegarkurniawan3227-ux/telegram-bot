const TelegramBot = require('node-telegram-bot-api');

// GANTI TOKEN BARU
const token = "8516958989:AAH-W2Vh_VtsS6zYnmBEO_tU_k31kFmKLJw";

const bot = new TelegramBot(token, { polling: true });

console.log("Bot aktif...");

// /start
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(
        msg.chat.id,
        "Halo 👋 Bot aktif tanpa Termux!"
    );

});

// auto reply
bot.on("message", (msg) => {

    const text = msg.text.toLowerCase();

    if (text === "/start") return;

    if (text.includes("halo")) {

        bot.sendMessage(
            msg.chat.id,
            "Halo juga 👋"
        );

    }

    else {

        bot.sendMessage(
            msg.chat.id,
            "Pesan diterima ✅"
        );

    }

});