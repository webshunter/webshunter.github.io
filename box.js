import {b3} from './conf.js';

export const card = function(){
	return div().padding('16px').radius('8px').margin('16px').background(b3)
}

export const darkCard = function(){
	return div()
	.css('min-height', '250px')
	.padding('16px').radius('8px').margin('16px').background(b3)
}