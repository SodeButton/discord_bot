'use strict';
//ログイン処理
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var time;

client.on('ready', () => {
	console.log('bot is loggin');
	
});

//Bot自身の発言を無視する呪い
client.on('message', message => {
		
	let dateData = new Date();
	
	let logData = fs.readFileSync('./logData.txt', 'utf-8');
	var messageTime = "" + message.createdAt;
	var removeMessage = messageTime.replace("GMT+0000 (Coordinated Universal Time)", "");
	
	logData = logData + "\n" + removeMessage + ": " + message.author.username + " >>> 「" + message.content + "」";
	
	fs.writeFile('./logData.txt', logData, (err) => {
		
		if(err){
			console.log("エラーが発生しました。" + err);
			throw err;
		}
		else{
			//console.log("ファイルが正常に書き出しされました");
		}
		
	});
	
	client.user.setActivity('BOTN ver 1.0.0', {
		type: 'PLAYING'
	});
	
	if (message.author.bot) {
		return;
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
	if (message.content === 'log();') {
		message.channel.send({files: ['./logData.txt']});
	}
	//++++++++++++++++++++++
	var checkLogin = JSON.parse(fs.readFileSync('../userDataBox/userData.json', 'utf-8'));
	
	for (var i = 0; i < checkLogin.length; i++) {
		
		if(checkLogin[i].id == message.author.id) {
			if(checkLogin[i].date != dateData.getDate()){
				checkLogin[i].coin += 10;
				checkLogin[i].date = dateData.getDate();
				
				message.channel.send({
					embed: {
						title: '**' + myEscape(message.member.nickname) + '**',
						color: 7506374,
						description: 'ログインボーナス獲得！\n' + 
									'> coin<:coin_1:654567097862586368> +100\n' +
									'現在のcoin<:coin_1:654567097862586368>  ' + checkLogin[i].coin,
						
						thumbnail: {
							url: message.author.avatarURL
						}
					}
				});
				
				fs.writeFile('../userDataBox/userData.json', JSON.stringify(checkLogin, null, "\t"), (err) => {
					if(err){
						console.log("エラーが発生しました。" + err);
						throw err;
					}
					else{
						console.log("ファイルが正常に書き出しされました");
					}
				});
			}
			break;
		}
	}
	
	try {
		eval(message.content);
	} catch {}
		
	
	function help() {
		message.channel.send({
			embed: {
				title: 'ヘルプだよ！',
				color: 7506374,
				description: 'help();\n' + 
							'> ヘルプを表示するよ！\n',
				
				thumbnail: {
					url: client.user.avatarURL
				}
			}
		});
	}
	
	function myEscape(str) {
		return str.replace(/\\/g, '\\\\')
				.replace(/'/g, "\\'")
				.replace(/"/g, '\\"')
				.replace(/_/g, '\\_');
	}
	
	function slot() {
		
		var userData = JSON.parse(fs.readFileSync('../userDataBox/userData.json', 'utf-8'));
		
		for (var o = 0; o < userData.length; o++) {
			if (userData[o].id == message.author.id) {
				if (userData[o].coin >= 10) {
					var slot_result = new Array();
					var used_number = new Array();
					
					userData[o].coin -= 10;
					
					for (var i = 0; i < 9; i++) {
						
						if (i == 0 || i == 3 || i == 6) {
							for (var j = 0; j < 5; j++) {
								used_number[j] = false;
							}
						}
						
						while(1) {
							slot_result[i] = Math.floor(Math.random() * 4);
							if (!used_number[slot_result[i]]) {
								break;
							}
						}
						
						switch(slot_result[i]) {
							case 0:
								slot_result[i] = '<:seven_1:655596572553248778>';
								used_number[0] = true;
								break;
							case 1:
								slot_result[i] = '<:melon_1:655596652454739968>';
								used_number[1] = true;
								break;
							case 2:
								slot_result[i] = '<:jac_1:655596747737006090>';
								used_number[2] = true;
								break;
							case 3:
								slot_result[i] = '<:cherry_1:655599236527685672>';
								used_number[3] = true;
								break;
							case 4:
								slot_result[i] = '<:bell_1:655596696683937863>';
								used_number[4] = true;
								break;
						}
					}
					
					var get_coin = 0;
					if (slot_result[0] == slot_result[3] && slot_result[0] == slot_result[6]) {
						switch(slot_result[0]) {
							case '<:seven_1:655596572553248778>':
								get_coin += 500;
								break;
							case '<:melon_1:655596652454739968>':
								get_coin += 30;
								break;
							case '<:jac_1:655596747737006090>':
								get_coin += 100;
								break;
							case '<:cherry_1:655599236527685672>':
								get_coin += 10;
								break;
							case '<:bell_1:655596696683937863>':
								get_coin += 50;
								break;
						}
					}
					if (slot_result[1] == slot_result[4] && slot_result[1] == slot_result[7]) {
						switch(slot_result[1]) {
							case '<:seven_1:655596572553248778>':
								get_coin += 500;
								break;
							case '<:melon_1:655596652454739968>':
								get_coin += 30;
								break;
							case '<:jac_1:655596747737006090>':
								get_coin += 100;
								break;
							case '<:cherry_1:655599236527685672>':
								get_coin += 10;
								break;
							case '<:bell_1:655596696683937863>':
								get_coin += 50;
								break;
						}
					}
					if (slot_result[2] == slot_result[5] && slot_result[2] == slot_result[8]) {
						switch(slot_result[2]) {
							case '<:seven_1:655596572553248778>':
								get_coin += 500;
								break;
							case '<:melon_1:655596652454739968>':
								get_coin += 30;
								break;
							case '<:jac_1:655596747737006090>':
								get_coin += 100;
								break;
							case '<:cherry_1:655599236527685672>':
								get_coin += 10;
								break;
							case '<:bell_1:655596696683937863>':
								get_coin += 50;
								break;
						}
					}
					if (slot_result[0] == slot_result[4] && slot_result[0] == slot_result[8]) {
						switch(slot_result[0]) {
							case '<:seven_1:655596572553248778>':
								get_coin += 500;
								break;
							case '<:melon_1:655596652454739968>':
								get_coin += 30;
								break;
							case '<:jac_1:655596747737006090>':
								get_coin += 100;
								break;
							case '<:cherry_1:655599236527685672>':
								get_coin += 10;
								break;
							case '<:bell_1:655596696683937863>':
								get_coin += 50;
								break;
						}
					}
					if (slot_result[2] == slot_result[4] && slot_result[2] == slot_result[6]) {
						switch(slot_result[2]) {
							case '<:seven_1:655596572553248778>':
								get_coin += 500;
								break;
							case '<:melon_1:655596652454739968>':
								get_coin += 30;
								break;
							case '<:jac_1:655596747737006090>':
								get_coin += 100;
								break;
							case '<:cherry_1:655599236527685672>':
								get_coin += 10;
								break;
							case '<:bell_1:655596696683937863>':
								get_coin += 50;
								break;
						}
					}
					
					if(get_coin == 0) {
						
						fs.writeFile('../userDataBox/userData.json', JSON.stringify(userData, null, "\t"), (err) => {
							if(err){
								console.log("エラーが発生しました。" + err);
								throw err;
							}
							else{
								console.log("ファイルが正常に書き出しされました");
							}
						});
						
						message.channel.send({
							embed: {
								title: '**' + myEscape(message.member.nickname) + '**',
								color: 7506374,
								description: slot_result[0] + ' | ' + slot_result[3] + ' | ' + slot_result[6] + '\n' +
										slot_result[1] + ' | ' + slot_result[4] + ' | ' + slot_result[7] + '\n' +
										slot_result[2] + ' | ' + slot_result[5] + ' | ' + slot_result[8] + '\n\n' +
										'ハズレ...\n' +
										'> coin<:coin_1:654567097862586368>  -10\n' +
										'現在のcoin<:coin_1:654567097862586368>  ' + userData[o].coin
							}
						});
						
					}
					else {
						
						userData[o].coin += get_coin;
						
						fs.writeFile('../userDataBox/userData.json', JSON.stringify(userData, null, "\t"), (err) => {
							if(err){
								console.log("エラーが発生しました。" + err);
								throw err;
							}
							else{
								console.log("ファイルが正常に書き出しされました");
							}
						});
					
						message.channel.send({
							embed: {
								title: '**' + myEscape(message.member.nickname) + '**',
								color: 7506374,
								description: slot_result[0] + ' | ' + slot_result[3] + ' | ' + slot_result[6] + '\n' +
										slot_result[1] + ' | ' + slot_result[4] + ' | ' + slot_result[7] + '\n' +
										slot_result[2] + ' | ' + slot_result[5] + ' | ' + slot_result[8] + '\n\n' +
										'あたり！！\n' +
										'> coin<:coin_1:654567097862586368>   +' + get_coin + '\n' +
										'現在のcoin<:coin_1:654567097862586368>  ' + userData[o].coin
							}
						});
					}
					break;
				} else {
					message.channel.send({
						embed: {
							title: '**' + myEscape(message.member.nickname) + '**',
							color: 7506374,
							description: 'coin<:coin_1:654567097862586368>   が足りないよ！'
						}
					});
					break;
				}
			}
		}
    }
	
	function status() {
		var userData = JSON.parse(fs.readFileSync('../userDataBox/userData.json', 'utf-8'));
		for (var i = 0; i < userData.length; i++) {
			if (userData[i].id == message.author.id) {
				message.channel.send({
					embed: {
						title: myEscape(message.member.nickname),
						color: 7506374,
						description: 'id-' + message.author.id + '\n' +
									'coin<:coin_1:654567097862586368> ' + userData[i].coin + '\n',
						
						thumbnail: {
							url: message.author.avatarURL
						}
					}
				});
				break;
			}
		}
	}
	
	function signin() {
		var userData = JSON.parse(fs.readFileSync('../userDataBox/userData.json', 'utf-8'));
		console.log(userData.length);
		for(var i = 0; i <= userData.length + 1; i++) {
			if(userData[i] == null) {
				userData.push({id: message.author.id});
				userData[i].date = dateData.getDate();
				userData[i].coin = 100;
				message.channel.send('**' + myEscape(message.member.nickname) + '**' + "  サインイン完了ー！");
				
				fs.writeFile('../userDataBox/userData.json', JSON.stringify(userData, null, "\t"), (err) => {
					if(err){
						console.log("エラーが発生しました。" + err);
						throw err;
					}
					else{
						console.log("ファイルが正常に書き出しされました");
					}
				});
				break;
			}
			else if(userData[i].id == message.author.id) {
				message.channel.send('**' + myEscape(message.member.nickname) + '**' + ' サインイン済みだよ！');
				break;
			}
		}
	}
	
	function backup() {
		client.channels.get("635846859700830208").send({files: ['../userDataBox/userData.json']});
		client.channels.get("635846859700830208").send({files: ['./logData.txt']});
	}
});
client.login(process.env.BOT_TOKEN);
