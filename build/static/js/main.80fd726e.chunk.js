(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(19),c=t.n(a),o=t(10),u=t(3),i=t(5),s=t.n(i),d="/api/persons",l={getAll:function(){return s.a.get(d).then((function(e){return e.data}))},create:function(e){return s.a.post(d,e).then((function(e){return e.data}))},remove:function(e){return s.a.delete(d+e)},update:function(e,n){return s.a.put(d+e,n).then((function(e){return e.data}))}},j=t(0),h=function(e){var n=e.search,t=e.handleSearch;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["filter shown with ",Object(j.jsx)("input",{onChange:t})]}),n&&n.map((function(e){return Object(j.jsxs)("p",{children:[e.name," ",e.number]},e.name)}))]})},b=function(e){var n=e.newName,t=e.newPhone,r=e.handleNameChange,a=e.handlePhoneChange,c=e.handleSubmit;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:c,children:[Object(j.jsxs)("div",{children:["name ",Object(j.jsx)("input",{value:n,onChange:r})]}),Object(j.jsxs)("div",{children:["number ",Object(j.jsx)("input",{value:t,onChange:a})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})})},m=function(e){var n=e.persons,t=e.setPersons,r=e.person;return Object(j.jsxs)("p",{children:[r.name," ",r.number," ",Object(j.jsx)("input",{type:"submit",value:"delete",onClick:function(){return e=r.id,void(window.confirm("Delete ".concat(r.name," ?"))&&(l.remove(e),t(n.filter((function(n){return n.id!==e})))));var e}})]})},f=function(e){var n=e.persons,t=e.setPersons;return Object(j.jsx)(j.Fragment,{children:n.map((function(e){return Object(j.jsx)(m,{persons:n,setPersons:t,person:e},e.id)}))})},O=function(e){var n=e.message;return null===n?null:Object(j.jsx)("div",{className:"notification",children:n})};var p=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1],m=Object(r.useState)(""),p=Object(u.a)(m,2),v=p[0],x=p[1],g=Object(r.useState)([]),w=Object(u.a)(g,2),S=w[0],C=w[1],P=Object(r.useState)(null),k=Object(u.a)(P,2),y=k[0],N=k[1];return Object(r.useEffect)((function(){l.getAll().then((function(e){return a(e)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(O,{message:y}),Object(j.jsx)(h,{search:S,handleSearch:function(e){if(e.target.value){var n=t.filter((function(n){return n.name.toLowerCase().startsWith(e.target.value.toLowerCase())}));C(Object(o.a)(n))}else C([])}}),Object(j.jsx)("h3",{children:"add a new"}),Object(j.jsx)(b,{newName:s,newPhone:v,handleNameChange:function(e){d(e.target.value)},handlePhoneChange:function(e){x(e.target.value)},handleSubmit:function(e){e.preventDefault();var n={name:s,number:v},r=t.find((function(e){return e.name===s}));void 0===r?l.create(n).then((function(e){a(t.concat(e)),N("Added ".concat(e.name)),setTimeout((function(){return N(null)}),5e3),d(""),x("")})):window.confirm("".concat(r.name," is already added to phonebook, replace the old number with a new one?"))?(l.update(r.id,n).then((function(e){x(e.number);var n=t.findIndex((function(e){return e.name===r.name})),c=Object(o.a)(t);c[n].number=e.number,a(c),N("Telephone number updated"),setTimeout((function(){return N(null)}),5e3),x("")})).catch((function(e){N("Information of ".concat(r.name," has already been removed from server")),document.querySelector(".notification").style.color="red",setTimeout((function(){return N(null)}),5e3)})),d(""),x("")):(x(""),d(""))}}),Object(j.jsx)("h2",{children:"Numbers"}),Object(j.jsx)(f,{persons:t,setPersons:a})]})};t(43);c.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.80fd726e.chunk.js.map