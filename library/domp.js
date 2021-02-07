
export function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}

export function el(el) {
    var obj = {}
    obj.el = document.createElement(el);
    obj.ch = [];
    obj.id = function (a) {
        this.el.id = a;
        return this;
    }
    obj.text = function (a) {
        this.el.innerText = a;
        return this;
    }
    obj.html = function (a) {
        this.el.innerHTML = a;
        return this;
    }
    obj.name = function (a) {
        this.el.setAttribute('name', a);
        return this;
    }
    obj.href = function (a) {
        this.el.setAttribute('href', a);
        return this;
    }
    obj.val = function (a) {
        this.el.value = a;
        return this;
    }
    obj.css = function (a, b) {
        if (typeof a == "object") {
            var ky = Object.keys(a);
            ky.forEach(function (item) {
                this.el.style[item] = a[item];
            }, this)
            return this;
        } else {
            this.el.style[a] = b;
            return this;
        }
    }
    obj.change = function (func) {
        this.el.addEventListener('change', func, false);
        return this;
    }
    obj.keydown = function (func) {
        this.el.addEventListener('keydown', func, false);
        return this;
    }
    obj.submit = function (func) {
        this.el.addEventListener('submit', func);
        return this;
    }
    obj.mouseover = function (func) {
        this.el.addEventListener('mouseover', func, false);
        return this;
    }
    obj.onresize = function (func) {
        var gopy = this;
        window.addEventListener('resize', function (e) {
            width = e.target.outerWidth;
            height = e.target.outerHeight;
            func(gopy.el, width, height);
        }, gopy)
        return gopy;
    }
    obj.onload = function (func) {
        var gopy = this;
        var width = window.outerWidth;
        var height = window.outerHeight;
        func(gopy.el, width, height);
        return gopy;
    }
    obj.mouseout = function (func) {
        this.el.addEventListener('mouseout', func, false);
        return this;
    }
    obj.keypress = function (func) {
        this.el.addEventListener('keypress', func, false);
        return this;
    }
    obj.click = function (func) {
        this.el.addEventListener('click', func, false);
        return this;
    }
    obj.keyup = function (func) {
        this.el.addEventListener('keyup', func, false);
        return this;
    }
    obj.src = function (a) {
        this.el.setAttribute('src', a);
        return this;
    }
    obj.required = function (a) {
        this.el.setAttribute('required', '');
        return this;
    }
    obj.action = function (a) {
        this.el.setAttribute('action', a);
        return this;
    }
    obj.rq = function (a) {
        this.el.setAttribute('required', '');
        return this;
    }
    obj.width = function (a) {
        this.el.style.width = a;
        return this;
    }
    obj.margin = function (a) {
        this.el.style.margin = a;
        return this;
    }
    obj.outline = function (a) {
        this.el.style.outline = a;
        return this;
    }
    obj.border = function (a) {
        this.el.style.border = a;
        return this;
    }
    obj.padding = function (a) {
        this.el.style.padding = a;
        return this;
    }
    obj.fixed = function () {
        this.el.style.position = "fixed";
        return this;
    }
    obj.radius = function (a) {
        this.el.style.borderRadius = a;
        return this;
    }
    obj.bottom = function (a) {
        this.el.style.bottom = a;
        return this;
    }
    obj.right = function (a) {
        this.el.style.right = a;
        return this;
    }
    obj.left = function (a) {
        this.el.style.left = a;
        return this;
    }
    obj.top = function (a) {
        this.el.style.top = a;
        return this;
    }
    obj.float = function (a) {
        this.el.style.float = a;
        return this;
    }
    obj.color = function (a) {
        this.el.style.color = a;
        return this;
    }
    obj.align = function (a) {
        this.el.style.textAlign = a;
        return this;
    }
    obj.bg = function (a) {
        this.el.style.background = a;
        return this;
    }
    obj.mt = function (a) {
        this.el.style.marginTop = a;
        return this;
    }
    obj.mb = function (a) {
        this.el.style.marginBottom = a;
        return this;
    }
    obj.ml = function (a) {
        this.el.style.marginLeft = a;
        return this;
    }
    obj.mr = function (a) {
        this.el.style.marginRight = a;
        return this;
    }
    obj.bgImg = function (a) {
        this.el.style.backgroundImage = "url(" + a + ")";
        return this;
    }
    obj.fontSize = function (a) {
        this.el.style.fontSize = a;
        return this;
    }
    obj.bgSize = function (a) {
        this.el.style.backgroundSize = a;
        return this;
    }
    obj.bgRepeat = function (a) {
        this.el.style.backgroundRepeat = a;
        return this;
    }
    obj.bgPosition = function (a) {
        this.el.style.backgroundPosition = a;
        return this;
    }
    obj.cursor = function (a) {
        this.el.style.cursor = a;
        return this;
    }
    obj.display = function (a) {
        this.el.style.display = a;
        return this;
    }
    obj.height = function (a) {
        this.el.style.height = a;
        return this;
    }
    obj.placeholder = function (a) {
        this.el.setAttribute('placeholder', a);
        return this;
    }
    obj.hold = function (a) {
        this.el.setAttribute('placeholder', a);
        return this;
    }
    obj.design = function () {
        this.el.setAttribute('contenteditable', true);
        return this;
    }
    obj.class = function (a) {
        if (this.el.className != "") {
            this.el.className += ' ' + a;
        } else {
            this.el.className += a;
        }
        return this;
    }
    obj.type = function (a) {
        this.el.setAttribute("type", a);
        return this;
    }
    obj.attr = function (a, d) {
        this.el.setAttribute(a, d);
        return this;
    }
    obj.data = function (a, d) {
        this.el.setAttribute('data-' + a, d);
        return this;
    }
    obj.aria = function (a, d) {
        this.el.setAttribute('aria-' + a, d);
        return this;
    }
    obj.get = function () {
        if (this.ch.length != 0) {
            this.ch.forEach(function (item) {
                this.el.appendChild(item)
            }, this)
            return this.el;
        } else {
            return this.el;
        }
    }
    obj.child = function (a) {
        this.ch.push(a.get());
        return this;
    }
    obj.row = function (a, b) {
        if (b == undefined) {
            b = '';
        }
        var d = div()
            .class('row '+ b)
        a.forEach(function (elm) {
            d.child(
                div().class(elm['class']).child(elm['content'])
            )
        }, d);
        this.ch.push(d.get());
        return this;
    }
    return obj;
}

