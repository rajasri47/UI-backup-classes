var userData = {};
var loginUser = () => {
    userData.accountId = document.querySelector("#userAccountId").value;
    userData.accountPwd = document.querySelector("#accountPwd").value;

    if (document.querySelector("#userOption").checked ) { // store user pref in storage
        localStorage.setItem("userDetails", JSON.stringify(userData));
    } else { // clear user pref from storage
        localStorage.removeItem("userDetails");
    }

    if (userData.accountId == 'admin' && userData.accountPwd == 'hello') {
        $(".invalidCredentials").hide();
        $(".loginBlock").hide();
        $(".detailsBlock").show();
    } else {
        $(".invalidCredentials").show();
        $(".detailsBlock").hide();

    }
}
var applyTheme = () => {
   var colorChoosen = $("#userTheme").val();
    localStorage.setItem("userSelectedTheme", colorChoosen);
    addColorToBody(colorChoosen);   
}
var addColorToBody = (colorName) => {   
   document.querySelector("body").style.background = colorName;
}

if (localStorage.getItem("userSelectedTheme") != null) {    
   addColorToBody(localStorage.getItem("userSelectedTheme"));
}
if (localStorage.getItem("userDetails") != null) {
   var userDetails = JSON.parse(localStorage.getItem('userDetails'));
   document.querySelector("#userAccountId").value = userDetails.accountId;
   document.querySelector("#accountPwd").value = userDetails.accountPwd;
   document.querySelector("#userOption").checked = true; // make the checkbox checked
}


