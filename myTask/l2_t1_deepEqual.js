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

console.log(a === b);

function deepEqual(a, b) {
    if ((typeof a == "object" && Object.keys(a).length !== null) && (typeof b == "object" && Object.keys(b).length !== null)) {
        for (let key in a) {
            if (b.hasOwnProperty(key)) {
                if (!deepEqual(a[key], b[key])) {
                    return false;
                }
            } else  return  false;
        }
    } else  if (a === b) {
        return true;
    };
    return false;
}
deepEqual(a, b,);