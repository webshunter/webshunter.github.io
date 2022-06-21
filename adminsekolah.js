import {shadow, panelProfile, b1, b3, frontDescription} from './conf.js?v=2'; // load config script
import {calendar} from './calendar.js?v=2'; // load calendar function
import {card, darkCard, darkCardPostCode} from './box.js'; // load card
import {newCanvas, canvasDiv} from './canvas/canvas.js' // load canvas

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
		.background(b1)
			.child(
				div().id('content-area').pd('16px')
			)

	GetApp('content-area').child(
		div().gridColumn('300px auto')
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
		.background(b3)
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

	GetApp('dashboard-content')
	.css('overflow', 'auto')
	.css('height', 'calc(100vh - (18px * 2))')
	.child(
		div().gridColumn('auto')
		.load((a)=>{
			var width = a.el.clientWidth;
			if(width < 650){
				a.el.style.gridTemplateColumns = 'auto'
			}else{
				a.el.style.gridTemplateColumns = 'auto'
			}
		})
		.resize((a)=>{
			var width = a.el.clientWidth;
			if(width <= 650){
				a.el.style.gridTemplateColumns = 'auto'
			}else{
				a.el.style.gridTemplateColumns = 'auto'
			}
		})
		.child(
			frontDescription()
		)
		.child(
			darkCardPostCode()
		)
		.load(function(){

			// call query action to load data of post
			console.log('call data')
		
		})
	)


	return content;

}