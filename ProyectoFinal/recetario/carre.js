//let contenedor = document.getElementById("contenedor");
//let receta = [];

const detallarReceta = async () =>{
      const resp = await
      fetch ('./recetasCerdo.json')
      const data = await resp.json();
      let recetasCerdo = data.result;
      receta = data.recetasCerdo;
      let contenedor = document.getElementById("contenedor");
const div = document.createElement('div')
div.innerHTML=`
<th>
<h2>${receta[2].nombre} </h2>
<h3>Ingredientes:</h3> 
<tr>${receta[2].Ingredientes[0]}</tr>
<tr>${receta[2].Cantidad[0]}</tr>
<br>
<tr>${receta[2].Ingredientes[1]}</tr>
<tr>${receta[2].Cantidad[1]}</tr>
<br>
<tr>${receta[2].Ingredientes[2]}</tr>
<tr>${receta[2].Cantidad[2]}</tr>
<h3>Procedimiento:</h3> 
<p  >${receta[2].Procedimiento}</p> 
</th>

"<img src ='${receta[2].imagen}'>"
`;

contenedor.append(div) 
console.log(receta);
} 

 let guardarReceta = document.createElement("button");
guardarReceta.innerText = "Guardar recetas";
guardarReceta.className = "guardarReceta";
contenedor.append(guardarReceta); 

guardarReceta.addEventListener("click",()=>{

localStorage.setItem("receta[2]",receta)
localStorage.setItem("receta[2]",JSON.stringify(receta[2])) 



})

//console.log(receta[0]);
function obtener_LocalStorage(){
if(localStorage.getItem("receta[2]")){;
let data = localStorage.getItem("receta[2]"); JSON.parse (localStorage.getItem("receta[2]"));


//console.log(receta[0]);
}else{
console.log("no hay entradas en el local");
}
}  
obtener_LocalStorage()

detallarReceta() 




