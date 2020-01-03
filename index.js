var express = require("express"); 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 res.send("hello world").status(200); //return hello world
});

//listen to port 8000 by default
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`App is running on ${port}`));
 
module.exports = app;