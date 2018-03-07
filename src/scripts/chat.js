export default class Chat{
	constructor(props) {
		this.messages = [];
		var el = document.querySelector('.c-chat__input input');

		this.addEvent(el, 'keyup', (e) => {
			this.keyHandler(e)
		});

		this.loadMessages();
	}

	addEvent(el, type, handler) {
		if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
	}

	pushMessage(msg) {
		this.messages.push({message:msg});
		sessionStorage.setItem('messages', JSON.stringify(this.messages));
		this.updateDOM(msg);
	}

	loadMessages() {
		var messages = JSON.parse(sessionStorage.getItem('messages'));

		if(messages){
			messages.forEach((element) => {
				this.messages.push(element);
				this.updateDOM(element.message);
			});
		}
	}

	updateDOM(msg) {
		var referenceNode = document.querySelector('.c-chat__input');
		var newNode = this.getMessageDom(msg);

		referenceNode.parentNode.insertBefore( newNode, referenceNode );
	}

	getMessageDom(msg) {
		var message = document.createElement('div');
		console.log(message);
		message.className= 'c-chat__message--me';
		message.innerHTML = 
			'<div class="c-chat-left-column"></div>'+
			'<p class="c-chat__message-content">'+msg+'</p>'+
			'<div class="c-chat-right-column">'+
				'<div class="c-profile-picture--small">'+
					'<img src="./statics/img/profile-pic-me.jpg" >'+
					'<span class="c-profile-picture__online-badge"></span>'+
				'</div>'+
			'</div>';

		return message;
	}

	keyHandler(e) {
		if(e.which == 13){
			var msg = e.target.value;
			e.target.value = '';
			this.pushMessage(msg);
		}
	}
}