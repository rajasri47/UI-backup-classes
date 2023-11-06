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

}
var totalUpperCaseChar = 0;
var Totalspecialcharcter = 0;
var Totalnumericvalue = 0;

var validateCharTypes = (event) => {
    console.log(event)
    
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        totalUpperCaseChar++;
    }
     //validation for checking 2 upper case char 
    //
    if (totalUpperCaseChar >= 2) {
        document.querySelector("#upperCaseCharValidation").classList.remove('pwdErr')
        document.querySelector("#upperCaseCharValidation").classList.add('pwdValid')
    } else {
        document.querySelector("#upperCaseCharValidation").classList.add('pwdErr')
        document.querySelector("#upperCaseCharValidation").classList.remove('pwdValid')
    }
    // validating spl characters
    if((event.keyCode >= 33 && event.keyCode <= 47) || (event.keyCode >= 58 && event.keyCode <= 64) ||(event.keyCode >= 91 && event.keyCode <= 96) || (event.keyCode >= 123 && event.keyCode <= 126)){
        Totalspecialcharcter++;
        if(Totalspecialcharcter == 1){
         document.querySelector("#splCharctervalidation").classList.remove('pwdErr')
         document.querySelector("#splCharctervalidation").classList.add('pwdValid')
     }else{
         document.querySelector("#splCharctervalidation").classList.add('pwdErr')
         document.querySelector("#splCharctervalidation").classList.remove('pwdValid')
 
     }
   }
 // validating Numeric values
  if(event.keyCode >= 48 && event.keyCode <= 57){
    Totalnumericvalue++;
    if(Totalnumericvalue == 1){
    document.querySelector("#numbervalidation").classList.remove('pwdErr')
    document.querySelector("#numbervalidation").classList.add('pwdValid')
    
  }
  else{
  document.querySelector("#numbervalidation").classList.remove('pwdValid')
  document.querySelector("#numbervalidation").classList.add('pwdErr')
  }
  }
  
  // Validating No Space
  if(event.keyCode != 32){
    document.querySelector("#noSpace").classList.remove('pwdErr')
    document.querySelector("#noSpace").classList.add('pwdValid')
}else{
    document.querySelector("#noSpace").classList.add('pwdErr')
    document.querySelector("#noSpace").classList.remove('pwdValid')

}

}
/*
  // validating spl characters
  var Totalspecialcharcter = 0;
  var validateSplTypes = (event) => {
    console.log(event)
    if((event.keyCode >= 32 && event.keyCode <= 47) || (event.keyCode >= 58 && event.keyCode <= 64) ||(event.keyCode >= 91 && event.keyCode <= 96) || (event.keyCode >= 123 && event.keyCode <= 126)){
       Totalspecialcharcter++;
       if(Totalspecialcharcter == 1){
        document.querySelector("#splCharctervalidation").classList.remove('pwdErr')
        document.querySelector("#splCharctervalidation").classList.add('pwdValid')
    }else{
        document.querySelector("#splCharctervalidation").classList.add('pwdErr')
        document.querySelector("#splCharctervalidation").classList.remove('pwdValid')

    }
  }
} */


var validatePwdData = (event) => {
    console.log(event)
    var pwdEnterd = document.querySelector("#actpwd").value;
    pwdEnterd = pwdEnterd.trim();
    
    
    // if (pwdEnterd) {
    //     document.querySelector("#mandateValidation").style.color = 'green';
    // document.querySelector("#mandateValidation").style.border = '1px solid';
    // document.querySelector("#mandateValidation").style['font-size'] = '10px';

    // } else {
    //     document.querySelector("#mandateValidation").style.color = 'red';
    // }
    // Validating for mandate field
    if (pwdEnterd) {
        document.querySelector("#mandateValidation").classList.remove('pwdErr')
        document.querySelector("#mandateValidation").classList.add('pwdValid')
    } else {
        document.querySelector("#mandateValidation").classList.add('pwdErr')
        document.querySelector("#mandateValidation").classList.remove('pwdValid')
    }

    // Validating total no. of char to 8
    if (pwdEnterd.length == 8) {
        document.querySelector("#totalLengthValidation").classList.remove('pwdErr')
        document.querySelector("#totalLengthValidation").classList.add('pwdValid')
    } else {
        document.querySelector("#totalLengthValidation").classList.add('pwdErr')
        document.querySelector("#totalLengthValidation").classList.remove('pwdValid')
    }

   
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
