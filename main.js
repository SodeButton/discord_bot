//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();
//const token = 'NjAyODYwMTY0ODg1OTA1NDE5.XTXFcg.u7hIw4QeWuJj4qhjbyiVpj71AG0';
var time;

client.on('ready', () => {
    console.log('bot is loggin');
});

//Bot自身の発言を無視する呪い
client.on('message', message =>{
    if(message.author.bot){
        return;
    }
    if (message.content === '!unicode') {
        message.channel.send("https://sodebutton.github.io/AvastGlia/unicode_converter/index.html");
    }
    if (message.content === '!unco') {
    	message.channel.send("https://unco.co.jp");
    }
    if (message.content === 'ぶっとn') {
        message.channel.send('\\_(⊡ω⊡- \\_)⌒)_ﾌﾞｯﾄnｰﾝ');
    }
/*
    if (message.content === '/slot') {
    	message.channel.send(`スロット実行するよ！`);
    	let left = Math.floor(Math.random() * 9) + 1;
    	let center = Math.floor(Math.random() * 9) + 1;
    	let right = Math.floor(Math.random() * 9) + 1;
    	message.channel.send(`|` + left + `|` + center + `|` + right + `|`);
    	if(left == center && left == right) message.channel.send(`あたり！`);
    	else if(left == 7 && center == 7 && right == 7 ) message.channel.send(`おおあたり！！`);
    	else message.channel.send(`残念...はずれだよ`);
    }

    var log = function(){
	message.channel.send(time/100 + `秒たったよ`);
    };
    
    if (message.content.startsWith('!timer ')) {
    	time = message.content.replace(/^!timer /, '');
    	time = parseInt(time, 10) * 100;
        setTimeout(log, time);
    }

    if (message.content.match(/おやすみ/)) {
	let channel = message.channel;
        let author = message.author.username;
        let reply_text =`おやすみなさ〜い`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
		return;
    }

    if (message.content.startsWith('!delete ')){
	let numberofmessages = message.content.split(' ');
	let messagecount = parseInt(numberofmessages[1]); 
	message.channel.bulkDelete(messagecount);
   }
*/
});
client.login(process.env.BOT_TOKEN);
//client.login(token);
