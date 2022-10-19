 
 /* fetch ('./recetasPollo.json')
 .then((response) => response.json ())
 .then((recetas) => {
    const recetasPollo = recetas.map
    ((recetasPollo)=> recetasPollo);
    console.log(recetasPollo);
    
    
 }); */

 let contenedor = document.getElementById("contenedor");

 const getRecetas = async () =>{
     let response = await fetch('./recetasPollo.json');
     let data = await response.json();
     let recetasPollo = data
  

     recetasPollo.forEach(receta => {

        const div = document.createElement("div");
      
        div.innerHTML = `
        <h1>${receta.nombre}</h1>
        <p>${receta.ingredientes[0]}</p>
        <p>${receta.cantidad[0]}</p>
        <p>${receta.ingredientes[1]}</p>
        <p>${receta.cantidad[1]}</p>
        <p>${receta.ingredientes[2]}</p>
        <p>${receta.cantidad[2]}</p>
        <p>${receta.ingredientes[3]}</p>
        <p>${receta.cantidad[3]}</p>
        <p>${receta.ingredientes[4]}</p>
        <p>${receta.cantidad[4]}</p>
        <p>${receta.procedimiento}</p>
        <img src ="${receta.imagen}">
        <hr/>
        `;
        

        contenedor.append(div);
   }); 
   function guardarStorage(){
    localStorage.setItem("receta",JSON.stringify(recetasPollo))
 }
 
 
 guardarStorage();
};

 getRecetas();

 