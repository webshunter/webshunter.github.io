import {b3} from '../conf.js';
export const postinganCode = function(
		style= ` body {\n	background: white;\n} `,
		html = `<h1>Views</h1>\n<p>deskripsi</p>`, 
		script = 'console.log("load")'
	){
	var idDiv = Date.now();
	var codeplay = 'codeplay'+idDiv;
	globalThis.codeplayDataPost = {
		style: style,
		html: html,
		script: script
	};
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
					.setOption('mode', 'text/html')
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
					.setOption('mode', 'css')
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
					.setOption('mode', 'javascript')
				})
			)
			.child(
				div().child(
					el('textarea').id(codeplay).color('#333').css('display', 'none').load(function(e){
						console.log(e.el)
						var editor = CodeMirror.fromTextArea(e.el, {
						    lineNumbers: true,
						    mode: 'text/html'
					  	});
					  	editor['ideditor'] = idDiv;
					  	editor['post'] = 'codeplayDataPost';
					  	editor['active'] = 'html';
						editor.setOption('theme', 'ambiance');
						editor.getDoc().setValue(html);
						editor.setSize("100%", "calc(100vh - 34px)");
						e.el.editorcode = editor;
						editor.on('change', function(e){
							globalThis[e.post][globalThis.codeplayDataPostActive[e.ideditor]] = e.getValue()
							var f = globalThis['views-'+e.ideditor].parent;
							var win = f.contentWindow
							win.el = el;
							win.div = div;
							var doc = win.document;
							doc.head.innerHTML = '';
							doc.body.innerHTML = '';
							doc.head.appendChild(
								el('style').html(`
									@font-face {
									    font-family: 'Segoe-UI';
									    src: url('./segoe-font/Segoe-UI.ttf');
									}
									body{
										background: #fff;
									}
									*{
										font-family: "Segoe-UI" !important;
										margin: 0;
										padding: 0;
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
					.load(function(a){
						a.el.parentNode.style.height = (a.el.parentNode.clientHeight + 36)+'px';
						var win = a.el.contentWindow
						win.el = el;
						var doc = win.document
						a.el.document = win;
						doc.head.appendChild(
							el('style').html(`
								@font-face {
								    font-family: 'Segoe-UI';
								    src: url('./segoe-font/Segoe-UI.ttf');
								}
								body{
									background: #fff;
								}
								*{
									font-family: "Segoe-UI" !important;
									margin: 0;
									padding: 0;
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
									window.editorContain[idDiv].setData('type here to describe');
								} )
								.catch( error => {
									console.error( 'Oops, something went wrong!' );
									console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
									console.warn( 'Build id: pzv07nhnfya6-oru18pcau0b4' );
									console.error( error );
								} );

							})
						)
				)
			)
	)
}