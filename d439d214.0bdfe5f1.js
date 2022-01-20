(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{275:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),i=(t(0),t(316)),s={id:"index-jsonind-document",title:"Indexing JSON document using RediSearch",sidebar_label:"Indexing JSON document using RediSearch",slug:"/howtos/redisjson/jsonind-document",authors:["ajeet"]},o={unversionedId:"howtos/redisjson/jsonind-document/index-jsonind-document",id:"howtos/redisjson/jsonind-document/index-jsonind-document",isDocsHomePage:!1,title:"Indexing JSON document using RediSearch",description:"RedisJSON 2.0 Private Preview was announced for the first time during RedisConf 2021. With this newer version, RedisJSON will fully support JSONPath expressions and Active-Active geo-distribution. The Active-Active implementation is based on Conflict-free Replicated Data-Types (CRDT).",source:"@site/docs/howtos/redisjson/jsonind-document/index-jsonind-document.mdx",slug:"/howtos/redisjson/jsonind-document",permalink:"/howtos/redisjson/jsonind-document",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/jsonind-document/index-jsonind-document.mdx",version:"current",lastUpdatedAt:1637928141,sidebar_label:"Indexing JSON document using RediSearch",sidebar:"docs",previous:{title:"Storing and retrieving Nested JSON document",permalink:"/howtos/redisjson/storing-complex-json-document"},next:{title:"RedisJSON Cheatsheet",permalink:"/howtos/redisjson/redisjson-cheatsheet"}},c=[{value:"Prerequisite:",id:"prerequisite",children:[]},{value:"Step 1. Run the &quot;preview&quot; tagged Redismod container",id:"step-1-run-the-preview-tagged-redismod-container",children:[]},{value:"Step 2. Create an Index",id:"step-2-create-an-index",children:[]},{value:"Step 3. Populate the database with JSON document",id:"step-3-populate-the-database-with-json-document",children:[]},{value:"Step 4. Indexing the database with JSON document",id:"step-4-indexing-the-database-with-json-document",children:[]},{value:"Step 5. Projecting using JSON Path expressions",id:"step-5-projecting-using-json-path-expressions",children:[]},{value:"References",id:"references",children:[]}],d={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RedisJSON 2.0 Private Preview was announced for the first time during RedisConf 2021. With this newer version, RedisJSON will fully support JSONPath expressions and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/technology/active-active-geo-distribution/"}),"Active-Active geo-distribution"),". The Active-Active implementation is based on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type"}),"Conflict-free Replicated Data-Types (CRDT)"),"."),Object(i.b)("p",null,"Prior to v2.2, RediSearch only supported Redis hashes. Going forward, RediSearch will support  RedisJSON documents. This opens a powerful new set of document-based indexing use cases. In addition, RediSearch now provides query profiling. This will empower developers to understand and optimize their RediSearch queries, increasing their developer experience."),Object(i.b)("p",null,"RediSearch has been providing indexing and search capabilities on hashes. Under the hood, RedisJSON 2.0 exposes an internal public API. Internal, because this API is exposed to other modules running inside a Redis node. Public, because any module can consume this API. So does RediSearch 2.2 ! In addition to indexing Redis hashes, RediSearch also indexes JSON. To index JSON, you must use the RedisJSON module."),Object(i.b)("p",null,"By exposing its capabilities to other modules, RedisJSON gives RediSearch the ability to index JSON documents so users can now find documents by indexing and querying the content. These combined modules give you a powerful, low latency, JSON-oriented document database!"),Object(i.b)("h3",{id:"prerequisite"},"Prerequisite:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Redis 6.x or later"),Object(i.b)("li",{parentName:"ul"},"RediSearch 2.2 or later"),Object(i.b)("li",{parentName:"ul"},"RediJSON 2.0 or later")),Object(i.b)("h3",{id:"step-1-run-the-preview-tagged-redismod-container"},'Step 1. Run the "preview" tagged Redismod container'),Object(i.b)("p",null,"Please note that this publicly available Docker Image is a community preview and doesn't support Active-Active.This Docker image contains Redis together with the main Redis modules, including RediSearch and RedisJSON.  You'll need the preview tag of the image, which you can access as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," docker run -p 6379:6379 redislabs/redismod:preview\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," info modules\n # Modules\n module:name=rg,ver=10006,api=1,filters=0,usedby=[],using=[ai],options=[]\n module:name=graph,ver=20406,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=timeseries,ver=10410,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=bf,ver=20205,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=ai,ver=10003,api=1,filters=0,usedby=[rg],using=[],options=[]\n module:name=ReJSON,ver=20000,api=1,filters=0,usedby=[search],using=[],options=[]\n module:name=search,ver=20200,api=1,filters=0,usedby=[],using=[ReJSON],options=[]\n")),Object(i.b)("h3",{id:"step-2-create-an-index"},"Step 2. Create an Index"),Object(i.b)("p",null,"Let's start by creating an index."),Object(i.b)("p",null,"We can now specify ON JSON to inform RediSearch that we want to index JSON documents.\nThen, on the SCHEMA part, you can provide JSONPath expressions. The result of each JSON Path expression is indexed and associated with a logical name ( attribute ). This attribute (previously called field ) is used in the query part."),Object(i.b)("p",null,"This is the basic syntax for indexing a JSON document:"),Object(i.b)("b",null,"Syntax"),":",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{})," FT.CREATE {index_name} ON JSON SCHEMA {json_path} AS {attribute} {type}\n")),Object(i.b)("b",null,"Command"),":",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," FT.CREATE userIdx ON JSON SCHEMA $.user.name AS name TEXT $.user.email AS email  TAG\n")),Object(i.b)("h3",{id:"step-3-populate-the-database-with-json-document"},"Step 3. Populate the database with JSON document"),Object(i.b)("p",null,"We should first populate the database with a JSON document using the JSON.SET command. In our example we are going to use the following JSON document:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "user": {\n    "name": "Paul John",\n    "email": "paul.john@example.com",\n    "age": "42",\n    "country": "London"\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'JSON.SET myuser $ \'{ "user":{"name": "Paul John", "email": "paul.john@example.com", "age": "4", "country": "London" }}\'\n\n')),Object(i.b)("p",null,"Because indexing is synchronous, the document will be visible on the index as soon as the JSON.SET command returns. Any subsequent query matching the indexed content will return the document"),Object(i.b)("h3",{id:"step-4-indexing-the-database-with-json-document"},"Step 4. Indexing the database with JSON document"),Object(i.b)("p",null,"This new version includes a comprehensive support of JSONPath. It is now possible to use all the expressiveness of JSONPath expressions."),Object(i.b)("p",null,"To create a new index, we use the FT.CREATE command. The schema of the index now accepts JSONPath expressions. The result of the expression is indexed and associated with an attribute (here: title)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"FT.CREATE myIdx ON JSON SCHEMA $.title AS title TEXT\n")),Object(i.b)("p",null,"We can now do a search query and find our JSON document using FT.SEARCH:"),Object(i.b)("b",null,"Command"),":",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," FT.SEARCH userIdx '@name:(John)'\n")),Object(i.b)("b",null,"Result"),":",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' 1) (integer) 1\n 2) "myuser"\n 3) 1) "$"\n    2) "{\\"user\\":{\\"name\\":\\"Paul John\\",\\"email\\":\\"paul.john@example.com\\",\\"age\\":\\"4\\",\\"country\\":\\"London\\"}}"\n')),Object(i.b)("p",null,"We just saw that, by default, FT.SEARCH returns the whole document. We can also return only specific attribute (here name)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"  FT.SEARCH userIdx '@name:(John)' RETURN 1 name\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'  1) (integer) 1\n  2) "myuser"\n  3) 1) "name"\n    2) "Paul John" \n')),Object(i.b)("h3",{id:"step-5-projecting-using-json-path-expressions"},"Step 5. Projecting using JSON Path expressions"),Object(i.b)("p",null,"The RETURN parameter also accepts a JSON Path expression which let us extract any part of the JSON document.\nIn this example, we return the result of the JSON Path expression $.user.hp ."),Object(i.b)("b",null,"Command"),":",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," FT.SEARCH userIdx '@name:(John)' RETURN 1 $.user.email\n")),Object(i.b)("b",null,"Result"),":",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' 1) (integer) 1\n 2) "myuser"\n 3) 1) "$.user.email"\n    2) "paul.john@example.com"\n')),Object(i.b)("p",null,"Please Note: It is not possible to index JSON object and JSON arrays.\nTo be indexed, a JSONPath expression must return a single scalar value (string or number). If the JSONPath expression returns an object or an array, it will be ignored."),Object(i.b)("p",null,"Given the following document:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),' {\n    \n    "name": "Paul John",\n    \u201caddress": [\n        "Orbital Park",\n        " Hounslow"\n  ],\n  "pincode": "TW4 6JS"\n }\n')),Object(i.b)("p",null,"If we want to index the array under the address key, we have to create two fields:"),Object(i.b)("b",null,"Command"),":",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," FT.CREATE orgIdx ON JSON SCHEMA $.address[0] AS a1 TEXT $.address[1] AS a2 TEXT\n")),Object(i.b)("p",null,"It's time to index the document:"),Object(i.b)("b",null,"Command"),":",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),' JSON.SET org:1 $ \'{ "name": "Home Address", "address": [ "Orbital Park","Hounslow" ], "pincode": "TW4 6JS" }\'\n')),Object(i.b)("p",null,"We can now search in the address:"),Object(i.b)("b",null,"Command"),":",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),' FT.SEARCH orgIdx "Orbital Park"\n')),Object(i.b)("b",null,"Result"),":",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),' FT.SEARCH orgIdx "Orbital Park" \n 1) (integer) 1\n 2) "org:1"\n 3) 1) "$"\n   2) "{\\"name\\":\\"Home Address\\",\\"address\\":[\\"Orbital Park\\",\\"Hounslow\\"],\\"pincode\\":\\"TW4 6JS\\"}"\n')),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://university.redis.com/courses/ru204/"}),"RU204: Storing, Querying and Indexing JSON at Speed")," - a course at Redis University"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://oss.redis.com/redisearch/master/Indexing_JSON/"}),"Indexing JSON Documents")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/blog/index-and-query-json-docs-with-redis/"}),"Indexing, Querying, and Full-Text Search of JSON Documents with Redis"))))}l.isMDXComponent=!0},316:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),l=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),p=a,m=u["".concat(s,".").concat(p)]||u[p]||b[p]||i;return t?r.a.createElement(m,o(o({ref:n},d),{},{components:t})):r.a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);