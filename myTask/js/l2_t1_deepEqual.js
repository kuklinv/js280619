
// ;(function () {
    'use strict';
let a = {
    name: 'Misha',
    order: {
        price: 20
    },
};

let b = {
    name: 'Misha',
    order: {
        price: 20,
    }
};

const deepEqual = (a, b) => {
    if ((typeof a == "object" && Object.keys(a).length !== null) && (typeof b == "object" && Object.keys(b).length !== null)) {
        for (let key in a) {
            if (b.hasOwnProperty(key)) {
                if (!deepEqual(a[key], b[key])) {
                    return false;
                }
            } else  return  false;
        }
    } return true;
    return false;
};

// let directComparison = (a === b);
// console.log(a === b);
// let  result = deepEqual(a, b,);
// console.log(result);
// }());
export {a, b, deepEqual};

