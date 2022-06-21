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
			.child(
				h1().text('Dark JS')
			)
			.child(
				p().text('Selamat datang di platform javascript course. kenali javascript lebih dalam dan pecahkan setiap kasus untuk mengisi portofolio anda. dan buat aplikasi pertama anda dengan javascript.')
			)
}