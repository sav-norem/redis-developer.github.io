(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{318:function(e,t,a){"use strict";var i=a(0),s=a.n(i),n=a(316),l=a(323);a(317),a(59);t.a=function(e){var t=s.a.useState(!1),a=t[0],i=t[1];return s.a.createElement("div",{className:"ri-container"},s.a.createElement("div",{className:"ri-description-short"},s.a.createElement("div",{className:"ri-icon"},s.a.createElement("span",{className:"fe fe-zap"})),s.a.createElement("div",{className:"ri-detail"},s.a.createElement("div",{className:"ri-title"},s.a.createElement("a",{href:e.page},e.title)),s.a.createElement("div",{className:"ri-description"},e.description,s.a.Children.count(e.children)>0&&s.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!a)}})))),a&&s.a.createElement("div",{className:"ri-description-long"},s.a.createElement(n.a,{components:l.a},e.children)))}},319:function(e,t,a){"use strict";var i=a(0),s=a(320);t.a=function(){var e=Object(i.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},320:function(e,t,a){"use strict";var i=a(0),s=Object(i.createContext)(void 0);t.a=s},321:function(e,t,a){"use strict";var i=a(0),s=a.n(i),n=a(319),l=a(324),r=a(60),o=a.n(r),c=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,b=e.values,u=e.groupId,p=e.className,m=Object(n.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(i.useState)(r),O=f[0],j=f[1],y=i.Children.toArray(e.children);if(null!=u){var w=h[u];null!=w&&w!==O&&b.some((function(e){return e.value===w}))&&j(w)}var v=function(e){j(e),null!=u&&g(u,e)},k=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},p)},b.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(i.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},322:function(e,t,a){"use strict";var i=a(3),s=a(0),n=a.n(s);t.a=function(e){var t=e.children,a=e.hidden,s=e.className;return n.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:a,className:s}),t)}},446:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"},447:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},448:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image1-48adc1ba36d743f772f90d928bda7f8c.png"},449:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-8b9cf781b056b669f511fa133819dd5f.png"},450:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image4-d482a018ff250b158ba4385f7c979e18.png"},451:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image5-3ebe399cf1398a602712822c03d4a788.png"},452:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image6-7058106958b5a24914c05103bc7d88fd.png"},453:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-79c4c4d9546dd80ebd8062b70ef500a2.png"},454:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image8-255c00d6b6fb56a2bd754802235fb960.png"},455:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image10-da3bed0881c02d2e8c74dc6e81c61b5e.png"},456:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image12-897a40ac2cfb18d5f2a9a6bb210d3984.png"},457:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image13-46436ba9fb14ed6ad9888e7bc837b7f4.png"},458:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image14-9bb714dfb103bf2c0c775a37101bbe82.png"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var i=a(3),s=a(7),n=(a(0),a(316)),l=(a(321),a(322),a(317),a(318),{id:"index-browser",title:"Visualize Redis database keys using RedisInsight Browser Tool",sidebar_label:"Visualize Redis database keys using RedisInsight Browser Tool",slug:"/explore/redisinsight/browser",authors:["ajeet"]}),r={unversionedId:"explore/redisinsight/browser/index-browser",id:"explore/redisinsight/browser/index-browser",isDocsHomePage:!1,title:"Visualize Redis database keys using RedisInsight Browser Tool",description:"RedisInsight is a 100% free Redis GUI that allows you to visualise, monitor, and optimize while developing your applications with Redis. It provides an intuitive and efficient GUI for Redis allowing developers like you to interact with your databases and manage your data.",source:"@site/docs/explore/redisinsight/browser/index-browser.mdx",slug:"/explore/redisinsight/browser",permalink:"/explore/redisinsight/browser",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/browser/index-browser.mdx",version:"current",lastUpdatedAt:1637878347,sidebar_label:"Visualize Redis database keys using RedisInsight Browser Tool",sidebar:"docs",previous:{title:"Getting Started with RedisInsight",permalink:"/explore/redisinsight/getting-started"},next:{title:"Debug Redis using RedisInsight Slowlog Debugging Tool",permalink:"/explore/redisinsight/slowlog"}},o=[{value:"Step 1: Create a Redis Database",id:"step-1-create-a-redis-database",children:[]},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",children:[]},{value:"Step 3: Open &quot;Browser Tool&quot;",id:"step-3-open-browser-tool",children:[]},{value:"Step 4: Importing keys",id:"step-4-importing-keys",children:[]},{value:"Step 5: Cloning the repository",id:"step-5-cloning-the-repository",children:[]},{value:"Step 6. Adding a new key",id:"step-6-adding-a-new-key",children:[]},{value:"Step 7. Searching the hash key",id:"step-7-searching-the-hash-key",children:[]},{value:"Step 8: Filter keys by Data Type",id:"step-8-filter-keys-by-data-type",children:[]},{value:"Step 9: Setting up the Expiry value",id:"step-9-setting-up-the-expiry-value",children:[]},{value:"Step 10: Using CLI",id:"step-10-using-cli",children:[]},{value:"Further References",id:"further-references",children:[]}],c={toc:o};function d(e){var t=e.components,l=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"RedisInsight is a 100% free Redis GUI that allows you to visualise, monitor, and optimize while developing your applications with Redis. It provides an intuitive and efficient GUI for Redis allowing developers like you to interact with your databases and manage your data. "),Object(n.b)("p",null,"RedisInsight Browser lets you explore keys in your redis server. You can add, edit and delete a key. You can even update the key expiry and copy the key name to be used in different places of the application."),Object(n.b)("p",null,"In order to understand the capabilities of the browser tool, let us take a simple example and demonstrate capabilities of each of browse tool options:"),Object(n.b)("h2",{id:"step-1-create-a-redis-database"},"Step 1: Create a Redis Database"),Object(n.b)("p",null,Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.redis.com/create"}),"Follow this link "),"to create Redis database"),Object(n.b)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),Object(n.b)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),Object(n.b)("p",null,Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"}),"Click this link ")," to access a form that allows you to select the operating system of your choice."),Object(n.b)("p",null,Object(n.b)("img",{alt:"My Image",src:a(446).default})),Object(n.b)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),Object(n.b)("p",null,'Select "Connect to a Redis database"\n',Object(n.b)("img",{alt:"My Image",src:a(447).default})),Object(n.b)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password.  Then click \u201cADD REDIS DATABASE\u201d."),Object(n.b)("h2",{id:"step-3-open-browser-tool"},'Step 3: Open "Browser Tool"'),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(448).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"step-4-importing-keys"},"Step 4: Importing keys"),Object(n.b)("p",null,"Let us import a user database( 6k keys). This dataset contains users stored as Redis Hash."),Object(n.b)("h3",{id:""}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Users")),Object(n.b)("p",null,"The user hashes contain the following fields:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"user:id")," : The key of the hash."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"first_name")," : First Name."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"last_name")," : Last name."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"email")," : email address."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"gender")," : Gender (male/female)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ip_address")," : IP address."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"country")," : Country Name."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"country_code")," : Country Code."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"city")," : City of the user."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"longitude")," : Longitude of the user."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"latitude")," : Latitude of the user."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"last_login")," : EPOC time of the last login.")),Object(n.b)("h2",{id:"step-5-cloning-the-repository"},"Step 5: Cloning the repository"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/redis-datasets\n cd redis-datasets/user-database\n")),Object(n.b)("p",null,"Importing the user database:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," redis-cli -h localhost -p 6379 < ./import_users.redis\n")),Object(n.b)("p",null,"Refresh the keys database by clicking as shown below:"),Object(n.b)("p",null,"Click on \u201cScan More\u201d to scan all 6k keys"),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(449).default,title:"image_tooltip"})),Object(n.b)("p",null,"You can get a real-time view of the data in your Redis database as shown below:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(450).default,title:"image_tooltip"})),Object(n.b)("p",null,"Select any key in the key database and the results gets displayed in the right hand side that includes Fields and values."),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(451).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"step-6-adding-a-new-key"},"Step 6. Adding a new key"),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(452).default,title:"image_tooltip"})),Object(n.b)("p",null,"Enter key name, field and value."),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(453).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"step-7-searching-the-hash-key"},"Step 7. Searching the hash key"),Object(n.b)("p",null,"You can search the key by \u201cuser:9999\u201d and you will see the result."),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(454).default,title:"image_tooltip"})),Object(n.b)("p",null,"Let us add fields for user:9999 as shown below:"),Object(n.b)("p",null,"You can even search by adding \u201c*\u201d and typing the first few letters."),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(455).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"step-8-filter-keys-by-data-type"},"Step 8: Filter keys by Data Type"),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(456).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"step-9-setting-up-the-expiry-value"},"Step 9: Setting up the Expiry value"),Object(n.b)("p",null,"Let us set it to 2 seconds and you won\u2019t be able to search for the same key as it gets expired."),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(457).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"step-10-using-cli"},"Step 10: Using CLI"),Object(n.b)("p",null,"RedisInsight CLI lets you run commands against a redis server. You don\u2019t need to remember the syntax - the integrated help shows you all the arguments and validates your command as you type."),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),'> HMGET user:3333 first_name last_name city\n\n1) "Myrlene"\n2) "McGrane"\n3) "Qinghu"\n')),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(458).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"further-references"},"Further References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Slowlog Configuration using RedisInsight")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Explore Redis keys using RedisInsight browser tool")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Analysis using RedisInsight"))),Object(n.b)("h2",{id:"-1"}),Object(n.b)("div",null,Object(n.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(n.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}d.isMDXComponent=!0}}]);