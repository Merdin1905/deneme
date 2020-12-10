const Discord = require('discord.js')
const request = require('request')
const client = new Discord.Client();

exports.run = async (client, message, args) => {

  var url = "https://mcapi.tc/?" + args[0] + "/json";
  let reason = args.slice(0).join(' ');
    request(url, function (err, response, body) {
        if (err) {
            console.log(err);
            return message.channel.sendEmbed(":x: Hata! Sunucu bilgileri alınırken beklenmedik bir hatayla karşılaştık.");
        }
            body = JSON.parse(body);
            if (body.status) {
                message.channel.send(':x: Böyle Bir Sunucu Yok Veya Şuanda Kapalı Lütfen İp Adresini Kontrol Et')
            }
            if (body.players || body.players == "0") {
              const embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle('<a:cimen:618865286464143390> Minecraft Sunucu İstatistikleri')
                .addField('<a:katildi:612689093834309672> Sunucu Ip;', '▸ ' + reason , true)
                .addField('<a:ttnet:612689959081607201> Gecikme;', '▸ ' + body.ping , true)
                .addField(':level_slider: Sayısal Ip; ', '▸ ' + body.hostname , true)
                .addField('<a:cevrimici:618865871548317712> Çevrimiçi; ', '▸ ' + body.players + '/' + body.max_players , true)
                .addField(':wrench: Sürüm;', '▸ ' + body.version, true)
                .addField(':gear: Port;', '▸ ' + body.port, true)
                .setImage("http://status.mclive.eu/"+ reason +"/"+ body.hostname +"/25565/banner.png")
                .setThumbnail("https://eu.mc-api.net/v3/server/favicon/" + body.hostname)
                .setFooter('DisCoda Bot Minecraft Sunucu Aratma Komutu')
              message.channel.send({embed})


}
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mcsunucu', 'mc sunucu', 'mcserver'],
  permLevel: 0,
  kategori: "genel"
};

exports.help = {
  name: 'mcsunucu',
  description: 'Minecraft sunucu bilgisini verir.',
  usage: 'mcserver <sunucu IP>'
}