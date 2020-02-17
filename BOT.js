//常數Discord 設置為 需求discord.js套件
//不變更discord的同時並且帶入discord.js
const Discord = require('discord.js');
const {Attachment,Client } = require('discord.js');
const Respond = require('./js/RoFuRespond.js');
const keepAlive = require('./server');


//常數 client 設置為 新的 Discord的Cline
//不變更使用者的同時新增discord使用者
//創造一個不會變的客戶/使用者，裡面放的是一個新增出來的dicord客戶/使用者，裡面放的是一個新增出來的dicord客戶/使用者
const client = new Discord.Client();

//機器人代碼
var MyToken ='Njc3MzI1OTc0NDIwODQ4Njky.XkTu1w.VHyoNErBh5sLmOb1d2T0n9UAYDI';
keepAlive();
client.login(MyToken);
client.on("ready",()=>{
	 console.log('十點後才開始工作的 【'+client.user.tag+'】已經甦醒了!');
	 console.log(`Logged in as ${client.user.tag}!`);
	// console.log(client.user);
	});


//////////////////////////////////////////////////////////////////////////////////////////
/* js模擬java中的List */
var list = new Array();

/**新增
 * @param {Object} object
 */
function add(object) {
 list[list.length] = object;
}

/**
 * 移除此列表中指定位置上的元素。
 * @param index 指定位置
 * @return 此位置的元素
 */
function removeIndex(index) {
 var object = list[index];
 list.splice(index, 1);
 return object;
}

/**
 * 移除此列表中指定元素。
 * @param object 指定元素
 * @return 此位置的元素
 */
function remove(object) {
 var i = 0;
 for (; i < list.length; i ) {
  if (list[i] === object) {
   break;
  }
 }
 if (i >= list.length) {
  return null;
 } else {
  return removeIndex(i);
 }
}

/**
 * 獲得列表中指定元素。
 * @param object 指定元素
 * @return 此位置的元素
 */
function get(index) { 
    return list[index]; 
} 

/**
 * 移除此列表中的所有元素。
 */ 
function removeAll() { 
    list.splice(0, list.length); 
}

/**
 * 返回此列表中的元素數。
 * @return 元素數量
 */ 
function size () { 
    return list.length; 
}

 
/**
 *  如果列表不包含元素，則返回 true。
 * @return true or false
 */ 
function isEmpty() { 
    return list.length == 0; 
}
function ran(){
	var ran = Math.floor(Math.random()*100);
	return ran;
}

//////////////////////////////////////////////////////////////////////////////////////

/*隨機產生XX~XX數字*/

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
  } 
///////////////////////////////////////////////////////


