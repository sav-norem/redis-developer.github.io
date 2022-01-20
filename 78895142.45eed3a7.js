(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),s=(r(0),r(316)),i=r(321),c=r(322),l=(r(317),r(318),{id:"index-rust",title:"Rust and Redis",sidebar_label:"Rust",slug:"/develop/rust/"}),o={unversionedId:"develop/rust/index-rust",id:"develop/rust/index-rust",isDocsHomePage:!1,title:"Rust and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Rust.",source:"@site/docs/develop/rust/index-rust.mdx",slug:"/develop/rust/",permalink:"/develop/rust/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/rust/index-rust.mdx",version:"current",lastUpdatedAt:1637874478,sidebar_label:"Rust"},u=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Step 1. Install Rust",id:"step-1-install-rust",children:[]},{value:"Step 2. Configure your current shell:",id:"step-2-configure-your-current-shell",children:[]},{value:"Step 3. Verify Rust compiler:",id:"step-3-verify-rust-compiler",children:[]},{value:"Step 4. Creating Cargo.toml with Redis dependency:",id:"step-4-creating-cargotoml-with-redis-dependency",children:[]},{value:"Step 5. Clone the repository",id:"step-5-clone-the-repository",children:[]},{value:"Step 6. Run the application",id:"step-6-run-the-application",children:[]},{value:"Further References",id:"further-references",children:[]}],d={toc:u};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Rust."),Object(s.b)("h3",{id:"getting-started"},"Getting Started"),Object(s.b)("p",null,"Rust community has built many client libraries that you can find here. For your first steps with Java and Rust, this article will show how to use a popula library: redis-rs\nThe web page \u201cRedis Enterprise and Rust\u201d will help you to get started with Redis Enterprise and Rust in a much easier manner.\nredis-rs is a rust implementation of a Redis client library.\nIt exposes a general purpose interface to Redis and also provides specific helpers for commonly used functionality."),Object(s.b)(i.a,{defaultValue:"redis-rs",values:[{label:"Redis-rs",value:"redis-rs"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"redis-rs",mdxType:"TabItem"},Object(s.b)("h3",{id:"step-1-install-rust"},"Step 1. Install Rust"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),Object(s.b)("h3",{id:"step-2-configure-your-current-shell"},"Step 2. Configure your current shell:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," source $HOME/.cargo/env\n")),Object(s.b)("h3",{id:"step-3-verify-rust-compiler"},"Step 3. Verify Rust compiler:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," rustc --version\n rustc 1.49.0\n")),Object(s.b)("h3",{id:"step-4-creating-cargotoml-with-redis-dependency"},"Step 4. Creating Cargo.toml with Redis dependency:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' [dependencies]\n redis = "0.8.0"\n')),Object(s.b)("h3",{id:"step-5-clone-the-repository"},"Step 5. Clone the repository"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/redis-rust-getting-started\n")),Object(s.b)("h3",{id:"step-6-run-the-application"},"Step 6. Run the application"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," cargo run\n")),Object(s.b)("h3",{id:"further-references"},"Further References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/lp/redis-enterprise-rust/"}),"Redis Enterprise and Rust")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/redis-developer/redis-rust-getting-started"}),"Getting Started with Redis & Rust"))))))}p.isMDXComponent=!0},318:function(e,t,r){"use strict";var a=r(0),n=r.n(a),s=r(316),i=r(323);r(317),r(59);t.a=function(e){var t=n.a.useState(!1),r=t[0],a=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!r)}})))),r&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(s.a,{components:i.a},e.children)))}},319:function(e,t,r){"use strict";var a=r(0),n=r(320);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},320:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},321:function(e,t,r){"use strict";var a=r(0),n=r.n(a),s=r(319),i=r(324),c=r(60),l=r.n(c),o=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(s.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(a.useState)(c),g=v[0],O=v[1],j=a.Children.toArray(e.children);if(null!=p){var y=h[p];null!=y&&y!==g&&d.some((function(e){return e.value===y}))&&O(y)}var R=function(e){O(e),null!=p&&f(p,e)},N=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},b)},d.map((function(e){var t=e.value,r=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return R(t)},onClick:function(){R(t)}},r)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},322:function(e,t,r){"use strict";var a=r(3),n=r(0),s=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return s.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:r,className:n}),t)}}}]);