let f = debounce(alert, 1000);
let timers = {};
let limitInterval = 100;    // зададим что пресекаем
f(1); // выполняется немедленно
f(2); // проигнорирован
setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)


function debounce(f, timer) {                       //TODO dont work

    let start = performance.now();
debugger;
    return function () {
        if (!timers[timer]) {
            timers[timer] = 0;
            let result = f.apply(this, arguments);
            // return  result;
            console.log(result);
        }
        timers[timer] += performance.now() - start;
        console.log(timers);
    }
}


//// пример из учебника ниже = декоратор с подсчетом времени выполнения ункции
// var timers = {};
//
// // прибавит время выполнения f к таймеру timers[timer]
// function timingDecorator(f, timer) {
//     return function() {
//         var start = performance.now();
//
//         var result = f.apply(this, arguments); // (*)
//
//         if (!timers[timer]) timers[timer] = 0;
//         timers[timer] += performance.now() - start;
//
//         return result;
//     }
// }
//
// // функция может быть произвольной, например такой:
// var fibonacci = function f(n) {
//     return (n > 2) ? f(n - 1) + f(n - 2) : 1;
// }
//
// // использование: завернём fibonacci в декоратор
// fibonacci = timingDecorator(fibonacci, "fibo");
//
// // неоднократные вызовы...
// alert( fibonacci(10) ); // 55
// alert( fibonacci(20) ); // 6765
// // ...
//
// // в любой момент можно получить общее количество времени на вызовы
// alert( timers.fibo + 'мс' );