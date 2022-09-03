/*estructura de funcion

function nombreFuncion(){
    codigo de la funcion
}
*/

/*function saludar(){
    let nombre = prompt ("Ingrese un nombre");
    let mensaje =`Hola ${nombre}`;
    alert(mensaje);
}
saludar();*/

/* funciones con parametros
function nombreFuncion(par1, par2,...parn){
    codigo a ejecutar por la funcion 
}
*/

/*function sumar(numero1, numero2){
    let suma = numero1 + numero2;

    alert(suma);
}

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

sumar(numero1, numero2);*/

/*function calculadora(numeroUno, numeroDos, operacion){
    switch (operacion) {
        case "+":
            console.log(numeroUno + numeroDos);
            break;
        case "-":
            console.log(numeroUno - numeroDos);
            break;
        case "*":
            console.log(numeroUno * numeroDos);
            break;
        case "/":
            console.log(numeroUno / numeroDos);
            break;
    
        default:
            console.log("operacion no definida");
            break;
    }
}

calculadora(2, 4, "*");*/

/*function suma (x,y){
    return x+y;
}
suma(3,4);
console.log(suma(3,4));*/


//arrow function  =>      funcion anonima que no tiene nombre

/*const suma =(num1, num2) => {return num1 + num2}
console.log(suma(4,5));*/

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;

let precio = 1000;
let descuento = 100;

let nuevoPrecio = resta(suma(precio, iva(precio)), descuento);
                = resta(suma(1000, iva(1000)), 100);
                = resta(1000 + 1000 * 0.21, 100);
                = (1000 + 1000 * 0.21) - 100
                = 1110;
