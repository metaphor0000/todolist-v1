const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use("view-engine",ejs);

app.get("/",function(req,res){
    res.send("<h1>InShaAllah I Will Shine,<br>Game is not over until I Win</h1>");
});

app.listen(3000,function(){
    console.log("Server started at port 3000");
})
