const recetasPollo = [
    {id: 1, nombre:"Pollo con arroz", ingrediente:"arroz"},
    {id: 2, nombre:"Pollo al horno con papas",ingrediente:"papas"},
    {id: 3, nombre:"Milanesas de pollo con ensalada", ingrediente:"ensalada"},
    {id: 4, nombre:"Pollo arrollado con pure", ingrediente:"jamon"},
    ];

const recetasCerdo = [
      {id: 1, nombre:"Costillitas con tortilla", ingrediente:"tortilla"},
      {id: 2, nombre:"Carre al horno con papas",ingrediente:"papas"},
      {id: 3, nombre:"Bondiola con ensalada", ingrediente:"ensalada"},
      {id: 4, nombre:"Matambrito con pure", ingrediente:"pure"},
      ];
        
function elegirIngrediente(){  
//  let cerdo = document.getElementById("receta");
//  let pollo = document.getElementById("receta");
  let formulario = document.getElementById("formularioReceta");
  let contenedor = document.getElementById("recetaSugerida");
  formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    contenedor.innerHTML = "";
    let inputs = e.target.children;
   //console.log(inputs[0].value);
      if(inputs[0].value === "cerdo" ){ 
        elegirRecetaCerdo();

      }else if(inputs[0].value === "pollo"){
      elegirRecetaPollo();
      
      }else{
       alert("Receta no encontrada");
     }
    })
};

elegirIngrediente();

function elegirRecetaPollo(){
   let contenedor = document.getElementById("recetaSugerida");
   let ingrediente = prompt("Con que ingrediente desea acompañar la pollo? arroz, papas , ensalada o jamon");
   let filtradosPollo = recetasPollo.filter(item => item.ingrediente === ingrediente);
   
   for (const receta of filtradosPollo) {
     let div = document.createElement("div");
    div.innerHTML =`<h2>Con pollo y ${receta.ingrediente} podria preparar : </h2>
                    <h4>Receta numero:${receta.id}</h4>
                    <h3>Nombre:${receta.nombre}</h3>  `
    div.className = "recetaSugerida";            
    contenedor.append(div);

  
    }
 };

 function elegirRecetaCerdo(){
  let contenedor = document.getElementById("recetaSugerida");
   let ingrediente =prompt("Con que ingrediente desea acompañar el cerdo? tortilla, papas , ensalada o pure");
   let filtradosCerdo = recetasCerdo.filter(item => item.ingrediente === ingrediente);
   
  for (const receta of filtradosCerdo) {
    let div = document.createElement("div");
     div.innerHTML = ` <h2>Con cerdo y ${receta.ingrediente} podria preparar : </h3>
                   <h4>Receta número: ${receta.id}</h4>
                   <h2>Nombre: ${receta.nombre}</h3>`
     div.className = "recetaSugerida";
     contenedor.append(div);

   }
};

// me falta terminar bien la funcionalidad, muestra lo que pido pero no como quiero... 
 function mostrarRecetas(){
 let botonCarne =  document.getElementById("btnCarne");
 let boton1 = document.getElementById("contenedor1");
 let boton2 = document.getElementById("contenedor2");
 if(boton1.addEventListener ("click", muestraRecetasCerdo)){;
    muestraRecetasCerdo();
  } else if ( boton2.addEventListener ("click", muestraRecetasPollo)){
    muestraRecetasPollo()
  }else if (botonCarne.addEventListener("click",()=>{
        botonCarne.innerText="";
  })){
}
};

mostrarRecetas()

function muestraRecetasCerdo(){
  let contenedorCerdo = document.getElementById("contenedorReceta");
for (const recetas of recetasCerdo) {
  let li = document.createElement("li");
  li.innerHTML =  `<h2>Receta ${recetas.id}: ${recetas.nombre}</h2>
                   <h3>Ingrediente:${recetas.ingrediente}</h3>`
  contenedorCerdo.append(li); 
}
};

function muestraRecetasPollo(){
   let contenedorPollo = document.getElementById("contenedor2");
    for (const recetas of recetasPollo) {
      let li = document.createElement("li");
      li.innerHTML = `<h2>Receta ${recetas.id}: ${recetas.nombre}</h2>
                      <h3>Ingrediente:${recetas.ingrediente}</h3>`
      contenedorPollo.append(li);  
    }
   };
   

   