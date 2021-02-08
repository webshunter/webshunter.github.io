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
                                                    p().text('Kami adalah jasa pembuatan website berpengalaman yang siap membuat website yang terbaik untuk anda. Selain itu kami juga menerima perbaikan website dan penambahan fitur.')
                                                )
                                            )
                                        },
                                    ], 'd-flex align-items-center')
                            )
                    )
            )
    )