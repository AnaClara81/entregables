const recetasPollo = [
    {id: 1, nombre:"pollo con arroz", ingrediente:"arroz"},
    {id: 2, nombre:"pollo al horno con papas",ingrediente:"papas"},
    {id: 3, nombre:"milanesas de pollo con ensalada", ingrediente:"ensalada"},
    {id: 4, nombre:"pollo arrollado con pure", ingrediente:"jamon"},
    ];


 const recetasCarne = [
      {id: 1, nombre:"bifes con verduras", ingrediente:"verduras"},
      {id: 2, nombre:"carne al horno con papas",ingrediente:"papas"},
      {id: 3, nombre:"milanesas napolitana con ensalada", ingrediente:"ensalada"},
      {id: 4, nombre:"estofado", ingrediente:"zapallo"},
      ];
      elegirIngrediente();
      //elegirReceta();  
     
        
function elegirIngrediente(){  // muestra por alert el arreglo elegido
  let carne = "carne";
  let pollo = "pollo";
  let receta =prompt("Ingrese el ingrediente principal de su receta" + pollo + "o" + carne);
  let mensaje1 = ( Object.values(recetasCarne));
  let mensaje2 = (Object.values(recetasPollo));
        
 if (receta === carne){
   alert(JSON.stringify( mensaje1));
   // console.log(Object.values(recetasCarne));
  }else if (receta === pollo) { 
        alert(JSON.stringify( mensaje2));
       // console.log(Object.values(recetasPollo));
  }else{
      alert("Receta no encontrada");
 }

 };
// una vez elegida la opcion pollo o carne tendria que dar la opcion de elegir la receta de cada cual ... 
// y mostrar la funcion correspondiente  elegirRecetaCarne() / elegirRecetaPollo()





function elegirRecetaCarne(){
   
   let ingrediente =prompt("Ingrese el ingrediente a buscar verduras, papas , ensalada o zapallo");

   let filtradosP = recetasCarne.filter(item => item.ingrediente === ingrediente);
    filtradosP.forEach(item =>{
    alert(` con sus ingredientes puede cocinar: ${item.nombre}`);
    })
  };

  function elegirRecetaPollo(){
   
    let ingrediente =prompt("Ingrese el ingrediente a buscar arroz, papas , ensalada o jamon");
 
    let filtradosP = recetasPollo.filter(item => item.ingrediente === ingrediente);
     filtradosP.forEach(item =>{
     alert(` con sus ingredientes puede cocinar: ${item.nombre}`);
     })
   };
 



