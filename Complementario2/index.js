
/*let recetasPollo = [
{id: 1, nombre:"Pollo con arroz", ingrediente1:"arroz", ingrediente2:"tomate", ingrediente3:"cebolla", calorias: 550, tiempoPrep: 30},
{id: 2,nombre:"Pollo al horno con papas",ingrediente1:"papas", ingrediente2:"mostaza", ingrediente3:"pimienta",calorias: 650, tiempoPrep: 45},
{id: 3, nombre:"Pollo arrollado con ensalada", ingrediente1:"jamon", ingrediente2:"queso", ingrediente3:"tomate" ,calorias: 450, tiempoPrep: 35},
]


recetasPollo.push({id: 4, nombre:"Milanesas maryland" ,ingrediente1:"empanado", ingrediente2:"choclo", ingrediente3:"banana" ,calorias:750 ,tiempoPrep: 50,});

//recetasPollo.forEach(item =>console.log(item));

let ingrediente1 = prompt("Ingrese un ingrediente  ");
let ingrediente2 = prompt("Ingrese otro ingrediente ");
let ingrediente3 = prompt("Ingrese otro ingredientes ");

let totalIngredientes = ingrediente1 + ingrediente2 + ingrediente3;
let encontrada = recetasPollo.filter(item => totalIngredientes === totalIngredientes);
// alert(encontrada);
console.log(encontrada);*/

let recetasPollo = [
    {id: 1, nombre:"Pollo con arroz", ingrediente:"arroz", calorias: 550, tiempoPrep: 30},
    {id: 2,nombre:"Pollo al horno con papas",ingrediente:"papas", calorias: 650, tiempoPrep: 45},
    {id: 3, nombre:"Pollo arrollado con ensalada", ingrediente:"queso" ,calorias: 450, tiempoPrep: 35},
    ]
    
    
    recetasPollo.push({id: 4, nombre:"Milanesas maryland" , ingrediente:"choclo",calorias:750 ,tiempoPrep: 50,});
    
    //recetasPollo.forEach(item =>console.log(item));
    
    let ingrediente = prompt("Ingrese un ingrediente para su receta con pollo: ¿ arroz, papas o queso? ");
    
    let encontrada = recetasPollo.find(item =>item.ingrediente === ingrediente);
    
    //alert(encontrada);
    console.log(encontrada);
    
    

