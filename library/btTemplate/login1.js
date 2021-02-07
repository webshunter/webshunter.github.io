import {div, img, h4, form, label, input, a} from '../domp.js';

export function login1(image, act, register){

    var reg = a().class('btn btn-light form-control').href('#').text('register')
    if (register != undefined) {
        reg[register.method](register.func)
    }
    var formLogin = div()
        .class('card card-primary').width('350px').display('inline-block')
        .css({
            boxShadow: "1px 1.5px 10px #777"
        })
        .child(
            div().align('center').child(
                img().src(image).width('250px').margin('0 auto')
            )
        )
        .child(
            h4().text('Autentication').align('center')
        )
        .child(
            form().class('card-body text-left').submit(act)
                .child(
                    div().class('form-group')
                        .child(
                            label().text('Username')
                        )
                        .child(
                            input().type('email').class('form-control').hold('Inputkan username')
                        )
                )
                .child(
                    div().class('form-group')
                        .child(
                            label().text('Username')
                        )
                        .child(
                            input().type('password').class('form-control').hold('Inputkan password')
                        )
                )
                .child(
                    div().class('form-group')
                        .child(
                            input().type('submit').class('btn btn-primary form-control').val('Login')
                        )
                )
                .child(
                    div().class('form-group')
                        .child(
                            reg
                        )
                )
        )
    return div().class('card-login').display('inline-block').bg('white').child(formLogin)
}
