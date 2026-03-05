// 04-event-loop.js

// BLOCO 1: setTimeout 0 entra na fila e executa depois do código atual
console.log("A"); // A

setTimeout(() => {
    console.log("B"); // B
}, 0);

console.log("C"); // C
// Ordem real: A, C, B

// BLOCO 2: dois timers com tempos diferentes
console.log("1"); // 1

setTimeout(() => {
    console.log("2"); // 2
}, 100);

setTimeout(() => {
    console.log("3"); // 3
}, 0);

console.log("4"); // 4
// Ordem real: 1, 4, 3, 2