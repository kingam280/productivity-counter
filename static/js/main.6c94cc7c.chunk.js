(this["webpackJsonpproductivity-counter"]=this["webpackJsonpproductivity-counter"]||[]).push([[0],{15:function(e,t,n){e.exports={formContainer:"AddRecordForm_formContainer__YnSDH",addRecordForm:"AddRecordForm_addRecordForm__37Yl-",inputs:"AddRecordForm_inputs__UId3H",labels:"AddRecordForm_labels__2Sf3t",submit:"AddRecordForm_submit__2jpxS",closeBtn:"AddRecordForm_closeBtn__29k-_"}},46:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(22),r=n.n(s),i=(n(46),n(5)),a=n(16),o=n(6),u=n(7),l=n(0);var d=Object(u.b)((function(e){return{isCounting:e.counter.isCounting}}),null)((function(e){var t=e.isCounting;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.b,{to:"/timer",className:"menu-item",children:"Timer"}),Object(l.jsx)(a.b,{to:t?"/timer":"/stats",className:t?"menu-item menu-inactive":"menu-item",children:"Stats"}),Object(l.jsx)(a.b,{to:t?"/timer":"/settings",className:t?"menu-item menu-inactive":"menu-item",children:"Settings"})]})})),j=Object(c.createContext)(),b=function(e){var t=localStorage.getItem("userId"),n=Object(c.useState)(t),s=Object(i.a)(n,2),r=s[0],a=s[1];return Object(l.jsx)(j.Provider,{value:{user:r,setUser:a},children:e.children})};function m(){var e=Object(c.useContext)(j),t=e.user,n=e.setUser,s=Object(o.f)();return Object(l.jsxs)("div",{className:"log-panel",children:[Object(l.jsx)("p",{children:"Productivity Counter"}),Object(l.jsx)("button",{onClick:function(e){"Log out"===e.target.textContent?(localStorage.setItem("userId",""),n(""),s.push("/timer")):"Log in"===e.target.textContent&&s.push("/login")},children:t?"Log out":"Log in"})]})}n(53);function O(){return Object(l.jsxs)("nav",{className:"menu",children:[Object(l.jsx)(m,{}),Object(l.jsx)(d,{})]})}n(54);function f(){return Object(l.jsx)("div",{className:"footer",children:"Created by Kinga Mamak"})}n(55);var h=n.p+"static/media/alarm-sound.10a06f20.wav",p=n.p+"static/media/tink-sound.305dccef.wav",g=n.p+"static/media/click-sound.40d4b699.wav",x=n.p+"static/media/bird-sound.ebc2eaa4.wav",v=function(e){var t;return"click-sound"===e?t=g:"tink-sound"===e?t=p:"birds-sound"===e?t=x:"alarm-sound"===e&&(t=h),t},S=n(39),C=n.n(S).a.create({baseURL:"https://productivity-counter-f8fed-default-rtdb.europe-west1.firebasedatabase.app/"}),N="CHANGE_FOCUS_TIME",T="CHANGE_ALARM_SOUND",y="FETCH_STATS_FULFILLED",I="FETCH_STATS_PENDING",D="FETCH_STATS_REJECTED",w="SET_IS_COUNTING",F="SET_IS_DURING_COUNTING",L="SET_TIME_LEFT",_=function(e){return function(t){if(t(A()),e)C.get("/".concat(e,".json")).then((function(e){return e.data})).then((function(e){var n=[];for(var c in e)n.push(e[c]);var s=n.sort((function(e,t){return t.timestamp-e.timestamp}));t(E(s))})).catch((function(e){t(R(e))}));else{var n=JSON.parse(localStorage.getItem("data"))||[];t(E(n))}}},E=function(e){return{type:y,payload:e}},A=function(){return{type:I}},R=function(e){return{type:D,payload:e}},k=function(e){return{type:w,isCounting:e}},M=function(e){return{type:F,isDuringCounting:e}},U=function(e){return{type:L,timeLeft:e}},H=function(e){return function(t){var n=e.userId,c=e.focusTime,s=e.label,r=e.timestamp,i={label:s||"no label",timeInMinutes:c,timestamp:r||Date.now()};if(n)C.post("/".concat(n,".json"),i).then((function(e){console.log("Successfully added to database"),t(_())})).catch((function(e){return console.log(e)}));else{console.log("hej");var a=JSON.parse(localStorage.getItem("data"))||[];a.unshift(i),localStorage.setItem("data",JSON.stringify(a))}}},B=Object(u.b)((function(e){return{focusTime:e.settings.focusTime,alarmSound:e.settings.alarmSound,isCounting:e.counter.isCounting,timeLeft:e.counter.timeLeft}}),(function(e){return{setIsCounting:function(t){return e(k(t))},setIsDuringCounting:function(t){return e(M(t))},setTimeLeft:function(t){return e(U(t))},saveRecord:function(t){return e(H(t))}}}))((function(e){var t=e.isCounting,n=e.setIsCounting,s=e.focusTime,r=e.label,a=e.alarmSound,o=e.setIsDuringCounting,u=e.timeLeft,d=e.setTimeLeft,b=e.saveRecord,m=Object(c.useState)(Math.floor(u/1e3/60)),O=Object(i.a)(m,2),f=O[0],h=O[1],p=Object(c.useState)(Math.floor(u/1e3%60)),g=Object(i.a)(p,2),x=g[0],S=g[1],C=Object(c.useState)(Date.now()),N=Object(i.a)(C,2),T=N[0],y=N[1],I=Object(c.useContext)(j).user;return Object(c.useEffect)((function(){var e=null;return t&&u>=1e3?e=setTimeout((function(){d(u-(Date.now()-T)),y(Date.now())}),100):t?t&&u<1e3&&(e=setTimeout((function(){n(!1),o(!1),d(1e3*s*60),b({user:I,focusTime:s,label:r.current.value}),r.current.value=null,new Audio(v(a)).play()}),100)):e=setTimeout((function(){y(Date.now())}),500),h(36e5===u?60:Math.floor(u/1e3/60%60)),S(Math.floor(u/1e3%60)),function(){return clearInterval(e)}}),[t,a,s,r,n,o,I,h,S,u,T,d,y,b]),Object(l.jsxs)("div",{className:"timer",style:t?{animationPlayState:"running"}:{animationPlayState:"paused"},children:[Object(l.jsxs)("p",{className:"timer-time",children:[f,":",x>9?x:"0"+x]}),Object(l.jsx)("p",{className:"timer-type",children:"FOCUS"})]})})),P=n(19),G=n(4),J=n(15),q=n.n(J),K=Object(u.b)(null,(function(e){return{saveRecord:function(t){return e(H(t))}}}))((function(e){var t=e.saveRecord,n=e.setIsAddRecordFormOpen,s=Object(c.useContext)(j).user,r=Object(c.useState)({timestamp:null,label:null,focusTime:null}),a=Object(i.a)(r,2),o=a[0],u=a[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:q.a.formContainer,onClick:function(e){"enable-close"!==e.target.dataset.name&&"enable-close"!==e.target.dataset.name||n(!1)},"data-name":"enable-close",children:Object(l.jsxs)("form",{action:"submit",onChange:function(e){if("timestamp"===e.target.id){var t=new Date(e.target.value).getTime();u((function(e){return Object(G.a)(Object(G.a)({},e),{},{timestamp:t})}))}else{var n=e.target.id;u((function(t){return Object(G.a)(Object(G.a)({},t),{},Object(P.a)({},n,e.target.value))}))}},onSubmit:function(e){e.preventDefault();var c=Object(G.a)(Object(G.a)({},o),{},{userId:s});t(c),n(!1)},className:q.a.addRecordForm,children:[Object(l.jsx)("label",{htmlFor:"label",className:q.a.labels,children:"Label"}),Object(l.jsx)("input",{type:"text",className:q.a.inputs,id:"label",required:!0}),Object(l.jsx)("label",{htmlFor:"label",className:q.a.labels,children:"Time in minutes"}),Object(l.jsx)("input",{type:"number",min:"5",step:"5",className:q.a.inputs,id:"focusTime",required:!0}),Object(l.jsx)("label",{htmlFor:"label",className:q.a.labels,children:"Date"}),Object(l.jsx)("input",{type:"date",className:q.a.inputs,id:"timestamp",required:!0}),Object(l.jsx)("button",{className:q.a.submit,children:"Add record"}),Object(l.jsx)("i",{className:"fas fa-times-circle ".concat(q.a.closeBtn),"data-name":"enable-close"})]})})})})),W=Object(u.b)((function(e){return{isCounting:e.counter.isCounting,isDuringCounting:e.counter.isDuringCounting,focusTime:e.settings.focusTime}}),(function(e){return{setIsCounting:function(t){return e(k(t))},setIsDuringCounting:function(t){return e(M(t))},setTimeLeft:function(t){return e(U(t))}}}))((function(e){var t=e.isCounting,n=e.setIsCounting,s=e.isDuringCounting,r=e.setIsDuringCounting,a=e.focusTime,o=e.setTimeLeft,u=Object(c.useRef)(null),d=Object(c.useState)(!1),j=Object(i.a)(d,2),b=j[0],m=j[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"timer-container container",children:[Object(l.jsx)("h2",{children:"Timer"}),Object(l.jsx)("input",{id:"label-input",ref:u,type:"text",placeholder:"Add label"}),Object(l.jsx)(B,{label:u}),Object(l.jsxs)("div",{className:"timer-buttons",children:[Object(l.jsx)("i",{onClick:function(){s&&(n(!1),r(!1),u.current.value="",o(1e3*a*60))},className:"timer-reset fas fa-undo"}),Object(l.jsx)("i",{onClick:function(){u.current.value&&s||u.current.focus(),n(!t),s||r(!0)},className:t?"timer-start far fa-pause-circle":"timer-start far fa-play-circle"})]}),Object(l.jsxs)("p",{className:"add-record-form-label",children:["Do you want to add record? Click ",Object(l.jsx)("strong",{onClick:function(){return m(!0)},children:"here"})]})]}),b&&Object(l.jsx)(K,{setIsAddRecordFormOpen:m})]})})),Y=function(e){var t=e.time,n=Math.floor(t/60),c=t-60*n;return Object(l.jsxs)("p",{children:[n,"h ",c,"m"]})},z=function(e){var t=e.records,n=Object(c.useState)(0),s=Object(i.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(0),u=Object(i.a)(o,2),d=u[0],j=u[1],b=Object(c.useState)(0),m=Object(i.a)(b,2),O=m[0],f=m[1];return Object(c.useEffect)((function(){a(function(e){if(!e)return 0;var t=(new Date).setHours(0,0,0);return e.reduce((function(e,n){return n.timestamp>=t?e+parseInt(n.timeInMinutes):e}),0)}(t)),f(function(e){if(!e)return 0;var t=new Date,n=new Date(t.setDate(1)).setHours(0,0,0);return e.reduce((function(e,t){return t.timestamp>=n?e+parseInt(t.timeInMinutes):e}),0)}(t)),j(function(e){if(!e)return 0;var t=new Date,n=t.getDay(),c=t.getDate()-n+(0===n?-6:1),s=new Date(t.setDate(c)).setHours(0,0,0);return e.reduce((function(e,t){return t.timestamp>=s?e+parseInt(t.timeInMinutes):e}),0)}(t))}),[t]),Object(l.jsxs)("div",{className:"stats-overview",children:[Object(l.jsx)("h3",{children:"Overview"}),Object(l.jsxs)("div",{className:"stats-item",children:[t.length>0?Object(l.jsx)(Y,{time:r}):Object(l.jsx)("p",{children:"-"}),Object(l.jsx)("p",{children:"Today"})]}),Object(l.jsxs)("div",{className:"stats-item",children:[t.length>0?Object(l.jsx)(Y,{time:d}):Object(l.jsx)("p",{children:"-"}),Object(l.jsx)("p",{children:"Week"})]}),Object(l.jsxs)("div",{className:"stats-item",children:[t.length>0?Object(l.jsx)(Y,{time:O}):Object(l.jsx)("p",{children:"-"}),Object(l.jsx)("p",{children:"Month"})]})]})},Z=function(e){var t=e.timestamp,n=e.label,c=e.timeInMinutes,s=new Date(t),r=s.getDate()<10?"0"+s.getDate():s.getDate(),i=s.getMonth()<9?"0"+(s.getMonth()+1):s.getMonth()+1,a=s.getFullYear();return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[r,"/",i,"/",a]}),Object(l.jsx)("td",{children:n}),Object(l.jsxs)("td",{children:[c," min"]})]})},Q=(n(74),n.p+"static/media/loading-spinner.2b3e1008.gif"),V=function(){return Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("img",{className:"loading-spinner",alt:"loading-spinner",src:Q})})},X=function(e,t){switch(t.type){case"next":return e.stop>=t.length-1?e:{start:e.start+5,stop:e.stop+5};case"prev":return 0===e.start?e:{start:e.start-5,stop:e.stop-5};default:throw new Error}};function $(e){var t=e.records,n=e.loading,s=Object(c.useReducer)(X,{start:0,stop:4}),r=Object(i.a)(s,2),a=r[0],o=r[1];return Object(l.jsxs)("div",{className:"latest-sessions",children:[Object(l.jsx)("h3",{children:"Latest sessions"}),n?Object(l.jsx)(V,{}):t.length>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Date"}),Object(l.jsx)("th",{children:"Label"}),Object(l.jsx)("th",{children:"Time"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e,t){return t>=a.start&&t<=a.stop?Object(l.jsx)(Z,{timestamp:e.timestamp,label:e.label,timeInMinutes:e.timeInMinutes},e.timestamp):null}))})]}),Object(l.jsx)("button",{className:0===a.start?"go-to button-inactive":"go-to",onClick:function(){return o({type:"prev"})},children:"<"}),Object(l.jsx)("button",{className:a.stop>=t.length-1?"go-to button-inactive":"go-to",onClick:function(){return o({type:"next",length:t.length})},children:">"})]}):Object(l.jsx)("table",{children:Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Date"}),Object(l.jsx)("th",{children:"Label"}),Object(l.jsx)("th",{children:"Time"})]})})})]})}n(75);var ee=Object(u.b)((function(e){return{records:e.stats.records,isLoading:e.stats.isLoading}}),(function(e){return{fetchStats:function(t){return e(_(t))}}}))((function(e){var t=e.records,n=e.isLoading,s=e.fetchStats,r=Object(c.useContext)(j).user;return Object(c.useEffect)((function(){s(r)}),[s,r]),Object(l.jsxs)("div",{className:"stats container",children:[Object(l.jsx)("h2",{children:"Statistics"}),Object(l.jsx)(z,{records:t}),Object(l.jsx)($,{records:t,loading:n})]})})),te=Object(u.b)((function(e){return{focusTime:e.settings.focusTime}}),(function(e){return{changeFocusTime:function(t){return e({type:N,focusTime:t})},setTimeLeft:function(t){return e(U(t))}}}))((function(e){var t=e.changeFocusTime,n=e.focusTime,s=e.setTimeLeft,r=Object(c.useRef)(n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Focus time"}),Object(l.jsxs)("div",{className:"slider-container",children:[Object(l.jsx)("input",{className:"slider-input",type:"range",id:"focus",min:"5",max:"60",step:"5",ref:r,value:n,onChange:function(){t(r.current.value),s(1e3*r.current.value*60)}}),Object(l.jsx)("label",{className:"slider-label-top",style:{left:"".concat(1+98/11*(n/5-1),"%")},children:Object(l.jsx)("p",{children:n})}),Object(l.jsx)("p",{className:"slider-label",children:"5min"}),Object(l.jsx)("p",{className:"slider-label",children:"60min"})]})]})})),ne=Object(u.b)((function(e){return{alarmSound:e.settings.alarmSound}}),(function(e){return{changeAlarmSound:function(t){return e({type:T,alarmSound:t})}}}))((function(e){var t=e.changeAlarmSound,n=e.alarmSound;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Alarm sound"}),Object(l.jsxs)("select",{name:"sound",id:"sound",onChange:function(e){var n=e.target.value,c=v(n),s=new Audio(c);t(n),s.play()},value:n,children:[Object(l.jsx)("option",{value:"alarm-sound",children:"Alarm"}),Object(l.jsx)("option",{value:"birds-sound",children:"Birds"}),Object(l.jsx)("option",{value:"click-sound",children:"Click"}),Object(l.jsx)("option",{value:"tink-sound",children:"Tink"})]})]})}));n(76);function ce(){return Object(l.jsxs)("div",{className:"settings container",children:[Object(l.jsx)("h2",{children:"Settings"}),Object(l.jsx)(te,{}),Object(l.jsx)(ne,{})]})}function se(){return Object(l.jsx)("div",{className:"container",children:"Not Found"})}var re=n(29);n(77);re.a.initializeApp({apiKey:"AIzaSyBSHpvMjTlpU5jqIK56q01MtZyKZuiI-F0",authDomain:"productivity-counter-f8fed.firebaseapp.com",databaseURL:"https://productivity-counter-f8fed-default-rtdb.europe-west1.firebasedatabase.app",projectId:"productivity-counter-f8fed",storageBucket:"productivity-counter-f8fed.appspot.com",messagingSenderId:"993104967686",appId:"1:993104967686:web:0ed07f89d714b18de62b87",measurementId:"G-FT8B6494T4"});var ie=re.a,ae=(n(79),function(e){var t=e.type,n=Object(c.useState)({email:"",password:""}),s=Object(i.a)(n,2),r=s[0],u=s[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),m=b[0],O=b[1],f=Object(c.useContext)(j).setUser,h=Object(o.f)(),p=function(e){O(!1),u((function(t){return Object(G.a)(Object(G.a)({},t),{},Object(P.a)({},e.target.id,e.target.value))}))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"login"===t?"Log in":"Sign up"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"login"===t?ie.auth().signInWithEmailAndPassword(r.email,r.password).then((function(e){var t=e.user;f(t.uid),localStorage.setItem("userId",t.uid),localStorage.removeItem("data"),h.push("/timer")})).catch((function(e){var t=e.code,n=e.message;O("E-mail or password is incorrect"),console.log(t,n)})):ie.auth().createUserWithEmailAndPassword(r.email,r.password).then((function(e){h.push("/login")})).catch((function(e){var t=e.code,n=e.message;O(n),console.log(t,n)}))},className:"log-form",children:[Object(l.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(l.jsx)("input",{type:"email",id:"email",onChange:p}),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",id:"password",onChange:p}),Object(l.jsx)("button",{children:"login"===t?"Log in":"Sign in"}),Object(l.jsx)("p",{children:m})]}),"login"===t?Object(l.jsx)("p",{className:"side-info",children:Object(l.jsx)(a.b,{to:"/signup",className:"clickable",children:"Sign up"})}):null]})});n(80);var oe=function(){var e=Object(c.useState)(50),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)("alarm-sound"),u=Object(i.a)(r,2),d=u[0],j=u[1];return Object(l.jsx)(b,{children:Object(l.jsx)(a.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(O,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(W,{})}),Object(l.jsx)(o.a,{path:"/timer",children:Object(l.jsx)(W,{})}),Object(l.jsx)(o.a,{path:"/stats",children:Object(l.jsx)(ee,{})}),Object(l.jsx)(o.a,{path:"/settings",children:Object(l.jsx)(ce,{handleFocusTimeChange:s,focus:n,setAlarmSound:j,alarmSound:d})}),Object(l.jsx)(o.a,{path:"/signup",children:Object(l.jsx)(ae,{type:"signup"})}),Object(l.jsx)(o.a,{path:"/login",children:Object(l.jsx)(ae,{type:"login"})}),Object(l.jsx)(o.a,{children:Object(l.jsx)(se,{})})]}),Object(l.jsx)(f,{})]})})})},ue=n(17),le={focusTime:50,alarmSound:"alarm-sound"},de={isCounting:!1,isDuringCounting:!1,timeLeft:3e6},je={records:[],isError:!1,isLoading:!1},be=Object(ue.combineReducers)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(G.a)(Object(G.a)({},e),{},{focusTime:t.focusTime});case T:return Object(G.a)(Object(G.a)({},e),{},{alarmSound:t.alarmSound});default:return e}},counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(G.a)(Object(G.a)({},e),{},{isCounting:t.isCounting});case F:return Object(G.a)(Object(G.a)({},e),{},{isDuringCounting:t.isDuringCounting});case L:return Object(G.a)(Object(G.a)({},e),{},{timeLeft:t.timeLeft});default:return e}},stats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{records:t.payload,isLoading:!1,isError:!1};case I:return Object(G.a)(Object(G.a)({},e),{},{isLoading:!0,isError:!1});case D:return Object(G.a)(Object(G.a)({},e),{},{isError:!0,isLoading:!1});default:return e}}}),me=n(40),Oe=n(41),fe=Object(ue.createStore)(be,Object(me.composeWithDevTools)(Object(ue.applyMiddleware)(Oe.a)));r.a.render(Object(l.jsx)(u.a,{store:fe,children:Object(l.jsx)(oe,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.6c94cc7c.chunk.js.map