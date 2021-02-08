import { div, a, span, img, ol, li } from '../domp.js';
import { uuid } from '../uuid.js';


export function btCarousel(arr, indicator) {
    var id = uuid();
    var crdata = div().class('carousel-inner');
    var example = [];
    if (arr != undefined) {
        example = arr;
    } else {
        example = [
            { src: "https://i2.wp.com/qomaruna.com/wp-content/uploads/2019/12/flyer-business-template-cover-brochure-corporate_45327-729-e1577287302492.jpg?fit=626%2C347&ssl=1", alt: "Slider 1" },
            { src: "https://i2.wp.com/qomaruna.com/wp-content/uploads/2019/12/flyer-business-template-cover-brochure-corporate_45327-729-e1577287302492.jpg?fit=626%2C347&ssl=1", alt: "Slider 2" },
            { src: "https://i2.wp.com/qomaruna.com/wp-content/uploads/2019/12/flyer-business-template-cover-brochure-corporate_45327-729-e1577287302492.jpg?fit=626%2C347&ssl=1", alt: "Slider 3" },
            { src: "https://i2.wp.com/qomaruna.com/wp-content/uploads/2019/12/flyer-business-template-cover-brochure-corporate_45327-729-e1577287302492.jpg?fit=626%2C347&ssl=1", alt: "Slider 4" },
        ]
    }

    var idcr = ol()
        .class('carousel-indicators')

    function clickdefault(eve) {
        eve.preventDefault()
    }

    example.forEach(function (element, i) {
        if (i == 0) {
            crdata.child(
                div().class('carousel-item active')
                    .child(
                        img().class('d-block w-100').src(element.src).attr('alt', element.alt)
                    )
            )

            idcr.child(
                li().class('active').data('target', '#' + id).data('slide', i)
            )

        } else {
            crdata.child(
                div().class('carousel-item')
                    .child(
                        img().class('d-block w-100').src(element.src).attr('alt', element.alt)
                    )
            )

            idcr.child(
                li().data('target', '#' + id).data('slide', i)
            )
        }
    }, crdata);

    function opencorousel() {
        $(document).ready(function () {
            $('.carousel').carousel()
        })
    }

    var dd = div().id(id).class('carousel slide').data('ride', 'carousel').onload(opencorousel)
    if (indicator == true) {
        dd.child(
            idcr
        )
    }
    dd.child(
        crdata
    )
    dd.child(
        a().class('carousel-control-prev').href('#' + id).attr('role', 'button').data('slide', 'prev')
            .child(
                span().class('carousel-control-prev-icon').aria('hidden', 'true')
            )
            .child(
                span().class('sr-only').text('Previous')
            ).click(clickdefault)
    )
    dd.child(
        a().class('carousel-control-next').href('#' + id).attr('role', 'button').data('slide', 'next')
            .child(
                span().class('carousel-control-next-icon').aria('hidden', 'true')
            )
            .child(
                span().class('sr-only').text('Next')
            ).click(clickdefault)
    )

    return dd;
}
