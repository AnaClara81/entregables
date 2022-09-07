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
       
     
        
function elegirIngrediente(){  
  let carne = "carne";
  let pollo = "pollo";
  let receta =prompt("Ingrese el ingrediente principal de su receta " + pollo + " o " + carne);
  let mensaje1 = ( Object.values(recetasCarne));
  let mensaje2 = (Object.values(recetasPollo));
        
 if(receta === carne){
  elegirRecetaCarne();
}else if(receta === pollo){ 
  elegirRecetaPollo();
}else{
   alert("Receta no encontrada");
 }
};

function elegirRecetaCarne(){
   
   let ingrediente =prompt("Con que ingrediente desea acompañar la carne? verduras, papas , ensalada o zapallo");

   let filtradosP = recetasCarne.filter(item => item.ingrediente === ingrediente);
    filtradosP.forEach(item =>{
    alert(`Con carne y ${ingrediente} puede cocinar: ${item.nombre}`);
    })
  };

function elegirRecetaPollo(){
   
    let ingrediente =prompt("Con que ingrediente desea acompañar la pollo? arroz, papas , ensalada o jamon");
 
    let filtradosP = recetasPollo.filter(item => item.ingrediente === ingrediente);
     filtradosP.forEach(item =>{
     alert(`Con pollo y ${ingrediente}  puede cocinar: ${item.nombre}`);
     })
   };
 

  
   
   
   let ingredienteUno = (prompt("Ingrese proteina (tipo de carne)")) ;
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
   
   
   
   cantPorciones();

