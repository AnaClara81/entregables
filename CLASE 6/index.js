//const arreglo1 = [];
//const arreglo2 = [5, 7, 6, 8, 9];
//const arreglo3 = ["andres", "joan", "mariana", "juaco"];
//const arreglo4 = [true, false, false, true];
//const arreglo5 = [true, 5, "pepito"];

//console.log(arreglo5[1]);
//console.log(arreglo2[2] + arreglo2[4]);

/*const arreglo2 = [5, 7, 6, 8, 9];
for(let index = 0; index < 5; index++){
    console.log(arreglo2[index]);
}*/

/*const arreglo3 = ["andres", "joan", "mariana", "juaco"];

for(let index = 0; index < arreglo3.length; index++){
   console.log(arreglo3[index].toLocaleUpperCase());
}*/
//push agrega elementos al final
/*arreglo3.push("camila");
console.log(arreglo3.length);
console.log(arreglo3);

//unshift agrega eelementos al principio
arreglo3.unshift("pepito");
console.log(arreglo3);

//pop sacar elemento del final
arreglo3.pop();
console.log(arreglo3.length);
console.log(arreglo3);

//shift sacar elemento de el principio
arreglo3.shift();
console.log(arreglo3.length);
console.log(arreglo3);*/



/*const arreglo3 = ["andres", "joan", "mariana", "juaco"];
const nuevo = arreglo3.splice(1,3);
//splice elimina los elementos pasados por parentesis
arreglo3.splice(1,2);
console.log(arreglo3);
console.log(nuevo);*/


//join une todo en un solo string separado por lo indicado dentro de los párentesis
/*const arreglo3 = ["andres", "joan", "mariana", "juaco"];
console.log(arreglo3.join("*"));*/

//concat  concatena arreglos
/*const arreglo3 = ["andres", "joan", "mariana", "juaco"];
const numeros = [1, 2, 3, 4, 5];
const varios = arreglo3.concat(numeros);
console.log(varios);*/


//slice  hace una copia del arreglo
//const arreglo3 = ["andres", "joan", "mariana", "juaco"];
//const copia = arreglo3.slice(1, 3);
//console.log(copia);

//para que encuentre algo en especifico  busca la posicion de un elemneto en un arreglo
/*const arreglo3 = ["andres", "joan", "mariana", "juaco"];
console.log(arreglo3.indexOf("mariana"));*/


//valida si el arreglo contiene el elemneo que paso en parentesis
/*const arreglo3 = ["andres", "joan", "mariana", "juaco"];
console.log(arreglo3.includes("andres"));*/

// invierte el arreglo
/*const arreglo3 = ["andres", "joan", "mariana", "juaco"];
console.log(arreglo3.reverse());*/

/*const arreglo3 = ["andres", "joan", "mariana", "juaco"];

arreglo3.pop();
arreglo3.pop();
console.log(arreglo3);*/

/*const arreglo3 = ["andres", "joan", "mariana", "juaco"];

const eliminar = (nombre) =>{
    let posicion = arreglo3.indexOf(nombre);

    if(posicion != -1){
        arreglo3.splice(posicion, 1);
    }

    console.log(arreglo3);
}

eliminar("joan");*/


/*const array = [
  {nombre:"camisa", precio: 1000},
  {nombre:"gorra", precio: 700},
];

console.log(array);

array.push({nombre:"pantalon", precio: 500});
console.log(array);*/

/*const array = [];

for(let i = 0; i < 3;  i++){
    let nombre = prompt ("Ingrese el nombre");
    let precio = promt ( "ingrese el precio");
    let obj = {
        nombre: nombre,
        precio: precio,
    }

    array.push(obj);
}
console.log(array);*/

/*const productos = [
    {id: 1, nombre: "Arroz"},
    {id: 1, nombre: "Fideos"},
    {id: 1, nombre: "Pan"},
];

for (const item of productos){
 console.log(item.nombre); 
}*/






/* class Producto{
    constructor(nombre, precio){
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const array = [];
  
  for(let i = 0; i < 2; i++){
    let nombre = prompt("ingrese el nombre");
    let precio = prompt("ingrese el precio");
    let obj = new Producto(nombre, precio);
  
    array.push(obj);
  }
  
  console.log(array);
   */


  const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
})
