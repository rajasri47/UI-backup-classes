export var getEmpTotalTax = (gender, tSal) => {
    var taxpercent = 0;
    if (gender == 'Male') {
        if (tSal >= 100000) {
            taxpercent = 10;
        } else if (tSal >= 50000) {
            taxpercent = 5;
        }
    } else { // Female
        if (tSal >= 100000) {
            taxpercent = 5;
        } else if (tSal >= 50000) {
            taxpercent = 0;
        }
    }
    var totalTaxTobePaid = (tSal * taxpercent) / 100;

    return totalTaxTobePaid;
}

var sample = () => {

}

var govTaxRules = {
    tax_male: 5,
    tax_female: 10
}

export var count = 90;

export default {govTaxRules, sample, test};
