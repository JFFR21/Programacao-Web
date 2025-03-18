const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    const h1 = document.querySelector("h1");
    h1.textContent = "Botão clicado!";
    h1.style.backgroundColor = "red";
});

const campoTexto = document.getElementById("campoTexto");

campoTexto.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        console.log(campoTexto.value);
    }
});


const lista = document.getElementById("lista");

lista.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});