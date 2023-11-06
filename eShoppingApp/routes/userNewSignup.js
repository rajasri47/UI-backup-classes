var express = require('express');
var router = express.Router();
const { MongoClient} = require("mongodb");
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
const bcrypt = require('bcrypt');
const saltRounds = 5;

/* GET home page. */
router.post('/', function(req, res, next) {


    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        req.body.password = hash;
        getDbConnection(req.body).then(() => {
            var userResponse = {};
            userResponse.msg = 'Success';
            res.send(JSON.stringify(userResponse));
        }).catch((error) => {
            var userResponse = {};
            userResponse.msg = 'Error while inserting';
            res.send(JSON.stringify(userResponse));
        });
    });
    
    console.log(req.body);
    
});

async function getDbConnection(reqData) {
    await mongoClient.connect();
    var db = mongoClient.db("eshopping");
    var collection = db.collection('accountDetails');
    var results = collection.insertOne(reqData).then(() => {
        console.log("succsfly inserted");
    });
    return results;
  }
module.exports = router;