client.on('message', msg => {
	const member = msg.member;
	var msgContent = msg.content;
	var msgContent0_4 = msgContent.substr(0,4); //取前四個字
	var msgContent0_5 = msgContent.substr(0,5);
	var msgContent0_6 = msgContent.substr(0,6);
	var msgContent0_7 = msgContent.substr(0,7); 
	var msgContent0_8 = msgContent.substr(0,8); 
	var msgContent0_9 = msgContent.substr(0,9); 
	var msgContent0_10 = msgContent.substr(0,10);
	var msgContent0_11 = msgContent.substr(0,11);  	
	//console.log(msgContent0_5);
	//const msgy = msg.createdAt.getFullYear();
	//const msgm = msg.createdAt.getMonth();
	//const msgd = msg.createdAt.getDate();
	//const msgH = msg.createdAt.getHours();
	//const msgM = msg.createdAt.getMinutes();
	//console.log('<'+msgy+'年'+msgm+'月'+msgd+'日'+msgH+':'+msgM+'>'+member+' : '+msg);
	
		//新增餐廳清單功能
  if(msgContent0_6 ==='裸夫!餐廳:' || msgContent0_6 ==='裸夫！餐廳：'){
		try{	
			var restaurant = msg.content.substr(6); //從第四個字以後開始
				add(restaurant);
				msg.reply("收到!!【"+restaurant+"】加入了選擇清單!!");
		}catch(e){
			msg.channel.send('裸夫的此項能力暫時無法使用!需要維修...');
			console.log('新增餐廳功能故障:'+e);
		}		
	}
	
		//餐廳清單功能
	if(msgContent0_9 ==='裸夫!餐廳清單!!' || msgContent0_9 ==='裸夫！餐廳清單！！'){
		try{ 
			if(isEmpty()){
				msg.channel.send('清單目前是空的，快討論要吃甚麼吧!');  
			}else{	
					var rstList ="";
					msg.channel.send('目前清單:');
					for(i=0;i<list.length;i++) {
						var a = i+1;
						//msg.channel.send(a+'. 【'+get(i)+'】'); 
						 rstList += a+'. 【' + get(i) + '】 \r\n'
					}
					msg.channel.send(rstList);
				}		
		}catch(e){
			msg.channel.send('裸夫的此項能力暫時無法使用!需要維修...');
			console.log('餐廳清單功能故障:'+e);
		}		
	}
	
		//清除清單功能
	if(msgContent0_9 ==='裸夫!清除清單!!' || msgContent0_9 ==='裸夫！清除清單！！'){
		try{	  
			if(isEmpty()){
				msg.channel.send('清單目前是空的，沒必要清除吧!');  
			}else{
				removeAll(); 
				msg.channel.send("裸夫已經將餐廳清單消滅了!!"); 
			}
		}catch(e){
			msg.channel.send('裸夫的此項能力暫時無法使用!需要維修...');
			console.log('清除功能故障:'+e);
		}		
	}

		//移除編號功能
    if(msgContent0_8 ==='裸夫!移除編號:' || msgContent0_8 ==='裸夫！移除編號：'){
		try{	
			if(isEmpty()){
				msg.channel.send('清單目前是空的!');  
			}else{
					var listNo = parseInt(msg.content.substr(8));			
				  //var re =/^[0-9]*[1-9][0-9]*$/;	//整數正規表達式
					var re =/\d[0-9]*/;
				if(re.test(listNo)){
						var No =listNo-1;
					if(No<=size()){			
						removeIndex(No); 			
						msg.channel.send("已移除編號<"+listNo+">的餐廳了!!");
						msg.channel.send('目前清單:');
							for(i=0;i<list.length;i++) {
								var a = i+1;
								msg.channel.send(a+'. 【'+get(i)+'】'); 
							}	
					}else{
						msg.channel.send("編號<"+listNo+">超過範圍了喔!!");
						msg.channel.send('目前清單:');
							for(i=0;i<list.length;i++) {
								var a = i+1;
								msg.channel.send(a+'. 【'+get(i)+'】'); 
							}					
				}
				}else{
					msg.channel.send("麻煩請講數字編號!!");
				}	
			}
	  }catch(e){
			msg.channel.send('裸夫的此項能力暫時無法使用!需要維修...');
			console.log('移除編號功能故障:'+e);
		}
	}	
	
		//清單隨機選一功能
	if(msgContent0_11 ==='裸夫!幫忙決定餐廳!!' || msgContent0_11 ==='裸夫！幫忙決定餐廳！！'){
		try{
			if(isEmpty()){
				msg.reply('你們沒提出選項是叫我選屁喔??');  
		}	else{
				var index = Math.floor((Math.random()*list.length));
				console.log('餐廳index:'+index);
				msg.channel.send("就定是你了【"+get(index)+"】!!");
			}	
		}catch(e){
			msg.channel.send('裸夫的此項能力暫時無法使用!需要維修...');
			console.log('清單隨機選一功能故障:'+e);
		}	
	}
	
		//十抽功能
  if(msg.content === '裸夫!給我十抽!!' || msg.content === '裸夫！給我十抽！！'){
	  	try{
			var ArrTest = new Array();
			for(i=0;i<10;i++){
				var ran = Math.floor(Math.random()*100)+1;
				a=i+1;
					if(ran<=50){
						ArrTest[i]='第'+a+'抽是【2星廢物裸夫】....';
					}else{
						if(ran<=80){
							ArrTest[i]='第'+a+'抽是【3星裸夫】...';	
						}else{
							if(ran<=95){
								ArrTest[i]='第'+a+'抽是【4星的有穿衣服裸夫】...';	
							}else{
								ArrTest[i]='第'+a+'抽是【恭喜你!!加班卡一張!!】:clap: ';		
							}
						}
					}
			}
			console.log(ArrTest);
			msg.channel.send(ArrTest);	
		}catch(e){
			msg.channel.send('裸夫的此項能力暫時無法使用!需要維修...');
			console.log('十抽功能故障:'+e);
		}
  }
  
  if(msg.content === '嘎拎杯凍欸'){
	 const attachment = new Attachment('img/ga08dla.jpg'); //修但幾勒松鼠 
	 msg.channel.send(attachment); 
   }
  if(msg.content === '修但幾勒'){
	 const attachment = new Attachment('img/ga08dla.jpg'); //修但幾勒松鼠 
	 msg.channel.send(attachment); 
   }   
  if(msg.content ==='夏威夷披薩是邪門歪道'){
	 const attachment = new Attachment('img/WTF.jpg');	//WTF維尼
		msg.channel.send(`${msg.author},你懂吃嗎?`, attachment); 
	}
});

client.on('message', msg => {
	/*基本的回話功能*/
	var msgContent = Respond(msg.content);
	var msgCLength = msgContent.length;
	try{
		if(msgCLength>0){ //判斷回話內容是不是空的
			msg.channel.send(msgContent);
		}
	}catch(e){
		msg.channel.send('裸夫啞了!需要維修...');
		console.log('基本回話功能:'+e);
	}
	
	 //骰子功能
	switch (msg.content){
		case '裸夫!骰子!!':
		var king = msg.member.id;
		//console.log(msg.member.id);
		if(king =="464084986740473917"){
				var kingnum = getRandomIntInclusive(60,100);
				//console.log(kingnum);
				msg.channel.send('來了!!'); 
				msg.reply('骰出了'+kingnum+'點!!'); 
				break;
			
		}else{
			ran();			
			msg.channel.send('來了!!'); 
			msg.reply('骰出了'+ran()+'點!!'); 
			break;
		}
	}
	switch (msg.content){
		case '裸夫！骰子！！':
		//var ran = Math.floor(Math.random()*100)+1;
		ran();
		msg.channel.send('來了!!'); 
		msg.reply('骰出了'+ran()+'點!!'); 
		break;	
	}
});

