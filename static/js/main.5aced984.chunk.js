(this["webpackJsonpproductivity-counter"]=this["webpackJsonpproductivity-counter"]||[]).push([[0],{45:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(20),s=n.n(a),i=(n(45),n(5)),r=n(15),u=n(4),o=n(12),l=n(0);var j=Object(o.b)((function(e){return{isCounting:e.counter.isCounting}}),{})((function(e){var t=e.isCounting;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r.b,{to:"/timer",className:"menu-item",children:"Timer"}),Object(l.jsx)(r.b,{to:t?"/timer":"/stats",className:t?"menu-item menu-inactive":"menu-item",children:"Stats"}),Object(l.jsx)(r.b,{to:t?"/timer":"/settings",className:t?"menu-item menu-inactive":"menu-item",children:"Settings"})]})})),d=Object(c.createContext)(),b=function(e){var t=localStorage.getItem("userId"),n=Object(c.useState)(t),a=Object(i.a)(n,2),s=a[0],r=a[1];return Object(l.jsx)(d.Provider,{value:{user:s,setUser:r},children:e.children})};function m(){var e=Object(c.useContext)(d),t=e.user,n=e.setUser,a=Object(u.f)();return Object(l.jsxs)("div",{className:"log-panel",children:[Object(l.jsx)("p",{children:"Productivity Counter"}),Object(l.jsx)("button",{onClick:function(e){"Log out"===e.target.textContent?(localStorage.setItem("userId",""),n(""),a.push("/timer")):"Log in"===e.target.textContent&&a.push("/login")},children:t?"Log out":"Log in"})]})}n(52);function O(){return Object(l.jsxs)("nav",{className:"menu",children:[Object(l.jsx)(m,{}),Object(l.jsx)(j,{})]})}n(53);function h(){return Object(l.jsx)("div",{className:"footer",children:"Created by Kinga Mamak"})}n(54);var f=n(6),p=n(39),x=n.n(p).a.create({baseURL:"https://productivity-counter-f8fed-default-rtdb.europe-west1.firebasedatabase.app/"}),g=function(e,t,n){var c={label:n||"no label",timeInMinutes:t,timestamp:Date.now()};if(e)x.post("/".concat(e,".json"),c).then((function(e){return console.log("Successfully added to database")})).catch((function(e){return console.log(e)}));else{var a=JSON.parse(localStorage.getItem("data"))||[];a.unshift(c),localStorage.setItem("data",JSON.stringify(a))}},v=n.p+"static/media/alarm-sound.10a06f20.wav",S=n.p+"static/media/tink-sound.305dccef.wav",y=n.p+"static/media/click-sound.40d4b699.wav",C=n.p+"static/media/bird-sound.ebc2eaa4.wav",N=function(e){var t;return"click-sound"===e?t=y:"tink-sound"===e?t=S:"birds-sound"===e?t=C:"alarm-sound"===e&&(t=v),t},w="CHANGE_FOCUS_TIME",I="CHANGE_ALARM_SOUND",D="IS_COUNTING",T=function(e){return{type:D,isCounting:e}},L=n(17),k={focusTime:50,alarmSound:"alarm-sound"},M=Object(L.b)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(f.a)(Object(f.a)({},e),{},{focusTime:t.focusTime});case I:return Object(f.a)(Object(f.a)({},e),{},{alarmSound:t.alarmSound});default:return e}},counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isCounting:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(f.a)(Object(f.a)({},e),{},{isCounting:t.isCounting});default:return e}}}),A=Object(L.c)(M),F={setIsCounting:T},E=Object(o.b)((function(e){return{focusTime:e.settings.focusTime,alarmSound:e.settings.alarmSound,isCounting:e.counter.isCounting}}),F)((function(e){var t=e.isCounting,n=e.setIsCounting,a=e.focusTime,s=e.label,r=e.alarmSound,u=Object(c.useState)(a),o=Object(i.a)(u,2),j=o[0],b=o[1],m=Object(c.useState)(0),O=Object(i.a)(m,2),h=O[0],p=O[1],x=Object(c.useState)({time:1e3*a*60,timeLeft:1e3*a*60,startDate:Date.now()}),v=Object(i.a)(x,2),S=v[0],y=v[1],C=Object(c.useContext)(d).user;return Object(c.useEffect)((function(){var e=null;return t&&S.timeLeft>=1e3?e=setTimeout((function(){y((function(e){return Object(f.a)(Object(f.a)({},e),{},{timeLeft:e.timeLeft-(Date.now()-e.startDate),startDate:Date.now()})}))}),100):t?t&&S.timeLeft<1e3&&(e=setTimeout((function(){A.dispatch(n(!1)),y((function(e){return Object(f.a)(Object(f.a)({},e),{},{timeLeft:1e3*a*60})})),g(C,a,s.current.value),s.current.value=null,new Audio(N(r)).play()}),100)):e=setTimeout((function(){y((function(e){return Object(f.a)(Object(f.a)({},e),{},{startDate:Date.now()})}))}),1e3),b(36e5===S.timeLeft?60:Math.floor(S.timeLeft/1e3/60%60)),p(Math.floor(S.timeLeft/1e3%60)),function(){return clearInterval(e)}}),[t,S,r,a,s,n,C]),Object(l.jsxs)("div",{className:"timer",style:t?{animationPlayState:"running"}:{animationPlayState:"paused"},children:[Object(l.jsxs)("p",{className:"timer-time",children:[j,":",h>9?h:"0"+h]}),Object(l.jsx)("p",{className:"timer-type",children:"FOCUS"})]})})),U={setIsCounting:T},P=Object(o.b)((function(e){return{isCounting:e.counter.isCounting}}),U)((function(e){var t=e.isCounting,n=Object(c.useRef)(null);return Object(l.jsxs)("div",{className:"timer-container container",children:[Object(l.jsx)("h2",{children:"Timer"}),Object(l.jsx)("input",{id:"label-input",ref:n,type:"text",placeholder:"Add label"}),Object(l.jsx)(E,{label:n}),Object(l.jsx)("i",{onClick:function(){A.dispatch(T(!t)),n.current.focus()},className:t?"timer-start far fa-pause-circle":"timer-start far fa-play-circle"})]})})),H=function(e){var t=e.timestamp,n=e.label,c=e.timeInMinutes,a=new Date(t),s=a.getDate()<10?"0"+a.getDate():a.getDate(),i=a.getMonth()<9?"0"+(a.getMonth()+1):a.getMonth()+1,r=a.getFullYear();return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[s,"/",i,"/",r]}),Object(l.jsx)("td",{children:n}),Object(l.jsxs)("td",{children:[c," min"]})]})},B=(n(73),n.p+"static/media/loading-spinner.2b3e1008.gif"),J=function(){return Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("img",{className:"loading-spinner",alt:"loading-spinner",src:B})})},R=function(e){var t=e.time,n=Math.floor(t/60),c=t-60*n;return Object(l.jsxs)("p",{children:[n,"h ",c,"m"]})},_=function(e){var t=e.records,n=Object(c.useState)(0),a=Object(i.a)(n,2),s=a[0],r=a[1],u=Object(c.useState)(0),o=Object(i.a)(u,2),j=o[0],d=o[1],b=Object(c.useState)(0),m=Object(i.a)(b,2),O=m[0],h=m[1];return Object(c.useEffect)((function(){r(function(e){if(!e)return 0;var t=(new Date).setHours(0,0,0);return e.reduce((function(e,n){return n.timestamp>=t?e+parseInt(n.timeInMinutes):e}),0)}(t)),h(function(e){if(!e)return 0;var t=new Date,n=new Date(t.setDate(1)).setHours(0,0,0);return e.reduce((function(e,t){return t.timestamp>=n?e+parseInt(t.timeInMinutes):e}),0)}(t)),d(function(e){if(!e)return 0;var t=new Date,n=t.getDay(),c=t.getDate()-n+(0===n?-6:1),a=new Date(t.setDate(c)).setHours(0,0,0);return e.reduce((function(e,t){return t.timestamp>=a?e+parseInt(t.timeInMinutes):e}),0)}(t))}),[t]),Object(l.jsxs)("div",{className:"stats-overview",children:[Object(l.jsx)("h3",{children:"Overview"}),Object(l.jsxs)("div",{className:"stats-item",children:[t.length>0?Object(l.jsx)(R,{time:s}):Object(l.jsx)("p",{children:"-"}),Object(l.jsx)("p",{children:"Today"})]}),Object(l.jsxs)("div",{className:"stats-item",children:[t.length>0?Object(l.jsx)(R,{time:j}):Object(l.jsx)("p",{children:"-"}),Object(l.jsx)("p",{children:"Week"})]}),Object(l.jsxs)("div",{className:"stats-item",children:[t.length>0?Object(l.jsx)(R,{time:O}):Object(l.jsx)("p",{children:"-"}),Object(l.jsx)("p",{children:"Month"})]})]})},G=(n(74),n(28)),K=n.n(G),W=n(40),q=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),u=Object(i.a)(r,2),o=u[0],l=u[1],j=Object(c.useCallback)(Object(W.a)(K.a.mark((function t(){var n;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return l((function(e){return!e})),t.next=4,x.get("/".concat(e,".json")).then((function(e){return e.data})).then((function(e){var t=function(t){s((function(n){return Array(e[t]).concat(n)}))};for(var n in e)t(n);l((function(e){return!e}))}));case 4:t.next=8;break;case 6:n=JSON.parse(localStorage.getItem("data"))||[],s(n);case 8:case"end":return t.stop()}}),t)}))),[e]);return Object(c.useEffect)((function(){j()}),[j]),{records:a,loading:o}};function z(){var e=Object(c.useContext)(d).user,t=q(e),n=t.records,a=t.loading;return Object(l.jsxs)("div",{className:"stats container",children:[Object(l.jsx)("h2",{children:"Statistics"}),Object(l.jsx)(_,{records:n}),Object(l.jsx)("h3",{children:"Latest sessions"}),a?Object(l.jsx)(J,{}):n.length>0?Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Date"}),Object(l.jsx)("th",{children:"Label"}),Object(l.jsx)("th",{children:"Time"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsx)(H,{timestamp:e.timestamp,label:e.label,timeInMinutes:e.timeInMinutes},e.timestamp)}))})]}):Object(l.jsx)("table",{children:Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Date"}),Object(l.jsx)("th",{children:"Label"}),Object(l.jsx)("th",{children:"Time"})]})})})]})}var Z={changeFocusTime:function(e){return{type:w,focusTime:e}}},Y=Object(o.b)((function(e){return{focusTime:e.settings.focusTime}}),Z)((function(e){var t=e.changeFocusTime,n=e.focusTime,a=Object(c.useRef)(n);return console.log("".concat(100/11,"%")),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Focus time"}),Object(l.jsxs)("div",{className:"slider-container",children:[Object(l.jsx)("input",{className:"slider-input",type:"range",id:"focus",min:"5",max:"60",step:"5",ref:a,value:n,onChange:function(){return A.dispatch(t(a.current.value))}}),Object(l.jsx)("label",{className:"slider-label-top",style:{left:"".concat(1+98/11*(n/5-1),"%")},children:Object(l.jsx)("p",{children:n})}),Object(l.jsx)("p",{className:"slider-label",children:"5min"}),Object(l.jsx)("p",{className:"slider-label",children:"60min"})]})]})})),Q={changeAlarmSound:function(e){return{type:I,alarmSound:e}}},V=Object(o.b)((function(e){return{alarmSound:e.settings.alarmSound}}),Q)((function(e){var t=e.changeAlarmSound,n=e.alarmSound;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Alarm sound"}),Object(l.jsxs)("select",{name:"sound",id:"sound",onChange:function(e){var n=e.target.value,c=N(n),a=new Audio(c);A.dispatch(t(n)),a.play()},value:n,children:[Object(l.jsx)("option",{value:"alarm-sound",children:"Alarm"}),Object(l.jsx)("option",{value:"birds-sound",children:"Birds"}),Object(l.jsx)("option",{value:"click-sound",children:"Click"}),Object(l.jsx)("option",{value:"tink-sound",children:"Tink"})]})]})}));n(76);function X(){return Object(l.jsxs)("div",{className:"settings container",children:[Object(l.jsx)("h2",{children:"Settings"}),Object(l.jsx)(Y,{}),Object(l.jsx)(V,{})]})}function $(){return Object(l.jsx)("div",{className:"container",children:"Not Found"})}var ee=n(22),te=n(29);n(77);te.a.initializeApp({apiKey:"AIzaSyBSHpvMjTlpU5jqIK56q01MtZyKZuiI-F0",authDomain:"productivity-counter-f8fed.firebaseapp.com",databaseURL:"https://productivity-counter-f8fed-default-rtdb.europe-west1.firebasedatabase.app",projectId:"productivity-counter-f8fed",storageBucket:"productivity-counter-f8fed.appspot.com",messagingSenderId:"993104967686",appId:"1:993104967686:web:0ed07f89d714b18de62b87",measurementId:"G-FT8B6494T4"});var ne=te.a,ce=(n(79),function(e){var t=e.type,n=Object(c.useState)({email:"",password:""}),a=Object(i.a)(n,2),s=a[0],o=a[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),m=b[0],O=b[1],h=Object(c.useContext)(d).setUser,p=Object(u.f)(),x=function(e){O(!1),o((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(ee.a)({},e.target.id,e.target.value))}))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"login"===t?"Log in":"Sign up"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"login"===t?ne.auth().signInWithEmailAndPassword(s.email,s.password).then((function(e){var t=e.user;h(t.uid),localStorage.setItem("userId",t.uid),localStorage.removeItem("data"),p.push("/timer")})).catch((function(e){var t=e.code,n=e.message;O("E-mail or password is incorrect"),console.log(t,n)})):ne.auth().createUserWithEmailAndPassword(s.email,s.password).then((function(e){p.push("/login")})).catch((function(e){var t=e.code,n=e.message;O(n),console.log(t,n)}))},className:"log-form",children:[Object(l.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(l.jsx)("input",{type:"email",id:"email",onChange:x}),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",id:"password",onChange:x}),Object(l.jsx)("button",{children:"login"===t?"Log in":"Sign in"}),Object(l.jsx)("p",{children:m})]}),"login"===t?Object(l.jsx)("p",{className:"side-info",children:Object(l.jsx)(r.b,{to:"/signup",className:"clickable",children:"Sign up"})}):null]})});n(80);var ae=function(){var e=Object(c.useState)(50),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("alarm-sound"),o=Object(i.a)(s,2),j=o[0],d=o[1];return Object(l.jsx)(b,{children:Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(O,{}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(P,{})}),Object(l.jsx)(u.a,{path:"/timer",children:Object(l.jsx)(P,{})}),Object(l.jsx)(u.a,{path:"/stats",children:Object(l.jsx)(z,{})}),Object(l.jsx)(u.a,{path:"/settings",children:Object(l.jsx)(X,{handleFocusTimeChange:a,focus:n,setAlarmSound:d,alarmSound:j})}),Object(l.jsx)(u.a,{path:"/signup",children:Object(l.jsx)(ce,{type:"signup"})}),Object(l.jsx)(u.a,{path:"/login",children:Object(l.jsx)(ce,{type:"login"})}),Object(l.jsx)(u.a,{children:Object(l.jsx)($,{})})]}),Object(l.jsx)(h,{})]})})})};s.a.render(Object(l.jsx)(o.a,{store:A,children:Object(l.jsx)(ae,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.5aced984.chunk.js.map