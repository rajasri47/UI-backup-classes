var userDetails = {};
var readUserInfo = () => {
    userDetails.name = document.querySelector('#Username').value;
    userDetails.name =  userDetails.name.trim();
    try {
        if (userDetails.name == ""){
            throw 'nameerr';
        }else {
            document.querySelector('.NameEmptyerr').style.display = 'none';

        }
        userDetails.password = document.querySelector('#password').value;
        if (userDetails.password == ''){
            throw 'passworderr';
        }else {
            document.querySelector('.PasswordEmptyerr').style.display = 'none';
        }
        userDetails.age = document.querySelector('#Uage').value;
        userDetails.age = parseInt(userDetails.age);
        if (userDetails.age < 21){
            throw 'ageerr';
        }else {
            document.querySelector('.AgeErr').style.display = 'none';
        }
        userDetails.gender = document.querySelector("input[name = gender]:checked").value;
        console.log(userDetails);
        document.querySelector('.successmsg').style.display = 'block';
    }
    catch (error){
        if (error == 'nameerr'){
            document.querySelector('.NameEmptyerr').style.display = 'block';
        }else if (error == 'passworderr'){
            document.querySelector('.PasswordEmptyerr').style.display = 'block';
        }else if (error == 'ageerr'){
            document.querySelector('.AgeErr').style.display = 'block';
        }
    }
}