export function tanggal(a) {
    var newDate = new Date();
    if (a != undefined) {
        if (a === "gugus") {
            newDate = new Date(helper.sesiGet('tahun') + '-' + helper.sesiGet('bulan'));
        } else {
            newDate = new Date(a);
        }
    }

    var namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    var namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum`at', 'Sabtu'];

    function buat(newDate) {
        var year = newDate.getFullYear();
        var month = (newDate.getMonth() + 1) + '';
        var day = (newDate.getDate()) + '';
        var format = '00';
        var ansMonth = format.substring(0, format.length - month.length) + month;
        var ansDay = format.substring(0, format.length - day.length) + day;
        var dayKnow = ansDay + '-' + ansMonth + '-' + year;
        if (a == null) {
            return "";
        } else {
            return dayKnow;
        }
    }

    function buatN(newDate) {
        var year = newDate.getFullYear();
        var month = newDate.getMonth();
        var day = (newDate.getDate()) + '';
        var format = '00';
        var ansMonth = namaBulan[month];
        var ansDay = format.substring(0, format.length - day.length) + day;
        var dayKnow = ansDay + ' ' + ansMonth + ' ' + year;
        if (a == null) {
            return "";
        } else {
            return dayKnow;
        }
    }

    function buatO(newDate) {
        var year = newDate.getFullYear();
        var month = (newDate.getMonth() + 1) + '';
        var day = (newDate.getDate()) + '';
        var format = '00';
        var ansMonth = format.substring(0, format.length - month.length) + month;
        var ansDay = format.substring(0, format.length - day.length) + day;
        var dayKnow = year + '-' + ansMonth + '-' + ansDay;
        return {
            full: dayKnow,
            day: newDate.getDay()
        };
    }

    function buatNum(newDate) {
        var year = newDate.getFullYear();
        var month = (newDate.getMonth() + 1) + '';
        var day = (newDate.getDate()) + '';
        var format = '00';
        var ansMonth = format.substring(0, format.length - month.length) + month;
        var ansDay = format.substring(0, format.length - day.length) + day;
        var dayKnow = year + ansMonth + ansDay;
        return Number(dayKnow);
    }

    function buatC(newDate) {
        var year = newDate.getFullYear();
        var month = newDate.getMonth();
        var day = newDate.getDate();
        var dateK = new Date(year, month, day);
        return dateK;
    }
    var date = new Date(),
        y = date.getFullYear(),
        m = date.getMonth();
    var firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
    var lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0)
    var returnData = {
        normal: buatO(newDate).full,
        cek1: buatC(newDate),
        sekarang: buat(newDate),
        sekarang2: buatN(newDate),
        cek2: buatC(firstDay),
        normal2: buatO(firstDay).full,
        awal: buat(firstDay),
        awal2: buatN(firstDay),
        akhir: buat(lastDay),
        akhir2: buatN(lastDay),
        cek3: buatC(lastDay),
        normal3: buatO(lastDay).full,
        angka: buatNum(newDate),
        dayn: namaHari[buatO(newDate).day],
        day: buatO(newDate).day,
        day2n: namaHari[buatO(firstDay).day],
        day2: buatO(firstDay).day,
        day3n: namaHari[buatO(lastDay).day],
        day3: buatO(lastDay).day
    }
    return returnData;
}

export function a() {
    return el('a')
}

export function img() {
    return el('img');
}
export function label() {
    return el('label')
}
export function br() {
    return el('BR')
}

export function div() {
    return el('div');
}
export function p() {
    return el('p');
}
export function line() {
    return el('hr')
        .css("padding", "0")
        .css("margin", "0")
}
export function h1() {
    return el('h1').css("font-family", "baloo");
}
export function h2() {
    return el('h2').css("fontFamily", "arima");
}
export function h3() {
    return el('h3');
}
export function h4() {
    return el('h4');
}
export function h5() {
    return el('h5');
}
export function h6() {
    return el('h6');
}
export function input() {
    return el('input');
}
export function btn() {
    return el('button');
}
export function tbl() {
    return el('TABLE');
}
export function tr() {
    return el('TR');
}
export function nav() {
    return el('nav');
}
export function td() {
    return el('TD');
}
export function th() {
    return el('TH');
}
export function thead() {
    return el('THEAD');
}
export function tbody() {
    return el('TBODY');
}
export function form() {
    return el('FORM');
}
export function ul() {
    return el('ul');
}
export function li() {
    return el('li');
}
export function option() {
    return el('option');
}
export function textarea() {
    return el('textarea');
}

// bootstrap element select
export function btSelect(text, name, el, act) {
    var a = select().name(name).class('form-control')
        .id(name)
        .child(
            option().val('').text('pilih data')
        )
    if (act != undefined) {
        Object.keys(act).forEach(function (eld) {
            a[eld](act[eld]);
        }, a)
    }
    if (el != undefined) {
        el.forEach(function (item) {
            a.child(
                option().val(item.value).text(item.name)
            )
        }, a)
    }
    var b = div()
        .class('form-group')
        .child(
            label().text(text)
        )
        .child(
            a
        )
    return b;
}

export function select() {
    return el('select');
}
export function span() {
    return el('span');
}
export function i() {
    return el('i');
}
export function video() {
    return el('video');
}
export function canvas() {
    return el('canvas');
}
export function icon(a) {
    return i().class(a)
        .css('cursor', 'pointer')
        .css('fontSize', '30px')
        .css('marginRight', '10px')
        .css('marginLeft', '10px')
        .css('transition', '0.5s')
}

export function domp(a, ch) {
    var domp = document.getElementById(a);
    if (domp != null) {
        var parent = domp.parentNode;
        parent.replaceChild(ch.get(), domp);
    } else {
        domp.appendChild(ch.get());
    }
}

export function dom(a, ch) {
    var domp = a;
    domp.appendChild(ch.get());
}

export function prop(name, child, value) {
    if (value != undefined && child != undefined) {
        globalThis[name][child] = value
    } else {
        if (value != undefined) {
            return globalThis[name][child]
        } else {
            return globalThis[name]
        }
    }
}