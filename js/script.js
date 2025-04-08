function verificar() {

    const texto = document.getElementById("texto").value;

    if (texto.endsWith("ção")) {
        alert("A palavra termina com ção");
    }
    else {
        alert("O texto não termina com ção");
}
}