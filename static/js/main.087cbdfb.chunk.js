(this.webpackJsonpmemegenerator=this.webpackJsonpmemegenerator||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),o=n.n(s),i=(n(15),n(2)),l=(n(16),n.p+"static/media/writing.be2d84ef.png"),r=n(6),j=n(7),m=n(8),d=n(3),h=n(10),b=n(9),u=n(0),O=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={topText:"",bottomText:""},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e}return Object(m.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,c=t.value;this.setState(Object(r.a)({},n,c))}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",placeholder:"top text..",name:"topText",onChange:this.handleChange}),Object(u.jsx)("h2",{className:"topTextStyle",children:this.state.topText}),Object(u.jsx)("input",{type:"text",placeholder:"bottom text..",name:"bottomText",onChange:this.handleChange}),Object(u.jsx)("h2",{className:"bottomTextStyle",children:this.state.bottomText})]})})}}]),n}(a.a.Component);var x=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){s(e.data.memes[Math.floor(100*Math.random())].url)}))}),[e.openModal]),Object(u.jsx)("div",{children:Object(u.jsxs)("section",{className:"container-center",children:[e.showModal?Object(u.jsxs)("div",{className:"createMemeModal",children:[Object(u.jsx)("div",{className:"imageContainer",children:Object(u.jsxs)("div",{className:"topTextImageContainer",children:[Object(u.jsx)("img",{src:a,alt:"Sweet PIC",className:"memeImage"}),Object(u.jsx)(O,{})]})}),Object(u.jsx)("button",{className:"btn-close",onClick:e.openModal,children:"Close"})]}):null,Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{className:"createRandomTitle",children:"Create"})," Random Meme"]}),Object(u.jsx)("img",{className:"imageIcon",src:l,alt:"icon"}),Object(u.jsx)("div",{className:"buttonAjst",children:Object(u.jsxs)("button",{className:"btnStart",onClick:e.openModal,children:[Object(u.jsx)("span",{className:"createRandomTitle",children:"Create"})," Random Meme"]})})]})})},p=n.p+"static/media/meme.18bf1999.png";var f=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){fetch("https://meme-api.herokuapp.com/gimme").then((function(e){return e.json()})).then((function(e){s(e.url)})).catch((function(e){console.log(e)}))}),[e.openModal2]),Object(u.jsx)("div",{children:Object(u.jsxs)("section",{className:"container-center",children:[e.showModal?Object(u.jsxs)("div",{className:"createMemeModal",children:[Object(u.jsx)("div",{className:"imageContainer",children:Object(u.jsx)("img",{className:"memeImage",src:a,alt:"meme"})}),Object(u.jsx)("button",{className:"btn-close",onClick:e.openModal2,children:"Close"})]}):null,Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{className:"getRandomTitle",children:"Get"})," Random Meme"]}),Object(u.jsx)("img",{className:"imageIcon",src:p,alt:"icon"}),Object(u.jsx)("div",{className:"buttonAjst",children:Object(u.jsxs)("button",{className:"btnStart",onClick:e.openModal2,children:[Object(u.jsx)("span",{className:"getRandomTitle",children:"Get"})," Random Meme"]})})]})})};var g=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),o=Object(i.a)(s,2),l=o[0],r=o[1],j=Object(c.useRef)();return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",ref:j,onClick:function(e){j.current===e.target&&(a(!1),r(!1))},children:[Object(u.jsx)(x,{showModal:n,setShowModal:a,openModal:function(){a((function(e){return!e}))}}),Object(u.jsx)(f,{showModal:l,setShowModal:r,openModal2:function(){r((function(e){return!e}))}})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.087cbdfb.chunk.js.map