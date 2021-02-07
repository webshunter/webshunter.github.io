function createInput(head, type, name, hold, event) {
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

function formCreate(id, a) {
    var ff = form().id(id);
    globalThis[id] = {}
    a.component.forEach(function (item, i) {
        globalThis[id][item.name] = '';
        ff.child(
            div().child(
                createInput(item.head, item.type, item.name, item.hold, a.event)
            )
        )

    }, ff)
    a.buttonEvent.forEach(function (eve) {
        ff.child(
            btn().type('button').class('btn btn-' + eve.class).text(eve.head)
                .margin('0 10px')
            [eve.method](eve.func)
        )
    }, ff)
    return ff;
}

function clearform(name) {
    Object.keys(globalThis[name]).forEach(function (elm) {
        var mos = document.querySelector('form#' + name + ' [name=' + elm + ']')
        mos.value = '';
    })
}

function nextForm() {
    prop("pasien", this.getAttribute('name'), this.value);
}
function simpan() {
    console.log(prop('pasien'));
    clearform('pasien')
}
function update() {
}
function Delete() {
}

var blue = "#007bffff";

var white = "#f7fcffff";

var image = "./img/";

grid = div()

var form1 = formCreate('pasien', {
    component: [
        { head: "nama", type: "text", name: "nama", hold: "inputkan nama" },
        { head: "alamat", type: "text", name: "alamat", hold: "inputkan alamat" },
        { head: "email", type: "email", name: "email", hold: "inputkan email" },
        { head: "telp", type: "number", name: "telp", hold: "inputkan telp" },
    ],
    event: [
        { name: "nama", method: 'keyup', func: nextForm },
        { name: "alamat", method: 'keyup', func: nextForm },
        { name: "email", method: 'keyup', func: nextForm },
        { name: "telp", method: 'keyup', func: nextForm },
    ],
    buttonEvent: [
        { head: "simpan", method: 'click', func: simpan, class: 'primary' },
        { head: "delete", method: 'click', func: Delete, class: 'danger' },
        { head: "update", method: 'click', func: update, class: 'warning' },
    ]
})


grid.row([
    { class: "col-sm-6 col-md-6 col-lg-4", content: form1 },
    { class: "col-sm-6 col-md-6 col-lg-8", content: div().text('element') },
])

var lding = div()

    var navMenu = ul().class('navbar-nav')
    .child(
        li().class('nav-item').child(
            a().class('nav-link active').href('#').text('home')
        )
    )
    .child(
        li().class('nav-item').child(
            a().class('nav-link active').href('#feature').text('feature')
        )
    )
    .child(
        li().class('nav-item').child(
            a().class('nav-link active').href('#about').text('about')
        )
    )
    .child(
        li().class('nav-item').child(
            a().class('nav-link active').href('#').text('login')
        )
    )
    .child(
        li().class('nav-item').child(
            a().class('nav-link').href('#').text('register')
        )
    )

lding.child(
    nav()
    .class('navbar navbar-expand-lg navbar-dark bg-primary').padding('8px 10vw')
    .child(
        a().class('navbar-brand').href('#').text('U - utbk')
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
)

// area head

var contantH1 = div()
.color(white)
.child(
    div()
    .bg(white)
    .bgImg(image+'learn.png')
    .width('250px')
    .height('250px')
    .bgSize('contain')
    .bgRepeat('no-repeat')
    .bgPosition('center')
    .radius('50%')
    .mb('20px')
)
.child(
    h1().text('U - Utbk')
)
.child(
    p().text('Persiapkan diri anda untuk utbk bersama kami')
)
.child(
    input().radius('10px')
    .hold('masukkan email anda')
    .padding('8px 16px')
    .border('0')
    .outline('0')
)
.child(
    btn().class('btn btn-default').text('Subscribe').ml('10px')
)

var formLogin = div()
.class('card card-primary').width('350px').display('inline-block')
.css({
    boxShadow: "1px 1.5px 10px #777"
})
.child(
    div().align('center').child(
        img().src(image+'auth.png').width('250px').margin('0 auto')
    )
)
.child(
    h4().text('Autentication').align('center')
)
.child(
    form().class('card-body text-left')
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
            a().class('btn btn-light form-control').href('#').text('register')
        )
    )
)

lding
.child(
    div().class('jumbotron').bg(white).bgImg(image+'prizm.png').height('calc(100vh - 50px)').margin('0').radius('0')
    .child(
        div().class('container')
        .row([
            { class: 'col-sm-6', content: contantH1},
            { class: 'col-sm-6 text-center', content: div().class('card-login').display('inline-block').bg('white').child(formLogin)}
        ])
    )
)

// area feature

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
    dataRowFitur.push({ class: "col-sm-4"
    ,content: div()
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

lding.child(
    div()
    .id('feature')
    .bgImg(image + 'bgfeature.png')
    .bgRepeat('no-repeat')
    .bgPosition('bottom')
    .child(
        div()
        .class('container').height('100vh')
        .row(dataRowFitur)
    )
)

// about


lding.child(
    div().css('position', 'relative')
    .id('about').height('0')
)
lding.child(
    div().css('position', 'relative')
    .child(
        div().class('container')
        .align('center')
        .class('container').height('calc(100vh - 50px')
        .child(
            h1().mt('50px').text("About").display('block')
        )
        .child(
            div()
            .class('pick-galery')
            .mt("50px")
            .child(
                div()
                .class('card')
                .child(
                    div().class('card-body')
                    .row([
                        {class: "col-sm-6", content: img().src(image+'about.png').class('img-fluid')},
                        {class: "col-sm-6", content: div().align('left').child(
                            p().text('U - utbk merupakan lembaga penyedia pelatihan soal persiapan utbk untuk siswa tingkat dasar dan menengah, dimana siswa akan di beri soal latihan secara electronik yang bisa dibuka kapan saja dan dimana saja, serta pretest dan pembahasannya' )
                        )},
                    ])
                )
            )
        )
    )
)

domp('root', lding)