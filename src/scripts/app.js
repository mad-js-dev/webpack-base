export default class App{

	constructor(props) {
		
	}

	addEvent(el, type, handler) {
		//Generic event subscribe
		if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
	}

	removeEvent(el, type, handler) {
		//Generic event unsubscribe
	    if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
	}

	toggleState(elem, one, two) {
		var elem = document.querySelector(elem);
		elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
	}

	loadBindings(arr) {
		for (var n=0;n<arr.length;n++) {
			let bindingOb = arr[n];
			this.setBinding(bindingOb);
		}
	}

	setBinding(binding) {
		let el = document.querySelector(binding.element);
		let target = document.querySelector(binding.target);
		let change = binding.modifier;

		switch(change.target) {
			case 'class':
				this.addEvent(el, 'click', function(){ 
					if (target.classList.contains(change.modifier)) {
					   target.classList.remove(change.modifier);
					   target.classList.add(change.name);
					} else {
					   	target.classList.remove(change.name);
						target.classList.add(change.modifier);
					}
				});
			break;

			case 'data-attr':
				this.addEvent(el, 'click', function(){ 
					if(target.getAttribute(change.name) == "false"){
						target.setAttribute(change.name, "true");
					}else {
						target.setAttribute(change.name, "false");
					}
				});
			break;

			case 'local-storage':
				this.addEvent(el, 'click', () => {
					if(sessionStorage.getItem('is-friend') == 'false' || sessionStorage.getItem('is-friend') == null){
						sessionStorage.setItem('is-friend', 'true');
						this.toggleModifiers('.c-profile','c-profile--is-friend');
					} else {
						sessionStorage.setItem('is-friend', 'false');
						this.toggleModifiers('.c-profile--is-friend','c-profile');
					}
				});
			break;
		}
	}

	toggleModifiers(target, renameTo) {
		console.log(document.querySelector(target));
		document.querySelector(target).classList.toggle(renameTo);
		document.querySelector(target).classList.toggle(target.substr(1));			
	}

	setStates() {
		if(sessionStorage.getItem('is-friend')=='true')this.toggleModifiers('.c-profile','c-profile--is-friend');
	}
}