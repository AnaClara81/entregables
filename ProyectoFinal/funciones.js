let contenedor = document.getElementById("contenedor")
let recetasPollo =  localStorage.getItem("receta");
let arregloRecetasPollo =JSON.parse(recetasPollo);

console.log(arregloRecetasPollo);

function mostrarReceta(arreglo, contenedor){
//arregloRecetasPollo.forEach() => {
  //console.log(elemento, indice);
  //console.log(arregloRecetasPollo.nombre)
  
const div = document.createElement('div')
div.innerHTML = `
<th>
<h2>${arreglo.nombre} </h2>
<br>
<h3>Ingredientes:</h3> 
<tr>${arreglo.ingredientes[1]}</tr>
<tr>${arreglo.cantidad[1]}</tr>
<tr>${arreglo.ingredientes[2]}</tr>
<tr>${arreglo.cantidad[2]}</tr>
<tr>${arreglo.ingredientes[3]}</tr>
<tr>${arreglo.cantidad[3]}</tr>
<tr>${arreglo.ingredientes[4]}</tr>
<tr>${arreglo.cantidad[4]}</tr>
<br>
<h3>Procedimiento:</h3> 
<p>${arreglo.procedimiento}</p> 
</th>
<img src ='${arreglo.imagen}'>
`;

contenedor.append(div); 
 
};


function saludar(){
    console.log("Hola boton ")
};