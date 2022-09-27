/* function Receta(id, nombre, procedimiento, imagen){
  this.id = id;
  this.nombre = nombre;
  this.procedimiento = procedimiento;
  this.imagen = imagen ;
}

let recetaPollo1 = new Receta ( 1, "Pollo con arroz", "Cocinar el pollo en salsa de tomate y agregarle arrroz cocido a gusto", "arroz.jpg");
let recetaPollo2 = new Receta ( 2, "Pollo al horno ","Condimentar el pollo con sal pimienta y mostaza a gusto, cocinar a fuego medio por 1 hora", "polloHorno.jpg"); 
let recetaPollo3 = new Receta ( 3, "Milanesas de pollo ","Colocar los bifes de pollo en una mescla de huevos sal y pimienta, mesclar bien y luego pasar por pan rayado. Cocinar en una asadera enaceitada al horno hasta dorar", "milanesaPollo.jpg");   
let recetaPollo4 = new Receta ( 4, "Brochete de pollo ","Colocar los trozos de pollo y verduras salpimentados en los palitos de brochete intercalados,cocinar en plancha o a la parrilla", "brochettePollo.jpg");       

 

let recetaCarne1 = new Receta ( 1, "Bife", "Salpimentar la pieza de carne a gusto y cocinar a la plancha ", "bife.jpg");
let recetaCarne2 = new Receta ( 2, "carne con salsa","Sellar la carne, levantar el fondo de coccion con un vaso de vino blanco,agregar caldo y cocinar a fuego bajo 1 hr.Espesar la salsa", "carneSalsa.jpg"); 
let recetaCarne3 = new Receta ( 3, "Carre laqueado "," Cocinar el carre de cerdo al horno con sal y pimienta tapado durante 45 minutos.Luego mjar con una mescla de miel, salsa de soja y vinagre y cocinar 15 minutos mas", "carre.jpg");   
let recetaCarne4 = new Receta ( 4, "Costillitas ","Macerar la carne con aceite de oliva, perejil, ajo, sal y pimienta durante dos horas o mas en la heladera. Luego cocinar en plancha bien caliente", "bife.jpg");       
  
let recetaPescado1 = new Receta ( 1, "Pescado al horno con limon", "Salpimentar la pieza a gusto y cocinar al horno durante media hora ", "pescadoLimon.jpg");
let recetaPescado2 = new Receta ( 2, "Fish and chips","Filet de pescado  pasados por harina y fritos con papas", "pescadoFrito.jpg"); 
let recetaPescado3 = new Receta ( 3, "Salmon a la plancha ","Salpimentar la enca de salmon y cocinar a la plancha durante 8 minutos por lado", "salmon.jpg");   
let recetaPescado4 = new Receta ( 4, "Besugo a la parrilla ","Macerar el pescado con aceite de oliva, perejil, ajo, sal , pimienta y limon durante dos horas o mas en la heladera. Luego colocar en la prensa para la parrilla o envolver en papel aluminio. Cocinar a la parrilla", "pescadoParrilla.jpg");       
    
         */

const recetasPollo = [
  {id: 1, nombre:"Pollo con arroz", procedimiento: "Cocinar el pollo en salsa de tomate y agregarle arrroz cocido a gusto", imagen:src="./image/arroz.jpg" },
  {id: 2, nombre:"Pollo al horno ", procedimiento: "Condimentar el pollo con sal pimienta y mostaza a gusto, cocinar a fuego medio por 1 hora",imagen:src="./image/polloHorno.jpg" },
  {id: 3, nombre:"Milanesas de pollo ", procedimiento: "Colocar los bifes de pollo en una mescla de huevos sal y pimienta, mesclar bien y luego pasar por pan rayado. Cocinar en una asadera enaceitada al horno hasta dorar",imagen:src="./image/milanesaPollo.jpg" },
  {id: 4, nombre:"Brochette de pollo", procedimiento: "Colocar los trozos de pollo y verduras salpimentados en los palitos de brochete intercalados,cocinar en plancha o a la parrilla",imagen:src="./image/brochettPollo.jpg"},
 
  ];
