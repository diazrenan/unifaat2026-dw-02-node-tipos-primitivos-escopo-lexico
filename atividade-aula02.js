console.log("\n== 1) Tipos primitivos = typeof =="); // ==1) Tipos primitivos = typeof ==

const texto = "Olá, mundo!";
const numero = 21;
const booleano = true;
let indefinido;
const nulo = null;
const numeroGigante = 9007199254740991n;
const simbolo = symbol("id");

console.log(typeof texto); // string
console.log(typeof numero); // number
console.log(booleano); // boolean
console.log(typeof indefinido); // undefined
console.log(typeof nulo);// Object
console.log(typeof numeroGigante); // bigint
console.log(typeof simbolo); // symbol
console.log("typeof null retorna 'object' por um comportamento historico da linguagem."); // typeof null retorna 'object' por um comportamento histórico da linguagem.

console.log("\n== 2)BigInt e symbol =="); // ==2)BigInt e symbol ==

const bigIntExemplo = 1234567890123456789012345678901234567890n;
console.log(bigIntExemplo); // 1234567890123456789012345678901234567890n
console.log(typeof bigIntExemplo); // bigint

const simbolo1 = Symbol("id");
const simbolo2 = Symbol("id");
console.log(simbolo1 === simbolo2); // false
console.log(typeof simbolo1); // symbol

console.log("\n== 3) Operadores matemáticos, lógicos e comparação =="); // == 3) Operadores matemáticos, lógicos e comparação ==

// Matemáticos
console.log(10 + 5); // 15
console.log(20 % 3); // 2

// Lógicos
console.log(true && false); // false
console.log(true || false); // true

// Comparação
console.log(8 > 3); // true
console.log(5 == "5"); // true
console.log(5 === "5"); // false

console.log("\n== 4) Concatenação e conversão dinâmica =="); // == 4) Concatenação e conversão dinâmica ==

console.log(2 + "2"); // 22
console.log(2 + (+"2")); // 4
console.log("Resultado: " + 10); // Resultado: 10

console.log("\n== 5) Escopo léxico e blocos {} =="); // == 5) Escopo léxico e blocos {} ==

{
    const dentroDoBloco = "Estou dentro de um bloco";
    console.log(dentroDoBloco); // Estou dentro de um bloco
}

{
    const interna = "Só existe aqui dentro";
    console.log(interna); // Só existe aqui dentro
}
// console.log(interna); // ReferenceError: interna is not defined

const externa = "Fui declarada fora";
{
    console.log(externa); // Fui declarada fora
}

if (true) {
    var vazouDoIf = "O var vazou do bloco if";
}
console.log(vazouDoIf); // O var vazou do bloco if

console.log("\n== 6) Shadowing com const =="); // == 6) Shadowing com const ==

const bloco = "valor";

if (true) {
    console.log(bloco); // valor

    {
        const bloco = "outro valor";
        console.log(bloco); // outro valor
    }

    console.log(bloco); // valor
}

console.log(bloco); // valor

console.log("\n== 7) Imutabilidade =="); // == 7) Imutabilidade ==

let palavra = "javascript";
palavra.toUpperCase();
console.log(palavra); // javascript

palavra = palavra.toUpperCase();
console.log(palavra); // JAVASCRIPT

console.log("\n== 8) Assincronismo com setTimeout =="); // == 8) Assincronismo com setTimeout ==
console.log("setTimeout entra na fila e roda depois do código atual."); // setTimeout entra na fila e roda depois do código atual.

console.log("A"); // A
setTimeout(() => {
    console.log("B"); // B
}, 0);
console.log("C"); // C

console.log("Início"); // Início

setTimeout(() => {
    console.log("Timeout 100ms"); // Timeout 100ms
}, 100);

setTimeout(() => {
    console.log("Timeout 0ms"); // Timeout 0ms
}, 0);

console.log("Fim"); // Fim 