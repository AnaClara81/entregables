const detallarReceta = async () => {
    const resp = await
    fetch('./recetasCerdo.json')
    const data = await resp.json()
    
      const div = document.createElement('div')
      div.innerHTML=`
      <th>
      <h2>${data[3].nombre} </h2>
     <h3>Ingredientes:</h3> 
     <tr>${data[3].Ingredientes[0]}</tr>
     <tr>${data[3].Cantidad[0]}</tr>
     <br>
     <tr>${data[3].Ingredientes[1]}</tr>
     <tr>${data[3].Cantidad[1]}</tr>
     <br>
     <tr>${data[3].Ingredientes[2]}</tr>
     <tr>${data[3].Cantidad[2]}</tr>
     <h3>Procedimiento:</h3> 
     <p class="procedimiento" >${data[3].Procedimiento}</p> 
     </th>
    
     "<img id="detalleReceta"src ='${data[3].imagen}'>"
     
     
     `;
   
    contenedor.append(div) 
    contenedor.append(div) 
      
    let guardarReceta = document.createElement("button");
    guardarReceta.innerText = "Guardar recetas";
    guardarReceta.className = "guardarReceta";
    contenedor.append(guardarReceta); 

    guardarReceta.addEventListener("click",()=>{
  
    localStorage.setItem("data[3]",JSON.stringify(data[3])) 
    })

    function obtener_LocalStorage(){
      if(localStorage.getItem("data[3]")){;
      let receta = localStorage.getItem("data[3]");
      let data = JSON.parse(receta)
      console.log(data);
      
    }else{
      console.log("no hay entradas en el local");
    }
 }  
 obtener_LocalStorage()
}
detallarReceta() 
