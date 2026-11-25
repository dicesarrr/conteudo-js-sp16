// Eventos

// Evento de Click com o addEventListener()
const paragrafo = document.querySelector("#ex1-p");
const botao = document.querySelector("#ex1-btn");

botao.addEventListener("click", () => {
  paragrafo.classList.toggle("estilo");
  paragrafo.innerHTML = "Somente a dor coletiva gera união.";
});


// botao.addEventListener("click", adicionarEstilo);

// function adicionarEstilo() {
//   paragrafo.classList.toggle("estilo");
//   paragrafo.innerHTML = "Somente a dor coletiva gera união.";
// }


