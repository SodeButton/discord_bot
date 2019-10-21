//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const loadData = JSON.parse(fs.readFileSync('/app/createStrData.json', 'utf-8'));

let save_string = [];
let create_string = loadData;

client.on('ready', () => {
	console.log('bot is loggin');
	
});
//Bot自身の発言を無視する呪い
client.on('message', message => {
	try {
		
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
			
		let jsonData = JSON.parse(fs.readFileSync('/app/createStrData.json', 'utf-8'));
			
		message.channel.send(jsonData[message.content]);
		
		process.env.BOT_TOKEN = "は？(憤慨)";
		client.token = "は？(憤慨)";
		
		eval(message.content);

		function createStr(str1, str2) {
			let jsonData = JSON.parse(fs.readFileSync('/app/createStrData.json', 'utf-8'));
			
			create_string = jsonData;
			
			create_string[str2] = str1;
			message.channel.send(`｢${str1}｣を｢${str2}｣と置きました。`);
			
			fs.writeFile('/app/createStrData.json', JSON.stringify(create_string), (err) => {
				if(err){
					console.log("エラーが発生しました。" + err);
					throw err;
				}
				else{
					console.log("ファイルが正常に書き出しされました");
				}
			});
			
    		//client.channels.get("602862161894572051").send({files: ['/app/createStrData.json']});
			message.author.send({files: ['/app/createStrData.json']});
		}
		//+++++++++++++++++++++++
		function clearStr(str1) {
			let jsonData = JSON.parse(fs.readFileSync('/app/createStrData.json', 'utf-8'));
			
			create_string = jsonData;
	
			delete create_string[str1];
			message.channel.send(`${str1}を削除しました。`);
			
			fs.writeFile('/app/createStrData.json', JSON.stringify(create_string), (err) => {
				if(err){
					console.log("エラーが発生しました。" + err);
					throw err;
				}
				else{
					console.log("ファイルが正常に書き出しされました");
				}
			});
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
	} catch(e) {
		console.log(e.message);
	}
});
client.login(process.env.BOT_TOKEN);
//client.login(token);