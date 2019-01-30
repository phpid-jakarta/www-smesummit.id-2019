(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{179:function(t,a,s){"use strict";a.a={data:function(){return{error:"",loadingToken:!1,loadingSubmit:!1,isHaveError:!1}},computed:{_token:function(){return this.$store.state.token},_captchaImage:function(){return this.$store.state.captcha}},mounted:function(){this.requestToken()},methods:{getErrorMinMax:function(t,a){return"This field should be at least ".concat(t," character and maximum ").concat(a," character")},requestToken:function(){var t=this;this.loadingToken=!0,this.$store.dispatch("fetchNewToken",{url:this.url_api,success:function(){setTimeout(function(){t.loadingToken=!1},1e3)}})},refreshCaptcha:function(){this.requestToken()},onSuccessSubmit:function(t){var a=this;"register_success"===t.data.data.message?(this.$store.dispatch("showNotification",{title:"Thank You",message:"The data was successfully saved in our server."}),setTimeout(function(){a.$router.push("/")},1e3)):(this.requestToken(),this.formData.captcha="",this.isHaveError=!0),setTimeout(function(){a.loadingSubmit=!1},1e3)},onErrorSubmit:function(t){this.requestToken(),this.formData.captcha="",this.error=t,this.isHaveError=!0,this.loadingSubmit=!1}}}},180:function(t,a,s){"use strict";var e=function(t){return null!=t},i=function(t){return!(!e(t)||""===t.trim())};s.d(a,"b",function(){return o}),s.d(a,"c",function(){return n}),s.d(a,"a",function(){return r});var o=function(t){return i(t)},n=function(t,a,s){return i(s)&&s.length>t&&s.length<a},r=function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},184:function(t,a,s){"use strict";s.d(a,"a",function(){return e}),s.d(a,"b",function(){return i});var e=[{name:"Biznet Gio",logo:"/images/sponsor/biznet-gio-logo.svg",link:"https://www.biznetgio.com/"},{name:"Biznet Networks",logo:"/images/sponsor/biznet-networks-logo.svg",link:"http://www.biznetnetworks.com/id/"}],i=[{name:"Algo Studio",logo:"/images/sponsor/algo_studio2.png",link:"http://algostudio.net/"},{name:"Entliven",logo:"/images/sponsor/entliven.png",link:"https://entliven.com/"},{name:"PT. Global Anugerah Indonesia",logo:"/images/sponsor/gai.jpg",link:"http://pt-gai.com/"},{name:"Geek Hunter",logo:"/images/sponsor/geekhunter.png",link:"https://geekhunter.co/"}]},186:function(t,a,s){"use strict";var e={name:"BaseImageList",props:{items:{type:Array,default:function(){return[]}},listType:{type:String,default:"sponsor"},listTitle:{type:String,default:"SPONSOR"},listSubTitle:{type:String,default:""},showButton:{type:Boolean,default:!0}}},i=s(2),o=Object(i.a)(e,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"section",class:t.listType,attrs:{id:t.listType}},[s("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    "+t._s(t.listTitle)+"\n  ")]),t._v(" "),""!==t.listSubTitle?s("h3",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    "+t._s(t.listSubTitle)+"\n  ")]):t._e(),t._v(" "),s("div",{staticClass:"has-text-centered"},[s("div",{staticClass:"level"},t._l(t.items,function(a,e){return s("div",{key:t.listType+e,staticClass:"level-item"},[s("a",{attrs:{href:a.link+"?utm_source=www-smesummit-id?utm_medium=banner",title:a.name,target:"_blank",rel:"noopener"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.logo,expression:"item.logo"}],staticClass:"sponsors_item",attrs:{alt:a.name,src:"/images/placeholder.png"}})])])}))]),t._v(" "),t.showButton?s("div",{staticClass:"level btn-call"},[s("div",{staticClass:"level-item"},[s("nuxt-link",{staticClass:"button is-outlined is-large is-info caption-text",attrs:{to:"/sponsor"}},[t._v("\n        Become Sponsor\n      ")])],1)]):t._e()])},[],!1,null,"3d6bb72b",null);a.a=o.exports},211:function(t,a,s){"use strict";s.r(a);s(48);var e=s(186),i=s(10),o=s(184),n=s(49),r=s(180),l=s(179),c={name:"RegisterSponsor",layout:"no-hero",head:function(){return{title:"Register for Sponsor | SME Summit 2019"}},components:{BaseImageList:e.a},mixins:[l.a],data:function(){return{url_api:"".concat(i.a.REGISTER_SPONSOR),formData:{company_name:"",company_logo:"",company_sector:"",email_pic:"",phone:"",sponsor_type:"",captcha:""},isValidFormCompanyName:!0,isValidFormCompanyLogo:!0,isValidFormCompanySector:!0,isValidFormEmailPic:!0,isValidFormPhone:!0,isValidFormSponsorType:!0,isValidFormCaptcha:!0,isValidForm:!1,ARGA:n.a,sponsors:o.a,silver_sponsor:o.b}},methods:{checkFormValidation:function(){return this.isValidFormCompanyName=Object(r.c)(3,255,this.formData.company_name),this.isValidFormCompanyLogo=Object(r.c)(3,255,this.formData.company_logo),this.isValidFormCompanySector=Object(r.c)(3,255,this.formData.company_sector),this.isValidFormEmailPic=Object(r.c)(3,255,this.formData.email_pic)&&Object(r.a)(this.formData.email_pic),this.isValidFormPhone=Object(r.c)(3,255,this.formData.phone),this.isValidFormSponsorType=Object(r.c)(3,255,this.formData.sponsor_type),this.isValidFormCaptcha=Object(r.c)(5,10,this.formData.captcha),!!(this.isValidFormCompanyName&&this.isValidFormCompanyLogo&&this.isValidFormCompanySector&&this.isValidFormEmailPic&&this.isValidFormPhone&&this.isValidFormSponsorType&&this.isValidFormCaptcha)},doSubmit:function(){if(this.error="",this.isHaveError=!1,this.checkFormValidation()){this.loadingSubmit=!0;var t=Object.assign({},this.formData);this.$store.dispatch("postRegisterSponsor",{token:this._token,data:t,success:this.onSuccessSubmit,failed:this.onErrorSubmit})}else this.isHaveError=!0}}},m=s(2),p=Object(m.a)(c,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("section",{staticClass:"section reg-sponsor",attrs:{id:"reg-sponsor"}},[s("BaseImageList",{attrs:{items:t.sponsors,"list-sub-title":"MAIN SPONSOR","show-button":!1}}),t._v(" "),s("BaseImageList",{attrs:{items:t.silver_sponsor,"list-title":"","list-sub-title":"SILVER SPONSOR","show-button":!1}}),t._v(" "),s("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n      REGISTER FOR SPONSORSHIP\n    ")]),t._v(" "),s("form",{staticClass:"form"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("\n          Company Name\n        ")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.company_name,expression:"formData.company_name"}],staticClass:"input",class:{"is-danger":!t.isValidFormCompanyName},attrs:{type:"text",placeholder:"Your Company Name"},domProps:{value:t.formData.company_name},on:{input:function(a){a.target.composing||t.$set(t.formData,"company_name",a.target.value)}}})]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCompanyName,expression:"!isValidFormCompanyName"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("\n          Company Public Logo URL\n        ")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.company_logo,expression:"formData.company_logo"}],staticClass:"input",class:{"is-danger":!t.isValidFormCompanyLogo},attrs:{type:"text",placeholder:"Your Company Public Logo URL"},domProps:{value:t.formData.company_logo},on:{input:function(a){a.target.composing||t.$set(t.formData,"company_logo",a.target.value)}}})]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCompanyLogo,expression:"!isValidFormCompanyLogo"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("\n          Your Company Bussiness Sector\n        ")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.company_sector,expression:"formData.company_sector"}],staticClass:"input",class:{"is-danger":!t.isValidFormCompanySector},attrs:{type:"text",placeholder:"Your Company Bussiness Sector"},domProps:{value:t.formData.company_sector},on:{input:function(a){a.target.composing||t.$set(t.formData,"company_sector",a.target.value)}}})]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCompanySector,expression:"!isValidFormCompanySector"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("\n          PIC Email\n        ")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email_pic,expression:"formData.email_pic"}],staticClass:"input",class:{"is-danger":!t.isValidFormEmailPic},attrs:{type:"email",placeholder:"Ex: example@mail.com"},domProps:{value:t.formData.email_pic},on:{input:function(a){a.target.composing||t.$set(t.formData,"email_pic",a.target.value)}}})]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormEmailPic,expression:"!isValidFormEmailPic"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("\n          PIC Phone/WA/Telegram\n        ")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"input",class:{"is-danger":!t.isValidFormPhone},attrs:{type:"text",placeholder:"Ex: 0812-123-456-789-00, @your.telegram"},domProps:{value:t.formData.phone},on:{input:function(a){a.target.composing||t.$set(t.formData,"phone",a.target.value)}}})]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormPhone,expression:"!isValidFormPhone"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("\n          Sponsorship Grade\n        ")]),t._v(" "),s("div",{staticClass:"control"},[s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.sponsor_type,expression:"formData.sponsor_type"}],on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.formData,"sponsor_type",a.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",disabled:""}},[t._v("\n                Select dropdown\n              ")]),t._v(" "),s("option",{attrs:{value:"platinum"}},[t._v("\n                Platinum\n              ")]),t._v(" "),s("option",{attrs:{value:"gold"}},[t._v("\n                Gold\n              ")]),t._v(" "),s("option",{attrs:{value:"silver"}},[t._v("\n                Silver\n              ")]),t._v(" "),s("option",{attrs:{value:"media_partner"}},[t._v("\n                Media Partner\n              ")])])])]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:"gold"===t.formData.sponsor_type,expression:"formData.sponsor_type === 'gold'"}],staticClass:"help"}),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:"silver"===t.formData.sponsor_type,expression:"formData.sponsor_type === 'silver'"}],staticClass:"help"}),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormSponsorType,expression:"!isValidFormSponsorType"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),s("div",{staticClass:"field"},[s("div",[t._captchaImage&&""!==t._captchaImage?s("img",{staticStyle:{width:"250px"},attrs:{src:t._captchaImage,alt:"_captcha"}}):t._e()]),t._v(" "),s("div",[s("div",{staticClass:"button is-link",class:{"is-loading":t.loadingToken},attrs:{disabled:t.loadingToken},on:{click:t.refreshCaptcha}},[t._v("\n            Refresh Captcha\n          ")])])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("\n          Input Captcha\n        ")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captcha,expression:"formData.captcha"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.formData.captcha},on:{input:function(a){a.target.composing||t.$set(t.formData,"captcha",a.target.value)}}})]),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCaptcha,expression:"!isValidFormCaptcha"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(6,10))+"\n        ")])]),t._v(" "),s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("div",{staticClass:"button is-link",class:{"is-loading":t.loadingSubmit},attrs:{disabled:t.loadingSubmit},on:{click:t.doSubmit}},[t._v("\n            Submit\n          ")])]),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"notification is-info",staticStyle:{"margin-top":"1em"}},[s("span",[t._v("More information about sponsorship, you can contact our PIC")]),t._v(" "),s("br"),t._v(" "),s("span",[t._v("Name: "+t._s(t.ARGA.name))]),t._v(" "),s("br"),t._v(" "),s("span",[t._v("Phone: "+t._s(t.ARGA.phone))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isHaveError,expression:"isHaveError"}],staticClass:"notification is-danger",staticStyle:{"margin-top":"1em"}},[s("span",[t._v("Please fill all required fields before submitting data.")]),t._v(" "),s("br"),t._v(" "),s("span",[t._v(t._s(t.error))])])],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"control"},[a("a",{staticClass:"button is-text",attrs:{href:"/"}},[this._v("\n            Cancel\n          ")])])}],!1,null,"33b37629",null);a.default=p.exports}}]);