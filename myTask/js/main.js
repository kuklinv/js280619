// its only for learning to set listener end modules ))

import {a, b, deepEqual} from "./l2_t1_deepEqual.js";
import {style, styleToObject} from "./l2_t2_stringToObject.js";
import buffer from "./l6_t1_stringBuffer.js";
import sum from "./l6_t2_clojureSumm.js";
import bufferClear from "./l6_t3_stringBufferClear.js";
import army from "./l6_t4_makeArmy.js";
import throttle from "./l8_t1_trottle.js";
import debounce from "./l8_t2_debounce.js";
import ClButton from "./clButton.js";     // TODO и не подключилолсь и часть кнопок сломались (которые алерты)

// TODO не создал экземпляров класса ClButton.......

// TODO лучший вариант написать класс  - копка создать экзкмпляры этого класса и приделать к нему эддэвентлистенер
// у каждого будет независимый
// саму кнопку нарисовать так же как в примере про dropdown
// TODO класс. эт будет интересно

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
                let f = debounce(alert, 1000);
                f('debounce 1,immediately'); // выполняется немедленно
                f(2); // проигнорирован
                setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
                setTimeout(() => f('debounce4, timeout 1100'), 1100); // выполняется
                setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
            }
                break;
            case 'throttle': {
// f1000 передаёт вызовы f максимум раз в 1000 мс
                let f1000 = throttle(alert, 1000);

                f1000(1); // показывает 1
                f1000(2); // (ограничение, 1000 мс ещё нет)
                f1000(3); // (ограничение, 1000 мс ещё нет)
            }
                break;
        }
    });
});



