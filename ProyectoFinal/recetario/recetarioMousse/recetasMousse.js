let contenedor = document.getElementById("contenedor");

const getRecetas = async () =>{
    let response = await fetch('./recetasMousse.json');
    let data = await response.json();
    let recetasMousse = data
 

    recetasMousse.forEach(receta => {

       const div = document.createElement("div");
     
       div.innerHTML = `
       <div id ="contenedor"class ="container_recetas">
       <h1>${receta.nombre}</h1>
       <th>${receta.ingredientes[0]}</th>
       <th>${receta.cantidad[0]}</th>
       <br>
       <th>${receta.ingredientes[1]}</th>
       <th>${receta.cantidad[1]}</th>
       <br>
       <th>${receta.ingredientes[2]}</th>
       <th>${receta.cantidad[2]}</th>
       <br>
       <th>${receta.ingredientes[3]}</th>
       <th>${receta.cantidad[3]}</th>
       <br>
       <th>${receta.ingredientes[4]}</th>
       <th>${receta.cantidad[4]}</th>
       <p>${receta.procedimiento}</p>
       <img src ="${receta.imagen}">
       <a href='${receta.pagina}' class="btn btn-success">Volver</a>
       
       <hr/>
       `;
       

       contenedor.append(div);
  }); 
  function guardarStorage(){
   localStorage.setItem("receta",JSON.stringify(recetasMousse))
}


guardarStorage(); 
};

getRecetas();