(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{162:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return n})),i.d(t,"metadata",(function(){return o})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return d}));var r=i(3),a=i(7),s=(i(0),i(316)),n={id:"index-usinggo",title:"How to collect and process time-series data using Redis and Go",sidebar_label:"RedisTimeSeries and Go",slug:"/howtos/redistimeseries/using-go",authors:["ajeet"]},o={unversionedId:"howtos/redistimeseries/using-go/index-usinggo",id:"howtos/redistimeseries/using-go/index-usinggo",isDocsHomePage:!1,title:"How to collect and process time-series data using Redis and Go",description:"My Image",source:"@site/docs/howtos/redistimeseries/using-go/index-usinggo.mdx",slug:"/howtos/redistimeseries/using-go",permalink:"/howtos/redistimeseries/using-go",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redistimeseries/using-go/index-usinggo.mdx",version:"current",lastUpdatedAt:1637877656,sidebar_label:"RedisTimeSeries and Go",sidebar:"docs",previous:{title:"Processing Time Series data with Redis and .NET",permalink:"/howtos/redistimeseries/using-dotnet"},next:{title:"How to monitor Redis with Prometheus and Grafana for Real-Time Analytics",permalink:"/howtos/redistimeseries/using-prometheus"}},c=[{value:"RedisTimeSeries Go Client",id:"redistimeseries-go-client",children:[{value:"Step 1. Create free Redis Enterprise Cloud account",id:"step-1-create-free-redis-enterprise-cloud-account",children:[]},{value:"Step 2. Create Your subscription",id:"step-2-create-your-subscription",children:[]},{value:"Step 3. Select the right Subscription Plan",id:"step-3-select-the-right-subscription-plan",children:[]},{value:"Step 4. Select cloud vendor",id:"step-4-select-cloud-vendor",children:[]},{value:"Step 5. Click &quot;Create Subscription&quot;",id:"step-5-click-create-subscription",children:[]},{value:"Step 6. Create database",id:"step-6-create-database",children:[]},{value:"Step 7.Installing RedisTimeSeries Go client",id:"step-7installing-redistimeseries-go-client",children:[]},{value:"Step 8. Writing the Go program",id:"step-8-writing-the-go-program",children:[]},{value:"Step 9. Run the Go program",id:"step-9-run-the-go-program",children:[]},{value:"Step 10. Monitor the Redis database",id:"step-10-monitor-the-redis-database",children:[]}]},{value:"References",id:"references",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("img",{alt:"My Image",src:i(683).default})),Object(s.b)("p",null,"RedisTimeSeries is a Redis module that allows Redis to be used as a fast in-memory time series database designed to collect, manage, and deliver time series data at scale. The RedisTimeSeries module shares the performance and simplicity aspects of Redis. Under the hood, it uses efficient data structures such as Radix tree to index data by timestamp, which makes it extremely fast and efficient to run time-aggregate queries."),Object(s.b)("h2",{id:"redistimeseries-go-client"},"RedisTimeSeries Go Client"),Object(s.b)("p",null,"redistimeseries-go is a package that gives developers easy access to the RedisTimeSeries module. Go client for RedisTimeSeries (",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/RedisTimeSeries/redistimeseries"}),"https://github.com/RedisTimeSeries/redistimeseries"),"), based on redigo.Client and ConnPool based on the work of dvirsky and mnunberg on ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/RediSearch/redisearch-go"}),"https://github.com/RediSearch/redisearch-go")),Object(s.b)("p",null,"Follow the steps below to get started with RedisTimeSeries with Go:"),Object(s.b)("h3",{id:"step-1-create-free-redis-enterprise-cloud-account"},"Step 1. Create free Redis Enterprise Cloud account"),Object(s.b)("p",null,"Create your free ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://redis.com/try-free/"}),"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(684).default,title:"image_tooltip"})),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(685).default,title:"image_tooltip"})),Object(s.b)("h3",{id:"step-2-create-your-subscription"},"Step 2. Create Your subscription"),Object(s.b)("p",null,'Next, you will have to create a Redis Enterprise Cloud subscription. In the Redis Enterprise Cloud menu, click "Create your Subscription".'),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(686).default,title:"image_tooltip"})),Object(s.b)("h3",{id:"step-3-select-the-right-subscription-plan"},"Step 3. Select the right Subscription Plan"),Object(s.b)("h4",{id:"select-fixed-plan-for-low-throughout-application-as-for-now"},'Select "Fixed Plan" for low throughout application as for now.'),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(687).default,title:"image_tooltip"})),Object(s.b)("h3",{id:"step-4-select-cloud-vendor"},"Step 4. Select cloud vendor"),Object(s.b)("p",null,"For the cloud provider, select your preferred cloud (for demo purpose)"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(688).default,title:"image_tooltip"})),Object(s.b)("h3",{id:"step-5-click-create-subscription"},'Step 5. Click "Create Subscription"'),Object(s.b)("p",null,'Finally, click on the "Create Subscription" button.'),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(689).default,title:"image_tooltip"})),Object(s.b)("p",null,"You can now verify the subscription as shown below:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(690).default,title:"image_tooltip"})),Object(s.b)("h3",{id:"step-6-create-database"},"Step 6. Create database"),Object(s.b)("p",null,'Click "Create Database". Enter database name and your preferred module.'),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(691).default,title:"image_tooltip"})),Object(s.b)("h3",{id:"step-7installing-redistimeseries-go-client"},"Step 7.Installing RedisTimeSeries Go client"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ go get github.com/RedisTimeSeries/redistimeseries-go\n")),Object(s.b)("h3",{id:"step-8-writing-the-go-program"},"Step 8. Writing the Go program"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),' \npackage main \n\nimport (\n        "fmt"\n        redistimeseries "github.com/RedisTimeSeries/redistimeseries-go"\n)\n\nfunc main() {\n                // Connect to localhost with no password\n        var client = redistimeseries.NewClient("redis-XXXX.c264.ap-south-1-1.ec2.cloud.redislabs.com:port", "add your password here", nil)\n        var keyname = "mytest"\n        _, haveit := client.Info(keyname)\n        if haveit != nil {\n                        client.CreateKeyWithOptions(keyname, redistimeseries.DefaultCreateOptions)\n                        client.CreateKeyWithOptions(keyname+"_avg", redistimeseries.DefaultCreateOptions)\n                        client.CreateRule(keyname, redistimeseries.AvgAggregation, 60, keyname+"_avg")\n        }\n                // Add sample with timestamp from server time and value 100\n        // TS.ADD mytest * 100 \n        _, err := client.AddAutoTs(keyname, 100)\n        if err != nil {\n                fmt.Println("Error:", err)\n        }\n}\n\n')),Object(s.b)("h3",{id:"step-9-run-the-go-program"},"Step 9. Run the Go program"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," go run test.go\n")),Object(s.b)("h3",{id:"step-10-monitor-the-redis-database"},"Step 10. Monitor the Redis database"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'monitor\nOK\n1635490098.157530 [0 52.149.144.189:48430] "TS.INFO" "mytest"\n1635490098.353530 [0 52.149.144.189:48430] "TS.CREATE" "mytest"\n1635490098.553530 [0 52.149.144.189:48430] "TS.CREATE" "mytest_avg"\n1635490098.753530 [0 52.149.144.189:48430] "TS.CREATERULE" "mytest" "mytest_avg" "AGGREGATION" "AVG" "60"\n1635490098.949529 [0 52.149.144.189:48430] "TS.ADD" "mytest" "*" "100"\n')),Object(s.b)("h2",{id:"references"},"References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/howtos/redistimeseries/getting-started/"}),"Getting Started with RedisTimeSeries")),Object(s.b)("li",{parentName:"ul"},"Learn more about RedisTimeSeries in the ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redis.com/redistimeseries/"}),"Quickstart")," tutorial."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.com/blog/build-your-financial-application-on-redistimeseries/"}),"Build Your Financial Application on RedisTimeSeries")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"}),"How to Manage Real-Time IoT Sensor Data in Redis")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=rXynFOrrd-Q"}),"Introduction to RedisTimeSeries - Video"))))}d.isMDXComponent=!0},316:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return m}));var r=i(0),a=i.n(r);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,n=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(i),b=r,m=u["".concat(n,".").concat(b)]||u[b]||p[b]||s;return i?a.a.createElement(m,o(o({ref:t},l),{},{components:i})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,n=new Array(s);n[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var l=2;l<s;l++)n[l]=i[l];return a.a.createElement.apply(null,n)}return a.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"},683:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/redistimeseries-go-668bf9d65a15b47dce649f2e5d3a0bcd.png"},684:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image2-9489babf8640cb592ee26efc43b8c7c8.png"},685:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image3-aeb46bc3583a48c327d9a109cb75c06f.png"},686:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image4-c66aa293e9cf47b78563faeca7e5dfb1.png"},687:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image5-00ef1afda1542e4aaffedbcd52902eca.png"},688:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image6-d406dbc870753273bbf867a6d80ee254.png"},689:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image7-096a05ce08a953dd30698708c555032b.png"},690:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image8-b517f85390bfa5f00856aed3409a27f1.png"},691:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image9-82a8971f206046881ad51b3021d198d4.png"}}]);