
let receta = [];
const contenedorGuaradas = document.getElementById("contenedorGuardadas");
let data0 = JSON.parse(localStorage.getItem("data[0]")) ;


function pintarRecetaGuardada(receta){
  const contenedor = document.getElementById("contenedorGuardada0");
  let data = JSON.parse(localStorage.getItem("data")) ;
  
        let content = document.createElement("div")
        // content.className= "card";
          content.innerHTML=`
          <th>
          <p>${receta.id}</p>
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
         contenedor.append(content) ;
        
      }; 
      

      if (data0){
   receta.push(data0)
  
   const contenedor = document.getElementById("contenedorGuardada0");
  pintarRecetaGuardada(receta[0]);



   function borrarRecetaGuardada(){ 
      localStorage.removeItem("data[0]");
        }
       const buttonBorrar = document.createElement("button");
       buttonBorrar.innerText ="Borrar receta";
       buttonBorrar.className ="buttonBorrar";
       contenedor.append(buttonBorrar);
       buttonBorrar.addEventListener("click",borrarRecetaGuardada);
     
      }
       
     
      let data1 = JSON.parse(localStorage.getItem("data[1]")) ;
      if (data1){
        receta.push(data1)
     
      

        function pintarRecetaGuardada(receta){
        const contenedor1 = document.getElementById("contenedorGuardada1");
        let data = JSON.parse(localStorage.getItem("data")) ;
          
          let content  = document.createElement("div")
             // content.className= "card";
                 content.innerHTML=`
                  <th>
                  <p>${receta.id}</p>
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
                 contenedor1.append(content) 
              };  
                 
              pintarRecetaGuardada(receta[1]);
              const contenedor1 = document.getElementById("contenedorGuardada1");
             
       
                function borrarRecetaGuardada(){ 
                localStorage.removeItem("data[1]");
              }
             const buttonBorrar = document.createElement("button");
             buttonBorrar.innerText ="Borrar receta";
             buttonBorrar.className ="buttonBorrar";
             contenedor1.append(buttonBorrar);
             buttonBorrar.addEventListener("click",borrarRecetaGuardada)
            
            };
             
         