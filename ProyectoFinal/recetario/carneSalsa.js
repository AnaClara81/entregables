const detalleReceta = async () => {
    const resp = await
    fetch('./recetasCerdo.json')
    const data = await resp.json()
    
      const div = document.createElement('div')
      div.innerHTML=`
      <th>
      <h2>${data[1].nombre} </h2>
     <h3>Ingredientes:</h3> 
     <tr>${data[1].Ingredientes[0]}</tr>
     <tr>${data[1].Cantidad[0]}</tr>
     <br>
     <tr>${data[1].Ingredientes[1]}</tr>
     <tr>${data[1].Cantidad[1]}</tr>
     <br>
     <tr>${data[1].Ingredientes[2]}</tr>
     <tr>${data[1].Cantidad[2]}</tr>
     <h3>Procedimiento:</h3> 
     <p class="procedimiento" >${data[1].Procedimiento}</p> 
     </th>
     "<img id="detalleReceta"src ='${data[1].imagen}'>"
      `;
   
    contenedor.append(div) 


    let guardarReceta = document.createElement("button");
    guardarReceta.innerText = "Guardar recetas";
    guardarReceta.className = "guardarReceta";
    contenedor.append(guardarReceta); 

    guardarReceta.addEventListener("click",()=>{
   /*  setTimeout( function() { window.location.href ="../index.html"; }, 2000 ); */
  /*  localStorage.setItem("data[0].nombre",data[0].nombre) */
    localStorage.setItem("data[1]",JSON.stringify(data[1])) 
    })

    function obtener_LocalStorage(){
      if(localStorage.getItem("data[1]")){;
      let receta = localStorage.getItem("data[1]");
      let data = JSON.parse(receta)
      console.log(data);
      
    }else{
      console.log("no hay entradas en el local");
    }
 }  
 obtener_LocalStorage()
}

      
detalleReceta()  