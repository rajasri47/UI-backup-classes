var express = require('express');
var router = express.Router();
var {MongoClient} = require("mongodb");
var mongoClient = new MongoClient("mongodb://127.0.0.1:27017");

async function getDbConnection(reqObj) {
    await mongoClient.connect();
    var db = mongoClient.db("eshopping");
    var collection = db.collection('productDetails');
    var results = collection.find(reqObj).toArray();
    return results;
  }

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Processer ID");
    console.log(process.pid);
   
    var categoryType = req.query.categoryType; // All, kids, electronics, 
    var reqObj = {}

    if (categoryType != 'All') {
        reqObj.category = categoryType;
    }
    var productData = {};
    getDbConnection(reqObj).then((results) => {
        productData.details = results;
        res.send(JSON.stringify(productData));

    }).catch((error) => {

    }).finally(() => {
        mongoClient.close();
    })
});

module.exports = router;
