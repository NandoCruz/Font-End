function leiaMais(){
    let pontos=document.getElementById("pontos");
    let maistexto=document.getElementById("mais");
    let leiaMais=document.getElementById("leiaMais");
    let btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maistexto.style.display="none";
        leiaMais.style.height="150px";
        btnLeiaMais.innerHTML="Leia Mais";
    } else {
        pontos.style.display="none";
        maistexto.style.display="inline";
        leiaMais.style.height="670px";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}

function leia(){
    let pontosEx=document.getElementById("pontosEx");
    let verMaisEx=document.getElementById("verMais");
    let leiaMaisEx=document.getElementById("leiaMaisEx");
    let btnLeiaMaisEx=document.getElementById("btnLeiaMaisEx");

    if(pontosEx.style.display === "none"){
        pontosEx.style.display="inline";
        verMaisEx.style.display="none";
        leiaMaisEx.style.height="600px";
        btnLeiaMaisEx.innerHTML="Leia Mais";
    } else {
        pontosEx.style.display="none";
        verMaisEx.style.display="inline";
        leiaMaisEx.style.height="1040px";
        btnLeiaMaisEx.innerHTML="Leia Menos";
    }
}