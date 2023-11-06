var express = require('express');
var router = express.Router();
var details = require("./data/appConfigData");


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.send(JSON.stringify(details));
});

module.exports = router;
