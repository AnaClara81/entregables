//let contenedor = document.getElementById("contenedor");
//let receta = [];
 
 
 const detallarReceta = async () => {
    const resp = await
    fetch('./recetasCerdo.json')
    const data = await resp.json()
    let recetasCerdo = data.result;
      receta = data.recetasCerdo;
      let contenedor = document.getElementById("contenedor");
      const div = document.createElement('div')
      div.innerHTML=`
      <th>
      <h2>${receta[1].nombre} </h2>
     <h3>Ingredientes:</h3> 
     <tr>${receta[1].Ingredientes[0]}</tr>
     <tr>${receta[1].Cantidad[0]}</tr>
     <br>
     <tr>${receta[1].Ingredientes[1]}</tr>
     <tr>${receta[1].Cantidad[1]}</tr>
     <br>
     <tr>${receta[1].Ingredientes[2]}</tr>
     <tr>${receta[1].Cantidad[2]}</tr>
     <h3>Procedimiento:</h3> 
     <p class="procedimiento" >${receta[1].Procedimiento}</p> 
     </th>
     "<img id="detalleReceta"src ='${receta[1].imagen}'>"
      `;
   
    contenedor.append(div) 


    let guardarReceta = document.createElement("button");
    guardarReceta.innerText = "Guardar recetas";
    guardarReceta.className = "guardarReceta";
    contenedor.append(guardarReceta); 

    guardarReceta.addEventListener("click",()=>{
   /*  setTimeout( function() { window.location.href ="../index.html"; }, 2000 ); */
    //localStorage.setItem("data[0].nombre",data[0].nombre) 
    localStorage.setItem("receta[1]",receta)
    localStorage.setItem("receta[1]",JSON.stringify(receta[1])) 

    
    });

    function obtener_LocalStorage(){
      if(localStorage.getItem("receta[1]")){;
      let data = localStorage.getItem("receta[1]");  JSON.parse(localStorage.getItem("receta[1]"))
     
      }else{
      console.log("no hay entradas en el local");
    }
 }  
 obtener_LocalStorage()
};

      
detallarReceta();   