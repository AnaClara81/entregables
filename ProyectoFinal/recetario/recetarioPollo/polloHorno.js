/* let contenedor = document.getElementById("contenedor")
let recetasPollo =  localStorage.getItem("receta");
let arregloRecetasPollo =JSON.parse(recetasPollo);
console.log(arregloRecetasPollo); */
let contenedorPolloHorno= document.getElementById("contenedorPolloHorno");
mostrarReceta(arregloRecetasPollo[1],contenedorPolloHorno);