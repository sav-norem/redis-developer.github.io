(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(316)),o={id:"index-query",title:"4. Query Data",sidebar_label:"4. Query Data",slug:"/howtos/moviesdatabase/query"},l={unversionedId:"howtos/moviesdatabase/query/index-query",id:"howtos/moviesdatabase/query/index-query",isDocsHomePage:!1,title:"4. Query Data",description:"The database contains a few movies, and an index, it is now possible to execute some queries.",source:"@site/docs/howtos/moviesdatabase/query/index-query.mdx",slug:"/howtos/moviesdatabase/query",permalink:"/howtos/moviesdatabase/query",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/moviesdatabase/query/index-query.mdx",version:"current",lastUpdatedAt:1637876438,sidebar_label:"4. Query Data",sidebar:"docs",previous:{title:"3. Create Index",permalink:"/howtos/moviesdatabase/create"},next:{title:"5. Manage Index",permalink:"/howtos/moviesdatabase/manage"}},s=[{value:"Queries",id:"queries",children:[]},{value:"Insert, Update, Delete and Expire Documents",id:"insert-update-delete-and-expire-documents",children:[]},{value:"More",id:"more",children:[]}],b={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The database contains a few movies, and an index, it is now possible to execute some queries."),Object(i.b)("h2",{id:"queries"},"Queries"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example : ",Object(i.b)("em",{parentName:"strong"},'All the movies that contains the string "',Object(i.b)("inlineCode",{parentName:"em"},"war"),'"'))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "war"\n\n1) (integer) 2\n2) "movie:11005"\n3)  1) "title"\n    2) "Star Wars: Episode VI - Return of the Jedi"\n    ...\n   14) "tt0086190"\n4) "movie:11002"\n5)  1) "title"\n    2) "Star Wars: Episode V - The Empire Strikes Back"\n    ...\n   13) "imdb_id"\n   14) "tt0080684"\n\n')),Object(i.b)("p",null,"The FT.SEARCH commands returns a list of results starting with the number of results, then the list of elements (keys & fields)."),Object(i.b)("p",null,"As you can see the movie ",Object(i.b)("em",{parentName:"p"},"Star Wars: Episode V - The Empire Strikes Back")," is found, even though you used only the word \u201cwar\u201d to match \u201cWars\u201d in the title. This is because the title has been indexed as text, so the field is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/Escaping/"}),"tokenized")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/Stemming/"}),"stemmed"),"."),Object(i.b)("p",null,"Later when looking at the query syntax in more detail you will learn more about the search capabilities."),Object(i.b)("p",null,"It is also possible to limit the list of fields returned by the query using the ",Object(i.b)("inlineCode",{parentName:"p"},"RETURN")," parameter, let's run the same query, and return only the title and release_year:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "war" RETURN 2 title release_year\n\n1) (integer) 2\n2) "movie:11005"\n3) 1) "title"\n   2) "Star Wars: Episode VI - Return of the Jedi"\n   3) "release_year"\n   4) "1983"\n4) "movie:11002"\n5) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),Object(i.b)("p",null,'This query does not specify any "field" and still returns some movies, this is because RediSearch will search all TEXT fields by default. In the current index only the title is present as a TEXT field. You will see later how to update an index, to add more fields to it.'),Object(i.b)("p",null,"If you need to perform a query on a specific field you can specify it using the ",Object(i.b)("inlineCode",{parentName:"p"},"@field:")," syntax, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "@title:war" RETURN 2 title release_year\n')),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example : ",Object(i.b)("em",{parentName:"strong"},'All the movies that contains the string "',Object(i.b)("inlineCode",{parentName:"em"},"war")," but NOT the ",Object(i.b)("inlineCode",{parentName:"em"},"jedi"),' one"'))),Object(i.b)("p",null,"Adding the string ",Object(i.b)("inlineCode",{parentName:"p"},"-jedi")," (minus) will ask the query engine not to return values that contain ",Object(i.b)("inlineCode",{parentName:"p"},"jedi"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "war -jedi" RETURN 2 title release_year\n\n1) (integer) 1\n2) "movie:11002"\n3) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example : ",Object(i.b)("em",{parentName:"strong"},'All the movies that contains the string "',Object(i.b)("inlineCode",{parentName:"em"},"gdfather"),' using fuzzy search"'))),Object(i.b)("p",null,"As you can see the word godfather contains a speelling error, it can however be matched using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/Query_Syntax/#fuzzy_matching"}),"fuzzy matching"),". Fuzzy matches are performed based on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Levenshtein_distance"}),"Levenshtein distance")," (LD)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie " %gdfather% " RETURN 2 title release_year\n\n1) (integer) 1\n2) "movie:11003"\n3) 1) "title"\n   2) "The Godfather"\n   3) "release_year"\n   4) "1972"\n')),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example  : ",Object(i.b)("em",{parentName:"strong"},"All ",Object(i.b)("inlineCode",{parentName:"em"},"Thriller"),' movies"'))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"genre")," fields is indexed as a TAG and allows exact match queries."),Object(i.b)("p",null,"The syntax to query a TAG field is  @field_name:{value}"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "@genre:{Thriller}" RETURN 2 title release_year\n\n1) (integer) 1\n2) "movie:11004"\n3) 1) "title"\n   2) "Heat"\n   3) "release_year"\n   4) "1995"\n\n')),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example : ",Object(i.b)("em",{parentName:"strong"},"All ",Object(i.b)("inlineCode",{parentName:"em"},"Thriller")," or ",Object(i.b)("inlineCode",{parentName:"em"},"Action"),' movies"'))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "@genre:{Thriller|Action}" RETURN 2 title release_year\n\n1) (integer) 3\n2) "movie:11004"\n3) 1) "title"\n   2) "Heat"\n   3) "release_year"\n   4) "1995"\n4) "movie:11005"\n5) 1) "title"\n   2) "Star Wars: Episode VI - Return of the Jedi"\n   3) "release_year"\n   4) "1983"\n6) "movie:11002"\n7) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),Object(i.b)("p",null,"You can find more information about the Tag filters in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/master/Query_Syntax/#tag_filters"}),"the documentation"),"."),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example : ",Object(i.b)("em",{parentName:"strong"},"All ",Object(i.b)("inlineCode",{parentName:"em"},"Thriller")," or ",Object(i.b)("inlineCode",{parentName:"em"},"Action")," movies that does not have ",Object(i.b)("inlineCode",{parentName:"em"},"Jedi"),' in the title"'))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "@genre:{Thriller|Action} @title:-jedi" RETURN 2 title release_year\n\n1) (integer) 2\n2) "movie:11004"\n3) 1) "title"\n   2) "Heat"\n   3) "release_year"\n   4) "1995"\n4) "movie:11002"\n5) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example : ",Object(i.b)("em",{parentName:"strong"},"All the movies released between 1970 and 1980 (included)"))),Object(i.b)("p",null,"The FT.SEARCH syntax has two ways to query numeric fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"using the ",Object(i.b)("inlineCode",{parentName:"li"},"FILTER")," parameter")),Object(i.b)("p",null,"or "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"using the ",Object(i.b)("inlineCode",{parentName:"li"},"@field")," in the query string.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"> FT.SEARCH idx:movie * FILTER release_year 1970 1980 RETURN 2 title release_year\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "@release_year:[1970 1980]" RETURN 2 title release_year\n\n1) (integer) 2\n2) "movie:11003"\n3) 1) "title"\n   2) "The Godfather"\n   3) "release_year"\n   4) "1972"\n4) "movie:11002"\n5) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n\n')),Object(i.b)("p",null,"To exclude a value prepend it with ",Object(i.b)("inlineCode",{parentName:"p"},"(")," in the FILTER or query string, for example to exclude 1980:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "@release_year:[1970 (1980]" RETURN 2 title release_year\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"insert-update-delete-and-expire-documents"},"Insert, Update, Delete and Expire Documents"),Object(i.b)("p",null,"As part of this tutorial you have:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Created few movies, as Redis hashes (",Object(i.b)("em",{parentName:"li"},"that we call document"),") with the following key pattern ",Object(i.b)("inlineCode",{parentName:"li"},"movie:*")),Object(i.b)("li",{parentName:"ol"},"Created an index using the ",Object(i.b)("inlineCode",{parentName:"li"},"FT.CREATE")," command"),Object(i.b)("li",{parentName:"ol"},"Queried the data using ",Object(i.b)("inlineCode",{parentName:"li"},"FT.SEARCH"))),Object(i.b)("p",null,"When creating the index, using the ",Object(i.b)("inlineCode",{parentName:"p"},'idx:movie ON hash PREFIX 1 "movie:"')," parameter you are asking the indexing engine to look at all existing keys and index them."),Object(i.b)("p",null,"Also new information that matches this pattern/type, will be indexed."),Object(i.b)("p",null,"Let's count the number of movies, add a new one, and count again:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "*" LIMIT 0 0\n\n1) (integer) 4\n\n\n> HSET movie:11033 title "Tomorrow Never Dies" plot "James Bond sets out to stop a media mogul\'s plan to induce war between China and the U.K in order to obtain exclusive global media coverage." release_year 1997 genre "Action" rating 6.5 votes 177732 imdb_id tt0120347\n\n> FT.SEARCH idx:movie "*" LIMIT 0 0\n\n1) (integer) 5\n\n')),Object(i.b)("p",null,"The new movie has been indexed. You can also search on any of the indexed fields:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "never" RETURN 2 title release_year\n\n1) (integer) 1\n2) "movie:11033"\n3) 1) "title"\n   2) "Tomorrow Never Dies"\n   3) "release_year"\n   4) "1997"\n')),Object(i.b)("p",null,"Now you ",Object(i.b)("strong",{parentName:"p"},"update")," one of the field, and search for ",Object(i.b)("inlineCode",{parentName:"p"},"007")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> HSET movie:11033 title "Tomorrow Never Dies - 007"\n\n\n> FT.SEARCH idx:movie "007" RETURN 2 title release_year\n\n1) (integer) 1\n2) "movie:11033"\n3) 1) "title"\n   2) "Tomorrow Never Dies - 007"\n   3) "release_year"\n   4) "1997"\n')),Object(i.b)("p",null,"When you ",Object(i.b)("em",{parentName:"p"},"delete")," the hash, the index is also updated, and the same happens when the key expires (TTL-Time To Live). "),Object(i.b)("p",null,"For example, set the James Bond movie to expire in 20 seconds time:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> EXPIRE "movie:11033" 20\n\n')),Object(i.b)("p",null,"You can run the following query, and you will that the document expires after 20 seconds and the search query will not return any results, showing that the index has been updated."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.SEARCH idx:movie "007" RETURN 2 title release_year\n\n1) (integer)\n\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Note: When you are using Redis as your primary database you are not necessarily using TTLs to delete records. However, if the data you are storing and indexing are transient, for example a caching layer at the top of another datastore or Web service, query user sessions content, ... This is often qualified as a "',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.com/blog/the-case-for-ephemeral-search/"}),"Ephemeral Search"),'" use case: lightweight, fast and expiration.')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"more"},"More"),Object(i.b)("p",null,"You have many additional features regarding indexing and searching that you can find in the documentation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://oss.redis.com/redisearch/master/Commands/#ftsearch"}),"FT.SEARCH command")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://oss.redis.com/redisearch/master/Query_Syntax/"}),"Query Syntax"))),Object(i.b)("p",null,"Let's see how to inspect, modify and drop an index."))}c.isMDXComponent=!0},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.a.createElement(u,l(l({ref:t},b),{},{components:n})):r.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);