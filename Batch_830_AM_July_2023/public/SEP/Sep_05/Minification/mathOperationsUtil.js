var count = 0;

/**
 * Method to find the sub of values.
 * @param {number} firstValue The first parameter
 * @param {number} secondValue  the second parameter
 * @returns the sub of values
 */
var subValues = (firstValue, secondValue)  => {
    count++;
    var result =  0; 
    result =  firstValue + secondValue;
    return result;
}

/**
 * Method to find the ADdition of values.
 * @param {number} firstValue The first parameter
 * @param {number} secondValue  the second parameter
 * @returns the sum of values
 */
var addValues = (firstValue, secondValue) => {
    count++;
    var result =  0; 
    result =  firstValue + secondValue;
    return result;
}

/**
 * Method to find the Multiplication of values.
 * @param {number} firstValue The first parameter
 * @param {number} secondValue  the second parameter
 * @returns the sum of values
 */
var mulValues = (firstValue, secondValue) => {
    count++;
    var result =  0; 
    result =  firstValue * secondValue;
    return result;
}

/**
 * Method to find the Division of values.
 * @param {number} firstValue The first parameter
 * @param {number} secondValue  the second parameter
 * @returns the sum of values
 */
var divValues = (firstValue, secondValue) => {
    count++;
    var result =  0; 
    result =  firstValue / secondValue;
    return result;
}


