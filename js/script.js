function verificar() {

    const texto = document.getElementById("texto").value;

    if (texto.startsWith("Olá")) {
        alert("O texto se inicia com Olá");
    }
    else {
        alert("O texto não inicia com Olá");
}
}