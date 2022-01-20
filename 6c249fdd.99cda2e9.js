(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{184:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),i=a(7),s=(a(0),a(316)),r=(a(321),a(322),a(317),a(318),{id:"index-frauddetection",title:"How to build a Fraud Detection System using Redis",sidebar_label:"How to build a Fraud Detection System using Redis",slug:"/howtos/frauddetection"}),o={unversionedId:"howtos/frauddetection/index-frauddetection",id:"howtos/frauddetection/index-frauddetection",isDocsHomePage:!1,title:"How to build a Fraud Detection System using Redis",description:"Authors: Sachin Kottarathodi, Ajeet Singh Raina",source:"@site/docs/howtos/frauddetection/index-frauddetection.mdx",slug:"/howtos/frauddetection",permalink:"/howtos/frauddetection",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/frauddetection/index-frauddetection.mdx",version:"current",lastUpdatedAt:1637876438,sidebar_label:"How to build a Fraud Detection System using Redis",sidebar:"docs",previous:{title:"How to build a Chat application using Redis",permalink:"/howtos/chatapp"},next:{title:"Building Movies database app using RedisGraph and NodeJS",permalink:"/howtos/redisgraphmovies"}},c=[{value:"Step #1: Installing Docker",id:"step-1-installing-docker",children:[]},{value:"Step #2: Get Ready to Redis",id:"step-2-get-ready-to-redis",children:[]},{value:"Step #3: Cloning the Repository",id:"step-3-cloning-the-repository",children:[]},{value:"Step #4: Building and Running the Docker Container",id:"step-4-building-and-running-the-docker-container",children:[]},{value:"Step #5:  Verifying the Application",id:"step-5--verifying-the-application",children:[]},{value:"Click Spamming:",id:"click-spamming",children:[]},{value:"Step #6: Deploy Grafana",id:"step-6-deploy-grafana",children:[]},{value:"Conclusion &amp; future work",id:"conclusion--future-work",children:[]},{value:"References and Links",id:"references-and-links",children:[]}],d={toc:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Authors: ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.linkedin.com/in/ksachin1"}),"Sachin Kottarathodi"),", ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.linkedin.com/in/ajeetsraina/"}),"Ajeet Singh Raina")),Object(s.b)("p",null,"Imagine that your ads are generating a lot of traffic, but you are not seeing the desired results from your ad spend. This might not be a coincidence\u2014fraudsters often try to steal digital ad marketing budgets through various sophisticated mechanisms. Faking clicks can make it appear as though a real user was engaging with the ad, but in reality when these fake clicks drive installs, the cost of the install goes to the fraudster\u2019s pocket. As companies\u2019 willingness to spend more  on digital advertisements grows, the number of fraudsters in ad markets also increases."),Object(s.b)("p",null,Object(s.b)("img",{alt:"fraud detection",src:a(726).default})),Object(s.b)("p",null,"This blog post will demonstrate a simplified use case of how real-time fraud detection works\u2014so that you can understand how to stay ahead of the fraudsters."),Object(s.b)("p",null,"Here\u2019s what we have used:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Python-based fraud detector module which performs two kinds of fraud checks : IP blacklisting & click spamming"),Object(s.b)("li",{parentName:"ul"},"IP blacklisting uses Redis Cuckoo Filter from the RedisBloom package."),Object(s.b)("li",{parentName:"ul"},"Click spamming uses Redis Sorted Set."),Object(s.b)("li",{parentName:"ul"},"The data is then pushed to RediStream which is consumed by RedisGears for processing "),Object(s.b)("li",{parentName:"ul"},"RedisTimeSeries gets updated and Redis Data Source for Grafana displays the dashboard")),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud Detection",src:a(727).default})),Object(s.b)("h3",{id:"step-1-installing-docker"},"Step #1: Installing Docker"),Object(s.b)("p",null,"You can follow ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"https://docs.docker.com/get-docker/")," to get Docker installed on your local system."),Object(s.b)("h3",{id:"step-2-get-ready-to-redis"},"Step #2: Get Ready to Redis"),Object(s.b)("p",null,"You will need a Redis server up and running on your local machine. You can use the below CLI to bring up Redis server with RedisGears."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ docker run -d -p 6379:6379 redislabs/redismod\n")),Object(s.b)("p",null,"The command will pull the image from redis docker repo and start the Redis server with all the required modules and the logs ends like this."),Object(s.b)("h3",{id:"step-3-cloning-the-repository"},"Step #3: Cloning the Repository"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ git clone https://github.com/redis-developer/redis-datasets.git\n")),Object(s.b)("h3",{id:"step-4-building-and-running-the-docker-container"},"Step #4: Building and Running the Docker Container"),Object(s.b)("p",null,"Change directory to fraud-detection"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ cd redis-datasets/use-cases/fraud-detection\n")),Object(s.b)("p",null,"The code is present in use-cases/fraud-detection. The app is dockerized with necessary packages (including client packages for redis modules). "),Object(s.b)("p",null,"Create the image using the command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ docker build -t redis-fraud:latest .\n")),Object(s.b)("p",null,"Create the container using the command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ docker run -e REDIS_HOST='<host>' -e REDIS_PORT=6379 -p 5000:5000 -d redis-fraud\n")),Object(s.b)("p",null,"You will get the container Id, which can be used to tail application logs."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{})," $ docker logs -f <container-id> \n")),Object(s.b)("p",null,"If you are using a redismod image to run Redis locally, please provide the IP of the host machine (and not localhost or 127.0.0.1)."),Object(s.b)("h3",{id:"step-5--verifying-the-application"},"Step #5:  Verifying the Application"),Object(s.b)("p",null,"Let's take a look at how connections are managed in this project."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),' import os\n import redis\n from redisbloom.client import Client\n from singleton_decorator import singleton\n\n\n @singleton\n class RedisConn:\n    def __init__(self):\n        host = os.getenv("REDIS_HOST")\n    port = os.getenv("REDIS_PORT")\n\n    if not host or not port:\n        raise Exception("No Redis Host or Port provided. Please provide Host and Port in docker run command as env")\n\n    port = int(port)\n    self.redis_client = redis.Redis(host=host, port=port)\n    self.bloom_client = Client(host=host, port=port)\n\n    def redis(self):\n        return self.redis_client\n\n    def bloom(self):\n        return self.bloom_client\n')),Object(s.b)("p",null,"In line 2, we import the redis package for package. All the core Redis commands are available in this Redis package."),Object(s.b)("p",null,"In line 4, we import the redisbloom package. Since RedisBloom is a module, the clients used to interact with this module are also different. We will see more such examples below.\nThe singleton_decorator ensures only one instance of this connection class is created, and os package is used to read the environment variables to form the connection."),Object(s.b)("p",null,"Now let\u2019s take a look at how we use Redis to solve click spamming and IP fraud."),Object(s.b)("p",null,"Gist: ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/Sachin-Kottarathodi/c3a0647d3fdd0fe8a76425e0594e11c5"}),"https://gist.github.com/Sachin-Kottarathodi/c3a0647d3fdd0fe8a76425e0594e11c5")," "),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"})," def ip_fraud(self, data):\n     exists = RedisConn().bloom().cfExists(Constants.IP_CUCKOO_FILTER_NAME, data['ip'])\n     if exists:\n         data['fraud_type'] = Constants.IP_BLACKLIST\n         data['status'] = Constants.FRAUD\n\n     return exists\n\n def click_spam(self, data):\n    is_click_spammed = False\n    count = RedisConn().redis().zcount(data.get('device_id'), data['ts'] - self.click_spam_window_in_sec, data['ts'])\n    if count >= self.click_spam_threshold:\n         is_click_spammed = True\n         data['fraud_type'] = Constants.CLICK_SPAM\n         data['status'] = Constants.FRAUD\n    return is_click_spammed\n\n def publish(self, data):\n    RedisConn().redis().xadd(Constants.STREAM_NAME, data, id='*')\n")),Object(s.b)("p",null,"In the above code, Cuckoo Filter is used to find blacklisted IP fraud. Cuckoo Filter is a probabilistic data structure that\u2019s part of the module, RedisBloom. Checking for existence of IP in Cuckoo Filter is done using the cfExists method provided by bloom client. Please note that Cuckoo Filter can return false positives. To configure the error rate, cf.reserve command can be used to create the filter and custom bucket size can be provided."),Object(s.b)("p",null,"To identify click spam, we use the zcount method of sorted sets provided in redis package.\nUsing zcount, we find the number of clicks from a device in a certain pre configured window. If the count received is greater than a certain threshold, we identify it as anomalous."),Object(s.b)("p",null,"Finally, data is pushed to Redistream using the xadd command. id=\u2019*\u2019 indicates Redistream to generate a unique id for our message."),Object(s.b)("h4",{id:"registering-gears"},"Registering Gears:"),Object(s.b)("p",null,"When the app appears, a gear is registered, which reacts to the stream that we use to push data."),Object(s.b)("p",null,"Gist:",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/Sachin-Kottarathodi/f9dac7a3342a3643e792e2143a6adf7d"}),"https://gist.github.com/Sachin-Kottarathodi/f9dac7a3342a3643e792e2143a6adf7d")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{})," from gearsclient import GearsRemoteBuilder as GearsBuilder\n from redistimeseries.client import Client\n\n def stream_handler(item):\n  data = item['value']\n  member = json.dumps(\n    {'device_id': data['device_id'],\n    'transaction_id': data['transaction_id'],\n    'ts': data['ts'],\n    })\n  redis.Redis().zadd(data.get('device_id'), {member: data['ts']})\n  Client().incrby(data['fraud_type'], 1)\n\n  GearsBuilder(reader='StreamReader', r=redis_conn, requirements=[\"redis\", \"redistimeseries\"]).foreach(stream_handler).register('data_stream')\n")),Object(s.b)("p",null,"As mentioned before, since RedisGears and RedisTimeSeries are modules, we need to use the clients provided in their respective packages."),Object(s.b)("p",null,"We use the GearsRemoteBuilder class to build the Gear. StreamReader ensures that the stream_handler function is executed for every new message from the stream. The stream_handler adds the data to the sorted set using zadd (This information is used in zcount to identify click_spam)  and increments the count of time series for clean and fraud types using incrby of the RedisTimeSeries module, which is later used for visualization."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud Detection",src:a(728).default})),Object(s.b)("p",null,"Gear registration can be checked on RedisInsight as well."),Object(s.b)("p",null,"Finally, we incorporate the flask app which exposes the end point for trigger."),Object(s.b)("p",null,"Gist: ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/Sachin-Kottarathodi/2a6cccb29b4a9fdc7d58086af07aa6eb"}),"https://gist.github.com/Sachin-Kottarathodi/2a6cccb29b4a9fdc7d58086af07aa6eb")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"})," from flask import Flask, request\n from fraud_checks import FraudChecks\n from setup import Setup\n app = Flask(__name__)\n\n\n @app.route('/', methods=['POST'])\n def check_fraud():\n    try:\n    response = FraudChecks().check_fraud(request.get_json())\n    code = 200\n    except Exception as e:\n    print(\"Error occurred \", e)\n    response = str(e)\n    code = 500\n\n    return response, code\n\n\n if __name__ == '__main__':\n    Setup().init()\n    app.run(port=5000, debug=False, host='0.0.0.0')\n")),Object(s.b)("p",null,"Here, the app is exposed on port 5000. Before starting the server, our init method of setup is called to register the gear.The endpoint calls the function that does the fraud checks and returns the response."),Object(s.b)("p",null,"The application is written in python and exposes an endpoint which accepts a few parameters. Use the below command to invoke the application:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' $ curl --request POST \'localhost:5000\' --header \'Content-Type: application/json\' --data-raw \'{\n      "device_id": "111-000-000",\n      "ip": "1.1.1.1",\n      "transaction_id": "3e4fad5fs"}\'\n clean\n')),Object(s.b)("p",null,"Since initially no data is available in Cuckoo Filter, all IPs will be allowed through.\nTo add data to Cuckoo Filter, connect to Redis using cli and run the command"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," cf.addnx ip_cf 1.1.1.1\n")),Object(s.b)("p",null,"Run the post command with this IP again. This time, the result will be ip_blacklist."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud Detection",src:a(729).default})),Object(s.b)("h3",{id:"click-spamming"},"Click Spamming:"),Object(s.b)("p",null,"The app is configured to allow two events in a window of 10 seconds from the same device. To verify, make more than two curl requests within 10 seconds and the result will be ",Object(s.b)("inlineCode",{parentName:"p"},"click_spam"),"."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud Detection",src:a(730).default})),Object(s.b)("p",null,"Optional: The following variables can be configured during the \u2018docker run\u2019 command.\n-e CLICK_SPAM_THRESHOLD=3 -e CLICK_SPAM_WINDOW_IN_SEC=10"),Object(s.b)("h3",{id:"step-6-deploy-grafana"},"Step #6: Deploy Grafana"),Object(s.b)("p",null,"It\u2019s exciting to see the fraud detection  plotted in Grafana. To implement this, run the command below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' $ docker run -d -e "GF_INSTALL_PLUGINS=redis-app" -p 3000:3000 grafana/grafana\n')),Object(s.b)("p",null,"Point your browser to https://<IP_ADDRESS>:3000. "),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud detection",src:a(731).default})),Object(s.b)("p",null,"Login as \u2018admin\u2019 with password as \u2018admin\u2019, you can reset the password after your first login."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud detection",src:a(732).default})),Object(s.b)("p",null,"Click on the gear icon on the left panel (Configuration) and choose Data Sources."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud detection",src:a(733).default})),Object(s.b)("p",null,"Choose \u2018Add data source\u2019."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud detection",src:a(734).default})),Object(s.b)("p",null,"Search for Redis and choose Redis Data Source."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud detection",src:a(735).default})),Object(s.b)("p",null,"Copy and paste the raw json content from ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-datasets/blob/master/use-cases/fraud-detection/Fraud-Stats-Grafana.json"}),"here"),"  in the \u2018Import via panel json\u2019 box. Click on Load."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud detection",src:a(736).default})),Object(s.b)("p",null,"This creates a dashboard \u2018Fraud Stats\u2019. If you get an error while importing the dashboard, try changing the name and UUID of the dashboard."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud detection",src:a(737).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"Fraud detection",src:a(738).default})),Object(s.b)("h3",{id:"conclusion--future-work"},"Conclusion & future work"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"If we consider the entire flow starting from fraud check, from event streaming to data processing to visualization (using insights), all of this would have required multiple components and extensive orchestration. With Redis Ecosystem, most of this is removed."),Object(s.b)("li",{parentName:"ul"},"This is just the beginning of more checks that can be done on events. A lot of other checks can be done using modules and data structures. For example; Redis provides geospatial data structures built over sorted sets. Since latitude and longitude can be derived from IP using IP to location conversion providers, a lot of insight can be derived on whether the event can be fraudulent or not."),Object(s.b)("li",{parentName:"ul"},"To reject servicing requests altogether, the redis-cell module to rate limit requests against a key can be used."),Object(s.b)("li",{parentName:"ul"},"RedisAI and neural-redis can be used to improve efficiency of identifying fraud based.")),Object(s.b)("h3",{id:"references-and-links"},"References and Links"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redis-developer/redis-datasets/tree/master/use-cases/fraud-detection"}),"Source Code")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.com/solutions/use-cases/fraud-detection/"}),"Build modern fraud-detection platforms with Redis Enterprise")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://lp.redis.com/rs/915-NFD-128/images/RedisLabs-Solution-Fraud-Detection.pdf"}),"Redis Enterprise to Power Modern Fraud-Detection Platforms")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.com/docs/lifelock-counts-redis-enterprise-fraud-mitigation/"}),"LifeLock Counts on Redis Enterprise for Fraud Mitigation"))))}l.isMDXComponent=!0},318:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(316),r=a(323);a(317),a(59);t.a=function(e){var t=i.a.useState(!1),a=t[0],n=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(s.a,{components:r.a},e.children)))}},319:function(e,t,a){"use strict";var n=a(0),i=a(320);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},320:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},321:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(319),r=a(324),o=a(60),c=a.n(o),d=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,u=e.values,b=e.groupId,p=e.className,f=Object(s.a)(),h=f.tabGroupChoices,m=f.setTabGroupChoices,g=Object(n.useState)(o),O=g[0],j=g[1],k=n.Children.toArray(e.children);if(null!=b){var v=h[b];null!=v&&v!==O&&u.some((function(e){return e.value===v}))&&j(v)}var w=function(e){j(e),null!=b&&m(b,e)},_=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},p)},u.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},322:function(e,t,a){"use strict";var n=a(3),i=a(0),s=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return s.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},726:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_grafana-c31c5ae1d7e724d14a7bbd7c5b134707.png"},727:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/frauddetection-d9732c9d0372f8af2d0268a8a113af19.png"},728:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_redisinsight-c574d1328522e820b8156532ffcab001.png"},729:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_ipblacklist-f4e8d0d5f13f4f52fcc23d8061d08089.png"},730:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_clickspam-21ecfdd1c5631fbcffa57463bff679c1.png"},731:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_grafana1-8633ce89081d060c7d0f9774a8732171.png"},732:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_grafana2-3edda1e9dbc167695911896f5b645078.png"},733:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_grafana3-db89018dffb79eb941d52728211333ff.png"},734:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_grafana4-0e5c1910e791d875c4c905a231b2f1e0.png"},735:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_grafana5-78a7bd37e9b3f2ed47ccd17df04f7506.png"},736:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_grafana6-1b09f5cf1b5ea3e4a62c22c31d3d2ce8.png"},737:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_grafana7-7b495232868383fa497fe1adcb127677.png"},738:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fraud_grafana8-417135e60aef78100d604f1c5da63e5e.png"}}]);