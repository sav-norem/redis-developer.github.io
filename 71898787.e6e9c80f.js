(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),r=(n(0),n(316)),s=(n(321),n(322),n(317),n(318),{id:"index-fixed-window-reactive-gears",title:"Atomicity with Gears",sidebar_label:"Atomicity with Gears",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive-gears"}),o={unversionedId:"develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-gears",id:"develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-gears",isDocsHomePage:!1,title:"Atomicity with Gears",description:"Improving atomicity and performance with RedisGears",source:"@site/docs/develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-gears.mdx",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive-gears",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive-gears",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-gears.mdx",version:"current",lastUpdatedAt:1631252865,sidebar_label:"Atomicity with Gears",sidebar:"docs",previous:{title:"Atomicity with Lua",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive-lua"},next:{title:"C and Redis",permalink:"/develop/C/"}},l=[{value:"Improving atomicity and performance with RedisGears",id:"improving-atomicity-and-performance-with-redisgears",children:[{value:"What is RedisGears?",id:"what-is-redisgears",children:[]},{value:"A Rate-Limiting RedisGears Function",id:"a-rate-limiting-redisgears-function",children:[]}]},{value:"RedisGears in SpringBoot",id:"redisgears-in-springboot",children:[]},{value:"Lettuce Mod",id:"lettuce-mod",children:[{value:"Accessing Gears Commands in SpringBoot",id:"accessing-gears-commands-in-springboot",children:[]},{value:"Registering the Gears function",id:"registering-the-gears-function",children:[]}]},{value:"Modifying the Filter to use the Gears function",id:"modifying-the-filter-to-use-the-gears-function",children:[]},{value:"Testing with curl",id:"testing-with-curl",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"improving-atomicity-and-performance-with-redisgears"},"Improving atomicity and performance with RedisGears"),Object(r.b)("h3",{id:"what-is-redisgears"},"What is RedisGears?"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://oss.redis.com/redisgears/"}),"RedisGears"),' is a dynamic server-side data processing engine, where the "server" part is Redis itself.\nRedisGears is distributed as a Redis module. You can start a Redis instance preconfigured with Gears using the official Docker image:'),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"docker run -p 6379:6379 redislabs/redisgears:latest\n")),Object(r.b)("p",null,"Or, as I do most of the time, using the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://hub.docker.com/r/redislabs/redismod/dockerfile"}),'"redismod"')," image which include Gears and\nall the other Redis, Inc. supported modules:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"docker run -p 6379:6379 redislabs/redismod\n")),Object(r.b)("p",null,"RedisGears was built with the purpose of providing a data processing engine inside of Redis, with more formal semantics\nthan the simpler Lua server-side scripting. Think of it as a more flexible map-reduce engine for Redis.\nIt supports supports transaction, batch, and event-driven processing of Redis data.\nGears allow you to localize computation and data provides a built-in coordinator to facilitate processing\ndistributed data in a clustered environment."),Object(r.b)("p",null,'In RedisGears, the main unit of processing is the RedisGears function, which can be (currently) written in Python (more languages are being worked on).\nThese functions run on their own thread, separate from Redis\' main thread and can be executed in response to\nkeyspace events or imperatively as a result of external commands.\nThe functions are "registered" (deployed) to the Gears engine, and have an associated name and a registration Id.'),Object(r.b)("p",null,"During registration we pick a specific reader for our function which defines how the function\ngets its initial data:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"KeysReader"),": Redis keys and values."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"KeysOnlyReader"),": Redis keys."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"StreamReader"),": Redis Stream messages."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PythonReader"),": Arbitrary Python generator."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ShardsIDReader"),": Shard ID."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CommandReader"),": Command arguments from application client.")),Object(r.b)("h3",{id:"a-rate-limiting-redisgears-function"},"A Rate-Limiting RedisGears Function"),Object(r.b)("p",null,"Depending on the reader type, Gear Functions can either be run immediately, on demand, as batch jobs or in an event-driven manner by registering it to trigger automatically on various types of events."),Object(r.b)("p",null,"The Python function ",Object(r.b)("inlineCode",{parentName:"p"},"rate_limit")," takes 3 parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key"),": The Redis key backing the counter for a given user."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_request"),": The request quota for the user."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"expiry"),": The number of seconds in the future to set the counter TTL.")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-py"}),"def rate_limit(key, max_requests, expiry):\n  requests = execute('GET', key)\n  requests = int(requests) if requests else -1\n  max_requests = int(max_requests)\n  expiry = int(expiry)\n\n  if (requests == -1) or (requests < max_requests):\n    with atomic():\n      execute('INCR', key)\n      execute('EXPIRE', key, expiry)\n    return False\n  else:\n    return True\n\n# Function registration\ngb = GB('CommandReader')\ngb.map(lambda x: rate_limit(x[1], x[2], x[3]))\ngb.register(trigger='RateLimiter')\n")),Object(r.b)("p",null,"Place the script under ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/resources/scripts"),". Now, Let's break it down:"),Object(r.b)("h4",{id:"the-rate_limit-function"},"The ",Object(r.b)("inlineCode",{parentName:"h4"},"rate_limit")," function"),Object(r.b)("p",null,"Similarly to what we did in the previous implementation, we:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Retrieve the current number of requests for the passed ",Object(r.b)("inlineCode",{parentName:"li"},"key")," by ",Object(r.b)("inlineCode",{parentName:"li"},"execute"),"-ing the ",Object(r.b)("inlineCode",{parentName:"li"},"GET")," command."),Object(r.b)("li",{parentName:"ol"},"Cast the result to an ",Object(r.b)("inlineCode",{parentName:"li"},"int")," and if not found, default to ",Object(r.b)("inlineCode",{parentName:"li"},"-1")),Object(r.b)("li",{parentName:"ol"},"Cast ",Object(r.b)("inlineCode",{parentName:"li"},"max_requests")," and ",Object(r.b)("inlineCode",{parentName:"li"},"expiry")," to ",Object(r.b)("inlineCode",{parentName:"li"},"int")),Object(r.b)("li",{parentName:"ol"},"If the quota hasn't been exceeded, perform the ",Object(r.b)("inlineCode",{parentName:"li"},"INCR"),"/",Object(r.b)("inlineCode",{parentName:"li"},"EXPIRE")," commands in a transactions (",Object(r.b)("inlineCode",{parentName:"li"},"with atomic():"),")\nand return ",Object(r.b)("inlineCode",{parentName:"li"},"False")," (no rate limiting - request is allowed)"),Object(r.b)("li",{parentName:"ol"},"Otherwise, return ",Object(r.b)("inlineCode",{parentName:"li"},"True")," (deny the request)")),Object(r.b)("h4",{id:"function-registration"},"Function Registration"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"At the bottom of the script, in the ",Object(r.b)("inlineCode",{parentName:"li"},"# Function registration")," section, we instantiate the\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://oss.redis.com/redisgears/runtime.html#gearsbuilder"}),Object(r.b)("inlineCode",{parentName:"a"},"GearsBuilder"),"(",Object(r.b)("inlineCode",{parentName:"a"},"GB"),")")," using the ",Object(r.b)("inlineCode",{parentName:"li"},"CommandReader"),"\nreader. The ",Object(r.b)("inlineCode",{parentName:"li"},"GearsBuilder"),' "builds" the context of the function, in parameters, transformations, triggers, etc.'),Object(r.b)("li",{parentName:"ol"},"We use the ",Object(r.b)("inlineCode",{parentName:"li"},"map")," method to performs a one-to-one mapping of records to the params of the ",Object(r.b)("inlineCode",{parentName:"li"},"rate_limit"),"\nfunction via a mapper function callback."),Object(r.b)("li",{parentName:"ol"},"We can now invoke the ",Object(r.b)("inlineCode",{parentName:"li"},"register")," action to register the function as an event handler. The event in our case is the\ntrigger ",Object(r.b)("inlineCode",{parentName:"li"},"'RateLimiter'"),".")),Object(r.b)("h2",{id:"redisgears-in-springboot"},"RedisGears in SpringBoot"),Object(r.b)("p",null,"In order to use our RedisGear function from our SpringBoot application we need to do a few things:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Deploy the function to the Redis server"),Object(r.b)("li",{parentName:"ol"},"Execute the function to get a yay/nay answer on each request")),Object(r.b)("h2",{id:"lettuce-mod"},"Lettuce Mod"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/redis-developer/lettucemod"}),"LettuceMod")," is a Java client for Redis Modules based on Lettuce created by ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/jruaux"}),"Julien Ruaux "),".\nIt supports the following modules in standalone or cluster configurations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"RedisGears"),Object(r.b)("li",{parentName:"ul"},"RedisJSON"),Object(r.b)("li",{parentName:"ul"},"RediSearch"),Object(r.b)("li",{parentName:"ul"},"RedisTimeSeries")),Object(r.b)("p",null,"To use LettuceMod we'll add the dependency to the Maven POM as shown:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n  <groupId>com.redis</groupId>\n  <artifactId>spring-lettucemod</artifactId>\n  <version>1.7.0</version>\n</dependency>\n")),Object(r.b)("h3",{id:"accessing-gears-commands-in-springboot"},"Accessing Gears Commands in SpringBoot"),Object(r.b)("p",null,"To access any of the LettuceMod supported modules we will inject a ",Object(r.b)("inlineCode",{parentName:"p"},"StatefulRedisModulesConnection")," in\nour ",Object(r.b)("inlineCode",{parentName:"p"},"FixedWindowRateLimiterApplication")," class as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"@Autowired\nStatefulRedisModulesConnection<String, String> connection;\n")),Object(r.b)("p",null,"Add the matching import statement:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"import com.redis.lettucemod.api.StatefulRedisModulesConnection;\n")),Object(r.b)("h3",{id:"registering-the-gears-function"},"Registering the Gears function"),Object(r.b)("p",null,"We'll start by writing a function to determine whether the function with the trigger ",Object(r.b)("inlineCode",{parentName:"p"},"RateLimiter")," has been\nregistered. It takes a ",Object(r.b)("inlineCode",{parentName:"p"},"List")," of ",Object(r.b)("inlineCode",{parentName:"p"},"Registration"),"s and digs deep to extract the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"trigger")," argument\nusing the Java Streams API:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'private Optional<String> getGearsRegistrationIdForTrigger(List<Registration> registrations, String trigger) {\n  return registrations.stream().filter(r -> r.getData().getArgs().get("trigger").equals(trigger)).findFirst().map(Registration::getId);\n}\n')),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"@PostConstruct")," annotated method ",Object(r.b)("inlineCode",{parentName:"p"},"loadGearsScript")," method:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"We retrieve an instance of the ",Object(r.b)("inlineCode",{parentName:"li"},"RedisGearsCommands")," from the previously injected ",Object(r.b)("inlineCode",{parentName:"li"},"StatefulRedisModulesConnection")),Object(r.b)("li",{parentName:"ol"},"We get the currently registered Gears functions via the ",Object(r.b)("inlineCode",{parentName:"li"},"dumpregistrations")," method"),Object(r.b)("li",{parentName:"ol"},"We pass the list of registrations to our ",Object(r.b)("inlineCode",{parentName:"li"},"getGearsRegistrationIdForTrigger")),Object(r.b)("li",{parentName:"ol"},"If we don't find the registration we proceed to register the function:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Load the function from the classpath into a ",Object(r.b)("inlineCode",{parentName:"li"},"String")," named ",Object(r.b)("inlineCode",{parentName:"li"},"py")),Object(r.b)("li",{parentName:"ul"},"Use the ",Object(r.b)("inlineCode",{parentName:"li"},"pyexecute")," method passing the ",Object(r.b)("inlineCode",{parentName:"li"},"py")," script payload")))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'@PostConstruct\npublic void loadGearsScript() throws IOException {\n  String py = StreamUtils.copyToString(new ClassPathResource("scripts/rateLimiter.py").getInputStream(),\n      Charset.defaultCharset());\n  RedisGearsCommands<String, String> gears = connection.sync();\n  List<Registration> registrations = gears.dumpregistrations();\n\n  Optional<String> maybeRegistrationId = getGearsRegistrationIdForTrigger(registrations, "RateLimiter");\n  if (maybeRegistrationId.isEmpty()) {\n    try {\n      ExecutionResults er = gears.pyexecute(py);\n      if (er.isOk()) {\n        logger.info("RateLimiter.py has been registered");\n      } else if (er.isError()) {\n        logger.error(String.format("Could not register RateLimiter.py -> %s", Arrays.toString(er.getErrors().toArray())));\n      }\n    } catch (RedisCommandExecutionException rcee) {\n      logger.error(String.format("Could not register RateLimiter.py -> %s", rcee.getMessage()));\n    }\n  } else {\n    logger.info("RateLimiter.py has already been registered");\n  }\n}\n')),Object(r.b)("h2",{id:"modifying-the-filter-to-use-the-gears-function"},"Modifying the Filter to use the Gears function"),Object(r.b)("p",null,"Next, we'll modify the filter to include the ",Object(r.b)("inlineCode",{parentName:"p"},"StatefulRedisModulesConnection")," as well as the\nquota; the value that we need to pass to the function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"class RateLimiterHandlerFilterFunction implements HandlerFilterFunction<ServerResponse, ServerResponse> {\n\n  private StatefulRedisModulesConnection<String, String> connection;\n  private Long maxRequestPerMinute;\n\n  public RateLimiterHandlerFilterFunction(StatefulRedisModulesConnection<String, String> connection,\n      Long maxRequestPerMinute) {\n    this.connection = connection;\n    this.maxRequestPerMinute = maxRequestPerMinute;\n  }\n")),Object(r.b)("p",null,"Now we can modify the ",Object(r.b)("inlineCode",{parentName:"p"},"filter")," method to use the function. Gears functions are invoked by\ntriggering the correct event ",Object(r.b)("inlineCode",{parentName:"p"},"RateLimiter")," and passing the parameters required by the function;\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"key"),", the quota and the TTL seconds in the future."),Object(r.b)("p",null,"As we've have done previously, if the function returns ",Object(r.b)("inlineCode",{parentName:"p"},"false")," we let the request through, otherwise\nwe return an ",Object(r.b)("inlineCode",{parentName:"p"},"HTTP 429"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'@Override\npublic Mono<ServerResponse> filter(ServerRequest request, HandlerFunction<ServerResponse> next) {\n  int currentMinute = LocalTime.now().getMinute();\n  String key = String.format("rl_%s:%s", requestAddress(request.remoteAddress()), currentMinute);\n\n  RedisGearsCommands<String, String> gears = connection.sync();\n\n  List<Object> results = gears.trigger("RateLimiter", key, Long.toString(maxRequestPerMinute), "59");\n  if (!results.isEmpty() && !Boolean.parseBoolean((String) results.get(0))) {\n    return next.handle(request);\n  } else {\n    return ServerResponse.status(TOO_MANY_REQUESTS).build();\n  }\n}\n')),Object(r.b)("h2",{id:"testing-with-curl"},"Testing with curl"),Object(r.b)("p",null,"Once again, we use curl loop to test the limiter:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'for n in {1..22}; do echo $(curl -s -w " :: HTTP %{http_code}, %{size_download} bytes, %{time_total} s" -X GET http://localhost:8080/api/ping); sleep 0.5; done\n')),Object(r.b)("p",null,"You should see the 21st request being rejected:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'\u279c for n in {1..22}; do echo $(curl -s -w " :: HTTP %{http_code}, %{size_download} bytes, %{time_total} s" -X GET http://localhost:8080/api/ping); sleep 0.5; done\nPONG :: HTTP 200, 4 bytes, 0.064786 s\nPONG :: HTTP 200, 4 bytes, 0.009926 s\nPONG :: HTTP 200, 4 bytes, 0.009546 s\nPONG :: HTTP 200, 4 bytes, 0.010189 s\nPONG :: HTTP 200, 4 bytes, 0.009399 s\nPONG :: HTTP 200, 4 bytes, 0.009210 s\nPONG :: HTTP 200, 4 bytes, 0.008333 s\nPONG :: HTTP 200, 4 bytes, 0.008009 s\nPONG :: HTTP 200, 4 bytes, 0.008919 s\nPONG :: HTTP 200, 4 bytes, 0.009271 s\nPONG :: HTTP 200, 4 bytes, 0.007515 s\nPONG :: HTTP 200, 4 bytes, 0.007057 s\nPONG :: HTTP 200, 4 bytes, 0.008373 s\nPONG :: HTTP 200, 4 bytes, 0.007573 s\nPONG :: HTTP 200, 4 bytes, 0.008209 s\nPONG :: HTTP 200, 4 bytes, 0.009080 s\nPONG :: HTTP 200, 4 bytes, 0.007595 s\nPONG :: HTTP 200, 4 bytes, 0.007955 s\nPONG :: HTTP 200, 4 bytes, 0.007693 s\nPONG :: HTTP 200, 4 bytes, 0.008743 s\n:: HTTP 429, 0 bytes, 0.007226 s\n:: HTTP 429, 0 bytes, 0.007388 s\n')),Object(r.b)("p",null,"If we run Redis in monitor mode, we should see the Lua calls to ",Object(r.b)("inlineCode",{parentName:"p"},"RG.TRIGGER")," and under that you should see the\ncalls to ",Object(r.b)("inlineCode",{parentName:"p"},"GET"),", ",Object(r.b)("inlineCode",{parentName:"p"},"INCR")," and ",Object(r.b)("inlineCode",{parentName:"p"},"EXPIRE")," for allowed requests:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'1631249244.006212 [0 172.17.0.1:56036] "RG.TRIGGER" "RateLimiter" "rl_localhost:47" "20" "59"\n1631249244.006995 [0 ?:0] "GET" "rl_localhost:47"\n1631249244.007182 [0 ?:0] "INCR" "rl_localhost:47"\n1631249244.007269 [0 ?:0] "EXPIRE" "rl_localhost:47" "59"\n')),Object(r.b)("p",null,"And for rate limited request you should see only the call to ",Object(r.b)("inlineCode",{parentName:"p"},"GET"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'1631249244.538478 [0 172.17.0.1:56036] "RG.TRIGGER" "RateLimiter" "rl_localhost:47" "20" "59"\n1631249244.538809 [0 ?:0] "GET" "rl_localhost:47"\n')),Object(r.b)("p",null,"The complete code for this implementation is under the branch ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/redis-developer/fixed-window-rate-limiter/tree/with_gears"}),Object(r.b)("inlineCode",{parentName:"a"},"with_gears")),"."))}d.isMDXComponent=!0},318:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(316),s=n(323);n(317),n(59);t.a=function(e){var t=a.a.useState(!1),n=t[0],i=t[1];return a.a.createElement("div",{className:"ri-container"},a.a.createElement("div",{className:"ri-description-short"},a.a.createElement("div",{className:"ri-icon"},a.a.createElement("span",{className:"fe fe-zap"})),a.a.createElement("div",{className:"ri-detail"},a.a.createElement("div",{className:"ri-title"},a.a.createElement("a",{href:e.page},e.title)),a.a.createElement("div",{className:"ri-description"},e.description,a.a.Children.count(e.children)>0&&a.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!n)}})))),n&&a.a.createElement("div",{className:"ri-description-long"},a.a.createElement(r.a,{components:s.a},e.children)))}},319:function(e,t,n){"use strict";var i=n(0),a=n(320);t.a=function(){var e=Object(i.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},320:function(e,t,n){"use strict";var i=n(0),a=Object(i.createContext)(void 0);t.a=a},321:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(319),s=n(324),o=n(60),l=n.n(o),c=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,b=e.values,u=e.groupId,p=e.className,m=Object(r.a)(),g=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(i.useState)(o),j=O[0],f=O[1],N=i.Children.toArray(e.children);if(null!=u){var v=g[u];null!=v&&v!==j&&b.some((function(e){return e.value===v}))&&f(v)}var y=function(e){f(e),null!=u&&h(u,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(i.cloneElement)(N.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},322:function(e,t,n){"use strict";var i=n(3),a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);