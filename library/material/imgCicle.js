import {div} from '../domp.js';
export function imgCicle(url, bg, width, height){
    var c = '250px';
    var d = '250px';
    if (width != undefined) {
        c = width;        
    }
    if (height != undefined) {
        d = height;
    }
    return div()
        .bg(bg)
        .bgImg(url)
        .width(c)
        .height(d)
        .bgSize('contain')
        .bgRepeat('no-repeat')
        .bgPosition('center')
        .radius('50%')
        .mb('20px')
}