var express = require('express');
var router  = express.Router();
var path = require('path');

router.get('/', function(req, res){
  res.sendFile(path.resolve('layouts/posts.html'));
});







module.exports = router;

// old code does not work
// var router = require('express').Router();
//
// router.get('/', function(req, res){
//   res.sendfile('layouts/posts.html');
// });
