define(['jquery', 'form', 'main', 'helper', 'frb', '@firebase/app','@firebase/auth', '@firebase/database'], function($, form, main, helper, frb, firebase) {
  const dashboard = {
    view: async function() {
      await helper.templateAdmin('html/dashboard.html');
    },
    pop: async function() {
      await helper.templateAdmin('html/pop.html');
      var c = el('form');
      // form start ----------------- //
      c.child(
        form.input({
          label: 'Tanggal Do',
          type: 'date',
          id: 'tgl_do',
          name: 'tgl_do',
          holder: 'tanggal do'
        })
      )
      c.child(
        form.input({
          label: 'Tanggal Pengiriman',
          id: 'tgl_pengiriman',
          type: 'date',
          name: 'tgl_pengiriman',
          holder: 'tanggal pengiriman'
        })
      )
      c.child(
        form.select({
          label: 'Customer',
          id: 'customer',
          name: 'customer',
          kode: 'customer',
          query: ` SELECT * FROM kontak WHERE tipe_kontak like '%:"1"%' AND delete_set = '0' `,
          data: ['kode','nama_panggilan'],
          value: 'id',
          change: function(a){
              var val = this.value;
              var dat = JSON.parse(localStorage.getItem('customer')).data.filter(function(w,i) {
                  if (w.id == val) {
                    return w;
                  }
              })[0];

              document.getElementById('alamat_kirim').value = dat.alamat_pengirim;
          }
        })
      )
      c.child(
        form.input({
          label: 'Alamat Kirim',
          id: 'alamat_kirim',
          type: 'text',
          name: 'alamat_kirim',
          holder: 'Alamat pengiriman'
        })
      )
      // form end ----------------- //
      c.child(
        div().class('data').child(
          el('TABLE').class('table').id('data-do')
          .child(
            tr().align('center')
            .child(
              td().text('Nama Barang')
            )
            .child(
              td().text('Qty')
            )
            .child(
              td().text('Satuan')
            )
            .child(
              td().text('Harga Satuan')
            )
            .child(
              td().text('Total')
            )
          )
        )
      )
      var x = 0;
      c.child(
        div().align('center')
        .child(
          btn().type('button').class('btn btn-primary').text('Tambah Barang').click(function() {
            x += 1;
            var ttr = tr()
            .child(
              td().child(
                form.select({
                  id: 'produk'+x,
                  name: 'data['+x+'][produk_id]',
                  kode: 'produk',
                  query: ` SELECT * FROM produk WHERE delete_set = '0' `,
                  data: ['kode','nama'],
                  value: 'id',
                  change: function(a){
                    var val = this.value;
                    var ipo = JSON.parse(localStorage.getItem('produk')).data.filter(function(s,w) {
                      if (val == s.id) {
                        return s;
                      }
                    })[0]
                    var id = this.id.replace(/produk/g, "");
                    document.getElementById('satuan'+id).value = ipo.unit;
                    document.getElementById('harga_satuan'+id).value = helper.formatRupiah(ipo.harga_jual);
                  }
                })
              )
            )
            .child(
              td().child(
                form.input({
                  id: 'qty'+x,
                  type: 'number',
                  name: 'data['+x+'][qty]',
                  holder: 'qty'
                })
              )
            )
            .child(
              td().child(
                form.select({
                  id: 'satuan'+x,
                  name: 'data['+x+'][satuan_id]',
                  kode: 'satuan',
                  query: ` SELECT * FROM satuan WHERE delete_set = '0' `,
                  data: ['satuan'],
                  value: 'id',
                  change: function(a){
                    form.getData(`SELECT * FROM satuan WHERE id = '${this.value}'`, function(p) {
                      var e = p[0];
                      console.log(e);
                    });
                  }
                })
              )
            )
            .child(
              td().child(
                form.input({
                  id: 'harga_satuan'+x,
                  type: 'text',
                  name: 'data['+x+'][harga_satuan]',
                  holder: 'harga satuan'
                })
              )
            )
            .child(
              td().child(
                form.input({
                  id: 'total'+x,
                  type: 'text',
                  name: 'data['+x+'][total]',
                  holder: 'total'
                })
              )
            )
            __id('data-do', function(elm){
              elm.child(ttr)
            })
          })
        )
      )

      var d = div().class('container');
        d.child(
          div().class('card')
          .child(
            div().class('card-body').child(c)
          )
        )

      domp('form-start', d);

    }
  }
  return dashboard;
})
