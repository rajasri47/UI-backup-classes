var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    var empDetails = {
        's_01': {
            name: 'Teena',
            age: 21,
            gender: 'Female',
            location: 'hyderabad'
        },
        's_03': {
            name: 'Krish',
            age: 22,
            gender: 'male',
            location: 'Delhi'
        },
        "s_05": {
            name: 'Suresh',
            age: 26,
            gender: 'male',
            location: 'Chennai'
        }
    }
    var responseData = {};

    var userReqId = req.body.studentId;

    if (userReqId) {
        responseData.details = empDetails[userReqId];
    } else {
        responseData.details = empDetails;

    }



  res.send(JSON.stringify(responseData));
});

module.exports = router;
