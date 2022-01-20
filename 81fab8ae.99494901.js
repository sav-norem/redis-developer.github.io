(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{203:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var i=a(3),n=a(7),s=(a(0),a(316)),r=(a(321),a(322),a(317),a(318),{id:"index-fastapi",title:"Using Redis with FastAPI",sidebar_label:"Redis with FastAPI",slug:"/develop/python/fastapi",authors:["andrew"]}),o={unversionedId:"develop/python/fastapi/index-fastapi",id:"develop/python/fastapi/index-fastapi",isDocsHomePage:!1,title:"Using Redis with FastAPI",description:"This tutorial helps you get started with Redis and FastAPI.",source:"@site/docs/develop/python/fastapi/index-fastapi.mdx",slug:"/develop/python/fastapi",permalink:"/develop/python/fastapi",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/python/fastapi/index-fastapi.mdx",version:"current",lastUpdatedAt:1637874478,sidebar_label:"Redis with FastAPI",sidebar:"docs",previous:{title:"Python and Redis",permalink:"/develop/python/"},next:{title:".NET and Redis",permalink:"/develop/dotnet/"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Pre-Tutorial Quiz",id:"pre-tutorial-quiz",children:[]},{value:"Set Up the IsBitcoinLit Project",id:"set-up-the-isbitcoinlit-project",children:[]},{value:"About RedisTimeSeries",id:"about-redistimeseries",children:[]},{value:"An Asyncio Primer",id:"an-asyncio-primer",children:[]},{value:"Installing the Redis Client",id:"installing-the-redis-client",children:[]},{value:"Integrate aioredis-py with FastAPI",id:"integrate-aioredis-py-with-fastapi",children:[{value:"Creating the Timeseries",id:"creating-the-timeseries",children:[]},{value:"Storing Sentiment and Price Data in RedisTimeSeries",id:"storing-sentiment-and-price-data-in-redistimeseries",children:[]}]},{value:"Calculating Three-Hour Averages with RedisTimeSeries",id:"calculating-three-hour-averages-with-redistimeseries",children:[]},{value:"Caching Data with Redis",id:"caching-data-with-redis",children:[{value:"Writing Cache Data to Redis",id:"writing-cache-data-to-redis",children:[]},{value:"Reading Cache Data to Redis",id:"reading-cache-data-to-redis",children:[]}]},{value:"Summary",id:"summary",children:[]}],l={toc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This tutorial helps you get started with Redis and FastAPI."),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/tiangolo/fastapi"}),"FastAPI")," is a Python web framework based on\nthe ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.starlette.io/"}),"Starlette")," microframework. With deep support for\nasyncio, FastAPI is indeed ",Object(s.b)("em",{parentName:"p"},"very fast"),". FastAPI also distinguishes itself with\nfeatures like automatic ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://openapis.org/"}),"OpenAPI (OAS)")," documentation for your API,\neasy-to-use data validation tools, and more."),Object(s.b)("p",null,"Of course, the best way to ",Object(s.b)("strong",{parentName:"p"},"make your FastAPI service even faster")," is to use\nRedis. Unlike most databases, Redis excels at low-latency access because it's an in-memory database."),Object(s.b)("p",null,"In this tutorial, we'll walk through the steps necessary to use Redis with\nFastAPI. We're going to build ",Object(s.b)("em",{parentName:"p"},"IsBitcoinLit"),", an API that stores Bitcoin\nsentiment and price averages in ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://oss.redis.com/redistimeseries/"}),"RedisTimeSeries"),", then rolls these averages up for\nthe last three hours."),Object(s.b)("p",null,"Next, let's look at the learning objectives of this tutorial."),Object(s.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(s.b)("p",null,"The learning objectives of this tutorial are:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Learn how to install aioredis-py and connect to Redis"),Object(s.b)("li",{parentName:"ol"},"Learn how to integrate aioredis-py with FastAPI"),Object(s.b)("li",{parentName:"ol"},"Learn how to use RedisTimeSeries to store and query timeseries data"),Object(s.b)("li",{parentName:"ol"},"Learn how to use Redis as a cache with aioredis-py")),Object(s.b)("p",null,"Let's get started!"),Object(s.b)("h2",{id:"pre-tutorial-quiz"},"Pre-Tutorial Quiz"),Object(s.b)("p",null,"Want to check gaps in your knowledge of Redis and FastAPI before you continue? Take our short pre-tutorial quiz!"),Object(s.b)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfFmBWLtm8oLouaiT3wXpbgZm8Df-FV_xFvnuXEWfbCoh3clw/viewform?embedded=true",width:"640",height:"524",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),Object(s.b)("p",null,"You can also ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://forms.gle/eXiiVcgXqG9UNarG6"}),"visit the quiz directly"),"."),Object(s.b)("h2",{id:"set-up-the-isbitcoinlit-project"},"Set Up the IsBitcoinLit Project"),Object(s.b)("p",null,"You can achieve the learning objectives of this tutorial by reading through the\ntext and code examples that follow."),Object(s.b)("p",null,"However, we recommend that you set up the example project yourself, so that you\ncan try out some of the code as you learn. The project has a permissive license\nthat allows you to use it freely."),Object(s.b)("p",null,"To get started, ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/redis-developer/fastapi-redis-tutorial"}),"fork the example project on\nGitHub"),"."),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/redis-developer/fastapi-redis-tutorial/blob/master/README.md"}),"Follow the README"),"\nto the project running."),Object(s.b)("h2",{id:"about-redistimeseries"},"About RedisTimeSeries"),Object(s.b)("p",null,"RedisTimeSeries is a source available Redis Module that adds a timeseries data type to Redis. Timeseries is a great way to model any data that you want to query over time, like in this case, the ever-changing price of Bitcoin."),Object(s.b)("p",null,"You can get started by following the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://oss.redis.com/redistimeseries/#setup"}),"setup instructions")," in the RedisTimeSeries documentation."),Object(s.b)("p",null,"However, note that this tutorial's example project configures RedisTimeSeries automatically for you with the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://hub.docker.com/r/redislabs/redismod"}),"redismod")," Docker image."),Object(s.b)("h2",{id:"an-asyncio-primer"},"An Asyncio Primer"),Object(s.b)("p",null,"The ",Object(s.b)("em",{parentName:"p"},"IsBitcoinLit")," project is completely async. That means we use an\nasyncio-compatible Redis client called\n",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/aio-libs/aioredis-py"}),"aioredis-py")," and FastAPI's async\nfeatures."),Object(s.b)("p",null,"If you ",Object(s.b)("strong",{parentName:"p"},"aren't familiar with asyncio"),", take a few minutes to watch this\nprimer on asyncio before continuing:"),Object(s.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Xbl7XjFYsN4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(s.b)("h2",{id:"installing-the-redis-client"},"Installing the Redis Client"),Object(s.b)("p",null,"We're going to start this tutorial assuming that you have a FastAPI project to\nwork with. We'll use the ",Object(s.b)("em",{parentName:"p"},"IsBitcoinLit")," project for our examples."),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://python-poetry.org/"}),"Poetry")," is the best way to manage Python dependencies today, so we'll use it in this tutorial."),Object(s.b)("p",null,"IsBitcoinLit includes a ",Object(s.b)("inlineCode",{parentName:"p"},"pyproject.toml")," file that Poetry uses to manage the project's directories, but if you had not already created one, you could do so like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"    $ poetry init   \n")),Object(s.b)("p",null,"Once you have a ",Object(s.b)("inlineCode",{parentName:"p"},"pyproject.toml")," file, and assuming you already added FastAPI and any other necessary dependencies, you could add aioredis-py to your project like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"    $ poetry add aioredis-py@2.0.0b1\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"NOTE"),": This tutorial uses a beta version of aioredis-py 2.0. The 2.0 version of aioredis-py features an API that matches the most popular synchronous Redis client for Python, ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/andymccurdy/redis-py"}),"redis-py"),"."),Object(s.b)("p",null,"The aioredis-py client is now installed. Time to write some code!"),Object(s.b)("h2",{id:"integrate-aioredis-py-with-fastapi"},"Integrate aioredis-py with FastAPI"),Object(s.b)("p",null,"We're going to use Redis for a few things in this FastAPI app:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Storing 30-second averages of sentiment and price for the last 24 hours with RedisTimeSeries"),Object(s.b)("li",{parentName:"ol"},"Rolling up these averages into a three-hour snapshot with RedisTimeSeries"),Object(s.b)("li",{parentName:"ol"},"Caching the three-hour snapshot")),Object(s.b)("p",null,"Let's look at each of these integration points in more detail."),Object(s.b)("h3",{id:"creating-the-timeseries"},"Creating the Timeseries"),Object(s.b)("p",null,"The data for our app consists of 30-second averages of Bitcoin prices and sentiment ratings for the last 24 hours. We pull these from the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://senticrypt.com/docs.html"}),"SentiCrypt API"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"NOTE"),": We have no affiliation with SentiCrypt or any idea how accurate these numbers are. This example is ",Object(s.b)("strong",{parentName:"p"},"just for fun"),"!"),Object(s.b)("p",null,"We're going to store price and sentiment averages in a timeseries with RedisTimeSeries, so we want to make sure that when the app starts up, the timeseries exists."),Object(s.b)("p",null,"We can use a ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://fastapi.tiangolo.com/advanced/events/"}),"startup event")," to accomplish this. Doing so looks like the following:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"@app.on_event('startup')\nasync def startup_event():\n    keys = Keys()\n    await initialize_redis(keys)\n")),Object(s.b)("p",null,"We'll use the ",Object(s.b)("inlineCode",{parentName:"p"},"TS.CREATE")," RedisTimeSeries command to create the timeseries within our ",Object(s.b)("inlineCode",{parentName:"p"},"initialize_redis()")," function:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"async def make_timeseries(key):\n    \"\"\"\n    Create a timeseries with the Redis key `key`.\n\n    We'll use the duplicate policy known as \"first,\" which ignores\n    duplicate pairs of timestamp and values if we add them.\n\n    Because of this, we don't worry about handling this logic\n    ourselves -- but note that there is a performance cost to writes\n    using this policy.\n    \"\"\"\n    try:\n        await redis.execute_command(\n            'TS.CREATE', key,\n            'DUPLICATE_POLICY', 'first',\n        )\n    except ResponseError as e:\n        # Time series probably already exists\n        log.info('Could not create timeseries %s, error: %s', key, e)\n\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"TIP"),": An interesting point to note from this code is that when we create a timeseries, we can use the ",Object(s.b)("inlineCode",{parentName:"p"},"DUPLICATE_POLICY")," option to specify how to handle duplicate pairs of timestamp and values."),Object(s.b)("h3",{id:"storing-sentiment-and-price-data-in-redistimeseries"},"Storing Sentiment and Price Data in RedisTimeSeries"),Object(s.b)("p",null,"A ",Object(s.b)("inlineCode",{parentName:"p"},"/refresh")," endpoint exists in the app to allow a client to trigger a refresh of the 30-second averages. This is the entire function:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"@app.post('/refresh')\nasync def refresh(background_tasks: BackgroundTasks, keys: Keys = Depends(make_keys)):\n    async with httpx.AsyncClient() as client:\n        data = await client.get(SENTIMENT_API_URL)\n    await persist(keys, data.json())\n    data = await calculate_three_hours_of_data(keys)\n    background_tasks.add_task(set_cache, data, keys)\n\n")),Object(s.b)("p",null,"As is often the case with Python, a lot happens in a few lines, so let's walk through them."),Object(s.b)("p",null,"The first thing we do is get the latest sentiment and price data from SentiCrypt. The response data looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "count": 7259,\n        "timestamp": 1625592626.3452034,\n        "rate": 0.0,\n        "last": 0.33,\n        "sum": 1425.82,\n        "mean": 0.2,\n        "median": 0.23,\n        "btc_price": "33885.23"\n    }, \n    //... Many more entries\n]\n')),Object(s.b)("p",null,"Then we save the data into two timeseries in Redis with the ",Object(s.b)("inlineCode",{parentName:"p"},"persist()")," function. That ends up calling another helper, ",Object(s.b)("inlineCode",{parentName:"p"},"add_many_to_timeseries()"),", like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"    await add_many_to_timeseries(\n        (\n            (ts_price_key, 'btc_price'),\n            (ts_sentiment_key, 'mean'),\n        ), data,\n    )\n")),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"add_many_to_timeseries()"),' function takes a list of (timeseries key, sample key) pairs and a list of samples from SentiCrypt. For each sample, it reads the value of the sample key in the SentiCrypt sample, like "btc_price," and adds that value to the given timeseries key.'),Object(s.b)("p",null,"Here's the function:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'async def add_many_to_timeseries(\n    key_pairs: Iterable[Tuple[str, str]],\n    data: BitcoinSentiments\n):\n    """\n    Add many samples to a single timeseries key.\n\n    `key_pairs` is an iteratble of tuples containing in the 0th position the\n    timestamp key into which to insert entries and the 1th position the name\n    of the key within th `data` dict to find the sample.\n    """\n    partial = functools.partial(redis.execute_command, \'TS.MADD\')\n    for datapoint in data:\n        for timeseries_key, sample_key in key_pairs:\n            partial = functools.partial(\n                partial, timeseries_key, int(\n                    float(datapoint[\'timestamp\']) * 1000,\n                ),\n                datapoint[sample_key],\n            )\n    return await partial()\n')),Object(s.b)("p",null,"This code is dense, so let's break it down."),Object(s.b)("p",null,"We're using the ",Object(s.b)("inlineCode",{parentName:"p"},"TS.MADD")," RedisTimeSeries command to add many samples to a timeseries. We use ",Object(s.b)("inlineCode",{parentName:"p"},"TS.MADD")," because doing so is faster than ",Object(s.b)("inlineCode",{parentName:"p"},"TS.ADD")," for adding batches of samples to a timeseries."),Object(s.b)("p",null,"This results in a single large ",Object(s.b)("inlineCode",{parentName:"p"},"TS.MADD")," call that adds price data to the price timeseries and sentiment data to the sentiment timeseries. Conveniently, ",Object(s.b)("inlineCode",{parentName:"p"},"TS.MADD")," can add samples to multiple timeseries in a single call."),Object(s.b)("h2",{id:"calculating-three-hour-averages-with-redistimeseries"},"Calculating Three-Hour Averages with RedisTimeSeries"),Object(s.b)("p",null,"Clients use IsBitcoinLit to get the average price and sentiment for each of the last three hours. But so far, we've only stored 30-second averages in Redis. How do we calculate the average of these averages for the last three hours?"),Object(s.b)("p",null,"When we run ",Object(s.b)("inlineCode",{parentName:"p"},"/refresh"),", we call ",Object(s.b)("inlineCode",{parentName:"p"},"calculate_three_hours_of_data()")," to do so. The function looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"async def calculate_three_hours_of_data(keys: Keys) -> Dict[str, str]:\n    sentiment_key = keys.timeseries_sentiment_key()\n    price_key = keys.timeseries_price_key()\n    three_hours_ago_ms = int((now() - timedelta(hours=3)).timestamp() * 1000)\n\n    sentiment = await get_hourly_average(sentiment_key, three_hours_ago_ms)\n    price = await get_hourly_average(price_key, three_hours_ago_ms)\n\n    last_three_hours = [{\n        'price': data[0][1], 'sentiment': data[1][1],\n        'time': datetime.fromtimestamp(data[0][0] / 1000, tz=timezone.utc),\n    }\n        for data in zip(price, sentiment)]\n\n    return {\n        'hourly_average_of_averages': last_three_hours,\n        'sentiment_direction': get_direction(last_three_hours, 'sentiment'),\n        'price_direction': get_direction(last_three_hours, 'price'),\n    }\n")),Object(s.b)("p",null,"There is more going on here than we need to know for this tutorial. As a summary, most of this code exists to support calls to ",Object(s.b)("inlineCode",{parentName:"p"},"get_hourly_average()"),". "),Object(s.b)("p",null,"That function is where the core logic exists to calculate averages for the last three hours, so let's see what it contains:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"async def get_hourly_average(ts_key: str, top_of_the_hour: int):\n    response = await redis.execute_command(\n        'TS.RANGE', ts_key, top_of_the_hour, '+',\n        'AGGREGATION', 'avg', HOURLY_BUCKET,\n    )\n    # The response is a list of the structure [timestamp, average].\n    return response\n")),Object(s.b)("p",null,"Here, we use the ",Object(s.b)("inlineCode",{parentName:"p"},"TS.RANGE"),' command to get the samples in the timeseries from the "top" of the hour three hours ago, until the latest sample in the series. With the ',Object(s.b)("inlineCode",{parentName:"p"},"AGGREGATE")," parameter, we get back the averages of the samples in hourly buckets."),Object(s.b)("p",null,"So where does this leave us? With ",Object(s.b)("strong",{parentName:"p"},"averages of the averages"),", one for each of the last three hours."),Object(s.b)("h2",{id:"caching-data-with-redis"},"Caching Data with Redis"),Object(s.b)("p",null,"Let's review. We have code that achieves the following:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Gets the latest sentiment and price data from SentiCrypt."),Object(s.b)("li",{parentName:"ol"},"Saves the data into two timeseries in Redis."),Object(s.b)("li",{parentName:"ol"},"Calculates the average of the averages for the last three hours.")),Object(s.b)("p",null,"The snapshot of averages for the last three hours is the data we want to serve clients when they hit the ",Object(s.b)("inlineCode",{parentName:"p"},"/is-bitcoin-lit")," endpoint. We could run this calculation every time a client requests data, but that would be inefficient. Let's cache it in Redis!"),Object(s.b)("p",null,"First, we'll look at ",Object(s.b)("strong",{parentName:"p"},"writing to the cache"),". Then we'll see how FastAPI ",Object(s.b)("strong",{parentName:"p"},"reads from")," the cache."),Object(s.b)("h3",{id:"writing-cache-data-to-redis"},"Writing Cache Data to Redis"),Object(s.b)("p",null,"Take a closer look at the last line of the ",Object(s.b)("inlineCode",{parentName:"p"},"refresh()")," function:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"    background_tasks.add_task(set_cache, data, keys)\n")),Object(s.b)("p",null,"In FastAPI, you can run code outside of a web request after returning a response. This feature is called ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://fastapi.tiangolo.com/tutorial/background-tasks/"}),Object(s.b)("em",{parentName:"a"},"background tasks")),"."),Object(s.b)("p",null,"This is not as robust as using a background task library like ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.celeryproject.org/en/stable/getting-started/introduction.html"}),"Celery"),". Instead, Background Tasks are a simple way to run code outside of a web request, which is a great fit for things like updating a cache."),Object(s.b)("p",null,"When you call ",Object(s.b)("inlineCode",{parentName:"p"},"add_task()"),", you pass in a function and a list of arguments. Here, we pass in ",Object(s.b)("inlineCode",{parentName:"p"},"set_cache()"),". This function saves the three-hour averages summary to Redis. Let's look at how it works:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"async def set_cache(data, keys: Keys):\n    def serialize_dates(v):\n        return v.isoformat() if isinstance(v, datetime) else v\n\n    await redis.set(\n        keys.cache_key(),\n        json.dumps(data, default=serialize_dates),\n        ex=TWO_MINUTES,\n    )\n")),Object(s.b)("p",null,"First, we serialize the three-hour summary data to JSON and save it to Redis. We use the ",Object(s.b)("inlineCode",{parentName:"p"},"ex")," parameter to set the expiration time for the data to two minutes."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"TIP"),": You need to provide a default serializer for the ",Object(s.b)("inlineCode",{parentName:"p"},"json.dumps()")," function so that ",Object(s.b)("inlineCode",{parentName:"p"},"dumps()")," knows how to serialize datetime objects."),Object(s.b)("p",null,"This means that after every refresh, we've primed the cache. The cache isn't primed for long -- only two minutes -- but it's something!"),Object(s.b)("h3",{id:"reading-cache-data-to-redis"},"Reading Cache Data to Redis"),Object(s.b)("p",null,"We haven't even seen the API endpoint that clients will use yet! Here it is:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"@app.get('/is-bitcoin-lit')\nasync def bitcoin(background_tasks: BackgroundTasks, keys: Keys = Depends(make_keys)):\n    data = await get_cache(keys)\n\n    if not data:\n        data = await calculate_three_hours_of_data(keys)\n        background_tasks.add_task(set_cache, data, keys)\n\n    return data\n\n")),Object(s.b)("p",null,"To use this endpoint, clients make a GET request to ",Object(s.b)("inlineCode",{parentName:"p"},"/is-bitcoin-lit"),". Then we try to get the cached three-hour summary from Redis. If we can't, we calculate the three-hour summary, return it, and then save it outside of the web request."),Object(s.b)("p",null,"We've already seen how calculating the summary data works, and we just explored saving the summary data to Redis. So, let's look at the ",Object(s.b)("inlineCode",{parentName:"p"},"get_cache()")," function, where we read the cached data:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"def datetime_parser(dct):\n    for k, v in dct.items():\n        if isinstance(v, str) and v.endswith('+00:00'):\n            try:\n                dct[k] = datetime.datetime.fromisoformat(v)\n            except:\n                pass\n    return dct\n\n\nasync def get_cache(keys: Keys):\n    current_hour_cache_key = keys.cache_key()\n    current_hour_stats = await redis.get(current_hour_cache_key)\n\n    if current_hour_stats:\n        return json.loads(current_hour_stats, object_hook=datetime_parser)\n")),Object(s.b)("p",null,"Remember that when we serialized the summary data to JSON, we needed to provide a default serializer for ",Object(s.b)("inlineCode",{parentName:"p"},"json.dumps()")," that understood datetime objects. Now that we're ",Object(s.b)("em",{parentName:"p"},"deserializing")," that data, we need to give ",Object(s.b)("inlineCode",{parentName:"p"},"json.loads()"),' an "object hook" that understands datetime strings. That\'s what ',Object(s.b)("inlineCode",{parentName:"p"},"datetime_parser()")," does."),Object(s.b)("p",null,"Other than parsing dates, this code is relatively straightforward. We get the current hour's cache key, and then we try to get the cached data from Redis. If we can't, we return ",Object(s.b)("inlineCode",{parentName:"p"},"None"),"."),Object(s.b)("h2",{id:"summary"},"Summary"),Object(s.b)("p",null,"Putting all the pieces together, we now have a FastAPI app that can retrieve Bitcoin price and sentiment averages, store the averages in Redis, cache three-hour summary data in Redis, and serve the data to clients. Not too shabby!"),Object(s.b)("p",null,"Here are a few ",Object(s.b)("strong",{parentName:"p"},"notes to consider"),":"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"We manually controlled caching in this tutorial, but you can also use a library like ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/aio-libs/aiocache"}),"aiocache")," to cache data in Redis."),Object(s.b)("li",{parentName:"ol"},"We ran RedisTimeSeries commands like ",Object(s.b)("inlineCode",{parentName:"li"},"TS.MADD")," using the ",Object(s.b)("inlineCode",{parentName:"li"},"execute_command()")," method in aioredis-py. If you are instead using redis-py in a synchronous project, you can use the ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/RedisTimeSeries/redistimeseries-py"}),"redistimeseries-py")," library to run RedisTimeSeries commands.")))}d.isMDXComponent=!0},318:function(e,t,a){"use strict";var i=a(0),n=a.n(i),s=a(316),r=a(323);a(317),a(59);t.a=function(e){var t=n.a.useState(!1),a=t[0],i=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(s.a,{components:r.a},e.children)))}},319:function(e,t,a){"use strict";var i=a(0),n=a(320);t.a=function(){var e=Object(i.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},320:function(e,t,a){"use strict";var i=a(0),n=Object(i.createContext)(void 0);t.a=n},321:function(e,t,a){"use strict";var i=a(0),n=a.n(i),s=a(319),r=a(324),o=a(60),c=a.n(o),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,h=e.groupId,b=e.className,u=Object(s.a)(),m=u.tabGroupChoices,j=u.setTabGroupChoices,f=Object(i.useState)(o),g=f[0],y=f[1],O=i.Children.toArray(e.children);if(null!=h){var w=m[h];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&y(w)}var v=function(e){y(e),null!=h&&j(h,e)},_=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},b)},p.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(i.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},322:function(e,t,a){"use strict";var i=a(3),n=a(0),s=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return s.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:a,className:n}),t)}}}]);