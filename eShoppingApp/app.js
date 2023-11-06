
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var session = require('express-session');
var http = require("http");
var os = require("os");
const numCPUs = os.availableParallelism();
var cluster = require("cluster");
console.log("numCPUs -> " + numCPUs);


var credValidationRouter = require("./routes/validateUserCredentails");
var getProductDataListRouter = require("./routes/getProductDetails");
var getclientAndAboutInfo = require("./routes/getClientAndAboutInfo");
var newUserSignupRouter = require("./routes/userNewSignup");
var newProdcutDetails = require("./routes/addNewProductDetails");
var uploadFileRouter = require("./routes/uploadFileResource");
var getSellerProducts = require("./routes/getProductsForSeller");

var checkUserSessionRouter = require("./routes/checkUserSession");
var logoutUserRouter = require("./routes/logoutUser");
var getEmpDetailsrouter = require("./routes/getEemployeeDetails");


var app = express();
var server =  http.createServer(app);
var io;
var totalusers = 0;
if (cluster.isMaster) {
  for (var i = 0 ;i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // io = require('socket.io')(server);
  server = http.createServer(app);
  server.listen(3000, () => {
    console.log("server is listing to 3000 at process " + process.pid);
  });
  // io.on('connection', (socket) => { 
  //   totalusers++;
  //   console.log("Total users connected -> " + totalusers);
  //   socket.on('disconnect', () => {
  //     console.log('user disconnected');
  //     totalusers--;
  //   });
  
  //     socket.on("userSendMsg", (data) => {
  //       console.log(data);
  //       socket.broadcast.emit('receivemsg', data);
  //     })
  // });
}




app.use(session({
  secret: 'keyboard cat DOG ABC PQR TEST',
  resave: false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static("F:\UIClass_new\UIClasses\eShoppingApp\public"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/validate/userCredentials", credValidationRouter);
app.use("/get/productDetails", getProductDataListRouter);
app.use("/get/clientAndAboutInfo", getclientAndAboutInfo);
app.use("/new/userSignup", newUserSignupRouter);
app.use("/add/newProductDetails", newProdcutDetails);
app.use("/upload/resource", uploadFileRouter);
app.use("/get/products/forSeller", getSellerProducts);
app.use("/check/userSession", checkUserSessionRouter);
app.use("/user/logout", logoutUserRouter);
app.use("/get/employeeDetails", getEmpDetailsrouter);

// server.listen(3000, () => {
//   console.log("Server is listing at 3000")
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
