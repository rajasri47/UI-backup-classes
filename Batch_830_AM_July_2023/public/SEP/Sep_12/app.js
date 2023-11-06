var userData = {};
var colorChoosen;


var addColorToBody = (colorName) => {
    
    document.querySelector("body").style.background = colorName;
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("userSelectedTheme") != null) {    
        addColorToBody(localStorage.getItem("userSelectedTheme"));
    }
})



var loginUser = () => {
    userData.accountId = document.querySelector("#userAccountId").value;
    userData.accountPwd = document.querySelector("#accountPwd").value;

    if (document.querySelector("#useroption").checked ) { // store user pref in storage
        localStorage.setItem("userDetails", JSON.stringify(userData));
    } else { // clear user pref from storage

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
    localStorage.setItem("userSelectedTheme", colorChoosen);
    
    // $("body").css("background-color", colorChoosen);

    addColorToBody(colorChoosen);
    
}


