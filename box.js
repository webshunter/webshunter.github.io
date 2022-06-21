import {b3} from './conf.js';

export const card = function(){
	return div().padding('16px').radius('8px').margin('16px').background(b3)
}

export const darkCard = function(){
	return div()
	.css('min-height', '250px')
	.padding('16px').radius('8px').margin('16px').background(b3)
}

export const darkCardPostCode = function(
	title = 'Mengenal Javascript'
	, description = 'JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT. Berikut contoh kode javasript', 
	code = `var iam = 'javacript code'; \nconsole.log(iam) // result 'javascript code' `) {
	return div()
	.css('min-height', '250px')
	.gridColumn('50% auto')
	.load(function(a){
		console.log(a.el.clientWidth);
		if(a.el.clientWidth < 650){
			a.el.style.gridTemplateColumns = 'auto';
		}else{
			a.el.style.gridTemplateColumns = '50% auto';
		}
	})
	.resize(function(a){
		console.log(a.el.clientWidth);
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
		el('div').html(code).load(function(e){
			//load ace editor
			e.el.id = 'ace-'+Date.now();
			e.el.style.height = e.el.parentNode.clientHeight+'px'
			var editor = ace.edit(e.el.id);
			editor.setTheme("ace/theme/monokai");
			editor.getSession().setMode("ace/mode/javascript");
			editor.setReadOnly(true)
		})
	)	
}