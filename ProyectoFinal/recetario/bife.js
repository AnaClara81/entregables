
    /*const contenedor = document.getElementById("contenedor");
  fetch('./recetasCerdo.json')
 .then((response) => response.json())
 .then((data) => { */
  
    const detallarReceta = async () => {
      const resp = await
      fetch('./recetasCerdo.json')
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
       <p class="procedimiento" >${data[0].Procedimiento}</p> 
       </th>
      
       "<img id="detalleReceta"src ='${data[0].imagen}'>"
      
       
       `;
     
      contenedor.append(div) 
    }
        
  detallarReceta()  
 //});


  function saludar(){
  console.log("Hola guardar")
 };

 const boton = document.getElementById("btn-guardar")
  boton.addEventListener("click",saludar);

  saludar() 
