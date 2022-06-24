import {b3} from './conf.js?v=9';

export const card = function(){
	return div().padding('16px').radius('8px').margin('16px').background(b3)
}

export const darkCard = function(){
	return div()
	.css('min-height', '250px')
	.padding('16px').radius('8px').margin('16px').background(b3)
}

export const boxMenusDark = function(title = "Title Menus", description = 'deskripsi', func = null){
	return div()
	.css('text-align', 'center')
	.background("#21262d")
	.margin("10px")
	.padding("10px")
	.radius("10px")
	.cursor('pointer')
	.css('box-shadow', '0 0 10px #aaa')
	.child(
		el('img')
		.css('background', '#fff')
		.radius('50%')
		.css('display', 'inline-block')
		.src('./assets/code.png').width('50px')
	)
	.child(
		div()
		.css('font-size','24px')
		.text(title)
	)
	.child(
		div()
		.text(description)
	)
	.click(function(){
		if(func != null){
			func(this);
		}
	})
}

export const darkCardIframe = function(
		style= ` body {\n	background: white;\n} `,
		html = `<h1>Views</h1>\n<p>deskripsi</p>`, 
		script = 'console.log("load")'
	){
	var idDiv = Date.now();
	return div()
	.css('min-height', '250px')
	.padding('16px').radius('8px').margin('16px').background(b3)
	.child(
		btn().attr('data-code-p', idDiv).cursor('pointer').attr('data-'+idDiv, true).weight('bold').css('background', b3).color('#fff').css('outline', 'none').border('none').pd('8px 10px').text('view')
		.click(function(event){
			var sy = Array.from(document.querySelectorAll('[data-'+event.target.getAttribute('data-code-p')+']'));
			for(const so of sy){
				so.style.color = '#aaa';
			}
			event.target.style.color = '#fff';
			GetApp('views-'+idDiv).css('display', 'block')
			GetApp('script-'+idDiv).css('display', 'none')
			GetApp('html-'+idDiv).css('display', 'none')
			GetApp('style-'+idDiv).css('display', 'none')
		})
	)
	.child(
		btn().attr('data-code-p', idDiv).attr('data-'+idDiv, true).css('background', b3).color('#aaa').cursor('pointer').css('outline', 'none').border('none').pd('8px 10px').text('html')
		.click(function(event){
			var sy = Array.from(document.querySelectorAll('[data-'+event.target.getAttribute('data-code-p')+']'));
			for(const so of sy){
				so.style.color = '#aaa';
			}
			event.target.style.color = '#fff';
			GetApp('views-'+idDiv).css('display', 'none')
			GetApp('script-'+idDiv).css('display', 'none')
			GetApp('html-'+idDiv).css('display', 'block')
			GetApp('style-'+idDiv).css('display', 'none')
		})
	)
	.child(
		btn().attr('data-code-p', idDiv).attr('data-'+idDiv, true).css('background', b3).color('#aaa').cursor('pointer').css('outline', 'none').border('none').pd('8px 10px').text('css')
		.click(function(event){
			var sy = Array.from(document.querySelectorAll('[data-'+event.target.getAttribute('data-code-p')+']'));
			for(const so of sy){
				so.style.color = '#aaa';
			}
			event.target.style.color = '#fff';
			GetApp('views-'+idDiv).css('display', 'none')
			GetApp('script-'+idDiv).css('display', 'none')
			GetApp('html-'+idDiv).css('display', 'none')
			GetApp('style-'+idDiv).css('display', 'block')
		})
	)
	.child(
		btn().attr('data-code-p', idDiv).attr('data-'+idDiv, true).css('background', b3).color('#aaa').cursor('pointer').css('outline', 'none').border('none').pd('8px 10px').text('js')
		.click(function(event){
			var sy = Array.from(document.querySelectorAll('[data-'+event.target.getAttribute('data-code-p')+']'));
			for(const so of sy){
				so.style.color = '#aaa';
			}
			event.target.style.color = '#fff';
			GetApp('views-'+idDiv).css('display', 'none')
			GetApp('script-'+idDiv).css('display', 'block')
			GetApp('html-'+idDiv).css('display', 'none')
			GetApp('style-'+idDiv).css('display', 'none')
		})
	)
	.child(
		el('div').id('html-'+idDiv).css('display', 'none').load(function(e){
			//load ace editor
			e.el.id = 'ace-'+Date.now();
			e.el.style.height = e.el.parentNode.clientHeight+'px'
			var editor = ace.edit(e.el.id);
			editor.setTheme("ace/theme/monokai");
			editor.getSession().setMode("ace/mode/html");
			editor.setReadOnly(true);
			editor.setValue(html);
			editor.resize(true);
			editor.clearSelection();
			editor.setOptions({
			  fontFamily: "Fira Code",
			  fontSize: "12pt"
			});
		})
	)
	.child(
		el('div').id('script-'+idDiv).html(script).css('display', 'none').load(function(e){
			//load ace editor
			e.el.id = 'ace-'+Date.now();
			e.el.style.height = e.el.parentNode.clientHeight+'px'
			var editor = ace.edit(e.el.id);
			editor.setTheme("ace/theme/monokai");
			editor.getSession().setMode("ace/mode/javascript");
			editor.setReadOnly(true);
			editor.setValue(script);
			editor.clearSelection();
			editor.resize(true);
			editor.setOptions({
			  fontFamily: "Fira Code",
			  fontSize: "12pt"
			});
		})
	)
	.child(
		el('div').id('style-'+idDiv).html(style).css('display', 'none').load(function(e){
			//load ace editor
			e.el.id = 'ace-'+Date.now();
			e.el.style.height = e.el.parentNode.clientHeight+'px'
			var editor = ace.edit(e.el.id);
			editor.setTheme("ace/theme/monokai");
			editor.getSession().setMode("ace/mode/css");
			editor.setReadOnly(true);
			editor.setValue(style);
			editor.clearSelection();
			editor.resize(true);
			editor.setOptions({
			  fontFamily: "Fira Code",
			  fontSize: "12pt"
			});
		})
	)
	.child(
		el('iframe')
		.id('views-'+idDiv)
		.width('calc(100% - 4px)')
		.height('calc(100% - 36px)')
		.load(function(a){
			a.el.parentNode.style.height = (a.el.parentNode.clientHeight + 36)+'px';
			var win = a.el.contentWindow
			win.el = el;
			var doc = win.document
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
					el('script').html(script)
				).get())
		})
	)
}

