let alumno = prompt("Ingrese nombre del alumno");
while (alumno == "") {
    alert ("Ingrese nombre valido")
    
    alumno = prompt("Ingrese nombre del alumno");
    alert (`Bienvenido ${alumno}`);
}


let notaUno = parseInt(prompt("Ingrese su primer nota")) ;
let notaDos = parseInt(prompt("Ingrese su segunda nota"));
let notaTres = parseInt(prompt("Ingrese su tercer nota"));
let notaCuatro = parseInt(prompt("Ingrese su cuarta nota"));
let notaCinco = parseInt(prompt("Ingrese su quinta nota"));
let cantidadNotas = 5;
let resultado = notaUno + notaDos + notaTres + notaCuatro + notaCinco



function sumarNotas(notaUno, notaDos, notaTres, notaCuatro, notaCinco){
   return resultado
}
sumarNotas();

const promediarNotas = (resultado, cantidadNotas) => {return resultado / cantidadNotas};
   let promedio = promediarNotas(resultado, cantidadNotas);
   let mensaje = `Su promedio es ${promedio}`;
   alert (mensaje);

 
if(promedio >=7){
 alert ("Puedes cursar la siguiente materia");
}else{
    alert("Tienes que recursar");
}




