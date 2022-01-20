(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{1030:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/analytics_traffic-bd7f720aed16bcacb4d712ce0f2e4a87.png"},297:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(316)),c={id:"index-analytics",title:"Building an Analytics dashboard app using Redis",sidebar_label:"Building an Analytics dashboard app using Redis",slug:"/howtos/analytics",authors:["ajeet"]},i={unversionedId:"howtos/analytics/index-analytics",id:"howtos/analytics/index-analytics",isDocsHomePage:!1,title:"Building an Analytics dashboard app using Redis",description:"An interactive analytics dashboard serves several purposes. They allow you to share data and provide you with all those vital information to make game-changing decisions at a faster pace. Building a real-time dynamic dashboard using a traditional relational database might require a complex set of queries. By using a NoSQL database like Redis, you can build a powerful interactive and dynamic dashboard with a small number of Redis commands.",source:"@site/docs/howtos/analytics/index-analytics.mdx",slug:"/howtos/analytics",permalink:"/howtos/analytics",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/analytics/index-analytics.mdx",version:"current",lastUpdatedAt:1635759777,sidebar_label:"Building an Analytics dashboard app using Redis",sidebar:"docs",previous:{title:"How to Use SSL/TLS With Redis Enterprise",permalink:"/howtos/security/"},next:{title:"Building a Popup Store  application using Redis",permalink:"/howtos/popupstore"}},l=[{value:"Step 1. Prepare the environment",id:"step-1-prepare-the-environment",children:[]},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",children:[]},{value:"Step 3. Setting up backend",id:"step-3-setting-up-backend",children:[]},{value:"Step 4. Install dependencies",id:"step-4-install-dependencies",children:[]},{value:"Step 5. Run Docker Compose to install Redis",id:"step-5-run-docker-compose-to-install-redis",children:[]},{value:"Step 6. Run the backend",id:"step-6-run-the-backend",children:[]},{value:"Step 7. Setting up the frontend",id:"step-7-setting-up-the-frontend",children:[]},{value:"Step 8.  Install dependencies",id:"step-8--install-dependencies",children:[]},{value:"Step 9. Run the frontend",id:"step-9-run-the-frontend",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Cohort data",id:"cohort-data",children:[]},{value:"References",id:"references",children:[]}],o={toc:l};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"An interactive analytics dashboard serves several purposes. They allow you to share data and provide you with all those vital information to make game-changing decisions at a faster pace. Building a real-time dynamic dashboard using a traditional relational database might require a complex set of queries. By using a NoSQL database like Redis, you can build a powerful interactive and dynamic dashboard with a small number of Redis commands. "),Object(b.b)("p",null,"This tutorial shows a basic analytics dashboard app that uses Redis Bitmap written in NodeJS (JavaScript)"),Object(b.b)("div",{class:"text--center"},Object(b.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/Ugym4yUeIhA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(b.b)("h3",{id:"step-1-prepare-the-environment"},"Step 1. Prepare the environment"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Install Node - v12.19.0"),Object(b.b)("li",{parentName:"ul"},"Install NPM - v6.14.8"),Object(b.b)("li",{parentName:"ul"},"Install Docker - v19.03.13 (optional)")),Object(b.b)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/basic-analytics-dashboard-redis-bitmaps-nodejs\n")),Object(b.b)("h3",{id:"step-3-setting-up-backend"},"Step 3. Setting up backend"),Object(b.b)("p",null,"First we will be settin up environmental variables"),Object(b.b)("p",null,"Go to /server folder (cd ./server) and then execute the below command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," cp .env.example .env\n")),Object(b.b)("h3",{id:"step-4-install-dependencies"},"Step 4. Install dependencies"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," npm install\n")),Object(b.b)("h3",{id:"step-5-run-docker-compose-to-install-redis"},"Step 5. Run Docker Compose to install Redis"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," docker network create global\n docker-compose up -d --build\n")),Object(b.b)("h3",{id:"step-6-run-the-backend"},"Step 6. Run the backend"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," npm run dev\n")),Object(b.b)("h3",{id:"step-7-setting-up-the-frontend"},"Step 7. Setting up the frontend"),Object(b.b)("p",null,"Go to /client folder (cd ./client) and then:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," cp .env.example .env\n")),Object(b.b)("h3",{id:"step-8--install-dependencies"},"Step 8.  Install dependencies"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," npm install\n")),Object(b.b)("h3",{id:"step-9-run-the-frontend"},"Step 9. Run the frontend"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," npm run serve\n")),Object(b.b)("p",null,Object(b.b)("img",{alt:"analytics",src:a(1030).default})),Object(b.b)("h3",{id:"how-does-it-work"},"How does it work?"),Object(b.b)("h4",{id:"how-the-data-is-stored"},"How the data is stored:"),Object(b.b)("p",null,"The event data is stored in various keys and various data types."),Object(b.b)("p",null,"For each of time spans:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"year: like 2021"),Object(b.b)("li",{parentName:"ul"},"month: like 2021-03 (means March of 2021)"),Object(b.b)("li",{parentName:"ul"},"day: like 2021-03-03 (means 3rd March of 2021)"),Object(b.b)("li",{parentName:"ul"},"weekOfMonth: like 2021-03/4 (means 4th week of March 2021)"),Object(b.b)("li",{parentName:"ul"},"anytime")),Object(b.b)("p",null,"and for each of scopes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"source"),Object(b.b)("li",{parentName:"ul"},"action"),Object(b.b)("li",{parentName:"ul"},"source + action"),Object(b.b)("li",{parentName:"ul"},"action + page"),Object(b.b)("li",{parentName:"ul"},"userId + action"),Object(b.b)("li",{parentName:"ul"},"global")),Object(b.b)("p",null,"and for each of data types (types):"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"count (Integer stored as String)"),Object(b.b)("li",{parentName:"ul"},"bitmap"),Object(b.b)("li",{parentName:"ul"},"set")),Object(b.b)("p",null,"Is generated key like: "),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," rab:{type}[:custom:{customName}][:user:{userId}][:source:{source}][:action:{action}][:page:{page}]:timeSpan:{timeSpan}\n")),Object(b.b)("p",null,"where values in [] are optional."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"For each generated key like rab:count:*, data is stored like: INCR {key}\nExample:"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," INCR rab:count:action:addToCart:timeSpan:2015-12/3\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"For each generated key like: rab:set:*, data is stored like: SADD {key} {userId}\nExample:"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," SADD rab:set:action:addToCart:timeSpan:2015-12/3 8\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"For each generated key like rab:bitmap:*, data is stored like: SETBIT {key} {userId} 1.\nExample:"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," SETBIT rab:bitmap:action:addToCart:timeSpan:2015-12/3 8 1\n")))),Object(b.b)("h3",{id:"cohort-data"},"Cohort data"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"We store users who register and then bought some products (action order matters).")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"For each buy action in December we check if user performed register action before (register counter must be greater than zero).")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"If so, we set user bit to 1 like: SETBIT rab:bitmap:custom:cohort-buy:timeSpan:{timeSpan} {userId} 1")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"E.g User Id 2 bought 2 products on 2015-12-17. It won't be stored.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"E.g User Id 10 bought 1 product on 2015-12-17 and registered on 2015-12-16.\nIt will be stored like: SETBIT rab:bitmap:custom:cohort-buy:timeSpan:2015-12 10 1.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"We assume that user cannot buy without register."))),Object(b.b)("h4",{id:"retention-data"},"Retention data"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Retention means users who bought on two different dates"),Object(b.b)("li",{parentName:"ul"},"For each buy action we check if user bought more products anytime than bought on particular day (current purchase not included)."),Object(b.b)("li",{parentName:"ul"},"If so, we add user id to set like: SADD rab:set:custom:retention-buy:timeSpan:{timeSpan} {userId}"),Object(b.b)("li",{parentName:"ul"},"E.g User Id 5 bought 3 products on 2015-12-15. His retention won't be stored (products bought on particular day: 2, products bought anytime: 0)."),Object(b.b)("li",{parentName:"ul"},"E.g User Id 3 bought 1 product on 2015-12-15 and before - 1 product on 2015-12-13. His retention will be stored (products bought on particular day: 0, products bought anytime: 1) like: SADD rab:set:custom:retention-buy:timeSpan:2015-12 3.")),Object(b.b)("h4",{id:"how-the-data-is-accessed"},"How the data is accessed:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Total Traffic:")),Object(b.b)("p",null,"December: ",Object(b.b)("inlineCode",{parentName:"p"},"BITCOUNT rab:bitmap:custom:global:timeSpan:2015-12"),"\nX week of December: ",Object(b.b)("inlineCode",{parentName:"p"},"BITCOUNT rab:bitmap:custom:global:timeSpan:2015-12/{X}"),"\nExample:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," BITCOUNT rab:bitmap:custom:global:timeSpan:2015-12/3\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Traffic per Page ({page} is one of: homepage, product1, product2, product3):")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"December: BITCOUNT rab:bitmap:action:visit:page:{page}:timeSpan:2015-12\n")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," BITCOUNT rab:bitmap:action:visit:page:homepage:timeSpan:2015-12\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"X week of December: ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"BITCOUNT rab:bitmap:action:visit:page:{page}:timeSpan:2015-12/{X}\n")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," BITCOUNT rab:bitmap:action:visit:page:product1:timeSpan:2015-12/2\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Traffic per Source ({source} is one of: google, Facebook, email, direct, referral, none):")),Object(b.b)("p",null,"December: "),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"BITCOUNT rab:bitmap:source:{source}:timeSpan:2015-12\n")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," BITCOUNT rab:bitmap:source:referral:timeSpan:2015-12\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"X week of December: ",Object(b.b)("inlineCode",{parentName:"li"},"BITCOUNT rab:bitmap:source:{source}:timeSpan:2015-12/{X}"))),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," BITCOUNT rab:bitmap:source:google:timeSpan:2015-12/1\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Trend traffic ({page} is one of: homepage, product1, product2, product3):")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"December: from ",Object(b.b)("inlineCode",{parentName:"p"},"BITCOUNT rab:bitmap:action:visit:{page}:timeSpan:2015-12-01")," to ",Object(b.b)("inlineCode",{parentName:"p"},"BITCOUNT rab:bitmap:action:visit:{page}:timeSpan:2015-12-31"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"1 Week of December: Similar as above, but from 2015-12-01 to 2015-12-07")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"2 Week of December: Similar as above, but from 2015-12-08 to 2015-12-14")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"3 Week of December: Similar as above, but from 2015-12-15 to 2015-12-21")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"4 Week of December: Similar as above, but from 2015-12-22 to 2015-12-28")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"5 Week of December: Similar as above, but from 2015-12-29 to 2015-12-31")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Example:"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," BITCOUNT rab:bitmap:action:visit:homepage:timeSpan:2015-12-29 => BITCOUNT rab:bitmap:action:visit:homepage:timeSpan:2015-12-30 => BITCOUNT rab:bitmap:action:visit:homepage:timeSpan:2015-12-31\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Total products bought:")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"December: ",Object(b.b)("inlineCode",{parentName:"p"},"GET rab:count:action:buy:timeSpan:2015-12"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"X week of December: ",Object(b.b)("inlineCode",{parentName:"p"},"GET rab:count:action:buy:timeSpan:2015-12/{X}"),"\nExample:"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," GET rab:count:action:buy:timeSpan:2015-12/1\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Total products added to cart:"))),Object(b.b)("p",null,"December: ",Object(b.b)("inlineCode",{parentName:"p"},"GET rab:count:action:addToCart:timeSpan:2015-12"),"\nX week of December: ",Object(b.b)("inlineCode",{parentName:"p"},"GET rab:count:action:addToCart:timeSpan:2015-12/{X}"),"\nExample:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," GET rab:count:action:addToCart:timeSpan:2015-12/1\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Shares of products bought ({productPage} is on of product1, product2, product3):")),Object(b.b)("p",null,"December: ",Object(b.b)("inlineCode",{parentName:"p"},"GET rab:count:action:buy:page:{productPage}:timeSpan:2015-12"),"\nExample:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," GET rab:count:action:buy:page:product3:timeSpan:2015-12\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"X week of December: ",Object(b.b)("inlineCode",{parentName:"p"},"GET rab:count:action:buy:page:{productPage}:timeSpan:2015-12/{X}"),"\nExample:"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," GET rab:count:action:buy:page:product1:timeSpan:2015-12/2\n")))),Object(b.b)("h4",{id:"customer-and-cohort-analysis"},"Customer and Cohort Analysis"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"People who registered: BITCOUNT rab:bitmap:action:register:timeSpan:2015-12"),Object(b.b)("li",{parentName:"ul"},"People who register then bought (order matters): BITCOUNT rab:bitmap:custom:cohort-buy:timeSpan:2015-12"),Object(b.b)("li",{parentName:"ul"},"Dropoff: (People who register then bought / People who register) * 100 ","[%]"),Object(b.b)("li",{parentName:"ul"},"Customers who bought only specified product ({productPage} is one of: product1, product2, product3): ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"SMEMBERS rab:set:action:buy:page:{productPage}:timeSpan:2015-12\n")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," SMEMBERS rab:set:action:buy:page:product2:timeSpan:2015-12\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Customers who bought Product1 and Product2: ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"SINTER rab:set:action:buy:page:product1:timeSpan:anytime rab:set:action:buy:page:product2:timeSpan:anytime\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Customer Retention (customers who bought on the different dates): SMEMBERS rab:set:custom:retention-buy:timeSpan:anytime")),Object(b.b)("h3",{id:"references"},"References"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-analytics-dashboard-redis-bitmaps-nodejs"}),"Complete Source Code")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.io/topics/data-types-intro"}),"Use cases of Bitmaps"))))}p.isMDXComponent=!0},316:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||b;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);