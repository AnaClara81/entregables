const detalleReceta = async () => {
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
     <button class="btn-guardar  btn btn-primary" >Guardar Receta</button>
     
     `;
   
    contenedor.append(div) 
  }
      
detalleReceta()  