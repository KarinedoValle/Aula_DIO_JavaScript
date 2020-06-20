function botao() {
    //alert("Obrigado por clicar!");
    document.getElementById("DIO").innerHTML="Página da DIO";
}

function redirecionar() {
    //window.open("https://web.digitalinnovation.one/home");
    window.location.href = "https://web.digitalinnovation.one/home";
}

function trocar(elemento) {
   // document.getElementById("mouse").innerHTML=":)";
    //alert("Trocar texto.");
    elemento.innerHTML=":)"
}

function voltar(elemento) {
    //document.getElementById("mouse").innerHTML="Passe o mouse aqui.";
    elemento.innerHTML="Passe o mouse aqui."
}

function carregando() {
    alert("Tudo pronto.")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}