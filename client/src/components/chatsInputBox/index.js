import template from 'template';
import './index.less';

import renderChatsInputTools from '../chatsInputTools';


var source = '<div class="chats-input-box">'
+  '<pre contenteditable="true" class="chats-input-text"></pre>'
+  '<svg class="chats-input-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1332"><path d="M1011.168 487.136c0-10.368-4.512-19.648-11.552-26.208L605.6 120.64c-6.272-5.344-14.272-8.672-23.104-8.672-19.776 0-35.744 15.968-35.744 35.712l0 150.624C245.568 346.944 33.504 568.352 12.832 852.544c0.992 12.064 10.848 21.632 23.136 21.632 4.736 0 9.184-1.44 12.896-3.872 0.064-0.064 0 0.192 0.064 0.192 52.032-36.928 96.992-64.48 132.096-83.008 63.968-35.2 154.464-65.28 258.368-84.544l0-0.16c14.848 0 26.88-12.288 26.88-27.488 0-15.168-12.032-27.488-26.88-27.488-3.456 0-6.752 0.672-9.792 1.888-166.4 32.608-275.936 85.664-361.92 147.2 55.488-204.096 191.808-387.584 512.16-447.936l0 0c14.144-2.304 24.992-14.912 24.992-30.144 0-0.384 0-0.8-0.032-1.184L604.8 317.6 604.8 202.752l331.84 284.544-328.192 280.864-2.432 0 0-138.592-0.064 0c-0.928-16-13.824-28.672-29.568-28.672-16.352 0-29.632 13.664-29.632 30.528 0 0 0 0 0 0 0 0 0 0 0 0l0 56.128 0 75.2 0 64.352c0 19.776 15.936 35.712 35.712 35.712 8.416 0 16-3.168 22.144-8.064L998.72 514.432c0-0.032-0.128-0.064-0.064-0.096C1006.304 507.808 1011.168 498.016 1011.168 487.136z" p-id="1333"></path></svg>'
+'</div>'

var render = template.compile(source);

const renderChatsInputBox = (chatsWindowWrapper)=>{
	var chatsInputHtml = render();
	chatsWindowWrapper.append(chatsInputHtml);
	const chatsInputBox = $('.chats-input-box');
	renderChatsInputTools(chatsInputBox);
}

export default renderChatsInputBox
