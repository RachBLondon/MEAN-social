var express = require('express');
var bodyParser = require('body-parser');
// var Post = require('./models/post');

var app = express();
app.use(bodyParser.json());

app.use(require('./controllers/api/posts.js'));
app.use(require('./controllers/static.js'));

app.listen(3000, function(){
  console.log('Server listening on', 3000);
})
