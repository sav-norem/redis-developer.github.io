(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{253:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(316)),i=(a(317),{id:"index-sampleapplicationoverview",title:"Sample Application Overview",sidebar_label:"Sample Application Overview",slug:"/develop/node/nodecrashcourse/sampleapplicationoverview",authors:["simon"]}),s={unversionedId:"develop/node/node-crash-course/sampleapplicationoverview/index-sampleapplicationoverview",id:"develop/node/node-crash-course/sampleapplicationoverview/index-sampleapplicationoverview",isDocsHomePage:!1,title:"Sample Application Overview",description:"In this course, we'll look at how to use Redis as a data store and cache in the context of a sample application.  Imagine that we're building a sort of social network application where users can \"check in\" at different locations and give them a star rating\u2026 from 0 for an awful experience through 5 to report that they had the best time ever there!",source:"@site/docs/develop/node/node-crash-course/sampleapplicationoverview/index-sampleapplicationoverview.mdx",slug:"/develop/node/nodecrashcourse/sampleapplicationoverview",permalink:"/develop/node/nodecrashcourse/sampleapplicationoverview",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/sampleapplicationoverview/index-sampleapplicationoverview.mdx",version:"current",lastUpdatedAt:1635760568,sidebar_label:"Sample Application Overview",sidebar:"docs",previous:{title:"Introducing RedisInsight",permalink:"/develop/node/nodecrashcourse/introducingredisinsight"},next:{title:"Up and Running with the Sample Application",permalink:"/develop/node/nodecrashcourse/runningtheapplication"}},c=[{value:"Users",id:"users",children:[]},{value:"Locations",id:"locations",children:[]},{value:"Checkins",id:"checkins",children:[]},{value:"Application Architecture",id:"application-architecture",children:[]},{value:"External Resourses",id:"external-resourses",children:[]}],l={toc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{class:"text--center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bPZX4ZJANK4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("p",null,"In this course, we'll look at how to use Redis as a data store and cache in the context of a sample application.  Imagine that we're building a sort of social network application where users can \"check in\" at different locations and give them a star rating\u2026 from 0 for an awful experience through 5 to report that they had the best time ever there!"),Object(o.b)("p",null,"When designing our application, we determined that there's a need to manage data about three main entities:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Users"),Object(o.b)("li",{parentName:"ul"},"Locations"),Object(o.b)("li",{parentName:"ul"},"Checkins")),Object(o.b)("p",null,"Let's look at what we're storing about each of these entities.  As we're using Redis as our only data store, we'll also consider how they map to Redis data types..."),Object(o.b)("h2",{id:"users"},"Users"),Object(o.b)("p",null,"We'll represent each user as a flat map of name/value pairs with no nested objects.  As we'll see later on, this maps nicely to a Redis Hash.  Here's a JSON representation of the schema we'll use to represent each user:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": 99,\n  "firstName": "Isabella",\n  "lastName": "Pedersen",\n  "email": "isabella.pedersen@example.com",\n  "password": "xxxxxx1",\n  "numCheckins": 8073,\n  "lastCheckin": 1544372326893,\n  "lastSeenAt": 138\n}\n')),Object(o.b)("p",null,"We've given each user an ID and we're storing basic information about them.  Also, we\u2019ll encrypt their password using bcrypt when we load the sample data into Redis."),Object(o.b)("p",null,"For each user, we'll keep track of the total number of checkins that they've submitted to the system, and the timestamp and location ID of their most recent checkin so that we know where and when they last used the system."),Object(o.b)("h2",{id:"locations"},"Locations"),Object(o.b)("p",null,"For each location that users can check in at, we're going to maintain two types of data.  The first of these is also a flat map of name/value pairs, containing summary information about the location:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": 138,\n  "name": "Stacey\'s Country Bakehouse",\n  "category": "restaurant",\n  "location": "-122.195447,37.774636",\n  "numCheckins": 170,\n  "numStars": 724,\n  "averageStars": 4\n}\n')),Object(o.b)("p",null,"We've given each location an ID and a category\u2014we'll use the category to search for locations by type later on.  The \"location\" field stores the coordinates in longitude, latitude format\u2026 this is the opposite from the usual latitude, longitude format. We'll see how to use this to perform geospatial searches later when we look at the RediSearch module."),Object(o.b)("p",null,"For each location, we're also storing the total number of checkins that have been recorded there by all of our users, the total number of stars that those checkins gave the location, and an average star rating per checkin for the location."),Object(o.b)("p",null,"The second type of data that we want to maintain for each location is what we'll call \"location details\".  These take the form of more structured JSON documents with nested objects and arrays.  Here's an example for location 138, Stacey's Country Bakehouse:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": 138,\n  "hours": [\n    { "day": "Monday", "hours": "8-7" },\n    { "day": "Tuesday", "hours": "9-7" },\n    { "day": "Wednesday", "hours": "6-8" },\n    { "day": "Thursday", "hours": "6-6" },\n    { "day": "Friday", "hours": "9-5" },\n    { "day": "Saturday", "hours": "8-9" },\n    { "day": "Sunday", "hours": "7-7" }\n  ],\n  "socials": [\n    { "instagram": "staceyscountrybakehouse",\n      "facebook": "staceyscountrybakehouse",\n      "twitter": "staceyscountrybakehouse"\n    }\n  ],\n  "website": "www.staceyscountrybakehouse.com",\n  "description": "Lorem ipsum....",\n  "phone": "(316) 157-8620"\n}\n')),Object(o.b)("p",null,"We want to build an API that allows us to retrieve all or some of these extra details, and keep the overall structure of the document intact.  For that, we'll need the RedisJSON module as we'll see later."),Object(o.b)("h2",{id:"checkins"},"Checkins"),Object(o.b)("p",null,"Checkins differ from users and locations in that they're not entities that we need to store forever. In our application, checkins consist of a user ID, a location ID, a star rating and a timestamp - we'll use these values to update attributes of our users and locations."),Object(o.b)("p",null,"Each checkin can be thought of as a flat map of name/value pairs, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "userId": 789,\n  "locationId": 171,\n  "starRating": 5\n}\n')),Object(o.b)("p",null,'Here, we see that user 789 visited location 171 ("Hair by Parvinder") and was really impressed with the service.'),Object(o.b)("p",null,"We need a way to store checkins for long enough to process them, but not forever.  We also need to associate a timestamp with each one, as we'll need that when we process the data.  "),Object(o.b)("p",null,"Redis provides a Stream data type that's perfect for this - with Redis Streams, we can store maps of name/value pairs and have the Redis server timestamp them for us.  Streams are also perfect for the sort of asynchronous processing we want to do with this data.  When a user posts a new checkin to our API we want to store that data and respond to the user that we've received it as quickly as possible.  Later we can have one or more other parts of the system do further processing with it.  Such processing might include updating the total number of checkins and last seen at fields for a user, or calculating a new average star rating for a location."),Object(o.b)("h2",{id:"application-architecture"},"Application Architecture"),Object(o.b)("p",null,"We decided to use Node.js with the Express framework and ioredis client to build the application.  Rather than have a monolithic codebase, the application has been split out into four components or services. These are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Authentication Service"),": Listens on an HTTP port and handles user authentication using Redis as a shared session store that other services can access."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Checkin Receiver"),": Listens on an HTTP port and receives checkins as HTTP POST requests from our users.  Each checkin is placed in a Redis Stream for later processing."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Checkin Processor"),": Monitors the checkin Stream in Redis, updating user and location information as it processes each checkin."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"API Server"),": Implements the bulk of the application's API endpoints, including those to retrieve information about users and locations from Redis.")),Object(o.b)("p",null,"These components fit together like so:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Application Architecture",src:a(954).default})),Object(o.b)("p",null,"There's also a data loader component, which we'll use to load some initial sample data into the system."),Object(o.b)("p",null,"As we progress through the course, we'll look at each of these components in turn.  In the next module, you'll get hands on and clone the application repo, start a Redis server with Docker, and load the sample data."),Object(o.b)("h2",{id:"external-resourses"},"External Resourses"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redislabs-training/node-js-crash-course"}),"Sample Application GitHub Repository"))))}u.isMDXComponent=!0},316:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,b=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return a?r.a.createElement(b,s(s({ref:t},l),{},{components:a})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},317:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(21),r=a(325);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(s)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+u:u}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},325:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},954:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/application_architecture-7bfd33ebc105774a28d159b65ed2b05d.png"}}]);