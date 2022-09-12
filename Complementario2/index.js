const recetasPollo = [
    {id: 1, nombre:"pollo con arroz", ingrediente:"arroz"},
    {id: 2, nombre:"pollo al horno con papas",ingrediente:"papas"},
    {id: 3, nombre:"milanesas de pollo con ensalada", ingrediente:"ensalada"},
    {id: 4, nombre:"pollo arrollado con pure", ingrediente:"jamon"},
    ];

const recetasCerdo = [
      {id: 1, nombre:"Costillitas con tortilla", ingrediente:"tortilla"},
      {id: 2, nombre:"Carre al horno con papas",ingrediente:"papas"},
      {id: 3, nombre:"Bondiola con ensalada", ingrediente:"ensalada"},
      {id: 4, nombre:"Matambrito con pure", ingrediente:"pure"},
      ];
 
 
    elegirIngrediente();
       
     
        
function elegirIngrediente(){  
  let cerdo = "cerdo";
  let pollo = "pollo";
  let receta = prompt("Ingrese el ingrediente principal de su receta " + pollo + " o " + cerdo);
 
  if(receta === cerdo ){ 
    elegirRecetaCerdo();

}else if(receta === pollo){
  elegirRecetaPollo();

}else{
   alert("Receta no encontrada");
 }
};





function elegirRecetaPollo(){
   let contenedor2 = document.getElementById("contenedor2");
    let ingrediente = prompt("Con que ingrediente desea acompañar la pollo? arroz, papas , ensalada o jamon");
 
    let filtradosPollo = recetasPollo.filter(item => item.ingrediente === ingrediente);
    for (const receta of filtradosPollo) {
     let div = document.createElement("div");
  div.innerHTML = ` <h2>Podria preparar con pollo</h2>
                    <h4>Receta numero:${receta.id}</h4>
                    <h3>Nombre:${receta.nombre}</h3>
                    <h4>Ingrediente:${receta.ingrediente}</h4>`
   div.className = "recetaSugerida";            
  contenedor2.append(div);

  console.log(filtradosPollo);
    }
 };

 function elegirRecetaCerdo(){
  let contenedor1 = document.getElementById("contenedor1");
   let ingrediente =prompt("Con que ingrediente desea acompañar el cerdo? tortilla, papas , ensalada o pure");

   let filtradosCerdo = recetasCerdo.filter(item => item.ingrediente === ingrediente);
   for (const receta of filtradosCerdo) {
    let div = document.createElement("div");
 div.innerHTML = ` <h2>Podria preparar con cerdo</h3>
                   <h4>Receta número:${receta.id}</h4>
                   <h2>Nombre:${receta.nombre}</h3>
                   <h4>Ingrediente:${receta.ingrediente}</h5>`
 div.className = "recetaSugerida";
 contenedor1.append(div);

 console.log(filtradosCerdo);
   }
};
 
let contenedorCerdo = document.getElementById("contenedorCerdo");
for (const recetas of recetasCerdo) {
  let li = document.createElement("li");
  li.innerHTML =  `<h2>Receta ${recetas.id}: ${recetas.nombre}</h2>
                   <h3>Ingrediente:${recetas.ingrediente}</h3>`
  contenedorCerdo.append(li);
};
 
 let contenedorPollo = document.getElementById("contenedorPollo");
    for (const recetas of recetasPollo) {
      let li = document.createElement("li");
      li.innerHTML = `<h2>Receta ${recetas.id}: ${recetas.nombre}</h2>
                      <h3>Ingrediente:${recetas.ingrediente}</h3>`
     
      contenedorPollo.append(li);
     
    };
   
   

 