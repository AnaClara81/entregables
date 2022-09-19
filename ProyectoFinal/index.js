const recetasPollo = [
    {id: 1, nombre:"Pollo con arroz", ingrediente:"arroz"},
    {id: 2, nombre:"Pollo al horno con papas",ingrediente:"papas"},
    {id: 3, nombre:"Milanesas de pollo con ensalada", ingrediente:"ensalada"},
    {id: 4, nombre:"Pollo arrollado con pure", ingrediente:"jamon"},
  
    ];

const recetasCerdo = [
      {id: 1, nombre:"Costillitas con tortilla", ingrediente:"tortilla", imagen:src="./image/carne.jpg" },
      {id: 2, nombre:"Carre al horno con papas",ingrediente:"papas",imagen:src="./image/carne2.jpg" },
      {id: 3, nombre:"Bondiola con ensalada", ingrediente:"ensalada",imagen:src="./image/carne3.jpg"},
      {id: 4, nombre:"Matambrito con pure", ingrediente:"pure",imagen:src="./image/carne4.jpg"},

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
   let ingrediente = document.getElementById("inputReceta") ;
   let boton = document.getElementById ("buscar2");
   //let receta = document.getElementById("formularioReceta");
   let div = document.createElement("recetaSugerida");
   let HTMLFormElement = document.createElement("input");
   div.innerHTML =`<form id="formularioReceta"  role="search"
                   <h3>"Con que ingrediente desea acompañar el pollo? 
                   arroz, papas , ensalada o jamon </h3>
                   <input id= "input">${HTMLFormElement.autocomplete}</input>
                   <button id="buscar2" class="btn btn-success" type="click">Buscar</button>
                   <form id="formularioReceta" class="d-flex" role="search"`
   div.className = "recetaSugerida";        
   contenedor.append(div);
   saludar();

   function saludar(){
    console.log("hola");
  }
boton.addEventListener("click",saludar); 
      };
    
    
 
    // muestraRecetasCerdo();
    // let boton = document.createElement("buscar");
    //  boton.addEventListener("click",filtrarRecetasPollo);
     

   function filtrarRecetasPollo(){
    let contenedor = document.getElementById("recetaSugerida");
    let ingrediente = document.getElementById("inputReceta") ;
    let filtradosPollo = recetasPollo.filter(item => item.ingrediente === ingrediente);
    for (const receta of filtradosPollo) {
     let div = document.createElement("div");
    div.innerHTML =`<h2>Con pollo y ${receta.ingrediente} podria preparar : </h2>
                    <h4>Receta numero:${receta.id}</h4>
                    <h3>Nombre:${receta.nombre}</h3>  `
    div.className = "recetaSugerida";            
    contenedor.append(div);
    console.log(ingrediente );
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
};
 
 function muestraRecetasPollo(){
   let contenedorPollo = document.getElementById("contenedorReceta");
    for (const recetas of recetasPollo) {
      let li = document.createElement("li");
      li.innerHTML = `<h2>Receta ${recetas.id}: ${recetas.nombre}</h2>`
                      
      contenedorPollo.append(li);  
    }
   
  }
  
    //funcionalidad de crear cuenta
    
    document.getElementById("btn-guardarUsuario").addEventListener("click",guardarUsuario);
    imprimirUsuarios()    
    
    function guardarUsuario(e){
       e.preventDefault();
       let formulario = e.target

       let nombre = document.getElementById("nombre").value,
       apellido = document.getElementById("apellido").value,
       email = document.getElementById("email").value,
       password = document.getElementById("password").value
       
       agregarUsuarios(nombre, apellido, email, password)
       imprimirUsuarios()
    };


    function imprimirUsuarios(){
       let lista =  getUsuarios();
        tbody = document.querySelector("#tablaUsuarios tbody");
        
        tbody.innerHTML = "";

        for(let i = 0; i< lista.length; i++){
          let row = tbody.insertRow(i);
              nombreCell = row.insertCell(0);
              apellidoCell = row.insertCell(1);
              emailCell = row.insertCell(2);
              passwordCell = row.insertCell(3);
            
            nombreCell.innerHTML = lista[i].nombre;
            apellidoCell.innerHTML = lista[i].apellido;
            emailCell.innerHTML = lista[i].email;
            passwordCell.innerHTML = lista[i].password;




          tbody.appendChild(row);
        }
        
      }
    