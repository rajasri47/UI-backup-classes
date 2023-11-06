var userData = {};
var colorChoosen;


var addColorToBody = (colorName) => {
    
    document.querySelector("body").style.background = colorName;
}

document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("userSelectedTheme") != null) {    
        addColorToBody(sessionStorage.getItem("userSelectedTheme"));
    }

    if (sessionStorage.getItem("userDetails") != null) {
        var userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        document.querySelector("#userAccountId").value = userDetails.accountId;
        document.querySelector("#accountPwd").value = userDetails.accountPwd;
        document.querySelector("#useroption").checked = true; // make the checkbox checked
    }
})



var loginUser = () => {
    userData.accountId = document.querySelector("#userAccountId").value;
    userData.accountPwd = document.querySelector("#accountPwd").value;

    if (document.querySelector("#useroption").checked ) { // store user pref in storage
        sessionStorage.setItem("userDetails", JSON.stringify(userData));
    } else { // clear user pref from storage
        sessionStorage.removeItem("userDetails");
    }

    if (userData.accountId == 'admin' && userData.accountPwd == 'hello') {
        // document.querySelector(".invalidCredentials").style.display = 'none';
        $(".invalidCredentials").hide();
        $(".loginBlock").hide();
        // $(".detailsBlock").show();

        document.querySelector(".detailsBlock").style.display = 'block';
    } else {
        $(".invalidCredentials").show();
    }
}

var applyTheme = () => {
    colorChoosen = $("#userTheme").val();
    sessionStorage.setItem("userSelectedTheme", colorChoosen);
    
    // $("body").css("background-color", colorChoosen);

    addColorToBody(colorChoosen);
    
}


