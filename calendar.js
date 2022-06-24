import {actionDate} from './conf.js?v=9';

export const calendar = function(a){
	var calendar = div()

	var startDate = tanggal(tanggal(a).normal2).milisecond;

	var oneDay = tanggal(a).oneDayMilisecond;

	var lastDay = startDate - oneDay;

	lastDay = tanggal(lastDay);

	lastDay = Number(lastDay.make('|d|'));

	var makeDay = [];
	var statusD = [];

	var dayStartFrom = tanggal(tanggal(a).normal2).day;

	for (var i = (lastDay - (dayStartFrom - 1)); i <= lastDay; i++) {
		makeDay.push(i.pad(2));
		statusD.push(0);
	}

	var years = tanggal(tanggal(a).normal3).make('|y|')
	var month = tanggal(tanggal(a).normal3).make('|m|')

	for (var i = 1; i <= Number(tanggal(tanggal(a).normal3).make('|d|')); i++) {
		makeDay.push(i.pad(2));
		statusD.push(1);
	}

	for (var i = 1; i <= (6 - tanggal(tanggal(a).normal3).day); i++) {
		makeDay.push(i.pad(2));
		statusD.push(0);
	}

	if(makeDay.length == 35){
		for (var i = 0; i < 7; i++) {
			makeDay.push( ((6 - tanggal(tanggal(a).normal3).day) + 1 + i).pad(2) )
			statusD.push(0);
		}
	}

	var newidTanggal = 'id-'+Date.now()

	calendar.child(
		div().gridColumn('auto auto auto auto auto auto auto').id(newidTanggal)
	)
	var cek = 0;
	for(var releaseDate of makeDay){
		var makecolor = '#aad';
		if(statusD[cek] == 1){
			makecolor = '#333'
		}
		if(statusD[cek] == 1){
			GetApp(newidTanggal).child(
				div().click(actionDate).css('position', 'relative').attr('data-tanggal', years+'-'+month+'-'+releaseDate).load(function(a){
					var date1 = a.el.getAttribute('data-tanggal')
					if(date1 == tanggal().normal){
						a.el
							.appendChild(
								el('span')
									.width('8px')
									.height('8px')
									.background('#aaf')
									.absolute()
									.block()
									.radius('50%')
									.top('10%')
									.right('10%')
									.get()
							)
					}
				}).cursor('pointer')
					.color(makecolor)
					.textCenter()
						.pd('10px')
						.text(releaseDate)
			)
		}else{
			GetApp(newidTanggal).child(
				div().cursor('pointer').color(makecolor).textCenter().pd('10px').text(releaseDate)
			)
		}
		cek++;
	}
	return calendar;
}
