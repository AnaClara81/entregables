let recetasCerdo =  localStorage.getItem("receta");
let arregloRecetasCerdo =JSON.parse(recetasCerdo);
let contenedor = document.getElementById("contenedor")
let recetasPollo =  localStorage.getItem("receta");
let arregloRecetasPollo =JSON.parse(recetasPollo);
let recetasPescado =  localStorage.getItem("receta");
let arregloRecetasPescado =JSON.parse(recetasPescado);
let recetasVerduras =  localStorage.getItem("receta");
let arregloRecetasVerduras =JSON.parse(recetasVerduras);
let recetasPastas =  localStorage.getItem("receta");
let arregloRecetasPastas =JSON.parse(recetasPastas);
let recetasArroz =  localStorage.getItem("receta");
let arregloRecetasArroz =JSON.parse(recetasArroz);
let recetasMousse =  localStorage.getItem("receta");
let arregloRecetasMousse =JSON.parse(recetasMousse);
let recetasPostres =  localStorage.getItem("receta");
let arregloRecetasPostres =JSON.parse(recetasPostres);
let recetasTortas =  localStorage.getItem("receta");
let arregloRecetasTortas =JSON.parse(recetasTortas);



function mostrarReceta(arreglo, contenedor){
const div = document.createElement('div')
div.innerHTML = `
<th>
<h2>${arreglo.nombre} </h2>
<br>
<h3>Ingredientes:</h3> 
<tr>${arreglo.ingredientes[0]}</tr>
<tr>${arreglo.cantidad[0]}</tr>
<tr>${arreglo.ingredientes[1]}</tr>
<tr>${arreglo.cantidad[1]}</tr>
<tr>${arreglo.ingredientes[2]}</tr>
<tr>${arreglo.cantidad[2]}</tr>
<tr>${arreglo.ingredientes[3]}</tr>
<tr>${arreglo.cantidad[3]}</tr>
<br>
<h3>Procedimiento :</h3> 
<p>${arreglo.procedimiento}</p> 
</th>
<img src ='${arreglo.imagen}'> 

`;

contenedor.append(div); 
 
};


//buscador sin funcionar
  
 let contenedor1 = document.getElementById("contenedor1");
 let contenedor2 = document.getElementById("contenedor2");
 let contenedor3 = document.getElementById("contenedor3");
 let contenedor4 = document.getElementById("contenedor4");
 let contenedor5 = document.getElementById("contenedor5");
 let contenedor6 = document.getElementById("contenedor6");
 let contenedor7 = document.getElementById("contenedor7");
 let contenedor8 = document.getElementById("contenedor8");
 let contenedor9 = document.getElementById("contenedor9");
 recetasCerdo =[];
 recetasPollo =[];
 recetasPescado =[];
 recetasVerduras =[];
 recetasPastas=[];
 recetasArroz=[]; 
 recetasMousse=[];
 recetasPostres=[];
 recetasTortas=[];
 
 function mostrarRecetasBuscadas(recetas, contenedor){
       for(recetas of recetas){
 let contenedor = document.createElement("div");
 contenedor.innerHTML   =`
                          <div id ="contenedor"class ="card">
                          <div style="width: 18rem;">
                          <img src=${recetas.imagen}>
                          <div class="card-body">
                          <h5 class="card-title">${recetas.nombre}</h5>
                           <p class="card-text">${recetas.procedimiento}</p>
                           <a href="${recetas.pagina}" class="btn btn-success">Leer mas</a>
                           <button id="borrar" type="submit" ${recetas.boton}>Borrar receta</button>
                           </div>
                           </div>
                           </div>
                           `;
                                 
             document.body.appendChild(contenedor);     
 
           }
         };
         
           mostrarRecetasBuscadas(recetasCerdo, contenedor1);
           mostrarRecetasBuscadas(recetasPollo, contenedor2);
           mostrarRecetasBuscadas(recetasPescado, contenedor3)
          
