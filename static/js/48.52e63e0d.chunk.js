"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[48],{4048:function(n,e,r){r.r(e),r.d(e,{default:function(){return B}});var i,t,a,o,d,l,c,s,u,x,p=r(5705),m=r(168),b=r(5867),h=(0,b.ZP)(p.l0)(i||(i=(0,m.Z)(["\nmax-width: 500px;\npadding: 8px;\nborder: 2px solid black;\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\nbackground: #FEAC5E;  \nbackground: -webkit-linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E);  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n"]))),f=b.ZP.label(t||(t=(0,m.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 5px;\n"]))),g=(0,b.ZP)(p.gN)(a||(a=(0,m.Z)(["\npadding: 4px;\nborder-radius: 2px;\nborder: 1px solid black;\nbox-shadow: -7px 9px 20px -9px rgba(0,0,0,0.5);\n"]))),j=(0,b.ZP)(p.Bc)(o||(o=(0,m.Z)(["\nfont-size: 12px;\ncolor: red;\n"]))),v=b.ZP.button(d||(d=(0,m.Z)(["\nwidth: fit-content;\nborder-radius: 3px;\nborder: 1px solid black;\nbackground-color: rgb(232, 250, 255);\n"]))),Z=r(6727),k=r(9434),C=r(1686),y=r(6351),P=r(3634),w=r(184),E=Z.Ry().shape({name:Z.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),number:Z.Z_().min(5,"At least 5 numbers").max(13,"Too Long number!").required("Required")}),A=function(){var n=(0,k.v9)(y.Af),e=(0,k.I0)();return(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:"Phonebook"}),(0,w.jsx)(p.J9,{initialValues:{name:"",number:""},validationSchema:E,onSubmit:function(r,i){!function(r){var i=r.name,t=r.number;if(n.find((function(n){return n.number===t})))C.Notify.failure("".concat(t," is alredy in contacts"));else{var a={name:i,number:t};e((0,P.uK)(a))}}(r),i.resetForm()},children:(0,w.jsxs)(h,{children:[(0,w.jsxs)(f,{children:["Name",(0,w.jsx)(g,{name:"name",type:"text"}),(0,w.jsx)(j,{name:"name",component:"div"})]}),(0,w.jsxs)(f,{children:["Number",(0,w.jsx)(g,{name:"number",type:"tel"}),(0,w.jsx)(j,{name:"number",component:"div"})]}),(0,w.jsx)(v,{type:"submit",children:"Add contact"})]})})]})},F=b.ZP.ul(l||(l=(0,m.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\n"]))),_=b.ZP.div(c||(c=(0,m.Z)(["\ndisplay: flex;\ngap: 10px;\n"]))),q=(b.ZP.button(s||(s=(0,m.Z)(["\nwidth: fit-content;\nborder-radius: 3px;\nborder: 1px solid black;\nbackground-color: rgb(232, 250, 255);\n"]))),function(){var n=(0,k.v9)(y.hA),e=(0,k.I0)();return(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(F,{children:n.map((function(n){return(0,w.jsx)("li",{children:(0,w.jsxs)(_,{children:[n.name,": ",n.number,(0,w.jsx)(v,{onClick:function(){return r=n.id,void e((0,P.GK)(r));var r},children:"Delete"})]})},n.id)}))})]})}),I=b.ZP.div(u||(u=(0,m.Z)(["\nmargin-top: 20px;\ndisplay: flex;\n"]))),S=b.ZP.input(x||(x=(0,m.Z)(["\nmargin-left: 5px;\n"]))),D=r(6110),N=function(){var n=(0,k.v9)(y.AD),e=(0,k.I0)();return(0,w.jsx)(I,{children:(0,w.jsxs)("label",{children:["Find contacts by name",(0,w.jsx)(S,{type:"text",value:n,onChange:function(n){var r=n.target.value;e((0,D.v)(r))}})]})})},R=r(2791);function B(){var n=(0,k.I0)(),e=(0,k.v9)(y.xU),r=(0,k.v9)(y.zh);return(0,R.useEffect)((function(){n((0,P.yF)())}),[n]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(A,{}),(0,w.jsx)(N,{}),e&&!r&&(0,w.jsx)("b",{children:"Request in progress..."}),(0,w.jsx)(q,{})]})}}}]);
//# sourceMappingURL=48.52e63e0d.chunk.js.map