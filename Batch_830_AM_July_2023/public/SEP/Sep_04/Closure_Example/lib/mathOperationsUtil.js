 


var mathUtils = (()  => { 

        var count = 10;

        var addValues = (a1, a2) => {
            count++;
            var sum = 0; 
            sum = a1 + a2;
            return sum;
        }

        var mulValues = (a1, a2) => {
            count++;
            var sum = 0; 
            sum = a1 * a2;
            return sum;
        }

        var divValues = (a1, a2) => {
            count++;
            var sum = 0; 
            sum = a1 / a2;
            return sum;
        }


    var sample = () => {
        console.log("am from sample");
    }


    // count, sample, Student, dateobj

    return {
        getAddition: (a1, a2) => {
            var result = addValues(a1, a2);
            return result;
            
        },
        subValues: (a1, a2) => {
            count++;
            var sum = 0; 
            sum = a1 - a2;
            return sum;
        }  
    }

})();
