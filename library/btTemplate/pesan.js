import { div, h5, i, textarea, input, btn, dom, form, br} from '../domp.js';
import {icon} from '../font/awesome.js';
var user = "Webshunter";
var login = false;

export function openmessage() {
    document.getElementById('message').style.height = "600px";
    document.getElementById('message').style.width = "360px";
    document.getElementById('message').style.opacity = "1";

}

export function closemessage() {
    document.getElementById('message').style.height = "0";
    document.getElementById('message').style.width = "0";
    document.getElementById('message').style.opacity = "0";
}

export function loadMessage(el) {
    var pesan = div()
        .id('scroll')
        .padding('10px')
        .css({
            "max-height": "480px",
            "border-radius": "10px",
            "overflow-y": "auto",
        })
    for (let y = 0; y < 10; y++) {
        pesan.child(
            div()
                .css({
                    display: 'inline-block',
                    width: '40px',
                    maxWidth: '40px',
                    height: '40px',
                    maxHeight: '40px',
                    marginRight: '10px',
                    background: 'lightblue',
                    fontSize: '12px',
                    borderRadius: '50%'
                })
        )
        pesan.child(
            div()
                .css({
                    display: 'inline-block',
                    width: '200px',
                    padding: '10px 20px',
                    marginBottom: '20px',
                    background: 'lightblue',
                    fontSize: '12px',
                    borderBottomRightRadius: '20px',
                    borderTopRightRadius: '20px',
                    borderTopLeftRadius: '20px',
                })
                .text('Selamat datang di marketplce silahkan chat customer')
        )
        pesan.child(
            div()
                .css({
                    width: '200px',
                    padding: '10px 20px',
                    float: 'right',
                    marginBottom: '20px',
                    background: '#81d4fa',
                    fontSize: '12px',
                    borderBottomLeftRadius: '20px',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                })
                .text('Selamat datang di marketplce silahkan chat customer')
        )
        pesan.child(
            div().css({
                'clear': "both"
            })
        )
    }

    dom(el, pesan)
}

export const messageButton = btn().class('btn btn-success').css({
    position: "fixed",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: "20px",
    right: "20px",
    background: "20px",
    background: "#2196f3!important",
    boxShadow: "1px 1.5px 10px #333",
}).click(openmessage).child(
    icon('comment-alt').fontSize('30px')
)

export const message = div()
    .id('message')
    .bg("#2196f3")
    .css({
        'position': "fixed",
        "width": '0',
        "height": '0',
        "opacity": '0',
        // "width": '360px',
        // "height": '600px',
        "opacity": '0',
        "right": "18px",
        "bottom": "18px",
        "border-radius": "10px",
        "box-shadow": "0 0 10px #333",
        "overflow": "hidden",
        "transition": "0.5s",
    })

message.child(
    div()
        .padding("10px")
        .align("left")
        .color("white")
        .child(
            icon('times').css('float', 'right').cursor('pointer').fontSize('20px').click(closemessage)
        )
        .child(
            h5()
                .padding('0')
                .margin('0')
                .text(user)
        )
        .child(
            div().css('clear', 'both')
        )
)
if (login != false) {
    message.child(
        div()
            .padding('10px')
            .child(
                div()
                    .id('pesans')
                    .height('480px')
                    .css({
                        "max-height": "480px",
                        "border-radius": "10px",
                        "scroll-y": "auto",
                    })
                    .bg('#fff')
                    .onload(loadMessage)
            )
    )
        .child(
            div().css({
                'clear': 'both'
            })
        );
    message.child(
        div()
            .class('row')
            .child(
                div()
                    .class("col s9")
                    .child(
                        textarea()
                            .id('pesan')
                            .bg('#fff')
                            .css({
                                "border-radius": '10px',
                                "border": 'none',
                                "outline": 'none',
                                "padding": '10px',
                                "font-size": '12px',
                            })
                            .height("37px")
                            .hold("inputkan pesan ... ")
                    )
            )
            .child(
                div()
                    .class("col s3")
                    .child(
                        btn()
                            .class('btn cyan lighten-5')
                            .color("#777")
                            .text('send')
                    )
            )
    )
} else {
    message.child(
        div()
            .css('margin-top', '100px')
            .align('center')
            .color('#fff')
            .child(
                h5().text("Please Login")
            )
            .child(
                form()
                    .child(
                        input()
                            .rq()
                            .css({
                                outline: 'none',
                                border: 'none',
                                background: '#fff',
                                width: '220px',
                                borderRadius: '20px',
                                display: 'inline-block',
                            })
                            .hold('inputkan username')
                            .padding('8px 12px')
                            .align('center')
                            .margin('10px 0')
                    )
                    .child(
                        input()
                            .rq()
                            .type('password')
                            .css({
                                outline: 'none',
                                border: 'none',
                                background: '#fff',
                                width: '220px',
                                display: 'inline-block',
                                borderRadius: '20px',
                            })
                            .hold('inputkan username')
                            .padding('8px 12px')
                            .align('center')
                            .margin('10px 0')
                    )
                    .child(
                        br()
                    )
                    .child(
                        btn()
                            .class('btn btn-large')
                            .text('login')
                            .bg('#fff')
                            .color('#333')
                            .width("220px")
                            .margin("10px 0 0 0 ")
                            .css('border-radius', '20px')
                            .css('font-weight', 'bold')
                    )
                    .child(
                        div()
                            .margin('20px')
                            .align('center')
                            .text('jika kamu belum mempunyai akun silahkan ')
                            .child(
                                btn()
                                    .class('btn')
                                    .color('#333')
                                    .bg('#fff')
                                    .css({
                                        marginTop: '10px',
                                        borderRadius: '5px'
                                    })
                                    .text('sign up')
                            )
                    )
            )
    )
}
