(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{178:function(t,e,n){"use strict";e.a={data:function(){return{error:"",loadingToken:!1,loadingSubmit:!1,isHaveError:!1}},computed:{_token:function(){return this.$store.state.token},_captchaImage:function(){return this.$store.state.captcha}},mounted:function(){this.requestToken()},methods:{getErrorMinMax:function(t,e){return"This field should be at least ".concat(t," character and maximum ").concat(e," character")},requestToken:function(){var t=this;this.loadingToken=!0,this.$store.dispatch("fetchNewToken",{url:this.url_api,success:function(){setTimeout(function(){t.loadingToken=!1},1e3)}})},refreshCaptcha:function(){this.requestToken()},onSuccessSubmit:function(t){var e=this;"register_success"===t.data.data.message?(this.$store.dispatch("showNotification",{title:"Thank You",message:"The data was successfully saved in our server."}),setTimeout(function(){e.$router.push("/")},1e3)):(this.requestToken(),this.formData.captcha="",this.isHaveError=!0),setTimeout(function(){e.loadingSubmit=!1},1e3)},onErrorSubmit:function(t){this.requestToken(),this.formData.captcha="",this.error=t,this.isHaveError=!0,this.loadingSubmit=!1}}}},179:function(t,e,n){"use strict";var r=function(t){return null!=t},o=function(t){return!(!r(t)||""===t.trim())};n.d(e,"b",function(){return l}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return m});var l=function(t){return o(t)},c=function(t,e,n){return o(n)&&n.length>t&&n.length<e},m=function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},216:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(179),l={name:"PaymentConfirmation",layout:"no-hero",head:function(){return{title:"Payment Confirmation | SME Summit 2019"}},mixins:[n(178).a],data:function(){return{url_api:"".concat(r.a.PAYMENT_CONFIRMATION),paymentTypes:["participant","sponsor","coacher"],formData:{email:"",phone:"",total_payment:"",payment_type:"participant",date_transfer:"",no_ref:"",bank_name:"",bank_username:"",screenshoot:"",status:"pending",captcha:""},isValidFormEmail:!0,isValidFormPhone:!0,isValidTotalPayment:!0,isValidPaymentType:!0,isValidDateTransfer:!0,isValidNoReference:!0,isValidBankName:!0,isValidBankUsername:!0,isValidScreenshoot:!0,isValidFormCaptcha:!0,isValidForm:!1}},methods:{checkFormValidation:function(){return this.isValidFormEmail=Object(o.c)(3,255,this.formData.email)&&Object(o.a)(this.formData.email),this.isValidFormPhone=Object(o.c)(3,255,this.formData.phone),this.isValidTotalPayment=Object(o.c)(3,255,this.formData.total_payment),this.isValidPaymentType=Object(o.c)(3,255,this.formData.payment_type),this.isValidDateTransfer=Object(o.c)(3,255,this.formData.date_transfer),this.isValidNoReference=Object(o.c)(3,255,this.formData.no_ref),this.isValidBankName=Object(o.c)(1,255,this.formData.bank_name),this.isValidBankUsername=Object(o.c)(3,255,this.formData.bank_username),this.isValidScreenshoot=Object(o.b)(this.formData.screenshoot),this.isValidFormCaptcha=Object(o.c)(5,10,this.formData.captcha),!!(this.isValidFormEmail&&this.isValidFormPhone&&this.isValidTotalPayment&&this.isValidPaymentType&&this.isValidDateTransfer&&this.isValidNoReference&&this.isValidBankName&&this.isValidBankUsername&&this.isValidScreenshoot&&this.isValidFormCaptcha)},handleFileUpload:function(){var t=this,e=this.$refs.screenshoot.files[0],n=new FileReader;n.readAsDataURL(e),n.onload=function(){t.formData.screenshoot=n.result},n.onerror=function(){t.formData.screenshoot=""}},doSubmit:function(){if(this.error="",this.isHaveError=!1,this.checkFormValidation()){this.loadingSubmit=!0;var t=Object.assign({},this.formData);this.$store.dispatch("postPaymentConfirmation",{token:this._token,data:t,success:this.onSuccessSubmit,failed:this.onErrorSubmit})}else this.isHaveError=!0}}},c=n(3),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",{staticClass:"section payment-confirmation",attrs:{id:"payment-confirmation"}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n      PAYMENT CONFIRMATION\n    ")]),t._v(" "),n("form",{staticClass:"form"},[n("input",{staticClass:"hidden",domProps:{value:t._token}}),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Email\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"input",class:{"is-danger":!t.isValidFormEmail},attrs:{type:"email",placeholder:"Ex: example@mail.com",required:""},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormEmail,expression:"!isValidFormEmail"}],staticClass:"help is-danger"},[t._v("\n          Your email is not valid. "),n("br"),t._v(" "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Phone/WA/Telegram\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"input",class:{"is-danger":!t.isValidFormPhone},attrs:{type:"text",placeholder:"Ex: 0812-123-456-789-00 or @your.telegram",required:""},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}})]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormPhone,expression:"!isValidFormPhone"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Payment For\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.payment_type,expression:"formData.payment_type"}],attrs:{required:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.formData,"payment_type",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"",disabled:""}},[t._v("\n                Payment Type\n              ")]),t._v(" "),t._l(t.paymentTypes,function(e){return n("option",{key:e},[t._v("\n                "+t._s(e)+"\n              ")])})],2)])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValidPaymentType,expression:"!isValidPaymentType"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Total Payment\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.total_payment,expression:"formData.total_payment"}],staticClass:"input",class:{"is-danger":!t.isValidTotalPayment},attrs:{type:"text",placeholder:"Ex: 500000",required:""},domProps:{value:t.formData.total_payment},on:{input:function(e){e.target.composing||t.$set(t.formData,"total_payment",e.target.value)}}})]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValidTotalPayment,expression:"!isValidTotalPayment"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(1,20))+"\n        ")])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Bank Name\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.bank_name,expression:"formData.bank_name"}],staticClass:"input",class:{"is-danger":!t.isValidBankName},attrs:{type:"text",placeholder:"Ex: BCA, BRI, MANDIRI, etc",required:""},domProps:{value:t.formData.bank_name},on:{input:function(e){e.target.composing||t.$set(t.formData,"bank_name",e.target.value)}}})]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValidBankName,expression:"!isValidBankName"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(1,255))+"\n        ")])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Bank Account Name\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.bank_username,expression:"formData.bank_username"}],staticClass:"input",class:{"is-danger":!t.isValidBankUsername},attrs:{type:"text",placeholder:"Ex: Irfan Maulana",required:""},domProps:{value:t.formData.bank_username},on:{input:function(e){e.target.composing||t.$set(t.formData,"bank_username",e.target.value)}}})]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValidBankUsername,expression:"!isValidBankUsername"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Date Transfer\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.date_transfer,expression:"formData.date_transfer"}],staticClass:"input",class:{"is-danger":!t.isValidDateTransfer},attrs:{type:"date",placeholder:"Ex: 2019-02-19",required:""},domProps:{value:t.formData.date_transfer},on:{input:function(e){e.target.composing||t.$set(t.formData,"date_transfer",e.target.value)}}})]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValidDateTransfer,expression:"!isValidDateTransfer"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Reference No\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.no_ref,expression:"formData.no_ref"}],staticClass:"input",class:{"is-danger":!t.isValidNoReference},attrs:{type:"text",placeholder:"Ex: QWERTY-QWERTY-QWERTY-QWERTY-QWERTY",required:""},domProps:{value:t.formData.no_ref},on:{input:function(e){e.target.composing||t.$set(t.formData,"no_ref",e.target.value)}}})]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValidNoReference,expression:"!isValidNoReference"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Screenshoot Receipt\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{ref:"screenshoot",staticClass:"input",class:{"is-danger":!t.isValidScreenshoot},attrs:{id:"screenshoot",type:"file",placeholder:"Select your screenshoot file",required:""},on:{change:function(e){return t.handleFileUpload()}}})]),t._v(" "),t._m(0),t._v(" "),t.isValidScreenshoot&&""!==t.formData.screenshoot?n("div",{staticClass:"preview",staticStyle:{"margin-top":"1em"}},[n("label",{staticClass:"label"},[t._v("\n            Preview Screenshoot\n          ")]),t._v(" "),n("img",{staticStyle:{width:"300px"},attrs:{src:t.formData.screenshoot}})]):t._e(),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValidScreenshoot,expression:"!isValidScreenshoot"}],staticClass:"help is-danger"},[t._v("\n          Please attach your transfer receipt\n        ")])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Additional Notes\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.notes,expression:"formData.notes"}],staticClass:"textarea",attrs:{placeholder:"Ex: I pay for bundled price with email: abc@gmai.com, cde@gmail.com, fgh@gmail.com"},domProps:{value:t.formData.notes},on:{input:function(e){e.target.composing||t.$set(t.formData,"notes",e.target.value)}}})])]),t._v(" "),n("span",{staticClass:"help"},[t._v("\n        If you pay for bundling ticket, please let Us know all the emails.\n      ")]),t._v(" "),n("div",{staticClass:"field"},[n("div",[t._captchaImage&&""!==t._captchaImage?n("img",{staticStyle:{width:"250px"},attrs:{src:t._captchaImage,alt:"_captcha"}}):t._e()]),t._v(" "),n("div",[n("div",{staticClass:"button is-link",class:{"is-loading":t.loadingToken},attrs:{disabled:t.loadingToken},on:{click:t.refreshCaptcha}},[t._v("\n            Refresh Captcha\n          ")])])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("\n          Input Captcha\n        ")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captcha,expression:"formData.captcha"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.formData.captcha},on:{input:function(e){e.target.composing||t.$set(t.formData,"captcha",e.target.value)}}})]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCaptcha,expression:"!isValidFormCaptcha"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(6,10))+"\n        ")])]),t._v(" "),n("div",{staticClass:"field is-grouped"},[n("div",{staticClass:"control"},[n("div",{staticClass:"button is-link",class:{"is-loading":t.loadingSubmit},attrs:{disabled:t.loadingSubmit},on:{click:t.doSubmit}},[t._v("\n            Submit\n          ")])]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isHaveError,expression:"isHaveError"}],staticClass:"notification is-danger",staticStyle:{"margin-top":"1em"}},[n("span",[t._v("Please fill all required fields before submitting data.")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v(t._s(t.error))])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"help"},[this._v("\n          Before you uploading screenshoot, please compress your image via "),e("a",{attrs:{href:"https://tinyjpg.com/",target:"_blank",rel:"noopener"}},[this._v("\n            https://tinyjpg.com/\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control"},[e("a",{staticClass:"button is-text",attrs:{href:"/"}},[this._v("\n            Cancel\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notification is-info",staticStyle:{"margin-top":"1em"}},[e("span",[this._v("After you submit payment confirmation, our admin will check the data as soon as possible.")]),this._v(" "),e("br"),this._v("\n      Please be patient, we will inform you via email after your submission already checked and approved by our admin.\n    ")])}],!1,null,"b3644d62",null);e.default=component.exports}}]);