
var count = 0;
var mathUtils = 40;
var dojob = (type) => {

    count++;
    var a1 = document.querySelector("#fval").value;
    var a2 = document.querySelector("#sval").value;
    a1 = parseInt(a1);
    a2 = parseInt(a2);
    var result;
    switch(type) {
        case 'add':
            result = mathUtils.getAddition(a1, a2);
            result
            break;
        case 'mul':
            result = mulValues(a1, a2);
            break;
        case 'sub':
            result = mathUtils.subValues(a1, a2);
            break;

        case 'div':
            result = divValues(a1, a2);
            break;
    }

    document.querySelector("#rblock").innerHTML = `The ${type} is ${result}`;
    document.querySelector("#countBlock").innerText = 'Count value is ' + count;

    sample();
}

var sample = () => {
    console.log("hurrey my job is done");
}