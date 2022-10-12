const detallarReceta = async () => {
      const resp = await
      fetch ('./recetasCerdo.json')
      const data = await resp.json()
      
        const div = document.createElement('div')
        div.innerHTML=`
        <th>
        <h2>${data[0].nombre} </h2>
       <h3>Ingredientes:</h3> 
       <tr>${data[0].Ingredientes[0]}</tr>
       <tr>${data[0].Cantidad[0]}</tr>
       <br>
       <tr>${data[0].Ingredientes[1]}</tr>
       <tr>${data[0].Cantidad[1]}</tr>
       <br>
       <tr>${data[0].Ingredientes[2]}</tr>
       <tr>${data[0].Cantidad[2]}</tr>
       <h3>Procedimiento:</h3> 
       <p  >${data[0].Procedimiento}</p> 
       </th>
      
       "<img src ='${data[0].imagen}'>"
      
     
       `;
     
      contenedor.append(div) 
      
      let guardarReceta = document.createElement("button");
      guardarReceta.innerText = "Guardar recetas";
      guardarReceta.className = "guardarReceta";
      contenedor.append(guardarReceta); 

      guardarReceta.addEventListener("click",()=>{
    
      localStorage.setItem("data[0]",JSON.stringify(data[0])) 
      })

      function obtener_LocalStorage(){
        if(localStorage.getItem("data[0]")){;
        let receta = localStorage.getItem("data[0]");
        let data = JSON.parse(receta)
        console.log(data);
        
      }else{
        console.log("no hay entradas en el local");
      }
   }  
   obtener_LocalStorage()
  }
  detallarReceta() 
  
 


