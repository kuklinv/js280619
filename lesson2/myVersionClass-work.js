// let b = 3;
// let a;
// if (true) {
//     a = b + 3;
// }
// console.log(a)
// let fn1 = function (a, b) {
//     return a + b
// }
// let fn2 = Function('a', 'b', 'return a + b');
// console.log(fn1(1, 2), fn2(1, 2));
// let c = 1;
// c++;
// let x =  +c;
// console.log(x);

//KISS
// let a = {a: 1};
// let b = a;
// if (a === b) {
//     console.log('JS is awesome')
// }
// a.a = 3;
// console.log(b);
// const a = 1;
// const b = a + 1;
//
// let bool = false;
// let num1 = 0.55;
// let num2 = 0b1010;
// let num3 = 0xf00d;
// let num4 = NaN;
// let num5 = Infinity;
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3);
// console.log(typeof num4);
// console.log(typeof num5);
//
// let str = 'string';
// let und = undefined;
// let nill = null;
// console.log(nill === null);
// console.log(typeof null);
//
// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1 === s2)
//
// let obj = {
//     [s1]: 'JS'
// };
//
// console.log(obj[s1])
//
/*
 let a1 = {
     a: 1,
     [Symbol.toStringTag]: 'JS is awesome'
 };
 console.log(a1.toString());
 'str'.charAt(0);



function fn () {
    console.log('my test');
}

fn();
 let use = fn.toString();
console.log(use);




// использование шаблонных функций
 let person = {
     name: "Vitaly",
     age: 46
 }

 function msg (str, obj1, obj2) {
     console.log (str);
     console.log (obj1);
     console.log (obj2);
 }
console.log(msg `Day is awesom ${person.name} but you ${person.age}`);

///// 

еще раз const = неизменяемая ссылка. сам экземпляр менять могу


*/

// const age = 33;
// const info = {
//     male: true
// }
// const key = 'my custom KEY';
// const user = {
//     firstName: 'Vitaly',
//     'my second name': 'Kuklin',
//     //age: age
//     //ES6 :
//     age, // if key == variable ore const
//     info,
//     [key]: key // brackets notation - вычисление значения
// }

// console.log(user);






