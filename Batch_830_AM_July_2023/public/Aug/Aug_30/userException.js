var userDetails = {};

// handling exceptions without try catch
/*var readUserInfo = () => {
    userDetails.name = document.querySelector("#username").value;
    userDetails.name = userDetails.name.trim();

    if (userDetails.name == '') {
        document.querySelector(".nameEmptyErr").style.display = 'block';
        return;
    } else {
        document.querySelector(".nameEmptyErr").style.display = 'none';
    }
    userDetails.password = document.querySelector("#userPwd").value;
    if (userDetails.password == '') {
        document.querySelector(".pwdEmptyErr").style.display = 'block';
        return;
    } else {
        document.querySelector(".pwdEmptyErr").style.display = 'none';
    }
    userDetails.age = document.querySelector("#uage").value;
   
    userDetails.age = parseInt(userDetails.age);
    if (userDetails.age < 21) {
        document.querySelector(".ageErr").style.display = 'block';
        return;
    } else {
        document.querySelector(".ageErr").style.display = 'none';
    }
    
    userDetails.gender = document.querySelector("input[name=gender]:checked").value;
    console.log(userDetails);

    document.querySelector(".successmsg").style.display = 'block';
} */

var readUserInfo = () => {
        userDetails.name = document.querySelector("#username").value;
         userDetails.name = userDetails.name.trim();
    try {
        if (userDetails.name == '') {
            throw 'NameErr';
        } else {
            document.querySelector(".nameEmptyErr").style.display = 'none';
        }
        userDetails.password = document.querySelector("#userPwd").value;
        if (userDetails.password == '') {
            // throws;
            throw 'PwdErr';
            
        } else {
            document.querySelector(".pwdEmptyErr").style.display = 'none';
        }
        userDetails.age = document.querySelector("#uage").value;
   
        userDetails.age = parseInt(userDetails.age);
        if (userDetails.age < 21) {
            throw 'AgeErr'
        } else {
            document.querySelector(".ageErr").style.display = 'none';
        }
        userDetails.gender = document.querySelector("input[name=gender]:checked").value;
        console.log(userDetails);
    
        document.querySelector(".successmsg").style.display = 'block';
    } catch(error) {
        if (error == 'NameErr') {
            document.querySelector(".nameEmptyErr").style.display = 'block';
        } else if (error == 'PwdErr') {
            document.querySelector(".pwdEmptyErr").style.display = 'block';
        } else if (error == 'AgeErr') {
            document.querySelector(".ageErr").style.display = 'block';
        }
    }

}