(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(19),c=t.n(a),o=t(10),u=t(3),i=t(5),s=t.n(i),l="http://localhost:3001/api/persons/",d={getAll:function(){return s.a.get(l).then((function(e){return e.data}))},create:function(e){return s.a.post(l,e).then((function(e){return e.data}))},remove:function(e){return s.a.delete(l+e)},update:function(e,n){return s.a.put(l+e,n).then((function(e){return e.data}))}},h=t(0),j=function(e){var n=e.search,t=e.handleSearch;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["filter shown with ",Object(h.jsx)("input",{onChange:t})]}),n&&n.map((function(e){return Object(h.jsxs)("p",{children:[e.name," ",e.number]},e.name)}))]})},b=function(e){var n=e.newName,t=e.newPhone,r=e.handleNameChange,a=e.handlePhoneChange,c=e.handleSubmit;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:c,children:[Object(h.jsxs)("div",{children:["name ",Object(h.jsx)("input",{value:n,onChange:r})]}),Object(h.jsxs)("div",{children:["number ",Object(h.jsx)("input",{value:t,onChange:a})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})})},m=function(e){var n=e.persons,t=e.setPersons,r=e.person;return Object(h.jsxs)("p",{children:[r.name," ",r.number," ",Object(h.jsx)("input",{type:"submit",value:"delete",onClick:function(){return e=r.id,void(window.confirm("Delete ".concat(r.name," ?"))&&(d.remove(e),t(n.filter((function(n){return n.id!==e})))));var e}})]})},f=function(e){var n=e.persons,t=e.setPersons;return Object(h.jsx)(h.Fragment,{children:n.map((function(e){return Object(h.jsx)(m,{persons:n,setPersons:t,person:e},e.id)}))})},O=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"notification",children:n})};var p=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),s=i[0],l=i[1],m=Object(r.useState)(""),p=Object(u.a)(m,2),v=p[0],x=p[1],g=Object(r.useState)([]),w=Object(u.a)(g,2),S=w[0],C=w[1],P=Object(r.useState)(null),k=Object(u.a)(P,2),y=k[0],N=k[1];Object(r.useEffect)((function(){d.getAll().then((function(e){return a(e)}))}),[]);var T=function(){document.querySelector(".notification").style.color="red"};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(O,{message:y}),Object(h.jsx)(j,{search:S,handleSearch:function(e){if(e.target.value){var n=t.filter((function(n){return n.name.toLowerCase().startsWith(e.target.value.toLowerCase())}));C(Object(o.a)(n))}else C([])}}),Object(h.jsx)("h3",{children:"add a new"}),Object(h.jsx)(b,{newName:s,newPhone:v,handleNameChange:function(e){l(e.target.value)},handlePhoneChange:function(e){x(e.target.value)},handleSubmit:function(e){e.preventDefault();var n={name:s,number:v},r=t.find((function(e){return e.name===s}));void 0===r?d.create(n).then((function(e){a(t.concat(e)),N("Added ".concat(e.name)),setTimeout((function(){return N(null)}),5e3),l(""),x("")})).catch((function(e){N(e.response.data.error),T(),setTimeout((function(){return N(null)}),5e3)})):window.confirm("".concat(r.name," is already added to phonebook, replace the old number with a new one?"))?(d.update(r.id,n).then((function(e){x(e.number);var n=t.findIndex((function(e){return e.name===r.name})),c=Object(o.a)(t);c[n].number=e.number,a(c),N("Telephone number updated"),setTimeout((function(){return N(null)}),5e3),x("")})).catch((function(e){N("Information of ".concat(r.name," has already been removed from server")),T(),setTimeout((function(){return N(null)}),5e3)})),l(""),x("")):(x(""),l(""))}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(f,{persons:t,setPersons:a})]})};t(43);c.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.009417b5.chunk.js.map