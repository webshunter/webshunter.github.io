import {btn, div, p, domp, a, h1, input, img, h4, form, label} from '../library/domp.js';
import {blue, image, white} from './setting.js';
import {btNavbar} from '../library/bt4/btNavbar.js';
import {login1} from '../library/btTemplate/login1.js';
import {imgCicle} from '../library/material/imgCicle.js';
import {feature} from './feature.js';
import { messageButton, message} from '../library/btTemplate/pesan.js';
import {about} from './about.js';
import {footer} from './footer.js';
// -------------------------------------------------------------------------------//

var lding = div()

var img1 = image + 'auth.png'
var img2 = image + 'learn.png'

lding.child(
    btNavbar('U - utbk', 'navbar navbar-expand-lg navbar-dark bg-primary', [
        {title: 'Home'},
        {title: 'Feature', link: "#feature"},
        {title: 'About', link: "#about"},
        {title: 'Login', link: "#"},
        {title: 'Register', link: "#"},
    ])
)
// area head

var contantH1 = div()
    .color(white)
    .child(
        imgCicle(img2, white)
    )
    .child(
        h1().text('U - Utbk')
    )
    .child(
        p().text('Persiapkan diri anda untuk utbk bersama kami')
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

function subscripbe(){
    alert('ok')
}

function register(){
    alert('ok')
}

lding
    .child(
        div().class('jumbotron').bg(white).bgImg(image + 'prizm.png').height('calc(100vh - 50px)').margin('0').radius('0')
            .child(
                div().class('container')
                    .row([
                        { class: 'col-sm-6', content: contantH1 },
                        { class: 'col-sm-6 text-center', content: login1(img1, function(el){
                            console.log(el);
                            el.preventDefault()
                        }, {method: 'click', func: register}) }
                    ])
            )
    )

lding.child(feature)

lding.child(
    div().css('position', 'relative')
        .id('about').height('0')
)

lding.child(
    about   
)

lding.child(
    footer   
)

lding.child(
    messageButton
)

lding.child(
    message
)

export function load(){
    domp('root', lding)
}