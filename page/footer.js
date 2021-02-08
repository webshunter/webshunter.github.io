import { btn, div, p, domp, a, h1, h3, input, img, h4, form, label } from '../library/domp.js';
import { blue, image, white, headText, titleHead, jasaKami, sosmed as sos, navData } from './setting.js';
import {iconSosmed} from '../library/font/awesome.js'

var identyty = div()
.child(
    h3().text(titleHead)
)
.child(
    p().text(headText)
)

var feature = div()
    .child(
        h3().text('Jasa Kami')
    )
jasaKami.forEach(function(element){
    feature.child(
            p().text(element.title).margin('0').mb('5px')
    )
},feature)

var utbk = div()
    .child(
        h3().text('Menu')
    )
    navData.forEach(function (element, i) {
        utbk.child(
            p().text(element.title).margin('0').mb('5px')
        )
    }, sosmed);


var sosmed = div()
    .child(
        h3().text('Sosmed')
    )
    sos.forEach(function(element, i){
        sosmed.child(
            a().display('block').color(white).margin('0').mb('5px').href(element.link).child(
                iconSosmed(element.icon).text(' '+element.nama).margin('0').mb('5px')
            )
        )
    },sosmed);

export const footer = div()
    .child(
        div()
        .bg('#47465aff')
        .color(white)
        .padding('20px 0')
        .child(
            div().class('container')
            .row([
                { class: "col-sm-3", content: identyty},
                { class: "col-sm-3", content: feature},
                { class: "col-sm-3", content: utbk},
                { class: "col-sm-3", content: sosmed},
            ])
        )
    )
    .child(
        div().padding('10px').bg('#333').color(white).align('center')
        .html('&copy; Copyright by Webshunter')
    )