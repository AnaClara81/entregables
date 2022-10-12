let boton = document.getElementById("btnPrincipal");
let saludo = document.getElementById("saludo");


 boton.addEventListener("mouseout", () => {
  saludo.className = "rojo";
});
boton.addEventListener("mouseover", () => {
  saludo.className = "azul";
}); 