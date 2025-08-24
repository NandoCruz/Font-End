let aluno = {
    nome: "João Silva",
    idade: 21,
    curso: "Engenharia de Software",
    notas: [7.5, 8.0, 9.0]
}

console.log(`Primeiro nome: ${aluno.nome}`)
console.log(`Primeira nota: ${aluno.notas[0]}`)

aluno.idade = "22"
aluno.notas[3] = 10

console.log(aluno)

console.log(JSON.stringify(aluno))

console.log(JSON.parse())

