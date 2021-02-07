import { btn, div, p, domp, a, h1, h3, input, img, h4, form, label } from '../library/domp.js';
import { blue, image, white } from './setting.js';
import {iconSosmed} from '../library/font/awesome.js'

var identyty = div()
.child(
    h3().text('U - utbk')
)
.child(
    p().text('Layanan pembelajaran online persiapan utbk dengan bank soal , pretest dan pembahasan soal serta mentor yang berpengalan siap membantu anda. ')
)

var feature = div()
    .child(
        h3().text('Feature')
    )
    .child(
        p().text('Bank Soal').margin('0').mb('5px')
    )
    .child(
        p().text('Pretest dan pembahasan').margin('0').mb('5px')
    )
    .child(
        p().text('Mentor Support').margin('0').mb('5px')
    )

var utbk = div()
    .child(
        h3().text('Menu')
    )
    .child(
        p().text('Home').margin('0').mb('5px')
    )
    .child(
        p().text('Feature').margin('0').mb('5px')
    )
    .child(
        p().text('About').margin('0').mb('5px')
    )

var sosmed = div()
    .child(
        h3().text('Sosmed')
    )
    .child(
        p().margin('0').mb('5px').child(
            iconSosmed('facebook').text(' Facebook').margin('0').mb('5px')
        )
    )
    .child(
        p().margin('0').mb('5px').child(
            iconSosmed('twitter').text(' Twitter').margin('0').mb('5px')
        )
    )
    .child(
        p().margin('0').mb('5px').child(
            iconSosmed('whatsapp').text(' Whatsapp').margin('0').mb('5px')
        )
    )

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