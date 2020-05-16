//ログイン処理
const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

client.on('ready', () => {
	console.log('bot is loggin');

});
var debug_select = false;

//Bot自身の発言を無視する呪い
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
	        
		//if(message.author.id == "397345363415007253") eval(message.content);
                //var eval_function = message.content.match(/^eval\((.*?)\);$/)[1];
		//if(message.content.replace(eval_function, '') == 'eval();') eval(eval_function);
                eval(message.content);

		function backup() {
			client.channels.get("635846859700830208").send({files: ['/app/createStrData.json']});
			client.channels.get("635846859700830208").send({files: ['/app/logData.txt']});
		}
		
		function say(str) {
			message.channel.send(str);
		}

                function debug() {
                        if(debug_select) {
                                debug_select = true;
                                message.channel.send("error messages: on");
                        }
                        else {
                                debug_select = false;
                                message.channel.send("error messages: off");
                        }
                }

	} catch(e) {
		//console.log(e.message);
		message.channel.send(e.message);
	}
});
client.login(process.env.BOT_TOKEN);
//client.login(token);
