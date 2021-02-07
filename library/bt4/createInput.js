import {input, div, label} from '../domp.js';

export function createInput(head, type, name, hold, event) {
    var filterName = undefined;
    if (event != undefined) {
        filterName = event.filter(function (fill) {
            if (fill.name == name) {
                return fill
            }
        });
        if (filterName.length != 0) {
            filterName = filterName[0]
        } else {
            filterName = undefined;
        }
    }
    var inp = input()
        .class('form-control')
        .type(type)
        .name(name)
        .hold(hold)
        .val('')

    if (filterName != undefined) {
        inp[filterName.method](filterName.func)
    }
    var inpt = div()
        .padding('10px')
        .css({
            display: "grid",
            "grid-template-columns": "100px auto",
        })
        .child(
            div()
                .child(
                    label().text(head).margin('0 ')
                )
        )
        .child(
            div()
                .child(
                    inp
                )
        )
    return inpt;
}