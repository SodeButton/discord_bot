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
    					name: "save_string(string String, int Int);",
    					value: "> string型でInt番目にセーブします"
    				},
    				{
    					name: "load_string(int Int);",
    					value: "> save_string関数でセーブした値を呼び出します。"
    				},
    				{
    					name: "/create_str <string String> <string String>",
    					value: "> 引数1を引数2と置きます。"
    				},
    				{
    					name: "/clear_str <string String>",
    					value: "> /create_strの引数2を引数1に入れるとそれを削除します。"
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
    	let create_slice = message.content.replace(/createStr\(|\);/g, "");
    	let regex = /"(.*?)(?<!\\)"/;
    	
    	//create_slice = create_slice.replace(/\s+/g, "");
    	create_slice = create_slice.split(/,/);
    	let create_keyword1 = regex.exec(create_slice[0]);
    	let create_keyword2 = regex.exec(create_slice[1]);
    	let create_collab = create_keyword1[1];
    	message.channel.send(create_keyword1);
    	message.channel.send(create_keyword2);
    	create_string_input[create_keyword2[1]] = create_keyword2[1];
    	create_string_output[create_keyword2[1]] = create_collab;
    	
		message.channel.send(`｢${create_collab}｣を｢${create_keyword2[1]}｣と置きました。`);
	}
	//+++++++++++++++++++++++
	if (message.content.startsWith('clearStr(')) {
		let clear_slice = message.content.split(' ');
		
		delete create_string_input[clear_slice[1]];
		delete create_string_output[clear_slice[1]];
		
		message.channel.send(`${clear_slice[1]}を削除しました。`);
	}
	//+++++++++++++++++++++++
	if (message.content == create_string_input[message.content]) {
		message.channel.send(create_string_output[message.content]);
	}
    //+++++++++++++++++++++++
    if (message.content.startsWith('saveString(')) {
    	//message.channel.bulkDelete(1);
    	let save_slice = message.content.replace(/saveString\(|\);/g, "");
    	let regex = /"(.*?)(?<!\\)"/;
    	let save_keyword = regex.exec(message.content);
    	save_slice = save_slice.replace(/\s+/g, "");
    	save_slice = save_slice.split(/,/);
    	message.channel.send(save_keyword[1]);
    	message.channel.send(save_slice);
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
    if (message.content.startsWith('loadString(')) {
    
    	//message.channel.bulkDelete(1);
    	
    	let load_slice = message.content.replace(/loadString\(|\);/g, "");
    	load_slice = load_slice.replace(/\s+/g, "");
    	
    	if (parseInt(load_slice.length) <= 0 || isNaN(parseInt(load_slice.length))) {
    		message.channel.send('不適切な値です。');
    	}
    	else {
    		let load_num = parseInt(load_slice.length) - 1;
    		message.channel.send(save_string[load_num]);
    	}
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