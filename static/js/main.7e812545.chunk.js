(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a={};s.r(a),s.d(a,"MessageReaded",(function(){return x})),s.d(a,"MessageSended",(function(){return y}));var c=s(1),n=s.n(c),d=s(8),i=s.n(d),r=s(9),o=s.n(r),u=s(3),m=s.n(u),b=s(4),l=(s(15),s(0)),j=function(){return Object(l.jsxs)("div",{className:"user-info",children:[Object(l.jsx)("div",{className:"name",children:"Chat by Vlad-maker"}),Object(l.jsxs)("div",{className:"status",children:[Object(l.jsx)("span",{className:"circle"}),"\u0412 \u0441\u0435\u0442\u0438"]})]})},h=Object(c.createContext)(),g=s(5),f=(s(17),function(){var e=Object(c.useContext)(h),t=e.theme,s=e.toggleTheme;return Object(l.jsx)("div",{className:"theme","data-theme":"light"===t?"dark":"light",onClick:function(e){var t=e.currentTarget.dataset.theme;s(t)},children:"light"===t?Object(l.jsx)(g.a,{size:30,className:"dark"}):Object(l.jsx)(g.b,{className:"yellow",size:30})})}),v=(s(18),function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(j,{}),Object(l.jsx)(f,{})]})}),O=s(2),p=s(6),_=s.n(p),x=['<path \n          d="M773.495 279.073l-61.528-61.528-276.876 276.876 61.528 61.528 276.876-276.876zM958.077 217.545l-461.46 465.855-184.584-184.584-61.528 61.528 246.112 246.112 527.383-527.383-65.923-61.528zM0 560.344l246.112 246.112 61.528-61.528-246.112-246.112-61.528 61.528z"\n      />',"0 0 1024 1024"],y=['<path \n        d="M958.077 217.545l-461.46 465.855-184.584-184.584-61.528 61.528 246.112 246.112 527.383-527.383-65.923-61.528zM0 560.344v0z"\n    />',"0 0 1024 1024"],M=function(e){var t=e.size,s=void 0===t?20:t,c=e.name,n=e.className,d=void 0===n?"":n,i=s instanceof Array?s:[s,s],r=Object(b.a)(i,2),o=r[0],u=r[1],m=Object(b.a)(a[c],2),j=m[0],h=m[1];return Object(l.jsx)("svg",{className:_()("icon",d),width:o,height:u,dangerouslySetInnerHTML:{__html:j},viewBox:h})},N=(s(19),function(e){var t=e.isReverse,s=e.isRemovable,a=e.messages,c=e.avatar,n=e.onRemove,d=function(e){var t=e.currentTarget.dataset.id;n(+t)};return Object(l.jsxs)("div",{className:_()("item",{reverse:t,removable:s}),children:[Object(l.jsx)("img",{src:c,className:"avatar",alt:"Avatar"}),Object(l.jsx)("div",{className:"list",children:a.map((function(e){return Object(l.jsxs)("div",{className:"list-item",children:[Object(l.jsx)("div",{className:"text",children:e.text}),Object(l.jsx)("div",{className:"time",children:m()(e.date).format("HH:mm")}),Object(l.jsx)(M,{size:15,className:"message-status",name:"sended"===e.status?"MessageSended":"MessageReaded"}),Object(l.jsx)(g.c,{"data-id":e.id,size:18,className:"remove-message",onClick:d})]},e.id)}))})]})}),A=s(10),k=s.n(A);s(20);m.a.extend(k.a);var T=function(e){var t=e.date;return Object(l.jsx)("div",{className:"title",children:m()(t).calendar(null,{sameDay:"[\u0421\u0435\u0433\u043e\u0434\u043d\u044f]",lastWeek:"DD MMMM",sameElse:"DD MMMM YYYY"})})};function w(e,t){switch(t.type){case"remove-message":return Object(O.a)(Object(O.a)({},e),{},{messages:e.messages.filter((function(e){return e.id!==t.payload}))});case"add-message":return Object(O.a)(Object(O.a)({},e),{},{messages:e.messages.concat(t.payload)});case"update-status":return Object(O.a)(Object(O.a)({},e),{},{messages:e.messages.map((function(e){return e.id===t.payload.id?Object(O.a)(Object(O.a)({},e),{},{status:t.payload.status}):e}))});default:throw new Error("Unknown action type")}}var z=[{avatar:"https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/201152445_6474098629299293_6749566079502955095_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFzrUehpsROzwVb2QRdDc9HBitf26HrAXgGK1_boesBeNnygqFM9TwtXcbIZxFUIuHoCs6OlxhTBXOtmvpvUke9&_nc_ohc=Hz-QEYnZkmYAX_qjYpk&_nc_oc=AQlebGkMsI5gzbCdNN1bnurtMDgS-VAAjmZyo5dbtYdnNjCViWQh4TFEJcmdIsIMhGw&_nc_ht=scontent-arn2-1.xx&oh=ca9d22206fe4fdbf6d298e1f3de02762&oe=6180F8DB",message:"\u041f\u0440\u0438\u0432\u0435\u0442",id:0,date:"2021-10-05T10:09:04.712Z",is:"her"},{avatar:"https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/201152445_6474098629299293_6749566079502955095_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFzrUehpsROzwVb2QRdDc9HBitf26HrAXgGK1_boesBeNnygqFM9TwtXcbIZxFUIuHoCs6OlxhTBXOtmvpvUke9&_nc_ohc=Hz-QEYnZkmYAX_qjYpk&_nc_oc=AQlebGkMsI5gzbCdNN1bnurtMDgS-VAAjmZyo5dbtYdnNjCViWQh4TFEJcmdIsIMhGw&_nc_ht=scontent-arn2-1.xx&oh=ca9d22206fe4fdbf6d298e1f3de02762&oe=6180F8DB",message:"\u0427\u0442\u043e \u0437\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435?",id:1,date:"2021-10-05T10:19:04.712Z",is:"her"},{avatar:"https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/201152445_6474098629299293_6749566079502955095_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFzrUehpsROzwVb2QRdDc9HBitf26HrAXgGK1_boesBeNnygqFM9TwtXcbIZxFUIuHoCs6OlxhTBXOtmvpvUke9&_nc_ohc=Hz-QEYnZkmYAX_qjYpk&_nc_oc=AQlebGkMsI5gzbCdNN1bnurtMDgS-VAAjmZyo5dbtYdnNjCViWQh4TFEJcmdIsIMhGw&_nc_ht=scontent-arn2-1.xx&oh=ca9d22206fe4fdbf6d298e1f3de02762&oe=6180F8DB",message:"\u041a\u0430\u043a\u0438\u0435 \u0443 \u043d\u0435\u0433\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438?",id:2,date:"2021-10-05T10:24:04.712Z",is:"her"},{avatar:"https://hhcdn.ru/photo/607929075.jpeg?t=1633536207&h=v9SBBbbJ9Kg8TA3qsaEZWQ",message:"\u041f\u0440\u0438\u0432\u0435\u0442! \u042d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0447\u0430\u0442 \u0434\u043b\u044f \u043e\u0431\u0449\u0435\u043d\u0438\u044f",id:3,date:"2021-10-05T05:09:04.712Z",status:"sended",is:"my"},{avatar:"https://hhcdn.ru/photo/607929075.jpeg?t=1633536207&h=v9SBBbbJ9Kg8TA3qsaEZWQ",message:"\u041c\u043e\u0436\u0435\u0448\u044c \u043c\u0435\u043d\u044f\u0442\u044c \u0446\u0432\u0435\u0442\u043e\u0432\u0443\u044e \u0442\u0435\u043c\u0443 \u0447\u0430\u0442\u0430",id:4,date:"2021-10-05T12:09:04.712Z",status:"sended",is:"my"},{avatar:"https://hhcdn.ru/photo/607929075.jpeg?t=1633536207&h=v9SBBbbJ9Kg8TA3qsaEZWQ",message:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0438 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",id:5,date:"2021-10-05T13:01:04.712Z",status:"readed",is:"my"},{avatar:"https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/201152445_6474098629299293_6749566079502955095_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFzrUehpsROzwVb2QRdDc9HBitf26HrAXgGK1_boesBeNnygqFM9TwtXcbIZxFUIuHoCs6OlxhTBXOtmvpvUke9&_nc_ohc=Hz-QEYnZkmYAX_qjYpk&_nc_oc=AQlebGkMsI5gzbCdNN1bnurtMDgS-VAAjmZyo5dbtYdnNjCViWQh4TFEJcmdIsIMhGw&_nc_ht=scontent-arn2-1.xx&oh=ca9d22206fe4fdbf6d298e1f3de02762&oe=6180F8DB",message:"\u041a\u0440\u0443\u0442\u043e, \u043c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f!",id:7,date:"2021-10-05T15:09:04.712Z",is:"her"}],B=(s(21),function(e){var t=e.newMessage,s=Object(c.useRef)(),a=Object(c.useReducer)(w,{messages:z}),n=Object(b.a)(a,2),d=n[0],i=n[1];Object(c.useEffect)((function(){t&&(i({type:"add-message",payload:t}),setTimeout((function(){i({type:"update-status",payload:{id:t.id,status:"readed"}})}),1e3))}),[t]),Object(c.useEffect)((function(){s.current.scrollTop=s.current.scrollHeight}),[d.messages.length]);var r=function(e){i({type:"remove-message",payload:e})},o=function(e){var t=[];return e.forEach((function(s,a){if(0===a||e[a-1]){var c=m()((0===a?s:e[a-1]).date).diff(s.date,"day");(0===a||c)&&t.push({type:"title",id:"item-title-".concat(s.id),date:s.date})}if(0===a||s.is!==e[a-1].is)t.push({type:"message",id:"item-message-".concat(s.id),avatar:s.avatar,isReverse:"my"===s.is,isRemovable:"my"===s.is,messages:[{text:s.message,status:s.status,id:s.id,date:s.date}]});else{var n=t.length-1;t[n]=Object(O.a)(Object(O.a)({},t[n]),{},{messages:t[n].messages.concat({text:s.message,status:s.status,id:s.id,date:s.date})})}})),t}(d.messages);return Object(l.jsx)("div",{className:"dialog",children:Object(l.jsx)("div",{className:"overflow",ref:s,children:o.map((function(e){return"message"===e.type?Object(c.createElement)(N,Object(O.a)(Object(O.a)({},e),{},{key:e.id,onRemove:r})):Object(l.jsx)(T,{date:e.date},e.id)}))})})}),I=(s(22),function(e){var t=e.onAddMessage,s=Object(c.useState)(""),a=Object(b.a)(s,2),n=a[0],d=a[1];return Object(l.jsxs)("form",{className:"sender",onSubmit:function(e){e.preventDefault(),t({id:Date.now(),avatar:"https://hhcdn.ru/photo/607929075.jpeg?t=1633536207&h=v9SBBbbJ9Kg8TA3qsaEZWQ",message:n,date:(new Date).toISOString(),is:"my",status:"sended"}),d("")},children:[Object(l.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",value:n,onChange:function(e){return d(e.target.value)},required:!0}),Object(l.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}),Z=function(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(localStorage.getItem("application-theme")||"dark"),d=Object(b.a)(n,2),i=d[0],r=d[1];return Object(c.useEffect)((function(){!function(e){localStorage.setItem("application-theme",e),"dark"===e?(document.body.classList.add("dark"),document.body.classList.remove("light")):(document.body.classList.add("light"),document.body.classList.remove("dark"))}(i)}),[i]),Object(l.jsx)(h.Provider,{value:{theme:i,toggleTheme:r},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(v,{}),Object(l.jsx)(B,{newMessage:s}),Object(l.jsx)(I,{onAddMessage:a})]})})};s(23),s(24);o.a.load({google:{families:["Open Sans:300,400,700"]}}),m.a.locale("ru"),i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(Z,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.7e812545.chunk.js.map