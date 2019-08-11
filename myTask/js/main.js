// its only for learning to set listener end modules ))

import {a, b, deepEqual} from "./l2_t1_deepEqual.js";
import {style, styleToObject} from "./l2_t2_stringToObject.js";
import buffer from "./l6_t1_stringBuffer.js";
import sum from "./l6_t2_clojureSumm.js";
import bufferClear from "./l6_t3_stringBufferClear.js";
import army from "./l6_t4_makeArmy.js";
import throttle from "./l8_t1_trottle.js";
import debounce from "./l8_t2_debounce.js";


let btns = document.querySelectorAll('button');
btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        switch (e.target.name) {
            case 'dE':
                alert('прямое сравнение a === b: ' + (a === b) + '\n' + 'сравнение через deepEqual: ' + deepEqual(a, b));
                break;
            case 'parsStr':
                alert(JSON.stringify(styleToObject(style), null, '\t'));
                break;
            case 'buffer': {
                buffer('Замыкания');
                buffer(' Использовать');
                buffer(' Нужно!');
                alert(buffer()); // Замыкания Использовать Нужно!
            }
                ;
                break;
            case 'csumm':
                alert(sum(3)(7));
                break;
            case 'clearBuf': {
                bufferClear("Тест");
                bufferClear(" тебя не съест ");
                if (confirm(bufferClear())) {
                    break;
                } else {
                    bufferClear.clear();
                    alert(bufferClear());
                }
            }
                ;
                break;
            case 'makeArmy': {
                army[0]();
                army[5]();
            }
                ;
                break;
            case 'debounce': {
                debounce();
            }
                break;
            case 'throttle': {
                throttle();
            }
                break;
        }
    });
});



