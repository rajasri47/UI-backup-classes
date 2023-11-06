var userData = {};
var loginUser = () => {
    userData.accountId = document.querySelector("#userAccountId").value;
    userData.accountPwd = document.querySelector("#accountPwd").value;

    if (document.querySelector("#useroption").checked ) { // store user pref in storage
        sessionStorage.setItem("userDetails", JSON.stringify(userData));
    } else { // clear user pref from storage
        sessionStorage.removeItem("userDetails");
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
    sessionStorage.setItem("userSelectedTheme", colorChoosen);
    addColorToBody(colorChoosen);   
}
var addColorToBody = (colorName) => {   
   document.querySelector("body").style.background = colorName;
}

if (sessionStorage.getItem("userSelectedTheme") != null) {    
   addColorToBody(sessionStorage.getItem("userSelectedTheme"));
}
if (sessionStorage.getItem("userDetails") != null) {
   var userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
   document.querySelector("#userAccountId").value = userDetails.accountId;
   document.querySelector("#accountPwd").value = userDetails.accountPwd;
   document.querySelector("#useroption").checked = true; // make the checkbox checked
}


