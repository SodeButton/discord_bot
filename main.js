//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const loadData_input = JSON.parse(fs.readFileSync('./createStrData_input.json', 'utf-8'));
const loadData_output = JSON.parse(fs.readFileSync('./createStrData_output.json', 'utf-8'));

let save_string = [];
let create_string_input = loadData_input;
let create_string_output = loadData_output;

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
		if (message.content.startsWith('') && message.author.id === "397345363415007253") {
			process.env.BOT_TOKEN = "は？(憤慨)";
			eval(message.content);
			
			let jsonDataInput = JSON.parse(fs.readFileSync('./createStrData_input.json', 'utf-8'));
			let jsonDataOutput = JSON.parse(fs.readFileSync('./createStrData_output.json', 'utf-8'));
			
			if (message.content == jsonDataInput[message.content]) {
				message.channel.send(jsonDataOutput[message.content]);
			}
		}

		function createStr(str1, str2) {
			let jsonDataInput = JSON.parse(fs.readFileSync('./createStrData_input.json', 'utf-8'));
			let jsonDataOutput = JSON.parse(fs.readFileSync('./createStrData_output.json', 'utf-8'));
			
			create_string_input = jsonDataInput;
			create_string_output = jsonDataOutput;
			
			create_string_input[str1] = str1;
			create_string_output[str1] = str2;
			message.channel.send(`｢${str1}｣を｢${str2}｣と置きました。`);
			
			fs.writeFile('./createStrData_input.json', JSON.stringify(create_string_input), (err) => {
				if(err){
					console.log("エラーが発生しました。" + err);
					throw err;
				}
				else{
					console.log("ファイルが正常に書き出しされました");
				}
			});
			fs.writeFile('./createStrData_output.json', JSON.stringify(create_string_output), (err) => {
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
		function clearStr(str1) {
			let jsonDataInput = JSON.parse(fs.readFileSync('./createStrData_input.json', 'utf-8'));
			let jsonDataOutput = JSON.parse(fs.readFileSync('./createStrData_output.json', 'utf-8'));
			
			create_string_input = jsonDataInput;
			create_string_output = jsonDataOutput;
			
			delete create_string_input[str1];
			delete create_string_output[str1];
			message.channel.send(`${str1}を削除しました。`);
			
			fs.writeFile('./createStrData_input.json', JSON.stringify(create_string_input), (err) => {
				if(err){
					console.log("エラーが発生しました。" + err);
					throw err;
				}
				else{
					console.log("ファイルが正常に書き出しされました");
				}
			});
			fs.writeFile('./createStrData_output.json', JSON.stringify(create_string_output), (err) => {
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