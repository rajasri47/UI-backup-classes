function generateCaptcha() {
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var captcha = "";

  captcha += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
  captcha += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
  captcha += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
  captcha += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
  captcha += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
  captcha += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));

  return captcha;
}

function refreshCaptcha() {
  var captchaDisplay = document.getElementById("captchaDisplay");
  var captchaInput = document.getElementById("captchaInput");
  var captcha = generateCaptcha();
  captchaDisplay.textContent = captcha;
  captchaInput.value = "";
}

function validateCaptcha() {
  var captchaInput = document.getElementById("captchaInput");
  var captcha = captchaInput.value;

  if (captcha === captchaDisplay.textContent) {
    alert("CAPTCHA validation successful!");
    refreshCaptcha();
  } else {
    alert("CAPTCHA validation failed. Please try again.");
  }
}

function onLoad() {
  refreshCaptcha();
}

window.onload = onLoad;