//  console.log(recetasPollo[1].nombre);
const recetasCerdo = [
    {id: 1, nombre:"Bife", procedimiento:"Salpimentar la pieza de carne a gusto y cocinar a la plancha ", imagen:src= "./image/bife.jpg "},
    {id: 2, nombre:"Carne con salsa",procedimiento:"Sellar la carne, levantar el fondo de coccion con un vaso de vino blanco,agregar caldo y cocinar a fuego bajo 1 hr.Espesar la salsa",imagen:src="./image/carneSalsa.jpg" },
    {id: 3, nombre:"Carre laqueado ", procedimiento:" Cocinar el carre de cerdo al horno con sal y pimienta tapado durante 45 minutos.Luego mjar con una mescla de miel, salsa de soja y vinagre y cocinar 15 minutos mas",imagen:src="./image/carre.jpg"},
    {id: 4, nombre:"Costillitas ", procedimiento:"Macerar la carne con aceite de oliva, perejil, ajo, sal y pimienta durante dos horas o mas en la heladera. Luego cocinar en plancha bien caliente",imagen:src="./image/costillitas.jpg"},
  
    ];
    
    const recetasPescado = [
      {id: 1, nombre: "Pescado al horno con limon", procedimiento:"Salpimentar la pieza a gusto y cocinar al horno durante media hora ", imagen:src="./image/pescadoLimon.jpg" },
      {id: 2, nombre:"Fish and chips",procedimiento:"Filet de pescado  pasados por harina y fritos con papas",imagen:src="./image/pescadoFrito.jpg" },
      {id: 3, nombre:"Salmon a la plancha ", procedimiento:"Salpimentar la enca de salmon y cocinar a la plancha durante 8 minutos por lado",imagen:src="./image/salmon.jpg"},
      {id: 4, nombre:"Besugo a la parrilla ", procedimiento:"Macerar el pescado con aceite de oliva, perejil, ajo, sal , pimienta y limon durante dos horas o mas en la heladera. Luego colocar en la prensa para la parrilla o envolver en papel aluminio. Cocinar a la parrilla",imagen:src="./image/pescadoParrilla.jpg"},
    
    ];
     
 





function mostrarRecetas(){  
    
      let formulario = document.getElementById("formularioReceta");
      let contenedor = document.getElementById("recetaSugerida");
      let contenedorGeneral = document.getElementById("contenedorReceta");
      formulario.addEventListener("submit",(e)=>{
        e.preventDefault();
      
        let inputs = e.target.children;
      /*  //console.log(inputs[0].value);
          if(inputs[0].value === "cerdo" ){ 
            mostrarRecetaCerdo()
           
        }else if(inputs[0].value === "pollo"){ 
            mostrarRecetaPollo()
            
        }else if(inputs[0].value === "pescado"){
          mostrarRecetaPescado()
         
        }else if(inputs[0].value === ""){
           
        }else{
           alert("Receta no encontrada");
         }
        })
    }; */
    //OPERADOR TERNARIO
    inputs[0].value === "cerdo" ? mostrarRecetaCerdo():
    inputs[0].value === "pollo" ? mostrarRecetaPollo():
    inputs[0].value === "pescado" ? mostrarRecetaPescado():
   //SWEETALERT
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se encontro lo que buscabas!',
     
    })
  })
}

mostrarRecetas(); 


function mostrarRecetaCerdo(){
  let contenedor = document.getElementById("contenedorReceta1");
  let ingrediente = document.getElementById("inputReceta");
 let receta = recetasCerdo.filter(item => item.ingrediente === ingrediente);
  for (const receta of recetasCerdo) {
let div = document.createElement("div");
 div.innerHTML =`<div id ="card">
                <div style="width: 18rem;">
                <img src= ${receta.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title">${receta.nombre}</h5>
                 <p class="card-text">${receta.procedimiento}</p>
                 <a href="#" class="btn btn-success">Leer mas</a>
                 </div>
                </div> 
                </div>`
div.className = "contenedorReceta1";
contenedor.append(div);     
//contenedor.innerHTML = "" ;  
}
}; 
/* let receta = document.getElementById("titulo");

receta.addEventListener("mouseover", () => {
 div.className = "noEsta"; */

