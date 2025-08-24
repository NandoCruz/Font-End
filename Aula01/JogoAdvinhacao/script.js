let mensagem = document.getElementById('mensagem')
let num = document.getElementById('num')
let result = document.getElementById('result')
let num_tantativas = document.getElementById('tentativas')
let btnOn = document.getElementById('btn_On')

let numMax = 30
let numMin = 1

let numAleatorio = parseInt(Math.random() * (numMax - numMin) + numMin)

contador = 0

function btnAdivinha(){
    if(btnOn.className === 'btnOff'){
        btn_Off()
    } else {
        if((numAleatorio == num.value) && (btnOn.className === 'btnOn')){
            result.innerHTML = (`Parabéns! Você acertou.`)
            mensagem.innerHTML = (`Pensei no número ${numAleatorio}`)
            btnOn.className = 'btnOff'
            btnOn.innerHTML = 'Inciar'
        } else if ((num.value >= numAleatorio) && (btnOn.className === 'btnOn')){
            result.innerHTML = (`Você não acertou! Digite um número menor`)
            tentativa()
            contador += 1
            contar()
        } else if ((num.value <= numAleatorio) && (btnOn.className === 'btnOn')){
            result.innerHTML = (`Você não acertou! Digite um número maior`)
            tentativa()
            contador += 1
            contar()
        }
    }
}

function contar(){
    if (contador == 5){
        mensagem.innerHTML = (`Pensei no número ${numAleatorio}`)
        result.innerHTML = (`Infelizmente você errou!`)
        btnOn.className = 'btnOff'
        btnOn.innerHTML = 'Inciar'
    }
}

function tentativa(){
    let atualTentativa = parseInt(num_tantativas.innerHTML) || 0
    let novaTentativa = atualTentativa + 1
    num_tantativas.innerHTML = novaTentativa
}

function btn_Off(){
    mensagem.innerHTML = (`Qual número estou pensando?`)
    result.innerHTML = (`Digite um número de 1 a 30`)
    num_tantativas.innerHTML = "0"
    num.value = ""
    contador = 0
    btnOn.className = 'btnOn'
    btnOn.innerHTML = 'Inciar'
}