(this["webpackJsonpsimple-utility-app"]=this["webpackJsonpsimple-utility-app"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),r=c(24),l=c.n(r),j=(c(34),c(35),c(10)),b=c(11),i=c(27),d=c(26),O=c(9),o=(c(38),function(e){Object(i.a)(c,e);var t=Object(d.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this.props.tabitmes,t=e.map((function(e,t){return Object(s.jsx)(O.a,{style:{background:e.bgcolor},children:e.name},t)})),c=e.map((function(e,t){return Object(s.jsx)(O.c,{children:e.panel},t)}));return Object(s.jsxs)(O.d,{defaultIndex:0,children:[Object(s.jsx)(O.b,{children:t}),c]})}}]),c}(n.Component)),x=c(13),u=c(3),h=function(e){var t=e.label,c=e.isSelected,n=e.onCheckboxChange;return Object(s.jsxs)("div",{className:"flex flex-column pa1 items-center",children:[Object(s.jsx)("label",{children:t}),Object(s.jsx)("input",{type:"checkbox",name:t,checked:c,onChange:n})]})},m=function(e){var t=e.checkedArr,c=e.handler,n=e.base,a=t.map((function(e,t){return Object(s.jsx)(h,{label:(n+t).toString(10).padStart(2,"0"),isSelected:e,onCheckboxChange:c},(n+t).toString(10).padStart(2,"0"))}));return Object(s.jsx)("div",{className:"flex flex-row-reverse ma1 justify-center",children:a})},f=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),l=Object(u.a)(r,2),j=l[0],b=l[1],i=Object(n.useState)(""),d=Object(u.a)(i,2),O=d[0],o=d[1],h=Object(n.useState)(""),f=Object(u.a)(h,2),p=f[0],g=f[1],v=Object(n.useState)(Array(32).fill(!1)),N=Object(u.a)(v,2),w=N[0],y=N[1];Object(n.useEffect)((function(){a(c),b(c.toString(2).toUpperCase().padStart(32,"0")),o(c.toString(10).toUpperCase().padStart(10,"0")),g(c.toString(16).toUpperCase().padStart(8,"0"))}),[c]);var S=function(e){var t=Number(e.target.name),s=Object(x.a)(w);s[t]=!s[t],y(s);var n=c,r=Math.pow(2,t);n=s[t]?c+r:c-r,a(n)},k=function(){return Object(s.jsx)("table",{className:"center",children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Bin"}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",name:"binary24",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right"},value:j.slice(0,8)})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",name:"binary16",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right"},value:j.slice(8,16)})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",name:"binary08",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right"},value:j.slice(16,24)})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",name:"binary00",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right"},value:j.slice(24,32)})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Dec"}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",name:"decimal",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right"},value:O})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Hex"}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",name:"Hex",readOnly:!0,maxLength:"10",size:"10",style:{textAlign:"right"},value:p})})]})]})})};return Object(s.jsxs)("div",{className:"flex flex-column justify-center center w-60",children:[Object(s.jsxs)("fieldset",{className:"ba br3 ma3",children:[Object(s.jsx)("legend",{children:"Inputs"}),Object(s.jsx)(m,{checkedArr:w.slice(24,32),handler:S,base:24}),Object(s.jsx)(m,{checkedArr:w.slice(16,24),handler:S,base:16}),Object(s.jsx)(m,{checkedArr:w.slice(8,16),handler:S,base:8}),Object(s.jsx)(m,{checkedArr:w.slice(0,8),handler:S,base:0})]}),Object(s.jsxs)("fieldset",{className:"ba br3 ma3 f5",children:[Object(s.jsx)("legend",{children:"Outputs"}),Object(s.jsx)(k,{})]}),Object(s.jsxs)("fieldset",{className:"ba br3 ma3",children:[Object(s.jsx)("legend",{children:"Buttons"}),Object(s.jsxs)("div",{className:"flex flex-row",children:[Object(s.jsx)("button",{className:"br3 ma1 pointer w-50",onClick:function(){var e=0,t=w.map((function(t,c){var s=Math.pow(2,c);return t||(e+=s),!t}));a(e),y(t)},children:"Toggle"}),Object(s.jsx)("button",{className:"br3 ma1 pointer w-50",onClick:function(){for(var e=0,t=[],c=0;c<32;c++){var s=Math.random()>.5;t.push(s),s&&(e+=Math.pow(2,c))}a(e),y(t)},children:"Randomize"})]}),Object(s.jsxs)("div",{className:"flex flex-row",children:[Object(s.jsx)("button",{className:"br3 ma1 pointer  w-50",onClick:function(){a(0),y(Array(32).fill(!1))},children:"Reset all"}),Object(s.jsx)("button",{className:"br3 ma1 pointer  w-50",onClick:function(){a(4294967295),y(Array(32).fill(!0))},children:"Check all"})]})]})]})},p=c(25),g=c.n(p),v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),l=Object(u.a)(r,2),j=l[0],b=l[1],i=Object(n.useState)(""),d=Object(u.a)(i,2),O=d[0],o=d[1],x=function(e){switch(e.type){case"keydown":"Enter"===e.key&&(e.preventDefault(),h());break;case"change":b(e.target.value)}},h=function(){if(0===j.length)return a(""),void o("No input");g.a.toDataURL(j).then((function(e){a(e),o(j.length)})).catch((function(e){return console.log(e)}))};return Object(s.jsxs)("div",{className:"flex flex-column justify-center center w-60",children:[Object(s.jsxs)("fieldset",{className:"ba br3 ma3",children:[Object(s.jsx)("legend",{children:" Input String "}),Object(s.jsx)("textarea",{className:"tc f5 br3 center w-100",rows:"8",cols:"32",maxLength:"256",value:j,onChange:x,onKeyDown:x}),Object(s.jsxs)("div",{className:"flex center w-100",children:[Object(s.jsx)("button",{className:"pa1 ma1 br3 w-50",onClick:h,children:" GO "}),Object(s.jsx)("button",{className:"pa1 ma1 br3 w-50",onClick:function(e){a(""),b(""),o("")},children:" Clear "})]})]}),Object(s.jsxs)("fieldset",{className:"ba br3 ma3 ",children:[Object(s.jsx)("legend",{children:" QR Code "}),Object(s.jsx)("img",{className:"center",src:c,alt:"",width:"80%"}),Object(s.jsx)("h2",{className:"center",children:O})]})]})},N=null,w=0,y=0,S=0,k=0,C="start",A=0,R="",L="",D=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),l=Object(u.a)(r,2),j=l[0],b=l[1],i=Object(n.useState)("Start"),d=Object(u.a)(i,2),O=d[0],o=d[1],x=Object(n.useState)(Object(s.jsx)("tr",{})),h=Object(u.a)(x,2),m=h[0],f=h[1],p=Object(n.useState)(!1),g=Object(u.a)(p,2),v=g[0],D=g[1],I=Object(n.useState)(!0),M=Object(u.a)(I,2),P=M[0],T=M[1],U=Object(n.useState)(!1),E=Object(u.a)(U,2),z=E[0],_=E[1];Object(n.useEffect)((function(){R=G(0),L=G(0),B()}),[]);var G=function(e){var t=e%1e3,c=(e=(e-t)/1e3)%60;return"".concat(((e-c)/60).toString(10).padStart(2,"0"),":").concat(c.toString(10).padStart(2,"0"),".").concat(t.toString(10).padStart(3,"0"))},B=function(){a(R),b(L)},F=function(){null!=N&&(clearInterval(N),N=null),k=y,C="start",o("Start"),B(),D(!0),T(!0),_(!1),H(A++,R,L)},H=function(e,t,c){var n=Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"bg-light-red",children:"#".concat((e+1).toString().padStart(2,"0"))}),Object(s.jsx)("td",{className:"bg-light-green",children:t}),Object(s.jsx)("td",{className:"bg-light-blue",children:c})]},"index");f([n,m])};return Object(s.jsxs)("div",{className:"flex flex-column justify-center center w-60",children:[Object(s.jsxs)("fieldset",{className:"ba br3 ma3",children:[Object(s.jsxs)("fieldset",{className:"br3",children:[Object(s.jsx)("legend",{children:"Total"}),Object(s.jsx)("h2",{children:c})]}),Object(s.jsxs)("fieldset",{className:"br3",children:[Object(s.jsx)("legend",{children:"LAP"}),Object(s.jsx)("h2",{children:j})]})]}),Object(s.jsxs)("fieldset",{className:"ba br3 ma3",children:[Object(s.jsx)("button",{className:"br3 pa2 ma2",disabled:!v,onClick:function(){null!=N&&(clearInterval(N),N=null),w=0,y=0,S=0,k=0,C="start",A=0,R=G(0),L=G(0),B(),o("Start"),f([]),D(!1),T(!0),_(!1)},children:"Reset"}),Object(s.jsx)("button",{className:"br3 pa2 ma2",disabled:!P,onClick:function(){switch(C){case"start":w=(new Date).getTime(),S=w,N=setInterval((function(){y=(new Date).getTime()-w+k;var e=(new Date).getTime()-S;R=G(y),L=G(e),B()}),10),o("Stop"),C="stop",D(!0),T(!0),_(!0);break;case"stop":F()}},children:O}),Object(s.jsx)("button",{className:"br3 pa2 ma2",disabled:!z,onClick:function(){S=(new Date).getTime(),H(A++,R,L)},children:"LAP"})]}),Object(s.jsxs)("fieldset",{className:"ba br3 ma3",children:[Object(s.jsx)("legend",{children:" Results "}),Object(s.jsxs)("table",{className:"center f5",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"No."}),Object(s.jsx)("td",{children:"Total"}),Object(s.jsx)("td",{children:"LAP"})]})}),Object(s.jsx)("tbody",{children:m})]})]})]})},I=["\u57fa\u9686\u5e02","\u81fa\u5317\u5e02","\u65b0\u5317\u5e02","\u6843\u5712\u5e02","\u65b0\u7af9\u5e02","\u65b0\u7af9\u7e23","\u82d7\u6817\u7e23","\u81fa\u4e2d\u5e02","\u5f70\u5316\u7e23","\u5357\u6295\u7e23","\u96f2\u6797\u7e23","\u5609\u7fa9\u5e02","\u5609\u7fa9\u7e23","\u81fa\u5357\u5e02","\u9ad8\u96c4\u5e02","\u5c4f\u6771\u7e23","\u5b9c\u862d\u7e23","\u82b1\u84ee\u7e23","\u81fa\u6771\u7e23","\u6f8e\u6e56\u7e23","\u91d1\u9580\u7e23","\u9023\u6c5f\u7e23"],M=function(e){var t=e.locRecord,c=e.index;if(!t)return Object(s.jsx)("div",{});var n=t.weatherElement,a=n.map((function(e){return e.time[c].parameter.parameterName})),r=Object(u.a)(a,5),l=r[0],j=r[1],b=r[2],i=r[3],d=r[4],O=n[0].time[c],o=O.startTime,x=O.endTime,h=n[0].time[c].parameter.parameterValue,m="".concat(o.substring(5,16).replace("-","/").replace(" ","-")," ~ ").concat(x.substring(5,16).replace("-","/").replace(" ","-"));return Object(s.jsxs)("div",{className:"flex flex-column ma3 br3 pa3 bg-near-white",style:{width:"150px",height:"200px"},children:[Object(s.jsxs)("div",{title:m,children:[" ",P(o,x)," "]}),Object(s.jsx)("img",{src:T(h,o),alt:l,title:l,height:"100px"}),Object(s.jsxs)("div",{children:["\ud83c\udf21\ufe0f ",b," - ",d,"\u2103"]}),Object(s.jsxs)("div",{children:["\u2602 ",j,"%"]}),Object(s.jsx)("div",{children:i})]})},P=function(e,t){var c=6e4*(new Date).getTimezoneOffset(),s=new Date(Date.now()-c).toISOString().substring(0,10),n=e.split(" "),a=Object(u.a)(n,2),r=a[0],l=a[1];return r!==s||"06:00:00"!==l&&"12:00:00"!==l?r===s&&"00:00:00"===l?"\u4eca\u65e5\u51cc\u6668":r===s&&"18:00:00"===l||r!==s&&"00:00:00"===l?"\u4eca\u665a\u660e\u6668":r!==s&&"06:00:00"===l?"\u660e\u65e5\u767d\u5929":r!==s&&"18:00:00"===l?"\u660e\u65e5\u665a\u4e0a":(console.log("\u3007\u3007\u3007\u3007",s,r,l),"\u3007\u3007\u3007\u3007"):"\u4eca\u65e5\u767d\u5929"},T=function(e,t){var c=t.split(" "),s=Object(u.a)(c,2)[1],n="06:00:00"===s||"12:00:00"===s?"day":"night";return"".concat("/simple-utility-app","/images/").concat(n,"/").concat(e.toString().padStart(2,"0"),".svg")},U=function(e,t){var c=null;return e.location.some((function(e){return e.locationName===t&&(c=Object.assign({},e),!0)})),c},E=function(){var e=Object(n.useState)("\u81fa\u5317\u5e02"),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),l=Object(u.a)(r,2),j=l[0],b=l[1];if(Object(n.useEffect)((function(){fetch(encodeURI("".concat("https://www.ychsiao168.idv.tw:5001/weatherfc/","/"))).then((function(e){return e.json()})).then((function(e){var t=e.records;b(t)})).catch((function(e){return console.log(e)}))}),[]),!j)return Object(s.jsx)("div",{children:"Loading"});var i=U(j,c),d=i.locationName;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("select",{className:"pa3 ma3 br3 w-40",onChange:function(e){a(e.target.value)},value:c,children:[Object(s.jsx)("option",{value:"",disabled:!0,children:"\u9078\u64c7\u7e23\u5e02"}),I.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]}),Object(s.jsxs)("fieldset",{className:"flex flex-row flex-wrap justify-center center pa3 ma3 br3 w-40",children:[Object(s.jsx)("legend",{children:d}),Object(s.jsx)(M,{locRecord:i,index:0}),Object(s.jsx)(M,{locRecord:i,index:1}),Object(s.jsx)(M,{locRecord:i,index:2})]})]})},z={"\u57fa\u9686\u5e02":["\u57fa\u9686"],"\u81fa\u5317\u5e02":["\u58eb\u6797","\u5927\u540c","\u4e2d\u5c71","\u53e4\u4ead","\u677e\u5c71","\u967d\u660e","\u842c\u83ef"],"\u65b0\u5317\u5e02":["\u6c50\u6b62","\u842c\u91cc","\u65b0\u5e97","\u571f\u57ce","\u677f\u6a4b","\u65b0\u838a","\u83dc\u5bee","\u6797\u53e3","\u6de1\u6c34","\u4e09\u91cd","\u6c38\u548c","\u5bcc\u8cb4\u89d2","\u65b0\u5317(\u6a39\u6797)","\u6c38\u548c(\u74b0\u6cb3)"],"\u5357\u6295\u7e23":["\u5357\u6295","\u7af9\u5c71","\u57d4\u91cc"],"\u5609\u7fa9\u5e02":["\u5609\u7fa9"],"\u5609\u7fa9\u7e23":["\u65b0\u6e2f","\u6734\u5b50"],"\u5b9c\u862d\u7e23":["\u5b9c\u862d","\u51ac\u5c71"],"\u5c4f\u6771\u7e23":["\u5c4f\u6771","\u6f6e\u5dde","\u6046\u6625","\u5c4f\u6771(\u7409\u7403)","\u5c4f\u6771(\u678b\u5bee)"],"\u5f70\u5316\u7e23":["\u5f70\u5316","\u7dda\u897f","\u4e8c\u6797","\u5f70\u5316(\u54e1\u6797)","\u5f70\u5316(\u5927\u57ce)"],"\u65b0\u7af9\u5e02":["\u65b0\u7af9"],"\u65b0\u7af9\u7e23":["\u6e56\u53e3","\u7af9\u6771"],"\u6843\u5712\u5e02":["\u6843\u5712","\u5927\u5712","\u89c0\u97f3","\u5e73\u93ae","\u9f8d\u6f6d","\u4e2d\u58e2"],"\u6f8e\u6e56\u7e23":["\u99ac\u516c"],"\u81fa\u4e2d\u5e02":["\u8c50\u539f","\u6c99\u9e7f","\u5927\u91cc","\u5fe0\u660e","\u897f\u5c6f"],"\u81fa\u5357\u5e02":["\u65b0\u71df","\u5584\u5316","\u5b89\u5357","\u81fa\u5357","\u81fa\u5357(\u9ebb\u8c46)","\u81fa\u5357(\u5317\u9580)"],"\u81fa\u6771\u7e23":["\u81fa\u6771","\u95dc\u5c71"],"\u82b1\u84ee\u7e23":["\u82b1\u84ee"],"\u82d7\u6817\u7e23":["\u982d\u4efd","\u82d7\u6817","\u4e09\u7fa9"],"\u9023\u6c5f\u7e23":["\u99ac\u7956"],"\u91d1\u9580\u7e23":["\u91d1\u9580"],"\u96f2\u6797\u7e23":["\u6597\u516d","\u5d19\u80cc","\u81fa\u897f","\u9ea5\u5bee"],"\u9ad8\u96c4\u5e02":["\u7f8e\u6fc3","\u6a4b\u982d","\u4ec1\u6b66","\u9cf3\u5c71","\u5927\u5bee","\u6797\u5712","\u6960\u6893","\u5de6\u71df","\u524d\u91d1","\u524d\u93ae","\u5c0f\u6e2f","\u5fa9\u8208"]},_=Object.keys(z),G=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(_[0]),l=Object(u.a)(r,2),j=l[0],b=l[1],i=Object(n.useState)(z[_[0]][0]),d=Object(u.a)(i,2),O=d[0],o=d[1];Object(n.useEffect)((function(){fetch(encodeURI("https://www.ychsiao168.idv.tw:5001/epadata/aqx_p_432")).then((function(e){return e.json()})).then((function(e){var t=e.records;a(t)})).catch((function(e){return console.log(e)}))}),[]);var x=function(){return Object(s.jsxs)("fieldset",{className:"flex flex-row flex-wrap w-60 center justify-center br3",children:[Object(s.jsx)("legend",{children:" \u6e2c\u7ad9 "}),Object(s.jsxs)("select",{className:"pa2 ma2 br3",onChange:function(e){b(e.target.value),o(z[e.target.value][0])},value:j,children:[Object(s.jsx)("option",{value:"",disabled:!0,children:"\u9078\u64c7\u7e23\u5e02"}),_.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]}),Object(s.jsxs)("select",{className:"pa2 ma2 br3",onChange:function(e){return o(e.target.value)},value:O,children:[Object(s.jsx)("option",{value:"",disabled:!0,children:"\u9078\u64c7\u6e2c\u7ad9"}),z[j].map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})]})},h=function(e){var t=e.records,c=null;return t.length&&t.forEach((function(e){e.SiteName===O&&e.County===j&&(c=e)})),c?Object(s.jsxs)("fieldset",{className:"flex flex-column w-60 center justify-center ma2 pa2 br3",children:[c.PublishTime," ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"ba br3",children:[c.County," / ",c.SiteName,Object(s.jsx)("h1",{children:c.AQI}),c.Status]}),Object(s.jsx)("br",{}),Object(s.jsx)("table",{children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"f7 bb b--black-20",rowSpan:"2",children:["PM",Object(s.jsx)("sub",{children:"2.5"})," ",Object(s.jsx)("br",{})," (\u03bcg/m3) ",Object(s.jsx)("br",{})," \u7d30\u61f8\u6d6e\u5fae\u7c92"]}),Object(s.jsx)("td",{className:"f7",children:"\u79fb\u52d5\u5e73\u5747"}),Object(s.jsx)("td",{className:"f3",children:c["PM2.5_AVG"]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"f7 bb b--black-20",children:"\u5c0f\u6642\u6fc3\u5ea6"}),Object(s.jsx)("td",{className:"f3 bb b--black-20",children:c["PM2.5"]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"f7 bb b--black-20",rowSpan:"2",children:["PM",Object(s.jsx)("sub",{children:"10"})," ",Object(s.jsx)("br",{})," (\u03bcg/m3) ",Object(s.jsx)("br",{})," \u61f8\u6d6e\u5fae\u7c92"]}),Object(s.jsx)("td",{className:"f7",children:"\u79fb\u52d5\u5e73\u5747"}),Object(s.jsx)("td",{className:"f3",children:c.PM10_AVG})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"f7 bb b--black-20",children:"\u5c0f\u6642\u6fc3\u5ea6"}),Object(s.jsx)("td",{className:"f3 bb b--black-20",children:c.PM10})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"f7 bb b--black-20",rowSpan:"2",children:["O",Object(s.jsx)("sub",{children:"3"})," ",Object(s.jsx)("br",{})," (ppb) ",Object(s.jsx)("br",{})," \u81ed\u6c27"]}),Object(s.jsx)("td",{className:"f7",children:"8\u5c0f\u6642\u79fb\u52d5\u5e73\u5747"}),Object(s.jsx)("td",{className:"f3",children:c.O3_8hr})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"f7 bb b--black-20",children:"\u5c0f\u6642\u6fc3\u5ea6"}),Object(s.jsx)("td",{className:"f3 bb b--black-20",children:c.O3})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"f7 bb b--black-20",rowSpan:"2",children:["CO ",Object(s.jsx)("br",{})," (ppm) ",Object(s.jsx)("br",{})," \u4e00\u6c27\u5316\u78b3"]}),Object(s.jsx)("td",{className:"f7",children:"8\u5c0f\u6642\u79fb\u52d5\u5e73\u5747"}),Object(s.jsx)("td",{className:"f3",children:c.CO_8hr})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"f7 bb b--black-20",children:"\u5c0f\u6642\u6fc3\u5ea6"}),Object(s.jsx)("td",{className:"f3 bb b--black-20",children:c.CO})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"f7 bb b--black-20",rowSpan:"2",children:["SO",Object(s.jsx)("sub",{children:"2"})," ",Object(s.jsx)("br",{})," (ppb) ",Object(s.jsx)("br",{})," \u4e8c\u6c27\u5316\u786b"]}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"f7 bb b--black-20",children:"\u5c0f\u6642\u6fc3\u5ea6"}),Object(s.jsx)("td",{className:"f3 bb b--black-20",children:c.SO2})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"f7 bb b--black-20",rowSpan:"2",children:["NO",Object(s.jsx)("sub",{children:"2"})," ",Object(s.jsx)("br",{})," (ppb) ",Object(s.jsx)("br",{})," \u4e8c\u6c27\u5316\u6c2e"]}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"f7 bb b--black-20",children:"\u5c0f\u6642\u6fc3\u5ea6"}),Object(s.jsx)("td",{className:"f3 bb b--black-20",children:c.NO2})]})]})})]}):Object(s.jsx)("div",{children:"Loading"})};return Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsx)(h,{records:c})]})},B=c(2),F=c.n(B),H=c(28),Q=c(14),V=c(15),J={md5:"",sha256:"",crc32:""},W=function(){var e=Object(n.useState)(J),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),l=Object(u.a)(r,2),j=l[0],b=l[1],i=Object(n.useRef)(""),d=Object(n.useState)("..."),O=Object(u.a)(d,2),o=O[0],x=O[1],h=Object(n.useState)(!1),m=Object(u.a)(h,2),f=m[0],p=m[1],g=function(){var e=Object(Q.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(H.a)({},J),p(!1),e.next=4,Promise.all([Object(V.b)(j),Object(V.c)(j),Object(V.a)(j)]).then((function(e){t.md5=e[0].toUpperCase(),t.sha256=e[1].toUpperCase(),t.crc32=e[2].toUpperCase(),x("Hash '".concat(i.current,"' done!")),i.current="",a(t)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(Q.a)(F.a.mark((function e(t){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.target.files.length){e.next=3;break}return a(J),e.abrupt("return");case 3:(c=new FileReader).onerror=function(e){p(!1),x("Error opening file")},c.onload=function(){var e=Object(Q.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(new Uint8Array(t.target.result)),p(!0),x("'".concat(i.current,"' ready, Press GO"));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.readAsArrayBuffer(t.target.files[0]),a(J),i.current=t.target.files[0].name,x("Reading File...".concat(t.target.files[0].name));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"flex flex-column justify-center center w-60",children:[Object(s.jsxs)("fieldset",{className:"ba br3 ma3 flex flex-column items-center",children:[Object(s.jsx)("legend",{children:"Inputs"}),Object(s.jsxs)("label",{className:"bg-lightest-blue br3 w-60 db tc",style:{wordWrap:"break-word"},children:["File: ",i.current,Object(s.jsx)("input",{className:"w-80",style:{opacity:"0"},type:"file",onChange:v,disabled:f})]}),Object(s.jsx)("button",{className:"ba br3 ma2 w-60",disabled:!f,onClick:g,children:Object(s.jsx)("h3",{children:"Go"})})]}),Object(s.jsxs)("fieldset",{className:"ba br3 ma3",children:[Object(s.jsx)("legend",{children:"Outputs"}),Object(s.jsx)("table",{className:"center",children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"f7",children:"MD5"}),Object(s.jsx)("td",{children:Object(s.jsx)("textarea",{className:"tr br3",readOnly:!0,rows:"2",cols:"15",value:c.md5})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"f7",children:"SHA256"}),Object(s.jsx)("td",{children:Object(s.jsx)("textarea",{className:"tr br3",readOnly:!0,rows:"4",cols:"15",value:c.sha256})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"f7",children:"CRC32"}),Object(s.jsx)("td",{children:Object(s.jsx)("textarea",{className:"tr br3",readOnly:!0,rows:"2",cols:"15",value:c.crc32})})]})]})})]}),Object(s.jsxs)("fieldset",{className:"ba br3 ma3",children:[Object(s.jsx)("legend",{children:"Status"}),o]})]})};var q=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(o,{tabitmes:[{name:"binary-converter",bgcolor:"aliceblue",panel:Object(s.jsx)(f,{})},{name:"QR-Code",bgcolor:"cornsilk",panel:Object(s.jsx)(v,{})},{name:"File-hash",bgcolor:"lavender",panel:Object(s.jsx)(W,{})},{name:"Stopwatch",bgcolor:"yellowgreen",panel:Object(s.jsx)(D,{})},{name:"Weather",bgcolor:"wheat",panel:Object(s.jsx)(E,{})},{name:"Air-Quality",bgcolor:"honeydew",panel:Object(s.jsx)(G,{})}]})})};c(64);l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(q,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.161baf8c.chunk.js.map