var express = require('express');
var router = express.Router();
const { MongoClient} = require("mongodb");
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
const bcrypt = require('bcrypt');

router.post('/', function(req, res, next) {
  console.log("Processer ID");
  console.log(process.pid);
  var responseData = {};
  getDbConnection(req.body).then((response) => {  
      if (response.length == 1) {        
        bcrypt.compare(req.body.password, response[0].password, function(err, result) {
          if (result == false ) {
            responseData.msg = 'Password not matching';
            
          } else {
            responseData.msg = 'Valid';
            responseData.isAdmin = response[0].isAdmin;

            req.session.isUserLoggedin = true;
            req.session.isUserAdmin = response[0].isAdmin;
            
          }
          res.send(JSON.stringify(responseData));
        });
      } else {
        responseData.msg = 'Invalid';
        res.send(JSON.stringify(responseData));
      }
    
  }).catch((error) => {
    console.log(error)
    console.log("error1")
  })
 
});

async function getDbConnection(reqData) {
  await mongoClient.connect();
  var db = mongoClient.db("eshopping");
  var collection = db.collection('accountDetails');
  var results = collection.find({accountId: reqData.accountId}).toArray();
  console.log(results)
  return results;
}

module.exports = router;
 