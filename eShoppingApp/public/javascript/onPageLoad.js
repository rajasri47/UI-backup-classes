var loadSelectedPage = (pageType) => {
  var templateUrl = "";
  switch (pageType) {
    case "login":
      templateUrl = "templates/loginpage.htm";
      break;
    case "fgpwd":
      templateUrl = "templates/forgotPwd.htm";
      break;
    case "newSignup":
      templateUrl = "templates/newSignup.htm";
      break;
    case "pDetails":
      templateUrl = "templates/productDetails.htm";
      break;
    case "pkids":
      // templateUrl = "templates/productDetails.htm"
      templateUrl = "templates/pKidsItems.htm";
      break;
    case 'uploadNewProduct':
      templateUrl = 'templates/newProductDetails.htm';
      break;
  }
  fetch(templateUrl)
    .then((response) => response.text())
    .then((data) => {
      $(".pagecontainer").html(data);
      if (pageType == 'pDetails') {
        loadProductsToPage('All');
      } else if (pageType == 'login') {
        prefillUserCredentialData();
      } else if (pageType == 'uploadNewProduct') {
        setDefaultValues();
      }
    });
};

axios.get("http://localhost:3000/check/userSession").then((response) => {
  if (response.data.isUserLoggedin == true) {
    loadSelectedPage("pDetails");
  } else {
    loadSelectedPage("login");
  }
})

