(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{180:function(t,e,n){var content=n(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("3fcb61f7",content,!0,{sourceMap:!1})},181:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=[{logo:"/images/benefit/idea.svg",title:"New Insight",text:"Get new insights from our 7 awesome speakers who will speak in various topics, like Digital Marketing, Fintech Integration, Talent Management, Incentive Regulations from Government, and many more."},{logo:"/images/benefit/coaching.svg",title:"One-on-One Coaching",text:"Get One-on-One coaching and consultation with our best experts and consultants in 15 different topic that you can choose."},{logo:"/images/benefit/location.svg",title:"Strategic Venue",text:"Strategic location in the center of Jakarta and many hotel facilities available around it."},{logo:"/images/benefit/networking.svg",title:"Networking",text:"Build networks with our consultants, speakers and other participants in this events."}]},182:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=[{name:"Ken Ratri Iswari",title:"Founder & CEO Geekhunter",sector:"Human Asset Sector",fb:"https://www.facebook.com/kenratriiswari",tw:"https://twitter.com/kenratriiswari",in:"https://www.linkedin.com/in/kenratriiswari/",insta:"https://www.instagram.com/kenratriiswari/",photo:{jpeg:"/images/speaker/ken-ratri-iswari.jpeg",webp:"/images/speaker/ken-ratri-iswari.webp"}},{name:"Dondy Bappedyanto",title:"CEO Biznet Gio",sector:"Technology Sector",fb:"",tw:"https://twitter.com/dondyb",in:"https://www.linkedin.com/in/dondyb/",insta:"https://www.instagram.com/dondyb/",photo:{jpeg:"/images/speaker/dondy-bappedyanto.jpeg",webp:"/images/speaker/dondy-bappedyanto.webp"}},{name:"Rendy Maulana",title:"CEO Qwords",sector:"Regulation Sector",fb:"https://www.facebook.com/rendy.maulana",tw:"",in:"https://www.linkedin.com/in/rendy/",insta:"https://www.instagram.com/rendy/",photo:{jpeg:"/images/speaker/rendy-maulana.jpeg",webp:"/images/speaker/rendy-maulana.webp"}},{name:"Yopie Suryadi",title:"Founder, Chief MTarget.co",sector:"Digital Marketing",fb:"",tw:"https://twitter.com/yopiesuryadi",in:"https://www.linkedin.com/in/yopiesuryadi",insta:"https://www.instagram.com/yopiesuryadi",photo:{jpeg:"/images/speaker/yopie-suryadi.jpeg",webp:"/images/speaker/yopie-suryadi.webp"}},{name:"Melvin Mumpuni CFP",title:"Founder Finansialku.com",sector:"Financial Sector",fb:"",tw:"https://twitter.com/melvinmumpuni",in:"https://www.linkedin.com/in/melvinmumpuni",insta:"",photo:{jpeg:"/images/speaker/melvin-mumpuni.jpg",webp:"/images/speaker/melvin-mumpuni.webp"}},{name:"Joy Gabriel",title:"Data Analytics Telkom Indonesia",sector:"Technology Sector",fb:"https://www.facebook.com/joygeneroso",tw:"",in:"https://www.linkedin.com/in/joygabriel",insta:"",photo:{jpeg:"/images/speaker/joy-gabriel.jpeg",webp:"/images/speaker/joy-gabriel.webp"}}]},183:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return l});var o=[{name:"Biznet Gio",logo:"/images/sponsor/Biznet_GioCloud_Logo.png",link:"https://www.biznetgio.com/"},{name:"Biznet Networks",logo:"/images/sponsor/Biznet_Logo.png",link:"http://www.biznetnetworks.com/id/"}],l=[{name:"Algo Studio",logo:"/images/sponsor/algo_studio2.png",link:"http://algostudio.net/"},{name:"Entliven",logo:"/images/sponsor/entliven.png",link:"https://entliven.com/"},{name:"PT. Global Anugerah Indonesia",logo:"/images/sponsor/gai.jpg",link:"http://pt-gai.com/"},{name:"Geek Hunter",logo:"/images/sponsor/geekhunter.png",link:"https://geekhunter.co/"}]},184:function(t,e,n){"use strict";var o={name:"BaseImageList",props:{items:{type:Array,default:function(){return[]}},listType:{type:String,default:"sponsor"},listTitle:{type:String,default:"SPONSOR"},listSubTitle:{type:String,default:""},showButton:{type:Boolean,default:!0}}},l=n(3),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section",class:t.listType,attrs:{id:t.listType}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    "+t._s(t.listTitle)+"\n  ")]),t._v(" "),""!==t.listSubTitle?n("h3",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    "+t._s(t.listSubTitle)+"\n  ")]):t._e(),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("div",{staticClass:"level"},t._l(t.items,function(e,o){return n("div",{key:t.listType+o,staticClass:"level-item"},[n("a",{attrs:{href:e.link+"?utm_source=www-smesummit-id?utm_medium=banner",title:e.name,target:"_blank",rel:"noopener"}},[n("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"sponsors_item",attrs:{src:"/images/placeholder.png","data-src":e.logo,"data-err":"/images/placeholder.png",alt:e.name}})])])}),0)]),t._v(" "),t.showButton?n("div",{staticClass:"level btn-call"},[n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"button is-outlined is-large is-info caption-text",attrs:{to:"/sponsor"}},[t._v("\n        Become Sponsor\n      ")])],1)]):t._e()])},[],!1,null,"260ba38b",null);e.a=component.exports},185:function(t,e,n){"use strict";var o={name:"SpeakerList",props:{items:{type:Array,default:function(){return[]}},showButton:{type:Boolean,default:!0}}},l=n(3),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section speakers",attrs:{id:"speakers"}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    AWESOME SPEAKERS\n  ")]),t._v(" "),n("div",{staticClass:"level"},t._l(t.items,function(e,o){return n("div",{key:"speaker-"+o,staticClass:"level-item"},[n("div",{staticClass:"speaker__item"},[n("figure",{staticClass:"image is-200x200"},[n("picture",[n("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"is-rounded",attrs:{src:"/images/person.png","data-src":e.photo.jpeg,"data-err":"/images/person.png",alt:e.name}})])]),t._v(" "),n("div",{staticClass:"speaker__name"},[n("h2",[t._v(t._s(e.name))]),t._v(" "),n("h3",[t._v(t._s(e.title))]),t._v(" "),n("h5",[t._v(t._s(e.sector))])]),t._v(" "),n("div",{staticClass:"speaker__social"},[e.in?n("a",{attrs:{href:e.in,title:e.name+" Linkedin",target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"icon__in",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"}})])]):t._e(),t._v(" "),e.fb?n("a",{attrs:{href:e.fb,title:e.name+" Facebook",target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"icon__fb",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"}})])]):t._e(),t._v(" "),e.tw?n("a",{attrs:{href:e.tw,title:e.name+" Twitter",target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"icon__tw",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"}})])]):t._e(),t._v(" "),e.insta?n("a",{attrs:{href:e.insta,title:e.name+" Instagram",target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"icon__instagram",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"}}),t._v(" "),n("path",{attrs:{d:"M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zm-104 16c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"}})])]):t._e()])])])}),0),t._v(" "),t.showButton?n("div",{staticClass:"level btn-call"},[n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"button is-outlined is-large is-info caption-text",attrs:{to:"/speaker"}},[t._v("\n        Become Speaker\n      ")])],1)]):t._e()])},[],!1,null,"229d1821",null);e.a=component.exports},186:function(t,e,n){"use strict";var o=n(180);n.n(o).a},187:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,".benefit .level[data-v-5fea1598] {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.benefit .level-item[data-v-5fea1598] {\n  display: block;\n  padding: 1em .5em;\n}\n@media screen and (min-width: 768px) {\n.benefit .level-item[data-v-5fea1598] {\n      max-width: 200px;\n}\n}\n@media screen and (max-width: 768px) {\n.benefit .level-item[data-v-5fea1598] {\n      width: 100%;\n}\n}\n.benefit .level-item img[data-v-5fea1598] {\n    width: 200px;\n}\n.item__text h4[data-v-5fea1598] {\n  font-size: 1.5rem;\n  color: #2779d6;\n  font-family: 'PT Sans Caption', sans-serif;\n  text-transform: uppercase;\n}\n.item__text p[data-v-5fea1598] {\n  color: #827f7f;\n}\n",""])},193:function(t,e,n){"use strict";var o={name:"BenefitList",props:{items:{type:Array,default:function(){return[]}}}},l=(n(186),n(3)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section benefit",attrs:{id:"benefit"}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    WHY YOU SHOULD ATTEND THIS SUMMIT?\n  ")]),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("div",{staticClass:"level"},t._l(t.items,function(e,o){return n("div",{key:"benefits-"+o,staticClass:"level-item"},[n("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{src:"/images/placeholder.png","data-src":e.logo,"data-err":"/images/placeholder.png",alt:e.title}}),t._v(" "),n("div",{staticClass:"item__text"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"is-size-6"},[t._v("\n            "+t._s(e.text)+"\n          ")])])])}),0)])])},[],!1,null,"5fea1598",null);e.a=component.exports},204:function(t,e,n){"use strict";n.r(e);var o=n(203),l=n.n(o),r=n(184),c=n(193),m=n(185),d={name:"VolunteerSection"},v=n(3),h=Object(v.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section volunteers",attrs:{id:"volunteers"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[this._v("\n    CALL FOR VOLUNTEERS\n  ")]),this._v(" "),e("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"volunteer_banner",attrs:{src:"/images/placeholder.png","data-src":"/images/banner/volunteer.jpg","data-err":"/images/placeholder.png",alt:"Volunteer"}}),this._v(" "),e("div",{staticClass:"level btn-call"},[e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"button is-outlined is-large is-info caption-text",attrs:{to:"/volunteer"}},[this._v("\n        Become Volunteer\n      ")])],1)])])},[],!1,null,null,null).exports,w={name:"LocationSection"},_=Object(v.a)(w,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section location",attrs:{id:"location"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[this._v("\n    LOCATION\n  ")]),this._v(" "),e("article",{staticClass:"level"},[e("figure",{staticClass:"level-item"},[e("picture",[e("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{src:"/images/placeholder.png","data-src":"/images/venue/ayana_ballroom_3_300px.jpeg","data-err":"/images/placeholder.png",alt:"Ballroom Ayana Hotel Midplaza, Jakarta",height:"300"}})])]),this._v(" "),this._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-item"},[e("div",{staticClass:"content"},[e("p",{staticClass:"is-size-4"},[this._v("\n          Ballroom Ayana Hotel Midplaza, Jakarta\n        ")]),this._v(" "),e("p",[this._v("\n          Jl. Jenderal Sudirman Kav. 10-11 Jakarta Pusat, Jakarta 10220,\n          Indonesia\n        ")]),this._v(" "),e("p",[e("a",{attrs:{href:"https://goo.gl/maps/L9HS9Dn2oWx",target:"_blank",rel:"noopener"}},[this._v("\n            See in Google Maps\n          ")])])])])}],!1,null,null,null).exports,f=n(7),k=n(182),y=n(183),C=[{name:"Codepolitan",logo:"/images/media-partner/codepolitan_logo.png",link:"https://www.codepolitan.com/"},{name:"Tech In Asia",logo:"/images/media-partner/techinasia.svg",link:"https://id.techinasia.com/"},{name:"Daily Social",logo:"/images/media-partner/dailysocial.png",link:"https://dailysocial.id/"}],x=["CEO of Small and Medium Enterprise","IT Manager or equal of Non-Tech Company","Professional Freelancer","Academic/Lecture"],S=n(181),z=[{name:"Kementrian Koperasi",logo:"/images/organizer/logo_koperasi.png",link:"http://www.depkop.go.id/"}],B={name:"IndexPage",components:{BaseImageList:r.a,BenefitList:c.a,SpeakerList:m.a,VolunteerSection:h,LocationSection:_},data:function(){return{DESC:f.b,aboutTitle:f.b.ABOUT,speakers:k.a,sponsors:y.a,silver_sponsor:y.b,partners:C,benefits:S.a,supporter:z}},mounted:function(){var t={strings:x,typeSpeed:40,backSpeed:40,backDelay:1e3,loop:!0,loopCount:1/0,showCursor:!1};new l.a(".typed-container",t)}},T=Object(v.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("section",{staticClass:"section about",attrs:{id:"about"}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n      ABOUT SME SUMMIT 2019\n    ")]),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("p",{staticClass:"is-size-5"},[t._v("\n        "+t._s(t.aboutTitle)+"\n      ")])])]),t._v(" "),n("BenefitList",{attrs:{items:t.benefits}}),t._v(" "),t._m(0),t._v(" "),n("SpeakerList",{attrs:{items:t.speakers}}),t._v(" "),n("BaseImageList",{attrs:{items:t.sponsors,"list-sub-title":"MAIN SPONSOR","show-button":!1}}),t._v(" "),n("BaseImageList",{attrs:{items:t.silver_sponsor,"list-title":"","list-sub-title":"SILVER SPONSOR"}}),t._v(" "),n("BaseImageList",{attrs:{items:t.supporter,"list-type":"supporter","list-title":"SUPPORTED BY","show-button":!1}}),t._v(" "),n("BaseImageList",{attrs:{items:t.partners,"list-type":"media-partner","list-title":"OFFICIAL MEDIA PARTNER","show-button":!1}}),t._v(" "),n("VolunteerSection"),t._v(" "),n("LocationSection")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"register gradient-section clearfix",attrs:{id:"register"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[this._v("\n      ARE YOU THIS PERSON ?\n    ")]),this._v(" "),e("h2",{staticClass:"is-size-3 has-text-centered has-text-white"},[e("span",[this._v(" ")]),e("span",{staticClass:"typed-container"})]),this._v(" "),e("div",{staticClass:"level btn-call"},[e("div",{staticClass:"level-item"},[e("a",{staticClass:"button is-large is-danger caption-text",attrs:{href:"/register"}},[this._v("\n          Register Here\n        ")])])])])}],!1,null,null,null);e.default=T.exports}}]);