
function f (a) {                          //TODO пока не заботае логгирующий декоратор
    console.log(a);
}
let  logArr = [];
work = makeLogging(f, logArr);
work(1);
work(2);
work(3);
for (let i = 0; i < logArr.length; i += 1) {
    console.log(`arg${i} = ${logArr[i]}`);
}

function makeLogging (f, logArr) {
  return function () {
      logArr.push(arguments);
      return f.call(this, arguments);
  }
}

//
// function f(a) {
// alert(a);
// }
//
// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);
//
// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)
//
// function throttle(func, ms) {
// // debugger
//     let isThrottled = false,
//         savedArgs,
//         savedThis;
//
//     function wrapper() {
//
//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
//
//         func.apply(this, arguments); // (1)
//
//         isThrottled = true;
//
//         setTimeout(function() {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
//
//     return wrapper;
// }







// let f = debounce(alert, 1000);
// f(1); // выполняется немедленно
// f(2); // проигнорирован
// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
//
//
// function debounce(f, timer) {                       //TODO dont work
//     debugger
//     let isCooldown = false;
//     return function () {
//         if (isCooldown) return;
//         f.apply(this, arguments);
//         isCooldown = true;
//         setTimeout(() => isCooldown = false, timer);
//     };
// }


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