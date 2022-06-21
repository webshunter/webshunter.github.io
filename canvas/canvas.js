import {card} from '../box.js'; // load card

export const newCanvas = function(func){
	return el('canvas')
	.load(function(e){
		var elCanvas = e.el;
		elCanvas.width = '100%';
		elCanvas.height = elCanvas.parentNode.clientHeight;
		func(elCanvas)
	})
	.resize(function(e){
		var elCanvas = e.el;
		elCanvas.width = '100%';
		elCanvas.height = elCanvas.parentNode.clientHeight;
	})
}

export const canvasDiv = function(h = 200, bg = 333, func){
	return card().css('background', '#'+bg).child(
				div().height(h+'px').child(
					newCanvas(function(element){
						if(func != undefined){
							func(element)
						}
					})
				)
			)
}
