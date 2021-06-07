const express = require('express');
const path = require('path');
var techcrunch=require('./src/techcrunch');
var coursera=require('./src/coursera');
var myteam=require('./src/myteam');

var slide=require('./src/slide');
var intrestingEngineering=require('./src/intrestingEngineering');
var courserareview=require('./src/courserareview');


const app = express();

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});
// Static route for files in the current directory...
// Note that this serves all files relative to the given
// path, even ones you probably don't want.
app.use(express.static(__dirname));

// Note: you should really put these files in a subdirectory
// And use static like this:
app.use('/images', express.static(__dirname +'/images'));
app.use('/css', express.static(__dirname +'/css'));
app.use('/fonts', express.static(__dirname +'/fonts'));
app.use('/js', express.static(__dirname +'/js'));

app.use('/node_modules', express.static(__dirname +'/node_modules'));


app.listen(3000, function () {
    console.log('Listening on port: 3000!');
});