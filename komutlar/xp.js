const Discord = require("discord.js"); 
let xp = require("../xp.json"); 

module.exports.run = async (bot, message, args) => {

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let suankixp = xp[message.author.id].xp;
  let suankiseviye = xp[message.author.id].level;
  let birsonrakiSeviyeXp = suankiseviye * 300; 
  let fark = birsonrakiSeviyeXp - suankixp; 

  let seviyemesaji = new Discord.MessageEmbed() 
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .addField("Seviye", suankiseviye, true)
  .addField("XP", suankixp, true)
  .setFooter(`${fark} XP sonra seviye atlayacaksın.`, message.author.displayAvatarURL);

  message.channel.send(seviyemesaji); 

}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['level'],
  permLevel: 0
}
exports.help = {
  name: 'seviye',
  description: "Belirtilen üyeye kayıtsız rolü verir",
  usage: 'seviye'
}