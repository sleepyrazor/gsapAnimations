const init = () => { 
  const marca = document.querySelector(".marca");
  if (!marca) return;
  const contenido = marca.querySelector(".marca-contenido");
  if (!contenido) return;

// Clones the content and adds it to the end
  const clon = contenido.cloneNode(true);
  marca.appendChild(clon);

// Calculate the width of the element and the gap
  const width = contenido.offsetWidth; 
  const gap = parseInt(getComputedStyle(marca).gap, 10) || 0; // Si gap no está definido, usa 0
// Distance is width + space (negative to move left)
  const distancia = -(width + gap);

// GSAP Animation 
  gsap.to(marca.children, {
    x: distancia,
    duration: 10,
    ease: "none",
    repeat: -1, // Repeat infinitely
  });
};
document.addEventListener("DOMContentLoaded", init);
