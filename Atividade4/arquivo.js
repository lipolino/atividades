let caixa = document.getElementById("caixa");
let lista = document.querySelectorAll("#listaCores li");

function mudarCor() {
  let opcao = document.getElementById("corInput").value;
  caixa.style.backgroundColor = opcao;
  caixa.textContent = opcao;
}

lista.forEach(item => {
  item.addEventListener("click", () => {
    let cores = window.getComputedStyle(item).backgroundColor;
    let nomes = item.dataset.cordata;

    caixa.style.backgroundColor = cores;
    caixa.textContent = nomes;
  });
});
