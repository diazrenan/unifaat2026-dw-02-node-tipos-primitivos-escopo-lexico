// 01-escopo.js

// BLOCO 1: bloco solto { }
{
    const dentro = "ok";
    console.log(dentro); // ok
}
// console.log(dentro); // ReferenceError

// BLOCO 2: de dentro pra fora (let/const não vazam)
if (true) {
    const a = 10;
    let b = 20;
    console.log(a, b); // 10 20
}
// console.log(a); // ReferenceError
// console.log(b); // ReferenceError

// BLOCO 3: de fora pra dentro (bloco enxerga o que está fora)
const fora = "visível";
if (true) {
    console.log(fora); // visível
}

// BLOCO 4: permissividade com var (vaza do bloco)
if (true) {
    var x = 10;
}
console.log(x); // 10

// BLOCO 5: mesma constante fora e dentro (shadowing sem reatribuir)
const bloco = "valor";

if (true) {
    console.log(fora);  // visível
    console.log(bloco); // valor

    {
        const bloco = "outro valor";
        console.log(bloco); // outro valor
    }

    console.log(bloco); // valor
}