export const darkCardPostCode = function(
	title = 'Mengenal Javascript'
	, description = 'JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT. Berikut contoh kode javasript', 
	code = `var iam = 'javacript code'; \nconsole.log(iam); // result 'javascript code'`, type = 'javascript') {
	return div()
	.css('min-height', '250px')
	.gridColumn('50% auto')
	.load(function(a){
		if(a.el.clientWidth < 650){
			a.el.style.gridTemplateColumns = 'auto';
		}else{
			a.el.style.gridTemplateColumns = '50% auto';
		}
	})
	.resize(function(a){
		if(a.el.clientWidth < 650){
			a.el.style.gridTemplateColumns = 'auto';
		}else{
			a.el.style.gridTemplateColumns = '50% auto';
		}
	})
	.padding('16px').radius('8px').margin('16px').background(b3)
	.child(
		div().child(
			h2().weight(500).text(title).margin(0).css('margin-bottom', '16px')
		)
		.child(
			div().child(
				div().css('overflow-x', 'hidden').weight(500).html(description).css('margin-bottom', '10px')
			)
		)
	)
	.child(
		el('textarea').load(function(e){
			var editor = CodeMirror.fromTextArea(e.el, {
			    lineNumbers: true,
			    mode: 'javascript',
			    readOnly: true
		  	});
		  	editor.setOption('theme', 'ambiance');
		  	editor.getDoc().setValue(code);
		})
	)	
}
