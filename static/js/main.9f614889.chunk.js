(this["webpackJsonpproductivity-counter"]=this["webpackJsonpproductivity-counter"]||[]).push([[0],{46:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(20),i=n.n(s),r=(n(46),n(5)),a=n(15),u=n(4),o=n(12),l=n(0);var j=Object(o.b)((function(e){return{isCounting:e.counter.isCounting}}),null)((function(e){var t=e.isCounting;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.b,{to:"/timer",className:"menu-item",children:"Timer"}),Object(l.jsx)(a.b,{to:t?"/timer":"/stats",className:t?"menu-item menu-inactive":"menu-item",children:"Stats"}),Object(l.jsx)(a.b,{to:t?"/timer":"/settings",className:t?"menu-item menu-inactive":"menu-item",children:"Settings"})]})})),d=Object(c.createContext)(),b=function(e){var t=localStorage.getItem("userId"),n=Object(c.useState)(t),s=Object(r.a)(n,2),i=s[0],a=s[1];return Object(l.jsx)(d.Provider,{value:{user:i,setUser:a},children:e.children})};function m(){var e=Object(c.useContext)(d),t=e.user,n=e.setUser,s=Object(u.f)();return Object(l.jsxs)("div",{className:"log-panel",children:[Object(l.jsx)("p",{children:"Productivity Counter"}),Object(l.jsx)("button",{onClick:function(e){"Log out"===e.target.textContent?(localStorage.setItem("userId",""),n(""),s.push("/timer")):"Log in"===e.target.textContent&&s.push("/login")},children:t?"Log out":"Log in"})]})}n(53);function O(){return Object(l.jsxs)("nav",{className:"menu",children:[Object(l.jsx)(m,{}),Object(l.jsx)(j,{})]})}n(54);function f(){return Object(l.jsx)("div",{className:"footer",children:"Created by Kinga Mamak"})}n(55);var h=n(39),g=n.n(h).a.create({baseURL:"https://productivity-counter-f8fed-default-rtdb.europe-west1.firebasedatabase.app/"}),p=function(e,t,n){var c={label:n||"no label",timeInMinutes:t,timestamp:Date.now()};if(e)g.post("/".concat(e,".json"),c).then((function(e){return console.log("Successfully added to database")})).catch((function(e){return console.log(e)}));else{var s=JSON.parse(localStorage.getItem("data"))||[];s.unshift(c),localStorage.setItem("data",JSON.stringify(s))}},x=n.p+"static/media/alarm-sound.10a06f20.wav",v=n.p+"static/media/tink-sound.305dccef.wav",S=n.p+"static/media/click-sound.40d4b699.wav",C=n.p+"static/media/bird-sound.ebc2eaa4.wav",N=function(e){var t;return"click-sound"===e?t=S:"tink-sound"===e?t=v:"birds-sound"===e?t=C:"alarm-sound"===e&&(t=x),t},y="CHANGE_FOCUS_TIME",I="CHANGE_ALARM_SOUND",T="SET_IS_COUNTING",w="SET_IS_DURING_COUNTING",D="SET_TIME_LEFT",L=function(e){return{type:T,isCounting:e}},k=function(e){return{type:w,isDuringCounting:e}},M=function(e){return{type:D,timeLeft:e}},A=Object(o.b)((function(e){return{focusTime:e.settings.focusTime,alarmSound:e.settings.alarmSound,isCounting:e.counter.isCounting,timeLeft:e.counter.timeLeft}}),(function(e){return{setIsCounting:function(t){return e(L(t))},setIsDuringCounting:function(t){return e(k(t))},setTimeLeft:function(t){return e(M(t))}}}))((function(e){var t=e.isCounting,n=e.setIsCounting,s=e.focusTime,i=e.label,a=e.alarmSound,u=e.setIsDuringCounting,o=e.timeLeft,j=e.setTimeLeft,b=Object(c.useState)(Math.floor(o/1e3/60)),m=Object(r.a)(b,2),O=m[0],f=m[1],h=Object(c.useState)(Math.floor(o/1e3%60)),g=Object(r.a)(h,2),x=g[0],v=g[1],S=Object(c.useState)(Date.now()),C=Object(r.a)(S,2),y=C[0],I=C[1],T=Object(c.useContext)(d).user;return Object(c.useEffect)((function(){var e=null;return t&&o>=1e3?e=setTimeout((function(){j(o-(Date.now()-y)),I(Date.now())}),100):t?t&&o<1e3&&(e=setTimeout((function(){n(!1),u(!1),j(1e3*s*60),p(T,s,i.current.value),i.current.value=null,new Audio(N(a)).play()}),100)):e=setTimeout((function(){I(Date.now())}),500),f(36e5===o?60:Math.floor(o/1e3/60%60)),v(Math.floor(o/1e3%60)),function(){return clearInterval(e)}}),[t,a,s,i,n,u,T,f,v,o,y,j,I]),Object(l.jsxs)("div",{className:"timer",style:t?{animationPlayState:"running"}:{animationPlayState:"paused"},children:[Object(l.jsxs)("p",{className:"timer-time",children:[O,":",x>9?x:"0"+x]}),Object(l.jsx)("p",{className:"timer-type",children:"FOCUS"})]})})),E=Object(o.b)((function(e){return{isCounting:e.counter.isCounting,isDuringCounting:e.counter.isDuringCounting,focusTime:e.settings.focusTime}}),(function(e){return{setIsCounting:function(t){return e(L(t))},setIsDuringCounting:function(t){return e(k(t))},setTimeLeft:function(t){return e(M(t))}}}))((function(e){var t=e.isCounting,n=e.setIsCounting,s=e.isDuringCounting,i=e.setIsDuringCounting,r=e.focusTime,a=e.setTimeLeft,u=Object(c.useRef)(null);return Object(l.jsxs)("div",{className:"timer-container container",children:[Object(l.jsx)("h2",{children:"Timer"}),Object(l.jsx)("input",{id:"label-input",ref:u,type:"text",placeholder:"Add label"}),Object(l.jsx)(A,{label:u}),Object(l.jsxs)("div",{className:"timer-buttons",children:[Object(l.jsx)("i",{onClick:function(){s&&(n(!1),i(!1),u.current.value="",a(1e3*r*60))},className:"timer-reset fas fa-undo"}),Object(l.jsx)("i",{onClick:function(){u.current.value&&s||u.current.focus(),n(!t),s||i(!0)},className:t?"timer-start far fa-pause-circle":"timer-start far fa-play-circle"})]})]})})),F=function(e){var t=e.time,n=Math.floor(t/60),c=t-60*n;return Object(l.jsxs)("p",{children:[n,"h ",c,"m"]})},U=function(e){var t=e.records,n=Object(c.useState)(0),s=Object(r.a)(n,2),i=s[0],a=s[1],u=Object(c.useState)(0),o=Object(r.a)(u,2),j=o[0],d=o[1],b=Object(c.useState)(0),m=Object(r.a)(b,2),O=m[0],f=m[1];return Object(c.useEffect)((function(){a(function(e){if(!e)return 0;var t=(new Date).setHours(0,0,0);return e.reduce((function(e,n){return n.timestamp>=t?e+parseInt(n.timeInMinutes):e}),0)}(t)),f(function(e){if(!e)return 0;var t=new Date,n=new Date(t.setDate(1)).setHours(0,0,0);return e.reduce((function(e,t){return t.timestamp>=n?e+parseInt(t.timeInMinutes):e}),0)}(t)),d(function(e){if(!e)return 0;var t=new Date,n=t.getDay(),c=t.getDate()-n+(0===n?-6:1),s=new Date(t.setDate(c)).setHours(0,0,0);return e.reduce((function(e,t){return t.timestamp>=s?e+parseInt(t.timeInMinutes):e}),0)}(t))}),[t]),Object(l.jsxs)("div",{className:"stats-overview",children:[Object(l.jsx)("h3",{children:"Overview"}),Object(l.jsxs)("div",{className:"stats-item",children:[t.length>0?Object(l.jsx)(F,{time:i}):Object(l.jsx)("p",{children:"-"}),Object(l.jsx)("p",{children:"Today"})]}),Object(l.jsxs)("div",{className:"stats-item",children:[t.length>0?Object(l.jsx)(F,{time:j}):Object(l.jsx)("p",{children:"-"}),Object(l.jsx)("p",{children:"Week"})]}),Object(l.jsxs)("div",{className:"stats-item",children:[t.length>0?Object(l.jsx)(F,{time:O}):Object(l.jsx)("p",{children:"-"}),Object(l.jsx)("p",{children:"Month"})]})]})},_=function(e){var t=e.timestamp,n=e.label,c=e.timeInMinutes,s=new Date(t),i=s.getDate()<10?"0"+s.getDate():s.getDate(),r=s.getMonth()<9?"0"+(s.getMonth()+1):s.getMonth()+1,a=s.getFullYear();return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[i,"/",r,"/",a]}),Object(l.jsx)("td",{children:n}),Object(l.jsxs)("td",{children:[c," min"]})]})},R=(n(74),n.p+"static/media/loading-spinner.2b3e1008.gif"),P=function(){return Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("img",{className:"loading-spinner",alt:"loading-spinner",src:R})})},G=function(e,t){switch(t.type){case"next":return e.stop>=t.length-1?e:{start:e.start+5,stop:e.stop+5};case"prev":return 0===e.start?e:{start:e.start-5,stop:e.stop-5};default:throw new Error}};function H(e){var t=e.records,n=e.loading,s=Object(c.useReducer)(G,{start:0,stop:4}),i=Object(r.a)(s,2),a=i[0],u=i[1];return Object(l.jsxs)("div",{className:"latest-sessions",children:[Object(l.jsx)("h3",{children:"Latest sessions"}),n?Object(l.jsx)(P,{}):t.length>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Date"}),Object(l.jsx)("th",{children:"Label"}),Object(l.jsx)("th",{children:"Time"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e,t){return t>=a.start&&t<=a.stop?Object(l.jsx)(_,{timestamp:e.timestamp,label:e.label,timeInMinutes:e.timeInMinutes},e.timestamp):null}))})]}),Object(l.jsx)("button",{className:0===a.start?"go-to button-inactive":"go-to",onClick:function(){return u({type:"prev"})},children:"<"}),Object(l.jsx)("button",{className:a.stop>=t.length-1?"go-to button-inactive":"go-to",onClick:function(){return u({type:"next",length:t.length})},children:">"})]}):Object(l.jsx)("table",{children:Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Date"}),Object(l.jsx)("th",{children:"Label"}),Object(l.jsx)("th",{children:"Time"})]})})})]})}n(75);var B=n(28),J=n.n(B),K=n(40),W=function(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)(!1),u=Object(r.a)(a,2),o=u[0],l=u[1],j=Object(c.useCallback)(Object(K.a)(J.a.mark((function t(){var n;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return l((function(e){return!e})),t.next=4,g.get("/".concat(e,".json")).then((function(e){return e.data})).then((function(e){var t=function(t){i((function(n){return Array(e[t]).concat(n)}))};for(var n in e)t(n);l((function(e){return!e}))}));case 4:t.next=8;break;case 6:n=JSON.parse(localStorage.getItem("data"))||[],i(n);case 8:case"end":return t.stop()}}),t)}))),[e]);return Object(c.useEffect)((function(){j()}),[j]),{records:s,loading:o}};function q(){var e=Object(c.useContext)(d).user,t=W(e),n=t.records,s=t.loading;return Object(l.jsxs)("div",{className:"stats container",children:[Object(l.jsx)("h2",{children:"Statistics"}),Object(l.jsx)(U,{records:n}),Object(l.jsx)(H,{records:n,loading:s})]})}var z=Object(o.b)((function(e){return{focusTime:e.settings.focusTime}}),(function(e){return{changeFocusTime:function(t){return e({type:y,focusTime:t})},setTimeLeft:function(t){return e(M(t))}}}))((function(e){var t=e.changeFocusTime,n=e.focusTime,s=e.setTimeLeft,i=Object(c.useRef)(n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Focus time"}),Object(l.jsxs)("div",{className:"slider-container",children:[Object(l.jsx)("input",{className:"slider-input",type:"range",id:"focus",min:"5",max:"60",step:"5",ref:i,value:n,onChange:function(){t(i.current.value),s(1e3*i.current.value*60)}}),Object(l.jsx)("label",{className:"slider-label-top",style:{left:"".concat(1+98/11*(n/5-1),"%")},children:Object(l.jsx)("p",{children:n})}),Object(l.jsx)("p",{className:"slider-label",children:"5min"}),Object(l.jsx)("p",{className:"slider-label",children:"60min"})]})]})})),Z=Object(o.b)((function(e){return{alarmSound:e.settings.alarmSound}}),(function(e){return{changeAlarmSound:function(t){return e({type:I,alarmSound:t})}}}))((function(e){var t=e.changeAlarmSound,n=e.alarmSound;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Alarm sound"}),Object(l.jsxs)("select",{name:"sound",id:"sound",onChange:function(e){var n=e.target.value,c=N(n),s=new Audio(c);t(n),s.play()},value:n,children:[Object(l.jsx)("option",{value:"alarm-sound",children:"Alarm"}),Object(l.jsx)("option",{value:"birds-sound",children:"Birds"}),Object(l.jsx)("option",{value:"click-sound",children:"Click"}),Object(l.jsx)("option",{value:"tink-sound",children:"Tink"})]})]})}));n(77);function Y(){return Object(l.jsxs)("div",{className:"settings container",children:[Object(l.jsx)("h2",{children:"Settings"}),Object(l.jsx)(z,{}),Object(l.jsx)(Z,{})]})}function Q(){return Object(l.jsx)("div",{className:"container",children:"Not Found"})}var V=n(22),X=n(6),$=n(29);n(78);$.a.initializeApp({apiKey:"AIzaSyBSHpvMjTlpU5jqIK56q01MtZyKZuiI-F0",authDomain:"productivity-counter-f8fed.firebaseapp.com",databaseURL:"https://productivity-counter-f8fed-default-rtdb.europe-west1.firebasedatabase.app",projectId:"productivity-counter-f8fed",storageBucket:"productivity-counter-f8fed.appspot.com",messagingSenderId:"993104967686",appId:"1:993104967686:web:0ed07f89d714b18de62b87",measurementId:"G-FT8B6494T4"});var ee=$.a,te=(n(80),function(e){var t=e.type,n=Object(c.useState)({email:"",password:""}),s=Object(r.a)(n,2),i=s[0],o=s[1],j=Object(c.useState)(""),b=Object(r.a)(j,2),m=b[0],O=b[1],f=Object(c.useContext)(d).setUser,h=Object(u.f)(),g=function(e){O(!1),o((function(t){return Object(X.a)(Object(X.a)({},t),{},Object(V.a)({},e.target.id,e.target.value))}))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"login"===t?"Log in":"Sign up"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"login"===t?ee.auth().signInWithEmailAndPassword(i.email,i.password).then((function(e){var t=e.user;f(t.uid),localStorage.setItem("userId",t.uid),localStorage.removeItem("data"),h.push("/timer")})).catch((function(e){var t=e.code,n=e.message;O("E-mail or password is incorrect"),console.log(t,n)})):ee.auth().createUserWithEmailAndPassword(i.email,i.password).then((function(e){h.push("/login")})).catch((function(e){var t=e.code,n=e.message;O(n),console.log(t,n)}))},className:"log-form",children:[Object(l.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(l.jsx)("input",{type:"email",id:"email",onChange:g}),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",id:"password",onChange:g}),Object(l.jsx)("button",{children:"login"===t?"Log in":"Sign in"}),Object(l.jsx)("p",{children:m})]}),"login"===t?Object(l.jsx)("p",{className:"side-info",children:Object(l.jsx)(a.b,{to:"/signup",className:"clickable",children:"Sign up"})}):null]})});n(81);var ne=function(){var e=Object(c.useState)(50),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)("alarm-sound"),o=Object(r.a)(i,2),j=o[0],d=o[1];return Object(l.jsx)(b,{children:Object(l.jsx)(a.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(O,{}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(E,{})}),Object(l.jsx)(u.a,{path:"/timer",children:Object(l.jsx)(E,{})}),Object(l.jsx)(u.a,{path:"/stats",children:Object(l.jsx)(q,{})}),Object(l.jsx)(u.a,{path:"/settings",children:Object(l.jsx)(Y,{handleFocusTimeChange:s,focus:n,setAlarmSound:d,alarmSound:j})}),Object(l.jsx)(u.a,{path:"/signup",children:Object(l.jsx)(te,{type:"signup"})}),Object(l.jsx)(u.a,{path:"/login",children:Object(l.jsx)(te,{type:"login"})}),Object(l.jsx)(u.a,{children:Object(l.jsx)(Q,{})})]}),Object(l.jsx)(f,{})]})})})},ce=n(16),se={focusTime:50,alarmSound:"alarm-sound"},ie={isCounting:!1,isDuringCounting:!1,timeLeft:3e6},re=Object(ce.combineReducers)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(X.a)(Object(X.a)({},e),{},{focusTime:t.focusTime});case I:return Object(X.a)(Object(X.a)({},e),{},{alarmSound:t.alarmSound});default:return e}},counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(X.a)(Object(X.a)({},e),{},{isCounting:t.isCounting});case w:return Object(X.a)(Object(X.a)({},e),{},{isDuringCounting:t.isDuringCounting});case D:return Object(X.a)(Object(X.a)({},e),{},{timeLeft:t.timeLeft});default:return e}}}),ae=n(41),ue=Object(ce.createStore)(re,Object(ae.composeWithDevTools)(Object(ce.applyMiddleware)()));i.a.render(Object(l.jsx)(o.a,{store:ue,children:Object(l.jsx)(ne,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.9f614889.chunk.js.map