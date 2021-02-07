import {ul, li, a, btn, nav, div, span} from '../domp.js';


export function btNavbar(logo, sty, arr){
    var navMenu = ul().class('navbar-nav')
    arr.forEach(element => {
        var c = a().class('nav-link active').href('#').text(element.title)
        if (element.link  != undefined) {
            c.href(element.link)
        }
        if (element.method != undefined){
            c[element.method](element.func)
        }
        navMenu.child(
            li().class('nav-item').child(
                c
            )
        )
    }, navMenu);

    return nav()
        .class(sty).padding('8px 10vw')
        .child(
            a().class('navbar-brand').href('#').text(logo)
        )
        .child(
            btn().class('navbar-toggler').type('button')
                .data('toggle', 'collapse')
                .data('target', '#navbarNav')
                .aria('controls', 'navbarNav')
                .aria('expanded', 'false')
                .aria('label', 'Toggle navigation')
                .child(
                    span().class('navbar-toggler-icon')
                )
        )
        .child(
            div().class('collapse navbar-collapse justify-content-end').id("navbarNav")
                .child(navMenu)
        )
}


