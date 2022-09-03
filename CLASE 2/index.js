/*
= asignacion
== comparacion que solo valida valor 
=== comparacion que valida tanto valor como tipo de dato-- pregunta
*/ 
/*
console.log(3 == "3");
console.log(3 === "3");
*/

/* estructura del if
 if (condicion) {
    codigo a ejecutar en caso de la condicion sea verdadera
 }
*/

/*if (false) {
    console.log("entramos al if");
}

console.log("fin del proceso");*/
/*
let nombre = "Diana";
if (nombre === "Diana") {   //booleano true
    console.log("Hola Diana");
}
console.log("Chau Diana");
*/

/*
let numero = 5;
if (numero === 5) {
    console.log("Hola 5");
    
}
console.log("intermedio");
if (numero === 6) {
    console.log("Hola 6");
    
}
console.log("terminamos");*/

/* estrucutura if else    cuando se necesita que cuando es falsa la condicion se muestre un mensaje
  let numero = 10;
if (numero === 30) {
    console.log(" eres igual a 30");
} else{
    console.log("no eres 30");
}
console.log("terminamos");*/

/*let clima = " cae agua ";

if (clima === "hace sol") {
    console.log("salgo al parque");
    
}else{
    console.log("no salgo al parque");
}
console.log("terminamos");*/

/*let respuesta = prompt("Terminaste la tarea?");
if (respuesta.toLowerCase() === "si") {
    alert("Puedes salir a jugar");
}else{
    alert("No puedes salir a jugar");
}*/

/*let edad = parseInt(prompt("Ingresa tu edad"));

if (edad < 15) {
    alert("no puedes entrar");
}else if (edad < 18){
    alert("puedes entrar con un adulto");
}else {
    alert("puedes entrar");
}

alert("gracias por ingresar tu edad");*/
/* let numero = 5;
let valor = true;
let valorUno = numero === 10;*/

/*let nombre = prompt("Ingrese nombre")
if (nombre != "") {
     let mensaje =`Hola ${nombre}`;
    alert (mensaje);
}*/

/* operadores logicos
&& solo  es verdader cuando las condiciones involucradas son verdaderas 
de lo contrario sera falso

|| es verdadero cuando al menos una de las condiciones es verdaderas 
de lo contraria es falsa*/

/*let respuestaTarea = prompt("terminaste la tarea?");
let respuestaCasa = prompt("organizaste la casa?");
if (respuestaTarea.toLocaleLowerCase() === "si"&& respuestaCasa.toLocaleLowerCase() ==="si") {
    alert ("Puedes salir a jugar");
} else{
    alert("No puedes salir a jugar");
}*/

/*let nombre = prompt("Ingrese nombre");

if ((nombre == "andres" || nombre =="ANDRES")&& (nombre != "")){
    alert ("Hola andres")
}else{
    alert("No ingresaste los datos correctamente");
}*/

let colorUno = prompt("Ingrese un color primario");
let colorDos = prompt ("Ingrese otro color primario");

if ((colorUno == "azul" && colorDos == "amarillo") || (colorUno == "amarillo" && colorDos == "azul")) { 
    alert ("Mesclando esos colores se forma el verde");
    
}else if ((colorUno == "azul" && colorDos == "rojo") || (colorUno == "rojo" && colorDos == "azul")) {
    alert ("Mesclando esos colores se forma el violeta");
    
}else if ((colorUno == "amarillo" && colorDos == "rojo") || (colorUno == "rojo" && colorDos == "amarillo")) {
    alert ("Mesclando esos colores se forma el naranja");
    
}else {
    alert ("no se forma un color secundario");
}