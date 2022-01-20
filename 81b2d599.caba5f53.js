(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(316)),s={id:"index-usinggo",title:"How to query Graph data in Redis using Go",sidebar_label:"RedisGraph and Go",slug:"/howtos/redisgraph/using-go",authors:["ajeet"]},o={unversionedId:"howtos/redisgraph/using-go/index-usinggo",id:"howtos/redisgraph/using-go/index-usinggo",isDocsHomePage:!1,title:"How to query Graph data in Redis using Go",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code.",source:"@site/docs/howtos/redisgraph/using-go/index-usinggo.mdx",slug:"/howtos/redisgraph/using-go",permalink:"/howtos/redisgraph/using-go",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-go/index-usinggo.mdx",version:"current",lastUpdatedAt:1637877355,sidebar_label:"RedisGraph and Go",sidebar:"docs",previous:{title:"How to query Graph data in Redis using JavaScript",permalink:"/howtos/redisgraph/using-javascript"},next:{title:"How to query Graph data in Redis using Rust",permalink:"/howtos/redisgraph/using-rust"}},p=[{value:"RedisGraph Go Client",id:"redisgraph-go-client",children:[{value:"Step 1. Run RedisMod Docker container",id:"step-1-run-redismod-docker-container",children:[]},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",children:[]},{value:"Step 3. Loading the RedisGraph Module",id:"step-3-loading-the-redisgraph-module",children:[]},{value:"Step 4. Clone the repository",id:"step-4-clone-the-repository",children:[]},{value:"Step 5. Running the Test suite",id:"step-5-running-the-test-suite",children:[]},{value:"Step 6. Running the Go Program",id:"step-6-running-the-go-program",children:[]},{value:"Step 7. Monitor the Graph query",id:"step-7-monitor-the-graph-query",children:[]},{value:"Step 8. Install RedisInsight",id:"step-8-install-redisinsight",children:[]},{value:"Step 9. Accessing RedisInsight",id:"step-9-accessing-redisinsight",children:[]},{value:"Step 10. Run the Graph Query",id:"step-10-run-the-graph-query",children:[]},{value:"References",id:"references",children:[]}]}],c={toc:p};function d(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code."),Object(i.b)("h2",{id:"redisgraph-go-client"},"RedisGraph Go Client"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redisgraph-go")," is a Golang client for the RedisGraph module. It relies on redigo for Redis connection management and provides support for RedisGraph's QUERY, EXPLAIN, and DELETE commands."),Object(i.b)("p",null,"Follow the steps below to get started with RedisGraph with Go:"),Object(i.b)("h3",{id:"step-1-run-redismod-docker-container"},"Step 1. Run RedisMod Docker container"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," docker run -p 6379:6379 --name redislabs/redismodCopy\n")),Object(i.b)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),Object(i.b)("h3",{id:"step-3-loading-the-redisgraph-module"},"Step 3. Loading the RedisGraph Module"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," go get github.com/redislabs/redisgraph-go\n")),Object(i.b)("h3",{id:"step-4-clone-the-repository"},"Step 4. Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/RedisGraph/redisgraph-go\n")),Object(i.b)("h3",{id:"step-5-running-the-test-suite"},"Step 5. Running the Test suite"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"})," go test                                  \n found packages redisgraph (client_test.go) and main (main.go) in /Users/ajeetraina/projects/redisgraph-go\n")),Object(i.b)("h3",{id:"step-6-running-the-go-program"},"Step 6. Running the Go Program"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," go run main.go \n +----------+-------+--------+\n |  p.name  | p.age | c.name |\n +----------+-------+--------+\n | John Doe |    33 | Japan  |\n +----------+-------+--------+\n\n Cached execution 0.000000\n Query internal execution time 3.031700\n Visited countries by person:\n\n Name: John Doe\n\n Age: 33\n Pathes of persons vi\n")),Object(i.b)("h3",{id:"step-7-monitor-the-graph-query"},"Step 7. Monitor the Graph query"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),' redis-cli\n 127.0.0.1:6379> monitor\n OK\n 1633495122.588292 [0 172.17.0.1:58538] "GRAPH.DELETE" "social"\n 1633495122.589641 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "CREATE (UPoQSvSnBD:person{gender:\\"male\\",status:\\"single\\",name:\\"John Doe\\",age:33}),(ZNxbsnHGoO:country{name:\\"Japan\\"}),(UPoQSvSnBD)-[:visited]->(ZNxbsnHGoO)" "--compact"\n 1633495122.591407 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "MATCH (p:person)-[v:visited]->(c:country)\\n           RETURN p.name, p.age, c.name" "--compact"\n 1633495122.593040 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "MATCH p = (:person)-[:visited]->(:country) RETURN p" "--compact"\n 1633495122.594405 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "CALL db.labels()" "--compact"\n 1633495122.595552 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "CALL db.propertyKeys()" "--compact"\n 1633495122.596942 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "CALL db.relationshipTypes()" "--compact"\n')),Object(i.b)("h3",{id:"step-8-install-redisinsight"},"Step 8. Install RedisInsight"),Object(i.b)("p",null,"Run the RedisInsight container. The easiest way is to run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),Object(i.b)("h3",{id:"step-9-accessing-redisinsight"},"Step 9. Accessing RedisInsight"),Object(i.b)("p",null,"Next, point your browser to http://localhost:8001."),Object(i.b)("h3",{id:"step-10-run-the-graph-query"},"Step 10. Run the Graph Query"),Object(i.b)("p",null,"You can use the limit clause to limit the number of records returned by a query:"),Object(i.b)("p",null,'GRAPH.QUERY "social" "MATCH (n) RETURN n"'),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(761).default})),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/howtos/redisgraphmovies/"}),"Building Movies database app using RedisGraph and NodeJS")),Object(i.b)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redis.com/redisgraph/"}),"Quickstart")," tutorial."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/explore/redisinsight/redisgraph"}),"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),Object(i.b)("h2",{id:""}),Object(i.b)("div",null,Object(i.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(i.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}d.isMDXComponent=!0},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(n),h=r,g=l["".concat(s,".").concat(h)]||l[h]||u[h]||i;return n?a.a.createElement(g,o(o({ref:t},c),{},{components:n})):a.a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},761:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/redisgraph_redisinsight_go-aa2afd2b4aadf6cdbe5c2a03ca9579a7.png"}}]);