!function e(t,s,o){function r(a,i){if(!s[a]){if(!t[a]){var l="function"==typeof require&&require;if(!i&&l)return l(a,!0);if(n)return n(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=s[a]={exports:{}};t[a][0].call(u.exports,function(e){var s=t[a][1][e];return r(s||e)},u,u.exports,e,t,s,o)}return s[a].exports}for(var n="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({"/home/asus/web/web4/node_modules/babel-runtime/core-js/object/define-property.js":[function(e,t,s){t.exports={default:e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":"/home/asus/web/web4/node_modules/core-js/library/fn/object/define-property.js"}],"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js":[function(e,t,s){"use strict";s.__esModule=!0,s.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js":[function(e,t,s){"use strict";s.__esModule=!0;var o=function(e){return e&&e.__esModule?e:{default:e}}(e("../core-js/object/define-property"));s.default=function(){function e(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(t,s,o){return s&&e(t.prototype,s),o&&e(t,o),t}}()},{"../core-js/object/define-property":"/home/asus/web/web4/node_modules/babel-runtime/core-js/object/define-property.js"}],"/home/asus/web/web4/node_modules/core-js/library/fn/object/define-property.js":[function(e,t,s){e("../../modules/es6.object.define-property");var o=e("../../modules/_core").Object;t.exports=function(e,t,s){return o.defineProperty(e,t,s)}},{"../../modules/_core":"/home/asus/web/web4/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.define-property":"/home/asus/web/web4/node_modules/core-js/library/modules/es6.object.define-property.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_a-function.js":[function(e,t,s){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_an-object.js":[function(e,t,s){var o=e("./_is-object");t.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":"/home/asus/web/web4/node_modules/core-js/library/modules/_is-object.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_core.js":[function(e,t,s){var o=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_ctx.js":[function(e,t,s){var o=e("./_a-function");t.exports=function(e,t,s){if(o(e),void 0===t)return e;switch(s){case 1:return function(s){return e.call(t,s)};case 2:return function(s,o){return e.call(t,s,o)};case 3:return function(s,o,r){return e.call(t,s,o,r)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":"/home/asus/web/web4/node_modules/core-js/library/modules/_a-function.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js":[function(e,t,s){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":"/home/asus/web/web4/node_modules/core-js/library/modules/_fails.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_dom-create.js":[function(e,t,s){var o=e("./_is-object"),r=e("./_global").document,n=o(r)&&o(r.createElement);t.exports=function(e){return n?r.createElement(e):{}}},{"./_global":"/home/asus/web/web4/node_modules/core-js/library/modules/_global.js","./_is-object":"/home/asus/web/web4/node_modules/core-js/library/modules/_is-object.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_export.js":[function(e,t,s){var o=e("./_global"),r=e("./_core"),n=e("./_ctx"),a=e("./_hide"),i=function(e,t,s){var l,c,u,d=e&i.F,p=e&i.G,b=e&i.S,m=e&i.P,h=e&i.B,f=e&i.W,y=p?r:r[t]||(r[t]={}),g=y.prototype,w=p?o:b?o[t]:(o[t]||{}).prototype;p&&(s=t);for(l in s)(c=!d&&w&&void 0!==w[l])&&l in y||(u=c?w[l]:s[l],y[l]=p&&"function"!=typeof w[l]?s[l]:h&&c?n(u,o):f&&w[l]==u?function(e){var t=function(t,s,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,s)}return new e(t,s,o)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(u):m&&"function"==typeof u?n(Function.call,u):u,m&&((y.virtual||(y.virtual={}))[l]=u,e&i.R&&g&&!g[l]&&a(g,l,u)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,t.exports=i},{"./_core":"/home/asus/web/web4/node_modules/core-js/library/modules/_core.js","./_ctx":"/home/asus/web/web4/node_modules/core-js/library/modules/_ctx.js","./_global":"/home/asus/web/web4/node_modules/core-js/library/modules/_global.js","./_hide":"/home/asus/web/web4/node_modules/core-js/library/modules/_hide.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_fails.js":[function(e,t,s){t.exports=function(e){try{return!!e()}catch(e){return!0}}},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_global.js":[function(e,t,s){var o=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_hide.js":[function(e,t,s){var o=e("./_object-dp"),r=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,s){return o.f(e,t,r(1,s))}:function(e,t,s){return e[t]=s,e}},{"./_descriptors":"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"/home/asus/web/web4/node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"/home/asus/web/web4/node_modules/core-js/library/modules/_property-desc.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_ie8-dom-define.js":[function(e,t,s){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js","./_dom-create":"/home/asus/web/web4/node_modules/core-js/library/modules/_dom-create.js","./_fails":"/home/asus/web/web4/node_modules/core-js/library/modules/_fails.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_is-object.js":[function(e,t,s){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_object-dp.js":[function(e,t,s){var o=e("./_an-object"),r=e("./_ie8-dom-define"),n=e("./_to-primitive"),a=Object.defineProperty;s.f=e("./_descriptors")?Object.defineProperty:function(e,t,s){if(o(e),t=n(t,!0),o(s),r)try{return a(e,t,s)}catch(e){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(e[t]=s.value),e}},{"./_an-object":"/home/asus/web/web4/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js","./_ie8-dom-define":"/home/asus/web/web4/node_modules/core-js/library/modules/_ie8-dom-define.js","./_to-primitive":"/home/asus/web/web4/node_modules/core-js/library/modules/_to-primitive.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/_property-desc.js":[function(e,t,s){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],"/home/asus/web/web4/node_modules/core-js/library/modules/_to-primitive.js":[function(e,t,s){var o=e("./_is-object");t.exports=function(e,t){if(!o(e))return e;var s,r;if(t&&"function"==typeof(s=e.toString)&&!o(r=s.call(e)))return r;if("function"==typeof(s=e.valueOf)&&!o(r=s.call(e)))return r;if(!t&&"function"==typeof(s=e.toString)&&!o(r=s.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":"/home/asus/web/web4/node_modules/core-js/library/modules/_is-object.js"}],"/home/asus/web/web4/node_modules/core-js/library/modules/es6.object.define-property.js":[function(e,t,s){var o=e("./_export");o(o.S+o.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":"/home/asus/web/web4/node_modules/core-js/library/modules/_descriptors.js","./_export":"/home/asus/web/web4/node_modules/core-js/library/modules/_export.js","./_object-dp":"/home/asus/web/web4/node_modules/core-js/library/modules/_object-dp.js"}],"/home/asus/web/web4/resources/assets/js/back/announcement.js":[function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0}),s.Announcement=void 0;var r=o(e("babel-runtime/helpers/classCallCheck")),n=o(e("babel-runtime/helpers/createClass"));s.Announcement=function(){function e(){(0,r.default)(this,e),$("#createAnnouncementForm").length&&this.create(),$("#editAnnouncementForm").length&&this.edit()}return(0,n.default)(e,[{key:"create",value:function(){var e=$("#createAnnouncementForm"),t=$("#editorEN").summernote({height:300,callbacks:{onImageUpload:function(s){if(s[0].size>2e6)noty({text:"File smaller than 2Mb.",type:"error"});else if("image/jpeg"!==s[0].type&&"image/png"!==s[0].type)noty({text:"File must be jpg or png.",type:"error"});else{var o=new FormData;o.append("imageFile",s[0]),$.ajax({data:o,type:"post",url:e.data("upload"),cache:!1,contentType:!1,processData:!1,success:function(e){"success"===e.type?t.summernote("insertImage",e.url):noty({text:e.message,type:e.type})}})}}}}),s=$("#editorCHS").summernote({height:300,callbacks:{onImageUpload:function(t){if(t[0].size>2e6)noty({text:"File smaller than 2Mb.",type:"error"});else if("image/jpeg"!==t[0].type&&"image/png"!==t[0].type)noty({text:"File must be jpg or png.",type:"error"});else{var o=new FormData;o.append("imageFile",t[0]),$.ajax({data:o,type:"post",url:e.data("upload"),cache:!1,contentType:!1,processData:!1,success:function(e){"success"===e.type?s.summernote("insertImage",e.url):noty({text:e.message,type:e.type})}})}}}}),o=$("#editorCHT").summernote({height:300,callbacks:{onImageUpload:function(t){if(t[0].size>2e6)noty({text:"File smaller than 2Mb.",type:"error"});else if("image/jpeg"!==t[0].type&&"image/png"!==t[0].type)noty({text:"File must be jpg or png.",type:"error"});else{var s=new FormData;s.append("imageFile",t[0]),$.ajax({data:s,type:"post",url:e.data("upload"),cache:!1,contentType:!1,processData:!1,success:function(e){"success"===e.type?o.summernote("insertImage",e.url):noty({text:e.message,type:e.type})}})}}}}),r=!1;e.on("click","[type=submit]",function(t){var s=$(this);if(t.preventDefault(),r)return noty({text:"A form process is still running.",type:"information"}),!1;if(!e.parsley().validate())return noty({text:"Invalid value on form. Check again.",type:"warning"}),!1;if(confirm("Submit?")){r=!0;var o=e.find(":input");o.prop("readonly",!0),s.disable(!0),$.post(e.data("url"),{data:e.serializeForm()}).done(function(e){r=!1,o.prop("readonly",!1),s.disable(!1),noty({text:e.message,type:e.type})}).fail(function(e,t,n){r=!1,o.prop("readonly",!1),s.disable(!1),noty({text:e.responseText,type:"error"})})}})}},{key:"edit",value:function(){var e=$("#editAnnouncementForm"),t=$("#editorEN").summernote({height:300,callbacks:{onImageUpload:function(s){if(s[0].size>2e6)noty({text:"File smaller than 2Mb.",type:"error"});else if("image/jpeg"!==s[0].type&&"image/png"!==s[0].type)noty({text:"File must be jpg or png.",type:"error"});else{var o=new FormData;o.append("imageFile",s[0]),$.ajax({data:o,type:"post",url:e.data("upload"),cache:!1,contentType:!1,processData:!1,success:function(e){"success"===e.type?t.summernote("insertImage",e.url):noty({text:e.message,type:e.type})}})}}}}),s=$("#editorCHS").summernote({height:300,callbacks:{onImageUpload:function(t){if(t[0].size>2e6)noty({text:"File smaller than 2Mb.",type:"error"});else if("image/jpeg"!==t[0].type&&"image/png"!==t[0].type)noty({text:"File must be jpg or png.",type:"error"});else{var o=new FormData;o.append("imageFile",t[0]),$.ajax({data:o,type:"post",url:e.data("upload"),cache:!1,contentType:!1,processData:!1,success:function(e){"success"===e.type?s.summernote("insertImage",e.url):noty({text:e.message,type:e.type})}})}}}}),o=$("#editorCHT").summernote({height:300,callbacks:{onImageUpload:function(t){if(t[0].size>2e6)noty({text:"File smaller than 2Mb.",type:"error"});else if("image/jpeg"!==t[0].type&&"image/png"!==t[0].type)noty({text:"File must be jpg or png.",type:"error"});else{var s=new FormData;s.append("imageFile",t[0]),$.ajax({data:s,type:"post",url:e.data("upload"),cache:!1,contentType:!1,processData:!1,success:function(e){"success"===e.type?o.summernote("insertImage",e.url):noty({text:e.message,type:e.type})}})}}}}),r=!1;e.on("click","[type=submit]",function(t){var s=$(this);if(t.preventDefault(),r)return noty({text:"A form process is still running.",type:"information"}),!1;if(!e.parsley().validate())return noty({text:"Invalid value on form. Check again.",type:"warning"}),!1;if(confirm("Submit?")){r=!0;var o=e.find(":input");o.prop("readonly",!0),s.disable(!0),$.post(e.data("url"),{data:e.serializeForm()}).done(function(e){r=!1,o.prop("readonly",!1),s.disable(!1),noty({text:e.message,type:e.type})}).fail(function(e,t,n){r=!1,o.prop("readonly",!1),s.disable(!1),noty({text:e.responseText,type:"error"})})}})}}]),e}()},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}],"/home/asus/web/web4/resources/assets/js/back/core.js":[function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0}),s.Core=void 0;var r=o(e("babel-runtime/helpers/classCallCheck")),n=o(e("babel-runtime/helpers/createClass"));s.Core=function(){function e(){(0,r.default)(this,e),this.disable(),this.notyDefault(),this.serializeForm(),this.setupAjax(),this.setupForm()}return(0,n.default)(e,[{key:"disable",value:function(){$.fn.extend({disable:function(e){return this.each(function(){e?($(this).find("span").hide(),$(this).find(".icon-spin").show(),$(this).attr("disabled","disabled").find(".btn-preloader").show()):($(this).find("span").show(),$(this).find(".icon-spin").hide(),$(this).removeAttr("disabled").find(".btn-preloader").hide())})}})}},{key:"notyDefault",value:function(){$.noty.defaults={layout:"top",theme:"relax",type:"alert",text:"",dismissQueue:!0,force:!1,maxVisible:5,template:'<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',timeout:5e3,animation:{open:"animated fadeInDown",close:"animated fadeOutUp",easing:"swing",speed:500},closeWith:["click"],modal:!1,killer:!1,callback:{onShow:function(){},afterShow:function(){},onClose:function(){},afterClose:function(){},onCloseClick:function(){}},buttons:!1}}},{key:"serializeForm",value:function(){$.fn.serializeForm=function(){var e,t,s,o;return e=void 0,t=void 0,s=void 0,o=void 0,!(this.length<1)&&(e={},t=e,o=':input[type!="checkbox"][type!="radio"], input:checked',s=function(){var s,o,r,n;if(s=void 0,o=void 0,r=void 0,n=void 0,!this.disabled&&(n=this.name.replace(/\[([^\]]+)?\]/g,",$1").split(","),o=n.length-1,s=$(this),n[0])){for(r=0;r<o;)t=t[n[r]]=t[n[r]]||(""===n[r+1]||"0"===n[r+1]?[]:{}),r++;void 0!==t.length?t.push(s.val()):t[n[o]]=s.val(),t=e}},this.filter(o).each(s),this.find(o).each(s),e)}}},{key:"setupAjax",value:function(){$.ajaxSetup({statusCode:{403:function(e){return noty({text:"Forbidden Content.",type:"warning"}),!1},404:function(e){return noty({text:"Route not found.",type:"warning"}),!1},500:function(e){return noty({text:"Internal server error.",type:"error"}),!1}},crossDomain:!1,dataType:"json",cache:!0,headers:{"X-CSRF-Token":$('meta[name="_t"]').attr("content")}})}},{key:"setupForm",value:function(){var e=!1,t=["GET","POST","PUT","PATCH","DELETE"];$(".action-form").each(function(s){var o=$(this);o.on("click","[type=submit]",function(s){s.preventDefault();var r=$(this);if(e)return noty({text:"A form process is still running.",type:"information"}),!1;var n=o.attr("http-type").toUpperCase();if(-1===t.indexOf(n))return noty({text:"HTTP type not allowed.",type:"warning"}),!1;if(!o.parsley().validate())return noty({text:"Invalid value on form. Check again.",type:"warning"}),!1;if(confirm("Submit?")){e=!0;var a=o.find(":input");a.prop("readonly",!0),r.disable(!0);var i={};i.data=o.serializeForm(),$.each(o.data(),function(e,t){if("nationality"===e){if($("#inputNationality").length){var s=$("#inputNationality").data("ddslick");i.data.nationality=s.selectedData.value}if($("#inputBeneficiaryNationality").length){var o=$("#inputBeneficiaryNationality").data("ddslick");i.data.beneficiary_nationality=o.selectedData.value}}}),$.ajax({type:n,data:i,url:o.data("url"),success:function(t){noty({text:t.message,type:t.type}),e=!1,a.prop("readonly",!1),r.disable(!1),"success"===t.type&&void 0!==t.redirect&&window.location.replace(t.redirect)},error:function(t,s,o){noty({text:t.responseText,type:"error"}),e=!1,a.prop("readonly",!1),r.disable(!1)}})}})})}}]),e}()},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}],"/home/asus/web/web4/resources/assets/js/back/datatable.js":[function(e,t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.DataTable=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(e("babel-runtime/helpers/classCallCheck"));s.DataTable=function e(){(0,o.default)(this,e);var t=$(".table-grid"),s=$("#showModal"),r=s.find(".loading"),n=s.find(".error"),a=s.find("#modalContent"),i=$("#pageLoader");t.each(function(e){var t=$(this),s=[];t.find("th").each(function(){var e=$(this),t={};t.data=e.data("id"),$.each(e.data(),function(e,s){"id"!==e&&(t[e]=s)}),s.push(t)}),t.dataTable({serverSide:!0,processing:!0,language:window._dataTablesLang,searchDelay:1e3,responsive:!0,ajax:t.data("url"),columns:s,order:[0,"desc"]}),t.on("click",".btn-show",function(e){e.preventDefault();var t=$(this);r.show(),n.hide(),a.empty(),$.ajax({type:"get",dataType:"html",url:t.data("url"),success:function(e){r.hide(),a.html(e)},error:function(e,t,s){r.hide(),n.show(),console.log(e.responseText)}})}),t.on("click",".btn-delete",function(e){if(e.preventDefault(),confirm("Remove?")){i.show();var t=$(this);$.ajax({type:"delete",url:t.data("url"),success:function(e){i.hide(),noty({text:e.message,type:e.type}),"success"===e.type&&t.parents("tr").remove()},error:function(e,t,s){i.hide(),noty({text:e.responseText,type:"error"})}})}})})}},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/home/asus/web/web4/resources/assets/js/back/index.js":[function(e,t,s){"use strict";function o(){var e;$("body").hasClass("fixed-sidebar")?(e=$(window).height()-$("#page-header").height(),$("#page-sidebar").css("height",e),$(".scroll-sidebar").css("height",e),$("#page-content").css("min-height",e)):(e=$(document).height()-$("#page-header").height(),$("#page-sidebar").css("height",e),$(".scroll-sidebar").css("height",e),$("#page-content").css("min-height",e))}var r=e("./core"),n=e("./widget"),a=e("./datatable"),i=e("./announcement"),l=e("./package"),c=e("./register"),u=e("./shares"),d=e("./withdraw");new r.Core,new n.Widget,new a.DataTable,new i.Announcement,new l.Package,new c.Register,new u.Shares,new d.Withdraw,setTimeout(function(){$("#loading").fadeOut(400,"linear")},300),$(window).on("resize",function(){o()}),o(),function(){var e=[".pt-page-moveFromLeft","pt-page-moveFromRight","pt-page-moveFromTop","pt-page-moveFromBottom","pt-page-fade","pt-page-moveFromLeftFade","pt-page-moveFromRightFade","pt-page-moveFromTopFade","pt-page-moveFromBottomFade","pt-page-scaleUp","pt-page-scaleUpCenter","pt-page-flipInLeft","pt-page-flipInRight","pt-page-flipInBottom","pt-page-flipInTop","pt-page-rotatePullRight","pt-page-rotatePullLeft","pt-page-rotatePullTop","pt-page-rotatePullBottom","pt-page-rotateUnfoldLeft","pt-page-rotateUnfoldRight","pt-page-rotateUnfoldTop","pt-page-rotateUnfoldBottom"];for(var t in e){var s=e[t];if($(".add-transition").hasClass(s))return $(".add-transition").addClass(s+"-init page-transition"),void setTimeout(function(){$(".add-transition").removeClass(s+" "+s+"-init page-transition")},1200)}}(),$.slidebars(),$("div[id='#fixed-sidebar']").on("click",function(){if($(this).hasClass("switch-on")){o=(t=$(window).height())-(s=$("#page-header").height());$("#page-sidebar").css("height",o),$(".scroll-sidebar").css("height",o),$(".scroll-sidebar").slimscroll({height:"100%",color:"rgba(155, 164, 169, 0.68)",size:"6px"});var e=$("#page-header").attr("class");$("#header-logo").addClass(e)}else{var t=$(document).height(),s=$("#page-header").height(),o=t-s;$("#page-sidebar").css("height",o),$(".scroll-sidebar").css("height",o),$(".scroll-sidebar").slimScroll({destroy:!0}),$("#header-logo").removeClass("bg-gradient-9")}}),$(".dropdown").on("show.bs.dropdown",function(){$(this).find(".dropdown-menu").first().stop(!0,!0).slideDown()}),$(".dropdown").on("hide.bs.dropdown",function(){$(this).find(".dropdown-menu").first().stop(!0,!0).slideUp()}),$(function(){$("#sidebar-menu").superclick({animation:{height:"show"},animationOut:{height:"hide"}});var e=window.location.pathname.split("/");void 0!==(e=e[e.length-1])&&($("#sidebar-menu").find("a[href$='"+e+"']").addClass("sfActive"),$("#sidebar-menu").find("a[href$='"+e+"']").parents().eq(3).superclick("show")),$("#close-sidebar").click(function(){$("body").toggleClass("closed-sidebar"),$(".glyph-icon",this).toggleClass("icon-angle-right").toggleClass("icon-angle-left")})}),$("#exchangeRateChart").length&&$.when($.getScript(window._root+"/lib/chart-core.js"),$.Deferred(function(e){$(e.resolve)})).done(function(){var e=window._exchangeRate,t=[],s=[],o=[];$.each(e,function(e,r){t.push(e+" ("+r.currency+")"),s.push(r.buy),o.push(r.sell)});var r={type:"line",data:{labels:t,datasets:[{label:"Buy",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:s,fill:!1},{label:"Sell",backgroundColor:"rgb(54, 162, 235)",borderColor:"rgb(54, 162, 235)",data:o,fill:!1}]},options:{maintainAspectRatio:!1,responsive:!0,title:{display:!0,text:"Exchange Rates"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Country"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"BUY/SELL Value"}}]}}},n=document.getElementById("exchangeRateChart").getContext("2d");n.height=500,new Chart(n,r)}).fail(function(e,t,s){console.log(e.responseText)})},{"./announcement":"/home/asus/web/web4/resources/assets/js/back/announcement.js","./core":"/home/asus/web/web4/resources/assets/js/back/core.js","./datatable":"/home/asus/web/web4/resources/assets/js/back/datatable.js","./package":"/home/asus/web/web4/resources/assets/js/back/package.js","./register":"/home/asus/web/web4/resources/assets/js/back/register.js","./shares":"/home/asus/web/web4/resources/assets/js/back/shares.js","./widget":"/home/asus/web/web4/resources/assets/js/back/widget.js","./withdraw":"/home/asus/web/web4/resources/assets/js/back/withdraw.js"}],"/home/asus/web/web4/resources/assets/js/back/package.js":[function(e,t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.Package=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(e("babel-runtime/helpers/classCallCheck"));s.Package=function e(){if((0,o.default)(this,e),$("#packageListTable").length){var t=$("#packageListTable"),s=$("#pageLoader"),r=!1;t.on("click","[type=submit]",function(e){var t=$(this),o=t.closest("tr");confirm("Submit?")&&(r?noty({type:"information",text:"A process is still ongoing."}):(s.show(),r=!0,$.ajax({type:"post",url:t.data("url"),data:{data:o.serializeForm()},success:function(e){s.hide(),r=!1,noty({type:e.type,text:e.message})},error:function(e,t,o){s.hide(),r=!1,noty({type:"error",text:e.responseText})}})))})}}},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/home/asus/web/web4/resources/assets/js/back/register.js":[function(e,t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.Register=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(e("babel-runtime/helpers/classCallCheck"));s.Register=function e(){if((0,o.default)(this,e),$("#registerForm").length){var t=$("#registerForm").find(".btn-show"),s=$("#showModal"),r=s.find(".loading"),n=s.find(".error"),a=s.find("#modalContent");t.on("click",function(e){e.preventDefault();var t=$(this);r.show(),n.hide(),a.empty(),$.ajax({type:"get",dataType:"html",url:t.data("url")+"?u="+t.parent().closest(".form-group").find(".form-control").val(),success:function(e){r.hide(),a.html(e)},error:function(e,t,s){r.hide(),n.show(),console.log(e.responseText)}})})}}},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/home/asus/web/web4/resources/assets/js/back/shares.js":[function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0}),s.Shares=void 0;var r=o(e("babel-runtime/helpers/classCallCheck")),n=o(e("babel-runtime/helpers/createClass"));s.Shares=function(){function e(){(0,r.default)(this,e),$("#sharesListTable").length&&this.list(),$("#removeSharesBtn").length&&this.removeQueue(),$("#splitForm").length&&this.split(),$("#sharesFreezeListTable").length&&this.freezeList(),$("#sharesBuyListTable").length&&this.buyList(),$("#sharesSellListTable").length&&this.sellList(),$("#sharesFollowListTable").length&&this.followList()}return(0,n.default)(e,[{key:"list",value:function(){var e=$("#sharesListTable"),t=$("#pageLoader"),s=!1;e.on("click","[type=submit]",function(e){var o=$(this),r=o.closest("tr");confirm("Submit?")&&(s?noty({type:"information",text:"A process is still ongoing."}):(t.show(),s=!0,$.ajax({type:"post",url:o.data("url"),data:{data:r.serializeForm()},success:function(e){t.hide(),s=!1,noty({type:e.type,text:e.message})},error:function(e,o,r){t.hide(),s=!1,noty({type:"error",text:e.responseText})}})))})}},{key:"removeQueue",value:function(){$("#removeSharesBtn").on("click",function(){if(confirm("Remove? Cannot be undo.")){var e=$(this);e.disable(!0),$.post(e.data("url")).done(function(t){noty({text:t.message,type:t.type}),e.disable(!1)}).fail(function(t,s,o){noty({text:t.responseText,type:"error"}),e.disable(!1)})}})}},{key:"split",value:function(){var e=parseFloat($("#currentShares").text()),t=$("#splitForm"),s=t.find("[name=split_to]"),o=t.find("[name=split_by]");s.on("input",function(){var t=$(this),s=e/parseFloat(t.val());o.val(s.toFixed(3))})}},{key:"freezeList",value:function(){var e=$("#sharesFreezeListTable"),t=$("#pageLoader"),s=!1;e.on("click",".btn-unlock",function(e){var o=$(this);confirm("Unlock?")&&(s?noty({type:"information",text:"A process is still ongoing."}):(t.show(),s=!0,$.ajax({type:"post",url:o.data("url"),success:function(e){t.hide(),s=!1,noty({type:e.type,text:e.message})},error:function(e,o,r){t.hide(),s=!1,noty({type:"error",text:e.responseText})}})))}),e.on("click",".btn-edit",function(e){var o=$(this),r=o.closest("tr");confirm("Update?")&&(s?noty({type:"information",text:"A process is still ongoing."}):(t.show(),s=!0,$.ajax({type:"post",url:o.data("url"),data:{data:r.serializeForm()},success:function(e){t.hide(),s=!1,noty({type:e.type,text:e.message})},error:function(e,o,r){t.hide(),s=!1,noty({type:"error",text:e.responseText})}})))})}},{key:"buyList",value:function(){var e=$("#sharesBuyListTable"),t=$("#pageLoader"),s=!1;e.on("click",".btn-edit",function(e){var o=$(this),r=o.closest("tr");confirm("Update?")&&(s?noty({type:"information",text:"A process is still ongoing."}):(t.show(),s=!0,$.ajax({type:"post",url:o.data("url"),data:{data:r.serializeForm()},success:function(e){t.hide(),s=!1,noty({type:e.type,text:e.message})},error:function(e,o,r){t.hide(),s=!1,noty({type:"error",text:e.responseText})}})))})}},{key:"sellList",value:function(){var e=$("#sharesSellListTable"),t=$("#pageLoader"),s=!1;e.on("click",".btn-edit",function(e){var o=$(this),r=o.closest("tr");confirm("Update?")&&(s?noty({type:"information",text:"A process is still ongoing."}):(t.show(),s=!0,$.ajax({type:"post",url:o.data("url"),data:{data:r.serializeForm()},success:function(e){t.hide(),s=!1,noty({type:e.type,text:e.message})},error:function(e,o,r){t.hide(),s=!1,noty({type:"error",text:e.responseText})}})))})}},{key:"followList",value:function(){var e=$("#sharesFollowListTable"),t=$("#pageLoader"),s=!1;e.on("click",".btn-unlock",function(e){var o=$(this);confirm("Unlock?")&&(s?noty({type:"information",text:"A process is still ongoing."}):(t.show(),s=!0,$.ajax({type:"post",url:o.data("url"),success:function(e){t.hide(),s=!1,noty({type:e.type,text:e.message})},error:function(e,o,r){t.hide(),s=!1,noty({type:"error",text:e.responseText})}})))})}}]),e}()},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}],"/home/asus/web/web4/resources/assets/js/back/widget.js":[function(e,t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.Widget=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(e("babel-runtime/helpers/classCallCheck"));s.Widget=function e(){(0,o.default)(this,e),$('a[href="#"]').click(function(e){e.preventDefault()}),$(".todo-box li input").on("click",function(){$(this).parent().toggleClass("todo-done")});var t=0;$(".timeline-scroll .tl-row").each(function(e,s){var o=$(s);t+=o.outerWidth()+parseInt(o.css("margin-left"),10)+parseInt(o.css("margin-right"),10)}),$(".timeline-horizontal",this).width(t),$(".input-switch-alt").simpleCheckbox(),$('input[type="checkbox"].custom-checkbox').uniform(),$('input[type="radio"].custom-radio').uniform(),$(".custom-select").uniform(),$(".selector").append('<i class="glyph-icon icon-caret-down"></i>'),$(".checker span").append('<i class="glyph-icon icon-check"></i>'),$(".radio span").append('<i class="glyph-icon icon-circle"></i>'),$(".scrollable-slim").slimScroll({color:"#8da0aa",size:"10px",alwaysVisible:!0}),$(".scrollable-slim-sidebar").slimScroll({color:"#8da0aa",size:"10px",height:"100%",alwaysVisible:!0}),$(".scrollable-slim-box").slimScroll({color:"#8da0aa",size:"6px",alwaysVisible:!1}),$(".loading-button").click(function(){$(this).button("loading")}),$(".tooltip-button").tooltip({container:"body"}),$(".alert-close-btn").click(function(){$(this).parent().addClass("animated fadeOutDown")}),$(".popover-button").popover({container:"body",html:!0,animation:!0,content:function(){var e=$(this).attr("data-id");return $(e).html()}}).click(function(e){e.preventDefault()}),$(".popover-button-default").popover({container:"body",html:!0,animation:!0}).click(function(e){e.preventDefault()}),$(".datepicker").bsdatepicker({format:"yyyy-mm-dd"}),$(".input-switch").bootstrapSwitch(),document.getElementById("fullscreen-btn")&&document.getElementById("fullscreen-btn").addEventListener("click",function(){screenfull.enabled&&screenfull.request()}),$(".dd-icon").length&&$(".dd-icon").each(function(){$(this).ddslick({width:"100%",defaultSelectedIndex:$(this).prop("selectedIndex")})})}},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/home/asus/web/web4/resources/assets/js/back/withdraw.js":[function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0}),s.Withdraw=void 0;var r=o(e("babel-runtime/helpers/classCallCheck")),n=o(e("babel-runtime/helpers/createClass"));s.Withdraw=function(){function e(){(0,r.default)(this,e),$("#withdrawListTable").length&&this.list()}return(0,n.default)(e,[{key:"list",value:function(){var e=$("#withdrawListTable"),t=$("#pageLoader");e.on("click",".btn-confirm",function(){var e=$(this);confirm("Confirm this withdraw?")&&(t.show(),$.ajax({type:"post",url:e.data("url"),data:{status:"done"},success:function(e){noty({type:e.type,text:e.message}),t.hide()},error:function(e){noty({type:"error",text:e.responseText}),t.hide()}}))}),e.on("click",".btn-reject",function(){var e=$(this);confirm("Reject this withdraw?")&&(t.show(),$.ajax({type:"post",url:e.data("url"),data:{status:"reject"},success:function(e){noty({type:e.type,text:e.message}),t.hide()},error:function(e){noty({type:"error",text:e.responseText}),t.hide()}}))})}}]),e}()},{"babel-runtime/helpers/classCallCheck":"/home/asus/web/web4/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/home/asus/web/web4/node_modules/babel-runtime/helpers/createClass.js"}]},{},["/home/asus/web/web4/resources/assets/js/back/index.js"]);