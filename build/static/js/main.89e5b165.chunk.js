(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var s=t(1),a=t.n(s),c=t(17),i=t.n(c),r=(t(25),t(7)),o=t(12),l=t(9),d=t(8),j=t(18),u=t(2),b=(t(26),t(27),t(0)),h=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={width:0,displayMenu:void 0},e.updateWindowDimensions=function(){e.setState({width:window.innerWidth})},e.handleMenu=function(){e.setState({displayMenu:!e.state.displayMenu})},e.displayFullMenu=function(){return Object(b.jsxs)("div",{className:"navbar-container",children:[Object(b.jsxs)("div",{className:"navbar-logo-container",children:[Object(b.jsx)("img",{className:"navbar-logo",src:"logo.png",alt:"logo"}),Object(b.jsx)("div",{className:"navbar-app-name",children:"Lowympact"})]}),Object(b.jsxs)("div",{className:"navbar-link-container",children:[Object(b.jsx)("button",{children:"Le projet"}),Object(b.jsx)("button",{children:"L'\xe9quipe"}),Object(b.jsx)("button",{className:"button-blue",children:"Installer"})]})]})},e.displayBurgerMenu=function(){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)("div",{className:"navbar-logo-container",children:[Object(b.jsx)("img",{className:"navbar-logo",src:"logo.png",alt:"logo"}),Object(b.jsx)("div",{className:"navbar-app-name",children:"Lowympact"})]}),Object(b.jsx)("div",{className:"burger-icon",onClick:e.handleMenu,children:Object(b.jsxs)("div",{id:"nav-icon3",className:e.state.displayMenu?"open":"",children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{})]})}),Object(b.jsxs)("div",{className:void 0===e.state.displayMenu?"hidden":e.state.displayMenu?"sliding-menu-container menu-visible":"sliding-menu-container menu-hidden",children:[Object(b.jsxs)("div",{className:"sliding-menu-items",children:[Object(b.jsx)("button",{children:"Le projet"}),Object(b.jsx)("button",{children:"L'\xe9quipe"}),Object(b.jsx)("button",{className:"button-blue",children:"Installer"})]}),Object(b.jsxs)("div",{className:"sliding-menu-logo",children:[Object(b.jsx)("img",{className:"navbar-logo",src:"logo.png",alt:"logo"}),Object(b.jsx)("div",{className:"navbar-app-name",children:"Lowympact"})]})]})]})},e.render=function(){return e.state.width<900?Object(b.jsx)(a.a.Fragment,{children:e.displayBurgerMenu()}):Object(b.jsx)(a.a.Fragment,{children:e.displayFullMenu()})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}}]),t}(a.a.Component),m=t.p+"static/media/home.3536e0a3.jpg",p=t.p+"static/media/history.2a4df4cf.jpg",O=t(20),v=function(e){var n=e.show,t=e.children,a=Object(s.useState)(n),c=Object(O.a)(a,2),i=c[0],r=c[1];Object(s.useEffect)((function(){n&&r(!0)}),[n]);return i&&Object(b.jsx)("div",{className:"fade-animation",style:{animation:"".concat(n?"fadeIn":"fadeOut"," 1s")},onAnimationEnd:function(){n||r(!1)},children:t})},x=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={phoneToRender:2},e.componentDidMount=function(){e.switchImage()},e.switchImage=function(){var n=e.state.phoneToRender;(n+=1)>=2&&(n=0),e.setState({phoneToRender:n}),setTimeout(e.switchImage,1e4)},e.displayPhone=function(){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(v,{show:0===e.state.phoneToRender,children:Object(b.jsx)("img",{src:m,alt:"home"},0)}),Object(b.jsx)(v,{show:1===e.state.phoneToRender,children:Object(b.jsx)("img",{src:p,alt:"history"},1)})]})},e.render=function(){return Object(b.jsxs)("div",{className:"home-intro-container",children:[Object(b.jsxs)("div",{className:"home-text-container",children:[Object(b.jsxs)("h1",{children:["La tra\xe7abilit\xe9 des produits ",Object(b.jsx)("br",{})," ",Object(b.jsx)("bold",{children:"du champ \xe0 ton assiette"})]}),Object(b.jsx)("button",{className:"button-blue",children:"En savoir plus"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Des milliers de produits"}),Object(b.jsx)("li",{children:"Mesure ton impact carbone"}),Object(b.jsx)("li",{children:"D\xe9couvre le trajet des aliments"})]})]}),Object(b.jsx)("div",{className:"home-phone-container",children:Object(b.jsx)("div",{className:"home-phone",children:e.displayPhone()})})]})},e}return t}(a.a.Component),g=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).render=function(){return Object(b.jsxs)("div",{className:"homepage-container",children:[Object(b.jsx)(h,{}),Object(b.jsx)(x,{}),Object(b.jsxs)("div",{className:"video-container",children:[Object(b.jsx)("h2",{children:"D\xe9couvre l'impact environnemental des produits"}),Object(b.jsxs)("div",{className:"video-frame-container",children:[Object(b.jsx)("div",{className:"video-wrapper",children:Object(b.jsx)("div",{className:"video"})}),Object(b.jsxs)("div",{className:"text-video-wrapper",children:[Object(b.jsx)("h3",{children:"Analyse ton impact carbone"}),Object(b.jsx)("p",{children:"Vous \xeates producteur ? Contactez-nous pour partager vos informations, et mettre vos produits locaux en valeur"}),Object(b.jsx)("h3",{children:"Des milliers de produits \xe0 scanner"}),Object(b.jsx)("p",{children:"Vous \xeates producteur ? Contactez-nous pour partager vos informations, et mettre vos produits locaux en valeur"})]})]})]})]})},e}return t}(a.a.Component),f=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)(j.a,{children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:"/",component:g,exact:!0}),Object(b.jsx)(u.a,{to:"/"})]})})}}]),t}(s.Component),w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,s=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),w()}},[[37,1,2]]]);
//# sourceMappingURL=main.89e5b165.chunk.js.map