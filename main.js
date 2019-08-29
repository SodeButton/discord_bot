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
    if(message.author.bot){
        return;
    }
    if (message.content === 'help();') {
    	message.channel.send(
    		{embed: {
    			title: 'ヘルプだよ！',
    			color: 7506394,
    			fields: [
    				{
    					name: "help();",
    					value: "> 色々なコマンドを表示するよ！ 今表示しているのがそうだね"
    				},
    				{
    					name: "unicode();",
    					value: "> Jsonの文字をunicodeに変換してくれるサイトを表示するよ！"
    				},
    				{
    					name: "unco();",
    					value: "> うんこ株式会社です。"
    				},
    				{
    					name: "saveStr(string String, int Int);",
    					value: "> string型でInt番目にセーブします"
    				},
    				{
    					name: "loadStr(int Int);",
    					value: "> saveStr関数でセーブした値を呼び出します。"
    				},
    				{
    					name: "createStr(string String, string String);",
    					value: "> 引数1を引数2と置きます。"
    				},
    				{
    					name: "clearStr(string String);",
    					value: "> createStr関数の引数2を引数1に入れるとそれを削除します。"
    				}
    			]
    		}}
    	);
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
    if (message.content.startsWith('createStr(')) {
    	eval(message.content);
    	function createStr(str1, str2){
    		create_string_input[str1] = str1;
    		create_string_output[str1] = str2;
    		message.channel.send(`｢${str1}｣を｢${str2}｣と置きました。`);
    	}
	}
	//+++++++++++++++++++++++
	if (message.content.startsWith('clearStr(')) {
		let clear_slice =  "";
		let regex = /"(.*?)(?<!\\)"/;
		
		if (regex.test(message.content)) {
			let clear_keyword = regex.exec(message.content);
			delete create_string_input[clear_keyword[1]];
			delete create_string_output[clear_keyword[1]];
		
			message.channel.send(`${clear_keyword[1]}を削除しました。`);
		} else {
			message.channel.send("不適切な値です。");
		}
	}
	
	//+++++++++++++++++++++++
	if (message.content == create_string_input[message.content]) {
		message.channel.send(create_string_output[message.content]);
	}
    //+++++++++++++++++++++++
    if (message.content.startsWith('saveStr(')) {
    	//message.channel.bulkDelete(1);
    	let save_slice = message.content.replace(/saveStr\(|\);/g, "");
    	let regex = /"(.*?)(?<!\\)"/;
    	let save_keyword = regex.exec(message.content);
    	save_slice = save_slice.replace(/\s+/g, "");
    	save_slice = save_slice.split(/,/);
    	//message.channel.send(save_keyword[1]);
    	//message.channel.send(save_slice);
    	if (parseInt(save_slice[save_slice.length - 1]) <= 0 || isNaN(parseInt(save_slice[save_slice.length - 1])) || !regex.test(message.content)) {
    		message.channel.send('不適切な値です。');
    	}
    	else {
    		let save_num = parseInt(save_slice[save_slice.length - 1]) - 1;
    		let save_collab = "";
    		save_collab = save_keyword[1];
    		
    		save_string[save_num] = save_collab;
    		message.channel.send(`${save_string[save_num]}をデータ${save_num + 1}にセーブしました。`);
    	}
    }
    //+++++++++++++++++++++++
    if (message.content.startsWith('loadStr(')) {
    
    	//message.channel.bulkDelete(1);
    	let load_slice = message.content.replace(/loadStr\(|\);/g, "");
    	load_slice = load_slice.replace(/\s+/g, "");
    	
    	message.channel.send(load_slice);
    	
    	if (parseInt(load_slice) <= 0 || isNaN(parseInt(load_slice))) {
    		message.channel.send('不適切な値です。');
    	}
    	else {
    		let load_num = parseInt(load_slice);
    		message.channel.send(save_string[load_num]);
    	}
    }
});
client.login(process.env.BOT_TOKEN);
//client.login(token);