const detallarReceta = async () => {
    const resp = await
    fetch('./recetasCerdo.json')
    const data = await resp.json()
    
      const div = document.createElement('div')
      div.innerHTML=`
      <th>
      <h2>${data[2].nombre} </h2>
     <h3>Ingredientes:</h3> 
     <tr>${data[2].Ingredientes[0]}</tr>
     <tr>${data[2].Cantidad[0]}</tr>
     <br>
     <tr>${data[2].Ingredientes[1]}</tr>
     <tr>${data[2].Cantidad[1]}</tr>
     <br>
     <tr>${data[2].Ingredientes[2]}</tr>
     <tr>${data[2].Cantidad[2]}</tr>
     <h3>Procedimiento:</h3> 
     <p class="procedimiento" >${data[2].Procedimiento}</p> 
     </th>
    
     "<img id="detalleReceta"src ='${data[2].imagen}'>"
     
     `;
     contenedor.append(div) 
      
     let guardarReceta = document.createElement("button");
     guardarReceta.innerText = "Guardar recetas";
     guardarReceta.className = "guardarReceta";
     contenedor.append(guardarReceta); 

     guardarReceta.addEventListener("click",()=>{
   
     localStorage.setItem("data[2]",JSON.stringify(data[2])) 
     })

     function obtener_LocalStorage(){
       if(localStorage.getItem("data[2]")){;
       let receta = localStorage.getItem("data[2]");
       let data = JSON.parse(receta)
       console.log(data);
       
     }else{
       console.log("no hay entradas en el local");
     }
  }  
  obtener_LocalStorage()
 }
 detallarReceta() 
 

