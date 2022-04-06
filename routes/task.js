var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/1', function(req, res, next) {
  res.sendFile( __dirname + '/../public/html/task1.html')
});
router.get('/2', function(req, res, next) {
  res.sendFile( __dirname + '/../public/html/task2.html')
});

module.exports = router;
