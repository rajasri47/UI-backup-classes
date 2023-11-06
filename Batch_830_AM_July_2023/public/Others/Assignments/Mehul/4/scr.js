var max = 9;
var len = 6;

var otp = "";
var getRandomNumber = () => {
  var random = Math.random() * max;
  random = Math.floor(random);
  otp += random;
  if (otp.length < len) {
    getRandomNumber();
  } else {
    document.querySelector(".otpBlock").innerHTML = otp;
    otp = "";
  }
};
