// its only for learning to set listener end modules ))

import {a, b, deepEqual} from "./l2_t1_deepEqual.js";
import {style, styleToObject} from "./l2_t2_stringToObject.js";


let btns = document.querySelectorAll('button');
btns.forEach((btn) => {
   btn.addEventListener("click", function (e) {
       switch (e.target.name) {
           // case 'deepEqual': location.href = '#'; // use else go to another page
           // case 'parsStr': location.href = '#';
           case 'dE': alert('прямое сравнение a === b: ' + (a === b) + '\n' + 'сравнение через deepEqual: ' + deepEqual(a, b));
           break;
           case 'parsStr': alert(JSON.stringify(styleToObject(style), null, '\t'));
           // case 'parsStr': alert(styleToObject(style));
           break;
       }
   });
});



