import {h1, p, div, h5} from '../library/domp.js';
import { blue, image, white } from './setting.js';
var fieturDes = div()
    .child(
        h1().text("Feature").mt('80px')
    )
    .child(
        p().text("feature yang akan anda dapatkan disini adalah").mb('20px')
    )

var dataRowFitur = [
    { class: "col-sm-12 text-center", content: fieturDes }
]

var dataFitur = [
    {
        img: "banksoal.png",
        judul: "Bank Soal",
        content: "banyaknya bank soal yang bisa digunakan untuk latihan."
    },
    {
        img: "test.png",
        judul: "Pretest Utbk & pembahasan",
        content: "pretest dan pembahasan soal pretest."
    },
    {
        img: "mentor.png",
        judul: "Mentor yang baik",
        content: "mentor kompeten yang siap membantu anda."
    }
]

for (let i = 0; i < 3; i++) {
    dataRowFitur.push({
        class: "col-sm-4"
        , content: div()
            .class('card')
            .align('center')
            .child(
                div().bgImg(image + dataFitur[i].img)
                    .height('250px')
                    .bgSize('contain')
                    .bgRepeat('no-repeat')
                    .bgPosition('center')
            )
            .child(
                div().class('card-body')
                    .child(
                        div().align('center')
                            .child(
                                h5().text(dataFitur[i].judul)
                            )
                            .child(
                                p().text(dataFitur[i].content)
                            )
                    )
            )
    })
}

export const feature = div()
        .id('feature')
        .bgImg(image + 'bgfeature.png')
        .bgRepeat('no-repeat')
        .bgPosition('bottom')
        .child(
            div()
                .class('container').height('100vh')
                .row(dataRowFitur)
        )