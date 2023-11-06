const { Console } = require('console');
var express = require('express');
var router = express.Router();
var multer = require("multer");
var path = require("path");

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images/productImages');
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, callback) { 
        file_path = "userImage-" + Date.now() + path.extname(file.originalname);
        // file_path = file.originalname;
        callback(null, file_path);
    }
});

var upload = multer({ storage: storage}).single('prodImage');

/* POST . */
router.post('/', function(req, res, next) {

    console.log(req.headers);
    
    var resObj = {
        msg: 'success'
    }
    upload(req, res, function(err) {
        console.log(err);
        if (err) {
            resObj.msg = "ERROR"
            console.log(err);
        } else {
            if (req.headers.imagetype == 'FlipImage') {
                resObj.flipFilePath = "images/productImages/" + file_path;
            } else {
                resObj.file_path = "images/productImages/" + file_path;
            }                
            resObj.msg = 'success';
        }
        res.send(JSON.stringify(resObj))
    });
    
});

module.exports = router;
