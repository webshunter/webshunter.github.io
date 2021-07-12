define(['jquery', 'main', 'axios', 'helper'], function($, main, axios, helper){

  let form = {};

  form.apiGet = 'https://s-feed.com/api/json/';
  
  form.apiSave = 'https://s-feed.com/api/save/';

  form.input = function(a = {}){
    var s = div().class('form-group')
    if (a.label != undefined) {
      s.child(
        el('label').text(a.label).attr('for', a.id)
      )
    }
    s.child(
      input().type(a.type).class('form-control').id(a.id).hold(a.holder).name(a.name)
    )
    return s;
  }


  form.getData = function(a, func, kode){
      var params = new URLSearchParams();
      params.append('query', a);
      axios.post(form.apiGet, params).then(function(qw){
       func(qw.data); 
      })
  }

  form.select = function(a = {}){

    function getdat(els){
      var params = new URLSearchParams();
      params.append('query', a.query);
      var elm = els.el
      if (localStorage.getItem(a.kode) != undefined) {
          var uup = JSON.parse(localStorage.getItem(a.kode)).data.map(function(er,i){
            var ski = er[a.value];
            var dmp = a.data.map(function(es){
              return er[es];
            }).join('-');
            return `<option value="${ski}">${dmp}</option>`;
          }).join("")
          elm.innerHTML = `<option> -- pilih data -- </option>` + uup;
      }
      axios.post(form.apiGet, params).then(function(opp){
        if (localStorage.getItem(a.kode) != undefined) {
          localStorage.setItem(a.kode, JSON.stringify(opp));
        }else{
          localStorage.setItem(a.kode, JSON.stringify(opp));
          var uup = opp.data.map(function(er,i){
            var ski = er[a.value];
            var dmp = a.data.map(function(es){
              return er[es];
            }).join('-');
            return `<option value="${ski}">${dmp}</option>`;
          }).join("")
          elm.innerHTML = `<option> -- pilih data -- </option>` + uup;
        }
      })
    }

    var s = div().class('form-group')
    if (a.label != undefined) {
      s.child(
        el('label').text(a.label).attr('for', a.id)
      )
    }
    
    var h = select().class('form-control').id(a.id).name(a.name).load(getdat)
    s.child(
      h
    )

    if (a.change != undefined) {
      h.change(a.change);
    }
  
    return s;
  
  }

  return form;

})
