(this["webpackJsonpmy-demo-app"]=this["webpackJsonpmy-demo-app"]||[]).push([[0],{28:function(e,t,n){},40:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a,r,c=n(4),o=n(29),i=n.n(o),s=(n(40),n(13)),u=n(35),d=n(5),l=n.n(d),f=n(10),p=n(12),h=n(30),b=n(3),j=function(){return Object(b.jsx)("header",{children:Object(b.jsx)("h3",{children:"\u6c34\u5eab"})})},v=n(15),m=function(e){var t=e.handleAddTodo,n=e.inputValue,a=e.handleChange;return Object(b.jsxs)("div",{className:Object(v.a)("add-todo",{active:n.length>0}),children:[Object(b.jsx)("label",{className:"add-todo-icon icon",htmlFor:"add-todo-input"}),Object(b.jsx)("div",{className:"add-todo-input",onKeyPress:function(e){13===e.nativeEvent.keyCode&&t()},children:Object(b.jsx)("input",{id:"add-todo-input",type:"text",onChange:a,value:n,placeholder:"\u65b0\u589e\u5de5\u4f5c"})}),Object(b.jsx)("div",{className:"add-todo-action",children:Object(b.jsx)("button",{className:"btn-reset btn-add",onClick:t,children:" \u65b0\u589e "})})]})},x=function(e){var t=e.pk,n=e.deletTodoItem,a=e.handleIsDone,r=e.todo,o=e.triggerEditColumn,i=e.handleSave,s=Object(c.useState)(r.name),u=Object(p.a)(s,2),d=u[0],l=u[1],f=function(){r.isEdit&&o(r,!1)};return Object(b.jsxs)("div",{className:Object(v.a)("task-item",{done:r.isDone,edit:r.isEdit}),children:[Object(b.jsx)("div",{className:"task-item-checked",children:Object(b.jsx)("span",{className:"icon icon-checked",onDoubleClick:function(){return a({id:r.id,name:r.name,isDone:!r.isDone},f)},children:Object(b.jsx)("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{fill:"#ff6600",fillRule:"evenodd",d:"M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-17c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9"})})})}),Object(b.jsxs)("div",{className:"task-item-body",children:[Object(b.jsx)("span",{className:"task-item-body-text",onDoubleClick:function(){o(r.id,!0)},children:d}),Object(b.jsx)("input",{className:"task-item-body-input",type:"text",placeholder:"\u65b0\u589e\u6c34\u5eab",value:d,onChange:function(e){l(e.target.value)},onDoubleClick:function(){return o(r.id,!1)},onKeyDown:function(e){return function(e){13===e.keyCode&&0!==d.length?i({id:r.id,name:d,isDone:r.isDone}):27===e.keyCode&&(o(r.id,!1),l(r.name))}(e)}})]}),Object(b.jsx)("div",{className:"task-item-action",children:Object(b.jsx)("button",{className:"btn-reset btn-destroy icon",onClick:function(){return n(t)},children:" "})})]})},g=function(e){var t=e.todos,n=e.deletTodoItem,a=e.handleIsDone,r=e.triggerEditColumn,c=e.handleSave;return Object(b.jsx)("div",{className:"todos",children:null===t||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(x,{pk:e.id,deletTodoItem:n,handleSave:c,handleIsDone:a,todo:e,triggerEditColumn:r},e.id)}))})},O=n(20),w=n(21),k=w.a.div(a||(a=Object(O.a)(["\n    display:flex;\n    justify-content:space-between;\n"]))),y=(w.a.button(r||(r=Object(O.a)(["\n    font-size:14px;\n    font-weight:400;\n    margin:2rem 0 1rem 0;\n    &:hover{\n        text-decoration:underline;\n    }\n"]))),function(e){var t=e.things;e.handleFBLogout;return Object(b.jsx)("footer",{children:Object(b.jsx)(k,{children:Object(b.jsxs)("p",{children:["\u5269\u9918\u6c34\u5eab: ",t]})})})}),N=n(23),C=(n(52),n(46),n(53),n(48),n(24));C.a.initializeApp({apiKey:"AIzaSyBwkut8s7gW3213wNnxJUkGHd41HUoUgcg",authDomain:"todolistpractice-df8c0.firebaseapp.com",databaseURL:"https://todolistpractice-df8c0-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"todolistpractice-df8c0",storageBucket:"todolistpractice-df8c0.appspot.com",messagingSenderId:"883060790362",appId:"1:883060790362:web:9753291c522096fbacf463",measurementId:"G-99R0TRJ7TB"});var D=C.a.database(),I=function(){var e=Object(f.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D.ref("/").set(t),e.next=3,E();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.ref("/").once("value");case 2:return e.next=4,e.sent.val();case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(f.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=(n(28),[]),B=function(e){Object(h.a)(e);var t=Object(c.useState)(A),n=Object(p.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),i=Object(p.a)(o,2),d=i[0],v=i[1];Object(c.useEffect)((function(){x()}),[]);var x=function(){var e=Object(f.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:A=e.sent,console.log("defaultTodos",A),r(A);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(f.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===d.length){e.next=17;break}if(e.prev=1,!(a&&a.length>0)){e.next=8;break}return e.next=5,S([].concat(Object(u.a)(a),[{name:d,water_level:100,id:Object(N.v4)()}]));case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,S([{name:d,water_level:100,id:Object(N.v4)()}]);case 10:t=e.sent;case 11:r(t),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:v("");case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a&&a.length>0?a.filter((function(e){return e.id!==t})):[],e.next=3,T(n);case 3:c=e.sent,r(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,c,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.name,t.isDone,o=a.map((function(e){return e.id===n?{id:n,name:c}:e})),e.next=4,W(o);case 4:i=e.sent,r(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{}),Object(b.jsx)(m,{handleAddTodo:O,inputValue:d,handleChange:function(e){v(e.target.value)}}),Object(b.jsx)(g,{todos:a,deletTodoItem:w,handleIsDone:function(e,t){t&&t(),k(e),x()},handleSave:k,triggerEditColumn:function(e,t){r((function(n){return n.map((function(n){return n.id!==e?n:n.id===e&&n.isDone?Object(s.a)(Object(s.a)({},n),{},{isEdit:t,isDone:!1}):n.id===e?Object(s.a)(Object(s.a)({},n),{},{isEdit:t}):void 0}))}))}}),Object(b.jsx)(y,{things:a?a.length:0})]})},U=function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(B,{})})},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(b.jsx)(U,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PWA-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/PWA-demo","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(t,e)}))}}()}},[[51,1,2]]]);
//# sourceMappingURL=main.b87d730c.chunk.js.map