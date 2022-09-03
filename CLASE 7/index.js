/*function mayorQue(n) {
    return m => m > n;
}

let mayorQueCinco = mayorQue(5);   //m => m > 5;
console.log(mayorQueCinco(6)); //true

let mayorQue20 = mayorQue(20); //m => m > 20;
console.log(mayorQue20(30));*/

/*function operaciones(op){
    if(op ==="sumar"){
        return (a, b) => a + b;
    }
    if(op ==="restar"){
        return (a, b) => a - b;
    }
    if(op ==="multiplicar"){
        return (a, b) => a * b;
    }
    if(op ==="dividir"){
        return (a, b) => a / b;
    }
}

let suma = operaciones("sumar");
let resta = operaciones("restar");

console.log(suma(5, 6));
console.log(resta(4, 1));*/

/*function recorrer (arreglo, funcion){
    for(const item of arreglo){
        funcion(item);
    }
}


const arreglo = [3,4,2,5,6,7];
recorrer(arreglo, console.log)*/

//metodos avanzados
// for each recorre el arreglo, el parametro es el iterador y lo muestra por el log
/*const arreglo = [3, 4, 2, 5, 6, 7];
arreglo.forEach((item) => {
     console.log(item);
});*/

/*const arreglo = [3, 4, 2, 5, 6, 7];
let encontrado = arreglo.find(item => item === 5);
console.log(encontrado);*/

/*const cursos = [
  {nombre: 'Javascript' , precio:15000},
  {nombre: 'ReactJS' , precio:22000},
];

let encontrado = cursos.find(curso => curso.nombre === 'Javascript');
console.log(encontrado);*/

/* encuentra el producto ingresado
const productos = [
    {id:1 , nombre: "camisa", precio: 2000},
    {id:2 , nombre: "pantalon", precio: 2000},
    {id:3, nombre: "gorra", precio: 2000},
    {id:4, nombre: "zapato", precio: 2000},
]
let precio = 
*/
/*const productos = [
    {id: 1, nombre: "camisa", precio: 2000},
    {id: 2, nombre: "pantalon", precio: 1500},
    {id: 3, nombre: "gorra", precio: 110},
    {id: 4, nombre: "zapato", precio: 700},
  ];
  
  let precio = parseInt(prompt("Ingrese el precio minimo del producto"));
  let filtrados = productos.filter(item => item.precio > precio);
  console.log(filtrados);*/
  
 /* verifica si al menos un elemento cumple la condicion
  const productos = [
    {id: 1, nombre: "camisa", precio: 2000},
    {id: 2, nombre: "pantalon", precio: 1500},
    {id: 3, nombre: "gorra", precio: 110},
    {id: 4, nombre: "zapato", precio: 700},
  ];
  console.log(productos.some(item => item.nombre ==="hhsjskalalala"));*/


  /*map
  const productos = [
    {id: 1, nombre: "camisa", precio: 2000},
    {id: 2, nombre: "pantalon", precio: 1500},
    {id: 3, nombre: "gorra", precio: 110},
    {id: 4, nombre: "zapato", precio: 700},
  ];

  let nombres = productos.map(item => {
    return {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio + 1777
    }
  })
  console.log(nombres);*/

 
  /*
  reduce    reduce un arreglo a un unico valor
  const numeros = [1,2,3,4,3,2,5];
  const total = numeros.reduce((acumulador, item) =>acumulador + item, 0);
  console.log(total);*/

 /* const productos = [
    {id: 1, nombre: "camisa", precio: 2000},
    {id: 2, nombre: "pantalon", precio: 1500},
    {id: 3, nombre: "gorra", precio: 110},
    {id: 4, nombre: "zapato", precio: 700},
  ];

  const total = productos.reduce((acumulador, item) =>acumulador + item.precio, 0);
  console.log(total);*/

 /* const numeros = [1,2,3,4,3,2,5];
  console.log(numeros.sort((a, b) => a - b));
  console.log(numeros.sort((a, b) => b - a));*/

  
 /* ordena en forma ascendente o descendente
  const items = [
    { name: "Pikachu", price: 21 },
    { name: "Charmander", price: 37 },
    { name: "Pidgey", price: 45 },
    { name: "Squirtle", price: 60 },
  ];
  
  console.log(items.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  }));*/
  

  /*console.log(Math.E);
  console.log(Math.PI);
  console.log(Math.max(3,6,7,5,4,77));
  console.log(Math.min(3,6,7,5,4,77));

  console.log(Math.ceil(3.14));//redondea hacia arriba
  console.log(Math.floor(3.14));// redondea hacia abajo 
  console.log(Math.round(3.51));// va al que esta mas cercano*/

  //console.log(Math.sqrt(9));//raiz 
  //console.log(Math.random() * 10);

  // Date
  //console.log(Date());

  //console.log(new Date(2020, 1, 16));

  //const fecha = new Date(2022, 11, 24, 23, 59, 59);
  //console.log(fecha);
  
  //const casiNavidad = new Date("December 24, 2021 23:59:59");
  //console.log(casiNavidad);

  /*const fecha = new Date("December 24, 2021");
  console.log(fecha.getFullYear());
  console.log(fecha.getMonth());
  console.log(fecha.getDay());*/
  
 /* const fecha = new Date("December 24, 2021");
  console.log(fecha.toDateString());
  console.log(fecha.toLocaleString());
  console.log(fecha.toLocaleDateString());
  console.log(fecha.toTimeString());*/

  /*const navidad = new Date ("December 25, 2022");
  const hoy = new Date ("August 31, 2022");

  console.log(navidad - hoy);// muestra en milisegundos
  const milisegundosPorDia = 86400000;

  console.log((navidad - hoy)/ milisegundos);*/

  let productos = [
    { id: 1, nombre: "televisor", precio: 1000 },
    { id: 2, nombre: "monitor", precio: 1100 },
    { id: 3, nombre: "computador", precio: 500 },
    { id: 4, nombre: "celular", precio: 700 },
  ];
  
 productos.forEach(item => console.log(item));

  let nombre = prompt("Ingrese el nombre del producto");
  let producto = productos.find(el =>el.nombre === nombre);
  alert(producto.precio)

  let pollo = [
    {id:1 , nombre: ''}
  ]