function generateRandomAsciiChar() {
  var randomAsciiValue = Math.floor(Math.random() * 62);
  if (randomAsciiValue < 10) {
    return String.fromCharCode(randomAsciiValue + 48);
  } else if (randomAsciiValue < 36) {
    return String.fromCharCode(randomAsciiValue + 55);
  } else {
    return String.fromCharCode(randomAsciiValue + 61);
  }
}

function generateCaptcha(length) {
  var captcha = "";
  for (var i = 0; i < length; i++) {
    captcha += generateRandomAsciiChar();
  }
  return captcha;
}

function refreshCaptcha() {
  var captchaDisplay = document.getElementById("captchaDisplay");
  var captchaInput = document.getElementById("captchaInput");
  var captcha = generateCaptcha(6);
  captchaDisplay.textContent = captcha;
  captchaInput.value = "";
}

function validateCaptcha() {
  var captchaInput = document.getElementById("captchaInput");
  var captchaDisplay = document.getElementById("captchaDisplay");
  var captcha = captchaInput.value;

  if (captcha === captchaDisplay.textContent) {
    alert("CAPTCHA validation successful!");
    refreshCaptcha();
  } else {
    alert("CAPTCHA validation failed. Please try again.");
    refreshCaptcha();
  }
}

function onLoad() {
  refreshCaptcha();
}

window.onload = onLoad;
