import {div, h1, p, img} from '../library/domp.js';
import { blue, image, white } from './setting.js';

export const about = div().css('position', 'relative')
    .child(
        div().class('container')
            .align('center')
            .class('container').height('calc(100vh - 50px')
            .child(
                div()
                    .class('pick-galery')
                    .mt("100px")
                    .child(
                        div()
                            .class('card')
                            .child(
                                div().class('card-body')
                                    .row([
                                        { class: "col-sm-6", content: img().src(image + 'about.png').class('img-fluid') },
                                        {
                                            class: "col-sm-6", content: div().align('left')
                                            .css({
                                                display: 'flex',
                                                alignItems: 'center',
                                            })
                                            .child(
                                                div()
                                                .child(
                                                    h1().text('About')
                                                )
                                                .child(
                                                    p().text('U - utbk merupakan lembaga penyedia pelatihan soal persiapan utbk untuk siswa tingkat dasar dan menengah, dimana siswa akan di beri soal latihan secara electronik yang bisa dibuka kapan saja dan dimana saja, serta pretest dan pembahasannya')
                                                )
                                            )
                                        },
                                    ], 'd-flex align-items-center')
                            )
                    )
            )
    )