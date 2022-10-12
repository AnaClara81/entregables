 const productos = [
    { id: 1, producto: "Arroz", precio: 125 },
    { id: 2, producto: "Fideo", precio: 70 },
    { id: 3, producto: "Pan", precio: 50 },
    { id: 4, producto: "Flan", precio: 100 },
  ];
  
  // localStorage.setItem("carrito", JSON.stringify(productos));
  let carritoStorage = localStorage.getItem("carrito");
  let carrito = [];
  
  if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
  }
  
    if (carrito.length > 0) {
      carrito.forEach((elemento) => {
        let item = document.createElement("div");
        item.innerHTML = `
                          <h2>Id: ${elemento.id}</h2>
                          <p>Nombre: ${elemento.producto}</p>
                          <b>$${elemento.precio}</b>
        `;
        document.body.append(item);
      });
    } else {
      let item = document.createElement("div");
      item.innerHTML = "No hay productos";
      document.body.append(item);
    }
    
    let boton = document.getElementById("boton");
    boton.addEventListener("click", () => {
      localStorage.clear();
      alert("Carrito eliminado");
    })
    
 let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  let mensaje = `Bienvenido ${usuarioStorage}`;
  alert(mensaje);
}else{
  usuario = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
  alert("Bienvenido es tu primera vez");
} 
 