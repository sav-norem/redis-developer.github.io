(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(316)),o=n(321),c=n(322),l=(n(317),n(318),{id:"index-golang",title:"Go and Redis",sidebar_label:"Go",slug:"/develop/golang/"}),s={unversionedId:"develop/golang/index-golang",id:"develop/golang/index-golang",isDocsHomePage:!1,title:"Go and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Golang.",source:"@site/docs/develop/golang/index-golang.mdx",slug:"/develop/golang/",permalink:"/develop/golang/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/golang/index-golang.mdx",version:"current",lastUpdatedAt:1637874478,sidebar_label:"Go",sidebar:"docs",previous:{title:"Grouping and Reductions",permalink:"/develop/dotnet/redis-om-dotnet/aggregations/groups/groups"},next:{title:"Ruby and Redis",permalink:"/develop/ruby/"}},d=[{value:"Getting Started",id:"getting-started",children:[{value:"Redis Launchpad",id:"redis-launchpad",children:[]},{value:"Technical Articles &amp; Whitepapers",id:"technical-articles--whitepapers",children:[]}]}],p={toc:d};function u(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Golang."),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"Golang community has built many client libraries that you can find ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.io/clients#go"}),"here"),".\nFor your first steps with Golang and Redis, this article will show how to use the recommended library: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gomodule/redigo"}),"redigo"),"."),Object(r.b)(o.a,{defaultValue:"redigo",values:[{label:"Redigo",value:"redigo"},{label:"Go-Redis",value:"go-redis"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"redigo",mdxType:"TabItem"},Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"redigo")," library is located in the ",Object(r.b)("inlineCode",{parentName:"p"},"https://github.com/gomodule/redigo")," that you must import in your application."),Object(r.b)("h4",{id:"step-1-import-the-redigo-module"},"Step 1. Import the ",Object(r.b)("inlineCode",{parentName:"h4"},"redigo")," module"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," go get github.com/gomodule/redigo/redis\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),' import (\n    "fmt"\n    "context"\n    "github.com/gomodule/redigo/redis"\n )\n')),Object(r.b)("h4",{id:"step-2-create-a-connection-pool"},"Step 2. Create a connection pool"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),' func newPool() *redis.Pool {\n     return &redis.Pool{\n        MaxIdle: 80,\n        MaxActive: 12000,\n        Dial: func() (redis.Conn, error) {\n              c, err := redis.Dial("tcp", ":6379")\n              if err != nil {\n                  panic(err.Error())\n              }\n              return c, err\n          },\n      }\n  }\n')),Object(r.b)("h4",{id:"step-3-write-your-application-code"},"Step 3. Write your application code"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),' package main\n\n import (\n     "fmt"\n\n     "github.com/gomodule/redigo/redis"\n )\n\n var pool = newPool()\n\n func main() {\n\n     client := pool.Get()\n     defer client.Close()\n\n     _, err := client.Do("SET", "mykey", "Hello from redigo!")\n     if err != nil {\n         panic(err)\n     }\n\n     value, err := client.Do("GET", "mykey")\n     if err != nil {\n         panic(err)\n     }\n\n     fmt.Printf("%s \\n", value)\n\n     _, err = client.Do("ZADD", "vehicles", 4, "car")\n     if err != nil {\n         panic(err)\n     }\n     _, err = client.Do("ZADD", "vehicles", 2, "bike")\n     if err != nil {\n         panic(err)\n     }\n\n     vehicles, err := client.Do("ZRANGE", "vehicles", 0, -1, "WITHSCORES")\n     if err != nil {\n         panic(err)\n     }  \n     fmt.Printf("%s \\n", vehicles)\n\n     \n }\n\n func newPool() *redis.Pool {\n     return &redis.Pool{\n         MaxIdle: 80,\n         MaxActive: 12000,\n         Dial: func() (redis.Conn, error) {\n             c, err := redis.Dial("tcp", ":6379")\n             if err != nil {\n                 panic(err.Error())\n             }\n             return c, err\n         },\n     }\n }    \n')),Object(r.b)("p",null,'Find more information about Golang & Redis connections in the "',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/golang/redigo"}),"Redis Connect"),'".')),Object(r.b)(c.a,{value:"go-redis",mdxType:"TabItem"},Object(r.b)("p",null,"Go-redis is a type-safe, Redis client library for Go with support for features like Pub/Sub, sentinel, and pipelining.It is a Redis client able to support a Redis cluster and is designed to store and update slot info automatically with a cluster change. Below are the attractive features of Go-redis:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go-redis has pooling capabilities.(Pools allow you to safely handle go-routines, auto reconnect if any error occurs)"),Object(r.b)("li",{parentName:"ul"},"It supports both standard, OSS cluster AIP, and Sentinel"),Object(r.b)("li",{parentName:"ul"},"Comes with Auto reconnects / Auto-rediscovers cluster slots on error/migration"),Object(r.b)("li",{parentName:"ul"},"Support instrumentations"),Object(r.b)("li",{parentName:"ul"},"Allows for a custom dialer (this is useful for Enterprise)")),Object(r.b)("p",null,"The go-redis library is located in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/go-redis/redis"}),"https://github.com/go-redis/redis")," that you must import in your application."),Object(r.b)("h4",{id:"step-1-run-the-redis-docker-container"},"Step 1. Run the Redis Docker container"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -p 6379:6379 redislabs/redismod\n")),Object(r.b)("h4",{id:"step-2-initialise-the-go-module"},"Step 2. Initialise the Go Module"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," go mod init github.com/my/repo\n")),Object(r.b)("h4",{id:"step-3-install-redisv8"},"Step 3. Install redis/v8"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," go get github.com/go-redis/redis/v8\n")),Object(r.b)("h4",{id:"step-4-create-a-maingo-file"},"Step 4. Create a main.go file"),Object(r.b)("p",null,"Let us create a main.go file and write the following code to check for your connection"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' package main\n\nimport (\n    "fmt"\n    "github.com/go-redis/redis"\n)\n\nfunc main() {\n    fmt.Println("Testing Go-Redis")\n\n    client := redis.NewClient(&redis.Options{\n        Addr: "localhost:6379",\n        Password: "",\n        DB: 0,\n    })\n\n    pong, err := client.Ping().Result()\n    fmt.Println(pong, err)\n\n }\n')),Object(r.b)("h4",{id:"step-5-begin-the-compilation"},"Step 5. Begin the compilation"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{})," go run main.go\n")),Object(r.b)("p",null,"By now, the Go application should successfully connect to the Redis instance and  return a successful PONG response."))),Object(r.b)("h3",{id:"redis-launchpad"},"Redis Launchpad"),Object(r.b)("p",null,"Redis Launchpad is like an \u201cApp Store\u201d for Redis sample apps. You can easily find apps for your preferred frameworks and languages.\nCheck out a few of these apps below, or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://launchpad.redis.com"}),"click here to access the complete list"),"."),Object(r.b)("div",{class:"row text--center"},Object(r.b)("div",{class:"col "},Object(r.b)("div",{className:"ri-container"},Object(r.b)("h4",{id:"rate-limiting-app-in-go"},"Rate-Limiting app in Go"),Object(r.b)("p",null,Object(r.b)("img",{alt:"launchpad",src:n(664).default})),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://launchpad.redis.com/?id=project%3Abasic-redis-rate-limiting-demo-go-lang"}),"Rate Limiting app")," built in Go"))),Object(r.b)("div",{class:"col"},Object(r.b)("div",{className:"ri-container"},Object(r.b)("h4",{id:"leaderboard-app-in-go"},"Leaderboard app in Go"),Object(r.b)("p",null,Object(r.b)("img",{alt:"launchpad",src:n(665).default})),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://launchpad.redis.com/?id=project%3Abasic-redis-leaderboard-demo-python"}),"How to implement leaderboard app")," in Go")))),Object(r.b)("h3",{id:"technical-articles--whitepapers"},"Technical Articles & Whitepapers"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://redis.com/blog/redis-go-designed-improve-performance/"}),"Redis and Golang: Designed to Improve Performance"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://redis.com/docs/ultra-fast-recommendations-engine-using-redis-go/"}),"A High Performance Recommendation Engine with Redis and Go"))))}u.isMDXComponent=!0},318:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(316),o=n(323);n(317),n(59);t.a=function(e){var t=i.a.useState(!1),n=t[0],a=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!n)}})))),n&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(r.a,{components:o.a},e.children)))}},319:function(e,t,n){"use strict";var a=n(0),i=n(320);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},320:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},321:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(319),o=n(324),c=n(60),l=n.n(c),s=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,u=e.groupId,b=e.className,m=Object(r.a)(),g=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(a.useState)(c),O=f[0],j=f[1],v=a.Children.toArray(e.children);if(null!=u){var N=g[u];null!=N&&N!==O&&p.some((function(e){return e.value===N}))&&j(N)}var y=function(e){j(e),null!=u&&h(u,e)},w=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},322:function(e,t,n){"use strict";var a=n(3),i=n(0),r=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),t)}},664:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ratelimitinggo-5f3e156a643400c3124fdbf5309918ae.png"},665:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/leaderboardgo-4445c751ad80e7882e6417caf8c101ee.png"}}]);