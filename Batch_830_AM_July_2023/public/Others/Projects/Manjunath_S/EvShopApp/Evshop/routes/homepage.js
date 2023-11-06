var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index.html');
  //res.send("This is the home page");
  res.render('../public/index');
});

module.exports = router;
