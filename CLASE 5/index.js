/*let nombre ="pepito";
let edad = 23;
let direccion ="AV";

/*
estructura de un objeto 
{key1: value1, key2: value2,.......,keyn: valuen}
propiedad/clave:  valor

*/
/*const persona ={ 
    nombre: "pepito",
    edad: 23,
    direccion:"AV",
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);
console.log(persona["nombre"]);
console.log(persona["edad"]);

let lugar ="direccion";
console.log(persona[lugar]);

persona["nombre"] ="Juan";
persona.edad = 67;
console.log(persona);*/

//Funciones constructoras    el nombre va con mayuscula "Persona"

/*function Persona(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
}
//INSTANCIAR LA FUNCION CONSTRUCTURA     CON LET TAMBIEN FUNCIONA let persona1
const persona1 = new Persona("pepito", 23, "AV");
const persona2 = new Persona("Mariana", 22, "AV");
console.log(persona1.nombre);
console.log(persona2.nombre);
*/
// constructora que recibe un objeto   INFO
/*function Persona(info){
   this.nombre = info.nombre;
   this.edad = info.edad;
   this.direccion = info.direccion;
   this.colorCabello = info.colorCabello;
   this.colorOjos = info.colorOjos;
}
// EL NEW   INSTANCIA UN OBJETO
let persona = new Persona({
    nombre: "Damian",
    edad: 34,
    direccion: "AV",
    colorCabello: "Negro",
    colorOjos: "Azul",
});
console.log(persona.edad);


/*function Producto(img, precio, nombre){
    this.img = img;
    this.precio = precio;
    this.nombre = nombre;
}

let producto1 = new Producto ("http,dhddjdjdkdkdk",
406000,"monitor sammm")*/


//cuando se hace con objeto no imorta el orden que se cargan los datos
/*function Producto(tabla){
    this.img = tabla.img;
    this.precio = tabla.precio;
    this.nombre = tabla.nombre;
}
let producto1= new Producto ({
    img :"http,dhddjdjdkdkdk",
    precio:406000,
    nombre:"monitor sammm",
})*/

function Persona(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.hablar =function(){console.log("Hola soy  " + this.nombre);}
}

let persona1  = new Persona("maria", 45, "AV");
persona1.hablar();

/*let persona ={ 
    nombre: "pepito",
    edad: 23,
    direccion:"AV",
};
//for in para objetos    for of para arreglos
for(const propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}*/

/*function Persona(nombre, edad, direccion){
    
    this.hablar =function(){console.log("Hola soy" + this.nombre);}
}*/

/*class Persona{
    constructor(nombre, edad, direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

hablar(){
    console.log("Hola soy" + this.nombre);
}
}
let persona1 = new Persona ("maria", 34, "AV");
console.log(persona1);

console.log(hablar());

/*class Producto {
    constructor(nombre, precio){
     this.nombre = nombre;
     this.precio = precio;
     this.vendido = false;
    }

    vender(){
        this.vendido = true;
    }
}
let nombre = prompt("Ingrese nombre")
let producto1 = new Producto(nombre, 100000);
let producto2 = new Producto("Monitor", 200000);
console.log(producto1);
producto1.vender();
producto2.vender();
console.log(producto1);
console.log(producto2);*/

/*descontando del stock
class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
vender (){
    this.cantidad = this.cantidad -1
}
}
let producto2 = new Producto("Monitor", 200000, 5);
console.log(producto2);
producto2.vender();
console.log(producto2);
producto2.vender();
console.log(producto2);
producto2.vender();*/