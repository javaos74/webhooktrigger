var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '화면번호 : 123456' , screen_cd: '123456' });
});


module.exports = router;