function mostrarRecetaPollo(){
  let contenedor = document.getElementById("contenedorReceta2");
  let ingrediente = document.getElementById("inputReceta");
  let receta = recetasCerdo.filter(item => item.ingrediente === ingrediente);
  
   for (const receta of recetasPollo) {
    let div = document.createElement("div");
    div.innerHTML =`<div id ="card">
                   <div style="width: 18rem;">
                   <img src= ${receta.imagen} class="card-img-top" alt="...">
                   <div class="card-body">
                    <h5 class="card-title">${receta.nombre}</h5>
                    <p class="card-text">${receta.procedimiento}</p>
                    <a href="#" class="btn btn-success">Leer mas</a>
                   
                    </div>
                   </div> 
                   </div>`
   div.className = "contenedorReceta2";
   contenedor.append(div);
   //contenedor.innerHTML = "" ;  
   }
   }; 


function mostrarRecetaPescado(){
  let contenedor = document.getElementById("contenedorReceta3");
  let ingrediente = document.getElementById("inputReceta");
  let receta = recetasCerdo.filter(item => item.ingrediente === ingrediente);
  
   for (const receta of recetasPescado) {
    let div = document.createElement("div");
    div.innerHTML =`<div id ="card">
                   <div style="width: 18rem;">
                   <img src= ${receta.imagen} class="card-img-top" alt="...">
                   <div class="card-body">
                    <h5 class="card-title">${receta.nombre}</h5>
                    <p class="card-text">${receta.procedimiento}</p>
                    <a href="#" class="btn btn-success">Leer mas</a>
                   
                    </div>
                   </div> 
                   </div>`
   div.className = "contenedorReceta3";
   contenedor.append(div); 
  // contenedor.innerHTML = "" ;  
   }
   }; 
//  mostrarRecetaCerdo();
/* me falta terminar bien la funcionalidad, muestra lo que pido pero no como quiero... 
 function mostrarRecetas(){
 let botonCarne =  document.getElementById("btnCarne");
 let contenedorLista = document.getElementById("contenedorReceta")
 let boton1 = document.getElementById("contenedor1");
 let boton2 = document.getElementById("contenedor2");
 if(boton1.addEventListener ("click", muestraRecetasCerdo)){
    muestraRecetasCerdo();
  } else if(boton2.addEventListener("click", muestraRecetasPollo)){
    muestraRecetasPollo()
  }else if (botonCarne.addEventListener("click",()=>{
        contenedorLista.innerText="";
  })){
}
};

mostrarRecetas()

function muestraRecetasCerdo(){
  let contenedorCerdo = document.getElementById("contenedorReceta");
for (const recetas of recetasCerdo) {
  let li = document.createElement("li");
  li.innerHTML =  `<h2 id="titulo" >Receta ${recetas.id}: ${recetas.nombre}</h2>`
  contenedorCerdo.append(li); 
  
  let div = document.createElement("div");
   div.innerHTML =`<div id ="card">
                  <div style="width: 18rem;">
                  <img src= ${recetas.imagen} class="card-img-top" alt="...">
                  <div class="card-body">
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
                   </div>
                  </div> 
                  </div>`
 div.className = "noEsta";
 contenedorCerdo.append(div);      
 
 let receta = document.getElementById("titulo");
 
  receta.addEventListener("mouseover", () => {
   div.className = "noEsta";
 });
 
 
 receta.addEventListener("click", () => {
  div.className = "esta";
  
}); 
 //receta.addEventListener("click", () => {
 // div.className = "esta";

}
}
};*/
 

  
  