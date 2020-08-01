## Simple website to show RSS feeds result with ReactJS

### Website alive and running on [Try this app now!](http://feeds.bbci.co.uk/news/rss.xml)

# To run locally

>> 1) make sure you have npm installed with 
>> `npm -v`.

>> 2) install the dependencies with `npm i`.

>> 3) Run the app with npm start
>>> Your app with start in localhost 8080 by default. If you haven't added any env variable for ports.

### If you want this app to use localally run api then you have to change the a line from server.js as follows 

change this line target value to:
```javascript 
app.use("/get_feeds", createProxyMiddleware({target:"https://apirssignite.herokuapp.com", changeOrigin: true}));
```

to add your localhost and port in which Flask api is running:
```javascipt
app.use("/get_feeds", createProxyMiddleware({target:"{localhost}/{port_no}/", changeOrigin: true}));
```