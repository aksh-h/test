(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},IV1d:function(e){e.exports=JSON.parse('{"lerna":"2.11.0","useWorkspaces":true,"npmClient":"yarn","version":"0.1.3"}')},Wbzz:function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));r("xfY5");var n=r("q1tI"),a=r.n(n),o=r("+ZDr"),i=r.n(o);r.d(t,"a",(function(){return i.a})),r.d(t,"c",(function(){return o.withPrefix}));r("lw3w"),r("emEt").default.enqueue;var c=a.a.createContext({});function l(e){var t=e.staticQueryData,r=e.data,n=e.query,o=e.render,i=r?r.data:t[n]&&t[n].data;return a.a.createElement(a.a.Fragment,null,i&&o(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,r=e.query,n=e.render,o=e.children;return a.a.createElement(c.Consumer,null,(function(e){return a.a.createElement(l,{data:t,query:r,render:n||o,staticQueryData:e})}))}},YIIx:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return p}));var n=r("zG79"),a=r("q1tI"),o=r.n(a),i=r("Wbzz"),c=r("vOnD"),l=r("FM/7"),s=Object(a.memo)((function(e){var t=e.height;return o.a.createElement("svg",{version:"1.1",height:""+t,viewBox:"0 0 832.89957 205.18784",id:"svg-logo"},o.a.createElement("g",{transform:"translate(414.19 -42.183)",id:"logo-group"},o.a.createElement("g",{transform:"translate(-236.46 79.375)",id:"char-c-1"},o.a.createElement("path",{className:"char-c-1",d:"m-42.145 27.329a48.318 49.196 1.4538 0 0 -67.821 5.5295l36.61 32.055zm-31.212 37.584-31.458 37.361a48.318 49.196 1.4538 0 0 67.86 -5.0439zm-31.458 37.361a48.318 49.196 1.4538 0 1 -0.073 -0.0601 48.318 49.196 1.4538 0 0 0.0684 0.0657zm-0.073-0.0601a48.318 49.196 1.4538 0 1 -1.7792 -1.7188 48.318 49.196 1.4538 0 0 1.6601 1.6202 48.318 49.196 1.4538 0 0 0.12026 0.0972zm-1.7792-1.7188a48.318 49.196 1.4538 0 1 -1.7381 -1.6942 48.318 49.196 1.4538 0 0 1.7381 1.6942zm-1.7381-1.6942a48.318 49.196 1.4538 0 1 -1.5874 -1.8728 48.318 49.196 1.4538 0 0 1.5874 1.8728zm-1.5874-1.8728a48.318 49.196 1.4538 0 1 -1.5526 -1.8491 48.318 49.196 1.4538 0 0 1.5526 1.8491zm-1.5526-1.8491a48.318 49.196 1.4538 0 1 -1.4916 -2.1635 48.318 49.196 1.4538 0 0 1.4916 2.1635zm-1.4916-2.1635a48.318 49.196 1.4538 0 1 -1.268 -1.86 48.318 49.196 1.4538 0 0 1.268 1.86zm-1.268-1.86a48.318 49.196 1.4538 0 1 -1.3068 -2.3654 48.318 49.196 1.4538 0 0 1.3068 2.3654zm-1.3068-2.3654a48.318 49.196 1.4538 0 1 -1.0482 -1.9236 48.318 49.196 1.4538 0 0 1.0482 1.9236zm-1.0482-1.9236a48.318 49.196 1.4538 0 1 -1.0318 -2.4068 48.318 49.196 1.4538 0 0 1.0318 2.4068zm-1.0318-2.4068a48.318 49.196 1.4538 0 1 -0.89327 -2.113 48.318 49.196 1.4538 0 0 0.89327 2.113zm-0.89327-2.113a48.318 49.196 1.4538 0 1 -0.76801 -2.4213 48.318 49.196 1.4538 0 0 0.76801 2.4213zm-0.76801-2.4213a48.318 49.196 1.4538 0 1 -0.70194 -2.2579 48.318 49.196 1.4538 0 0 0.70194 2.2579zm-0.70194-2.2579a48.318 49.196 1.4538 0 1 -0.52124 -2.4633 48.318 49.196 1.4538 0 0 0.52124 2.4633zm-0.52124-2.4633a48.318 49.196 1.4538 0 1 -0.48296 -2.3489 48.318 49.196 1.4538 0 0 0.48296 2.3489zm-0.48296-2.3489a48.318 49.196 1.4538 0 1 -0.2563 -2.3256 48.318 49.196 1.4538 0 0 0.2563 2.3256zm-0.2563-2.3256a48.318 49.196 1.4538 0 1 -0.27186 -2.5811 48.318 49.196 1.4538 0 0 0.27186 2.5811zm-0.27186-2.5811a48.318 49.196 1.4538 0 1 -0.0254 -2.2622 48.318 49.196 1.4538 0 0 0.0254 2.2622zm-0.0254-2.2622a48.318 49.196 1.4538 0 1 -0.017 -2.6355 48.318 49.196 1.4538 0 0 0.017 2.6355zm-0.017-2.6355a48.318 49.196 1.4538 0 1 0.21592 -2.4824 48.318 49.196 1.4538 0 0 -0.21592 2.4824zm0.21592-2.4824a48.318 49.196 1.4538 0 1 0.22168 -2.4137 48.318 49.196 1.4538 0 0 -0.22168 2.4137zm0.22168-2.4137a48.318 49.196 1.4538 0 1 0.45648 -2.442 48.318 49.196 1.4538 0 0 -0.45648 2.442zm0.45648-2.442a48.318 49.196 1.4538 0 1 0.45984 -2.3901 48.318 49.196 1.4538 0 0 -0.45984 2.3901zm0.45984-2.3901a48.318 49.196 1.4538 0 1 0.67583 -2.3205 48.318 49.196 1.4538 0 0 -0.67583 2.3205zm0.67583-2.3205a48.318 49.196 1.4538 0 1 0.71046 -2.3946 48.318 49.196 1.4538 0 0 -0.71046 2.3946zm0.71046-2.3946a48.318 49.196 1.4538 0 1 0.88669 -2.2064 48.318 49.196 1.4538 0 0 -0.88669 2.2064zm0.88669-2.2064a48.318 49.196 1.4538 0 1 0.95337 -2.34 48.318 49.196 1.4538 0 0 -0.95337 2.34zm0.95337-2.34a48.318 49.196 1.4538 0 1 1.1017 -2.1108 48.318 49.196 1.4538 0 0 -1.1017 2.1108zm1.1017-2.1108a48.318 49.196 1.4538 0 1 1.1746 -2.2264 48.318 49.196 1.4538 0 0 -1.1746 2.2264zm1.1746-2.2264a48.318 49.196 1.4538 0 1 1.3831 -2.1122 48.318 49.196 1.4538 0 0 -1.3831 2.1122zm1.3831-2.1122a48.318 49.196 1.4538 0 1 1.3137 -1.9835 48.318 49.196 1.4538 0 0 -1.3137 1.9835zm1.3137-1.9835a48.318 49.196 1.4538 0 1 1.1445 -1.4676 48.318 49.196 1.4538 0 0 -1.1445 1.4676zm1.1445-1.4676a48.318 49.196 1.4538 0 1 0.852 -1.0784 48.318 49.196 1.4538 0 0 -0.0561 0.0601 48.318 49.196 1.4538 0 0 -0.79587 1.0183zm0.852-1.0784a48.318 49.196 1.4538 0 1 0.11431 -0.12298l-0.0101-9e-3a48.318 49.196 1.4538 0 0 -0.10359 0.13209z",fill:l.a.logoPalette.green}),o.a.createElement("path",{className:"char-c-1",d:"m-73.356 64.913-36.609-32.056a48.318 49.196 1.4538 0 0 -0.11456 0.12296 48.318 49.196 1.4538 0 0 -0.85196 1.0784 48.318 49.196 1.4538 0 0 -1.1445 1.4675 48.318 49.196 1.4538 0 0 -1.3021 1.9646 48.318 49.196 1.4538 0 0 -1.3971 2.1339 48.318 49.196 1.4538 0 0 -1.1745 2.2265 48.318 49.196 1.4538 0 0 -1.0971 2.1025 48.318 49.196 1.4538 0 0 -0.97763 2.3991 48.318 49.196 1.4538 0 0 -0.86478 2.1527 48.318 49.196 1.4538 0 0 -0.71045 2.3945 48.318 49.196 1.4538 0 0 -0.67582 2.3205 48.318 49.196 1.4538 0 0 -0.45998 2.3901 48.318 49.196 1.4538 0 0 -0.45644 2.442 48.318 49.196 1.4538 0 0 -0.22169 2.4138 48.318 49.196 1.4538 0 0 -0.21589 2.4824 48.318 49.196 1.4538 0 0 0.0158 2.4832 48.318 49.196 1.4538 0 0 0.0275 2.4276 48.318 49.196 1.4538 0 0 0.27054 2.58 48.318 49.196 1.4538 0 0 0.2546 2.3023 48.318 49.196 1.4538 0 0 0.51164 2.4913 48.318 49.196 1.4538 0 0 0.49165 2.3274 48.318 49.196 1.4538 0 0 0.72147 2.3191 48.318 49.196 1.4538 0 0 0.74888 2.3653 48.318 49.196 1.4538 0 0 0.95835 2.2634 48.318 49.196 1.4538 0 0 0.96061 2.2411 48.318 49.196 1.4538 0 0 1.2158 2.2284 48.318 49.196 1.4538 0 0 1.1354 2.0595 48.318 49.196 1.4538 0 0 1.387 2.0341 48.318 49.196 1.4538 0 0 1.3851 2.0056 48.318 49.196 1.4538 0 0 1.5403 1.8357 48.318 49.196 1.4538 0 0 1.5986 1.8876 48.318 49.196 1.4538 0 0 1.8777 1.8303 48.318 49.196 1.4538 0 0 1.623 1.5655 48.318 49.196 1.4538 0 0 0.0908 0.0761z",fill:l.a.logoPalette.blue})),o.a.createElement("g",{transform:"translate(-236.46 79.375)",id:"char-h-2"},o.a.createElement("rect",{className:"char-h-2",x:"-3.4229",y:"31.453",width:"28.276",height:"82.65",fill:l.a.logoPalette.blue}),o.a.createElement("rect",{className:"char-h-2",x:"-34.975",y:"31.453",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("rect",{className:"char-h-2",x:"-34.995",y:"69.164",width:"61.56",height:"16.131",fill:l.a.logoPalette.green})),o.a.createElement("g",{transform:"translate(-236.46 79.375)",id:"char-r-4"},o.a.createElement("rect",{className:"char-r-4",x:"114.97",y:"31.453",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("path",{className:"char-r-4",transform:"matrix(.0058489 .99998 .99998 -.0060008 0 0)",d:"m80.373 144.54a24.026 23.555 0 0 1 -23.944 23.555 24.026 23.555 0 0 1 -24.107 -23.394l24.025-0.16079z",fill:l.a.logoPalette.green}),o.a.createElement("path",{className:"char-r-4",d:"m115.33 55.467-0.36056 58.636h58.987z",fill:l.a.logoPalette.blue})),o.a.createElement("g",{transform:"translate(-236.46 79.375)",id:"char-a-3"},o.a.createElement("path",{className:"char-a-3",d:"m70.395 29.057-21.398 42.441 42.867 0.0818z",fill:l.a.logoPalette.blue}),o.a.createElement("path",{className:"char-a-3",d:"m48.997 71.499-21.398 42.441 42.867 0.0818z",fill:l.a.logoPalette.pink}),o.a.createElement("path",{className:"char-a-3",d:"m91.865 71.58-21.398 42.441 42.867 0.0818z",fill:l.a.logoPalette.orange})),o.a.createElement("g",{transform:"translate(-236.46 79.375)",id:"char-t-5"},o.a.createElement("rect",{className:"char-t-5",x:"187.43",y:"32.429",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("rect",{className:"char-t-5",x:"172.66",y:"29.518",width:"58.117",height:"16.131",fill:l.a.logoPalette.blue})),o.a.createElement("g",{transform:"translate(57.452 -39.409)",id:"char-a-7"},o.a.createElement("path",{className:"char-a-7",d:"m69.332 148.06-21.398 42.441 42.867 0.0818z",fill:l.a.logoPalette.blue}),o.a.createElement("path",{className:"char-a-7",d:"m47.934 190.5-21.398 42.441 42.867 0.0818z",fill:l.a.logoPalette.pink}),o.a.createElement("path",{className:"char-a-7",d:"m90.801 190.58-21.398 42.441 42.867 0.0818z",fill:"#fab289"})),o.a.createElement("g",{transform:"translate(57.452 -39.409)",id:"char-r-8"},o.a.createElement("rect",{className:"char-r-8",x:"113.34",y:"150.45",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("path",{className:"char-r-8",transform:"matrix(.0058489 .99998 .99998 -.0060008 0 0)",d:"m199.36 142.21a24.026 23.555 0 0 1 -23.944 23.555 24.026 23.555 0 0 1 -24.107 -23.394l24.025-0.16078z",fill:l.a.logoPalette.green}),o.a.createElement("path",{className:"char-r-8",d:"m113.7 174.47-0.36056 58.636h58.987z",fill:l.a.logoPalette.blue})),o.a.createElement("g",{transform:"translate(57.452 -39.409)",id:"char-p-6c"},o.a.createElement("rect",{className:"char-p-6",x:"-26.538",y:"150.45",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("path",{className:"char-p-6",transform:"matrix(.0058489 .99998 .99998 -.0060008 0 0)",d:"m198.52 2.3358a24.026 23.555 0 0 1 -23.944 23.555 24.026 23.555 0 0 1 -24.107 -23.394l24.025-0.16078z",fill:l.a.logoPalette.green})),o.a.createElement("g",{transform:"translate(57.452 -39.409)",id:"char-t-9"},o.a.createElement("rect",{className:"char-t-9",x:"186.29",y:"150.45",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("rect",{className:"char-t-9",x:"171.53",y:"147.54",width:"58.117",height:"16.131",fill:l.a.logoPalette.blue})),o.a.createElement("g",{transform:"translate(57.452 -39.409)",id:"char-s-10"},o.a.createElement("path",{className:"char-s-10",transform:"matrix(-.83636 .54817 -.563 -.82646 0 0)",d:"m-84.306-306.67a39.053 38.766 0 0 1 -38.92 38.766 39.053 38.766 0 0 1 -39.185 -38.501l39.052-0.2646z",fill:"#f2b490"}),o.a.createElement("path",{className:"char-s-10",transform:"matrix(.83636 -.54817 .563 .82646 0 0)",d:"m146.05 307.31a39.053 38.766 0 0 1 -38.92 38.766 39.053 38.766 0 0 1 -39.185 -38.501l39.052-0.26461z",fill:l.a.logoPalette.blue}))))}));s.displayName="Logo";var u=s,f=r("IV1d").version,m=60,p=Object(a.memo)((function(e){var t=e.opacity,r=void 0===t?1:t,a=e.showLinks,c=void 0===a||a;return o.a.createElement(i.b,{query:"500796970",render:function(e){var t=e.site.siteMetadata.githubUrl,n=c?o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null,o.a.createElement(v,{to:"/"},"Home"),o.a.createElement(v,{to:"/documentation"},"Documentation"),o.a.createElement(v,{to:"/blog"},"Blog"),o.a.createElement(E,{href:t},"Github"))):o.a.createElement(o.a.Fragment,null," ");return o.a.createElement(h,{style:{opacity:r},className:"header"},o.a.createElement(g,null,o.a.createElement(d,null,o.a.createElement(u,{height:m}),o.a.createElement(y,null,"v",f)),n))},data:n})}));p.displayName="Header";var h=c.b.div.withConfig({displayName:"header__Container",componentId:"sc-2stej-0"})(["background:",";height:","px;display:flex;top:0px;width:100%;"],l.a.backgrounds.header,m),d=c.b.div.withConfig({displayName:"header__LogoContainer",componentId:"sc-2stej-1"})(["display:flex;width:400px;"]),g=c.b.div.withConfig({displayName:"header__InnerContainer",componentId:"sc-2stej-2"})(["flex:1;margin:0 auto;padding:1.45rem 1.0875rem;display:flex;justify-content:space-between;align-self:stretch;align-items:center;"]),y=c.b.div.withConfig({displayName:"header__VersionIdentifier",componentId:"sc-2stej-3"})(["color:white;text-decoration:none;font-family:",";font-weight:100;margin-left:4px;font-size:14px;display:inline-block;margin-top:","px;color:",";"],l.a.text.fontFamily,m/2,l.a.palette.highlight),b=c.b.div.withConfig({displayName:"header__Links",componentId:"sc-2stej-4"})(["display:flex;flex-direction:row;align-items:center;"]),v=Object(c.b)(i.a).withConfig({displayName:"header__InnerLink",componentId:"sc-2stej-5"})(["color:",";margin-left:8px;margin-right:8px;font-family:",";font-weight:",";font-weight:",";"],l.a.palette.whitish,l.a.text.fontFamily,l.a.header.linkFontSize,l.a.header.linkFontWeight),E=c.b.a.withConfig({displayName:"header__OuterLink",componentId:"sc-2stej-6"})(["color:",";margin-left:8px;margin-right:8px;font-family:",";font-weight:",";font-weight:",";"],l.a.palette.whitish,l.a.text.fontFamily,l.a.header.linkFontSize,l.a.header.linkFontWeight)},bmMU:function(e,t,r){r("SRfc"),r("RW0V"),r("a1Th"),r("h7Nl"),r("OEbY"),r("Oyvg"),r("LK8F"),r("T39b"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("9AAn");var n="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=r.length)return!1;for(l=c;0!=l--;)if(!e(t[l],r[l]))return!1;return!0}if(a&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!r.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],r.get(l.value[0])))return!1;return!0}if(o&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!r.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((c=t.length)!=r.length)return!1;for(l=c;0!=l--;)if(t[l]!==r[l])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(r,s[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],r[s[l]]))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},lw3w:function(e,t,r){var n;e.exports=(n=r("rzlk"))&&n.default||n},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return de}));r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,a,o,i,c=r("17x9"),l=r.n(c),s=r("8+s/"),u=r.n(s),f=r("bmMU"),m=r.n(f),p=r("q1tI"),h=r.n(p),d=r("MgzW"),g=r.n(d),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(E).map((function(e){return E[e]})),"charset"),T="cssText",A="href",O="http-equiv",C="innerHTML",N="itemprop",x="name",S="property",I="rel",z="src",P="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",L="defer",M="encodeSpecialCharacters",_="onChangeClientState",F="titleTemplate",q=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),R=[E.NOSCRIPT,E.SCRIPT,E.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,E.TITLE),r=Q(e,F);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,j);return t||n||void 0},G=function(e){return Q(e,_)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===I&&"canonical"===e[r].toLowerCase()||l===I&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==N||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=g()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;le(E.BODY,n),le(E.HTML,a),ce(f,m);var p={baseTag:se(E.BASE,r),linkTags:se(E.LINK,o),metaTags:se(E.META,i),noscriptTags:se(E.NOSCRIPT,c),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,u)},h={},d={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(d[e]=p[e].oldTags)})),t&&t(),l(e,h,d)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(E.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(E.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[k[r]||r]=e[r],t}),t)},me=function(e,t,r){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[h.a.createElement(E.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=k[e]||e;if(r===C||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(E.BASE,t,n),bodyAttributes:me(y,r,n),htmlAttributes:me(b,a,n),link:me(E.LINK,o,n),meta:me(E.META,i,n),noscript:me(E.NOSCRIPT,c,n),script:me(E.SCRIPT,l,n),style:me(E.STYLE,s,n),title:me(E.TITLE,{title:f,titleAttributes:m},n)}},he=u()((function(e){return{baseTag:X([A,P],e),bodyAttributes:J(y,e),defer:Q(e,L),encode:Q(e,M),htmlAttributes:J(b,e),linkTags:Z(E.LINK,[I,A],e),metaTags:Z(E.META,[x,w,O,S,N],e),noscriptTags:Z(E.NOSCRIPT,[C],e),onChangeClientState:G(e),scriptTags:Z(E.SCRIPT,[z,C],e),styleTags:Z(E.STYLE,[T],e),title:K(e),titleAttributes:J(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),de=(a=he,i=o=function(e){function t(){return D(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case E.TITLE:return Y({},a,((t={})[n.type]=i,t.titleAttributes=Y({},o),t));case E.BODY:return Y({},a,{bodyAttributes:Y({},o)});case E.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((r={})[n.type]=Y({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(V(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=V(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),h.a.createElement(a,n)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);de.renderStatic=de.rewind}).call(this,r("yLpj"))},rzlk:function(e,t,r){"use strict";r.r(t);r("91GP");var n=r("q1tI"),a=r.n(n),o=r("IOVJ");t.default=function(e){var t=e.location,r=e.pageResources;return r?a.a.createElement(o.a,Object.assign({location:t,pageResources:r},r.json)):null}},xfY5:function(e,t,r){"use strict";var n=r("dyZX"),a=r("aagx"),o=r("LZWt"),i=r("Xbzi"),c=r("apmT"),l=r("eeVq"),s=r("kJMx").f,u=r("EemH").f,f=r("hswa").f,m=r("qncB").trim,p=n.Number,h=p,d=p.prototype,g="Number"==o(r("Kuth")(d)),y="trim"in String.prototype,b=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,o=(t=y?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var i,l=t.slice(2),s=0,u=l.length;s<u;s++)if((i=l.charCodeAt(s))<48||i>a)return NaN;return parseInt(l,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(g?l((function(){d.valueOf.call(r)})):"Number"!=o(r))?i(new h(b(t)),r,p):b(t)};for(var v,E=r("nh4g")?s(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;E.length>w;w++)a(h,v=E[w])&&!a(p,v)&&f(p,v,u(h,v));p.prototype=d,d.constructor=p,r("KroJ")(n,"Number",p)}},zG79:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"chart-parts","githubUrl":"https://github.com/Microsoft/chart-parts"}}}}')}}]);
//# sourceMappingURL=ab733b9c4c81bcef38857ecd9d93180ffd1ffdea-513cad2322a946a65620.js.map