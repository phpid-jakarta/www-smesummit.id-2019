(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{183:function(a,t,e){"use strict";e.r(t),t.default={data:function(){return{error:"",loadingToken:!1,loadingSubmit:!1,isHaveError:!1}},computed:{_token:function(){return this.$store.state.token},_captchaImage:function(){return this.$store.state.captcha}},mounted:function(){this.requestToken()},methods:{getErrorMinMax:function(a,t){return"This field should be at least ".concat(a," character and maximum ").concat(t," character")},requestToken:function(){var a=this;this.loadingToken=!0,this.$store.dispatch("fetchNewToken",{url:this.url_api,success:function(){setTimeout(function(){a.loadingToken=!1},1e3)}})},refreshCaptcha:function(){this.requestToken()},onSuccessSubmit:function(a){var t=this;"register_success"===a.data.data.message?(this.$store.dispatch("showNotification",{title:"Thank You",message:"The data was successfully saved in our server."}),setTimeout(function(){t.$router.push("/")},1e3)):(this.requestToken(),this.isHaveError=!0),setTimeout(function(){t.loadingSubmit=!1},1e3)},onErrorSubmit:function(a){this.requestToken(),this.error=a,this.isHaveError=!0,this.loadingSubmit=!1}}}},184:function(a,t,e){"use strict";var i=function(a){return null!=a},s=function(a){return!(!i(a)||""===a.trim())};e.d(t,"b",function(){return o}),e.d(t,"a",function(){return r});var o=function(a,t,e){return s(e)&&e.length>a&&e.length<t},r=function(a){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())}},190:function(a,t,e){var i=e(206);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,e(14).default)("68681446",i,!0,{})},205:function(a,t,e){"use strict";var i=e(190);e.n(i).a},206:function(a,t,e){(a.exports=e(13)(!1)).push([a.i,"",""])},222:function(a,t,e){"use strict";e.r(t);e(50),e(31);var i=e(15),s=e(184),o={name:"RegisterParticipants",mixins:[e(183).default],data:function(){return{url_api:"".concat(i.b.REGISTER_PARTICIPANT),formData:{name:"",company_name:"",position:"",company_sector:"",coached_sector:"",email:"",phone:"",problem_desc:"",captcha:""},isValidFormName:!0,isValidFormCompanyName:!0,isValidFormPosition:!0,isValidFormCompanySector:!0,isValidFormCoachedSector:!0,isValidFormEmail:!0,isValidFormPhone:!0,isValidFormProblemDesc:!0,isValidFormCaptcha:!0,isValidForm:!1}},methods:{checkFormValidation:function(){return this.isValidFormName=Object(s.b)(3,255,this.formData.name),this.isValidFormCompanyName=Object(s.b)(3,255,this.formData.company_name),this.isValidFormPosition=Object(s.b)(3,255,this.formData.position),this.isValidFormCompanySector=Object(s.b)(3,255,this.formData.company_sector),this.isValidFormCoachedSector=Object(s.b)(3,255,this.formData.coached_sector),this.isValidFormEmail=Object(s.b)(3,255,this.formData.email)&&Object(s.a)(this.formData.email),this.isValidFormPhone=Object(s.b)(3,255,this.formData.phone),this.isValidFormProblemDesc=Object(s.b)(20,1024,this.formData.problem_desc),this.isValidFormCaptcha=Object(s.b)(5,10,this.formData.captcha),!!(this.isValidFormName&&this.isValidFormCompanyName&&this.isValidFormPosition&&this.isValidFormCompanySector&&this.isValidFormCoachedSector&&this.isValidFormEmail&&this.isValidFormPhone&&this.isValidFormProblemDesc&&this.isValidFormCaptcha)},doSubmit:function(){if(this.checkFormValidation()){this.error="",this.loadingSubmit=!0,this.isHaveError=!1;var a=Object.assign({},this.formData);this.$store.dispatch("postRegisterParticipant",{token:this._token,data:a,success:this.onSuccessSubmit,failed:this.onErrorSubmit})}else this.isHaveError=!0}}},r=(e(205),e(3)),n=Object(r.a)(o,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("section",{staticClass:"section reg-attendants",attrs:{id:"reg-attendants"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[a._v("\n      REGISTER FOR ATTENDANTS\n    ")]),a._v(" "),e("form",{staticClass:"form"},[e("input",{staticClass:"hidden",domProps:{value:a._token}}),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Name\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.name,expression:"formData.name"}],staticClass:"input",class:{"is-danger":!a.isValidFormName},attrs:{type:"text",placeholder:"Your Name",required:""},domProps:{value:a.formData.name},on:{input:function(t){t.target.composing||a.$set(a.formData,"name",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormName,expression:"!isValidFormName"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Company Name\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.company_name,expression:"formData.company_name"}],staticClass:"input",class:{"is-danger":!a.isValidFormCompanyName},attrs:{type:"text",placeholder:"Your Company Name",required:""},domProps:{value:a.formData.company_name},on:{input:function(t){t.target.composing||a.$set(a.formData,"company_name",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormCompanyName,expression:"!isValidFormCompanyName"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Company Sector\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.company_sector,expression:"formData.company_sector"}],staticClass:"input",class:{"is-danger":!a.isValidFormCompanySector},attrs:{type:"text",placeholder:"Your Company Sector",required:""},domProps:{value:a.formData.company_sector},on:{input:function(t){t.target.composing||a.$set(a.formData,"company_sector",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormCompanySector,expression:"!isValidFormCompanySector"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Your Role/Position\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.position,expression:"formData.position"}],staticClass:"input",class:{"is-danger":!a.isValidFormPosition},attrs:{type:"text",placeholder:"Ex: IT, Owner, etc",required:""},domProps:{value:a.formData.position},on:{input:function(t){t.target.composing||a.$set(a.formData,"position",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormPosition,expression:"!isValidFormPosition"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Email\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.email,expression:"formData.email"}],staticClass:"input",class:{"is-danger":!a.isValidFormEmail},attrs:{type:"email",placeholder:"Ex: example@mail.com",required:""},domProps:{value:a.formData.email},on:{input:function(t){t.target.composing||a.$set(a.formData,"email",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormEmail,expression:"!isValidFormEmail"}],staticClass:"help is-danger"},[a._v("\n          Your email is not valid. "),e("br"),a._v(" "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Phone/WA/Telegram\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.phone,expression:"formData.phone"}],staticClass:"input",class:{"is-danger":!a.isValidFormPhone},attrs:{type:"text",placeholder:"Ex: 0812-123-456-789-00 or @your.telegram",required:""},domProps:{value:a.formData.phone},on:{input:function(t){t.target.composing||a.$set(a.formData,"phone",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormPhone,expression:"!isValidFormPhone"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Which Sector Do You Want To Get Coached?\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:a.formData.coached_sector,expression:"formData.coached_sector"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.formData,"coached_sector",t.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",disabled:""}},[a._v("\n                Select dropdown\n              ")]),a._v(" "),e("option",[a._v("Digital Marketing")]),a._v(" "),e("option",[a._v("Startup Finance and Tax")]),a._v(" "),e("option",[a._v("Human Resources Management")]),a._v(" "),e("option",[a._v("Project Management")]),a._v(" "),e("option",[a._v("Security Audit")]),a._v(" "),e("option",[a._v("Cloud Solution")]),a._v(" "),e("option",[a._v("Startup Regulation")]),a._v(" "),e("option",[a._v("Skill Development")]),a._v(" "),e("option",[a._v("Enterprise Resource Planning (ERP)")]),a._v(" "),e("option",[a._v("Customer Relationship Management (CRM)")]),a._v(" "),e("option",[a._v("Learning Management System")]),a._v(" "),e("option",[a._v("Data Analytics")]),a._v(" "),e("option",[a._v("News Portal")]),a._v(" "),e("option",[a._v("UI/UX")]),a._v(" "),e("option",[a._v("Automation Industry")]),a._v(" "),e("option",[a._v("Hotel")]),a._v(" "),e("option",[a._v("Hospital & Clilic")]),a._v(" "),e("option",[a._v("Accounting")]),a._v(" "),e("option",[a._v("Mobile Application")])])])]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormCoachedSector,expression:"!isValidFormCoachedSector"}],staticClass:"help is-danger"},[a._v("\n          This field is required.\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Your Current Problem/Case\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.formData.problem_desc,expression:"formData.problem_desc"}],staticClass:"textarea",class:{"is-danger":!a.isValidFormProblemDesc},attrs:{placeholder:"Ex: we already implemented IT in our company but still confused about its data analysis",required:""},domProps:{value:a.formData.problem_desc},on:{input:function(t){t.target.composing||a.$set(a.formData,"problem_desc",t.target.value)}}})]),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormProblemDesc,expression:"!isValidFormProblemDesc"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(20,1024))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("div",[a._captchaImage&&""!==a._captchaImage?e("img",{staticStyle:{width:"250px"},attrs:{src:a._captchaImage,alt:"_captcha"}}):a._e()]),a._v(" "),e("div",[e("div",{staticClass:"button is-link",class:{"is-loading":a.loadingToken},attrs:{disabled:a.loadingToken},on:{click:a.refreshCaptcha}},[a._v("\n            Refresh Captcha\n          ")])])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Input Captcha\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.captcha,expression:"formData.captcha"}],staticClass:"input",attrs:{type:"text"},domProps:{value:a.formData.captcha},on:{input:function(t){t.target.composing||a.$set(a.formData,"captcha",t.target.value)}}})]),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormCaptcha,expression:"!isValidFormCaptcha"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(6,10))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field is-grouped"},[e("div",{staticClass:"control"},[e("div",{staticClass:"button is-link",class:{"is-loading":a.loadingSubmit},attrs:{disabled:a.loadingSubmit},on:{click:a.doSubmit}},[a._v("\n            Submit\n          ")])]),a._v(" "),a._m(0)])]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.isHaveError,expression:"isHaveError"}],staticClass:"notification is-danger",staticStyle:{"margin-top":"1em"}},[e("span",[a._v("Please fill all required fields before submitting data.")]),a._v(" "),e("br"),a._v(" "),e("span",[a._v(a._s(a.error))])])])])},[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"control"},[t("a",{staticClass:"button is-text",attrs:{href:"/"}},[this._v("\n            Cancel\n          ")])])}],!1,null,"2a7dd2f3",null);n.options.__file="register.vue";t.default=n.exports}}]);