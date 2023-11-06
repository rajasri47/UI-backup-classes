export var getEmpTotalTax = (gender, totalSal) => {
    var taxpercent = 0;
    if(gender == 'male'){
        if(totalSal >= 200000){
            taxpercent = 10;
        }else if(totalSal >= 100000){
            taxpercent = 5;
        }
    }else{ //female
        if(totalSal >= 100000){
            taxpercent = 5;

        }else if(totalSal >= 50000){
            taxpercent = 0;
        }
    }
    
    var totalTaxTobePaid  = (totalSal * taxpercent) / 100;
    return  totalTaxTobePaid;
};