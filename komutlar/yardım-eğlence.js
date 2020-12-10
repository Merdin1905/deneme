const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .addField(':small_red_triangle_down:','`!arkadasın : Arkadaşın İşte`')
    .addField(':small_red_triangle_down:','`!atatürk : Atamızı Anıyoruz`')
    .addField(':small_red_triangle_down:','`!coolresim : Cool Resim Koyar Avatarına`')
    .addField(':small_red_triangle_down:','`!çayşekerat : Çaylara Şeker`')
    .addField(':small_red_triangle_down:','`!çayiç : Çay İç`')
    .addField(':small_red_triangle_down:','`!çekiç : Çekiç DENE`')
    .addField(':small_red_triangle_down:','`!hayvan : Hayvan Sana Demedim Dene Gör`')
    .addField(':small_red_triangle_down:','`!herkesebendençay : Çayglarrr`')
    .addField(':small_red_triangle_down:','`!koş : Run Runnnn`')
    .addField(':small_red_triangle_down:','`!popodansı : Popo Dansı Senlik`')
    .addField(':small_red_triangle_down:','`!terfi : Terfi Ediyorum Seni`')
    .addField(':small_red_triangle_down:','`!urfa : Urfadasın`')
    .addField(':small_red_triangle_down:','`!yumruh-at : Yumruh At`')
    .addField(':small_red_triangle_down:','`!istatistik : Botunuzun İstatistiklerini Gösterir`')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/785558672783835139/786553427941261312/DENEME2.png') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['yardım-eğlence'],
 permLevel: 0
};

exports.help = {
 name: 'eğlence'
};