(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(t,i,e){var n=e(215);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(14).default)("5bc96554",n,!0,{})},214:function(t,i,e){"use strict";var n=e(192);e.n(n).a},215:function(t,i,e){(t.exports=e(13)(!1)).push([t.i,"",""])},235:function(t,i,e){"use strict";e.r(i);var n=e(32),s=e.n(n),a={name:"OrganizerPage",head:function(){return{title:"Organizers | SME Summit 2019"}},data:function(){return{organizerList:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;s()({url:"/organizers.json",method:"get"}).then(function(i){t.organizerList=i.data.data})}}},r=(e(214),e(3)),o=Object(r.a)(a,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("section",{staticClass:"section organizer",attrs:{id:"organizer"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n      ORGANIZERS\n    ")]),t._v(" "),e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",t._l(t.organizerList,function(i,n){return e("tr",{key:n},[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[t._v(t._s(i.position))]),t._v(" "),e("td",[t._v(t._s(i.name))]),t._v(" "),e("td",[t._v(t._s(i.email))])])}))]),t._v(" "),e("div")])])},[function(){var t=this.$createElement,i=this._self._c||t;return i("thead",[i("tr",[i("th",[this._v("No")]),this._v(" "),i("th",[this._v("Position")]),this._v(" "),i("th",[this._v("Name")]),this._v(" "),i("th",[this._v("Email")])])])}],!1,null,"58099cb0",null);o.options.__file="organizer.vue";i.default=o.exports}}]);