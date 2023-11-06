// variables declared
const UserName =document.getElementById("UserName")

const Male = document.getElementById("Male")
const Female= document.getElementById("Female")

// variable checking
let UserValue=UserName.value;

// form action
form.addEventListener("submit", logSubmit);

function logSubmit(event) {
    check();
    event.preventDefault();
  }

function check(){
    if(UserValue==" "){
        error();
        
        
    }
    
}
// display user values
document.getElementById("UserNameValue").innerHTML="${UserValue}";
// Error code 
function error(){
    const list = document.getElementById("error").classList;
    list.add("errorMessage")
    
}


