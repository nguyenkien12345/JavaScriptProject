const express = require("express");

const app = express();

app.get("/", function(err, res){
    res.send("It is working now");
})

app.get("/ntk", function(err, res){
    res.send("Xin chào Nguyễn Trung Kiên");
})

const port = 3000;

app.listen(port, function(){
    console.log("It is running now")
})