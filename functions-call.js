function hello(param) {
    console.log('Hello, world!');
    console.log(param);
}

// hello('JavaScript');

// hello.apply(null, ['JavaScript']);
// не просто вызвать функцию, но и задать ей контекст

// hello.call(null, 'JavaScript');
/* также, как и apply - когда нужно задать контект
но apply используется чаще, т.к. передавать аргументы в виде массива - удобно */

// hello.call(null, ...['JavaScript']);
// call c массивом

/* IIFE - Immediately Invoked Function Expression - Немедленно вызываемое функциональное выражение
функция выполняется и сразу же вызываается*/
/* (function hello(param) {
    console.log('Hello, world!');
    console.log(param);
})('JavaScript'); */

// eval(`hello('JavaScript')`);
// опасно - возможность выполнения вредоносного кода

// setTimeout(() => hello('JavaScript'), 0);