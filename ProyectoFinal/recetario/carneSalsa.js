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
     <button class="btn-guardar  btn btn-primary" >Guardar Receta</button>
     
     `;
   
    contenedor.append(div) 
  }
      
detalleReceta()  