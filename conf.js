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