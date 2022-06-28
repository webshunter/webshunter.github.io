
function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}


const AppObj = {}

const el = function(el) {
    var obj = {}
    if (typeof el == 'object') {
        obj.el = el;
        obj.el.style.userSelect = 'none';
    } else {
        obj.el = document.createElement(el);
        obj.el.style.userSelect = 'none';
    }
    obj.ch = [];
    obj.id = function (a) {
        this.el.id = a;
        AppObj[a] = {
            parent: this.el,
            el: globalThis.el(this.el),
            child: function (a) {
                return this.parent.appendChild(a.get())
            }
        }
        globalThis[a] = {
            parent: this.el,
            el: globalThis.el(this.el),
            child: function (a) {
                return this.parent.appendChild(a.get())
            }
        }
        return this;
    }
    obj.text = function (a) {
      if(a != undefined){
        this.el.innerText = a;
        return this;
      }else{
        return { val: this.el.innerText, el:this}
      }
    }
    obj.html = function (a) {
      if(a != undefined){
        this.el.innerHTML = a;
        return this;
      }else{
        return {
          val: this.el.innerHTML,
          el: this
        }
      }
    }
    obj.name = function (a) {
        this.el.setAttribute('name', a);
        return this;
    }
    obj.href = function (a) {
        this.el.setAttribute('href', a);
        return this;
    }
    obj.rel = function (a) {
        this.el.setAttribute('rel', a);
        return this;
    }
    obj.val = function (a) {
        if(a != undefined){
          this.el.value = a;
          return this;
        }else{
          return {
            val: this.el.value,
            el: this
          }
        }
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

    // event action

    obj.change = function (func) {
        this.el.addEventListener('change', func, false);
        return this;
    }
    obj.keydown = function (func) {
        this.el.addEventListener('keydown', func, false);
        return this;
    }
    obj.mouseover = function (func) {
        this.el.addEventListener('mouseover', func, false);
        return this;
    }
    obj.resize = function (func) {
        var gopy = this;
        window.addEventListener('resize', function (e) {
            width = e.target.outerWidth;
            height = e.target.outerHeight;
            var elm = {
                el: gopy.el,
                width: width,
                height: height
            }
            setTimeout(function () {
                func(elm);
            }, 100)
        }, gopy)
        return gopy;
    }
    obj.load = function (func) {
        var gopy = this;
        var width = window.outerWidth;
        var height = window.outerHeight;
        var elm = {
            el: gopy.el,
            width: width,
            height: height
        }
        setTimeout(function () {
            func(elm);
        })
        return gopy;
    }
    obj.addModule = function (name, func){
      this.el[name] = func;
      return this;
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
    obj.submit = function (func) {
        this.el.addEventListener('submit', function (e) {
            el = e.path[0];

            el = new FormData(el);

            var object = {};
            el.forEach(function (value, key) {
                object[key] = value;
            });
            var json = object;

            func(json)

            e.preventDefault();
        }, false);
        return this;
    }
    // event end
    obj.event = function (a, func) {
        this.el.addEventListener(a, func, false);
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
    obj.required = function (a) {
        this.el.setAttribute('required', '');
        return this;
    }
    obj.width = function (a) {
        this.el.style.width = a;
        return this;
    }
    obj.minWidth = function (a) {
        this.el.style.minWidth = a;
        return this;
    }
    obj.maxWidth = function (a) {
        this.el.style.maxWidth = a;
        return this;
    }
    obj.margin = function (a) {
        this.el.style.margin = a;
        return this;
    }
    obj.m = function (a) {
        this.el.style.margin = a;
        return this;
    }
    obj.outline = function (a) {
        this.el.style.outline = a;
        return this;
    }
    obj.flexCenter = function () {
        this.el.style.display = "flex";
        this.el.style.justifyContent = "center";
        this.el.style.alignItems = "center";
        return this;
    }
    obj.flexAlignCenter = function () {
        this.el.style.display = "flex";
        this.el.style.alignItems = "center";
        return this;
    }
    obj.overflowScroll = function(){
        this.el.style.oveflow = "scroll";
        return this;
    }
    obj.hidden = function(){
        this.el.style.oveflow = "hidden";
        return this;
    }
    obj.overflowAuto = function(){
        this.el.style.oveflow = "auto";
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
    obj.absolute = function () {
        this.el.style.position = "absolute";
        return this;
    }
    obj.relative = function () {
        this.el.style.position = "relative";
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
    obj.textCenter = function () {
        this.el.style.textAlign = 'center';
        return this;
    }
    obj.textRight = function () {
        this.el.style.textAlign = 'right';
        return this;
    }
    obj.textLeft = function () {
        this.el.style.textAlign = 'left';
        return this;
    }
    obj.grid = function () {
        this.el.style.display = 'grid';
        return this;
    }
    obj.shadow = function (a = '0 0 10px #ddd') {
        this.el.style.boxShadow = a;
        return this;
    }
    obj.gridColumn = function (a) {
        this.el.style.display = 'grid';
        this.el.style.gridTemplateColumns = a;
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
    obj.size = function (a) {
        this.el.style.fontSize = a;
        return this;
    }
    obj.fontWeight = function (a) {
        if (a == undefined) {
            a = 'bold';
        }
        this.el.style.fontWeight = a;
        return this;
    }
    obj.weight = function (a) {
        if (a == undefined) {
            a = 'bold';
        }
        this.el.style.fontWeight = a;
        return this;
    }
    obj.background = function (a) {
        this.el.style.background = a;
        return this;
    }
    obj.padding = function (a) {
        this.el.style.padding = a;
        return this;
    }
    obj.pd = function (a) {
        this.el.style.padding = a;
        return this;
    }
    obj.pt = function (a) {
        this.el.style.paddingTop = a;
        return this;
    }
    obj.pb = function (a) {
        this.el.style.paddingBottom = a;
        return this;
    }
    obj.pl = function (a) {
        this.el.style.paddingLeft = a;
        return this;
    }
    obj.pr = function (a) {
        this.el.style.paddingRight = a;
        return this;
    }
    obj.marginTop = function (a) {
        this.el.style.marginTop = a;
        return this;
    }
    obj.mt = function (a) {
        this.el.style.marginTop = a;
        return this;
    }
    obj.marginBottom = function (a) {
        this.el.style.marginBottom = a;
        return this;
    }
    obj.mb = function (a) {
        this.el.style.marginBottom = a;
        return this;
    }
    obj.marginLeft = function (a) {
        this.el.style.marginLeft = a;
        return this;
    }
    obj.ml = function (a) {
        this.el.style.marginLeft = a;
        return this;
    }
    obj.marginRight = function (a) {
        this.el.style.marginRight = a;
        return this;
    }
    obj.mr = function (a) {
        this.el.style.marginRight = a;
        return this;
    }
    obj.backgroundImage = function (a) {
        this.el.style.backgroundImage = "url(" + a + ")";
        return this;
    }
    obj.font = function (a) {
        this.el.style.fontFamily = a;
        return this;
    }
    obj.backgroundSize = function (a) {
        this.el.style.backgroundSize = a;
        return this;
    }
    obj.italic = function () {
        this.el.style.fontStyle = 'italic';
        return this;
    }
    obj.backgroundRepeat = function (a) {
        this.el.style.backgroundRepeat = a;
        return this;
    }
    obj.backgroundPosition = function (a) {
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
    obj.block = function () {
        this.el.style.display = 'block';
        return this;
    }
    obj.opacity = function (a) {
        this.el.style.opacity = a;
        return this;
    }
    obj.inlineBlock = function () {
        this.el.style.display = 'inline-block';
        return this;
    }
    obj.height = function (a) {
        this.el.style.height = a;
        return this;
    }
    obj.none = function () {
        this.el.style.display = 'none';
        return this;
    }
    obj.transition = function (a) {
        this.el.style.transition = a;
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
    obj.editable = function () {
        this.el.setAttribute('contenteditable', true);
        return this;
    }
    obj.class = function (a) {
        if (this.el.className != "") {
            this.el.className += ' ' + a + ' ';
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
      if(d != undefined && a != undefined){
        this.el.setAttribute(a, d);
        return this;
      }else if(a != undefined && d == undefined){
        return {
          val: this.el.getAttribute(a),
          el: this
        }
      }else{
        return this
      }
    }
    obj.data = function (a, d) {
        this.el.setAttribute('data-' + a, d);
        return this;
    }
    obj.role = function (d) {
        this.el.setAttribute('role', d);
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

    obj.roboto = function(){
        this.el.style.fontFamily = 'Roboto';
        return this;
    }


    obj.getChild = function (pop) {
        return {
            parent: this.get().children[pop],
            el: globalThis.el(this.get().children[pop]),
            child: function (a) {
                return this.parent.appendChild(a.get())
            }
        }
    }

    obj.row = function (a) {
        var d = div()
            .class('row')

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

globalThis.el = el;

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

Number.prototype.pad = function (n) {
    var isNegative = this < 0;
    var number = isNegative ? -1 * this : this;
    for (var i = number.toString().length; i < n; i++) {
        number = '0' + number;
    }
    return (isNegative ? '-' : '') + number;
}

globalThis.tanggal = function(a) {
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
        var s = newDate.getSeconds().pad(2);
        var h = newDate.getHours().pad(2);
        var m = newDate.getMinutes().pad(2);
        var month = (newDate.getMonth() + 1) + '';
        var monthReal = namaBulan[newDate.getMonth()];
        var day = (newDate.getDate()) + '';
        var format = '00';
        var ansMonth = format.substring(0, format.length - month.length) + month;
        var ansDay = format.substring(0, format.length - day.length) + day;
        var dayKnow = year + '-' + ansMonth + '-' + ansDay;
        return {
            full: dayKnow,
            day: newDate.getDay(),
            times: dayKnow+' '+h+':'+m+':'+s,
            y:year,
            mm: monthReal,
            m: ansMonth,
            d: ansDay,
            h: h,
            i: m,
            s: s
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
        oneDayMilisecond: 86400000,
        milisecond: newDate.getTime(),
        normal: buatO(newDate).full,
        normalTimes: buatO(newDate).times,
        datamake: buatO(newDate),
        make: function(text = 'y/m/d h:i:s'){
          text = text.replaceAll('|y|', this.datamake.y)
          text = text.replaceAll('|M|', this.datamake.mm)
          text = text.replaceAll('|m|', this.datamake.m)
          text = text.replaceAll('|d|', this.datamake.d)
          text = text.replaceAll('|h|', this.datamake.h)
          text = text.replaceAll('|i|', this.datamake.i)
          text = text.replaceAll('|s|', this.datamake.s)
          return text;
        },
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

const a = function() {
    return el('a')
}

const img = function() {
    return el('img');
}

const label = function() {
    return el('label')
}

const br = function() {
    return el('BR')
}

const div = function() {
    return el('div');
}
const p = function() {
    return el('p');
}
const line = function() {
    return el('hr')
        .css("padding", "0")
        .css("margin", "0")
}
const h1 = function() {
    return el('h1').css("font-family", "baloo");
}
const h2 = function() {
    return el('h2').css("fontFamily", "arima");
}
const h3 = function() {
    return el('h3');
}
const h4 = function() {
    return el('h4');
}
const h5 = function() {
    return el('h5');
}
const h6 = function() {
    return el('h6');
}
const input = function() {
    return el('input');
}
const btn = function() {
    return el('button');
}
const tabel = function() {
    return el('TABLE');
}
const tr = function() {
    return el('TR');
}
const nav = function() {
    return el('nav');
}
const td = function() {
    return el('TD');
}
const th = function() {
    return el('TH');
}
const thead = function() {
    return el('THEAD');
}
const tbody = function() {
    return el('TBODY');
}
const form = function() {
    return el('FORM');
}
const ul = function() {
    return el('ul');
}
const li = function() {
    return el('li');
}
const option = function() {
    return el('option');
}
const textarea = function() {
    return el('textarea');
}

// bootstrap element select
const btSelect = function(text, name, el, act) {
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

const select = function() {
    return el('select');
}
const span = function() {
    return el('span');
}
const Icon = function(a) {
    return el('i').class(a);
}
const video = function() {
    return el('video');
}
const canvas = function() {
    return el('canvas');
}
const icon = function(a) {
    return i().class(a)
        .css('cursor', 'pointer')
        .css('fontSize', '30px')
        .css('marginRight', '10px')
        .css('marginLeft', '10px')
        .css('transition', '0.5')
}

const getElementById = function(a, func){
    setTimeout(function() {
      func(globalThis[a]);
    },100)
}

const domp = function(a, ch) {
    var domp = document.getElementById(a);
    if (domp != null) {
        var parent = domp.parentNode;
        var newd = div().id(a).child(ch);
        parent.replaceChild(newd.get(), domp);
    } else {
        domp.appendChild(ch.get());
    }
}

const dompp = function(a, ch) {
    var domp = a;
    if (domp != null) {
        var parent = domp.parentNode;
        var newd = div().id(a).child(ch);
        parent.replaceChild(newd.get(), domp);
    } else {
        domp.appendChild(ch.get());
    }
}

const dom = function(a, ch) {
    var domp = a;
    domp.appendChild(ch.get());
}

const newStyle = function(ccs) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ccs;
    document.head.appendChild(style);
}

const prop = function(name, child, value) {
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

const loadJs = function(url, callback) {
    var script = document.createElement('script');
    script.onload = function () {
        callback()
    };
    script.src = url;
    document.head.appendChild(script);
}

const headConf = function(callback) {
    document.head.innerHTML += callback;
}

const perulangan = function(a, b, c) {
    if (a != undefined && b != undefined && c != undefined) {
        for (i = a; i < b; i++) {
            c(i);
        }
    } else {
        // do nothing
    }
}

const loads = function(arr = [], success, errorf) {
    function loadScript(url) {
        return new Promise(function (resolve, reject) {
            let script = document.createElement("script");
            script.src = url;
            script.async = false;
            script.onload = function () {
                resolve(url);
            };
            script.onerror = function () {
                reject(url);
            };
            document.body.appendChild(script);
        });
    }

    let scripts = arr;

    // save all Promises as array
    let promises = [];
    scripts.forEach(function (url) {
        promises.push(loadScript(url));

    });

    Promise.all(promises)
        .then(function () {
            success();
        })
        .catch(function (script) {
            errorf(script)
        });
}

const childes = function(el = null , err = []){
    var e = el;
    for (let x = 0; x < err.length; x++) {
        if((err.length - 1)== x){
            e = e.getChild(err[x])
        }else{
            e = e.getChild(err[x]).el;
        }
    }
    return e;
}

// app display template

function alert(a){
    var idAlert = 'alert-'+Date.now();
    var alertDoc = div()
        .css('position', 'fixed')
        .css('width', '100vw')
        .css('height', '100vh')
        .css('background', 'rgba(0,0,0,0.8)')
        .css('z-index', '99999')
        .css('top', '0')
        .css('left', '0')
        .id(idAlert)
        .css('text-align', 'center')
        .click(function(event){
            var close = event.target;
            var cek = close.getAttribute('panel-alert')
            if(cek == undefined){
                close.remove();
            }
        })
        .child(
            div()
            .css('display', 'inline-block')
            .padding('14px')
            .attr('panel-alert', true)
            .background('#fff')
            .color('#333')
            .css('margin-top', '20px')
            .css('max-width', '320px')
            .css('width', '320px')
            .radius('8px')
            .radius('8px')
            .child(
                p().margin(0).css('text-align', 'left').color('#333').text(a).attr('panel-alert', true)
            )
            .child(
                div().attr('panel-alert', true).css('text-align', 'right').child(
                    btn().text('ok').size('18px')
                    .css('outline', 'none')
                    .css('border', 'none')
                    .attr('panel-alert', true)
                    .addModule('idAlert', idAlert)
                    .css('background', 'transparent')
                    .cursor('pointer')
                    .click(function(event){
                        globalThis[event.target.idAlert].parent.remove();
                    })
                )
            )
        )
    document.body.appendChild(alertDoc.get());
    var result;
    try {
        result = eval(`throw 'alert! ${a}';`);
    } catch (ex) {
        if (ex !== null && typeof ex !== "undefined") {
            if (ex.message) ex = ex.message;
        } else {
            ex = "An unknown error occurred.";
        }
        result = ex;
        console.log(ex)
    }
}


const GetApp = function(a){
  var objectApp = AppObj[a];
  if(objectApp != undefined){
    var returnObject = objectApp.el;
    returnObject.parent = objectApp.parent;
    returnObject.childFunc = objectApp.child;
    returnObject.child = function(a){
      this.parent.appendChild(a.get())
    }
    return returnObject;
  }else{
    return undefined;
  }
}


const Link = function(url = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css', func){
    var stylesheet = document.createElement('link');
    stylesheet.href = url;
    stylesheet.rel = 'stylesheet';
    stylesheet.type = 'text/css';
    // temporarily set media to something inapplicable to ensure it'll fetch without blocking render
    stylesheet.media = 'only x';
    // set the media back when the stylesheet loads
    stylesheet.onload = func
    document.getElementsByTagName('head')[0].appendChild(stylesheet);
}

const MenuListIcon = function(w = '250', icon = 'fas fa-home', title = 'Title', description = ''){
  return div()
      .css("width", "100%")
      .css("max-width", w+"px")
      .padding("5px")
      .css("z-index", "10")
      .child(
          div()
              .padding("10px")
              .border("1px solid #ddd")
              .css("box-shadow", "0 0 10px #ddd")
              .background("rgba(255,255,255,0.7)")
              .radius("8px")
              .css("display", "grid")
              .css("grid-template-columns", "45px auto")
              .marginBottom("5px")
              .child(
                  div()
                      .flexCenter()
                      .child(
                        Icon(icon).size("24px")
                    )
              )
              .child(
                  div()
                      .child(
                        h3().margin(0).color("#333").size("18px").text(title).css("font-weight", "400")
                      )
                      .child(p().color("#777").margin(0).text(description).size("12px"))
              )

      )
}

const List = function(icon = 'fas fa-home', text = 'text', description = 'description'){
  return div()
    .css('padding', '0 10px')
    .css('display', 'grid')
    .css('grid-template-columns', '50px auto')
    .css('margin-bottom', '20px')
    .child(
      div().height('50px')
      .css('text-align', 'center')
      .css('border', '1px solid #aaf')
      .css('border-radius', '50%')
      .flexCenter()
      .child(Icon(icon))
    )
    .child(
      div()
      .flexAlignCenter()
      .child(
        div()
          .child(
            p().color('#aaf').margin(0).padding('0 10px').text(text)
          )
          .child(
            p().size('14px').fontWeight('400').margin(0).padding('0 10px').text(description)
          )
      )
    )
}

const PageLayer = function(bg = 'https://indowebs.my.id/sekolahid/ilustrasi3.svg', headid = 'header-page', contentid = 'content-page'){
  return div()
  .id('layer-page')
  .css('position', 'fixed')
  .css('height', '100vh')
  .css('width', '100vw')
  .css('background', '#ddd')
  .css("background-image", 'url("'+bg+'")')
  .css("background-size", " 80% 80%")
  .css("background-repeat", "no-repeat")
  .css("background-position", "center")
  .css('z-index', '999')
  .css('top', '0')
  .css('opacity', '0')
  .css('transition', 'none')
  .css('display', 'none')
  .css('left', '0')
  .child(
    div()
      .css('height','50px')
      .css('background','#fff')
      .css('display','flex')
      .css('align-items','center')
      .css('box-shadow','0 0 10px #ababab')
        .child(
          div()
          .css('width','100%')
          .padding('0 10px').id(headid).size('18px').css('font-weight', '400').css('color', '#777').text('Title Head')
        )
  )
  .child(
    div()
    .css('position', 'fixed')
    .css('height', 'calc(100vh - 50px)')
    .css('width', '100vw')
    .css('max-height', 'calc(100vh - 50px)')
    .css('top', '50px')
    .css('left', '0')
    .css('overflow', 'auto')
    .css('background', 'rgba(255,255,255,0.7) ')
    .id(contentid)
  )
}

const CardFoto = function(fotoSize = 120, fotoUrl = 'https://indowebs.my.id/sekolahid/profil.jpg', text = 'Sinta Rahma', description = 'profile sinta rahma', func){
  return div()
  .gridColumn(fotoSize+'px auto')
  .pd('30px')
  .width('calc(100% - (30px * 2))')
  .child(
    div().relative()
        .child(
            div()
              .css("background-image", 'url("'+fotoUrl+'")')
              .css("background-size", " cover")
              .css("background-repeat", "no-repeat")
              .css("border-radius", "50%")
              .css("height", fotoSize+"px")
              .id('profile-foto')
        )
        .child(
            Icon('fas fa-camera').absolute()
                .bottom('calc(50% - 12px')
                .right('calc(50% - 12px')
                .size('24px')
                .color('#fff')
                .css('text-shadow','0 0 3px #ddf')
                .addModule('actionFoto', func)
                .cursor('pointer')
                .click(function(){
                    if(this.actionFoto != undefined){
                        this.actionFoto()
                    }
                })
        )
    )
  .child(
    div()
      .css('padding','0 16px')
      .css('height','100%')
      .width('100%')
      .flexAlignCenter()
      .child(
        div()
        .child(
          h3().css('font-weight','400').html(text).padding(0).margin(0)
        )
        .child(
          p().size('14px ').color('#aaa').html(description).padding(0).margin(0)
        )
      )
  )
}

const CardFotoList = function(fotoSize = 120, fotoUrl = 'https://indowebs.my.id/sekolahid/profil.jpg', text = 'Sinta Rahma', description = 'profile sinta rahma', func){
  return div()
  .gridColumn(fotoSize+'px auto')
  .pd('14px')
  .width('calc(100% - (2 * 14px))')
  .background('#30363d')
  .css('border-radius','8px')
  .mb('14px')
  .child(
    div().relative()
        .child(
            div()
              .css("background-image", 'url("'+fotoUrl+'")')
              .css("background-size", " cover")
              .css("background-repeat", "no-repeat")
              .css("border-radius", "50%")
              .css("height", fotoSize+"px")
              .id('profile-foto')
        )
    )
  .child(
    div()
      .css('padding','0 16px')
      .css('height','100%')
      .width('calc(100% - (2 * 16px)')
      .flexAlignCenter()
      .child(
        div()
        .child(
          h3().size('16px').css('font-weight','400').text(text).padding(0).margin(0)
        )
        .child(
          p().size('12px ').color('#aaa').text(description).padding(0).margin(0).mt('5px')
        )
      )
  )
}

const loader = function(){
    return div().class('lds-dual-ring')
}
