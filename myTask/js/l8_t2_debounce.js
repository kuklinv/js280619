// let f = debounce(alert, 1000);
// f(1); // выполняется немедленно
// f(2); // проигнорирован
// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)


function debounce(f, timer) {
    let isCooldown = false;
    return function () {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, timer);
    };
}

export default debounce;