import {shadow, panelProfile} from './conf.js?v=1'; // load config script
import {calendar} from './calendar.js?v=1'; // load calendar function

export const sekolahPanel = function(data = []){
	var panel = div()
	.fixed()
	.width('50px')
	.height('100vh')
	.top('0')
	.left('0')
	.shadow(shadow)
	panel.child(
		div().id('panel-menu').pd('16px').mt('16px')
	)

	for(var dataMenu of data){
		GetApp('panel-menu').child(
			div()
				.pb('24px')
				.textCenter()
				.child(
					Icon(dataMenu.icon).cursor('pointer')
				)
		)
	}

	return panel;
}


export const contentDashboard = function(data = []){
	var content = div()
		.fixed()
		.width('calc(100vw - 50px)')
		.height('100vh')
		.top('0')
		.right('0')
		.background('#eef')
			.child(
				div().id('content-area').pd('16px')
			)

	GetApp('content-area').child(
		div().gridColumn('320px auto')
		.child(
			div()
			.child(
				div().id('dashboard-profile').gridColumn('auto')
			)
		)
		.child(
			div()
			.id('dashboard-content')
		)
	)

	GetApp('dashboard-profile').child(
		CardFoto(90, 'https://indowebs.my.id/sekolahid/profil.jpg', 'Risma Dana', 'Guru', function(){
			alert('risma')
		})
	)

	GetApp('dashboard-profile').child(
		div().gridColumn('auto auto auto').mb('16px')
		.background('#fff')
		.pd('10px')
		.width('calc(100% - (2 * 10px))')
		.radius('8px')
		.child(
			panelProfile('16K', 'Follow')
		).child(
			panelProfile('2 year', 'experience')
				.css('border-left','1px solid #ccc')
				.css('border-right','1px solid #ccc')
		).child(
			panelProfile('50K', 'Follower')
		)
	)

	for (var showContent of data) {
		GetApp('dashboard-profile').child(
			CardFotoList(50, 'https://indowebs.my.id/sekolahid/profil.jpg', showContent.text, showContent.description, function(){
				alert('risma')
			})
		)
	}

	GetApp('dashboard-content').child(
		div().gridColumn('50% auto')
		.load((a)=>{
			var width = a.el.clientWidth;
			if(width < 650){
				a.el.style.gridTemplateColumns = 'auto'
			}else{
				console.log(a.el)
				a.el.style.gridTemplateColumns = '50% auto'
			}
		})
		.resize((a)=>{
			var width = a.el.clientWidth;
			if(width <= 650){
				a.el.style.gridTemplateColumns = 'auto'
			}else{
				a.el.style.gridTemplateColumns = '50% auto'
			}
		})
		.child(
			div().id('datesnow')
			.padding('24px 16px')
			.margin('16px')
			.background('#fff')
			.radius('8px')
			.child(
				div()
					.child(h1().textCenter().size('4em').margin(0).padding(0)
						.text(tanggal().make('|d|')))
					.child(
						div().gridColumn('auto 5px auto')
						.child(div().pd('10px').textRight().text(tanggal(tanggal().normal).sekarang2.split(' ')[1]))
						.child(div().textCenter().pd('10px 0').text('|'))
						.child(div().pd('10px').text(tanggal().make('|y|')))
					)
					.child(
						p().textCenter().italic().text(`"Belum ada agenda khusus untuk hari ini."`)
					)
			)
		)
		.child(
			div()
			.padding('16px')
			.margin('16px')
			.background('#fff')
			.radius('8px')
			.id('calendar')
			.child(
				div().gridColumn('50px auto 50px')
				.child(
					div().cursor('pointer').textCenter().child(
						Icon('fa-solid fa-angle-left')
					)
					.click(()=>{
						var dateStart = GetApp('start-calendar').attr('date-now')
						var getNewday = tanggal(tanggal(dateStart.val).milisecond - tanggal().oneDayMilisecond).normal2;
						GetApp('start-calendar').attr('date-now', getNewday);
						GetApp('start-calendar')
							.html('')
								.child(calendar(getNewday))
						GetApp('head-name-calendar')
							.text(
								tanggal(getNewday).make('|M| |y|')
							)
					})
				)
				.child(
					div().textCenter().id('head-name-calendar').text(tanggal().make('|M| |y|'))
				)
				.child(
					div().cursor('pointer').textCenter().child(
						Icon('fa-solid fa-angle-right')
					)
					.click(()=>{
						var dateStart = GetApp('start-calendar').attr('date-now')
						var getNewday = tanggal(tanggal(tanggal(dateStart.val).normal3).milisecond + tanggal().oneDayMilisecond).normal2;
						GetApp('start-calendar').attr('date-now', getNewday);
						GetApp('start-calendar').html('').child(calendar(getNewday))
						GetApp('head-name-calendar').text(tanggal(getNewday).make('|M| |y|'))
					})
				)
			)
			.child(div().id('start-calendar').attr('date-now', tanggal().normal2).child(calendar()))
		)
	)


	return content;

}