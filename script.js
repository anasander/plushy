// LINKS ATIVOS NO MENU
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// GALERIA DE IMAGENS
const galeria = document.querySelectorAll(".pelucia-imagens img");
const galeriaContainer = document.querySelector(".pelucia-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 476px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// ANIMAÇÃO
if (window.SimpleAnime) {
  new SimpleAnime();
}
