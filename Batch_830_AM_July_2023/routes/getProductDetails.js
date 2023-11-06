var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {
      productInfo: 
      [
          {
              name: 'Laptop',
              price: 1500,
              rating: 3.5,
              discountPercent: 10,
              manu: 'Sony',
              image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
          },
          {
              name: 'TV',
              price: 21000,
              rating: 4.5,
              discountPercent: 12,
              manu: 'LG',
              image:'http://localhost:8081/images/mytv.jpg'
          },
          {
              name: 'TV',
              price: 45000,
              rating: 4.5,
              discountPercent: 10,
              manu: 'Sony',
              image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
          },
          {
              name: 'Laptop6',
              price: 45000,
              rating: 5,
              discountPercent: 10,
              manu: 'Sony',
              image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
          },
          {
              name: 'Laptop',
              price: 45000,
              rating: 1.5,
              discountPercent: 10,
              manu: 'Sony',
              image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
          },
          {
              name: 'Laptop',
              price: 45000,
              rating: 1.5,
              discountPercent: 10,
              manu: 'Sony',
              image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
          }
      ]
    };
    setTimeout(() => {
        res.send(JSON.stringify(data));
    }, 4000);
    
});

module.exports = router;
