//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();

var time;
let save_string = [];
let create_string_input = new Array();
let create_string_output = new Array();

client.on('ready', () => {
    console.log('bot is loggin');
});

//Bot自身の発言を無視する呪い
client.on('message', message => {
    if(message.author.bot){
        return;
    }
    if (message.content === '_help') {
    	message.channel.send(
    		{embed: {
    			title: 'ヘルプだよ！',
    			color: 7506394,
    			fields: [
    				{
    					name: "`_help`",
    					value: "> 色々なコマンドを表示するよ！ 今表示しているのがそうだね"
    				},
    				{
    					name: "`[!unicode](https://sodebutton.github.io/AvastGlia/unicode_converter/index.html)`",
    					value: "> Jsonの文字をunicodeに変換してくれるサイトを表示するよ！"
    				},
    				{
    					name: "`[!unco](https://unco.co.jp)`",
    					value: "> うんこ株式会社です。"
    				}
    			]
    		}}
    	);
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
    
    if (message.content.startsWith('/create_str ')) {
    	let create_slice = message.content.split(' ');
    	let create_collab = "";
    	for (var i = 1; i <= create_slice.length - 2; i++) {
    		create_collab = create_collab + create_slice[i] + " ";
    	}
    	create_string_input[create_slice[create_slice.length - 1]] = create_slice[create_slice.length - 1];
    	create_string_output[create_slice[create_slice.length - 1]] = create_collab;
    	
		message.channel.send(`｢${create_collab}｣を｢${create_slice[create_slice.length - 1]}｣と置きました。`);
	}
	if (message.content.startsWith('/clear_str ')) {
		let clear_slice = message.content.split(' ');
		
		create_string_input.splice(clear_slice[1], 1);
		create_string_output.splice(clear_slice[1], 1);
		
		message.channel.send(`${clear_slice[1]}を削除しました。`);
	}
	
	if (message.content == create_string_input[message.content]) {
		message.channel.send(create_string_output[message.content]);
	}
    
    if (message.content.startsWith('/save_string ')) {
    	message.channel.bulkDelete(1);
    	let save_slice = message.content.split(' ');
    	if (parseInt(save_slice[save_slice.length - 1]) <= 0 || isNaN(parseInt(save_slice[save_slice.length - 1]))) {
    		message.channel.send('不適切な値です。');
    	}
    	else {
    		let save_num = parseInt(save_slice[save_slice.length - 1]) - 1;
    		let save_collab = "";
    		for (var i = 1; i <= save_slice.length - 2; i++) {
    		
    			save_collab = save_collab + " " + save_slice[i];
    		}
    		save_string[save_num] = save_collab;
    		message.channel.send(`${save_string[save_num]}をデータ${save_num + 1}にセーブしました。`);
    	}
    }
    
    if (message.content.startsWith('/load_string ')) {
    	message.channel.bulkDelete(1);
    	let load_slice = message.content.split(' ');
    	if (parseInt(load_slice[1]) <= 0 || isNaN(parseInt(load_slice[1]))) {
    		message.channel.send('不適切な値です。');
    	}
    	else {
    		let load_num = parseInt(load_slice[1]) - 1;
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