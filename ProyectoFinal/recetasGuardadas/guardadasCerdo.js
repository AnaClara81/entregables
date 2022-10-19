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

 