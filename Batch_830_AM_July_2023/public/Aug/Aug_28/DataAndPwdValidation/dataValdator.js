var registerUser = () => {
    var userData = {};
    userData.accountId = document.querySelector("#accountId").value;
    userData.accountId = userData.accountId.trim();

    if (userData.accountId == '' ) {
        document.querySelector(".actIdErr").style.display = 'block';
    } else {
        document.querySelector(".actIdErr").style.display = 'none';
    }

    userData.actpwd = document.querySelector("#actpwd").value;
    userData.userAge = document.querySelector("#userAge").value;

    console.log(userData);
    validatePassword();

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

var validateForNumericData = (event) => {
    console.log(event);
    if (event.keyCode >= 47 && event.keyCode <= 58) {
        return true;
    } else {
        return false;
    }
}


var validatePassword = () => {
    var pwd = document.querySelector("#actpwd").value;
    pwd = pwd.trim();
    var totalUppercaseChar = 0;
    var totalLoweCaseChar = 0;
    var totalDigits = 0;

    var pwdCharList = pwd.split("");
    console.log(pwdCharList);
    var isPwdEmptyValid = false;
    var totalCharCount = false;
    var minUpperCase = false;

    if (pwdCharList.length) {
        isPwdEmptyValid = true;
        if (pwdCharList.length == 8) {
            totalCharCount = true;
        }
        for (var i = 0; i < pwdCharList.length; i++) {
            var char = pwdCharList[0];
            var code = pwd.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                totalUppercaseChar++;
            }
            if (code >= 90 && code <= 122) {
                totalLoweCaseChar++;
            }
            if (code >= 48 && code <= 57) {
                totalDigits++;
            }
        }
        enableOrDisableErrorMsgs(totalUppercaseChar, totalLoweCaseChar, totalDigits);

    } else {
        isPwdEmptyValid = false;
        totalCharCount = false;
        minUpperCase = false;
    }

}

var enableOrDisableErrorMsgs = (tupprCase, tLowerCase, tDigits) => {
    if (tupprCase != 2) {
        document.querySelector("#upperCaseCharValidation").classList.add('pwdErr')
        document.querySelector("#upperCaseCharValidation").classList.remove('pwdValid')
    } else {
        document.querySelector("#upperCaseCharValidation").classList.add('pwdValid')
        document.querySelector("#upperCaseCharValidation").classList.remove('pwdErr')
    }

}


var validatePwdData = (event) => {

}

var validateCharTypes = () => {

}