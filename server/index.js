var express = require("express");
var cors = require("cors");
var router = require("./router");
var app = express();
var PORT = 4000;
app.use(cors()).use(express.json()).use(router);
app.listen(PORT, function () {
    console.log("Listening on PORT 4000");
});
