(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(3),c=t.n(u),i=(t(13),t(1)),s=(t(15),{sieben:.75,sechs:.625,fuenf:.5,vier:.375,drei:.25,zwei:.1,eins:0}),l={zwanzig:.82,neunzehn:.75,achtzehn:.6875,siebzehn:.625,sechszehn:.5625,fuenfzehn:.5,vierzehn:.4375,dreizehn:.375,zwoelf:.3125,elf:.25,zehn:.2,neun:.15,acht:.1,sieben:.066,sechs:.033,fuenf:0};var h=function(){var e=Object(a.useState)(24),n=Object(i.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(24),h=Object(i.a)(c,2),o=h[0],f=h[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Notenrechner basierend auf IB Punkten - Klausur 1"),r.a.createElement("h3",null,"Maximale Punkte:"),r.a.createElement("input",{type:"number",value:t,onChange:function(e){return u(e.target.value)}}),r.a.createElement("h3",null,"Geschaffte Punkte:"),r.a.createElement("input",{type:"number",value:o,onChange:function(e){return f(e.target.value)}}),r.a.createElement("div",{className:"gradeContainer"},r.a.createElement("h3",{className:"gradeDisplay"},"Note Peru: ",function(){var e=Number(o)/Number(t);return e>=l.zwanzig?20:e>=l.neunzehn?19:e>=l.achtzehn?18:e>=l.siebzehn?17:e>=l.sechszehn?16:e>=l.fuenfzehn?15:e>=l.vierzehn?14:e>=l.dreizehn?13:e>=l.zwoelf?12:e>=l.elf?11:e>=l.zehn?10:e>=l.neun?9:e>=l.acht?8:e>=l.sieben?7:e>=l.sechs?6:e>=l.fuenf?5:void 0}()),r.a.createElement("h3",{className:"gradeDisplay"},"Note IB: ",function(){var e=Number(o)/Number(t);return e>=s.sieben?7:e>=s.sechs?6:e>=s.fuenf?5:e>=s.vier?4:e>=s.drei?3:e>=s.zwei?2:e>=s.eins?1:void 0}())))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)))},4:function(e,n,t){e.exports=t(17)}},[[4,2,1]]]);
//# sourceMappingURL=main.a625bb33.chunk.js.map