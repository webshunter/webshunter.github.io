export const shadow = '0 0 10px #ddf';

export const panelProfile = function(a, b){
	return div()
		.child(
			h3().size('14px').pd(0).margin(0).textCenter().text(a)
		)
		.child(
			p().textCenter().color('#777').size('12px').pd(0).margin(0).mt('5px').text(b)
		)
}

export const actionDate = function(a){
	var date = this.innerText
	alert(date)
}