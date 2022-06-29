import {uuid, OpenScreen} from '../conf.js?v=12';
import {post} from '../db/db.js?v=12';
import {boxMenusDark} from '../box.js?v=12';
import {postinganCode} from './post.js?v=12';
export const postMenus = function(){
	return div().padding('16px')
	.gridColumn('calc(100% / 4) calc(100% / 4) calc(100% / 4) calc(100% / 4)')
	.child(
		el('button')
		.css('height', '35px')
		.css('width', '35px')
		.css('position', 'fixed')
		.css('border-radius', '50%')
		.css('border', 'none')
		.css('outline', 'none')
		.css('box-shadow', '0 5px 10px #222')
		.cursor('pointer')
		.top('20px')
		.right('20px')
		.child(
			el('i').size('20px').weight('800').class('fas fa-times')
		).click(function(){
			GetApp('page-container-s').css('display', 'none')
		})
	)
	.child(
		div()
			.id('popupmenupost')
			.css('position', 'fixed')
			.css('height', '100vh')
			.width('calc(100vw - 50px)')
			.top(0)
			.right(0)
			.css('z-index','10')
			.none()
			.attr('flyer-popup', true)
			.click(function(event){
				if(event.target.getAttribute('flyer-popup') != undefined){
					GetApp('popupmenupost').none();
				}
			})
			.css('background','rgba(0,0,0,0.5)')
			.child(
				div()
					.width('350px')
					.height('auto')
					.padding('10px')
					.css('border-radius','10px')
					.background('#fff')
					.css('box-shadow', '0 0 10px #444')
					.color('#333')
					.gridColumn('auto')
					.child(
						div().css('display', 'grid')
						.child(
							label().color('#333').margin('5px 0').text('project name')
						)
						.child(
							el('INPUT').id('project-id').padding('10px').hold('project name').color("#333").size('14px').val(uuid())
							.attr('readonly', true).background("#ddd")
						)
					).child(
						div().css('display', 'grid')
						.child(
							label().color('#333').margin('5px 0').text('project name')
						)
						.child(
							el('INPUT').id('project-title').padding('10px').hold('project name').color("#333").size('14px')
						)
					)
					.child(
						div().css('display', 'grid')
						.child(
							el('INPUT').css('margin-top', '18px').type('button').val('Create New Project').padding('10px').color("#333").size("16px").cursor('pointer')
							.click(function(){
								var id = GetApp('project-id').val().val
								var title = GetApp('project-title').val().val
								var data = {
									id: id,
									title: title,
									userid: localStorage.getItem('token')
								}
								if(title == ""){
									throw "sory title can be null"
								}
								post('https://indowebs.my.id/audit-dev/api.php', {
									type: 'insert',
									table: 'postactivityadmin',
									data: data
								}, function(){
									OpenScreen('full', function(screen){
										screen.child(
											postinganCode('', title, id)
										)
									})
								}, function(){
									alert('Not Connect Server')
								})
							})
						)
					)
					.child(
						div().css('display', 'grid')
						.child(
							el('INPUT').css('margin-top', '18px').type('button').val('Close').padding('10px').color("#333").size("16px").cursor('pointer')
							.click(function(){
								GetApp('popupmenupost').none();
							})
						)
					)
			)
	)
	.child(
		el('button')
		.css('height', '50px')
		.css('width', '50px')
		.css('position', 'fixed')
		.css('border-radius', '50%')
		.css('border', 'none')
		.css('outline', 'none')
		.css('box-shadow', '0 5px 10px #222')
		.cursor('pointer')
		.bottom('20px')
		.right('20px')
		.child(
			el('i').size('34px').weight('800').class('fa-sholid fa-plus')
		)
		.click(function(){
			GetApp('popupmenupost').flexCenter();
			GetApp('project-id').val(uuid())
		})
	)
	.id('post-menus-container')
	.resize(function(e){
		var container = e.el;
		if(container.clientWidth >= 1250 ){
			container.style.gridTemplateColumns = ' calc(100% / 4) calc(100% / 4) calc(100% / 4) calc(100% / 4)'
		}else if(container.clientWidth < 1250 && container.clientWidth >= 1000){
			container.style.gridTemplateColumns = ' calc(100% / 3) calc(100% / 3) calc(100% / 3)'
		}else if(container.clientWidth < 1000 && container.clientWidth >= 600){
			container.style.gridTemplateColumns = ' calc(100% / 2) calc(100% / 2)'
		}else if(container.clientWidth < 600){
			container.style.gridTemplateColumns = '100%'
		}
	})
	.load(function(e){
		var container = e.el;
		if(container.clientWidth >= 1250 ){
			container.style.gridTemplateColumns = ' calc(100% / 4) calc(100% / 4) calc(100% / 4) calc(100% / 4)'
		}else if(container.clientWidth < 1250 && container.clientWidth >= 1000){
			container.style.gridTemplateColumns = ' calc(100% / 3) calc(100% / 3) calc(100% / 3)'
		}else if(container.clientWidth < 1000 && container.clientWidth >= 600){
			container.style.gridTemplateColumns = ' calc(100% / 2) calc(100% / 2)'
		}else if(container.clientWidth < 600){
			container.style.gridTemplateColumns = '100%'
		}

		post('https://indowebs.my.id/audit-dev/api.php', {
			type: 'read',
			token: localStorage.getItem('token'),
			table: 'postactivityadmin',
			select: 'id, title, tanggaldibuat',
			conditionAnd: {
				userid: localStorage.getItem('token')
			}
		}, function(response){
			response.forEach(function(a){
				container.appendChild(boxMenusDark(a.title, a.tanggaldibuat, a, function(data){
					post('https://indowebs.my.id/audit-dev/api.php', {
							type: 'read',
							token: localStorage.getItem('token'),
							table: 'postactivityadmin',
							select: 'code, caption',
							conditionAnd: {
								id: data.dataCode.id
							}
						},
						function(responSe){
							var id = data.dataCode.id
							var code = '';
							var caption = 'type here to describe !';
							if(responSe.length > 0){
								code = responSe[0].code;
								caption = responSe[0].caption;
							}
							OpenScreen('full', function(screen){
								screen.child(
									postinganCode(code, caption, id)
								)
							})
						}, function(){
							console.log('connection none')
						}
					)

				}).get())
			})
		}, function(err){})

		console.log(container)
	})
}
