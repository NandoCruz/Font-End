let number
number = 10
number = 100
console.log(number)


const num = 10
// num = 100  // não pode atribuir novo valor
console.log(num)

const numeros = []
numeros.push = [1]
console.log(numeros)

let variable = 10
console.log(variable)
console.log(typeof variable)
variable = 'fulano'
console.log(variable)
console.log(typeof variable)

const x = 10
const y = 'a'
console.log(x - y)

const number1 = 10
const number2 = 10
const operador = '+'
/*
if(operador === '+'){
    result = number1 + number2
} else if (operador === '-'){
    result = number1 - number2
}
*/
switch(operador){
    case '+':
        result = number1 + number2
        break
    case '-':
        result = number1 - number2
        break
    default:
        result = 'Operador Invalido'
}
console.log(result)

for (let flag = 1; flag <= 10; flag += 1){
    console.log(flag)
}

// Declaração de Função
function addition (param1, param2){
    return param1 + param2
}

console.log(addition(1,2))

const adicionar = function (param1, param2){
    return param1 + param2
}
console.log(adicionar(5,2))

const add = (param1, param2) => {
    return param1 + param2
}

console.log(add(5,8))

const sub = (param1, param2) => param1 - param2

console.log(sub(15,8))

// Parâmetro Rest
function add_soma(...params){
    let summation = 0;
    for(let value of params){
        summation += value
    }
    return summation
}

console.log(add_soma(1,2,3,4,5))

// Callback
function calc(param1, param2, callback){
    return callback(param1, param2)
}

console.log(calc(2,8, (x,y) => x + y))

// ****** //
function calc(param1, param2, callback){
    return callback(param1, param2)
}
const soma = (x,y) => x + y

console.log(calc(2,18, soma))

// Cenário função ESM

function sum(a,b){
    return a + b
}
