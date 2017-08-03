var express = require('express');
var router = express.Router();
var path = require('path');



router.get('/',function(req,res,next) {
  console.log('reach here');
  res.sendFile(path.join(__dirname, '/index.html'));

});
router.get('/signup',function(req,res,next) {
  res.sendFile(__dirname, './client/index.html');

});
router.get('/signin',function(req,res,next) {
  res.sendFile(path.join(__dirname, './client/index.html'));

});


module.exports = router;	