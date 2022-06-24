import {post} from '../db/db.js';
import {uuid} from '../conf.js';
export const registerPage = function(userlevel = undefined){
	return div()
	.height('100%')
	.child(
		el('i').class('fa-solid fa-times').size('20px').padding('10px').absolute().right(0).cursor('pointer')
		.click(function(){
			GetApp('page-container-s').css('display', 'none')
		})
	)
	.child(
		div()
		.height('100%')
		.flexCenter()
		.child(
			div()
			.width('350px')
			.height('auto')
			.display('grid')
			.child(
				el('input')
					.padding('10px')
					.radius('10px')
					.color('#333')
					.id('register-level')
					.size('12pt')
					.type('hidden')
					.marginBottom('10px')
					.val(userlevel)
					.hold('username')
			)
			.child(
				el('input')
					.padding('10px')
					.radius('10px')
					.color('#333')
					.id('register-username')
					.size('12pt')
					.type('username')
					.marginBottom('10px')
					.hold('username')
			)
			.child(
				el('input')
					.id('register-password')
					.padding('10px')
					.radius('10px')
					.color('#333')
					.size('12pt')
					.type('password')
					.marginBottom('10px')
					.hold('password')
			)
			.child(
				el('button')
					.padding('10px')
					.radius('10px')
					.cursor('pointer')
					.color('#333')
					.size('12pt')
					.type('password')
					.marginBottom('10px')
					.text('Register')
					.click(function(){
						var level = GetApp('register-level').val().val;
						var username = GetApp('register-username').val().val;
						var password = GetApp('register-password').val().val;
						
						var data = {
								username: username,
								password: password,
								id: Date.now(),
								token: uuid(),
								logintype: 'daftar',
								leveluserid: level,
								status: 1,
							}

						post('https://indowebs.my.id/audit-dev/api.php',{
							type: 'insert',
							table: 'user',
							data : data
						}, function(res){
							localStorage.setItem('token', btoa(data.token));
							GetApp('page-container-s').css('display', 'none');
						}, function(err){

						})
					})
			)
		)
	)
}