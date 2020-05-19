'use strict';
const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

client.on('ready', () => {
	console.log('bot is loggin');

});

client.on('message', message => {
	try {
		client.user.setActivity('BOTN ver 1.0.0', {
    			type: 'PLAYING'
  	  	});

		if (message.author.bot) {
			return;
		}
		if (message.content === 'help();') {
			message.channel.send({
				embed: {
					title: 'ヘルプだよ！',
					color: 7506374,
					fields: [{
						name: "help();",
						value: "> 色々なコマンドを表示するよ！ 今表示しているのがそうだね"
					}, {
						name: "unicode();",
						value: "> Jsonの文字をunicodeに変換してくれるサイトを表示するよ！"
					}, {
						name: "unco();",
						value: "> うんこ株式会社です。"
					}]
				}
			});
		}
		
		if (message.content === 'unicode();') {
			message.channel.send("https://sodebutton.github.io/AvastGlia/unicode_converter/index.html");
		}
		if (message.content === 'unco();') {
			message.channel.send("https://unco.co.jp");
		}
		if (message.content === 'ぶっとn') {
			message.channel.send('\\_(⊡ω⊡- \\_)⌒)_ﾌﾞｯﾄnｰﾝ');
		}
                if (message.content === 'ぼっとn') {
			message.channel.send('\\_(⊡ω⊡- \\_)⌒)_ﾎﾞｯﾄnｰﾝ');
		}
		if (message.content === 'うんち') {
			message.channel.send('うんち');
		}
	        
		if(message.content.startsWith('eval();')) {
			var token_error = `
				var process = {
					env : {
						BOT_TOKEN : "環境変数も表示できないよーっだ！"
					}
				};
				var client = {
					token: "表示できないよーっだ！"
				};
			`;
                    	eval(token_error + message.content.replace(/^eval\(\);/, ''));
                }
		function say(str) {
			message.channel.send(str);
		}
		function log(str) {
			message.channel.send({
				embed: {
					title: 'Log Messages',
					description: str,
					color: 0x00ff00
				}
			});
		}
	} catch(e) {
		message.channel.send({
			embed: {
				title: e.name,
				description: e.message + e.lineNumber,
				color: 0xff0000
			}
		});
	}
});
client.login(process.env.BOT_TOKEN);
