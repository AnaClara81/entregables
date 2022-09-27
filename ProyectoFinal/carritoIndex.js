const carritoDeCompras = []
const botonVaciar =document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contador-carrito')
const precioTotal = document.getElementById("precioTotal")
const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("carrito-contenedor")
    
    const renderProductosCarrito = ()=> {
        let producto  = productos.find( producto => producto.id == productoId )
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);

     producto.cantidad = 1
        carritoDeCompras.forEach((producto) =>{
        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML =`<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button click id="eliminarDelCarrito${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
        contenedorCarrito.appendChild(div)
    })
    
    
    contadorCarrito.innerHTML = carritoDeCompras.lenght
   precioTotal.innerHTML =  carritoDeCompras.reduce((acc, producto)=> acc + producto.precio, 0)

}
    renderProductosCarrito()

    botonVaciar.addEventListener('click',() =>{
       carritoDeCompras.lenght = 0
       
     
    })
   
}
 const eliminarDelCarrito  = () => {
    const boton = document.getElementById( `eliminarDelCarrito${producto.id}` )
    boton.addEventListener('click', ()=> {
    const item = carritoDeCompras.find((producto) => producto.id === producto.Id)
    const indice = carritoDeCompras.indexOf(item) 
    carritoDeCompras.splice(indice, 1) 
    
 })
}
 eliminarDelCarrito();
  
 




   
     
 
      









 