var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var resObj = {};

    if (req.session.isUserLoggedin) {
        resObj.isUserLoggedin = true;
    } else {
        resObj.isUserLoggedin = false;
    }
   res.send(JSON.stringify(resObj));
});

module.exports = router;
