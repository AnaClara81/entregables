let data = JSON.parse(localStorage.getItem("data")) ;
let receta = [];
let button = document.getElementsByClassName("buttonBorrar");

function pintarRecetaGuardada(receta , contenedor){
     let content = document.createElement("div")
     
          content.innerHTML=`
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
         </th>
         <img src =${receta.imagen}>
        
         `
         contenedor.append(content);    
}


let data0 = JSON.parse(localStorage.getItem("data[0]")) ;
let contenedor = document.getElementById("contenedorGuardada0");
      if (data0){
       receta.push(data0)
pintarRecetaGuardada(receta[0], contenedor) ;
}
let button0 = document.getElementById("buttonBorrar0")
button0.onclick =()=>localStorage.removeItem("data[0]");

    

let data1 = JSON.parse(localStorage.getItem("data[1]")) ;
let contenedor1 = document.getElementById("contenedorGuardada1");
      if (data1){
       receta.push(data1)
pintarRecetaGuardada(receta[1], contenedor1) ; 
}
let button1 = document.getElementById("buttonBorrar1")
button1.onclick =()=>localStorage.removeItem("data[1]");



let data2 = JSON.parse(localStorage.getItem("data[2]")) ;
let contenedor2 = document.getElementById("contenedorGuardada2");
      if (data2){
        receta.push(data2)
pintarRecetaGuardada(receta[2], contenedor2) ;
}
let button2 = document.getElementById("buttonBorrar2")
button2.onclick =()=>localStorage.removeItem("data[2]");



let data3 = JSON.parse(localStorage.getItem("data[3]")) ;
let contenedor3 = document.getElementById("contenedorGuardada3");
       if (data3){
          receta.push(data3)
pintarRecetaGuardada(receta[3], contenedor3) ;
}
let button3 = document.getElementById("buttonBorrar3")
button3.onclick =()=>localStorage.removeItem("data[3]");

