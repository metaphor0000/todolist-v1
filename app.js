const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine','ejs');

app.get("/",function(req,res){
    var today = new Date();
    var currentDate = parseInt(today.getDate());
    var day = "";
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    const d = new Date();
    day = weekday[d.getDay()];


    res.render("list",{kindOfDay: day})
    res.send("<h1>InShaAllah I Will Shine,<br>Game is not over until I Win</h1>");
});

app.listen(3000,function(){
    console.log("Server started at port 3000");
})
