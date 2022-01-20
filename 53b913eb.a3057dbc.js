(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(316)),i=(n(317),{id:"index-lesson_7",title:"Search with RediSearch",sidebar_label:"Search w/ RediSearch",slug:"/develop/java/redis-and-spring-course/lesson_7"}),s={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_7/index-lesson_7",id:"develop/java/spring/redis-and-spring-course/lesson_7/index-lesson_7",isDocsHomePage:!1,title:"Search with RediSearch",description:"Author: Brian Sam-Bodden",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_7/index-lesson_7.mdx",slug:"/develop/java/redis-and-spring-course/lesson_7",permalink:"/develop/java/redis-and-spring-course/lesson_7",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_7/index-lesson_7.mdx",version:"current",lastUpdatedAt:1637874478,sidebar_label:"Search w/ RediSearch",sidebar:"docs",previous:{title:"Domain Models with RedisJSON",permalink:"/develop/java/redis-and-spring-course/lesson_6"},next:{title:"Recommendations with RedisGraph",permalink:"/develop/java/redis-and-spring-course/lesson_8"}},c=[{value:"Objectives",id:"objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"RediSearch",id:"redisearch",children:[]},{value:"Using spring-redisearch",id:"using-spring-redisearch",children:[]},{value:"Creating a Search Index",id:"creating-a-search-index",children:[]},{value:"Full-text Search Queries",id:"full-text-search-queries",children:[]},{value:"Adding and getting Auto-complete suggestions",id:"adding-and-getting-auto-complete-suggestions",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Author: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/bsbodden"}),"Brian Sam-Bodden")),Object(o.b)("h3",{id:"objectives"},"Objectives"),Object(o.b)("p",null,"Learn how the RediSearch module can bridge the querying gap between SQL and NoSQL systems. We\u2019ll focus on two everyday use cases: full-text search and auto-complete."),Object(o.b)("h3",{id:"agenda"},"Agenda"),Object(o.b)("p",null,"In this lesson, you'll learn:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How to create search indexes with RediSeach using spring-redisearch and lettuce-search."),Object(o.b)("li",{parentName:"ul"},"How to use RediSearch in a Spring Boot application to implement faceted search."),Object(o.b)("li",{parentName:"ul"},"How to use the RediSearch suggestions feature to implement auto-complete.\nIf you get stuck:"),Object(o.b)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/redis-developer/redi2read/tree/course/milestone-7"}),"https://github.com/redis-developer/redi2read/tree/course/milestone-7"))),Object(o.b)("h3",{id:"redisearch"},"RediSearch"),Object(o.b)("p",null,"RediSearch is a source-available module for querying, secondary indexing, and full-text search in Redis.\nRedisearch implements a secondary index in Redis, but unlike other Redis indexing libraries, it does not use internal data structures such as sorted sets.\nThis also enables more advanced features, such as multi-field queries, aggregation, and full-text search. Also, RediSearch supports exact phrase matching and numeric filtering for text queries, neither possible nor efficient with traditional Redis indexing approaches.\nHaving a rich query and aggregation engine in your Redis database opens the door to many new applications that go well beyond caching. You can use Redis as your primary database even when you need to access the data using complex queries without adding complexity to the code to update and index data."),Object(o.b)("h3",{id:"using-spring-redisearch"},"Using spring-redisearch"),Object(o.b)("p",null,"Spring RediSearch (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/RediSearch/spring-redisearch"}),"https://github.com/RediSearch/spring-redisearch"),") is a library built on LettuSearch (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/RediSearch/lettusearch"}),"https://github.com/RediSearch/lettusearch"),"), providing access to RediSearch from Spring applications.\nLettuSearch is a Java client for RediSearch based on the popular Redis Java client library Lettuce.\nAdding the ",Object(o.b)("inlineCode",{parentName:"p"},"spring-redisearch")," dependency\nIn your Maven ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml"),", add the following dependency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n  <groupId>com.redislabs</groupId>\n  <artifactId>spring-redisearch</artifactId>\n  <version>3.0.1</version>\n</dependency>\n")),Object(o.b)("h3",{id:"creating-a-search-index"},"Creating a Search Index"),Object(o.b)("p",null,"To create an index, you must define a schema to list the fields and their types to be indexed.\nFor the ",Object(o.b)("inlineCode",{parentName:"p"},"Book")," model, you will be indexing four fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Title"),Object(o.b)("li",{parentName:"ul"},"Subtitle"),Object(o.b)("li",{parentName:"ul"},"Description")),Object(o.b)("h4",{id:"authors"},"Authors"),Object(o.b)("p",null,"Creating the index is done using the FT.CREATE command. The RediSearch engine will scan the database using one or more PREFIX key pattern values and update the index based on the schema definition.\nThis active index maintenance makes it easy to add an index to an existing application.\nTo create our index, we\u2019ll use the now-familiar ",Object(o.b)("inlineCode",{parentName:"p"},"CommandLineRunner")," recipe.\nWe will keep the name of the soon to be created index in the application's property field as shown:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"app.booksSearchIndexName=books-idx\n")),Object(o.b)("p",null,"Next, create the ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/boot/CreateBooksSearchIndex.java")," file and add the contents as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.boot;\n\nimport com.redislabs.edu.redi2read.models.Book;\nimport com.redislabs.lettusearch.CreateOptions;\nimport com.redislabs.lettusearch.Field;\nimport com.redislabs.lettusearch.RediSearchCommands;\nimport com.redislabs.lettusearch.StatefulRediSearchConnection;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.stereotype.Component;\nimport io.lettuce.core.RedisCommandExecutionException;\nimport lombok.extern.slf4j.Slf4j;\n\n@Component\n@Order(6)\n@Slf4j\npublic class CreateBooksSearchIndex implements CommandLineRunner {\n\n  @Autowired\n  private StatefulRediSearchConnection<String, String> searchConnection;\n\n  @Value("${app.booksSearchIndexName}")\n  private String searchIndexName;\n\n  @Override\n  @SuppressWarnings({ "unchecked" })\n  public void run(String... args) throws Exception {\n    RediSearchCommands<String, String> commands = searchConnection.sync();\n    try {\n      commands.ftInfo(searchIndexName);\n    } catch (RedisCommandExecutionException rcee) {\n      if (rcee.getMessage().equals("Unknown Index name")) {\n\n        CreateOptions<String, String> options = CreateOptions.<String, String>builder()//\n            .prefix(String.format("%s:", Book.class.getName())).build();\n\n        Field<String> title = Field.text("title").sortable(true).build();\n        Field<String> subtitle = Field.text("subtitle").build();\n        Field<String> description = Field.text("description").build();\n        Field<String> author0 = Field.text("authors.[0]").build();\n        Field<String> author1 = Field.text("authors.[1]").build();\n        Field<String> author2 = Field.text("authors.[2]").build();\n        Field<String> author3 = Field.text("authors.[3]").build();\n        Field<String> author4 = Field.text("authors.[4]").build();\n        Field<String> author5 = Field.text("authors.[5]").build();\n        Field<String> author6 = Field.text("authors.[6]").build();\n\n        commands.create(\n          searchIndexName, //\n          options, //\n          title, subtitle, description, //\n          author0, author1, author2, author3, author4, author5, author6 //\n        );\n\n        log.info(">>>> Created Books Search Index...");\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,"Let\u2019s break down what our ",Object(o.b)("inlineCode",{parentName:"p"},"CreateBooksSearchIndex")," ",Object(o.b)("inlineCode",{parentName:"p"},"CommandLineRunner")," is doing. We'll be working with classes out of the ",Object(o.b)("inlineCode",{parentName:"p"},"com.redislabs.lettusearch")," package:\nInject a ",Object(o.b)("inlineCode",{parentName:"p"},"StatefulRediSearchConnection"),", which gives access to RediSearch commands in synchronous mode, asynchronous mode, and reactive mode.\nFrom the ",Object(o.b)("inlineCode",{parentName:"p"},"StatefulRediSearchConnection")," we get an instance of RediSearchCommands using the ",Object(o.b)("inlineCode",{parentName:"p"},"sync()")," method (return the synchronous mode methods).\nWe only create the index if it doesn\u2019t exist, which will be signalled by the FT.INFO command command throwing an exception.\nTo create the index, we build a ",Object(o.b)("inlineCode",{parentName:"p"},"CreateOptions")," object passing the Book class prefix.\nFor each one the fields to be indexed, we create a Field object:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Title is created as a sortable text field"),Object(o.b)("li",{parentName:"ul"},"Subtitle is created as a text field"),Object(o.b)("li",{parentName:"ul"},"Description is created as a text field")),Object(o.b)("p",null,"Authors are stored in a Set, so they are serialized as prefixed indexed fields (",Object(o.b)("inlineCode",{parentName:"p"},"authors.[0], authors.[1]"),", ...). We indexed up to 6 authors.\nTo create the index, we invoke the create method passing the index name, the CreateOptions, and the fields.\nTo see more options and all field types, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/Commands/#ftcreate"}),"https://oss.redis.com/redisearch/Commands/#ftcreate"),"\nOn server restart, you should run your Redis CLI MONITOR to see the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'1617601021.779396 [0 172.21.0.1:59396] "FT.INFO" "books-idx"\n1617601021.786192 [0 172.21.0.1:59396] "FT.CREATE" "books-idx" "PREFIX" "1" "com.redislabs.edu.redi2read.models.Book:" "SCHEMA" "title" "TEXT" "SORTABLE" "subtitle" "TEXT" "description" "TEXT" "authors.[0]" "TEXT" "authors.[1]" "TEXT" "authors.[2]" "TEXT" "authors.[3]" "TEXT" "authors.[4]" "TEXT" "authors.[5]" "TEXT" "authors.[6]" "TEXT"\n')),Object(o.b)("p",null,"You can see the index information with the following command in the Redis CLI:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> FT.INFO "books-idx"\n 1) index_name\n 2) books-idx\n...\n 9) num_docs\n10) "2403"\n11) max_doc_id\n12) "2403"\n13) num_terms\n14) "32863"\n15) num_records\n16) "413522"\n')),Object(o.b)("p",null,"This snippet from the FT.INFO command output for the ",Object(o.b)("inlineCode",{parentName:"p"},"\u201cbooks-idx\u201d")," index shows that there are 2,403 documents indexed (the number of books in the system). From our indexed documents, there are 32,863 terms and close to half a million records."),Object(o.b)("h3",{id:"full-text-search-queries"},"Full-text Search Queries"),Object(o.b)("p",null,"RediSearch is a full-text search engine, allowing the application to run powerful queries. For example, to search all books that contain \u201cnetworking\u201d-related information, you would run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> FT.SEARCH books-idx "networking" RETURN 1 title\n')),Object(o.b)("p",null,"Which returns:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' 1) (integer) 299\n 2) "com.redislabs.edu.redi2read.models.Book:3030028496"\n 3) 1) "title"\n    2) "Ubiquitous Networking"\n 4) "com.redislabs.edu.redi2read.models.Book:9811078718"\n 5) 1) "title"\n    2) "Progress in Computing, Analytics and Networking"\n 6) "com.redislabs.edu.redi2read.models.Book:9811033765"\n 7) 1) "title"\n    2) "Progress in Intelligent Computing Techniques: Theory, Practice, and Applications"\n 8) "com.redislabs.edu.redi2read.models.Book:981100448X"\n 9) 1) "title"\n    2) "Proceedings of Fifth International Conference on Soft Computing for Problem Solving"\n10) "com.redislabs.edu.redi2read.models.Book:1787129411"\n11) 1) "title"\n    2) "OpenStack: Building a Cloud Environment"\n12) "com.redislabs.edu.redi2read.models.Book:3319982044"\n13) 1) "title"\n    2) "Engineering Applications of Neural Networks"\n14) "com.redislabs.edu.redi2read.models.Book:3319390287"\n15) 1) "title"\n    2) "Open Problems in Network Security"\n16) "com.redislabs.edu.redi2read.models.Book:0133887642"\n17) 1) "title"\n    2) "Web and Network Data Science"\n18) "com.redislabs.edu.redi2read.models.Book:3319163132"\n19) 1) "title"\n    2) "Databases in Networked Information Systems"\n20) "com.redislabs.edu.redi2read.models.Book:1260108422"\n21) 1) "title"\n    2) "Gray Hat Hacking: The Ethical Hacker\'s Handbook, Fifth Edition"\n')),Object(o.b)("p",null,"As you can see, books with the work \u201cnetwork\u201d in the title are returned, even though we used the word \u201cnetworking\u201d. This is because the title has been indexed as text, so the field is tokenized and stemmed.\nAlso, the command does not specify a field, so the term \u201cnetworking\u201d (and related terms) is searched in all text fields of the index.\nThat\u2019s why we have titles that do not show the search term; in these cases, the term has been found in another of the indexed fields.\nIf you want to search on specific fields, you use the ",Object(o.b)("inlineCode",{parentName:"p"},"@field")," notation, as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> FT.SEARCH books-idx "@title:networking" RETURN 1 title\n')),Object(o.b)("p",null,"Try some additional full-text search queries against the index."),Object(o.b)("p",null,"Prefix matches:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> FT.SEARCH books-idx "clo*" RETURN 4 title subtitle authors.[0] authors.[1]\n')),Object(o.b)("p",null,"Fuzzy search:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> FT.SEARCH books-idx "%scal%" RETURN 2 title subtitle\n')),Object(o.b)("p",null,"Unions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> FT.SEARCH books-idx "rust | %scal%" RETURN 3 title subtitle authors.[0]\n')),Object(o.b)("p",null,"You can find more information about the query syntax in the RediSearch documentation.\nAdding Search to the Books Controller\nTo add full-text search capabilities to the ",Object(o.b)("inlineCode",{parentName:"p"},"BooksController"),", we'll first inject a ",Object(o.b)("inlineCode",{parentName:"p"},"StatefulRediSearchConnection"),"\nand simply pass a text query param to the search method available from the ",Object(o.b)("inlineCode",{parentName:"p"},"RediSearchCommands")," interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Value("${app.booksSearchIndexName}")\nprivate String searchIndexName;\n\n@Autowired\nprivate StatefulRediSearchConnection<String, String> searchConnection;\n\n@GetMapping("/search")\npublic SearchResults<String,String> search(@RequestParam(name="q")String query) {\n  RediSearchCommands<String, String> commands = searchConnection.sync();\n  SearchResults<String, String> results = commands.search(searchIndexName, query);\n  return results;\n}\n')),Object(o.b)("p",null,"With the imports:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"import com.redislabs.lettusearch.RediSearchCommands;\nimport com.redislabs.lettusearch.SearchResults;\nimport com.redislabs.lettusearch.StatefulRediSearchConnection;\nimport org.springframework.beans.factory.annotation.Value;\n")),Object(o.b)("p",null,"We can use curl to execute some the sample queries we previously tried:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://localhost:8080/api/books/search/?q=%25scal%25'\n")),Object(o.b)("p",null,"This returns:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "infoLink": "https://play.google.com/store/books/details?id=xVU2AAAAQBAJ&source=gbs_api",\n    "thumbnail": "http://books.google.com/books/content?id=xVU2AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",\n    "_class": "com.redislabs.edu.redi2read.models.Book",\n    "id": "1449340326",\n    "language": "en",\n    "title": "Scala Cookbook",\n    "price": "43.11",\n    "currency": "USD",\n    "categories.[0]": "com.redislabs.edu.redi2read.models.Category:23a4992c-973d-4f36-b4b1-6678c5c87b28",\n    "subtitle": "Recipes for Object-Oriented and Functional Programming",\n    "authors.[0]": "Alvin Alexander",\n    "pageCount": "722",\n    "description": "..."\n  },\n    {\n      "infoLink": "https://play.google.com/store/books/details?id=d5EIBgAAQBAJ&source=gbs_api",\n      "thumbnail": "http://books.google.com/books/content?id=d5EIBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",\n      "_class": "com.redislabs.edu.redi2read.models.Book",\n      "id": "178355875X",\n      "language": "en",\n      "title": "Scala for Machine Learning",\n      "price": "22.39",\n      "currency": "USD",\n      "categories.[0]": "com.redislabs.edu.redi2read.models.Category:15129267-bee9-486d-88e7-54de709276ef",\n      "authors.[0]": "Patrick R. Nicolas",\n      "pageCount": "520",\n      "description": "..."\n    },\n ...\n]\n')),Object(o.b)("h3",{id:"adding-and-getting-auto-complete-suggestions"},"Adding and getting Auto-complete suggestions"),Object(o.b)("p",null,"RediSearch provides a completion suggester that is typically used for auto-complete/search-as-you-type functionality.\nThis is a navigational feature to guide users to relevant results as they are typing, improving search precision.\nRediSearch provides completion suggestions with four commands:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"FT.SUGADD: Adds a suggestion string to an auto-complete dictionary."),Object(o.b)("li",{parentName:"ul"},"FT.SUGGET: Get a list of suggestions for a string."),Object(o.b)("li",{parentName:"ul"},"FT.SUGDEL: Deletes a suggestion string from an auto-complete dictionary."),Object(o.b)("li",{parentName:"ul"},"FT.SUGLEN: Returns the size of an auto-completion dictionary")),Object(o.b)("h4",{id:"implement-an-auto-complete-endpoint-for-author-names"},"Implement an auto-complete endpoint for author names"),Object(o.b)("p",null,"To create an auto-complete suggestion dictionary for author names, we\u2019ll create a CommandLineRunner that will loop over the books, and for each author in the ",Object(o.b)("inlineCode",{parentName:"p"},"Set<String>")," of authors, it will add them to the dictionary.\nUnlike search indexes, which RediSearch maintains automatically, you maintain suggestion dictionaries manually using FT.SUGADD and FT.SUGDEL.\nAdd the property for the name of the auto-complete dictionary to ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources/application.properties"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"app.autoCompleteKey=author-autocomplete\n")),Object(o.b)("p",null,"Add the file ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/boot/CreateAuthorNameSuggestions.java")," with the following contents:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.boot;\n\nimport com.redislabs.edu.redi2read.repositories.BookRepository;\nimport com.redislabs.lettusearch.RediSearchCommands;\nimport com.redislabs.lettusearch.StatefulRediSearchConnection;\nimport com.redislabs.lettusearch.Suggestion;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.data.redis.core.RedisTemplate;\nimport org.springframework.stereotype.Component;\n\nimport lombok.extern.slf4j.Slf4j;\n\n@Component\n@Order(7)\n@Slf4j\npublic class CreateAuthorNameSuggestions  implements CommandLineRunner {\n\n  @Autowired\n  private RedisTemplate<String, String> redisTemplate;\n\n  @Autowired\n  private BookRepository bookRepository;\n\n  @Autowired\n  private StatefulRediSearchConnection<String, String> searchConnection;\n\n  @Value("${app.autoCompleteKey}")\n  private String autoCompleteKey;\n\n  @Override\n  public void run(String... args) throws Exception {\n    if (!redisTemplate.hasKey(autoCompleteKey)) {\n      RediSearchCommands<String, String> commands = searchConnection.sync();\n      bookRepository.findAll().forEach(book -> {\n        if (book.getAuthors() != null) {\n          book.getAuthors().forEach(author -> {\n            Suggestion<String> suggestion = Suggestion.builder(author).score(1d).build();\n            commands.sugadd(autoCompleteKey, suggestion);\n          });\n        }\n      });\n\n      log.info(">>>> Created Author Name Suggestions...");\n    }\n  }\n}\n')),Object(o.b)("p",null,"Let\u2019s break down the logic of the ",Object(o.b)("inlineCode",{parentName:"p"},"CreateAuthorNameSuggestions")," ",Object(o.b)("inlineCode",{parentName:"p"},"CommandLineRunner"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"First, we guarantee a single execution by checking for the existence of the key for the auto-complete dictionary."),Object(o.b)("li",{parentName:"ul"},"Then, using the ",Object(o.b)("inlineCode",{parentName:"li"},"BookRepository")," we loop over all books"),Object(o.b)("li",{parentName:"ul"},"For each author in a book we add a suggestion to the dictionary")),Object(o.b)("p",null,"To use the auto-suggestion feature in the controller, we can add a new method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Value("${app.autoCompleteKey}")\nprivate String autoCompleteKey;\n\n@GetMapping("/authors")\npublic List<Suggestion<String>> authorAutoComplete(@RequestParam(name="q")String query) {\n  RediSearchCommands<String, String> commands = searchConnection.sync();\n  SuggetOptions options = SuggetOptions.builder().max(20L).build();\n  return commands.sugget(autoCompleteKey, query, options);\n}\n')),Object(o.b)("p",null,"With imports:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"import com.redislabs.lettusearch.Suggestion;\nimport com.redislabs.lettusearch.SuggetOptions;\n")),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"authorAutoComplete")," method, we use the FT.SUGGET command (via the sugget method from the ",Object(o.b)("inlineCode",{parentName:"p"},"RediSearchCommands")," object) and build a query using a ",Object(o.b)("inlineCode",{parentName:"p"},"SuggetOptions")," configuration. In the example above, we set the maximum number of results to 20.\nWe can use curl to craft a request to our new endpoint. In this example, I\u2019m passing \u201cbrian s\u201d as the query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://localhost:8080/api/books/authors/?q=brian%20s'\n")),Object(o.b)("p",null,"This results in a response with 2 JSON objects:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "string": "Brian Steele",\n        "score": null,\n        "payload": null\n    },\n    {\n        "string": "Brian Sam-Bodden",\n        "score": null,\n        "payload": null\n    }\n]\n')),Object(o.b)("p",null,"If we add one more letter to our query to make it \u201cbrian sa\u201d:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://localhost:8080/api/books/authors/?q=brian%20sa'\n")),Object(o.b)("p",null,"We get the expected narrowing of the suggestion set:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "string": "Brian Sam-Bodden",\n        "score": null,\n        "payload": null\n    }\n]\n')))}d.isMDXComponent=!0},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},317:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(21),r=n(325);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},325:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);