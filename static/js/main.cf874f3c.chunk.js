(this["webpackJsonpbasic-todo-list"]=this["webpackJsonpbasic-todo-list"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(1),r=n(6),i=n.n(r),a=(n(13),n(4)),u=n(7);function l(t){var e=t.todo,n=t.toggleTodo;return Object(o.jsx)("div",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){n(e.id)}}),e.name]})})}function s(t){var e=t.todos,n=t.toggleTodo;return e.map((function(t){return Object(o.jsx)(l,{todo:t,toggleTodo:n},t.id)}))}var d=n(17),j=(n(14),"todoApp.todos");var b=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],i=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(j));t&&r(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(j,JSON.stringify(n))}),[n]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"What can you learn from a basic React Todo List?"}),Object(o.jsx)(s,{todos:n,toggleTodo:function(t){var e=Object(a.a)(n),o=e.find((function(e){return e.id===t}));o.complete=!o.complete,r(e)}}),Object(o.jsx)("input",{ref:i,type:"text"}),Object(o.jsx)("button",{onClick:function(t){var e=i.current.value;""!==e&&(r((function(t){return[].concat(Object(a.a)(t),[{id:Object(d.a)(),name:e,complete:!1}])})),i.current.value=null)},children:"Add Todo"}),Object(o.jsx)("button",{onClick:function(){var t=Object(a.a)(n).filter((function(t){return!t.complete}));r(t)},children:"Clear Completed Todos"}),Object(o.jsxs)("div",{class:"remaining",children:[n.filter((function(t){return!t.complete})).length," left to do"]})]})};i.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cf874f3c.chunk.js.map