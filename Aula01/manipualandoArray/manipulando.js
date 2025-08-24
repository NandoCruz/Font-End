const notas = [8, 7.5, 9.3, 5.8, 7]

console.log("Primeira Nota: ", notas[0])
console.log("Última nota: ", notas[notas.length - 1])

notas.push(8)
console.log("Apos a última nota", notas)

notas.shift()
console.log("Array após remover a 1ª posição", notas)