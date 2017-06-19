console.log("working...");
const express = require("express");
const app = express();

app.listen(4000,);
var loremIpsum = require ('lorem-ipsum'),


output = loremIpsum( {
  count: 3 , units: 'paragraph', format: 'html'
});

app.get('/', function(req,res){
  res.send(output)
});
