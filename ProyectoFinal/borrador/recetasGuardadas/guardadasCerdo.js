//let data = JSON.parse(localStorage.getItem("data")) ;
localStorage.getItem("receta")
//JSON.parse(localStorage.getItem ("receta[0]"))
let receta = [];
let button = document.getElementsByClassName("buttonBorrar");
let content = document.getElementById("contenedorGuardadas");

//console.log(recetasCerdo);let content = document.getElementById("contenedorGuardadas");




function pintarRecetaGuardada(receta , content){
     
      if(receta){
     let contenedor = document.createElement("div")
     
     contenedor.className = "card";
          contenedor.innerHTML=`
          <th> 
         <h2>${receta.nombre} </h2>
         <h3>Ingredientes:</h3> 
         <tr>${receta.Ingredientes[0]}</tr>
         <tr>${receta.Cantidad[0]}</tr>
         <br>
         <tr>${receta.Ingredientes[1]}</tr>
         <tr>${receta.Cantidad[1]}</tr>
         <br>
         <tr>${receta.Ingredientes[2]}</tr>
         <tr>${receta.Cantidad[2]}</tr>
         <h3>Procedimiento:</h3> 
         <p>${receta.Procedimiento}</p> 
         <img src =${receta.imagen}>
         </th>
         `     




         
         content.append(contenedor);   
} 
};


let data0 = JSON.parse(localStorage.getItem("receta[0]"));
let contenedor = document.getElementById("contenedorGuardada0");
let button0 = document.getElementById("buttonBorrar0");

      if (data0){
       receta.push(data0)

       pintarRecetaGuardada(receta[0], contenedor); 

      }
       
       button0.onclick =()=>localStorage.removeItem("receta[0]"); 



let data1 = JSON.parse(localStorage.getItem("receta[1]"));
let contenedor1 = document.getElementById("contenedorGuardada1");
let button1 = document.getElementById("buttonBorrar1");

      if (data1){
       receta.push(data1)


pintarRecetaGuardada(receta[1], contenedor1); 

}

button1.onclick = () =>localStorage.removeItem("receta[1]");



let data2 = JSON.parse(localStorage.getItem("receta[2]"));
let contenedor2 = document.getElementById("contenedorGuardada2");
let button2 = document.getElementById("buttonBorrar2");
      if (data2){
        receta.push(data2)


pintarRecetaGuardada(receta[2], contenedor2);

}

button2.onclick =()=>localStorage.removeItem("receta[2]");


let data3 = JSON.parse(localStorage.getItem("receta[3]"));
let contenedor3 = document.getElementById("contenedorGuardada3");
let button3 = document.getElementById("buttonBorrar3");

       if (data3){
          receta.push(data3)



pintarRecetaGuardada(receta[3], contenedor3);

}

button3.onclick =()=>localStorage.removeItem("receta[3]");



  
/* const recetas = fetch("../recetario/recetasCerdo.json")
  .then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));

console.log(recetas); 
//localStorage.setItem("recetas",jsondata) 
//localStorage.setItem("jsondata",JSON.stringify(recetas))
const obtenerRecetas = async () => {
      const response = await fetch("../recetario/recetasCerdo.json")
      const recetas = await response.json()
     
     console.log(recetas)
  }
 let recetasCerdo = obtenerRecetas();
 console.log(recetasCerdo);*/

 



recetasTodas

const recetasCerdo = [];
  recetasCerdo[0] = {id: 1, nombre:"Bife", procedimiento:"Salpimentar la pieza de carne a gusto y cocinar a la plancha ", imagen:src= "./imagenesCerdo/bife.jpg", pagina:"./recetario/recetarioCerdo/bife.html",};
  recetasCerdo[1] =  {id: 2, nombre:"Carne con salsa",procedimiento:"Sellar la carne, levantar el fondo de coccion con un vaso de vino blanco,agregar caldo y cocinar a fuego bajo 1 hr.Espesar la salsa",imagen:src="./imagenesCerdo/carneSalsa.jpg", pagina:"./recetario/recetarioCerdo/carneSalsa.html" };
  recetasCerdo[2] =  {id: 3, nombre:"Carre laqueado ", procedimiento:" Cocinar el carre de cerdo al horno con sal y pimienta tapado durante 45 minutos.Luego mjar con una mescla de miel, salsa de soja y vinagre y cocinar 15 minutos mas",imagen:src="./imagenesCerdo/carre.jpg", pagina:"./recetario/recetarioCerdo/carre.html"};
  recetasCerdo[3] =  {id: 4, nombre:"Costillitas ", procedimiento:"Macerar la carne con aceite de oliva, perejil, ajo, sal y pimienta durante dos horas o mas en la heladera. Luego cocinar en plancha bien caliente",imagen:src="./imagenesCerdo/costillitas.jpg", pagina:"./recetario/recetarioCerdo/costillitas.html"};

                                                                                                                                                                  
