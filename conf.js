import {darkCard} from './box.js?v=9';

export const shadow = '0 0 10px #ddf';

export const looping = function(func,  num = 10, st = 0){
	if(st != num){
		func(st)
		setTimeout(function(){
			looping(func, num, st + 1);
		})
	}
}


export const OpenScreen = function( type = "page" , func = null){
	if(type == 'page'){
		var screen = GetApp('page-container-s')
		.css('display', 'block')
		.css('width', 'calc(100% -  50px)')
		.html('')
		if(func != null){
			func(screen)
		}
	}else{
		var screen = GetApp('page-container-s')
		.css('display', 'block')
		.css('width', '100%')
		.html('')
		if(func != null){
			func(screen)
		}
	}
}

export const uuid = function() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

export const panelProfile = function(a, b){
	return div()
		.child(
			h3().weight('450').size('14px').pd(0).margin(0).textCenter().text(a)
		)
		.child(
			p().size('12px').textCenter().color('#aaa').size('12px').pd(0).margin(0).mt('5px').text(b)
		)
}

export const actionDate = function(a){
	var date = this.innerText
	alert(date)
}

export const ChangePage = function(url = '/', func = null){
	window.history.pushState({},'', url);
	if(func != null){
		func();
	}
}

export const colorBorderMuted = '#21262d'

export const userinformation = function() {

	var name = 'Anonim User';
	
	if(localStorage.getItem('user-online') != undefined){
		name = localStorage.getItem('user-online')
	}

	globalThis.userinformation = {
		name: name,
		level: 'Junior',
		token: Date.now(),
	}

	return globalThis.userinformation;
}

export const b1 = '#010409'

export const b2 = '#21262d'

export const b3 = '#30363d'

export const frontDescription = function(
	title = 'Halo Risma Dana', 
	desc = 'Selamat datang di platform javascript course. kenali javascript lebih dalam dan pecahkan setiap kasus untuk mengisi portofolio anda. dan buat aplikasi pertama anda dengan javascript.',
	func = null
	){
	return darkCard()
			.css('position','relative')
			.css('overflow','hidden')
			.child(
				h1().html(title)
			)
			.child(
				div().html(desc)
			)
			.child(
				btn()
				.absolute()
				.bottom(0)
				.right(0)
				.cursor('pointer')
				.height('90px')
				.pd('20px')
				.width('120px')
				.size('20px')
				.css('border-top-left-radius','90px')
				.css('outline','none')
				.css('border','none')
				.css('display', 'flex')
				.css('justify-content', 'end')
				.css('align-items', 'end')
				.css('box-shadow', ' 0 0 10px #333')
				.child(
					el('h1').size('26px').margin(0).weight(500).color('#333').text('Mulai')
				)
				.click(function(){
					if(func == null){
						alert('silahkan mulai perjalan anda bersama kami')
					}else{
						func();
					}
				})
			)
}