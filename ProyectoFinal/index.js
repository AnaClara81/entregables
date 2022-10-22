 const recetas=[];
 function mostrarRecetasBuscadas(recetas, contenedor){};
 function mostrarRecetasBuscador(){  
  let btn_buscar = document.getElementById("btn_buscar");
   let formulario = document.getElementById("formularioReceta");
   let option = document.getElementsByClassName("ingredientes");

   
   if(formulario){
     formulario.addEventListener("submit",(e)=>{
      
       e.preventDefault();
       let valorSeleccionado = e.target.children;
      
       
     
       
       let  lista = document.getElementById("opciones");
       let indiceSeleccionado = lista.selectedIndex;
       let opcionSeleccionada = lista.options[indiceSeleccionado];
       
       let textoSeleccionado = lista.options[lista.selectedIndex].text;
       valorSeleccionado = lista.options[lista.selectedIndex].value;
       console.log("Opción seleccionada: " + textoSeleccionado + "\n Valor de la opción: " + valorSeleccionado);
     
      
       mostrarRecetasBuscadas(recetas, contenedor)
        
    //OPERADOR TERNARIO
    textoSeleccionado === "Cerdo" ? mostrarRecetasBuscadas(recetasCerdo,contenedor1):
     
    textoSeleccionado === "Pollo" ? mostrarRecetasBuscadas(recetasPollo,contenedor2):

    textoSeleccionado === "Pescado" ? mostrarRecetasBuscadas(recetasPescado,contenedor3):

     textoSeleccionado === "Verduras" ? mostrarRecetasBuscadas(recetasVerduras,contenedor4):
 
   //SWEETALERT
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se encontro lo que buscabas!',
     
    })
  })
}
}

mostrarRecetasBuscador(); 

     
