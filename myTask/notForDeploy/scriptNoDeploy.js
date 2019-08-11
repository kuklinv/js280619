let f = debounce(alert, 1000);
f(1); // выполняется немедленно
f(2); // проигнорирован
setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)


let limitInterval = 100;    // зададим что пресекаем
let timers = {};

function debounce(f, timer) {                       //TODO dont work
    return function () {
        let start = performance.now();
        debugger;
        if (!timers[timer]) {
            timers[timer] = 0;
            let result = f.apply(this, arguments);
            // return  result;
            console.log(result);
        }
        timers[timer] += performance.now() - start;
        console.log(timers);
        // if (timers[timer] <)
        //
        //     }
    }
}