import {shadow, panelProfile, b1, b3, frontDescription, userinformation, looping, OpenScreen} from './conf.js?v=9'; // load config script
import {calendar} from './calendar.js?v=9'; // load calendar function
import {card, darkCard, darkCardPostCode, darkCardIframe} from './box.js?v=9'; // load card
import {newCanvas, canvasDiv} from './canvas/canvas.js?v=9' // load canvas
import {loginPage} from './pages/login.js';
import {registerPage} from './pages/register.js';
import {post} from './db/db.js';
import {postinganCode} from './pages/post.js';
import {postMenus} from './pages/postMenu.js';

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
			.css('display','grid')
			.css('grid-template-rows','50px auto')
		)
	)

	GetApp('dashboard-profile').child(
		CardFoto(90, 'https://indowebs.my.id/sekolahid/profil.jpg', '<span data-name-user>'+userinformation().name+'</span>', userinformation().level, function(){
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

	GetApp('dashboard-profile').child(
		div().id('panel-menu-bar').load(function(a){
			a.el.style.overflowX = 'hidden'
			a.el.style.overflowY = 'auto'
			a.el.style.padding = '10px'
			a.el.style.maxHeight = 'calc(100vh - ('+a.el.offsetTop+'px + (12px * 2) + (10px * 2) ) )'
		})
	)

	for (var showContent of data) {
		GetApp('panel-menu-bar').child(
			CardFotoList(50, 'https://indowebs.my.id/sekolahid/profil.jpg', showContent.text, showContent.description, function(){
				alert('risma')
			})
		)
	}

	GetApp('dashboard-content')
	.child(
		div()
		.margin('0 16px')
		.child(
			div()
			.css('display', 'inline-flex')
			.css('cursor', 'pointer')
			.css('align-items', 'center')
			.padding('16px')
			.child(el('i').class('fa-solid fa-home')).child(el('span').css('margin-left', '10px').text('Beranda'))
		)
		.child(
			div()
			.css('display', 'inline-flex')
			.css('cursor', 'pointer')
			.css('align-items', 'center')
			.padding('16px')
			.child(el('i').class('fa-solid fa-camera')).child(el('span').css('margin-left', '10px').text('Post'))
		)
		.child(
			div()
			.css('display', 'inline-flex')
			.css('cursor', 'pointer')
			.css('align-items', 'center')
			.padding('16px')
			.child(el('i').class('fa-solid fa-users')).child(el('span').css('margin-left', '10px').text('Forums'))
		)
	);

	GetApp('dashboard-content')
	.child(
		div()
		.id('content-postingan')
		.css('overflow', 'auto')
		.css('height', 'calc(100vh - (50px + (18px * 2) ) )')
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
		.load(function(){
			var contentPage = GetApp('content-postingan');
			// call query action to load data of post
			if(localStorage.getItem('token') == undefined){
				contentPage.child(
					frontDescription(
						'Halo <span data-name-user>'+userinformation().name+'</span>',
						`Selamat datang di platform javascript course. kenali javascript lebih dalam dan pecahkan setiap kasus untuk mengisi portofolio anda. dan buat aplikasi pertama anda dengan javascript.`
						,function(){
							OpenScreen('full', function(screen){
								screen.child(
									loginPage()
								)
							})
						}
					)
				)
			}else{
				contentPage.child(
					frontDescription(
						'Halo <span data-name-user>'+userinformation().name+'<span>',
						`Selamat datang di platform javascript course. kenali javascript lebih dalam dan pecahkan setiap kasus untuk mengisi portofolio anda. dan buat aplikasi pertama anda dengan javascript.`
						,function(){
							alert('selesaikan tugas pertam anda')
						}
					)
				)
				post('https://indowebs.my.id/audit-dev/api.php', {
					type: 'read',
					table: 'user',
					select: 'username',
					token: localStorage.getItem('token'),
					condition: {
						token: localStorage.getItem('token')
					}
				},function(res){
					if(Array.isArray(res)){
						if(res.length > 0){
							res = res[0];
							localStorage.setItem('user-online', res.username);
							Array.from(document.querySelectorAll('[data-name-user]')).forEach(function(a){
								a.innerText = res.username;
							})
						}
					}
				}, function(){

				})
			}

			contentPage.child(
				darkCardPostCode()
			)

			looping(function(){
				contentPage.child(
					darkCardPostCode()
				)
			},20)


			// postingan menu
			// OpenScreen('full', function(screen){
			// 	screen.child(
			// 		postinganCode()
			// 	)
			// })


			OpenScreen('page', function(screen){
				screen.child(
					postMenus()
				)
			})


			setTimeout(function(){
				console.log('scroll')
			},5000)
		})
	)


	return content;

}