(this["webpackJsonpmasko-movie-app"]=this["webpackJsonpmasko-movie-app"]||[]).push([[0],{37:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(29),r=a.n(s),i=(a(37),a(19)),l=a(16),o=a.n(l),j=a(30),b=a(4),d=a(12),m=a(2),u=a(31),O=a.n(u),h=a(0);var p=function(e){var t=e.handleSubmit,a=Object(c.useState)(""),n=Object(b.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(""),l=Object(b.a)(i,2),o=l[0],j=l[1],d=Object(c.useState)(""),m=Object(b.a)(d,2),u=m[0],O=m[1],p=function(e){"movieType"===e.target.name?r(e.target.value):"movieTitle"===e.target.name?j(e.target.value):"movieYear"===e.target.name&&O(e.target.value)};return Object(h.jsxs)("div",{className:"search",children:[Object(h.jsxs)("div",{className:"form-group input-text",children:[Object(h.jsx)("input",{required:!0,className:"form-control",type:"text",placeholder:"search title ...",onChange:p,name:"movieTitle",value:o}),Object(h.jsx)("input",{required:!0,type:"number",className:"form-control",placeholder:"movie year...",onChange:p,name:"movieYear",value:u})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("select",{className:"form-control",name:"movieType",onChange:p,value:s,children:[Object(h.jsx)("option",{children:"Select type"}),Object(h.jsx)("option",{value:"movie",children:"movie"}),Object(h.jsx)("option",{value:"series",children:"series"}),Object(h.jsx)("option",{value:"episode",children:"episode"})]})}),Object(h.jsx)("input",{onClick:function(){return t(s,o,u)},className:"form-control btn btn-primary",type:"submit",value:"Search"})]})},v=a.p+"static/media/unsplash1.0ea2b427.jpg",x=a.p+"static/media/loading.447d904b.svg";var f=function(e){var t=e.currentMovie,a=e.handleNominated,c=e.nominated,n=e.displaynumber,s=e.maxError,r=c?"btn-success":"btn-primary";return 0===n?Object(h.jsxs)("div",{className:"alert alert-info card",children:[Object(h.jsx)("p",{children:"welcome to Masko award show"}),Object(h.jsx)("p",{children:"please nominate maximum of 5 movies"})]}):1===n?Object(h.jsxs)("div",{className:"movieDisplay",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{className:"imgPoster",src:t?t.Poster:v,alt:" poster not available"})}),Object(h.jsxs)("div",{className:"movieInfo-container",children:[Object(h.jsxs)("p",{className:"title",children:[Object(h.jsx)("span",{children:"Title:"}),t?t.Title:null,t?t.Year:null]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Genre:"}),t?t.Genre:null]}),Object(h.jsxs)("p",{className:"plot",children:[Object(h.jsx)("span",{children:"Plot:"}),t?t.Plot:null]}),Object(h.jsx)("button",{className:"btn ".concat(r," btn-block"),onClick:a,children:c?"Nominated search another movie.":"Nominate"}),Object(h.jsx)("p",{className:"aler alert-danger",children:s?"Maximum nominated":""})]})]}):3===n?Object(h.jsx)("div",{className:"alert alert-info card",children:"no result search for a movie"}):4===n?Object(h.jsx)("div",{className:"alert alert-danger card",children:"error"}):5===n?Object(h.jsx)("div",{className:"card loading",children:Object(h.jsx)("img",{className:"loading",src:x,alt:"loading.."})}):void 0};var N=function(e){var t=e.selected,a=e.dashbordNo,c=e.handleRemove,n=t.slice(0,5);return 0===a?Object(h.jsx)("div",{className:"card alert alert-warning",children:Object(h.jsx)("p",{children:"please go to the home page to nominate 5 movies"})}):1===a?n.map((function(e,t){return Object(h.jsxs)("div",{className:"movieDisplay",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{className:"imgPoster",src:""==e.Poster?null:e.Poster,alt:" poster not available"})}),Object(h.jsxs)("div",{className:"movieInfo-container",children:[Object(h.jsxs)("p",{className:"title",children:[Object(h.jsx)("span",{children:"Title:"}),e?e.Title:null,e?e.Year:null]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Genre:"}),e?e.Genre:null]}),Object(h.jsxs)("p",{className:"plot",children:[Object(h.jsx)("span",{children:"Plot:"}),e?e.Plot:null]}),"",e.Title?Object(h.jsx)("button",{value:t,onClick:function(){return c(e.imdbID)},className:"btn btn-block btn-danger",children:"remove from nomination"}):""]})]},t)})):2===a?Object(h.jsx)("div",{className:"card alert alert-warning",children:Object(h.jsx)("p",{children:"page to nominate 5 movies"})}):void 0};var g=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=(t[0],t[1]),s=Object(c.useState)(""),r=Object(b.a)(s,2),l=(r[0],r[1]),u=Object(c.useState)(""),v=Object(b.a)(u,2),x=(v[0],v[1]),g=Object(c.useState)(),y=Object(b.a)(g,2),S=y[0],k=y[1],w=Object(c.useState)([]),M=Object(b.a)(w,2),P=M[0],T=M[1],C=Object(c.useState)(!1),D=Object(b.a)(C,2),I=D[0],E=D[1],G=Object(c.useState)(0),Y=Object(b.a)(G,2),q=Y[0],A=Y[1],F=Object(c.useState)(0),J=Object(b.a)(F,2),R=J[0],B=J[1],H=Object(c.useState)(!1),z=Object(b.a)(H,2),K=z[0],L=(z[1],Object(c.useState)(!1)),Q=Object(b.a)(L,2),U=Q[0],V=Q[1],W=Object(c.useState)(!1),X=Object(b.a)(W,2),Z=X[0],$=X[1],_=function(e,t,c){l(t),a(e),x(c),V(!0),E(!1),e&&t&&c?function(){var a=Object(j.a)(o.a.mark((function a(){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return A(5),a.next=3,O.a.get("http://www.omdbapi.com/?apikey=".concat("e9ee2678","&t=").concat(t,"&y=").concat(c,"&type=").concat(e));case 3:n=a.sent,k(n.data),A(n?1:4);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()():A(4)};Object(c.useEffect)((function(){}),[U]);var ee=function(){E(!0),B(1),T([].concat(Object(i.a)(P),[P.legnth>5?"":S]))},te=Z?"display":null,ae=function(e){T(Object(i.a)(P.filter((function(t){return t.imdbID!==e}))))};return Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{className:"Main",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{children:"Masko Movie Award Nomination"}),Object(h.jsx)("p",{children:"Nominate your favourite movies "})]}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("i",{className:"fa fa-bars",onClick:function(){$(!Z)}}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"nav navbar-nav ".concat(te),children:[Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/Masko-movie-app/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/dashbord",children:"Dashbord"})})]})}),Object(h.jsx)(m.a,{exact:!0,path:"/Masko-movie-app",component:function(e){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)(p,{handleSubmit:_}),Object(h.jsx)(f,{currentMovie:S,handleNominated:ee,nominated:I,displaynumber:q,maxError:K})]})}}),Object(h.jsx)(m.a,{path:"/dashbord",component:function(e){return Object(h.jsx)(n.a.Fragment,{children:Object(h.jsx)(N,{selected:P,dashbordNo:R,handleRemove:ae})})}})]})]})})};var y=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(g,{})})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.c717eae7.chunk.js.map