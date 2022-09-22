 let usuarios = [];


function agregarUsuarios(nombre, apellido, email, password){

    const nuevoUsuario = {
        nombre : nombre,
        apellido : apellido,
        email  :email,
        password : password,
};
console.log(nuevoUsuario);
usuarios.push(nuevoUsuario);
guardar_localStorage(usuarios);
}


function getUsuarios(){
    let listaGuardada = localStorage.getItem("nuevoUsuario");
   if(listaGuardada === null){
    usuarios = [];
   }else{
    usuarios = JSON.parse(listaGuardada);
   }
    return usuarios;
}


function guardar_localStorage(usuarios){
    localStorage.setItem("nuevoUsuario", JSON.stringify(usuarios));
} 





// imprimirUsuarios()    
  //funcionalidad de crear cuenta
    
  let btnGuardarUsuario = document.getElementById("btn-guardarUsuario")
    btnGuardarUsuario.addEventListener("click",guardarUsuario);
   // imprimirUsuarios()    
    
    function guardarUsuario(e){
       e.preventDefault();
       let formulario = e.target

      let nombre = document.getElementById("nombre").value;
      let apellido = document.getElementById("apellido").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
       
       agregarUsuarios(nombre, apellido, email, password)

      alert(`Bienvenid@ ${nombre} tu cuenta se creo correctamente`)
      // imprimirUsuarios()
    }; 


 /*    function imprimirUsuarios(){
       let lista =  getUsuarios();
        tbody = document.querySelector("#tablaUsuarios tbody");
        
        tbody.innerHTML = "";

        for(let i = 0; i< lista.length; i++){
          let row = tbody.insertRow(i);
              nombreCell = row.insertCell(0);
              apellidoCell = row.insertCell(1);
              emailCell = row.insertCell(2);
              passwordCell = row.insertCell(3);
            
            nombreCell.innerHTML = lista[i].nombre;
            apellidoCell.innerHTML = lista[i].apellido;
            emailCell.innerHTML = lista[i].email;
            passwordCell.innerHTML = lista[i].password;




          tbody.appendChild(row);
        }
      };
      
     */