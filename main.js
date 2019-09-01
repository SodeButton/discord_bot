//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();
var time;
let save_string = [];
let create_string_input = {};
let create_string_output = {};
client.on('ready', () => {
	console.log('bot is loggin');
});
//Bot自身の発言を無視する呪い
client.on('message', message => {
	try {
		let token = message.content.indexOf(process.env.BOT_TOKEN);
		if (token !== -1) {
			message.channel.bulkDelete(2);
			message.channel.send("は？(憤慨)");
			return;
		}
		if (message.author.bot) {
			return;
		}
		if (message.content === 'help();') {
			message.channel.send({
				embed: {
					title: 'ヘルプだよ！',
					color: 7506394,
					fields: [{
						name: "help();",
						value: "> 色々なコマンドを表示するよ！ 今表示しているのがそうだね"
					}, {
						name: "unicode();",
						value: "> Jsonの文字をunicodeに変換してくれるサイトを表示するよ！"
					}, {
						name: "unco();",
						value: "> うんこ株式会社です。"
					}, {
						name: "saveStr(string String, int Int);",
						value: "> string型でInt番目にセーブします"
					}, {
						name: "loadStr(int Int);",
						value: "> saveStr関数でセーブした値を呼び出します。"
					}, {
						name: "createStr(string String, string String);",
						value: "> 引数1を引数2と置きます。"
					}, {
						name: "clearStr(string String);",
						value: "> createStr関数の引数2を引数1に入れるとそれを削除します。"
					}]
				}
			});
		}
		//////////////////////////////////
		//								//
		//////////////////////////////////
		if (message.content === 'unicode();') {
			message.channel.send("https://sodebutton.github.io/AvastGlia/unicode_converter/index.html");
		}
		if (message.content === 'unco();') {
			message.channel.send("https://unco.co.jp");
		}
		if (message.content === 'ぶっとn') {
			message.channel.send('\\_(⊡ω⊡- \\_)⌒)_ﾌﾞｯﾄnｰﾝ');
		}
		//++++++++++++++++++++++
		if (message.content.startsWith('')) {
			//let regex = /BOT_TOKEN/;
			//if (!regex.test(message.content)) {
			eval(message.content);
			//}
		}

		function createStr(str1, str2) {
			create_string_input[str1] = str1;
			create_string_output[str1] = str2;
			message.channel.send(`｢${str1}｣を｢${str2}｣と置きました。`);
		}
		//+++++++++++++++++++++++
		function clearStr(str1) {
			delete create_string_input[str1];
			delete create_string_output[str1];
			message.channel.send(`${str1}を削除しました。`);
		}
		//+++++++++++++++++++++++
		function saveStr(str1, num1) {
			if (isNaN(str1) && !isNaN(num1) && num1 > 0) {
				save_string[num1] = str1;
				message.channel.send(`${str1}をデータ${num}にセーブしました。`);
			}
		}
		function loadStr(num1) {
			if(!isNaN(num1) && num1 > 0) message.channel.send(save_string[num1]);
		}
		if (message.content == create_string_input[message.content]) {
			message.channel.send(create_string_output[message.content]);
		}
	} catch(e) {
		console.log(e.message);
	}
});
client.login(process.env.BOT_TOKEN);
//client.login(token);