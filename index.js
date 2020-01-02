//importing node framework
var express = require("express");
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
    //sorry I am new
 res.send("hello world").status(200);
});
//listen to port 8000 by default
app.listen(process.env.PORT || 8000);
 
module.exports = app;