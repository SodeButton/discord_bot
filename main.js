'use strict';
const Discord = require('discord.js');
const fs = require('fs');
let say_messages = "";
let log_messages = "";
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
						value: "色々なコマンドを表示するよ！ 今表示しているのがそうだね\n"
					}, {
						name: "unicode();",
						value: "Jsonの文字をunicodeに変換してくれるサイトを表示するよ！\n"
					}, {
						name: "unco();",
						value: "うんこ株式会社\n"
					}, {
						name: "eval();",
						value: "JavaScriptを実行できるよ！\n"
					}, {
						name: "say(string);",
						value: "言わせたいことがあればこれを使ってね！(eval();を使ったときのみしか使えないよ！)\n"
					}, {
						name: "log(string);",
						value: "ログを出力するよ！(eval();を使ったときのみしか使えないよ！)\n"
					}]
				}
			});
		}
		
		if (message.content === 'unicode();') {
			message.channel.send("https://sodebutton.github.io/unicode_converter/");
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
		if (message.content === "( 'ω')") {
			var rand = Math.floor(Math.random() * Math.floor(10));
			if(rand == 0) message.channel.send("( 'ω')");
		}
	        
		if(message.content.startsWith('eval();')) {
			
			say_messages = "";
			log_messages = "";
                    	eval(token_error + message.content.replace(/^eval\(\);/, ''));
                        if(!say_messages.match(process.env.BOT_TOKEN))
			        message.channel.send(say_messages);
			if(log_messages != "" && !log_messages.match(process.env.BOT_TOKEN)) {
				message.channel.send({
					embed: {
						title: 'Log Messages',
						description: log_messages,
						color: 0x00ff00
					}
				});
			}
                }
		function say(str) {
			if(str != undefined) say_messages += str + "\n";
		}
		function log(str) {
			if(str != undefined) log_messages += str + "\n";
		}
                function unco() {
                        say_messages += "https://unco.co.jp" + "\n";
                }
	} catch(e) {
		message.channel.send({
			embed: {
				title: e.name,
				description: e.message,
				color: 0xff0000
			}
		});
	}
});
client.login(process.env.BOT_TOKEN);
