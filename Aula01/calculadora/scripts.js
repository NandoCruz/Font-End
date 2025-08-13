let imgC = document.getElementById("imagemC");
let imgDiv = document.getElementById("imagemDiv")
let imgMult = document.getElementById("imagemMult")
let imgSub = document.getElementById("imagemSub")
let imgSoma = document.getElementById("imagemSoma")
let resultado = document.getElementById("resultado")

function trocaC(){
    if(imgC.className == "off"){
        imgC.src = "imagens/C2.png";
        imgC.className = "on";
        imgDiv.src = "imagens/divisao1.png"
        imgDiv.className = "off";
        imgMult.src = "imagens/multiplicacao1.png"
        imgMult.className = "off";
        imgSub.src = "imagens/subtracao1.png"
        imgSub.className = "off";
        imgSoma.src = "imagens/soma1.png"
        imgSoma.className = "off";
        limpar();
    } else {
        imgC.src = "imagens/C1.png";
        imgC.className = "off";
    }
}

function trocaDiv(){
    if(imgDiv.className == "off"){
        imgDiv.src = "imagens/divisao2.png";
        imgDiv.className = "on";

        if(imgSoma.className == "on" && imgDiv.className == "on" || imgMult.className == "on" || imgSub.className == "on"){
            const resultado = document.querySelector("#resultado")
            resultado.value = resultado.value.slice(0, -1)
        }

        imgC.src = "imagens/C1.png";
        imgC.className = "off";
        imgMult.src = "imagens/multiplicacao1.png"
        imgMult.className = "off";
        imgSub.src = "imagens/subtracao1.png"
        imgSub.className = "off";
        imgSoma.src = "imagens/soma1.png"
        imgSoma.className = "off";

        insert('/')
    } else {
        imgDiv.src = "imagens/divisao1.png";
        imgDiv.className = "off";
        const resultado = document.querySelector("#resultado")
        resultado.value = resultado.value.slice(0, -1)
    }
}

function trocaMult(){
    if(imgMult.className == "off"){
        imgMult.src = "imagens/multiplicacao2.png"
        imgMult.className = "on"

        if(imgMult.className == "on" && imgDiv.className == "on" || imgSoma.className == "on" || imgSub.className == "on"){
            const resultado = document.querySelector("#resultado")
            resultado.value = resultado.value.slice(0, -1)
        }

        imgDiv.src = "imagens/divisao1.png";
        imgDiv.className = "off";
        imgC.src = "imagens/C1.png";
        imgC.className = "off";
        imgSub.src = "imagens/subtracao1.png"
        imgSub.className = "off";
        imgSoma.src = "imagens/soma1.png"
        imgSoma.className = "off";

        insert('*')
    } else {
        imgMult.src = "imagens/multiplicacao1.png"
        imgMult.className = "off"
        const resultado = document.querySelector("#resultado")
        resultado.value = resultado.value.slice(0, -1)
    }
}

function trocaSub(){
    if(imgSub.className == "off"){
        imgSub.src = "imagens/subtracao2.png"
        imgSub.className = "on"
        
        if(imgSub.className == "on" && imgDiv.className == "on" || imgMult.className == "on" || imgSoma.className == "on"){
            const resultado = document.querySelector("#resultado")
            resultado.value = resultado.value.slice(0, -1)
        }
        
        imgDiv.src = "imagens/divisao1.png";
        imgDiv.className = "off";
        imgC.src = "imagens/C1.png";
        imgC.className = "off";
        imgMult.src = "imagens/multiplicacao1.png"
        imgMult.className = "off";
        imgSoma.src = "imagens/soma1.png"
        imgSoma.className = "off";
        
        insert('-')
    } else {
        imgSub.src = "imagens/subtracao1.png"
        imgSub.className = "off"
        const resultado = document.querySelector("#resultado")
        resultado.value = resultado.value.slice(0, -1)
        
    }
}

function trocaSoma(){
    if(imgSoma.className == "off"){
        imgSoma.src = "imagens/soma2.png";
        imgSoma.className = "on";
        
        if(imgSoma.className == "on" && imgDiv.className == "on" || imgMult.className == "on" || imgSub.className == "on"){
            const resultado = document.querySelector("#resultado")
            resultado.value = resultado.value.slice(0, -1)
        }

        imgDiv.src = "imagens/divisao1.png";
        imgDiv.className = "off";
        imgC.src = "imagens/C1.png";
        imgC.className = "off";
        imgMult.src = "imagens/multiplicacao1.png";
        imgMult.className = "off";
        imgSub.src = "imagens/subtracao1.png";
        imgSub.className = "off";

        insert('+')
    } else {
        imgSoma.src = "imagens/soma1.png";
        imgSoma.className = "off";
        const resultado = document.querySelector("#resultado")
        resultado.value = resultado.value.slice(0, -1)
        
    
    }
}

function insert(data){
    document.getElementById("resultado").value += data;
}

function limpar(){
document.getElementById("resultado").value = "";
}

function back(){
    const resultado = document.querySelector("#resultado")
    resultado.value = resultado.value.slice(0, -1)
}

function calcular(){
    const resultado = document.querySelector("#resultado")
    resultado.value = eval(resultado.value)
}

function raiz(){
    const resultado = document.querySelector("#resultado")
    resultado.value = Math.sqrt(resultado.value).toFixed(2)
    imgC.src = "imagens/C1.png";
    imgC.className = "off";
}
