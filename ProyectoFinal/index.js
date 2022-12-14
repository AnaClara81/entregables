
 const recetas=[];

function mostrarRecetasBuscadas(recetas, contenedor){};

//function mostrarRecetasBuscador(){  
let btn_buscar = document.getElementById("btn_buscar");
let formulario = document.getElementById("formularioReceta");
let option = document.getElementsByClassName("ingredientes");
let contenedorBuscadas= document.getElementsByClassName("contenedorBuscadas");
  
  if(formulario){
    formulario.addEventListener("submit",(e)=>{
     
      e.preventDefault();
      let valorSeleccionado = e.target.children;
     
      
    
      
      let  lista = document.getElementById("opciones");
      let indiceSeleccionado = lista.selectedIndex;
      let opcionSeleccionada = lista.options[indiceSeleccionado];
      
      let textoSeleccionado = lista.options[lista.selectedIndex].text;
      let nombre = textoSeleccionado.toLowerCase()
      valorSeleccionado = lista.options[lista.selectedIndex].value;
      console.log("Opción seleccionada: " + nombre + "\n Valor de la opción: " + valorSeleccionado);
       
   //OPERADOR TERNARIO
    textoSeleccionado === "Cerdo" ? location.href="./recetario/recetarioCerdo/recetasCerdo.html" :
    textoSeleccionado === "Pollo" ? location.href ="recetario/recetarioPollo/recetasPollo.html" :
    textoSeleccionado === "Pescado" ?  location.href ="recetario/recetarioPescado/recetasPescado.html" :
    textoSeleccionado === "Verduras" ?  location.href ="recetario/recetarioVerduras/recetasVerduras.html" :
    textoSeleccionado === "Pastas" ?  location.href ="recetario/recetarioPastas/recetasPastas.html" :
    textoSeleccionado === "Arroz" ?  location.href ="recetario/recetarioArroces/recetasArroz.html" :
    textoSeleccionado === "Mousses" ?  location.href ="recetario/recetarioMousse/recetasMousse.html" :
    textoSeleccionado === "Postres" ?  location.href ="recetario/recetariopostres/recetasPostres.html" :
    textoSeleccionado === "Tortas" ?  location.href ="recetario/recetarioTortas/recetasTortas.html" :
 

  //SWEETALERT
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No se encontro lo que buscabas!'
   
  })
    })
    }

//mostrarRecetasBuscadas(recetasCerdo,contenedor);
//mostrarRecetasBuscador();  

