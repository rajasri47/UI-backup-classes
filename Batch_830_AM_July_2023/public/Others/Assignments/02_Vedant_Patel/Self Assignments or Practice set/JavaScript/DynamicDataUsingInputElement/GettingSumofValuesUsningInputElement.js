let Values = (event) => {
    a1 = document.querySelector('#fav1').value;
    a1 = parseInt(a1);
    a2 = document.querySelector('#fav2').value;
    a2 = parseInt(a2);
    
    
    
    
    
    // ShowSum(a1, a2);

};

let ShowSum = () => {
    Values();
    if  (a1 && a2) {
        Sum = a1 + a2;
        document.querySelector('#sum').innerText = Sum;
        document.querySelector(".d1").style.display = 'block';
    }
    else {
        document.querySelector(".error").style.display = "block";
    }

}
let ShowSub = () => {
    Values();
    if  (a1 && a2) {
    Sub = a1 - a2;
    document.querySelector('#sub').innerText = Sub;
    document.querySelector(".d2").style.display = 'block';
    }
     else {
        document.querySelector(".error").style.display = "block";
    }
    
}
let ShowDiv = () => {
    Values();
    if  (a1 && a2) {
    Div = a1 / a2
    document.querySelector('#div').innerText = Div;
    document.querySelector(".d3").style.display = 'block';
    }
    else {
        document.querySelector(".error").style.display = "block";
    }


}
let ShowMul = () => {
    Values();
    if  (a1 && a2) {
     Mul = a1 * a2
    document.querySelector('#mul').innerText = Mul;
    document.querySelector(".d4").style.display = 'block';
    }
    else {
        document.querySelector(".error").style.display = "block";
    }

};
var validation = (event) => {
    if (event.keyCode >= 47 && event.keyCode<=58){
    return true;
}
else {
    return false;
}
};