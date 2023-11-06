var UserRegister = () => {
    var userData = {};
    userData.username = document.querySelector("#userid").value;
    userData.username = userData.username.trim();
    userData.password = document.querySelector("#password").value;
    userData.age = document.querySelector("#age").value;
    console.log(userData)
    if (!userData.username) {
        document.querySelector(".uIdErr").style.display = 'inline'
    } else {
        document.querySelector(".uIdErr").style.display = 'none'
    }
}
var showHide = () => {
    var element = document.querySelector("#password")
    //console.log(element)
    var texttype = element.getAttribute("type")
    //texttype==='password'?element.setAttribute("type","text"):element.setAttribute("type","password")
    if (texttype === 'password') {
        element.setAttribute("type", "text");
        document.querySelector(".eyeclose").style.display = 'inline'
        document.querySelector(".eyeopen").style.display = 'none'
    } else {
        element.setAttribute("type", "password");
        document.querySelector(".eyeclose").style.display = 'none'
        document.querySelector(".eyeopen").style.display = 'inline'
    }

}
var validateUserid = () => {
    var val = document.querySelector("#userid").value;
    val = val.trim().split('')
    //console.log(val)
    for (let i = 0; i < val.length; i++) {
        let char = val[i].charCodeAt(0)
        if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
            document.querySelector(".uIdErr").style.display = 'none'
        } else {
            document.querySelector(".uIdErr").style.display = 'inline'
        }
    }

}