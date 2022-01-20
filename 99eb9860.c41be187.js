(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{231:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var i=a(3),n=a(7),r=(a(0),a(316)),s=(a(321),a(322),a(317),a(318),{id:"index-redisearch",title:"Perform Database Search and Analytics using RediSearch Browser Tool",sidebar_label:"Perform Database Search and Analytics using RediSearch Browser Tool",slug:"/explore/redisinsight/redisearch",authors:["ajeet"]}),l={unversionedId:"explore/redisinsight/redisearch/index-redisearch",id:"explore/redisinsight/redisearch/index-redisearch",isDocsHomePage:!1,title:"Perform Database Search and Analytics using RediSearch Browser Tool",description:"Author: Ajeet Singh Raina",source:"@site/docs/explore/redisinsight/redisearch/index-redisearch.mdx",slug:"/explore/redisinsight/redisearch",permalink:"/explore/redisinsight/redisearch",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/redisearch/index-redisearch.mdx",version:"current",lastUpdatedAt:1637878347,sidebar_label:"Perform Database Search and Analytics using RediSearch Browser Tool",sidebar:"docs",previous:{title:"Manage Redis time-series data using RedisTimeSeries Browser Tool",permalink:"/explore/redisinsight/redistimeseries"},next:{title:"Utilize Elasticache Auto Discovery For Redis with RedisInsight",permalink:"/explore/redisinsight/autodiscover"}},o=[{value:"Step 1. Create Redis database",id:"step-1-create-redis-database",children:[]},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",children:[{value:"Step 3. OpenBeerDB sample dataset",id:"step-3-openbeerdb-sample-dataset",children:[]},{value:"Step 4. Installing prerequisite packages",id:"step-4-installing-prerequisite-packages",children:[]},{value:"Step 5. Importing the data",id:"step-5-importing-the-data",children:[]},{value:"Step 6: Choose \u201cRediSearch\u201d under RedisInsight browser tool",id:"step-6-choose-redisearch-under-redisinsight-browser-tool",children:[]},{value:"Step 7. Using AGGREGATION",id:"step-7-using-aggregation",children:[]},{value:"Step 8. Create Redis database",id:"step-8-create-redis-database",children:[]},{value:"Step 9. Install RedisInsight",id:"step-9-install-redisinsight",children:[]},{value:"Step 10. Movie Sample Database",id:"step-10-movie-sample-database",children:[]},{value:"Step 11. Insert Movies",id:"step-11-insert-movies",children:[]},{value:"Step 12. RediSearch &amp; Indexing",id:"step-12-redisearch--indexing",children:[]},{value:"Step 13. Create the Index",id:"step-13-create-the-index",children:[]},{value:"Step 14: Fuzzy Search",id:"step-14-fuzzy-search",children:[]},{value:"Step 15. AGGREGATION",id:"step-15-aggregation",children:[]},{value:"Additional Links",id:"additional-links",children:[]}]}],c={toc:o};function b(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Author: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://twitter.com/ajeetsraina"}),"Ajeet Singh Raina")),Object(r.b)("p",null,"A full-featured pure desktop GUI client, RedisInsight supports RediSearch. ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/"}),"RediSearch"),"  is a powerful indexing, querying, and full-text search engine for Redis. It is one of the most mature and feature-rich Redis modules.With RedisInsight, the below functionalities are possible"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Multi-line for building queries"),Object(r.b)("li",{parentName:"ul"},"Added ability to submit query with \u2018ctrl + enter\u2019 in single line mode"),Object(r.b)("li",{parentName:"ul"},"Better handling of long index names in index selector dropdown"),Object(r.b)("li",{parentName:"ul"},"Fixed bug with pagination on queries with whitespace in the query string"),Object(r.b)("li",{parentName:"ul"},"Support Aggregation"),Object(r.b)("li",{parentName:"ul"},"Support Fuzzy logic"),Object(r.b)("li",{parentName:"ul"},"Simple and complex conditions"),Object(r.b)("li",{parentName:"ul"},"Sorting"),Object(r.b)("li",{parentName:"ul"},"Pagination"),Object(r.b)("li",{parentName:"ul"},"Counting")),Object(r.b)("p",null,"RediSearch allows you to quickly create indexes on datasets (Hashes), and uses an incremental indexing approach for rapid index creation and deletion. The indexes let you query your data at lightning speed, perform complex aggregations, and filter by properties, numeric ranges, and geographical distance."),Object(r.b)("h3",{id:"step-1-create-redis-database"},"Step 1. Create Redis database"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/explore/redismod"}),"Follow this link to create Redis database using Docker container "),"that comes with RediSearch module enabled"),Object(r.b)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),Object(r.b)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"}),"Click this link ")," to access a form that allows you to select the operating system of your choice."),Object(r.b)("p",null,Object(r.b)("img",{alt:"My Image",src:a(860).default})),Object(r.b)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),Object(r.b)("p",null,'Select "Connect to a Redis database"\n',Object(r.b)("img",{alt:"My Image",src:a(861).default})),Object(r.b)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password.  Then click \u201cADD REDIS DATABASE\u201d."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(388).default,title:"image_tooltip"})),Object(r.b)("p",null,"We will look at 2 datasets - one is OpenBeerDB and other is Movie datasets.\nLet us begin with OpenBeerDB sample dataset."),Object(r.b)("h3",{id:"step-3-openbeerdb-sample-dataset"},"Step 3. OpenBeerDB sample dataset"),Object(r.b)("p",null,"To demonstrate RediSearch, we will use OpenbeerDB dataset. The dataset is available publicly for general public under ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://openbeerdb.com"}),"openbeerdb.com")," "),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(862).default,title:"image_tooltip"})),Object(r.b)("p",null,"Let us clone the repository to access the dataset:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"$ git clone https://github.com/redis-developer/redis-datasets\ncd redis-datasets/redisearch/openbeerdb\n")),Object(r.b)("h3",{id:"step-4-installing-prerequisite-packages"},"Step 4. Installing prerequisite packages"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"$ brew install python3\n$ pip3 install -r requirements.txt\n")),Object(r.b)("h3",{id:"step-5-importing-the-data"},"Step 5. Importing the data"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"$ python3 import.py --url redis://localhost:6379\nImporting categories\u2026\nImporting styles...\nImporting breweries...\nAdding beer data to RediSearch..\n\n")),Object(r.b)("h3",{id:"step-6-choose-redisearch-under-redisinsight-browser-tool"},"Step 6: Choose \u201cRediSearch\u201d under RedisInsight browser tool"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(863).default,title:"image_tooltip"})),Object(r.b)("p",null,"Run the below query:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'"@abv:[5 6]"\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(864).default,title:"image_tooltip"})),Object(r.b)("p",null,"You can click on \u201c{:} \u201c to get a JSON view as shown below:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(865).default,title:"image_tooltip"})),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(866).default,title:"image_tooltip"})),Object(r.b)("p",null,"You can download the data in CSV format."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(867).default,title:"image_tooltip"})),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(868).default,title:"image_tooltip"})),Object(r.b)("h4",{id:"query-all-beers-with-abv-higher-than-5-but-lower-than-6"},"Query: All beers with ABV higher than 5% but lower than 6%"),Object(r.b)("p",null,"The beers are added to the RediSearch index weighted by ABV. So by default, the results will be ordered by ABV highest to lowest. Both ABV and IBU are sortable, so you can order results by either of these fields using sortby in the query"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(869).default,title:"image_tooltip"})),Object(r.b)("h4",{id:"query-all-beers-with-abv-higher-than-5-but-lower-than-6-within-the-specified-limits"},"Query: All beers with ABV higher than 5% but lower than 6% within the specified limits"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'"@abv:[5 6]" limit 0 100\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(870).default,title:"image_tooltip"})),Object(r.b)("h4",{id:"query-find-out-irish-ale-and-german-ale-beers-with-abv-greater-than-9"},"Query: Find out Irish Ale and German Ale beers with ABV greater than 9%:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(871).default,title:"image_tooltip"})),Object(r.b)("h3",{id:"step-7-using-aggregation"},"Step 7. Using AGGREGATION"),Object(r.b)("p",null,"Aggregations are a way to process the results of a search query, group, sort and transform them - and extract analytic insights from them. Much like aggregation queries in other databases and search engines, they can be used to create analytics reports, or perform Faceted Search style queries."),Object(r.b)("p",null,"For example, indexing a web-server's logs, we can create a report for unique users by hour, country or any other breakdown; or create different reports for errors, warnings, etc."),Object(r.b)("p",null,"Let's run the aggregation query"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'FT.AGGREGATE "beerIdx" "@abv:[5 6]" limit 0 1060 GROUPBY 1 @breweryid\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(872).default,title:"image_tooltip"})),Object(r.b)("p",null,"Let us look at Movie sample dataset too."),Object(r.b)("h3",{id:"step-8-create-redis-database"},"Step 8. Create Redis database"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/explore/redismod"}),"Follow this link to create Redis database using Docker container "),"that comes with RediSearch module enabled"),Object(r.b)("h3",{id:"step-9-install-redisinsight"},"Step 9. Install RedisInsight"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/explore/redisinsight/getting-started"}),"Follow this link")," to setup RedisInsight locally in your system"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(388).default,title:"image_tooltip"})),Object(r.b)("h3",{id:"step-10-movie-sample-database"},"Step 10. Movie Sample Database"),Object(r.b)("p",null,"In this project you will use a simple dataset describing movies, for now, all records are in English. You will learn more about other languages in another tutorial."),Object(r.b)("p",null,"A movie is represented by the following attributes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"movie_id"))," : The unique ID of the movie, internal to this database"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"title"))," : The title of the movie."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"plot"))," : A summary of the movie."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"genre"))," : The genre of the movie, for now a movie will only have a single genre."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"release_year"))," : The year the movie was released as a numerical value."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"rating"))," : A numeric value representing the public's rating for this movie."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"votes"))," : Number of votes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"poster"))," : Link to the movie poster."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"imdb_id"))," : id of the movie in the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://imdb.com"}),"IMDB")," database.")),Object(r.b)("h4",{id:"key-and-data-structure"},"Key and Data structure"),Object(r.b)("p",null,"As a Redis developer, one of the first things to look when building your application is to define the structure of the key and data (data design/data modeling)."),Object(r.b)("p",null,"A common way of defining the keys in Redis is to use specific patterns in them. For example in this application where the database will probably deal with various business objects: movies, actors, theaters, users, ... we can use the following pattern:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"business_object:key"))),Object(r.b)("p",null,"For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"movie:001")," for the movie with the id 001"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"user:001")," the user with the id 001")),Object(r.b)("p",null,"and for the movies information you should use a Redis ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.io/topics/data-types#hashes"}),"Hash"),". "),Object(r.b)("p",null,"A Redis Hash allows the application to structure all the movie attributes in individual fields; also RediSearch will index the fields based on the index definition."),Object(r.b)("h3",{id:"step-11-insert-movies"},"Step 11. Insert Movies"),Object(r.b)("p",null,"It is time now to add some data into your database, let's insert a few movies, using ",Object(r.b)("inlineCode",{parentName:"p"},"redis-cli")," or ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/"}),"RedisInsight"),"."),Object(r.b)("p",null,"Once you are connected to your Redis instance run the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'> HSET movie:11002 title "Star Wars: Episode V - The Empire Strikes Back" plot "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy." release_year 1980 genre "Action" rating 8.7 votes 1127635 imdb_id tt0080684\n\n\n> HSET movie:11003 title "The Godfather" plot "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." release_year 1972 genre "Drama" rating 9.2 votes 1563839 imdb_id tt0068646\n\n\n> HSET movie:11004 title "Heat" plot "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist." release_year 1995 genre "Thriller" rating 8.2 votes 559490 imdb_id tt0113277\n\n\n> HSET "movie:11005" title "Star Wars: Episode VI - Return of the Jedi" genre "Action" votes 906260 rating 8.3 release_year 1983  plot "The Rebels dispatch to Endor to destroy the second Empire\'s Death Star." ibmdb_id "tt0086190"\n\n\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(873).default,title:"image_tooltip"})),Object(r.b)("p",null,"Now it is possible to get information from the hash using the movie ID. For example if you want to get the title, and rating execute the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'>> HMGET movie:11002 title rating\n\n1) "Star Wars: Episode V - The Empire Strikes Back"\n2) "8.7"\n\n\n\n')),Object(r.b)("p",null,"And you can increment the rating of this movie using:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"HINCRBYFLOAT movie:11002 rating 0.1\n")),Object(r.b)("p",null,"But how do you get a movie or list of movies by year of release, rating or title?"),Object(r.b)("p",null,"One option, would be to read all the movies, check all fields and then return only matching movies; no need to say that this is a really bad idea."),Object(r.b)("p",null,"Nevertheless this is where Redis developers often create custom secondary indexes using SET/SORTED SET structures that point back to the movie hash. This needs some heavy design and implementation."),Object(r.b)("p",null,"This is where the RediSearch module can help, and why it was created."),Object(r.b)("h3",{id:"step-12-redisearch--indexing"},"Step 12. RediSearch & Indexing"),Object(r.b)("p",null,"RediSearch greatly simplifies this by offering a simple and automatic way to create secondary indices on Redis Hashes. (more datastructure will eventually come)"),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://github.com/RediSearch/redisearch-getting-started/blob/master/docs/images/secondary-index.png?raw=true",alt:"Secondary Index"}))),Object(r.b)("p",null,"Using RediSearch if you want to query on a field, you must first index that field. Let's start by indexing the following fields for our movies:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Title"),Object(r.b)("li",{parentName:"ul"},"Release Year"),Object(r.b)("li",{parentName:"ul"},"Rating"),Object(r.b)("li",{parentName:"ul"},"Genre")),Object(r.b)("p",null,"When creating a index you define:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"which data you want to index: all ",Object(r.b)("em",{parentName:"li"},"hashes")," with a key starting with ",Object(r.b)("inlineCode",{parentName:"li"},"movies")," "),Object(r.b)("li",{parentName:"ul"},"which fields in the hashes you want to index using a Schema definition.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Warning: Do not index all fields"))),Object(r.b)("p",{parentName:"blockquote"},"Indexes take space in memory, and must be updated when the primary data is updated. So create the index carefully and keep the definition up to date with your needs.")),Object(r.b)("h3",{id:"step-13-create-the-index"},"Step 13. Create the Index"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'>> FT.CREATE idx:movie ON hash PREFIX 1 "movie:" SCHEMA title TEXT SORTABLE release_year NUMERIC SORTABLE rating NUMERIC SORTABLE genre TAG SORTABLE\n\n"OK"\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(874).default,title:"image_tooltip"})),Object(r.b)("p",null,"The database contains a few movies, and an index, it is now possible to execute some queries."),Object(r.b)("h4",{id:"query-all-the-movies-that-contains-the-string-war"},'Query: All the movies that contains the string "',Object(r.b)("inlineCode",{parentName:"h4"},"war"),'"'),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(875).default,title:"image_tooltip"})),Object(r.b)("h4",{id:"query-limit-the-list-of-fields-returned-by-the-query-using-the-return-parameter"},"Query: Limit the list of fields returned by the query using the RETURN parameter"),Object(r.b)("p",null,"The FT.SEARCH commands returns a list of results starting with the number of results, then the list of elements (keys & fields)."),Object(r.b)("p",null,"As you can see the movie ",Object(r.b)("em",{parentName:"p"},"Star Wars: Episode V - The Empire Strikes Back")," is found, even though you used only the word \u201cwar\u201d to match \u201cWars\u201d in the title. This is because the title has been indexed as text, so the field is ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/Escaping/"}),"tokenized")," and ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/Stemming/"}),"stemmed"),"."),Object(r.b)("p",null,"Later when looking at the query syntax in more detail you will learn more about the search capabilities."),Object(r.b)("p",null,"It is also possible to limit the list of fields returned by the query using the ",Object(r.b)("inlineCode",{parentName:"p"},"RETURN")," parameter, let's run the same query, and return only the title and release_year:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(876).default,title:"image_tooltip"})),Object(r.b)("h4",{id:"query-all-the-movies-that-contains-the-string-war-but-not-the-jedi-one"},'Query: All the movies that contains the string "war but NOT the jedi one"'),Object(r.b)("p",null,"Adding the string ",Object(r.b)("inlineCode",{parentName:"p"},"-jedi")," (minus) will ask the query engine not to return values that contain ",Object(r.b)("inlineCode",{parentName:"p"},"jedi"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'_"war -jedi" RETURN 2 title release_year_\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(877).default,title:"image_tooltip"})),Object(r.b)("h3",{id:"step-14-fuzzy-search"},"Step 14: Fuzzy Search"),Object(r.b)("p",null,'All the movies that contains the string "gdfather using fuzzy search"'),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(878).default,title:"image_tooltip"})),Object(r.b)("h4",{id:"query-all-thriller-movies"},"Query: All Thriller movies"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'@genre:{Thriller}" RETURN 2 title release_year\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(879).default,title:"image_tooltip"})),Object(r.b)("h4",{id:"query-all-thriller-or-action-movies"},"Query: All Thriller or Action movies"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'@genre:{Thriller|Action}" RETURN 2 title release_year\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(880).default,title:"image_tooltip"})),Object(r.b)("h4",{id:"query--all-the-movies-released-between-1970-and-1980-included"},"Query : All the movies released between 1970 and 1980 (included)"),Object(r.b)("p",null,"The FT.SEARCH syntax has two ways to query numeric fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"using the FILTER parameter")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"FILTER release_year 1970 1980 RETURN 2 title release_year"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(881).default,title:"image_tooltip"})),Object(r.b)("h3",{id:"step-15-aggregation"},"Step 15. AGGREGATION"),Object(r.b)("h4",{id:"query-number-of-movies-by-year"},"Query: Number of movies by year"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'"*" GROUPBY 1 @release_year REDUCE COUNT 0 AS nb_of_movies\n\n1\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(882).default,title:"image_tooltip"})),Object(r.b)("h4",{id:"query-number-of-movies-by-year-from-the-most-recent-to-the-oldest"},"Query: Number of movies by year from the most recent to the oldest"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'"*" GROUPBY 1 @release_year REDUCE COUNT 0 AS nb_of_movies SORTBY 2 @release_year DESC\n\n1\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(883).default,title:"image_tooltip"})),Object(r.b)("h3",{id:"additional-links"},"Additional Links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://oss.redis.com/redisearch/"}),"RediSearch Project")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/howtos/redisearch"}),"RediSearch Tutorial")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/howtos/moviesdatabase/getting-started"}),"Getting Started with Movie Database")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Slowlog Configuration using RedisInsight")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Analysis using RedisInsight")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Visualize Redis database keys using RedisInsight Browser Tool")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/streams"}),"Using Redis Streams with RedisInsight"))),Object(r.b)("h2",{id:""}),Object(r.b)("div",null,Object(r.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(r.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}b.isMDXComponent=!0},318:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(316),s=a(323);a(317),a(59);t.a=function(e){var t=n.a.useState(!1),a=t[0],i=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(r.a,{components:s.a},e.children)))}},319:function(e,t,a){"use strict";var i=a(0),n=a(320);t.a=function(){var e=Object(i.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},320:function(e,t,a){"use strict";var i=a(0),n=Object(i.createContext)(void 0);t.a=n},321:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(319),s=a(324),l=a(60),o=a.n(l),c=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,d=e.values,u=e.groupId,p=e.className,h=Object(r.a)(),m=h.tabGroupChoices,g=h.setTabGroupChoices,O=Object(i.useState)(l),f=O[0],j=O[1],y=i.Children.toArray(e.children);if(null!=u){var v=m[u];null!=v&&v!==f&&d.some((function(e){return e.value===v}))&&j(v)}var w=function(e){j(e),null!=u&&g(u,e)},N=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},p)},d.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(i.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},322:function(e,t,a){"use strict";var i=a(3),n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:a,className:n}),t)}},388:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image1-f8e5338a39c35268d5a9207a15247f1b.png"},860:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"},861:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},862:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image2-9f49695e8ca7b1525740ca75dd68b7ea.png"},863:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-b05089b211e4c19c52afe533c7ace08b.png"},864:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image4-177c3f8af0a84daa55ad2df4b92f895a.png"},865:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image5-c79e377df471573514e1d33d89a5958d.png"},866:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image6-05799313aa27fc9247ec6edbe048b24f.png"},867:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-00395bf292389d4a9309a56c80062cf6.png"},868:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image8-0fcea7087f5f6f150037a3814a30757c.png"},869:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image9-01ac65e370f7bf9b59b35f89e633c6ef.png"},870:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image10-137ed88b71d00ef6bfa3b186442dc24d.png"},871:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image11-48c04ecd469989b08f3e0330388671e8.png"},872:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image12-579ec643f0ca7ea97fec60c046a41a28.png"},873:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image13-5e2f7c8a0d217b1363bb706e987b98f3.png"},874:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image14-0d65864af8b590f52012b0e136768623.png"},875:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image15-008b9a7b47fe4151a66de202b1b6dd59.png"},876:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image16-f992defc41799956f82333cc06377d2a.png"},877:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image17-7f3c5aa1ce83ac294401510bf156d396.png"},878:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image18-a93e8a7ea09c745a0146e49cd0bc7269.png"},879:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image19-7680d19305a35002e1a62b4468f97f9d.png"},880:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image20-f4a583b0061715c45027a2a57eb124d6.png"},881:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image21-2e5d9b437b49b139f885fdee6684f777.png"},882:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image22-5f233e63bce05482d936d7ff2439fb5d.png"},883:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image23-721ab7c444c516c69a9e6dbcd9831735.png"}}]);