const recetasPollo = []; 
  recetasPollo[0]= {id: 1, nombre:"Pollo a la cacerola", procedimiento: "Dorar el pollo en una cacerola con cebollas,agregar vino blanco a reducir. A mitad de coccion agregar papas en cubos grandes", imagen:src="./imagenesPollo/polloCacerola.jpg",pagina:"./recetario/recetarioPollo/polloCacerola.html" };
  recetasPollo[1]= {id: 2, nombre:"Pollo al horno ", procedimiento: "Condimentar el pollo con sal pimienta y mostaza a gusto, cocinar a fuego medio por 1 hora",imagen:src="./imagenesPollo/polloHorno.jpg",pagina:"./recetario/recetarioPollo/polloHorno.html" };
  recetasPollo[2]= {id: 3, nombre:"Milanesas de pollo ", procedimiento: "Colocar los bifes de pollo en una mescla de huevos sal y pimienta, mesclar bien y luego pasar por pan rayado. Cocinar en una asadera enaceitada al horno hasta dorar",imagen:src="./imagenesPollo/milanesaPollo.jpg",pagina:"./recetario/recetarioPollo/milanesaPollo.html"};
  recetasPollo[3]= {id: 4, nombre:"Brochette de pollo", procedimiento: "Colocar los trozos de pollo y verduras salpimentados en los palitos de brochete intercalados,cocinar en plancha o a la parrilla",imagen:src="./imagenesPollo/brochettPollo.jpg",pagina:"./recetario/recetarioPollo/brochettePollo.html"};
 

const recetasPescado = [];
  recetasPescado[0] = {id: 1, nombre: "Pescado al horno con limon", procedimiento:"Salpimentar la pieza a gusto y cocinar al horno durante media hora ", imagen:src="./imagenesPescado/pescadoLimon.jpg",pagina:"../recetario/recetarioPescado/pescadoLimon.html" };
  recetasPescado[1] = {id: 2, nombre:"Fish and chips",procedimiento:"Filet de pescado  pasados por harina y fritos con papas",imagen:src="./imagenesPescado/pescadoFrito.jpg",pagina:"../recetario/recetarioPescado/pescadoFrito.html" };
  recetasPescado[2] = {id: 3, nombre:"Salmon a la plancha ", procedimiento:"Salpimentar la enca de salmon y cocinar a la plancha durante 8 minutos por lado",imagen:src="./imagenesPescado/salmon.jpg",pagina:"../recetario/recetarioPescado/salmon.html"};
  recetasPescado[3] = {id: 4, nombre:"Besugo a la parrilla ", procedimiento:"Macerar el pescado con aceite de oliva, perejil, ajo, sal , pimienta y limon.Luego colocar en la prensa para la parrilla o envolver en papel aluminio. Cocinar a la parrilla",imagen:src="./imagenesPescado/pescadoParrilla.jpg",pagina:"../recetario/recetarioPescado/pescadoParrilla.html"};
    
const recetasVerduras = [];
recetasPescado[0] = {id: 1, nombre: "Esparragos grillados", procedimiento:"Grillar con aceite caliene en plancha, salpimentar" , imagen:src="./imagenesVerduras/esparragos.jpg",pagina:"../recetario/esparragos.html" };
recetasPescado[1] = {id: 2, nombre:"Ensalada Verde",procedimiento:"Condimentar mesclum de hojas verdes, sal limon acite de oliva",imagen:src="./imagenesVerduras/lechugas.jpg",pagina:"../recetario/lechugas.html" };
recetasPescado[2] = {id: 3, nombre:"Palta rellena", procedimiento:"Cortar la palta al medio, dorar y rellenar con huevo, terminar la cocción en el horno 10 min",imagen:src="./imagenesVerduras/palta.jpg",pagina:"../recetario/recetarioVerduras/palta.html"};
recetasPescado[3] = {id: 4, nombre:"Papines a la provenzal ", procedimiento:"Cocinar los papines, luego saltearlos en aceite con ajo y perejil",imagen:src="./imagenesVerduras/papines.jpg",pagina:"../recetario/recetarioVerduras/papines.html"};  


<input id="inputReceta" class="buscar" type="search" placeholder="Ingrediente" aria-label="Search">




<button id="buscar" class="btn btn-success" type="submit">Buscar</button>
