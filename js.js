// Auto-scroll galería
const galeria = document.getElementById("galeria");
let index = 0;

function autoScroll() {
  if (!galeria) return; // seguridad
  if (window.innerWidth <= 600) { // solo en móvil
    const items = galeria.querySelectorAll("img");
    if (items.length === 0) return;
    index = (index + 1) % items.length; // avanzar y volver al inicio
    galeria.scrollTo({
      left: galeria.clientWidth * index,
      behavior: "smooth"
    });
  }
}

// cambiar cada 3 segundos
setInterval(autoScroll, 3000);

// JS para abrir/cerrar el menú
function toggleMenu() {
  document.querySelector(".links").classList.toggle("activo");
}
