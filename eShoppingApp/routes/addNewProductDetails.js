var express = require('express');
var router = express.Router();
var {MongoClient} = require("mongodb");
var mongoClient = new MongoClient("mongodb://127.0.0.1:27017");

async function getDbConnection(productDetails) {
    await mongoClient.connect();
    var db = mongoClient.db("eshopping");
    var collection = db.collection('productDetails');
    var results = collection.insertOne(productDetails).then(() => {
        console.log("inserted succefly");
    });
    return results;
  }
/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    var responseObj = {};
    getDbConnection(req.body).then(() => {
        responseObj.msg = 'Success';
        res.send(JSON.stringify(responseObj));
    })
      
});

module.exports = router;
