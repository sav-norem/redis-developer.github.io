(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{177:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(175),r=a(183);a(176),a(55);t.a=function(e){var t=i.a.useState(!1),a=t[0],n=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(s.a,{components:r.a},e.children)))}},178:function(e,t,a){"use strict";var n=a(0),i=a(179);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},179:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},180:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(178),r=a(182),o=a(56),l=a.n(o),c=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,m=e.values,u=e.groupId,b=e.className,p=Object(s.a)(),h=p.tabGroupChoices,y=p.setTabGroupChoices,g=Object(n.useState)(o),f=g[0],v=g[1],O=n.Children.toArray(e.children);if(null!=u){var j=h[u];null!=j&&j!==f&&m.some((function(e){return e.value===j}))&&v(j)}var w=function(e){v(e),null!=u&&y(u,e)},N=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},b)},m.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(O.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},181:function(e,t,a){"use strict";var n=a(3),i=a(0),s=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return s.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},337:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image2-27216a26971f2f6b8f036882c119e8c4.png"},338:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image4-5744e101409b891dd85eeeea952bfdb5.png"},339:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image5-e817d057775d7cb941daa2733683e366.png"},340:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image6-7a63982c6a0316c109aec3023c2d8e82.png"},341:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-70639e5f4d56d0a91f081437e4d49eff.png"},342:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image11-1d8ac34f7e15df0de930da55cd1ef694.png"},343:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image13-3de15d46b6a15609895352c112953d2d.png"},344:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image14-1d8ac34f7e15df0de930da55cd1ef694.png"},345:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image15-4e9b0da6f308bf8770f875103f86511d.png"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),s=(a(0),a(175)),r=(a(180),a(181),a(176),a(177),{id:"index-memoryanalyzer",title:"Reduce Redis Memory usage using Memory Analyzer",sidebar_label:"Reduce Redis Memory usage with Memory Analyzer",slug:"/explore/redisinsight/memoryanalyzer"}),o={unversionedId:"explore/redisinsight/memoryanalyzer/index-memoryanalyzer",id:"explore/redisinsight/memoryanalyzer/index-memoryanalyzer",isDocsHomePage:!1,title:"Reduce Redis Memory usage using Memory Analyzer",description:"RedisInsight, a free web-based GUI management interface for Redis, offers several tools to manage and optimize Redis, with the main focus on memory optimization. RedisInsight Memory analysis helps you analyze your redis instance and helps in reducing memory usage and improving application performance.",source:"@site/docs/explore/redisinsight/memoryanalyzer/index-memoryanalyzer.mdx",slug:"/explore/redisinsight/memoryanalyzer",permalink:"/explore/redisinsight/memoryanalyzer",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/memoryanalyzer/index-memoryanalyzer.mdx",version:"current",sidebar_label:"Reduce Redis Memory usage with Memory Analyzer",sidebar:"docs",previous:{title:"Debuggin and Tracing Redis using Slowlog Configuration",permalink:"/explore/redisinsight/slowlog"},next:{title:"Manage Your Redis Cluster using RedisInsight GUI",permalink:"/explore/redisinsight/cluster"}},l=[{value:"Step 1: Create a Redis database",id:"step-1-create-a-redis-database",children:[]},{value:"Step 2: Setup RedisInsight",id:"step-2-setup-redisinsight",children:[]},{value:"Step 3: Connect to Redis database",id:"step-3-connect-to-redis-database",children:[]},{value:"Step 4: Importing user sample datasets",id:"step-4-importing-user-sample-datasets",children:[]},{value:"Keyspace Summary",id:"keyspace-summary",children:[]},{value:"Recommendations",id:"recommendations",children:[]},{value:"Memory Analyser",id:"memory-analyser",children:[]},{value:"Additional Links",id:"additional-links",children:[]}],c={toc:l};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"RedisInsight, a free web-based GUI management interface for Redis, offers several tools to manage and optimize Redis, with the main focus on memory optimization. RedisInsight Memory analysis helps you analyze your redis instance and helps in reducing memory usage and improving application performance."),Object(s.b)("p",null,"Let\u2019s assume that you noticed high memory usage out of your redis instance and you want to analyze if there is any specific cache/key pattern which is consuming most of the memory or not using the redis in a very efficient way. RedisInsight is a great tool that can help you analyze memory used by redis by keys or key patterns, by expiry, by data types or or the internal encoding. Analysis can be done in two ways: online and offline mode.(discussed later in the tutorial)."),Object(s.b)("p",null,"This tutorial demonstrates the below list of features under RedisInsight:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Memory Overview"),Object(s.b)("li",{parentName:"ul"},"Keyspace Summary"),Object(s.b)("li",{parentName:"ul"},"Recommendations"),Object(s.b)("li",{parentName:"ul"},"Memory Analyzer")),Object(s.b)("p",null,"Follow the below steps to see how Memory analysis can be performed over Redis Database(RDB) dumps using RedisInsight."),Object(s.b)("h2",{id:"step-1-create-a-redis-database"},"Step 1: Create a Redis database"),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.redislabs.com/create"}),"Follow this link "),"to create Redis database"),Object(s.b)("h2",{id:"step-2-setup-redisinsight"},"Step 2: Setup RedisInsight"),Object(s.b)("p",null,"I assume that Docker is already installed in your local system.\nAs we will be analysing the *.rdb dumps, it\u2019s recommended to add a mount point using the -\u201dv\u201d parameter as shown below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," mkdir memorytest\n docker run -d -v /temp/memorytest:/db -p 8001:8001 redislabs/redisinsight:latest\n")),Object(s.b)("h2",{id:"step-3-connect-to-redis-database"},"Step 3: Connect to Redis database"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(337).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-4-importing-user-sample-datasets"},"Step 4: Importing user sample datasets"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/redis-datasets\n cd redis-datasets/user-database\n")),Object(s.b)("p",null,"Execute the below command to import users database"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' redis-cli -h 192.168.1.9 -p 6379 < ./import_users.redis\n ..\n ..\n "5996 Users Created"\n')),Object(s.b)("p",null,"Under RedisInsight GUI, click on \u201cMemory Analysis\u201d under Browser.\nBefore you click on \u201cAnalyze Now\u201d, ensure that you store dump.rdb at the right location.\nIf you\u2019re on Mac, redis dump file is located under /usr/local/var/db/redis"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," tree /usr/local/var/db \n /usr/local/var/db\n \u2514\u2500\u2500 redis\n   \u2514\u2500\u2500 dump.rdb\n\n 1 directory, 1 file\n\n")),Object(s.b)("p",null,"Copy the dump.rdb to /memorytest/ location. You can also verify if that file is available in the container by using docker exec command."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," ls\n bulk_operation     dump.rdb        queries.log     redisinsight.log\n dropbox            profiler_logs       redisinsight.db     rsnaps\n")),Object(s.b)("p",null,"Memory analysis in RedisInsight is done in two different ways:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Online mode")," - In this mode, RedisInsight downloads a rdb file from your connected redis instance and analyzes it to create a temp file with all the keys and meta data required for analysis. "),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Offline mode")," - In this mode, RedisInsight analyzes your redis backup files. These files can either be present in your system or on s3. RedisInsight accepts a list of rdb files given to it and analyzes all the information required from these files instead of downloading it from your redis instance. ")),Object(s.b)("p",null,"Choose the offline analysis approach if you have a RDB Backup file that you want to analyze. "),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(338).default,title:"image_tooltip"})),Object(s.b)("p",null,"Enter the right location of the RDB backup file as shown below:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(339).default,title:"image_tooltip"})),Object(s.b)("p",null,"Click \u201cProceed\u201d."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(340).default,title:"image_tooltip"})),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"If you are using online memory analysis, you will want to have enough space to store the RDB file for your Redis database. This is usually 10-50% of the Redis instance\u2019s memory usage."))),Object(s.b)("h2",{id:"keyspace-summary"},"Keyspace Summary"),Object(s.b)("p",null,"Keyspace Summary identifies the top key patterns from the set of keys in descending order of memory. This helps you identify which key patterns are consuming most of your memory and what are the top keys for that pattern. You can add your own key patterns in order to identify their memory usage and the top keys for that key pattern."),Object(s.b)("p",null,"Click \u201cKeyspace\u201d and you will see the total memory consumed by each of the top key patterns as shown below:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(341).default,title:"image_tooltip"})),Object(s.b)("p",null,"You can click on each of these keys patterns(as shown above) and check the memory usage."),Object(s.b)("h2",{id:"recommendations"},"Recommendations"),Object(s.b)("p",null,"RedisInsight provides recommendations on how you can save your memory. The recommendations are specially curated according to your Redis instance. These recommendations have been formed based on industry standards."),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Combine Small Strings to Hash"),Object(s.b)("p",{parentName:"div"},"Small key value pairs in redis consume a lot of memory because a top level key has several overheads. If you do not need an expiry on these keys, you can combine multiple keys into a larger hash. As long as the hash has less than 512 elements and the size of each element is within 64 bytes, you will save a significant amount of memory.\nRead Instagram's blog post on how they used this technique to save memory\nOnce you combine strings into a larger hash, evaluate hash-max-ziplist-entries and hash-max-ziplist-value settings. You may want to increase them to save even more memory."),Object(s.b)("p",{parentName:"div"},"Performance comes with a cost. By converting the strings to hash, we will be saving on a lot of memory because it saves only the string value and no extra information like: idle time, expiration, object reference count, and encoding related to it. But if we want the key with the expiration value, we can't associate it with a hash structure as expiration is not available. Read More"))),Object(s.b)("p",null,"Let us add 1 million keys using redis-benchmark tool:"),Object(s.b)("p",null,"Fill 127.0.0.1:6379 with about 1 million keys only using the SET test:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," redis-benchmark -t set -n 1000000 -r 100000000\n \u2026\n 100.000% <= 1011.199 milliseconds (cumulative count 1000000)\n\nSummary:\n throughput summary: 13451.89 requests per second\n latency summary (msec):\n         avg       min       p50       p95       p99       max\n       3.600     0.616     3.007     5.591     7.567  1011.199\n\n")),Object(s.b)("p",null,"Click on Recommendations and you will see the below messages"),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Avoid unnecessary Long Keys "),Object(s.b)("p",{parentName:"div"},"You can save some memory by avoiding large keys. In general, you should always prefer descriptive keys. This recommendation only applies if you have millions of very large keys. In a well written application, switching to shorter keys usually involves updating a few constant strings in the application code.\nThe trade off of converting large keys to smaller keys is that large Keys were more descriptive then shortened keys, hence when reading through your database you may find the keys less relatable. Read More\nKey patterns that need to be modified:\nkey:*"))),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(342).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"memory-analyser"},"Memory Analyser"),Object(s.b)("p",null,"Memory Analyzer lets you search a key or key patterns and get related information regarding it with other stats. You can apply various filters and aggregations using our advance filters feature."),Object(s.b)("p",null,"When the ",Object(s.b)("inlineCode",{parentName:"p"},"analyze-memory")," button is clicked, it connects to the redis instance and takes a point-in-time snapshot of the database. ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.redislabs.com/latest/ri/using-redisinsight/memory-analysis/#how-memory-analysis-works"}),"Here\u2019s a link")," that deep dive into SYNC and DUMP approach"),Object(s.b)("p",null,"Considering 1 million keys only using the SET command, you can view the memory analyzer section and click \u201cAdvanced Filters\u201d."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(343).default,title:"image_tooltip"})),Object(s.b)("p",null,"The advanced filters allow you to choose data type, encoding, memory, group by data types, encoding, aggregate etc."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(344).default,title:"image_tooltip"})),Object(s.b)("p",null,"You can check memory usage by key:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(345).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"additional-links"},"Additional Links"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Slowlog Configuration using RedisInsight")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Explore Redis keys using RedisInsight browser tool")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/cluster"}),"Cluster Management with ease using RedisInsight"))))}d.isMDXComponent=!0}}]);