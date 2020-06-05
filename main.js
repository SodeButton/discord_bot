'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
let say_messages = "";
let log_messages = "";
let now_message = "";
let old_message = "";

client.on('ready', () => {
	console.log('bot is loggin');
});

client.on('message', message => {
	try {
		client.user.setActivity('BOTN ver 1.1.0', {
    			type: 'PLAYING'
  	  	});
		old_message = now_message;
		now_message = message.content;

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

		switch(message.content) {
			case "unicode();":
				message.channel.send("https://sodebutton.github.io/unicode_converter/");
				breakl;
			case "unco();":
				message.channel.send("https://unco.co.jp");
				break;
			case "ぶっとｎ":
				message.channel.send('\\_(⊡ω⊡- \\_)⌒)_ﾌﾞｯﾄnｰﾝ');
				break;
			case "ぼっとｎ":
				message.channel.send('およびですか？\n何かわからないことがあれば help(); と発言してくださいね！');
				break;
			case "ぶっとn":
				message.channel.send('\\_(⊡ω⊡- \\_)⌒)_ﾌﾞｯﾄnｰﾝ');
				break;
			case "ぼっとn":
				message.channel.send('およびですか？\n何かわからないことがあれば help(); と発言してくださいね！');
				break;
			case "うんち":
				message.channel.send('うんち');
				break;
			case "うーんち":
				message.channel.send('うーんちでるでるうんパッパッ');
				break;
			case "( 'ω')":
				var rand = Math.floor(Math.random() * Math.floor(10));
				if(rand == 0) message.channel.send("( 'ω')");
				break;
		}

		if(old_message == "うんち" && now_message == "きったな") {
			message.channel.send("汚くないですよぉ！");
		}

		if(message.content.startsWith('eval();')) {
			var token_error = '';
			if(message.author.id != '397345363415007253') {
				token_error = `
					var process = {
						env : {
							BOT_TOKEN : "環境変数も表示できないよーっだ！"
						}
					};
					var client = {
						token: "表示できないよーっだ！"
					};
				`;
            }
			say_messages = "";
			log_messages = "";
			eval(token_error + message.content.replace(/^eval\(\);/, ''));
			message.channel.send(say_messages);
			if(log_messages != "") {
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
		function unicode(str) {
    		if (!String.prototype.repeat) {
    			String.prototype.repeat = function(digit) {
        			var result = '';
        			for (var i = 0; i < Number(digit); i++) result += str;
        			return result;
        		};
    		}
		    var strs = str.split(''), hex, result = '';

		    for (var i = 0, len = strs.length; i < len; i++) {
		        hex = strs[i].charCodeAt(0).toString(16);
		        result += '\\u' + ('0'.repeat(Math.abs(hex.length - 4))) + hex;
		    }
		    return result;
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
