const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543458324142751755")
setInterval(function() {
channel.send(`الحياه مشيه ب الفلوس`);
}, 30)
})

client.login("NTE0ODg3NTk1NjY3NDg4Nzk5.Dz84xQ.L6_o2zE14fqIIcJbBzzvJ8CmSy4");
