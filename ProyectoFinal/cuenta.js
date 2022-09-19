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
    let listaGuardada = localStorage.getItem("listaUsuarios");
   if(listaGuardada === null){
    usuarios = [];
   }else{
    usuarios = JSON.parse(listaGuardada);
   }
    return usuarios;
}


function guardar_localStorage(usuarios){
    localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
}