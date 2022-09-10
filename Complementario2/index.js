const recetasCarne = [
  {id: 1, nombre:"Bifes con verduras", ingrediente:"Verduras"},
  {id: 2, nombre:"Carne al horno con papas",ingrediente:"Papas"},
  {id: 3, nombre:"Milanesas napolitana con ensalada", ingrediente:"Ensalada"},
  {id: 4, nombre:"Estofado", ingrediente:"Zapallo"},
  ];



const recetasPollo = [
    {id: 1, nombre:"pollo con arroz", ingrediente:"arroz"},
    {id: 2, nombre:"pollo al horno con papas",ingrediente:"papas"},
    {id: 3, nombre:"milanesas de pollo con ensalada", ingrediente:"ensalada"},
    {id: 4, nombre:"pollo arrollado con pure", ingrediente:"jamon"},
    ];

 
 
 
    elegirIngrediente();
       
     
        
function elegirIngrediente(){  
  let carne = "carne";
  let pollo = "pollo";
  let receta =prompt("Ingrese el ingrediente principal de su receta " + pollo + " o " + carne);
 
  if(receta === pollo){ 
    elegirRecetaPollo();

}else if(receta === carne){
  elegirRecetaCarne();

}else{
   alert("Receta no encontrada");
 }
};


function elegirRecetaCarne(){
   let contenedor1 = document.getElementById("contenedor1");
   let ingrediente =prompt("Con que ingrediente desea acompañar la carne? verduras, papas , ensalada o zapallo");

   let filtradosCarne = recetasCarne.filter(item => item.ingrediente === ingrediente);
   for (const receta of filtradosCarne) {
    let div = document.createElement("div");
 div.innerHTML = ` <h3>Podria preparar con carne</h3>
                   <h3> ID: ${receta.id}</h3>
                  <p>Producto: ${receta.nombre}</p>
                  <b>${receta.ingrediente}</b>`;
 contenedor1.append(div);
   }
  };



function elegirRecetaPollo(){
   let contenedor2 = document.getElementById("contenedor2");
    let ingrediente =prompt("Con que ingrediente desea acompañar la pollo? arroz, papas , ensalada o jamon");
 
    let filtradosPollo = recetasPollo.filter(item => item.ingrediente === ingrediente);
    for (const receta of filtradosPollo) {
     let div = document.createElement("div");
  div.innerHTML = `<h3>Podria preparar con pollo</h3>
                   <h3> ID: ${receta.id}</h3>
                   <p>Producto: ${receta.nombre}</p>
                   <b>${receta.ingrediente}</b>`;
  contenedor2.append(div);
    }
 };
 
let contenedorVacuna = document.getElementById("contenedorVacuna");
for (const recetas of recetasCarne) {
  let li = document.createElement("li");
  li.innerHTML = `<h4>id:${recetas.id}</h4>
                   <h3>Receta:${recetas.nombre}</h3>
                   <h5>Ingrediente:${recetas.ingrediente}</h5>`
  contenedorVacuna.append(li);
};
 
 let contenedorPollo = document.getElementById("contenedorPollo");
    for (const recetas of recetasPollo) {
      let li = document.createElement("li");
      li.innerHTML = `<h4>id:${recetas.id}</h4>
                       <h3>Receta:${recetas.nombre}</h3>
                       <h5>Ingrediente:${recetas.ingrediente}</h5>`
      contenedorPollo.append(li);
     
    }
   
   
/*    let ingredienteUno = (prompt("Ingrese proteina (tipo de carne)")) ;
   let cantidadUno = parseInt(prompt("Ingrese la cantidad de proteina")) ;
   let ingredienteDos = (prompt("Ingrese carbohidratos cereales/ vegetales")) ;
   let cantidadDos = parseInt(prompt("Ingrese la cantidad de carbohidratos")) ;
   let ingredienteTres = (prompt("Ingrese la materia grasa aceite/manteca")) ;
   let cantidadTres = parseInt(prompt("Ingrese la cantidad de materia grasa")) ;
   let cantidadProteina = cantidadUno * 4;
   let cantidadCarboH = cantidadDos * 4;
   let cantidadGrasa = cantidadTres * 9;
   
   let totalCalorias = cantidadProteina + cantidadCarboH + cantidadGrasa;
   
   alert (`el total de calorias es ${totalCalorias}`);
   
   
   function cantPorciones(){
       if(cantidadUno <= 250){
       alert("CANTIDADES PARA UNA PORCION");
   }else if (cantidadUno >= 250 && cantidadUno <= 500){
       alert("CANTIDADES PARA DOS PORCIONES");
   }else if (cantidadUno >= 500 && cantidadUno <= 750){
       alert("CANTIDADES PARA TRES PORCIONES");
   }else if (cantidadUno >= 750 && cantidadUno <= 1000){
       alert("CANTIDADES PARA CUATRO PORCIONES");
   }else{
       alert("Cantidad  no contemplada");
   }
   };
   
  }
   
   cantPorciones();
 */