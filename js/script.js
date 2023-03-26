// Ativar links do menu!
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar Itens do Orçamento!

const parametros = new URLSearchParams(location.search);
// console.log(parametros);
function ativarparametros(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarparametros);

// Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(evento) {
  const elemento = evento.currentTarget;
  // console.log(evento);
  console.log(elemento);
  const controls = elemento.getAttribute("aria-controls");
  console.log(controls);

  const resposta = document.getElementById(controls);
  console.log(resposta);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  elemento.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const imagem = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(imagem);
  }
}
function eventosGaleria(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
