const recetasPollo = [
    {id: 1, nombre:"pollo con arroz", ingrediente:"arroz"},
    {id: 2, nombre:"pollo al horno con papas",ingrediente:"papas"},
    {id: 3, nombre:"milanesas de pollo con ensalada", ingrediente:"ensalada"},
    {id: 3, nombre:"pollo arrollado con pure", ingrediente:"jamon"},
    ];
    let ingrediente = prompt("Ingrese el ingrediente a buscar arroz, papas , ensalada o jamon");

    let filtradosP = recetasPollo.filter(item => item.ingrediente === ingrediente);
    console.log(filtradosP);
    
     /*  const recetasCarne = [
        {id: 1, nombre:"bifes con verduras", ingrediente:"verduras"},
        {id: 2, nombre:"carne al horno con papas",ingrediente:"papas"},
        {id: 3, nombre:"milanesas napolitana con ensalada", ingrediente:"ensalada"},
        {id: 3, nombre:"estofado", ingrediente:"zapallo"},
        ];
        for (const item of recetasCarne){
        //console.log(item.nombre);*/
   

 
/*
/*for(const item of recetasCarne){
  //console.log(item);*/

/*let receta = prompt("Ingrese el ingrediente principal de la receta a buscar pollo/carne");

let mensaje1 = `receta con carne ${recetasCarne.nombre}`;
let mensaje2 = `receta con pollo ${recetasPollo.nombre}`;


//while (receta != "ESC") {
  switch (receta){
    case "carne":
        alert(mensaje1);
    //console.log("Estas  son las recetas con carne " + recetasCarne);
      break;

    case "pollo":
        alert(mensaje2);
    console.log("Estas  son las recetas con carne " +  recetasPollo);
      break;

    default:
      console.log("Receta no encontrada");
      break;
    };*/
  

