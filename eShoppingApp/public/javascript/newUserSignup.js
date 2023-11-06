var readSignupData = () => {
    var userData = {};
    userData.accountId = $("#accountId").val();
    userData.mailId = $("#mailId").val();
    userData.password = $("#password").val();
    userData.userDob = $("#userDob").val();
    console.log(userData)
    resetUserFields();
    axios.post('/new/userSignup', userData).then((response) => {
        console.log(response);
        if (response.data.msg == 'Success') {
            $(".succssmsgblock").text("Successfly user got signedup");
        } else {
            $(".succssmsgblock").text("Error while singup, please connect with admin");
        }
    }).catch((error) => {

    })
}


var resetUserFields = () => {
    $("#accountId").val('');
    $("#mailId").val('');
    $("#password").val('');
    $("#userDob").val('');
}