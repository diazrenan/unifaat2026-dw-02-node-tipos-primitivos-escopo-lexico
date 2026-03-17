
// 1. Criando o objeto

const aluno = {
    nome: "Ana",
    idade: 20,
    curso: "ADS",
    notas: [7, 8, 9] // array dentro do objeto
};

console.log("Objeto aluno:");
console.log(aluno);



// 2. Percorrendo o objeto (for...in)

console.log("\nPropriedades do aluno:");

for (let chave in aluno) {
    console.log(chave + ": " + aluno[chave]);
}



// 3. Percorrendo o array (for...of)

console.log("\nNotas do aluno:");

for (let nota of aluno.notas) {
    console.log(nota);
}



// 4. Comparação de referência

console.log("\nComparando objetos:");

let aluno2 = aluno;

console.log(aluno === aluno2); // true



// 5. Cópia por referência

console.log("\nCópia por referência:");

aluno2.nome = "Bruno";

console.log("aluno.nome:", aluno.nome);
console.log("aluno2.nome:", aluno2.nome);



// 6. Cópia com spread

console.log("\nCópia com spread:");

let aluno3 = { ...aluno };

aluno3.nome = "Carla";

console.log("aluno.nome:", aluno.nome);
console.log("aluno3.nome:", aluno3.nome);



// 7. Convertendo para JSON

console.log("\nObjeto em JSON:");

let alunoJSON = JSON.stringify(aluno);

console.log(alunoJSON);