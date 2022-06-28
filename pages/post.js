import {b3} from '../conf.js?v=12';
import {dbwrite, dbread} from '../db/xdb.js?v=12';
import {upload} from '../db/db.js?v=12';
import {postMenus} from './postMenu.js?v=12';
import {uuid, OpenScreen} from '../conf.js?v=12';
export const postinganCode = function(data = '', caption = 'type here to code !', id='codetest'){

	function delay(delayInms) {
	  return new Promise(resolve => {
	    setTimeout(() => {
	      resolve(2);
	    }, delayInms);
	  });
	}

	var style = ` body {\n	background: white;\n} `;
	var html = `<h1>Views</h1>\n<p>deskripsi</p>`;
	var script = 'console.log("load")';

	var idDiv = Date.now();
	var codeplay = 'codeplay'+idDiv;
	globalThis.codeplayDataPost = {
		style: style,
		html: html,
		script: script
	};

	if(data != ''){
		codeplayDataPost = JSON.parse(atob(data))
		style = codeplayDataPost.style
		html = codeplayDataPost.html
		script = codeplayDataPost.script
	}

	if(globalThis.codeplayDataPostActive == undefined){
		globalThis.codeplayDataPostActive = {}
	}
	globalThis.codeplayDataPostActive[idDiv] = 'html';
	return div()
	.css('min-height', 'calc(100vh - 124px)')
	.gridColumn('50% 50%')
	.radius('8px').background(b3)
	.child(
		div()
			.child(
				btn().attr('data-code-p', idDiv)
				.addModule('code', 'codeplayDataPost')
				.addModule('idplay', codeplay)
				.addModule('ideditor', idDiv)
				.attr('data-'+idDiv, true).css('background', b3).color('#fff').cursor('pointer').css('outline', 'none').border('none').pd('8px 10px').text('html')
				.click(function(event){
					globalThis.codeplayDataPostActive[event.target.ideditor] = 'html';
					var sy = Array.from(document.querySelectorAll('[data-'+event.target.getAttribute('data-code-p')+']'));
					for(const so of sy){
						so.style.color = '#aaa';
					}
					event.target.style.color = '#fff';
					var code = event.target.code;
					globalThis[event.target.idplay].parent.editorcode
					.getDoc().setValue(globalThis[event.target.code]['html'])
					globalThis[event.target.idplay].parent.editorcode
					.setOption('mode', {name: "text/html", globalVars: true})
				})
			)
			.child(
				btn()
				.addModule('code', 'codeplayDataPost')
				.addModule('idplay', codeplay)
				.addModule('ideditor', idDiv)
				.attr('data-code-p', idDiv).attr('data-'+idDiv, true).css('background', b3).color('#aaa').cursor('pointer').css('outline', 'none').border('none').pd('8px 10px').text('css')
				.click(function(event){
					globalThis.codeplayDataPostActive[event.target.ideditor] = 'style';
					var sy = Array.from(document.querySelectorAll('[data-'+event.target.getAttribute('data-code-p')+']'));
					for(const so of sy){
						so.style.color = '#aaa';
					}
					event.target.style.color = '#fff';
					var code = event.target.code;
					globalThis[event.target.idplay].parent.editorcode
					.getDoc().setValue(globalThis[event.target.code]['style'])
					globalThis[event.target.idplay].parent.editorcode
					.setOption('mode', {name: "css", globalVars: true})
				})
			)
			.child(
				btn()
				.addModule('code', 'codeplayDataPost')
				.addModule('idplay', codeplay)
				.addModule('ideditor', idDiv)
				.attr('data-code-p', idDiv).attr('data-'+idDiv, true).css('background', b3).color('#aaa').cursor('pointer').css('outline', 'none').border('none').pd('8px 10px').text('js')
				.click(function(event){
					globalThis.codeplayDataPostActive[event.target.ideditor] = 'script';
					var sy = Array.from(document.querySelectorAll('[data-'+event.target.getAttribute('data-code-p')+']'));
					for(const so of sy){
						so.style.color = '#aaa';
					}
					event.target.style.color = '#fff';
					var code = event.target.code;
					globalThis[event.target.idplay].parent.editorcode
					.getDoc().setValue(globalThis[event.target.code]['script'])
					globalThis[event.target.idplay].parent.editorcode
					.setOption('mode', {name: "javascript", globalVars: true})
				})
			)
			.child(
				div().child(
					el('textarea').addModule('idsave', id).id(codeplay).color('#333').css('display', 'none').load(function(e){



						function getSnippets(codemirror) {

						    var snippets = [
						        {text: 'SELECT', displayName: 'select'},
						        {text: 'UPDATE', displayName: 'update'},
						        {text: 'CREATE', displayName: 'create'},
						        // other snippets for hinting
						    ]

						    CodeMirror.showHint(codemirror, function () {

						        let cursor = codemirror.getCursor();
						        let line = codemirror.getLine(cursor.line);
						        let start = cursor.ch, end = cursor.ch;
						        // corrects ignoring trailing whitespaces removal
						        while (start && /\w/.test(line.charAt(start - 1)))
						                    --start;
						        while (end < line.length && /\w/.test(line.charAt(end)))
						                    ++end;
						        const token = codemirror.getTokenAt(cursor);
						        const currentWord = token.string;

						        // reduce hint options if user has already entered something
						        const list = snippets.filter(function (item) {
						            return item.displayText.indexOf(currentWord) >= 0;
						        });

						        return {
						            list: list.length ? list : snippets,
						            from: CodeMirror.Pos(cursor.line, start),
						            to: CodeMirror.Pos(cursor.line, end)
						        };
						    }, {completeSingle: true});
						}


						var value = "// The bindings defined specifically in the Sublime Text mode\nvar bindings = {\n";
					  	var map = CodeMirror.keyMap.sublime;
					  	for (var key in map) {
						    var val = map[key];
						    if (key != "fallthrough" && val != "..." && (!/find/.test(val) || /findUnder/.test(val)))
					      	value += "  \"" + key + "\": \"" + val + "\",\n";
					  	}
					  	value += "}\n\n// The implementation of joinLines\n";
					  	value += CodeMirror.commands.joinLines.toString().replace(/^function\s*\(/, "function joinLines(").replace(/\n  /g, "\n") + "\n";

						var editor = CodeMirror.fromTextArea(e.el, {
							extraKeys: {"Ctrl-space": 'showH'},
						    lineNumbers: true,
						    mode: {name: "text/html", globalVars: true},
					  	});
					  	editor['ideditor'] = idDiv;
					  	editor['post'] = 'codeplayDataPost';
					  	editor['active'] = 'html';
						editor.setOption('keyMap', 'sublime');
						editor.setOption('theme', 'ambiance');
						editor.setOption('tabSize', '2');
						editor.setOption('matchBrackets', true);
						editor.setOption('autoCloseBrackets', true);
						editor.setOption('showCursorWhenSelecting', true);
						editor.getDoc().setValue(html);
						editor.setSize("100%", "calc(100vh - 34px)");
						editor.idsave = e.el.idsave;
						e.el.editorcode = editor;
						editor.on('change', function(e){
							clearTimeout(delay);
		        	delay = setTimeout(function(){
								globalThis[e.post][globalThis.codeplayDataPostActive[e.ideditor]] = e.getValue()
								dbwrite(e.idsave, globalThis[e.post])
								var f = globalThis['views-'+e.ideditor].parent;
								var win = f.contentWindow
								win.el = el;
								win.div = div;
								win.alert = alert;
								var doc = win.document;
								doc.head.innerHTML = '';
								doc.body.innerHTML = '';
								doc.head.appendChild(
									el('LINK')
									.href('./fontawesome/css/all.min.css')
									.attr('rel', 'stylesheet')
									.get()
								)
								doc.head.appendChild(
									el('style').html(`
										body{
											background: #fff;
										}
										`).get()
									)
									doc.head.appendChild(
										el('style').html(globalThis[e.post]['style']).get()
									)
									doc.body.appendChild(div()
									.child(
										div()
										.html(globalThis[e.post]['html'])
									)
									.child(
										el('noscript').id('script-data').html(globalThis[e.post]['script'])
									)
									.child(
										el('script').html(`
											var result;
											try {
												result = eval(document.getElementById('script-data').innerHTML);
											} catch (ex) {
												if (ex !== null && typeof ex !== "undefined") {
													if (ex.message) ex = ex.message;
												} else {
													ex = "An unknown error occurred.";
												}
												result = ex;
												console.log(ex)
											}
											`)
										).get())
							}, 300);



						})

					})
				)
			)
		).child(
			div()
			.child(
				div()
				.child(
					el('iframe')
					.id('views-'+idDiv)
					.width('calc(100% - 4px)')
					.height('50vh')
					.attr('sandbox', 'allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation')
					.attr('referrerpolicy', 'strict-origin-when-cross-origin')
					.attr('scrolling', 'auto')
					.attr('allowtransparency', 'true')
					.attr('allowfullscreen', 'true')
					.load(function(a){
						a.el.parentNode.style.height = (a.el.parentNode.clientHeight + 36)+'px';
						var win = a.el.contentWindow
						win.el = el;
						win.alert = alert;
						win.div = div;
						var doc = win.document
						a.el.document = win;
						doc.head.appendChild(
							el('LINK')
							.href('./fontawesome/css/all.min.css')
							.attr('rel', 'stylesheet').get()
						)
						doc.head.appendChild(
							el('style').html(`
								@import url("navigation.css");
								body{
									background: #fff;
								}
							`).get()
						)
						doc.head.appendChild(
							el('style').html(style).get()
						)
						doc.body.appendChild(div()
							.child(
								div()
								.html(html)
							)
							.child(
								el('noscript').id('script-data').html(script)
							)
							.child(
								el('script').html(`
									var result;
									try {
									    result = eval(document.getElementById('script-data').innerHTML);
									} catch (ex) {
									    if (ex !== null && typeof ex !== "undefined") {
									        if (ex.message) ex = ex.message;
									    } else {
									        ex = "An unknown error occurred.";
									    }
									    result = ex;
										console.log(ex)
									}
									`)
							).get())
					})
				)
				.child(
					div()
						.child(
							btn()
								.id('loader-'+idDiv)
								.css('position', 'fixed')
								.css('border-radius', '50%')
								.css('width', '45px')
								.css('height', '45px')
								.css('bottom', '20px')
								.css('right', '80px')
								.css('border', 'none')
								.css('outline', 'none')
								.css('background', 'transparent')
								.addModule('idsave', id)
								.addModule('notes', idDiv)
								.css('cursor', 'pointer')
								.css('font-size', '24px')
								.none()
								.child(
									loader()
								)
						)
						.child(
							btn()
								.css('position', 'fixed')
								.css('border-radius', '50%')
								.css('width', '45px')
								.css('height', '45px')
								.css('bottom', '70px')
								.css('right', '20px')
								.css('border', 'none')
								.css('outline', 'none')
								.addModule('idsave', id)
								.addModule('notes', idDiv)
								.css('box-shadow', '0 0 10px #222')
								.css('cursor', 'pointer')
								.css('font-size', '24px')
								.child(
									el('i').class('fa-solid fa-times')
								).click(function(){
									OpenScreen('page', function(screen){
										screen.child(
											postMenus()
										)
									})
								})
						)
						.child(
							btn()
								.css('position', 'fixed')
								.css('border-radius', '50%')
								.css('width', '45px')
								.css('height', '45px')
								.css('bottom', '20px')
								.css('right', '20px')
								.css('border', 'none')
								.css('outline', 'none')
								.addModule('idsave', id)
								.addModule('notes', idDiv)
								.css('box-shadow', '0 0 10px #222')
								.css('cursor', 'pointer')
								.css('font-size', '24px')
								.child(
									el('i').class('fa-solid fa-save')
								)
								.click(function(){
									var idloader = this.notes;
									GetApp('loader-'+idloader).flexCenter()
									var idsave = this.idsave;
									var notes = window.editorContain[this.notes].getData();
									dbread(this.idsave, function(a){
										var data = {
											code: btoa(JSON.stringify(a)),
											caption: notes
										}

										var uploadPost = {
											type : "update",
											table: 'postactivityadmin',
											token: localStorage.getItem('token'),
											data: data,
											conditionAnd: {
												id: idsave
											}
										}

										uploadPost = btoa(JSON.stringify(uploadPost))

										upload('https://indowebs.my.id/audit-dev/api.php?key=uploadapi', '', 'data.post', uploadPost,function(a){
											GetApp('loader-'+idloader).none()
										}, function(a){
											GetApp('loader-'+idloader).none()
										})


									})
								})
						)
						.child(
							el('div')
							.margin('10px')
							.border('1px dotted #ddd')
							.css('oveflow-x', 'hidden')
							.css('oveflow-y', 'scroll')
							.css('height', 'calc(50vh - 30px)')
							.class('editor').id('notes'+idDiv).load(function(editor){
								var id = editor.el.id;

								InlineEditor
								.create( document.querySelector( '.editor' ), {
									licenseKey: '',
								} )
								.then( editor => {
									if(window.editorContain == undefined){
										window.editorContain = {}
									}
									window.editorContain[idDiv] = editor;
									window.editorContain[idDiv].setData(caption);
								} )
								.catch( error => {
									console.error( 'Oops, something went wrong!' );
									console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
									console.warn( 'Build id: pzv07nhnfya6-oru18pcau0b4' );
									console.error( error );
								});

							})
						)
				)
			)
	)
}
