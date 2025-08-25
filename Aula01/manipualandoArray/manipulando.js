// Construção de Array
const notas = [8.0, 7.5, 9.3, 5.8, 7.0]

// Acesso a primeira e última nota
console.log("Primeira Nota: ", notas[0])
console.log("Última nota: ", notas[notas.length - 1])

// Adicionando nota usando push()
notas.push(8.0)
console.log("adicionando nota após a última:", notas)

// Removendo a primeira nota usando shift()
notas.shift()
console.log("Array após remover a 1ª posição:", notas)

// Exibindo cada nota no console usando foteach
notas.forEach((nota, index) => {
    console.log(`Nota ${index + 1}: `, nota)
})

// Cálculo da média usando o método reduce
let soma = notas.reduce(function(acumulador, nota){
    return acumulador + nota
}, 0)
let media = soma / notas.length
console.log("Media: ", media.toFixed(2))

// Filtro de notas usando o método filter
let notasMaioresQueSete = notas.filter(function(nota){
    return nota > 7
})

console.log(`Notas maiores que 7: ${notasMaioresQueSete}`)

// Ordenação crescente
notas.sort((a,b) => a - b)
console.log(`Ordem crescente: ${notas}`)

// Busca de elementos: verificar se a nota existe no array usando includes
let existeNota = notas.includes(5.8)
console.log(`A nota existe no array? ${existeNota}`)

// Encontre o indice utilizando o médoto indexOf
let indiceNota = notas.indexOf(7)
console.log(`Qual o índice da nota? ${indiceNota}`)

// Mapeamento: Elevando ao quadrado usando o método map
let notasElevadoQuadrado = notas.map(function(nota){
    let quadrado = nota * nota
    return quadrado.toFixed(2)
})

console.log(`Notas elevadas ao quadrado: ${notasElevadoQuadrado}`)