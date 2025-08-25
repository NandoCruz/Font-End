// Criando um objeto JSON
const aluno = {
    nome: "Fernando Cruz",
    idade: 53,
    curso: "Analista de Sistemas",
    notas: [8.5, 7.0, 9.0]
}

// Exibindo o Nome e a primeira nota do aluno
console.log(`Primeiro nome: ${aluno.nome}`)
console.log(`Primeira nota: ${aluno.notas[0]}`)

// Modificação de Propriedades: 
// Atualizando idade para 22 anos e adicionando nota nota
aluno.idade = "22"
aluno.notas[3] = 10.0

console.log(aluno)

// Conversão para String: utilizando o método JSON.stringify
let alunoJson = JSON.stringify(aluno)
console.log(`Aluno string: ${alunoJson}`)

// Conversão para Objeto: Utilizando o método JSON.parse
let alunoObj = JSON.parse(alunoJson)
console.log(`Aluno Objeto: `, alunoObj)

// Iteração sobre Propriedades: Usando loop for...in
for(let propriedade in aluno){
    console.log(`${propriedade}: ${aluno[propriedade]}`)
}

// Cálculo da Média das Notas:
let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0)
let media = soma / aluno.notas.length
console.log(`A média das notas é: ${media.toFixed(2)}`)

// Criação de um Objeto JSON Aninhado: 
// Adicione um objeto "endereço" 
// com as propriedades: "rua, cidade e estado" 
aluno.end = {
    rua: "Francisco Feitosa Paletot",
    cidade: "João Pessoa",
    estado: "PB"
}

console.log(aluno)

// Acesso a Dados Aninhados:
// Exiba: cidade e o estado do aluno
console.log(`Cidade: ${aluno.end.cidade}`)
console.log(`Estado: ${aluno.end.estado}`)

// Lista de Alunos:
// Crie um Objeto "alunos" com as mesmas propriedades do objeto "aluno"
let alunos = [
    {
        nome: "Sonia Helena",
        idade: 50,
        curso: "Assistência Social",
        notas: [6.3, 7, 7.5],
        end: {
            rua: "Tiradentes",
            cidade: "Belém",
            estado: "PA"
        }
    },
    {
        nome: "Luísa Menezes",
        idade: 24,
        curso: "Ciência da Computação",
        notas: [10, 9.5, 8.9],
        end: {
            rua: "Rosa Mares",
            cidade: "São Paulo",
            estado: "SP"
        }
    },
    {
        nome: "Laura Menezes",
        idade: 15,
        curso: "Engenharia da Computação",
        notas: [8, 9.3, 9.5],
        end: {
            rua: "D",
            cidade: "Belém",
            estado: "PA"
        }
    }
]
console.log(alunos)

// Filtragem de Alunos: Usando o método filter
// Crie um novo array contando alunos com média superior a 8.
let alunosMedia = alunos.filter(aluno => {
    let media = aluno.notas.reduce((acc,nota) => acc + nota, 0) / aluno.notas.length
    return media > 8
})

console.log(`Alunos com média maior que 8:`, alunosMedia)
