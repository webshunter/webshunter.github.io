import {darkCard} from './box.js';

export const shadow = '0 0 10px #ddf';

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

export const colorBorderMuted = '#21262d'

export const b1 = '#010409'

export const b2 = '#21262d'

export const b3 = '#30363d'

export const frontDescription = function(){
	return darkCard()
			.css('position','relative')
			.css('overflow','hidden')
			.child(
				h1().text('Halo Risma Dana')
			)
			.child(
				p().text('Selamat datang di platform javascript course. kenali javascript lebih dalam dan pecahkan setiap kasus untuk mengisi portofolio anda. dan buat aplikasi pertama anda dengan javascript.')
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
					alert('silahkan mulai perjalan anda bersama kami')
				})
			)
}