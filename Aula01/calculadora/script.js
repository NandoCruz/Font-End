/* este script foi copiado e não está em uso*/
let imgAtualC = "imagens/C.png"
let imgAnteriorC = "imagens/C1.png"

let imgAtualDiv = "imagens/divisao2.png"
let imgAnteriorDiv = "imagens/divisao1.png"

let imgAtualMult = "imagens/multiplicacao2.png"
let imgAnteriorMul = "imagens/multiplicacao1.png"

let imgAtualSub = "imagens/subtracao2.png"
let imgAnteriorSub = "imagens/subtracao1.png"

let imgAtualSoma = "imagens/soma2.png"
let imgAnteriorSoma = "imagens/soma1.png"

function trocaC(){
    if(imgAnteriorC){
        document.getElementById("imagemDiv").src = imgAnteriorDiv;
        document.getElementById("imagemMult").src = imgAnteriorMul;
        document.getElementById("imagemSub").src = imgAnteriorSub;
        document.getElementById("imagemSoma").src = imgAnteriorSoma;
    }
    document.getElementById("imagemC").src = imgAtualC;
    let aux = imgAtualC;
    imgAtualC = imgAnteriorC;
    imgAnteriorC = aux;
}

function trocaDiv(){
    document.getElementById("imagemC").src = imgAtualC;
    document.getElementById("imagemMult").src = imgAnteriorMul;
    document.getElementById("imagemSub").src = imgAnteriorSub;
    document.getElementById("imagemSoma").src = imgAnteriorSoma;
    document.getElementById("imagemDiv").src = imgAnteriorDiv;
    let aux = imgAtualDiv;
    imgAtualDiv = imgAnteriorDiv;
    imgAnteriorDiv = aux;
}

function trocaMult(){
    document.getElementById("imagemMult").src = imgAtualMult;
    let aux = imgAtualMult;
    imgAtualMult = imgAnteriorMul;
    imgAnteriorMul = aux;
}

function trocaSub(){
    document.getElementById("imagemSub").src = imgAtualSub;
    let aux = imgAtualSub;
    imgAtualSub = imgAnteriorSub;
    imgAnteriorSub = aux;
}

function trocaSoma(){
    document.getElementById("imagemSoma").src = imgAtualSoma;
    let aux = imgAtualSoma;
    imgAtualSoma = imgAnteriorSoma;
    imgAnteriorSoma = aux;
}