// 02-tipos.js

// BLOCO 1: typeof nos primitivos principais
console.log(typeof "abc");       // string
console.log(typeof 10);          // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(null);               // null
console.log(typeof null);        // object

// BLOCO 2: BigInt
const grande = 9007199254740993n;
console.log(grande);             // 9007199254740993n
console.log(typeof grande);      // bigint

// BLOCO 3: Symbol
const a = Symbol("id");
const b = Symbol("id");
console.log(a === b);            // false
console.log(typeof a);           // symbol