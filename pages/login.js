import {post} from '../db/db.js';
import {registerPage} from './register.js';
import {OpenScreen} from '../conf.js'
export const loginPage = function(){
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
					.text('login')
					.click(function(){
						var username = GetApp('register-username').val().val;
						var password = GetApp('register-password').val().val;
						post('https://indowebs.my.id/audit-dev/api.php',{
							type: 'read',
							table: 'user',
							select: 'token',
							conditionAnd: {
								username: username,
								password: password,
							}
						}, function(res){
							if(Array.isArray(res)){
								console.log(res)
								localStorage.setItem('token', res[0].token);
							}else{
								console.log(res)
							}
						}, function(err){

						})
					})
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
						OpenScreen('full', function(screen){
							post('https://indowebs.my.id/audit-dev/api.php', {
								type: 'read',
								table: 'userlevel',
								select: 'id',
								conditionAnd: {
									level: 'client'
								}
							}, function(userlevel){
								if(userlevel.length > 0){
									userlevel = userlevel[0].id;
								}else{
									userlevel = undefined
								}
								screen.child(
									registerPage(userlevel)
								)
							}, (err)=>{console.log(err)})
						})
					})
			)
		)
	)
}