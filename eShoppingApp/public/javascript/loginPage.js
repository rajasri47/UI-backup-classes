var loggedInUserId = '';

var prefillUserCredentialData = () => {
  if (localStorage.getItem("userCredentials") != null) {
    var userData = JSON.parse(localStorage.getItem("userCredentials"));
    $("#actId").val(userData.accountId);
    $("#actPwd").val(userData.password);
    $("#remember-credentials")[0].checked = true;
  }
}


var readUserCredentials = () => {
  var userData = {};
  userData.accountId = $("#actId").val();
  userData.password = $("#actPwd").val();


  if ($("#remember-credentials")[0].checked) {
      localStorage.setItem("userCredentials", JSON.stringify(userData));
  } else {
      localStorage.removeItem("userCredentials");
  }
  var url = "http://localhost:3000/validate/userCredentials";

  // fetch(url, userData)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     console.log("yes validated");
  //   });
  // axios.get(url, {params: userData })
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });
  axios.post(url, userData)
  .then(function (response) {
    
    if (response.data.msg == 'Valid'){
      loggedInUserId =  userData.accountId;
      if (response.data.isAdmin){
        loadSelectedPage('uploadNewProduct');
      } else {
        loadSelectedPage('pDetails');
      }
    } else {
      $(".loginErrMsg").html("Invalid Credentials....");
    }
  })
  .catch(function (error) {
    console.log(error);
  });

};
