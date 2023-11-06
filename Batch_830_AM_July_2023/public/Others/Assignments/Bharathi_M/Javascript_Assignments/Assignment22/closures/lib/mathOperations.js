var mathUtils = (() => {
      var addValues = (a1,a2) => {
        sum = a1 + a2;
        return sum;
      }
      var subValues = (a1,a2) => {
        sub = a1 - a2;
        return sub;
      }
      var mulValues = (a1,a2) => {
        mul = a1 * a2;
        return mul;
      }
      var divValues = (a1,a2) => {
        div = a1 / a2;
        return div;
      }
    return {
        getAddition: (a1,a2) => {
            var result = addValues(a1,a2);
            return result;
        },
        getSubstraction: (a1,a2) => {
            var result = subValues(a1,a2);
            return result;
        },
        getMultiplication: (a1,a2) => {
            var result = mulValues(a1,a2);
            return result;
        },
        getDivision: (a1,a2) => {
            var result = divValues(a1,a2);
            return result;
        }
    };
})();