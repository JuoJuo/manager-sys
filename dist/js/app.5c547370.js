(function(e){function t(t){for(var a,i,n=t[0],l=t[1],d=t[2],u=0,m=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,n=1;n<o.length;n++){var l=o[n];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},s={app:0},r=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var d=0;d<n.length;d++)t(n[d]);var c=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var a=o("85ec"),s=o.n(a);s.a},"38bc":function(e,t,o){"use strict";var a=o("711a"),s=o.n(a);s.a},4678:function(e,t,o){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return o(t)}function r(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),s=o("f825"),r=o.n(s),i=o("3250"),n=o.n(i),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},d=[],c={mounted:function(){window.__router=this.$router}},u=c,m=(o("034f"),o("2877")),f=Object(m["a"])(u,l,d,!1,null,null,null),p=f.exports,h=o("8c4f"),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("Card",{staticClass:"cd",attrs:{shadow:""}},[o("div",[o("p",{staticClass:"txt-ct",staticStyle:{height:"80px"}},[e._v("Login")]),o("Form",{attrs:{model:e.loginForm,"label-width":80}},[o("FormItem",{attrs:{label:"Username"}},[o("Input",{attrs:{placeholder:"username/phone",size:"large"},model:{value:e.loginForm.uname,callback:function(t){e.$set(e.loginForm,"uname",t)},expression:"loginForm.uname"}},[o("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),o("FormItem",{attrs:{label:"Password"}},[o("Input",{attrs:{placeholder:"password",size:"large",type:"password"},on:{"on-enter":e.login},model:{value:e.loginForm.pwd,callback:function(t){e.$set(e.loginForm,"pwd",t)},expression:"loginForm.pwd"}},[o("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),o("FormItem",[o("Row",{staticClass:"btm",attrs:{type:"flex",justify:"center",gutter:16}},[o("Col",{attrs:{span:"12"}},[o("Button",{staticStyle:{width:"100%"},attrs:{size:"large",type:"primary"},on:{click:e.login}},[e._v("Admin Login")])],1),o("Col",{attrs:{span:"12"}},[o("Button",{staticStyle:{width:"100%"},attrs:{size:"large",type:"success"},on:{click:e.loginWithWaiter}},[e._v("Waiter Login")])],1)],1)],1)],1)],1)])],1)},b=[],y=(o("d3b7"),o("bc3a")),w=o.n(y),j=w.a.create(),v=!1;j.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){var t=e.response,o=t.data,a=t.status;return 401!==a||v||(v=!0,alert(o.msg),window.__router.push({name:"login"})),Promise.reject(e)}));var k=j,F={name:"Login",data:function(){return{loginForm:{uname:"",pwd:""}}},methods:{login:function(){var e=this;k.post("/api/loginManager",this.loginForm).then((function(t){var o=t.data;e.$Message.success("login success!"),localStorage.clear(),localStorage.setItem("admin",JSON.stringify(o)),e.loginForm={uname:"",pwd:""},e.$router.push({name:"index"})})).catch((function(t){var o=t.response;e.$Message.error(o.data.msg)}))},loginWithWaiter:function(){var e=this;k.post("/api/loginWaiter",this.loginForm).then((function(t){var o=t.data;e.$Message.success("login success!"),localStorage.clear(),localStorage.setItem("waiter",JSON.stringify(o)),e.loginForm={uname:"",pwd:""},e.$router.push({name:"index"})})).catch((function(t){var o=t.response;e.$Message.error(o.data.msg)}))}}},M=F,S=(o("38bc"),Object(m["a"])(M,g,b,!1,null,"d25fcb62",null)),x=S.exports,W=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"layout"},[o("Layout",[o("Header",[o("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"},on:{"on-select":e.logout}},[o("div",{staticClass:"layout-logo"}),o("div",{staticClass:"layout-nav"},[o("MenuItem",{staticClass:"layout-nav",attrs:{name:"1"}},[o("Icon",{attrs:{type:"ios-walk"}}),e._v(" Logout ")],1)],1)])],1),o("Content",{staticClass:"content"},[o("Breadcrumb",{style:{margin:"20px 0"}},[o("BreadcrumbItem",[e._v("Home")]),o("BreadcrumbItem",[e._v("View")])],1),e.waiter?o("Tabs",{on:{"on-click":e.tabClick}},[o("TabPane",{attrs:{label:"Order",icon:"ios-document"}},[o("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"info",disabled:1!==e.selectedOrders.length},on:{click:e.changeStatus}},[e._v(" Change Order Status ")]),o("Table",{attrs:{columns:e.oHeaders,data:e.orderList},on:{"on-selection-change":e.orderSelect}})],1)],1):o("Tabs",{on:{"on-click":e.tabClick}},[o("TabPane",{attrs:{label:"Waiter",icon:"md-person"}},[o("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"info"},on:{click:e.openAddWaiter}},[e._v(" Add Waiter ")]),o("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"warning",disabled:1!==this.selectedWaiters.length},on:{click:e.openModifyWaiter}},[e._v(" Modify Waiter ")]),o("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"error",disabled:1!==this.selectedWaiters.length},on:{click:e.showDeleteWaiterModal}},[e._v(" Delete Waiter ")]),o("Table",{attrs:{columns:e.wHeaders,data:e.waiterList},on:{"on-selection-change":e.select}})],1),o("TabPane",{attrs:{label:"Order",icon:"ios-document"}},[o("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"info",disabled:1!==e.selectedOrders.length},on:{click:e.changeStatus}},[e._v(" Change Order Status ")]),o("Table",{attrs:{columns:e.oHeaders,data:e.orderList,"show-summary":"","summary-method":e.handleSummary},on:{"on-selection-change":e.orderSelect}})],1),o("TabPane",{attrs:{label:"Goods",icon:"ios-document"}},[o("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"info"},on:{click:e.changeGoodsModal}},[e._v(" Add Goods ")]),o("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"warning",disabled:1!==e.selectedGoods.length},on:{click:e.modifyGoodsShow}},[e._v(" Modify Goods ")]),o("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"error",disabled:1!==e.selectedGoods.length},on:{click:function(t){e.showDeleteGoods=!0}}},[e._v(" Delete Goods ")]),o("Table",{attrs:{columns:e.gHeaders,data:e.goodsList},on:{"on-selection-change":e.goodsSelect}})],1)],1)],1),o("Footer",{staticClass:"layout-footer-center"},[e._v("2020-2099 © Jack")])],1),o("Modal",{attrs:{title:"Add Waiter","mask-closable":!1},on:{"on-ok":e.createWaiter,"on-cancel":e.cancelWaiterCreate},model:{value:e.showAdd,callback:function(t){e.showAdd=t},expression:"showAdd"}},[o("Form",{attrs:{model:e.waiterForm,"label-position":"left","label-width":160}},[o("FormItem",{attrs:{label:"waiter phone"}},[o("Input",{model:{value:e.waiterForm.phone,callback:function(t){e.$set(e.waiterForm,"phone",t)},expression:"waiterForm.phone"}})],1),o("FormItem",{attrs:{label:"email"}},[o("Input",{model:{value:e.waiterForm.email,callback:function(t){e.$set(e.waiterForm,"email",t)},expression:"waiterForm.email"}})],1),o("FormItem",{attrs:{label:"password"}},[o("Input",{attrs:{type:"password"},model:{value:e.waiterForm.password,callback:function(t){e.$set(e.waiterForm,"password",t)},expression:"waiterForm.password"}})],1)],1)],1),o("Modal",{attrs:{title:"Modify Waiter","mask-closable":!1},on:{"on-ok":e.ModifyWaiter,"on-cancel":e.cancelModifyWaiter},model:{value:e.showModifyWaiter,callback:function(t){e.showModifyWaiter=t},expression:"showModifyWaiter"}},[o("Form",{attrs:{model:e.waiterFormModify,"label-position":"left","label-width":160}},[o("FormItem",{attrs:{label:"waiter phone"}},[o("Input",{model:{value:e.waiterFormModify.phone,callback:function(t){e.$set(e.waiterFormModify,"phone",t)},expression:"waiterFormModify.phone"}})],1),o("FormItem",{attrs:{label:"email"}},[o("Input",{model:{value:e.waiterFormModify.email,callback:function(t){e.$set(e.waiterFormModify,"email",t)},expression:"waiterFormModify.email"}})],1),o("FormItem",{attrs:{label:"password"}},[o("Input",{attrs:{type:"password"},model:{value:e.waiterFormModify.password,callback:function(t){e.$set(e.waiterFormModify,"password",t)},expression:"waiterFormModify.password"}})],1)],1)],1),o("Modal",{attrs:{title:"Notice"},on:{"on-ok":e.deleteWaiter},model:{value:e.showDeleteWaiter,callback:function(t){e.showDeleteWaiter=t},expression:"showDeleteWaiter"}},[o("p",[e._v("Are you sure delete this waiter account?")])]),o("Modal",{attrs:{title:"Modify Waiter","mask-closable":!1},on:{"on-ok":e.ModifyOrder,"on-cancel":e.cancelModifyOrder},model:{value:e.changeStatusModal,callback:function(t){e.changeStatusModal=t},expression:"changeStatusModal"}},[o("Form",{attrs:{model:e.orderFormSelected,"label-position":"left","label-width":160}},[o("FormItem",{attrs:{label:"Order Id"}},[e._v(" "+e._s(e.orderFormSelected._id)+" ")]),o("FormItem",{attrs:{label:"Status"}},[o("Select",{staticStyle:{width:"200px"},model:{value:e.orderFormSelected.status,callback:function(t){e.$set(e.orderFormSelected,"status",t)},expression:"orderFormSelected.status"}},[o("Option",{attrs:{value:"Confirming"}},[e._v("Confirming")]),o("Option",{attrs:{value:"Making"}},[e._v("Making")]),o("Option",{attrs:{value:"Canceled"}},[e._v("Canceled")]),o("Option",{attrs:{value:"Completed"}},[e._v("Completed")])],1)],1)],1)],1),o("Modal",{attrs:{title:"Add Goods","mask-closable":!1},on:{"on-ok":e.createGoods,"on-cancel":function(){return e.goodsModalShow=!1}},model:{value:e.goodsModalShow,callback:function(t){e.goodsModalShow=t},expression:"goodsModalShow"}},[o("Form",{attrs:{model:e.goodsForm,"label-position":"left","label-width":160}},[o("FormItem",{attrs:{label:"Goods Name"}},[o("Input",{model:{value:e.goodsForm.name,callback:function(t){e.$set(e.goodsForm,"name",t)},expression:"goodsForm.name"}})],1),o("FormItem",{attrs:{label:"Description"}},[o("Input",{model:{value:e.goodsForm.desc,callback:function(t){e.$set(e.goodsForm,"desc",t)},expression:"goodsForm.desc"}})],1),o("FormItem",{attrs:{label:"Price"}},[o("Input",{model:{value:e.goodsForm.price,callback:function(t){e.$set(e.goodsForm,"price",t)},expression:"goodsForm.price"}})],1),o("FormItem",{attrs:{label:"Goods Type"}},[o("Input",{model:{value:e.goodsForm.type,callback:function(t){e.$set(e.goodsForm,"type",t)},expression:"goodsForm.type"}})],1),o("FormItem",{attrs:{label:"Goods Image"}},[o("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":e.defaultList,"on-success":e.handleSuccess,format:["jpg","jpeg","png"],"max-size":1024,name:"avatar","on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,type:"drag",action:"/api/goods/create"}},[o("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[o("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),e._l(e.defaultList,(function(e){return o("div",{staticClass:"demo-upload-list"},[o("img",{staticStyle:{width:"60px",height:"40px"},attrs:{src:e.url}})])}))],2)],1)],1),o("Modal",{attrs:{title:"Modify Goods","mask-closable":!1},on:{"on-ok":e.modifyGoods,"on-cancel":function(){return e.goodsModalModifyShow=!1}},model:{value:e.goodsModalModifyShow,callback:function(t){e.goodsModalModifyShow=t},expression:"goodsModalModifyShow"}},[o("Form",{attrs:{model:e.goodsForm,"label-position":"left","label-width":160}},[o("FormItem",{attrs:{label:"Goods Name"}},[o("Input",{model:{value:e.goodsForm.name,callback:function(t){e.$set(e.goodsForm,"name",t)},expression:"goodsForm.name"}})],1),o("FormItem",{attrs:{label:"Description"}},[o("Input",{model:{value:e.goodsForm.desc,callback:function(t){e.$set(e.goodsForm,"desc",t)},expression:"goodsForm.desc"}})],1),o("FormItem",{attrs:{label:"Price"}},[o("Input",{model:{value:e.goodsForm.price,callback:function(t){e.$set(e.goodsForm,"price",t)},expression:"goodsForm.price"}})],1),o("FormItem",{attrs:{label:"Goods Type"}},[o("Input",{model:{value:e.goodsForm.type,callback:function(t){e.$set(e.goodsForm,"type",t)},expression:"goodsForm.type"}})],1),o("FormItem",{attrs:{label:"Goods Image"}},[o("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":e.defaultList,"on-success":e.handleSuccess,format:["jpg","jpeg","png"],"max-size":100,name:"avatar","on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,type:"drag",action:"/goods/create"}},[o("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[o("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),e._l(e.defaultList,(function(e){return o("div",{staticClass:"demo-upload-list"},[o("img",{staticStyle:{width:"60px",height:"40px"},attrs:{src:e.url}})])}))],2)],1)],1),o("Modal",{attrs:{title:"Notice"},on:{"on-ok":e.deleteGoods},model:{value:e.showDeleteGoods,callback:function(t){e.showDeleteGoods=t},expression:"showDeleteGoods"}},[o("p",[e._v("Are you sure delete this goods?")])])],1)},_=[],I=(o("a623"),o("4160"),o("a15b"),o("d81d"),o("13d5"),o("b0c0"),o("a9e3"),o("159b"),o("5530")),O=o("c1df"),G=o.n(O),z={data:function(){return{oHeaders:[],waiterList:[],showAdd:!1,waiterForm:{phone:"",email:"",password:""},waiterFormModify:{phone:"",email:"",password:""},showModifyWaiter:!1,showDeleteWaiter:!1,selectedWaiters:[],separate:"--------------------------",changeStatusModal:!1,selectedOrders:[],wHeaders:[],tData:[],orderList:[],orderFormSelected:{},separate2:"--------------------------",goodsModalShow:!1,gHeaders:[],goodsList:[],selectedGoods:[],goodsForm:{name:"",desc:"",price:"",type:"",url:""},defaultList:[],uploadList:[],goodsModalModifyShow:!1,showDeleteGoods:!1,waiter:null}},mounted:function(){try{this.waiter=JSON.parse(localStorage.getItem("waiter")).data}catch(e){}this.oHeaders=[{type:"selection",width:100,align:"center"},{title:"Order Number",key:"_id"},{title:"Order Time",key:"orderTime",render:function(e,t){var o=t.row,a=t.column;return e("div",{},G()(new Date(o[a.key])).format("lll"))}},{title:"Pick Uptime",key:"mealTime",render:function(e,t){var o=t.row,a=t.column;return e("div",{},G()(new Date(o[a.key])).format("lll"))}},{title:"Guest phone",key:"guest",render:function(e,t){var o=t.row,a=t.column;return e("div",{},o[a.key].phone)}},{title:"Goods Name",key:"goods",render:function(e,t){var o=t.row,a=t.column;return e("div",{},o[a.key].map((function(e){var t=e.name;return t})).join(","))}},{title:"Status",key:"status"},{title:"Price",key:"price"}],this.wHeaders=[{type:"selection",width:100,align:"center"},{title:"Phone",key:"phone"},{title:"Email",key:"email"},{title:"Password",key:"password"}],this.gHeaders=[{type:"selection",width:100,align:"center"},{title:"Name",key:"name"},{title:"Description",key:"desc"},{title:"Price",key:"price"},{title:"Type",key:"type"},{title:"Image",key:"url",render:function(e,t){var o=t.row,a=t.column;return e("img",{style:{width:"60px",height:"40px"},domProps:{src:o[a.key]}},"")}}],this.getWaiters(),this.getOrders(),this.getGoods()},methods:{handleSummary:function(e){var t=e.columns,o=e.data,a={};return t.forEach((function(e,t){var s=e.key;if(0!==t){var r=o.map((function(e){return Number(e[s])}));if(r.every((function(e){return isNaN(e)})))a[s]={key:s,value:""};else{var i=r.reduce((function(e,t){var o=Number(t);return isNaN(o)?e:e+t}),0);a[s]={key:s,value:"".concat(i)}}}else a[s]={key:s,value:"Sum"}})),a},modifyGoods:function(){var e=this,t=this.goodsForm;k.put("/api/goods",t).then((function(){e.getGoods(),e.selectedGoods=[]}))},modifyGoodsShow:function(){this.goodsModalModifyShow=!0,this.goodsForm=Object(I["a"])({},this.selectedGoods[0]),this.defaultList=[{name:"",url:this.goodsForm.url}]},getWaiters:function(){var e=this;k.get("/api/waiter").then((function(t){var o=t.data;e.waiterList=o}))},openAddWaiter:function(){this.showAdd=!0},tabClick:function(){this.getOrders(),this.getWaiters(),this.getGoods()},openModifyWaiter:function(){this.waiterFormModify={email:this.selectedWaiters[0].email,password:this.selectedWaiters[0].password,phone:this.selectedWaiters[0].phone,_id:this.selectedWaiters[0]._id},this.showModifyWaiter=!0},cancelWaiterCreate:function(){this.showAdd=!1},createWaiter:function(){var e=this,t=Object(I["a"])({},this.waiterForm);k.post("/api/waiter",t).then((function(){e.getWaiters(),e.waiterForm={phone:"",email:"",password:""}})).catch((function(t){var o=t.response;e.$Message.error(o.data.message)}))},cancelModifyWaiter:function(){this.showModifyWaiter=!1},ModifyWaiter:function(){var e=this,t=this.waiterFormModify;k.put("/api/waiter",t).then((function(){e.getWaiters(),e.selectedWaiters=[]}))},deleteWaiter:function(){var e=this,t={_id:this.selectedWaiters[0]._id};k.delete("/api/waiter",{data:t}).then((function(){e.getWaiters(),e.selectedWaiters=[]}))},deleteGoods:function(){var e=this,t={_id:this.selectedGoods[0]._id};k.delete("/api/goods",{data:t}).then((function(){e.getGoods(),e.selectedGoods=[]}))},showDeleteWaiterModal:function(){this.showDeleteWaiter=!0},changeStatus:function(){this.orderFormSelected=Object(I["a"])({},this.selectedOrders[0]),this.changeStatusModal=!0},orderSelect:function(e){this.selectedOrders=e},goodsSelect:function(e){this.selectedGoods=e},getOrders:function(){var e=this;k.get("/api/order").then((function(t){var o=t.data;e.orderList=o}))},ModifyOrder:function(){var e=this,t={status:this.orderFormSelected.status,_id:this.selectedOrders[0]._id};k.put("/api/order",t).then((function(){e.getOrders(),e.selectedOrders=[]}))},cancelModifyOrder:function(){this.changeStatusModal=!1},getGoods:function(){var e=this;k.get("/api/goods").then((function(t){var o=t.data;e.goodsList=o}))},changeGoodsModal:function(){this.goodsModalShow=!0,this.goodsForm={name:"",desc:"",price:"",type:"",url:""},this.defaultList=[]},createGoods:function(){var e=this,t=Object(I["a"])(Object(I["a"])({},this.goodsForm),{},{url:this.defaultList[0].url});k.post("/api/goods",t).then((function(){e.getGoods(),e.goodsForm={name:"",desc:"",price:"",type:"Single item",url:""},e.defaultList=[]}))},logout:function(){k.post("/api/logout"),this.$router.push({name:"login"})},select:function(e){this.selectedWaiters=e},handleFormatError:function(e){this.$Notice.warning({title:"The file format is incorrect",desc:"File format of "+e.name+" is incorrect, please select jpg or png."})},handleMaxSize:function(e){this.$Notice.warning({title:"Exceeding file size limit",desc:"File  "+e.name+" is too large, no more than 100K."})},handleSuccess:function(e,t){t.url="/".concat(e.data),t.name=t.name,this.defaultList=[t]}}},$=z,C=(o("8fc1"),Object(m["a"])($,W,_,!1,null,null,null)),L=C.exports;a["default"].use(h["a"]);var D=[{path:"/login",name:"login",component:x},{path:"/",name:"index",component:L}],P=new h["a"]({mode:"history",routes:D}),T=P;o("f8ce");a["default"].use(r.a,{locale:n.a}),a["default"].config.productionTip=!1,new a["default"]({router:T,render:function(e){return e(p)}}).$mount("#app")},"711a":function(e,t,o){},"85ec":function(e,t,o){},"8fc1":function(e,t,o){"use strict";var a=o("9272"),s=o.n(a);s.a},9272:function(e,t,o){}});
//# sourceMappingURL=app.5c547370.js.map