(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fde25176"],{"1a5b":function(e,s,t){"use strict";t("a87f")},2017:function(e,s,t){"use strict";t("cafe")},"9ed6":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v(" "+e._s(e.$t("login.title"))+" ")]),t("lang-select",{staticClass:"set-language"})],1),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),t("el-input",{ref:"username",attrs:{placeholder:e.$t("login.username"),name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:e.$t("login.password"),name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin(s)}}},[e._v(" "+e._s(e.$t("login.logIn"))+" ")]),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"20px"}},[e._v(e._s(e.$t("login.username"))+" : admin")]),t("span",[e._v(e._s(e.$t("login.password"))+" : ABC12345")])])],1)],1)},o=[],a=t("61f7"),r=t("1131"),i=t("b893"),l={name:"Login",components:{LangSelect:r["a"]},data:function(){var e=this,s=function(s,t,n){Object(a["b"])(t)?n():n(new Error(e.$t("login.validUsernameError")))},t=function(s,t,n){t.length<6?n(new Error(e.$t("login.validatePasswordError"))):n()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:s}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(s){if(!s)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(s){s.code<0?Object(i["a"])(s):(e.$router.push({path:e.redirect||"/"}),e.loading=!1)})).catch((function(){e.loading=!1}))}))}}},c=l,u=(t("2017"),t("1a5b"),t("2877")),d=Object(u["a"])(c,n,o,!1,null,"00fb5cd6",null);s["default"]=d.exports},a87f:function(e,s,t){},b893:function(e,s,t){"use strict";t.d(s,"a",(function(){return o}));var n=t("5c96");function o(e,s){e.code>0?Object(n["Message"])({message:e.message,type:"success",duration:5e3}):Object(n["Message"])({message:e.message,type:"error",duration:5e3}),s&&s()}},cafe:function(e,s,t){}}]);