(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(128),l=a(137);a(129),a(55);t.a=function(e){var t=r.a.useState(!1),a=t[0],n=t[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(i.a,{components:l.a},e.children)))}},133:function(e,t,a){"use strict";var n=a(0),r=a(134);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},134:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},135:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(133),l=a(130),o=a(56),s=a.n(o),c=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,u=e.values,p=e.groupId,b=e.className,m=Object(i.a)(),h=m.tabGroupChoices,v=m.setTabGroupChoices,j=Object(n.useState)(o),O=j[0],g=j[1],f=n.Children.toArray(e.children);if(null!=p){var y=h[p];null!=y&&y!==O&&u.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=p&&v(p,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},b)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},136:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},207:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ratelimiting-0a76b60e4b3861e1190062d5029b86d9.png"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(128)),l=a(135),o=a(136),s=(a(129),a(131),{id:"index-ratelimiting",title:"How to build a Rate Limiter using Redis",sidebar_label:"How to build a Rate Limiter using Redis",slug:"/howtos/ratelimiting"}),c={unversionedId:"howtos/RateLimiting/index-ratelimiting",id:"howtos/RateLimiting/index-ratelimiting",isDocsHomePage:!1,title:"How to build a Rate Limiter using Redis",description:"My Image",source:"@site/docs/howtos/RateLimiting/index-ratelimiting.mdx",slug:"/howtos/ratelimiting",permalink:"/howtos/ratelimiting",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/RateLimiting/index-ratelimiting.mdx",version:"current",sidebar_label:"How to build a Rate Limiter using Redis",sidebar:"docs",previous:{title:"How to build a real-time leaderboard system using Redis",permalink:"/howtos/leaderboard"}},d=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Run docker compose or install redis manually",id:"run-docker-compose-or-install-redis-manually",children:[]},{value:"Setup and run",id:"setup-and-run",children:[]},{value:"Pre-requisite",id:"pre-requisite-1",children:[]},{value:"Clone the repository",id:"clone-the-repository-1",children:[]},{value:"Copy file and set proper data inside",id:"copy-file-and-set-proper-data-inside",children:[]},{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Run docker compose or install redis manually",id:"run-docker-compose-or-install-redis-manually-1",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Pre-requisite",id:"pre-requisite-2",children:[]},{value:"Clone the repository",id:"clone-the-repository-2",children:[]},{value:"Run docker compose or install redis manually",id:"run-docker-compose-or-install-redis-manually-2",children:[]},{value:"If you install redis manually open src/main/resources/ folder and provide the values for environment variables in application.properties",id:"if-you-install-redis-manually-open-srcmainresources-folder-and-provide-the-values-for-environment-variables-in-applicationproperties",children:[]},{value:"else",id:"else",children:[]},{value:"Setup and run",id:"setup-and-run-1",children:[]}],u={toc:d};function p(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(207).default})),Object(i.b)("p",null,"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes like sharing access to limited resources or limit the number of requests made to an API endpoint and respond with a 429 status code. In this tutorial, we will see how to implement Rate Limiting using various programming languages:"),Object(i.b)(l.a,{defaultValue:"Python",values:[{label:"Python",value:"Python"},{label:"NodeJS",value:"NodeJS"},{label:"Java",value:"Java"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"Python",mdxType:"TabItem"},Object(i.b)("h3",{id:"pre-requisite"},"Pre-requisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Python "),Object(i.b)("li",{parentName:"ul"},"Docker"),Object(i.b)("li",{parentName:"ul"},"Docker Compose")),Object(i.b)("h3",{id:"clone-the-repository"},"Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/redis-developer/redis-rate-limiting-python.git\n")),Object(i.b)("h3",{id:"run-docker-compose-or-install-redis-manually"},"Run docker compose or install redis manually"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker network create global\ndocker-compose up -d --build\n")),Object(i.b)("p",null," If you install redis manually open django-backend/configuration folder and copy ",Object(i.b)("inlineCode",{parentName:"p"},".env.example")," to create ",Object(i.b)("inlineCode",{parentName:"p"},".env"),". And provide the values for environment variables"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"- REDIS_HOST: Redis server host\n- REDIS_PORT: Redis server port\n- REDIS_DB: Redis server db index\n- REDIS_PASSWORD: Redis server password\n")),Object(i.b)("h3",{id:"setup-and-run"},"Setup and run"),Object(i.b)("p",null,"Install python, pip and venv (on mac: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://installpython3.com/mac/"}),"https://installpython3.com/mac/"),")"),Object(i.b)("p",null,"Use python version: 3.8"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"python3 -m venv venv\nsource ./venv/bin/activate\npip3 install -r requirements.txt\npython3 manage.py collectstatic\npython3 manage.py runserver\n"))),Object(i.b)(o.a,{value:"NodeJS",mdxType:"TabItem"},Object(i.b)("h3",{id:"pre-requisite-1"},"Pre-requisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Node - v12.19.0"),Object(i.b)("li",{parentName:"ul"},"NPM - v6.14.8"),Object(i.b)("li",{parentName:"ul"},"Docker - v19.03.13 (optional)")),Object(i.b)("h3",{id:"clone-the-repository-1"},"Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/redis-developer/basic-redis-rate-limiting-demo-nodejs/\n\n")),Object(i.b)("h3",{id:"copy-file-and-set-proper-data-inside"},"Copy file and set proper data inside"),Object(i.b)("p",null,"Copy .env.example to .env and make the changes as per your environment"),Object(i.b)("h3",{id:"install-dependencies"},"Install dependencies"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm cache clean && npm install\n")),Object(i.b)("h3",{id:"run-docker-compose-or-install-redis-manually-1"},"Run docker compose or install redis manually"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker network create global\ndocker-compose up -d --build\n``\n\n```bash\nnpm run dev\n\n")),Object(i.b)("h3",{id:"deployment"},"Deployment"),Object(i.b)("p",null,"To make deploys work, you need to create free account in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redislabs.com/try-free/"}),"https://redislabs.com/try-free/")," and get Redis' instance informations - REDIS_ENDPOINT_URI and REDIS_PASSWORD. You must pass them as environmental variables.")),Object(i.b)(o.a,{value:"Java",mdxType:"TabItem"},Object(i.b)("h3",{id:"pre-requisite-2"},"Pre-requisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Java"),Object(i.b)("li",{parentName:"ul"},"Docker"),Object(i.b)("li",{parentName:"ul"},"Docker Compose")),Object(i.b)("h3",{id:"clone-the-repository-2"},"Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/deliveryweb/redis-rate-limiting-java.git\n")),Object(i.b)("h3",{id:"run-docker-compose-or-install-redis-manually-2"},"Run docker compose or install redis manually"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker network create global\ndocker-compose up -d --build\n")),Object(i.b)("h3",{id:"if-you-install-redis-manually-open-srcmainresources-folder-and-provide-the-values-for-environment-variables-in-applicationproperties"},"If you install redis manually open src/main/resources/ folder and provide the values for environment variables in application.properties"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"spring.redis.database=\nspring.redis.host=\nspring.redis.port=\nspring.redis.password=\nspring.redis.timeout=\n")),Object(i.b)("h3",{id:"else"},"else"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"copy .env.example .env\nexport $(cat .env | xargs)\n")),Object(i.b)("h3",{id:"setup-and-run-1"},"Setup and run"),Object(i.b)("p",null,"Install gradle (on mac: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gradle.org/install/"}),"https://gradle.org/install/"),")"),Object(i.b)("p",null,"Install JDK (on mac: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm"}),"https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm"),")"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"gradle wrapper\n./gradlew build\n./gradlew run\n")))))}p.isMDXComponent=!0}}]);