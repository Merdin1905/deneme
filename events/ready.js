const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix;

module.exports = async client => {
  
  client.appInfo = await client.fetchApplication();
setInterval( async () => {
      client.appInfo = await client.fetchApplication();
    }, 60000);
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı.');
client.user.setStatus("dnd");
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
    var oyun = [
        "🔥 k!yardım | Komutları Listeler 🔥",
        "🔥 k!sponsor | Şuan Sponsor Bulunmamakta 🔥",
        "🔥 k!botbilgi | botun İstatistigin Gösterir 🔥",
        "🔥 k!logo | Logo Komutlarını Listeler 🔥",
        "🔥 ©2020 | 2020'mi Yapımı Bot 🔥"
    ];
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], );
        }, 2 * 9000); 
};