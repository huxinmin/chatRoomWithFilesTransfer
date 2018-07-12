import renderChatsWin from "../components/chatsWin";
import renderChatsItem from "../components/tabs/chats/item";
import swal from "sweetalert";
import {server,} from "../config.js";

window.locals = {
  _mine:{},
  _curChat:{},
  get mine(){
  	return this._mine;
  },
  set mine(data){
  	if(!_.isPlainObject(data)){
  		throw TypeError("locals.mine 赋值必须为一个普通对象");
  	}
  	this._mine = data;
  	const avater = server +"/" +data.avater;
  	$(".mine img").attr("src", avater);
  },
  get curChat(){
  	return this._curChat;
  },
  set curChat(data){
  	if(!_.isPlainObject(data)){
  		throw TypeError("locals.curChat 赋值必须为一个普通对象");
  	}
  	this._curChat = data;
  	if(data === null || data.length ===0){
  		$(".chats-window-none").show();
  		$(".chats-input-box").hide();
  		return;
  	}else{
  		$(".chats-window-none").hide();
  		$(".chats-input-box").show();
  	}
  	/** 如果curChat在chats中，则直接跳转激活
  	  * 不在则先创建一个chat-item，再跳转激活
  	  * 点击chat-item或者users-item rooms-item也可激活这个setter
  	  * 未完成代做
  	  */
    // curChat数据形式为{username:"",avater:"", isRoom:true, online:true||false||"none"}
    // data等于从本地chats-$username中查找到username等于curChat的数据的合并
    // 注意只获取50条记录，更多的需要再次查询，为了做高效滚动加载
    if(data.online === "false"){
    	swal({
   			button: {
    			text: "确定",
  			},
  			text: "当前用户不在线，您只被允许发送3条离线消息",
  			icon: "warning",
  			timer: 3000,
      });
    }
    $(".chats-item").attr("data-active", "false");
    const chatsWindowWrapper = $(".chats-window-wrapper");
    //在聊天列表中，不重新创建聊天框，只跳转激活，并获取历史记录
    if(data.inChat === "true"){
      $(".chats-item[data-username='"+data.username+"']").attr("data-active", "true");
   		/** 切换聊天对象时，重新创建对话框，并生成聊天对话记录
   		  * 未完待做
   		  *
   		  *
   		  */

    }else{
   		//不在聊天列表中，重新创建聊天框，并跳转激活，不用获取历史记录，但是需要设置历史记录
   		const chatsGroup = $(".chats-group");
   		var itemData = Object.assign({
   			unread:0,
   			type: data.isRoom ? "room":"user",
   			active:"true",
   			lastMes:"",
   		},data);
   		renderChatsItem(chatsGroup,itemData);
      //然后还要打开聊天窗口和输入界面
      renderChatsWin(chatsWindowWrapper,Object.assign({histories:[],}, data));
    }
    setChats(data,"", ()=>{
    	var itemName = data.isRoom?"roomChats_"+data.username:"chats_"+data.username;
    	createChatsWith(itemName);
    });
    $(".menu-item[data-type='chats']").click();
    /** 设置本地或者更新chats以及chats_$username
     * 亦或是roomschats以及roomchats_$roomname
     * 未完待做
     */
  },
};
