const contenedorProductos = document.getElementById("producto-contenedor")


let carrito = [] 

function mostrarProductos(){
   productos.forEach(producto => {
      const div = document.createElement("div")
      div.classList.add("card")
      div.innerHTML += `
      <section class="store">
      <div class="card" style="width: 18rem;">
        <div class="container card-body">
            <div class="items">
                <div class="card-body">
                   
                         <h3 class="card-title">${producto.nombre}</h3>
                            <img class="card-image card-img-top"" src="${producto.img}">
                            <div class="item-details" >Descripción:  ${producto.desc}
                                <h5 class="card-price">$ ${producto.precio}</h5>
                                <button class="item-button btn btn-primary addToCart">Comprar</button>
                            </div>
                        </div>
                    </div>`

   contenedorProductos.appendChild(div)
});
}
 

const addToShoppingCartButtons = document.querySelectorAll("addToCart");
addToShoppingCartButtons.forEach(addToCartButton => {


//addToShoppingCartButtons.forEach(addToCartButton => {
   addToCartButton.addEventListener('click', ()=> console.log('click'))

});
 const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addToCartClicked(event){
   event.target;
   const item = button.closest('.card');

   const itemTitle = card.querySelector('.card-title').textContent;
   const itemPrice = card.querySelector('.card-price').textContent;
   const itemImage = card.querySelector('.card-image').src;
   
addItemToShoppingCart(itemTitle,itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle,itemPrice, itemImage){
   const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
      'shoppingCartItemTitle'
    );
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].innerText === itemTitle) {
        let elementQuantity =  productos[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          '.shoppingCartItemQuantity'
        );
        elementQuantity.value++;
        $('.toast').toast('show');
        updateShoppingCartTotal();
        return;
      }
    }

   const shoppingCartRow = document.createElement('div');
   const shoppingCartContent =`
   <div class="row shoppingCartItem">
         <div class="col-6">
             <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                 <img src=${producto.img} class=" card-imageshopping-cart-image">
                 <h6 class="card-title shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${producto.nombre}</h6>
             </div>
         </div>
         <div class="col-2">
             <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                 <p class="card-price mb-0 shoppingCartItemPrice">${producto.precio}</p>
             </div>
         </div>
         <div class="col-4">
             <div
                 class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                 <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                     value="1">
                 <button class="btn btn-danger buttonDelete" type="button">X</button>
             </div>
         </div>
     </div>`;
     shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);
  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total =  total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = ` $ ${total.toFixed(2)}`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}

 mostrarProductos();
 












 




 