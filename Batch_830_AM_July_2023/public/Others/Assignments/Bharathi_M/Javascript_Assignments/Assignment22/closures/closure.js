var count = 0;
var doJob = (type) => {
    count ++;
    var a1 = document.querySelector("#fval").value;
    var a2 = document.querySelector("#sval").value;
    a1 = parseInt(a1);
    a2 = parseInt(a2);
    var result;
    switch(type) {
        case 'add':
            result = mathUtils.getAddition(a1,a2);
            break;
        case 'sub':
            result = mathUtils.getSubstraction(a1,a2);
            break;
        case 'mul':
            result = mathUtils.getMultiplication(a1,a2);
            break;
        case 'div':
            result = mathUtils.getDivision(a1,a2);
            break;
    }
    document.querySelector("#rBlock").innerHTML = `the ${type} is ${result}`;
    document.querySelector("#countBlock").innerHTML = 'the count value is ' + count;

}