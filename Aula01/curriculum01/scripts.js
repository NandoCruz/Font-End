function leiaMais(){
    let pontos=document.getElementById("pontos");
    let maistexto=document.getElementById("mais");
    let btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maistexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    } else {
        pontos.style.display="none";
        maistexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}

function leiaMaisEx(){
    let pontos=document.getElementById("pontos");
    let maistexto=document.getElementById("mais");
    let btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maistexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    } else {
        pontos.style.display="none";
        maistexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}