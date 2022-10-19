let contenedor = document.getElementById("contenedor")

fetch('https://api.spoonacular.com/recipes/complexSearch')
  .then(response => response.json())
  .then(json => console.log(json))

  console.log(response);