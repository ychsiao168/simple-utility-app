(this["webpackJsonpsimple-utility-app"]=this["webpackJsonpsimple-utility-app"]||[]).push([[0],{123:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(12),i=n.n(s),l=n(8),o=n(157),j=n(172),d=n(176),b=n(173),u=n(37),O=n(80),h=n(178),x=n(154),m=n(175),p=n(155),f=n(156),g=n(151),v=Object(g.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)}}})),y=function(e){var t=e.label,n=e.isSelected,a=e.onCheckboxChange;return Object(c.jsxs)(m.a,{fontFamily:"Monospace",style:{display:"flex",flexDirection:"column",padding:"3px",alignItems:"center",justifyContent:"center"},children:[Object(c.jsx)("label",{children:t}),Object(c.jsx)("input",{type:"checkbox",name:t,checked:n,onChange:a})]})},S=function(e){var t=e.checkedArr,n=e.handler,a=e.base,r=t.map((function(e,t){return Object(c.jsx)(y,{label:(a+t).toString(10).padStart(2,"0"),isSelected:e,onCheckboxChange:n},(a+t).toString(10).padStart(2,"0"))}));return Object(c.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse",justifyContent:"center"},children:r})},C=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),j=i[0],d=i[1],b=Object(a.useState)(""),g=Object(l.a)(b,2),y=g[0],C=g[1],w=Object(a.useState)(""),A=Object(l.a)(w,2),N=A[0],k=A[1],R=Object(a.useState)(Array(32).fill(!1)),F=Object(l.a)(R,2),W=F[0],B=F[1],P=v();Object(a.useEffect)((function(){r(n),d(n.toString(2).toUpperCase().padStart(32,"0")),C(n.toString(10).toUpperCase().padStart(10,"0")),k(n.toString(16).toUpperCase().padStart(8,"0"))}),[n]);var M=function(e){var t=Number(e.target.name),c=Object(u.a)(W);c[t]=!c[t],B(c);var a=n,s=Math.pow(2,t);a=c[t]?n+s:n-s,r(a)},L=function(){var e=0,t=W.map((function(t,n){var c=Math.pow(2,n);return t||(e+=c),!t}));r(e),B(t)},E=function(){for(var e=0,t=[],n=0;n<32;n++){var c=Math.random()>.5;t.push(c),c&&(e+=Math.pow(2,n))}r(e),B(t)},I=function(){r(0),B(Array(32).fill(!1))},D=function(){r(4294967295),B(Array(32).fill(!0))},T=function(){return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:P.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Inputs"}),Object(c.jsx)(S,{checkedArr:W.slice(24,32),handler:M,base:24}),Object(c.jsx)(S,{checkedArr:W.slice(16,24),handler:M,base:16}),Object(c.jsx)(S,{checkedArr:W.slice(8,16),handler:M,base:8}),Object(c.jsx)(S,{checkedArr:W.slice(0,8),handler:M,base:0})]})})},U=function(){return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:P.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Outputs"}),Object(c.jsx)(m.a,{component:O.a,fontFamily:"Monospace",children:Object(c.jsx)("table",{align:"center",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{align:"center",children:"Bin"}),Object(c.jsx)("td",{align:"center",children:Object(c.jsx)("input",{type:"text",name:"binary24",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:j.slice(0,8)})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{}),Object(c.jsx)("td",{align:"center",children:Object(c.jsx)("input",{type:"text",name:"binary16",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:j.slice(8,16)})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{}),Object(c.jsx)("td",{align:"center",children:Object(c.jsx)("input",{type:"text",name:"binary08",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:j.slice(16,24)})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{}),Object(c.jsx)("td",{align:"center",children:Object(c.jsx)("input",{type:"text",name:"binary00",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:j.slice(24,32)})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{align:"center",children:"Dec"}),Object(c.jsx)("td",{align:"center",children:Object(c.jsx)("input",{type:"text",name:"decimal",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:y})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{align:"center",children:"Hex"}),Object(c.jsx)("td",{align:"center",children:Object(c.jsx)("input",{type:"text",name:"Hex",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right",fontFamily:"monospace"},value:N})})]})]})})})]})})},z=function(){return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:P.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Buttons"}),Object(c.jsxs)(p.a,{container:!0,justify:"center",spacing:1,children:[Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",onClick:L,fullWidth:!0,children:"Toggle"})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",onClick:E,fullWidth:!0,children:"Randomize"})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",onClick:I,fullWidth:!0,children:"Reset all"})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",onClick:D,fullWidth:!0,children:"Check all"})})]})]})})};return Object(c.jsxs)(o.a,{maxWidth:"sm",children:[Object(c.jsx)(T,{}),Object(c.jsx)(U,{}),Object(c.jsx)(z,{})]})},w=n(177),A=n(160),N=n(161),k=n(162),R=n(163),F=Object(g.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)}}})),W=n(74),B=n.n(W),P="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",M=function(){var e=F(),t=Object(a.useState)(P),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),j=Object(l.a)(i,2),d=j[0],b=j[1],u=Object(a.useState)("0"),m=Object(l.a)(u,2),g=m[0],v=m[1],y=Object(a.useRef)(0),S=function(e){switch(e.type){case"keydown":"Enter"===e.key&&(e.preventDefault(),W());break;case"change":b(e.target.value),y.current=e.target.selectionStart;break;case"focus":e.target.selectionStart=y.current;break;default:console.log("TYPE",e.type)}},C=function(e){s(P),b(""),v("0")},W=function(e){if(e.preventDefault(),0===d.length)return s(P),void v("No input");B.a.toDataURL(d).then((function(e){s(e),v(d.length)})).catch((function(e){return console.log(e)}))},M=function(){return Object(c.jsxs)(O.a,{elevation:3,children:[Object(c.jsxs)(h.a,{component:"fieldset",className:e.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Input String"}),Object(c.jsx)(w.a,{variant:"outlined",size:"small",multiline:!0,rows:5,rowsMax:5,autoFocus:!0,value:d,onChange:S,onFocus:S})]}),Object(c.jsx)(o.a,{children:Object(c.jsxs)(p.a,{className:e.gridRoot,container:!0,spacing:2,children:[Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:W,children:"Go"})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:C,children:"Clear"})})]})}),"\xa0"]})},L=function(){return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:e.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"QR Code"}),Object(c.jsx)(p.a,{container:!0,spacing:3,justify:"center",children:Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(N.a,{component:"img",image:r,title:'QRcode of "'.concat(d,'"')}),Object(c.jsx)(k.a,{children:Object(c.jsxs)(R.a,{variant:"h6",align:"center",children:["input length: ",g]})})]})})})]})})};return Object(c.jsxs)(o.a,{maxWidth:"sm",children:[Object(c.jsx)(M,{}),Object(c.jsx)(L,{})]})},L=n(164),E=n(165),I=n(166),D=n(167),T=n(168),U=n(169),z=Object(g.a)((function(e){return{paper:{margin:e.spacing(1)},formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)},table:{padding:e.spacing(0)}}})),_=n(21),V=n.n(_),G=n(55),H=function e(){var t=this;Object(G.a)(this,e),this.update=function(e){t.tNow=e.clone()},this.toString=function(){var e=t.tNow.diff(t.tStart);return V()(e+t.prevElapsed).format("mm:ss.SS")},this.reset=function(){t.tStart=V()(),t.tPrevStart=V()(),t.tNow=V()(),t.prevElapsed=0},this.setStart=function(e){t.tStart=e.clone()},this.keepElapsed=function(){t.prevElapsed=t.tNow.diff(t.tStart)+t.prevElapsed};var n=V()();this.tStart=n,this.tPrevStart=n,this.tNow=n,this.prevElapsed=0},Q="start",J=0,K=r.a.memo((function(e){var t=e.timerTotalDispaly,n=e.timerLapDispaly,a=z();return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:a.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Main"}),Object(c.jsxs)(p.a,{container:!0,justify:"center",spacing:2,children:[Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(w.a,{label:"Total",value:t,inputProps:{readOnly:!0,style:{textAlign:"center",fontSize:30}},variant:"outlined",fullWidth:!0})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(w.a,{label:"Lap",value:n,inputProps:{readOnly:!0,style:{textAlign:"center",fontSize:30}},variant:"outlined",fullWidth:!0})})]})]})})})),q=r.a.memo((function(e){var t=e.enBtnReset,n=e.enBtnStart,a=e.enBtnLap,r=e.handleReset,s=e.handleStartStop,i=e.handleLap,l=e.startButtonText,o=z();return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:o.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Buttons"}),Object(c.jsxs)(p.a,{container:!0,justify:"center",spacing:2,children:[Object(c.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,disabled:!t,onClick:r,children:"Reset"})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,disabled:!n,onClick:s,children:l})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,disabled:!a,onClick:i,children:"LAP"})})]})]})})}),(function(e,t){return e.enBtnReset===t.enBtnReset&&e.enBtnStart===t.enBtnStart&&e.enBtnLap===t.enBtnLap&&e.startButtonText===t.startButtonText})),Y=r.a.memo((function(e){var t=e.resultRows,n=z();return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:n.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Results"}),Object(c.jsx)(I.a,{component:O.a,children:Object(c.jsxs)(D.a,{className:n.table,padding:"none",children:[Object(c.jsxs)("colgroup",{children:[Object(c.jsx)("col",{style:{width:"20%"}}),Object(c.jsx)("col",{style:{width:"40%"}}),Object(c.jsx)("col",{style:{width:"40%"}})]}),Object(c.jsx)(T.a,{children:Object(c.jsxs)(L.a,{children:[Object(c.jsx)(E.a,{align:"center",children:"No."}),Object(c.jsx)(E.a,{align:"center",children:"Total"}),Object(c.jsx)(E.a,{align:"center",children:"LAP"})]})}),Object(c.jsx)(U.a,{children:t})]})})]})})})),X=function(){var e=Object(a.useState)((function(){return new H})),t=Object(l.a)(e,1)[0],n=Object(a.useState)((function(){return new H})),r=Object(l.a)(n,1)[0],s=Object(a.useState)(t.toString()),i=Object(l.a)(s,2),j=i[0],d=i[1],b=Object(a.useState)(r.toString()),O=Object(l.a)(b,2),h=O[0],x=O[1],m=Object(a.useState)("Start"),p=Object(l.a)(m,2),f=p[0],g=p[1],v=Object(a.useState)([]),y=Object(l.a)(v,2),S=y[0],C=y[1],w=Object(a.useState)(!1),A=Object(l.a)(w,2),N=A[0],k=A[1],R=Object(a.useState)(!0),F=Object(l.a)(R,2),W=F[0],B=F[1],P=Object(a.useState)(!1),M=Object(l.a)(P,2),I=M[0],D=M[1],T=Object(a.useRef)(null),U=function(){d(t.toString()),x(r.toString())},z=function(e){var n=V()();t.setStart(n),r.setStart(n),T.current=setInterval((function(){var e=V()();t.update(e),r.update(e),U()}),10),g("Stop"),Q="stop",k(!0),B(!0),D(!0)},_=function(){null!==T.current&&(clearInterval(T.current),T.current=null),Q="start",g("Start"),k(!0),B(!0),D(!1),G(J++,t.toString(),r.toString()),t.keepElapsed()},G=function(e,t,n){var a=Object(c.jsxs)(L.a,{children:[Object(c.jsx)(E.a,{align:"center",children:"#".concat((e+1).toString().padStart(2,"0"))}),Object(c.jsx)(E.a,{align:"center",style:{backgroundColor:"rgb(0, 153, 102)"},children:t}),Object(c.jsx)(E.a,{align:"center",style:{backgroundColor:"rgb(255, 222, 51)"},children:n})]},"".concat(e));C((function(e){return[a].concat(Object(u.a)(e))}))};return Object(c.jsxs)(o.a,{maxWidth:"sm",children:[Object(c.jsx)(K,{timerTotalDispaly:j,timerLapDispaly:h}),Object(c.jsx)(q,{enBtnReset:N,enBtnStart:W,enBtnLap:I,handleReset:function(){null!=T.current&&(clearInterval(T.current),T.current=null),Q="start",t.reset(),r.reset(),U(),g("Start"),C([]),k(!1),B(!0),D(!1),J=0},handleStartStop:function(e){switch(e.preventDefault(),Q){case"start":z(e);break;case"stop":_()}},handleLap:function(){G(J++,t.toString(),r.toString()),r.setStart(V()())},startButtonText:f}),Object(c.jsx)(Y,{resultRows:S})]})},Z=n(170),$=n(174),ee=Object(g.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)},card:{height:"100%"},media:{height:0,paddingTop:"87%"}}})),te=["\u57fa\u9686\u5e02","\u81fa\u5317\u5e02","\u65b0\u5317\u5e02","\u6843\u5712\u5e02","\u65b0\u7af9\u5e02","\u65b0\u7af9\u7e23","\u82d7\u6817\u7e23","\u81fa\u4e2d\u5e02","\u5f70\u5316\u7e23","\u5357\u6295\u7e23","\u96f2\u6797\u7e23","\u5609\u7fa9\u5e02","\u5609\u7fa9\u7e23","\u81fa\u5357\u5e02","\u9ad8\u96c4\u5e02","\u5c4f\u6771\u7e23","\u5b9c\u862d\u7e23","\u82b1\u84ee\u7e23","\u81fa\u6771\u7e23","\u6f8e\u6e56\u7e23","\u91d1\u9580\u7e23","\u9023\u6c5f\u7e23"],ne=function(){var e=Object(a.useState)("\u81fa\u5317\u5e02"),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),i=Object(l.a)(s,2),j=i[0],d=i[1],b=ee();Object(a.useEffect)((function(){fetch(encodeURI("".concat("https://www.ychsiao168.idv.tw:5001/weatherfc/","/"))).then((function(e){return e.json()})).then((function(e){var t=e.records;d(t)})).catch((function(e){return console.log(e)}))}),[]);var u=function(e){var t=e.locRecord,n=e.index;if(!t)return Object(c.jsx)(Z.a,{});var a=t.weatherElement,r=a.map((function(e){return e.time[n].parameter.parameterName})),s=Object(l.a)(r,5),i=s[0],o=s[1],j=s[2],d=s[3],u=s[4],O=a[0].time[n],h=O.startTime,x=O.endTime,p=a[0].time[n].parameter.parameterValue,g="".concat(h.substring(5,16).replace("-","/").replace(" ","-")," ~ ").concat(x.substring(5,16).replace("-","/").replace(" ","-"));return Object(c.jsxs)(A.a,{className:b.card,children:[Object(c.jsx)(k.a,{children:Object(c.jsx)(R.a,{variant:"body1",title:g,children:m(h,x)})}),Object(c.jsx)(N.a,{className:b.media,image:f(p,h),title:i}),Object(c.jsxs)(k.a,{children:[Object(c.jsxs)(R.a,{variant:"body1",children:["\ud83c\udf21\ufe0f ",j," - ",u,"\u2103 "]}),Object(c.jsxs)(R.a,{variant:"body1",children:["\u2602 ",o,"%"]}),Object(c.jsx)(R.a,{variant:"body1",children:d})]})]})},m=function(e,t){var n=6e4*(new Date).getTimezoneOffset(),c=new Date(Date.now()-n).toISOString().substring(0,10),a=e.split(" "),r=Object(l.a)(a,2),s=r[0],i=r[1];return s!==c||"06:00:00"!==i&&"12:00:00"!==i?s===c&&"00:00:00"===i?"\u4eca\u65e5\u51cc\u6668":s===c&&"18:00:00"===i||s!==c&&"00:00:00"===i?"\u4eca\u665a\u660e\u6668":s!==c&&"06:00:00"===i?"\u660e\u65e5\u767d\u5929":s!==c&&"18:00:00"===i?"\u660e\u65e5\u665a\u4e0a":(console.log("\u3007\u3007\u3007\u3007",c,s,i),"\u3007\u3007\u3007\u3007"):"\u4eca\u65e5\u767d\u5929"},f=function(e,t){var n=t.split(" "),c=Object(l.a)(n,2)[1],a="06:00:00"===c||"12:00:00"===c?"day":"night";return"".concat("/simple-utility-app","/images/").concat(a,"/").concat(e.toString().padStart(2,"0"),".svg")},g=function(){return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:b.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Menu"}),Object(c.jsx)(h.a,{variant:"outlined",className:b.formControl,children:Object(c.jsxs)($.a,{native:!0,value:n,onChange:function(e){r(e.target.value)},children:[Object(c.jsx)("option",{value:"",disabled:!0,children:"\u9078\u64c7\u7e23\u5e02"}),te.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})})]})})},v=function(){var e=function(e,t){var n,c=null;return null===e||void 0===e||null===(n=e.location)||void 0===n||n.some((function(e){return e.locationName===t&&(c=Object.assign({},e),!0)})),c}(j,n),t=null===e||void 0===e?void 0:e.locationName;return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:b.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:t}),Object(c.jsxs)(p.a,{container:!0,spacing:2,justify:"center",children:[Object(c.jsx)(p.a,{item:!0,xs:12,sm:4,align:"center",children:Object(c.jsx)(u,{locRecord:e,index:0})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:4,align:"center",children:Object(c.jsx)(u,{locRecord:e,index:1})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:4,align:"center",children:Object(c.jsx)(u,{locRecord:e,index:2})})]})]})})};return Object(c.jsxs)(o.a,{maxWidth:"sm",children:[Object(c.jsx)(g,{}),Object(c.jsx)(v,{})]})},ce=n(171),ae=n(76),re=Object(g.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)},card:{height:"100%"},media:{height:250},tableNoBorder:{borderWidth:0},tableLargeFont:{fontSize:"16pt"},tableSmallFont:{fontSize:"8pt"}}})),se={"\u57fa\u9686\u5e02":["\u57fa\u9686"],"\u81fa\u5317\u5e02":["\u58eb\u6797","\u5927\u540c","\u4e2d\u5c71","\u53e4\u4ead","\u677e\u5c71","\u967d\u660e","\u842c\u83ef"],"\u65b0\u5317\u5e02":["\u4e09\u91cd","\u571f\u57ce","\u6c38\u548c","\u6c50\u6b62","\u677f\u6a4b","\u6797\u53e3","\u6de1\u6c34","\u83dc\u5bee","\u65b0\u5e97","\u65b0\u838a","\u842c\u91cc","\u65b0\u5317(\u6a39\u6797)","\u5bcc\u8cb4\u89d2"],"\u6843\u5712\u5e02":["\u5927\u5712","\u4e2d\u58e2","\u5e73\u93ae","\u6843\u5712","\u9f8d\u6f6d","\u89c0\u97f3"],"\u65b0\u7af9\u5e02":["\u65b0\u7af9","\u65b0\u7af9(\u5317\u5340)"],"\u65b0\u7af9\u7e23":["\u7af9\u6771","\u6e56\u53e3"],"\u82d7\u6817\u7e23":["\u4e09\u7fa9","\u82d7\u6817","\u982d\u4efd"],"\u81fa\u4e2d\u5e02":["\u5927\u91cc","\u897f\u5c6f","\u6c99\u9e7f","\u5fe0\u660e","\u8c50\u539f"],"\u5f70\u5316\u7e23":["\u4e8c\u6797","\u5f70\u5316","\u7dda\u897f","\u5f70\u5316(\u54e1\u6797)","\u5f70\u5316(\u5927\u57ce)"],"\u5357\u6295\u7e23":["\u7af9\u5c71","\u5357\u6295","\u57d4\u91cc"],"\u96f2\u6797\u7e23":["\u6597\u516d","\u5d19\u80cc","\u9ea5\u5bee","\u81fa\u897f"],"\u5609\u7fa9\u5e02":["\u5609\u7fa9"],"\u5609\u7fa9\u7e23":["\u6734\u5b50","\u65b0\u6e2f"],"\u81fa\u5357\u5e02":["\u5b89\u5357","\u5584\u5316","\u65b0\u71df","\u81fa\u5357","\u81fa\u5357(\u9ebb\u8c46)","\u81fa\u5357(\u5317\u9580)"],"\u9ad8\u96c4\u5e02":["\u5927\u5bee","\u5c0f\u6e2f","\u4ec1\u6b66","\u5de6\u71df","\u6797\u5712","\u524d\u91d1","\u524d\u93ae","\u7f8e\u6fc3","\u5fa9\u8208","\u6960\u6893","\u9cf3\u5c71","\u6a4b\u982d"],"\u5c4f\u6771\u7e23":["\u5c4f\u6771","\u6046\u6625","\u6f6e\u5dde","\u5c4f\u6771(\u7409\u7403)","\u5c4f\u6771(\u678b\u5bee)"],"\u5b9c\u862d\u7e23":["\u51ac\u5c71","\u5b9c\u862d"],"\u82b1\u84ee\u7e23":["\u82b1\u84ee"],"\u81fa\u6771\u7e23":["\u81fa\u6771","\u95dc\u5c71"],"\u6f8e\u6e56\u7e23":["\u99ac\u516c"],"\u91d1\u9580\u7e23":["\u91d1\u9580"],"\u9023\u6c5f\u7e23":["\u99ac\u7956"]},ie=Object.keys(se),le=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(ie[0]),i=Object(l.a)(s,2),j=i[0],d=i[1],b=Object(a.useState)(se[ie[0]][0]),u=Object(l.a)(b,2),f=u[0],g=u[1],v=re(),y=Object(ae.a)({overrides:{MuiTableCell:{root:{margin:"1px",padding:"1px"}}}});Object(a.useEffect)((function(){fetch(encodeURI("https://www.ychsiao168.idv.tw:5001/epadata/aqx_p_432")).then((function(e){return e.json()})).then((function(e){var t=e.records;r(t)})).catch((function(e){return console.log(e)}))}),[]);var S=function(){return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:v.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Menu"}),Object(c.jsxs)(p.a,{container:!0,spacing:1,justify:"center",children:[Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(h.a,{variant:"outlined",className:v.formControl,children:Object(c.jsxs)($.a,{autoWidth:!0,native:!0,value:j,onChange:function(e){d(e.target.value),g(se[e.target.value][0])},children:[Object(c.jsx)("option",{value:"",disabled:!0,children:"\u9078\u64c7\u7e23\u5e02"}),ie.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(h.a,{variant:"outlined",className:v.formControl,children:Object(c.jsxs)($.a,{autoWidth:!0,native:!0,value:f,onChange:function(e){return g(e.target.value)},children:[Object(c.jsx)("option",{value:"",disabled:!0,children:"\u9078\u64c7\u6e2c\u7ad9"}),se[j].map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})})})]})]})})},C=function(e){var t=e.title,n=e.name0,a=e.val0,r=e.name1,s=e.val1,i=e.sep;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(L.a,{children:[Object(c.jsx)(E.a,{className:v.tableSmallFont,rowSpan:"2",children:t}),Object(c.jsx)(E.a,{className:"".concat(v.tableSmallFont," ").concat(!i&&v.tableNoBorder),children:n}),Object(c.jsx)(E.a,{align:"right",className:"".concat(!i&&v.tableNoBorder," ").concat(v.tableLargeFont),children:a})]}),Object(c.jsxs)(L.a,{children:[Object(c.jsx)(E.a,{className:v.tableSmallFont,children:r}),Object(c.jsx)(E.a,{className:v.tableLargeFont,align:"right",children:s})]})]})},w=function(e){var t=e.records,n=null;if(t.length&&t.some((function(e){return e.SiteName===f&&e.County===j&&(function(e){["PM2.5_AVG","PM2.5","PM10_AVG","PM10","O3_8hr","O3","CO_8hr","CO","SO2","NO2"].forEach((function(t){""===e[t]&&(e[t]="...")}))}(n=e),!0)})),!n)return Object(c.jsx)(Z.a,{});var a,r=[{title:Object(c.jsxs)(c.Fragment,{children:[" PM ",Object(c.jsx)("sub",{children:" 2.5"})," ",Object(c.jsx)("br",{}),"(\u03bcg / m3) ",Object(c.jsx)("br",{})," \u7d30\u61f8\u6d6e\u5fae\u7c92"]}),name0:"\u79fb\u52d5\u5e73\u5747",val0:n["PM2.5_AVG"],sep:!0,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n["PM2.5"],key:"PM2.5"},{title:Object(c.jsxs)(c.Fragment,{children:["PM",Object(c.jsx)("sub",{children:"10"}),Object(c.jsx)("br",{}),"(\u03bcg/m3)",Object(c.jsx)("br",{}),"\u7d30\u61f8\u6d6e\u5fae\u7c92"]}),name0:"\u79fb\u52d5\u5e73\u5747",val0:n.PM10_AVG,sep:!0,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n.PM10,key:"PM10"},{title:Object(c.jsxs)(c.Fragment,{children:["O",Object(c.jsx)("sub",{children:"3"}),Object(c.jsx)("br",{}),"(ppb)",Object(c.jsx)("br",{}),"\u81ed\u6c27"]}),name0:Object(c.jsxs)(c.Fragment,{children:["8\u5c0f\u6642",Object(c.jsx)("br",{}),"\u79fb\u52d5\u5e73\u5747"]}),val0:n.O3_8hr,sep:!0,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n.O3,key:"O3"},{title:Object(c.jsxs)(c.Fragment,{children:["CO",Object(c.jsx)("br",{}),"(ppm) ",Object(c.jsx)("br",{}),"\u4e00\u6c27\u5316\u78b3"]}),name0:Object(c.jsxs)(c.Fragment,{children:["8\u5c0f\u6642",Object(c.jsx)("br",{}),"\u79fb\u52d5\u5e73\u5747"]}),val0:n.CO_8hr,sep:!0,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n.CO,key:"CO"},{title:Object(c.jsxs)(c.Fragment,{children:["SO",Object(c.jsx)("sub",{children:"2"}),Object(c.jsx)("br",{}),"(ppb)",Object(c.jsx)("br",{}),"\u4e8c\u6c27\u5316\u786b"]}),name0:"",val0:"",sep:!1,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n.SO2,key:"SO2"},{title:Object(c.jsxs)(c.Fragment,{children:["NO",Object(c.jsx)("sub",{children:"2"}),Object(c.jsx)("br",{}),"(ppb)",Object(c.jsx)("br",{}),"\u4e8c\u6c27\u5316\u6c2e"]}),name0:"",val0:"",sep:!1,name1:"\u5c0f\u6642\u6fc3\u5ea6",val1:n.NO2,key:"NO2"}];return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:v.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"\u7a7a\u6c23\u54c1\u8cea"}),Object(c.jsx)(R.a,{variant:"body2",align:"center",children:n.PublishTime}),Object(c.jsxs)(m.a,{border:1,borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center",children:[Object(c.jsxs)(R.a,{variant:"body1",align:"center",children:[n.County," / ",n.SiteName]}),Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",border:"4px solid rgb(".concat((a=n.AQI,(a=Number(a))<51?[0,153,102]:a<101?[255,222,51]:a<151?[255,153,51]:a<201?[204,0,51]:a<301?[128,0,128]:a<501?[165,42,42]:[0,153,102]),")"),width:"100px",height:"100px"},children:Object(c.jsx)(R.a,{variant:"h3",children:n.AQI})}),Object(c.jsx)(R.a,{variant:"h6",align:"center",children:n.Status})]}),Object(c.jsx)(ce.a,{theme:y,children:Object(c.jsxs)(D.a,{children:[Object(c.jsxs)("colgroup",{children:[Object(c.jsx)("col",{style:{width:"40%"}}),Object(c.jsx)("col",{style:{width:"50%"}}),Object(c.jsx)("col",{style:{width:"10%"}})]}),Object(c.jsx)(U.a,{children:r.map((function(e){return Object(c.jsx)(C,{title:e.title,name0:e.name0,val0:e.val0,name1:e.name1,val1:e.val1,sep:e.sep},e.key)}))})]})})]})})};return Object(c.jsxs)(o.a,{maxWidth:"sm",children:[Object(c.jsx)(S,{}),Object(c.jsx)(w,{records:n})]})},oe=n(7),je=n.n(oe),de=n(77),be=n(42),ue=Object(g.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)},fileInput:{display:"none"}}})),Oe=n(57),he={md5:"",sha256:"",crc32:""},xe=function(){var e=Object(a.useState)(he),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),i=Object(l.a)(s,2),j=i[0],d=i[1],b=Object(a.useRef)(""),u=Object(a.useState)(""),m=Object(l.a)(u,2),g=m[0],v=m[1],y=Object(a.useState)(!1),S=Object(l.a)(y,2),C=S[0],A=S[1],N=ue(),k=function(){var e=Object(be.a)(je.a.mark((function e(){var t;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(de.a)({},he),A(!1),e.next=4,Promise.all([Object(Oe.b)(j),Object(Oe.c)(j),Object(Oe.a)(j)]).then((function(e){t.md5=e[0].toUpperCase(),t.sha256=e[1].toUpperCase(),t.crc32=e[2].toUpperCase(),v("Hash '".concat(b.current,"' done!")),b.current="",r(t)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(be.a)(je.a.mark((function e(t){var n;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.target.files.length){e.next=3;break}return r(he),e.abrupt("return");case 3:(n=new FileReader).onerror=function(e){A(!1),v("Error opening file")},n.onload=function(){var e=Object(be.a)(je.a.mark((function e(t){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(new Uint8Array(t.target.result)),A(!0),v("'".concat(b.current,"' ready, Press GO"));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.readAsArrayBuffer(t.target.files[0]),r(he),b.current=t.target.files[0].name,v("Reading File...".concat(t.target.files[0].name));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:N.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Inputs"}),Object(c.jsx)(p.a,{container:!0,justify:"center",spacing:2,children:Object(c.jsxs)(p.a,{item:!0,xs:12,sm:8,children:[Object(c.jsx)("input",{accept:"image/*",className:N.fileInput,id:"select-file-button",type:"file",onChange:R}),Object(c.jsx)("label",{htmlFor:"select-file-button",children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",disabled:!C,onClick:k,style:{cursor:"pointer"},fullWidth:!0,children:b.current?"GO":"Click to select file"})})]})})]})})},W=function(){return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:N.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Outputs"}),Object(c.jsxs)(p.a,{container:!0,justify:"center",spacing:2,children:[Object(c.jsx)(p.a,{item:!0,xs:12,sm:8,children:Object(c.jsx)(w.a,{label:"MD5",defaultValue:n.md5,inputProps:{readOnly:!0,style:{textAlign:"right",fontFamily:"monospace"}},variant:"outlined",multiline:!0,fullWidth:!0,rows:2})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:8,children:Object(c.jsx)(w.a,{label:"SHA256",defaultValue:n.sha256,style:{alignItems:"center",justifyContent:"center"},inputProps:{readOnly:!0,style:{textAlign:"right",fontFamily:"monospace"}},variant:"outlined",multiline:!0,fullWidth:!0,rows:2})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:8,children:Object(c.jsx)(w.a,{label:"CRC32",defaultValue:n.crc32,inputProps:{readOnly:!0,style:{textAlign:"right",fontFamily:"monospace"}},variant:"outlined",multiline:!0,fullWidth:!0,rows:2})})]})]})})},B=function(){return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:N.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Status"}),Object(c.jsx)(p.a,{container:!0,justify:"center",children:Object(c.jsx)(p.a,{item:!0,xs:12,sm:8,children:Object(c.jsx)(w.a,{defaultValue:g,inputProps:{readOnly:!0,style:{textAlign:"center",fontFamily:"monospace"}},fullWidth:!0,multiline:!0})})})]})})};return Object(c.jsxs)(o.a,{maxWidth:"sm",children:[Object(c.jsx)(F,{}),Object(c.jsx)(W,{}),Object(c.jsx)(B,{})]})},me=Object(g.a)((function(e){return{formControl:{display:"flex",margin:e.spacing(1),padding:e.spacing(1)},tableMonoFont:{fontSize:"10 pt",fontFamily:"monospace"}}})),pe=function(e,t){fetch("https://www.ychsiao168.idv.tw:5001/api/shorturl").then((function(e){return e.json()})).then((function(n){!function(e,t,n){var a=0,r=[];e.forEach((function(e){var t=Object(c.jsxs)(L.a,{children:[Object(c.jsx)(E.a,{align:"center",children:"#".concat((a+1).toString().padStart(2,"0"))}),Object(c.jsx)(E.a,{align:"center",className:n.tableMonoFont,style:{backgroundColor:"rgb(204, 229, 255)"},children:e.original_url}),Object(c.jsx)(E.a,{align:"center",className:n.tableMonoFont,style:{backgroundColor:"rgb(255, 255, 204)"},children:Object(c.jsx)("a",{href:"".concat("https://www.ychsiao168.idv.tw:5001/api/shorturl","/").concat(e.hash),target:"_blank",rel:"noreferrer",children:e.hash})})]},"".concat(e.hash));r.push(t),a++})),t(r)}(n,e,t)}))},fe=function(e){var t=e.setStatus,n=e.setUrlRows,r=me(),s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],j=i[1],d=function(){var e=Object(be.a)(je.a.mark((function e(c){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,fetch("https://www.ychsiao168.idv.tw:5001/api/shorturl/new",{headers:{"content-type":"application/json"},body:JSON.stringify({url:o}),method:"POST"}).then((function(e){return e.json()})).then((function(e){(null===e||void 0===e?void 0:e.error)?t(e.error):t("Keep '".concat(o,"' done"))})).then((function(){n([])}));case 3:pe(n,r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:r.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Inputs"}),Object(c.jsx)("form",{className:r.container,onSubmit:d,method:"post",children:Object(c.jsxs)(p.a,{container:!0,justify:"center",spacing:2,children:[Object(c.jsx)(p.a,{item:!0,xs:12,sm:10,children:Object(c.jsx)(w.a,{autoFocus:!0,variant:"outlined",type:"text",label:"URL to be kept",value:o,onChange:function(e){e.preventDefault(),j(e.target.value)},fullWidth:!0})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:2,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",style:{cursor:"pointer"},type:"submit",fullWidth:!0,children:"POST URL"})})]})})]})})},ge=function(e){var t=e.urlRows,n=e.setUrlRows,r=me();return Object(a.useEffect)((function(){pe(n,r)}),[n,r]),Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:r.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Records"}),Object(c.jsx)(I.a,{component:O.a,children:Object(c.jsxs)(D.a,{className:r.table,padding:"none",children:[Object(c.jsxs)("colgroup",{children:[Object(c.jsx)("col",{style:{width:"10%"}}),Object(c.jsx)("col",{style:{width:"70%"}}),Object(c.jsx)("col",{style:{width:"20%"}})]}),Object(c.jsx)(T.a,{children:Object(c.jsxs)(L.a,{children:[Object(c.jsx)(E.a,{align:"center",children:"No."}),Object(c.jsx)(E.a,{align:"center",children:"URL"}),Object(c.jsx)(E.a,{align:"center",children:"Hash"})]})}),Object(c.jsx)(U.a,{children:t})]})})]})})},ve=function(e){var t=e.status,n=me();return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsxs)(h.a,{component:"fieldset",className:n.formControl,children:[Object(c.jsx)(x.a,{component:"legend",children:"Status"}),Object(c.jsx)(p.a,{container:!0,justify:"center",children:Object(c.jsx)(p.a,{item:!0,xs:12,sm:8,children:Object(c.jsx)(w.a,{defaultValue:t,inputProps:{readOnly:!0,style:{textAlign:"center",fontFamily:"monospace"}},fullWidth:!0,multiline:!0})})})]})})},ye=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),i=Object(l.a)(s,2),j=i[0],d=i[1];return Object(c.jsxs)(o.a,{maxWidth:"sm",children:[Object(c.jsx)(fe,{setStatus:r,setUrlRows:d}),Object(c.jsx)(ge,{urlRows:j,setUrlRows:d}),Object(c.jsx)(ve,{status:n})]})},Se=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)(o.a,{maxWidth:"sm",children:[Object(c.jsx)(j.a,{position:"static",children:Object(c.jsxs)(d.a,{value:n,indicatorColor:"secondary",onChange:function(e,t){return r(t)},variant:"scrollable",scrollButtons:"auto",children:[Object(c.jsx)(b.a,{label:Object(c.jsxs)("div",{children:["Binary",Object(c.jsx)("br",{}),"Converter"]}),value:0}),Object(c.jsx)(b.a,{label:Object(c.jsxs)("div",{children:["QR",Object(c.jsx)("br",{}),"Code"]}),value:1}),Object(c.jsx)(b.a,{label:Object(c.jsxs)("div",{children:["File",Object(c.jsx)("br",{}),"Hash"]}),value:2}),Object(c.jsx)(b.a,{label:Object(c.jsxs)("div",{children:["Stop",Object(c.jsx)("br",{}),"Watch"]}),value:3}),Object(c.jsx)(b.a,{label:Object(c.jsx)("div",{children:"Weather"}),value:4}),Object(c.jsx)(b.a,{label:Object(c.jsxs)("div",{children:["Air",Object(c.jsx)("br",{}),"Quality"]}),value:5}),Object(c.jsx)(b.a,{label:Object(c.jsxs)("div",{children:["URL",Object(c.jsx)("br",{}),"Keeper"]}),value:6})]})}),0===n&&Object(c.jsx)(C,{}),1===n&&Object(c.jsx)(M,{}),2===n&&Object(c.jsx)(xe,{}),3===n&&Object(c.jsx)(X,{}),4===n&&Object(c.jsx)(ne,{}),5===n&&Object(c.jsx)(le,{}),6===n&&Object(c.jsx)(ye,{})]})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Se,{})}),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.99d544c0.chunk.js.map