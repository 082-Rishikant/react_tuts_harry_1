(this.webpackJsonpreact_tuts_harry=this.webpackJsonpreact_tuts_harry||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(8),l=a.n(o),n=a(3),r=a(0);function i(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),t=Object(n.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Enable Dark mode"),l=Object(n.a)(o,2),i=l[0],d=l[1];return Object(r.jsxs)("div",{className:"container",style:a,children:[Object(r.jsx)("h1",{className:"my-3",children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{style:a,className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:a,children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{style:a,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{style:a,className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{style:a,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{style:a,className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(r.jsx)("button",{className:"btn btn-primary my-2",onClick:function(){"white"===a.color?(s({color:"black",backgroundColor:"white"}),d("enable Dark mode")):(s({color:"white",backgroundColor:"black",border:"1px solid white"}),d("enable Light mode"))},children:i})]})}var d=a(5);function b(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link",to:"/Aboutus",children:e.about})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark"),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toogleMode}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Darks Mode"})]})]})]})})})}function h(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),s=a[0],o=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container my-3 ",style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#557c9f":"white"},children:[Object(r.jsx)("h2",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){o(e.target.value)},id:"myBox",rows:"9",placeholder:"Enter Text here",style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#557c9f":"white"}})}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.toUpperCase();o(t),e.showAlert(" converted to uppercase","success ")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.toLowerCase();o(t),e.showAlert(" converted to lowercase","success ")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){o(""),e.showAlert(" all cleared","success ")},children:"clear all"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert(" Text copied","success ")},children:"copy text"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.split(/[ ]+/);o(t.join(" ")),e.showAlert(" space removed","success ")},children:"Remove extra space"})]}),Object(r.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#557c9f":"white"},children:[Object(r.jsx)("h3",{children:"Text Details"}),Object(r.jsxs)("p",{children:[s.split(" ").length," words  ",s.length," characters"]}),Object(r.jsxs)("p",{children:[.008*s.split(" ").length," minutes read time"]}),Object(r.jsx)("h3",{children:"Text Preview"}),Object(r.jsx)("p",{children:s.length>0?s:"Enter Text above to preview that here"})]})]})}function j(e){var t;return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.message," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:(t=e.alert.message,(t=t.toLowerCase()).charAt(0).toUpperCase()+t.slice(1))}),":",e.alert.explanation]})}b.defaultProps={about:"about"};var m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),l=Object(n.a)(o,2),u=l[0],p=l[1],x=function(e,t){p({message:t,explanation:e}),setTimeout((function(){p(null)}),"1500")};return Object(r.jsxs)(d.a,{children:[Object(r.jsx)(b,{title:"TextUtils",about:"about TextUtils",mode:a,toogleMode:function(){"dark"===a?(s("light"),document.body.style.backgroundColor="white",x(" Light mode enabled","success "),document.title="TextUtils - Light Mode"):(s("dark"),document.body.style.backgroundColor="#557c9f",x(" dark mode enabled","success "),document.title="TextUtils - Dark Mode")}}),Object(r.jsx)(j,{alert:u}),Object(r.jsx)("div",{className:"container my-4",children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/",element:Object(r.jsx)(h,{heading:"Enter Text to analyze below",mode:a,showAlert:x})}),Object(r.jsx)(m.a,{path:"/Aboutus",element:Object(r.jsx)(i,{})})]})})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),o(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.8c928a7b.chunk.js.map