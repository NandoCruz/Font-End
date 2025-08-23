let mensagem = document.getElementById('mensagem')
let num = document.getElementById('num')
let result = document.getElementById('result')

let numMax = 30
let numMin = 1

let contador = 0

function btnAdivinha(){

        let numAleatorio = parseInt(Math.random() * (numMax - numMin) + numMin)
        mensagem.innerHTML = (`Pensei no número ${numAleatorio}`)
        

        if(numAleatorio == num.value){
            result.innerHTML = (`Parabéns! Você acertou.`)
        } else {
            if (contador == 5){
                result.innerHTML = (`Digite novo número`)
                num.value = ""
                contador = 0
            } else {
                contador += 1
                result.innerHTML = (`Infelizmente você errou.`)
            }
        }
}