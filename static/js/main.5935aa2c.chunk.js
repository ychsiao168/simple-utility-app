(this["webpackJsonpsimple-utility-app"]=this["webpackJsonpsimple-utility-app"]||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),s=n.n(r),i=n(7),l=n(148),o=n(163),j=n(167),b=n(164),d=n(15),u=n(74),O=n(169),h=n(145),x=n(166),m=n(146),p=n(147),f=n(142),g=Object(f.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)}}})),v=n(1),y=function(e){var t=e.label,n=e.isSelected,c=e.onCheckboxChange;return Object(v.jsxs)(x.a,{fontFamily:"Monospace",style:{display:"flex",flexDirection:"column",padding:"3px",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)("label",{children:t}),Object(v.jsx)("input",{type:"checkbox",name:t,checked:n,onChange:c})]})},S=function(e){var t=e.checkedArr,n=e.handler,c=e.base,a=t.map((function(e,t){return Object(v.jsx)(y,{label:(c+t).toString(10).padStart(2,"0"),isSelected:e,onCheckboxChange:n},(c+t).toString(10).padStart(2,"0"))}));return Object(v.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse",justifyContent:"center"},children:a})},C=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),o=s[0],j=s[1],b=Object(c.useState)(""),f=Object(i.a)(b,2),y=f[0],C=f[1],w=Object(c.useState)(""),N=Object(i.a)(w,2),A=N[0],k=N[1],R=Object(c.useState)(Array(32).fill(!1)),F=Object(i.a)(R,2),W=F[0],B=F[1],L=g();Object(c.useEffect)((function(){a(n),j(n.toString(2).toUpperCase().padStart(32,"0")),C(n.toString(10).toUpperCase().padStart(10,"0")),k(n.toString(16).toUpperCase().padStart(8,"0"))}),[n]);var P=function(e){var t=Number(e.target.name),c=Object(d.a)(W);c[t]=!c[t],B(c);var r=n,s=Math.pow(2,t);r=c[t]?n+s:n-s,a(r)},M=function(){var e=0,t=W.map((function(t,n){var c=Math.pow(2,n);return t||(e+=c),!t}));a(e),B(t)},E=function(){for(var e=0,t=[],n=0;n<32;n++){var c=Math.random()>.5;t.push(c),c&&(e+=Math.pow(2,n))}a(e),B(t)},D=function(){a(0),B(Array(32).fill(!1))},I=function(){a(4294967295),B(Array(32).fill(!0))},T=function(){return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:L.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Inputs"}),Object(v.jsx)(S,{checkedArr:W.slice(24,32),handler:P,base:24}),Object(v.jsx)(S,{checkedArr:W.slice(16,24),handler:P,base:16}),Object(v.jsx)(S,{checkedArr:W.slice(8,16),handler:P,base:8}),Object(v.jsx)(S,{checkedArr:W.slice(0,8),handler:P,base:0})]})})},U=function(){return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:L.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Outputs"}),Object(v.jsx)(x.a,{component:u.a,fontFamily:"Monospace",children:Object(v.jsx)("table",{align:"center",children:Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{align:"center",children:"Bin"}),Object(v.jsx)("td",{align:"center",children:Object(v.jsx)("input",{type:"text",name:"binary24",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:o.slice(0,8)})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{}),Object(v.jsx)("td",{align:"center",children:Object(v.jsx)("input",{type:"text",name:"binary16",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:o.slice(8,16)})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{}),Object(v.jsx)("td",{align:"center",children:Object(v.jsx)("input",{type:"text",name:"binary08",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:o.slice(16,24)})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{}),Object(v.jsx)("td",{align:"center",children:Object(v.jsx)("input",{type:"text",name:"binary00",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:o.slice(24,32)})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{align:"center",children:"Dec"}),Object(v.jsx)("td",{align:"center",children:Object(v.jsx)("input",{type:"text",name:"decimal",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:y})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{align:"center",children:"Hex"}),Object(v.jsx)("td",{align:"center",children:Object(v.jsx)("input",{type:"text",name:"Hex",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:A})})]})]})})})]})})},z=function(){return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:L.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Buttons"}),Object(v.jsxs)(m.a,{container:!0,justifyContent:"center",spacing:1,children:[Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",onClick:M,fullWidth:!0,children:"Toggle"})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",onClick:E,fullWidth:!0,children:"Randomize"})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",onClick:D,fullWidth:!0,children:"Reset all"})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",onClick:I,fullWidth:!0,children:"Check all"})})]})]})})};return Object(v.jsxs)(l.a,{maxWidth:"sm",children:[Object(v.jsx)(T,{}),Object(v.jsx)(U,{}),Object(v.jsx)(z,{})]})},w=n(168),N=n(151),A=n(152),k=n(153),R=n(154),F=Object(f.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)}}})),W=n(69),B=n.n(W),L="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",P=function(){var e=F(),t=Object(c.useState)(L),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),j=o[0],b=o[1],d=Object(c.useState)("0"),x=Object(i.a)(d,2),f=x[0],g=x[1],y=Object(c.useRef)(0),S=function(e){switch(e.type){case"keydown":"Enter"===e.key&&(e.preventDefault(),W());break;case"change":b(e.target.value),y.current=e.target.selectionStart;break;case"focus":e.target.selectionStart=y.current;break;default:console.log("TYPE",e.type)}},C=function(e){r(L),b(""),g("0")},W=function(e){if(e.preventDefault(),0===j.length)return r(L),void g("No input");B.a.toDataURL(j).then((function(e){r(e),g(j.length)})).catch((function(e){return console.log(e)}))},P=function(){return Object(v.jsxs)(u.a,{elevation:3,children:[Object(v.jsxs)(O.a,{component:"fieldset",className:e.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Input String"}),Object(v.jsx)(w.a,{variant:"outlined",size:"small",multiline:!0,minRows:5,maxRows:5,autoFocus:!0,value:j,onChange:S,onFocus:S})]}),Object(v.jsx)(l.a,{children:Object(v.jsxs)(m.a,{className:e.gridRoot,container:!0,spacing:2,children:[Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:W,children:"Go"})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:C,children:"Clear"})})]})}),"\xa0"]})},M=function(){return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:e.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"QR Code"}),Object(v.jsx)(m.a,{container:!0,spacing:3,justifyContent:"center",children:Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsxs)(N.a,{children:[Object(v.jsx)(A.a,{component:"img",image:a,title:'QRcode of "'.concat(j,'"')}),Object(v.jsx)(k.a,{children:Object(v.jsxs)(R.a,{variant:"h6",align:"center",children:["input length: ",f]})})]})})})]})})};return Object(v.jsxs)(l.a,{maxWidth:"sm",children:[Object(v.jsx)(P,{}),Object(v.jsx)(M,{})]})},M=n(155),E=n(156),D=n(157),I=n(158),T=n(159),U=n(160),z=Object(f.a)((function(e){return{paper:{margin:e.spacing(1)},formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)},table:{padding:e.spacing(0)}}})),_=n(22),V=n.n(_),H=n(21),G=n(38),Q=Object(H.a)((function e(){var t=this;Object(G.a)(this,e),this.update=function(e){t.tNow=e.clone()},this.toString=function(){var e=t.tNow.diff(t.tStart);return V()(e+t.prevElapsed).format("mm:ss.SS")},this.reset=function(){t.tStart=V()(),t.tPrevStart=V()(),t.tNow=V()(),t.prevElapsed=0},this.setStart=function(e){t.tStart=e.clone()},this.keepElapsed=function(){t.prevElapsed=t.tNow.diff(t.tStart)+t.prevElapsed};var n=V()();this.tStart=n,this.tPrevStart=n,this.tNow=n,this.prevElapsed=0})),q="start",J=0,K=a.a.memo((function(e){var t=e.timerTotalDispaly,n=e.timerLapDispaly,c=z();return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:c.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Main"}),Object(v.jsxs)(m.a,{container:!0,justifyContent:"center",spacing:2,children:[Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(w.a,{label:"Total",value:t,inputProps:{readOnly:!0,style:{textAlign:"center",fontSize:30}},variant:"outlined",fullWidth:!0})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(w.a,{label:"Lap",value:n,inputProps:{readOnly:!0,style:{textAlign:"center",fontSize:30}},variant:"outlined",fullWidth:!0})})]})]})})})),Y=a.a.memo((function(e){var t=e.enBtnReset,n=e.enBtnStart,c=e.enBtnLap,a=e.handleReset,r=e.handleStartStop,s=e.handleLap,i=e.startButtonText,l=z();return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:l.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Buttons"}),Object(v.jsxs)(m.a,{container:!0,justifyContent:"center",spacing:2,children:[Object(v.jsx)(m.a,{item:!0,xs:12,sm:4,children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,disabled:!t,onClick:a,children:"Reset"})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:4,children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,disabled:!n,onClick:r,children:i})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:4,children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,disabled:!c,onClick:s,children:"LAP"})})]})]})})}),(function(e,t){return e.enBtnReset===t.enBtnReset&&e.enBtnStart===t.enBtnStart&&e.enBtnLap===t.enBtnLap&&e.startButtonText===t.startButtonText})),X=a.a.memo((function(e){var t=e.resultRows,n=z();return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:n.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Results"}),Object(v.jsx)(D.a,{component:u.a,children:Object(v.jsxs)(I.a,{className:n.table,padding:"none",children:[Object(v.jsxs)("colgroup",{children:[Object(v.jsx)("col",{style:{width:"20%"}}),Object(v.jsx)("col",{style:{width:"40%"}}),Object(v.jsx)("col",{style:{width:"40%"}})]}),Object(v.jsx)(T.a,{children:Object(v.jsxs)(M.a,{children:[Object(v.jsx)(E.a,{align:"center",children:"No."}),Object(v.jsx)(E.a,{align:"center",children:"Total"}),Object(v.jsx)(E.a,{align:"center",children:"LAP"})]})}),Object(v.jsx)(U.a,{children:t})]})})]})})})),Z=function(){var e=Object(c.useState)((function(){return new Q})),t=Object(i.a)(e,1)[0],n=Object(c.useState)((function(){return new Q})),a=Object(i.a)(n,1)[0],r=Object(c.useState)(t.toString()),s=Object(i.a)(r,2),o=s[0],j=s[1],b=Object(c.useState)(a.toString()),u=Object(i.a)(b,2),O=u[0],h=u[1],x=Object(c.useState)("Start"),m=Object(i.a)(x,2),p=m[0],f=m[1],g=Object(c.useState)([]),y=Object(i.a)(g,2),S=y[0],C=y[1],w=Object(c.useState)(!1),N=Object(i.a)(w,2),A=N[0],k=N[1],R=Object(c.useState)(!0),F=Object(i.a)(R,2),W=F[0],B=F[1],L=Object(c.useState)(!1),P=Object(i.a)(L,2),D=P[0],I=P[1],T=Object(c.useRef)(null),U=function(){j(t.toString()),h(a.toString())},z=function(e){var n=V()();t.setStart(n),a.setStart(n),T.current=setInterval((function(){var e=V()();t.update(e),a.update(e),U()}),10),f("Stop"),q="stop",k(!0),B(!0),I(!0)},_=function(){null!==T.current&&(clearInterval(T.current),T.current=null),q="start",f("Start"),k(!0),B(!0),I(!1),H(J++,t.toString(),a.toString()),t.keepElapsed()},H=function(e,t,n){var c=Object(v.jsxs)(M.a,{children:[Object(v.jsx)(E.a,{align:"center",children:"#".concat((e+1).toString().padStart(2,"0"))}),Object(v.jsx)(E.a,{align:"center",style:{backgroundColor:"rgb(0, 153, 102)"},children:t}),Object(v.jsx)(E.a,{align:"center",style:{backgroundColor:"rgb(255, 222, 51)"},children:n})]},"".concat(e));C((function(e){return[c].concat(Object(d.a)(e))}))};return Object(v.jsxs)(l.a,{maxWidth:"sm",children:[Object(v.jsx)(K,{timerTotalDispaly:o,timerLapDispaly:O}),Object(v.jsx)(Y,{enBtnReset:A,enBtnStart:W,enBtnLap:D,handleReset:function(){null!=T.current&&(clearInterval(T.current),T.current=null),q="start",t.reset(),a.reset(),U(),f("Start"),C([]),k(!1),B(!0),I(!1),J=0},handleStartStop:function(e){switch(e.preventDefault(),q){case"start":z(e);break;case"stop":_()}},handleLap:function(){H(J++,t.toString(),a.toString()),a.setStart(V()())},startButtonText:p}),Object(v.jsx)(X,{resultRows:S})]})},$=n(161),ee=n(165),te=Object(f.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)},card:{height:"100%"},media:{height:0,paddingTop:"87%"}}})),ne=["\u57fa\u9686\u5e02","\u81fa\u5317\u5e02","\u65b0\u5317\u5e02","\u6843\u5712\u5e02","\u65b0\u7af9\u5e02","\u65b0\u7af9\u7e23","\u82d7\u6817\u7e23","\u81fa\u4e2d\u5e02","\u5f70\u5316\u7e23","\u5357\u6295\u7e23","\u96f2\u6797\u7e23","\u5609\u7fa9\u5e02","\u5609\u7fa9\u7e23","\u81fa\u5357\u5e02","\u9ad8\u96c4\u5e02","\u5c4f\u6771\u7e23","\u5b9c\u862d\u7e23","\u82b1\u84ee\u7e23","\u81fa\u6771\u7e23","\u6f8e\u6e56\u7e23","\u91d1\u9580\u7e23","\u9023\u6c5f\u7e23"],ce=function(){var e=Object(c.useState)("\u81fa\u5317\u5e02"),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),o=s[0],j=s[1],b=te();Object(c.useEffect)((function(){fetch(encodeURI("".concat("https://www.ychsiao168.idv.tw:5001/weatherfc/","/"))).then((function(e){return e.json()})).then((function(e){var t=e.records;j(t)})).catch((function(e){return console.log(e)}))}),[]);var d=function(e){var t=e.locRecord,n=e.index;if(!t)return Object(v.jsx)($.a,{});var c=t.weatherElement,a=c.map((function(e){return e.time[n].parameter.parameterName})),r=Object(i.a)(a,5),s=r[0],l=r[1],o=r[2],j=r[3],d=r[4],u=c[0].time[n],O=u.startTime,h=u.endTime,m=c[0].time[n].parameter.parameterValue,f="".concat(O.substring(5,16).replace("-","/").replace(" ","-")," ~ ").concat(h.substring(5,16).replace("-","/").replace(" ","-"));return Object(v.jsxs)(N.a,{className:b.card,children:[Object(v.jsx)(k.a,{children:Object(v.jsx)(R.a,{variant:"body1",title:f,children:x(O,h)})}),Object(v.jsx)(A.a,{className:b.media,image:p(m,O),title:s}),Object(v.jsxs)(k.a,{children:[Object(v.jsxs)(R.a,{variant:"body1",children:["\ud83c\udf21\ufe0f ",o," - ",d,"\u2103 "]}),Object(v.jsxs)(R.a,{variant:"body1",children:["\u2602 ",l,"%"]}),Object(v.jsx)(R.a,{variant:"body1",children:j})]})]})},x=function(e,t){var n=6e4*(new Date).getTimezoneOffset(),c=new Date(Date.now()-n).toISOString().substring(0,10),a=e.split(" "),r=Object(i.a)(a,2),s=r[0],l=r[1];return s!==c||"06:00:00"!==l&&"12:00:00"!==l?s===c&&"00:00:00"===l?"\u4eca\u65e5\u51cc\u6668":s===c&&"18:00:00"===l||s!==c&&"00:00:00"===l?"\u4eca\u665a\u660e\u6668":s!==c&&"06:00:00"===l?"\u660e\u65e5\u767d\u5929":s!==c&&"18:00:00"===l?"\u660e\u65e5\u665a\u4e0a":(console.log("\u3007\u3007\u3007\u3007",c,s,l),"\u3007\u3007\u3007\u3007"):"\u4eca\u65e5\u767d\u5929"},p=function(e,t){var n=t.split(" "),c=Object(i.a)(n,2)[1],a="06:00:00"===c||"12:00:00"===c?"day":"night";return"".concat("/simple-utility-app","/images/").concat(a,"/").concat(e.toString().padStart(2,"0"),".svg")},f=function(){return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:b.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Menu"}),Object(v.jsx)(O.a,{variant:"outlined",className:b.formControl,children:Object(v.jsxs)(ee.a,{native:!0,value:n,onChange:function(e){a(e.target.value)},children:[Object(v.jsx)("option",{value:"",disabled:!0,children:"\u9078\u64c7\u7e23\u5e02"}),ne.map((function(e,t){return Object(v.jsx)("option",{value:e,children:e},t)}))]})})]})})},g=function(){var e=function(e,t){var n,c=null;return null===e||void 0===e||null===(n=e.location)||void 0===n||n.some((function(e){return e.locationName===t&&(c=Object.assign({},e),!0)})),c}(o,n),t=null===e||void 0===e?void 0:e.locationName;return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:b.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:t}),Object(v.jsxs)(m.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(v.jsx)(m.a,{item:!0,xs:12,sm:4,align:"center",children:Object(v.jsx)(d,{locRecord:e,index:0})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:4,align:"center",children:Object(v.jsx)(d,{locRecord:e,index:1})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:4,align:"center",children:Object(v.jsx)(d,{locRecord:e,index:2})})]})]})})};return Object(v.jsxs)(l.a,{maxWidth:"sm",children:[Object(v.jsx)(f,{}),Object(v.jsx)(g,{})]})},ae=n(162),re=n(71),se=Object(f.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)},card:{height:"100%"},media:{height:250},tableNoBorder:{borderWidth:0},tableLargeFont:{fontSize:"16pt"},tableSmallFont:{fontSize:"8pt"}}})),ie={"\u57fa\u9686\u5e02":["\u57fa\u9686"],"\u81fa\u5317\u5e02":["\u58eb\u6797","\u5927\u540c","\u4e2d\u5c71","\u53e4\u4ead","\u677e\u5c71","\u967d\u660e","\u842c\u83ef"],"\u65b0\u5317\u5e02":["\u4e09\u91cd","\u571f\u57ce","\u6c38\u548c","\u6c50\u6b62","\u677f\u6a4b","\u6797\u53e3","\u6de1\u6c34","\u83dc\u5bee","\u65b0\u5e97","\u65b0\u838a","\u842c\u91cc","\u65b0\u5317(\u6a39\u6797)","\u5bcc\u8cb4\u89d2"],"\u6843\u5712\u5e02":["\u5927\u5712","\u4e2d\u58e2","\u5e73\u93ae","\u6843\u5712","\u9f8d\u6f6d","\u89c0\u97f3"],"\u65b0\u7af9\u5e02":["\u65b0\u7af9","\u65b0\u7af9(\u5317\u5340)"],"\u65b0\u7af9\u7e23":["\u7af9\u6771","\u6e56\u53e3"],"\u82d7\u6817\u7e23":["\u4e09\u7fa9","\u82d7\u6817","\u982d\u4efd"],"\u81fa\u4e2d\u5e02":["\u5927\u91cc","\u897f\u5c6f","\u6c99\u9e7f","\u5fe0\u660e","\u8c50\u539f"],"\u5f70\u5316\u7e23":["\u4e8c\u6797","\u5f70\u5316","\u7dda\u897f","\u5f70\u5316(\u54e1\u6797)","\u5f70\u5316(\u5927\u57ce)"],"\u5357\u6295\u7e23":["\u7af9\u5c71","\u5357\u6295","\u57d4\u91cc"],"\u96f2\u6797\u7e23":["\u6597\u516d","\u5d19\u80cc","\u9ea5\u5bee","\u81fa\u897f"],"\u5609\u7fa9\u5e02":["\u5609\u7fa9"],"\u5609\u7fa9\u7e23":["\u6734\u5b50","\u65b0\u6e2f"],"\u81fa\u5357\u5e02":["\u5b89\u5357","\u5584\u5316","\u65b0\u71df","\u81fa\u5357","\u81fa\u5357(\u9ebb\u8c46)","\u81fa\u5357(\u5317\u9580)"],"\u9ad8\u96c4\u5e02":["\u5927\u5bee","\u5c0f\u6e2f","\u4ec1\u6b66","\u5de6\u71df","\u6797\u5712","\u524d\u91d1","\u524d\u93ae","\u7f8e\u6fc3","\u5fa9\u8208","\u6960\u6893","\u9cf3\u5c71","\u6a4b\u982d"],"\u5c4f\u6771\u7e23":["\u5c4f\u6771","\u6046\u6625","\u6f6e\u5dde","\u5c4f\u6771(\u7409\u7403)","\u5c4f\u6771(\u678b\u5bee)"],"\u5b9c\u862d\u7e23":["\u51ac\u5c71","\u5b9c\u862d"],"\u82b1\u84ee\u7e23":["\u82b1\u84ee"],"\u81fa\u6771\u7e23":["\u81fa\u6771","\u95dc\u5c71"],"\u6f8e\u6e56\u7e23":["\u99ac\u516c"],"\u91d1\u9580\u7e23":["\u91d1\u9580"],"\u9023\u6c5f\u7e23":["\u99ac\u7956"]},le=Object.keys(ie),oe=function(){var e=Object(c.useState)({}),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(le[0]),s=Object(i.a)(r,2),o=s[0],j=s[1],b=Object(c.useState)(ie[le[0]][0]),d=Object(i.a)(b,2),p=d[0],f=d[1],g=se(),y=Object(re.a)({overrides:{MuiTableCell:{root:{margin:"1px",padding:"1px"}}}});Object(c.useEffect)((function(){fetch(encodeURI("https://www.ychsiao168.idv.tw:5001/epadata/aqx_p_432")).then((function(e){return e.json()})).then((function(e){var t=e.records;a(t)})).catch((function(e){return console.log(e)}))}),[]);var S=function(){return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:g.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Menu"}),Object(v.jsxs)(m.a,{container:!0,spacing:1,justifyContent:"center",children:[Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(O.a,{variant:"outlined",className:g.formControl,children:Object(v.jsxs)(ee.a,{autoWidth:!0,native:!0,value:o,onChange:function(e){j(e.target.value),f(ie[e.target.value][0])},children:[Object(v.jsx)("option",{value:"",disabled:!0,children:"\u9078\u64c7\u7e23\u5e02"}),le.map((function(e,t){return Object(v.jsx)("option",{value:e,children:e},t)}))]})})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(O.a,{variant:"outlined",className:g.formControl,children:Object(v.jsxs)(ee.a,{autoWidth:!0,native:!0,value:p,onChange:function(e){return f(e.target.value)},children:[Object(v.jsx)("option",{value:"",disabled:!0,children:"\u9078\u64c7\u6e2c\u7ad9"}),ie[o].map((function(e,t){return Object(v.jsx)("option",{value:e,children:e},t)}))]})})})]})]})})},C=function(e){var t=e.title,n=e.name0,c=e.val0,a=e.name1,r=e.val1,s=e.sep;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(M.a,{children:[Object(v.jsx)(E.a,{className:g.tableSmallFont,rowSpan:"2",children:t}),Object(v.jsx)(E.a,{className:"".concat(g.tableSmallFont," ").concat(!s&&g.tableNoBorder),children:n}),Object(v.jsx)(E.a,{align:"right",className:"".concat(!s&&g.tableNoBorder," ").concat(g.tableLargeFont),children:c})]}),Object(v.jsxs)(M.a,{children:[Object(v.jsx)(E.a,{className:g.tableSmallFont,children:a}),Object(v.jsx)(E.a,{className:g.tableLargeFont,align:"right",children:r})]})]})},w=function(e){var t=e.records,n=null;if(t.length&&t.some((function(e){return e.sitename===p&&e.county===o&&(function(e){["PM2.5_AVG","PM2.5","PM10_AVG","PM10","O3_8hr","O3","CO_8hr","CO","SO2","NO2"].forEach((function(t){""===e[t]&&(e[t]="...")}))}(n=e),!0)})),!n)return Object(v.jsx)($.a,{});var c,a=[{title:Object(v.jsxs)(v.Fragment,{children:[" PM ",Object(v.jsx)("sub",{children:" 2.5"})," ",Object(v.jsx)("br",{}),"(\u03bcg / m3) ",Object(v.jsx)("br",{})," \u7d30\u61f8\u6d6e\u5fae\u7c92"]}),name0:"\u79fb\u52d5\u5e73\u5747",val0:n["pm2.5_avg"],sep:!0,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n["pm2.5"],key:"PM2.5"},{title:Object(v.jsxs)(v.Fragment,{children:["PM",Object(v.jsx)("sub",{children:"10"}),Object(v.jsx)("br",{}),"(\u03bcg/m3)",Object(v.jsx)("br",{}),"\u7d30\u61f8\u6d6e\u5fae\u7c92"]}),name0:"\u79fb\u52d5\u5e73\u5747",val0:n.pm10_avg,sep:!0,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n.pm10,key:"PM10"},{title:Object(v.jsxs)(v.Fragment,{children:["O",Object(v.jsx)("sub",{children:"3"}),Object(v.jsx)("br",{}),"(ppb)",Object(v.jsx)("br",{}),"\u81ed\u6c27"]}),name0:Object(v.jsxs)(v.Fragment,{children:["8\u5c0f\u6642",Object(v.jsx)("br",{}),"\u79fb\u52d5\u5e73\u5747"]}),val0:n.o3_8hr,sep:!0,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n.o3,key:"O3"},{title:Object(v.jsxs)(v.Fragment,{children:["CO",Object(v.jsx)("br",{}),"(ppm) ",Object(v.jsx)("br",{}),"\u4e00\u6c27\u5316\u78b3"]}),name0:Object(v.jsxs)(v.Fragment,{children:["8\u5c0f\u6642",Object(v.jsx)("br",{}),"\u79fb\u52d5\u5e73\u5747"]}),val0:n.co_8hr,sep:!0,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n.co,key:"CO"},{title:Object(v.jsxs)(v.Fragment,{children:["SO",Object(v.jsx)("sub",{children:"2"}),Object(v.jsx)("br",{}),"(ppb)",Object(v.jsx)("br",{}),"\u4e8c\u6c27\u5316\u786b"]}),name0:"",val0:"",sep:!1,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n.so2,key:"SO2"},{title:Object(v.jsxs)(v.Fragment,{children:["NO",Object(v.jsx)("sub",{children:"2"}),Object(v.jsx)("br",{}),"(ppb)",Object(v.jsx)("br",{}),"\u4e8c\u6c27\u5316\u6c2e"]}),name0:"",val0:"",sep:!1,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n.no2,key:"NO2"}];return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:g.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"\u7a7a\u6c23\u54c1\u8cea"}),Object(v.jsx)(R.a,{variant:"body2",align:"center",children:n.publishtime}),Object(v.jsxs)(x.a,{border:1,borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center",children:[Object(v.jsxs)(R.a,{variant:"body1",align:"center",children:[n.county," / ",n.sitename]}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",border:"4px solid rgb(".concat((c=n.aqi,(c=Number(c))<51?[0,153,102]:c<101?[255,222,51]:c<151?[255,153,51]:c<201?[204,0,51]:c<301?[128,0,128]:c<501?[165,42,42]:[0,153,102]),")"),width:"100px",height:"100px"},children:Object(v.jsx)(R.a,{variant:"h3",children:n.aqi})}),Object(v.jsx)(R.a,{variant:"h6",align:"center",children:n.status})]}),Object(v.jsx)(ae.a,{theme:y,children:Object(v.jsxs)(I.a,{children:[Object(v.jsxs)("colgroup",{children:[Object(v.jsx)("col",{style:{width:"40%"}}),Object(v.jsx)("col",{style:{width:"50%"}}),Object(v.jsx)("col",{style:{width:"10%"}})]}),Object(v.jsx)(U.a,{children:a.map((function(e){return Object(v.jsx)(C,{title:e.title,name0:e.name0,val0:e.val0,name1:e.name1,val1:e.val1,sep:e.sep},e.key)}))})]})})]})})};return Object(v.jsxs)(l.a,{maxWidth:"sm",children:[Object(v.jsx)(S,{}),Object(v.jsx)(w,{records:n})]})},je=n(8),be=n(70),de=n(41),ue=Object(f.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)},fileInput:{display:"none"}}})),Oe=n(53),he={md5:"",sha256:"",crc32:""},xe=function(){var e=Object(c.useState)(he),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),o=s[0],j=s[1],b=Object(c.useRef)(""),d=Object(c.useState)(""),x=Object(i.a)(d,2),f=x[0],g=x[1],y=Object(c.useState)(!1),S=Object(i.a)(y,2),C=S[0],N=S[1],A=ue(),k=function(){var e=Object(de.a)(Object(je.a)().mark((function e(){var t;return Object(je.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(be.a)({},he),N(!1),e.next=4,Promise.all([Object(Oe.b)(o),Object(Oe.c)(o),Object(Oe.a)(o)]).then((function(e){t.md5=e[0].toUpperCase(),t.sha256=e[1].toUpperCase(),t.crc32=e[2].toUpperCase(),g("Hash '".concat(b.current,"' done!")),b.current="",a(t)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(de.a)(Object(je.a)().mark((function e(t){var n;return Object(je.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.target.files.length){e.next=3;break}return a(he),e.abrupt("return");case 3:(n=new FileReader).onerror=function(e){N(!1),g("Error opening file")},n.onload=function(){var e=Object(de.a)(Object(je.a)().mark((function e(t){return Object(je.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(new Uint8Array(t.target.result)),N(!0),g("'".concat(b.current,"' ready, Press GO"));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.readAsArrayBuffer(t.target.files[0]),a(he),b.current=t.target.files[0].name,g("Reading File...".concat(t.target.files[0].name));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:A.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Inputs"}),Object(v.jsx)(m.a,{container:!0,justifyContent:"center",spacing:2,children:Object(v.jsxs)(m.a,{item:!0,xs:12,sm:8,children:[Object(v.jsx)("input",{accept:"image/*",className:A.fileInput,id:"select-file-button",type:"file",onChange:R}),Object(v.jsx)("label",{htmlFor:"select-file-button",children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",disabled:!C,onClick:k,style:{cursor:"pointer"},fullWidth:!0,children:b.current?"GO":"Click to select file"})})]})})]})})},W=function(){return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:A.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Outputs"}),Object(v.jsxs)(m.a,{container:!0,justifyContent:"center",spacing:2,children:[Object(v.jsx)(m.a,{item:!0,xs:12,sm:8,children:Object(v.jsx)(w.a,{label:"MD5",defaultValue:n.md5,inputProps:{readOnly:!0,style:{textAlign:"right",fontFamily:"monospace"}},variant:"outlined",multiline:!0,fullWidth:!0,minRows:2})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:8,children:Object(v.jsx)(w.a,{label:"SHA256",defaultValue:n.sha256,style:{alignItems:"center",justifyContent:"center"},inputProps:{readOnly:!0,style:{textAlign:"right",fontFamily:"monospace"}},variant:"outlined",multiline:!0,fullWidth:!0,minRows:2})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:8,children:Object(v.jsx)(w.a,{label:"CRC32",defaultValue:n.crc32,inputProps:{readOnly:!0,style:{textAlign:"right",fontFamily:"monospace"}},variant:"outlined",multiline:!0,fullWidth:!0,minRows:2})})]})]})})},B=function(){return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:A.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Status"}),Object(v.jsx)(m.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(m.a,{item:!0,xs:12,sm:8,children:Object(v.jsx)(w.a,{defaultValue:f,inputProps:{readOnly:!0,style:{textAlign:"center",fontFamily:"monospace"}},fullWidth:!0,multiline:!0})})})]})})};return Object(v.jsxs)(l.a,{maxWidth:"sm",children:[Object(v.jsx)(F,{}),Object(v.jsx)(W,{}),Object(v.jsx)(B,{})]})},me=Object(f.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)},tableMonoFont:{fontSize:"10 pt",fontFamily:"monospace"}}})),pe=function(e,t){fetch("https://www.ychsiao168.idv.tw:5001/api/shorturl").then((function(e){return e.json()})).then((function(n){!function(e,t,n){var c=0,a=[];e.forEach((function(e){var t=Object(v.jsxs)(M.a,{children:[Object(v.jsx)(E.a,{align:"center",children:"#".concat((c+1).toString().padStart(2,"0"))}),Object(v.jsx)(E.a,{align:"center",className:n.tableMonoFont,style:{backgroundColor:"rgb(204, 229, 255)"},children:e.original_url}),Object(v.jsx)(E.a,{align:"center",className:n.tableMonoFont,style:{backgroundColor:"rgb(255, 255, 204)"},children:Object(v.jsx)("a",{href:"".concat("https://www.ychsiao168.idv.tw:5001/api/shorturl","/").concat(e.hash),target:"_blank",rel:"noreferrer",children:e.hash})})]},"".concat(e.hash));a.push(t),c++})),t(a)}(n,e,t)}))},fe=function(e){var t=e.setStatus,n=e.setUrlRows,a=me(),r=Object(c.useState)(""),s=Object(i.a)(r,2),l=s[0],o=s[1],j=function(){var e=Object(de.a)(Object(je.a)().mark((function e(c){return Object(je.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,fetch("https://www.ychsiao168.idv.tw:5001/api/shorturl/new",{headers:{"content-type":"application/json"},body:JSON.stringify({url:l}),method:"POST"}).then((function(e){return e.json()})).then((function(e){null!==e&&void 0!==e&&e.error?t(e.error):t("Keep '".concat(l,"' done"))})).then((function(){n([])}));case 3:pe(n,a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:a.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Inputs"}),Object(v.jsx)("form",{className:a.container,onSubmit:j,method:"post",children:Object(v.jsxs)(m.a,{container:!0,justifyContent:"center",spacing:2,children:[Object(v.jsx)(m.a,{item:!0,xs:12,sm:10,children:Object(v.jsx)(w.a,{autoFocus:!0,variant:"outlined",type:"text",label:"URL to be kept",value:l,onChange:function(e){e.preventDefault(),o(e.target.value)},fullWidth:!0})}),Object(v.jsx)(m.a,{item:!0,xs:12,sm:2,children:Object(v.jsx)(p.a,{variant:"contained",color:"primary",style:{cursor:"pointer"},type:"submit",fullWidth:!0,children:"POST URL"})})]})})]})})},ge=function(e){var t=e.urlRows,n=e.setUrlRows,a=me();return Object(c.useEffect)((function(){pe(n,a)}),[n,a]),Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:a.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Records"}),Object(v.jsx)(D.a,{component:u.a,children:Object(v.jsxs)(I.a,{className:a.table,padding:"none",children:[Object(v.jsxs)("colgroup",{children:[Object(v.jsx)("col",{style:{width:"10%"}}),Object(v.jsx)("col",{style:{width:"70%"}}),Object(v.jsx)("col",{style:{width:"20%"}})]}),Object(v.jsx)(T.a,{children:Object(v.jsxs)(M.a,{children:[Object(v.jsx)(E.a,{align:"center",children:"No."}),Object(v.jsx)(E.a,{align:"center",children:"URL"}),Object(v.jsx)(E.a,{align:"center",children:"Hash"})]})}),Object(v.jsx)(U.a,{children:t})]})})]})})},ve=function(e){var t=e.status,n=me();return Object(v.jsx)(u.a,{elevation:3,children:Object(v.jsxs)(O.a,{component:"fieldset",className:n.formControl,children:[Object(v.jsx)(h.a,{component:"legend",children:"Status"}),Object(v.jsx)(m.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(m.a,{item:!0,xs:12,sm:8,children:Object(v.jsx)(w.a,{defaultValue:t,inputProps:{readOnly:!0,style:{textAlign:"center",fontFamily:"monospace"}},fullWidth:!0,multiline:!0})})})]})})},ye=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(i.a)(r,2),o=s[0],j=s[1];return Object(v.jsxs)(l.a,{maxWidth:"sm",children:[Object(v.jsx)(fe,{setStatus:a,setUrlRows:j}),Object(v.jsx)(ge,{urlRows:o,setUrlRows:j}),Object(v.jsx)(ve,{status:n})]})},Se=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(v.jsxs)(l.a,{maxWidth:"sm",children:[Object(v.jsx)(o.a,{position:"static",children:Object(v.jsxs)(j.a,{value:n,indicatorColor:"secondary",onChange:function(e,t){return a(t)},variant:"scrollable",scrollButtons:"auto",children:[Object(v.jsx)(b.a,{label:Object(v.jsxs)("div",{children:["Binary",Object(v.jsx)("br",{}),"Converter"]}),value:0}),Object(v.jsx)(b.a,{label:Object(v.jsxs)("div",{children:["QR",Object(v.jsx)("br",{}),"Code"]}),value:1}),Object(v.jsx)(b.a,{label:Object(v.jsxs)("div",{children:["File",Object(v.jsx)("br",{}),"Hash"]}),value:2}),Object(v.jsx)(b.a,{label:Object(v.jsxs)("div",{children:["Stop",Object(v.jsx)("br",{}),"Watch"]}),value:3}),Object(v.jsx)(b.a,{label:Object(v.jsx)("div",{children:"Weather"}),value:4}),Object(v.jsx)(b.a,{label:Object(v.jsxs)("div",{children:["Air",Object(v.jsx)("br",{}),"Quality"]}),value:5}),Object(v.jsx)(b.a,{label:Object(v.jsxs)("div",{children:["URL",Object(v.jsx)("br",{}),"Keeper"]}),value:6})]})}),0===n&&Object(v.jsx)(C,{}),1===n&&Object(v.jsx)(P,{}),2===n&&Object(v.jsx)(xe,{}),3===n&&Object(v.jsx)(Z,{}),4===n&&Object(v.jsx)(ce,{}),5===n&&Object(v.jsx)(oe,{}),6===n&&Object(v.jsx)(ye,{})]})};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(Se,{})}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.5935aa2c.chunk.js.map