var registerUser = () => {
    var userData = {};
    userData.accountId = document.querySelector("#accountId").value;
    userData.actpwd = document.querySelector("#actpwd").value;
    userData.userAge = document.querySelector("#userAge").value;

    console.log(userData);
}

var changeTypeOfBox = () => {
    var element = document.querySelector("#actpwd");

    var currentType = element.getAttribute('type');
    if (currentType == 'text') {
        element.setAttribute("type", 'password');
        document.querySelector("#eyeOpen").style.display = 'none';
        document.querySelector("#eyeClose").style.display = 'inline';

    } else {
        element.setAttribute("type", 'text');
        document.querySelector("#eyeOpen").style.display = 'inline';
        document.querySelector("#eyeClose").style.display = 'none';
    }
    // var type = (currentType == 'text') ? 'password' : 'text'
    // element.setAttribute("type", type);
    
}