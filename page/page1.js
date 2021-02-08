import { btn, div, p, domp, a, h1, input, img, h4, form, label, h3,h5 } from '../library/domp.js';
import { blue, image, white, headText, titleHead, jasaKami, headImage, navData } from './setting.js';
import { btNavbar } from '../library/bt4/btNavbar.js';
import { login1 } from '../library/btTemplate/login1.js';
import { imgCicle } from '../library/material/imgCicle.js';
import { feature } from './feature.js';
import { messageButton, message } from '../library/btTemplate/pesan.js';
import { about } from './about.js';
import { footer } from './footer.js';
import { btCarousel } from '../library/bt4/btCaurosel.js';
// -------------------------------------------------------------------------------//

var lding = div()

lding.child(
    btNavbar('Webshunter', 'navbar navbar-expand-lg navbar-dark bg-primary', navData)
)
// area head

var contantH1 = div()
    .color(white)
    .child(
        h1().text(titleHead)
    )
    .child(
        p().text(headText)
    )
    .child(
        input()
            .type('email')
            .radius('10px')
            .hold('masukkan email anda')
            .padding('8px 16px')
            .border('0')
            .outline('0')
    )
    .child(
        btn().class('btn btn-default').text('Subscribe').ml('10px').click(subscripbe)
    )

function subscripbe() {
    alert('ok')
}

function register() {
    alert('ok')
}

var iconHead = div()
    .child(
        img().src(headImage).class('img-fluid')
    )

lding
    .child(
        div().class('jumbotron')
            .bg(blue)
            .height('calc(100vh - 50px)').margin('0').radius('0')
            .child(
                div().class('container').padding('20px 0 0 0')
                    .row([
                        { class: 'col-sm-6', content: iconHead },
                        { class: 'col-sm-6', content: contantH1 },
                    ], 'd-flex align-items-center')
            )
    )




var jasakamid = div().class('row')

jasaKami.forEach(function(element){
    jasakamid.child(
        div().class('col-sm-4')
        .child(
            div().class('card')
            .child(
                div().class('card-body')
                .child(
                    img().class('img-fluid').src(element.gambar)
                )
                .child(
                    h4().class('text-center').text(element.title)
                )
                .child(
                    p().class('text-center').text(element.deskripsi)
                )
            )
        )
    )
}, jasakamid)


var jasakami = div()
.class('container')
.minHeight('100vh')
.child(
    div().class('text-center').child(
        h1().text("Jasa Kami")
    )
    .mt('50px')
    .mb('80px')
)
.child(
    jasakamid
)

lding.child(
    div().id('jasakami').height('0')
)

lding.child(
    jasakami
)


lding.child(
    div().css('position', 'relative')
        .id('about').height('0')
)

lding.child(
    about
)

// lding.child(
//     btCarousel([
//         { src: "https://i2.wp.com/qomaruna.com/wp-content/uploads/2019/12/flyer-business-template-cover-brochure-corporate_45327-729-e1577287302492.jpg?fit=626%2C347&ssl=1", alt: "Slider 1" },
//         { src: "https://i2.wp.com/qomaruna.com/wp-content/uploads/2019/12/flyer-business-template-cover-brochure-corporate_45327-729-e1577287302492.jpg?fit=626%2C347&ssl=1", alt: "Slider 2" },
//         { src: "https://i2.wp.com/qomaruna.com/wp-content/uploads/2019/12/flyer-business-template-cover-brochure-corporate_45327-729-e1577287302492.jpg?fit=626%2C347&ssl=1", alt: "Slider 3" },
//         { src: "https://i2.wp.com/qomaruna.com/wp-content/uploads/2019/12/flyer-business-template-cover-brochure-corporate_45327-729-e1577287302492.jpg?fit=626%2C347&ssl=1", alt: "Slider 4" },
//     ], true)
// )

lding.child(
    footer
)

lding.child(
    messageButton
)

lding.child(
    message
)

export function load() {
    domp('root', lding)
}