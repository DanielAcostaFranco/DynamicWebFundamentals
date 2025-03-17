import recipes from './recipes.mjs';  // Asegúrate de importar las recetas correctamente

// Función para generar un número aleatorio entre 0 y num (sin incluir num)
function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Función para seleccionar una receta aleatoria
function getRandomListEntry(recipeList) {
  const randomIndex = getRandomNumber(recipeList.length);  // Obtiene un índice aleatorio
  return recipeList[randomIndex];  // Devuelve la receta en ese índice
}

// Función para generar el HTML de las etiquetas
function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');  // Convierte el array de etiquetas en una lista HTML
}

// Función para generar el HTML de las estrellas de la calificación
function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;  // Estrella llena
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;  // Estrella vacía
    }
  }

  html += `</span>`;
  return html;  // Devuelve el HTML de las estrellas
}

// Función para generar el HTML completo de una receta
function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="image of ${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}  <!-- Llama a tagsTemplate con las etiquetas de la receta -->
      </ul>
      <h2><a href="#">${recipe.name}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}  <!-- Llama a ratingTemplate con la calificación de la receta -->
      </p>
      <p class="recipe__description">${recipe.description}</p>
    </figcaption>
  </figure>`;
}

// Función para renderizar las recetas en el HTML
function renderRecipes(recipeList) {
  const outputElement = document.getElementById("recipe-container");  // Asegúrate de tener un contenedor con id="recipe-container"
  outputElement.innerHTML = "";  // Limpia el contenido previo
  
  recipeList.forEach(recipe => {
    outputElement.innerHTML += recipeTemplate(recipe);  // Agrega el HTML de la receta al contenedor
  });
}

// Función que inicializa el proceso al cargar la página
function init() {
  const randomRecipe = getRandomListEntry(recipes);  // Obtiene una receta aleatoria
  renderRecipes([randomRecipe]);  // Pasa la receta aleatoria a renderRecipes como un array
}

// Ejecuta la función init cuando el documento esté listo
document.addEventListener("DOMContentLoaded", init);

// Función de búsqueda (opcional, si tienes una barra de búsqueda)
function searchHandler(e) {
  e.preventDefault();  // Evita que se recargue la página

  const query = document.getElementById("search-input").value.toLowerCase();  // Obtiene el valor de búsqueda y lo convierte a minúsculas
  
  const filteredRecipes = recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(query) ||  // Verifica si el nombre contiene la búsqueda
      recipe.description.toLowerCase().includes(query) ||  // Verifica si la descripción contiene la búsqueda
      recipe.tags.some(tag => tag.toLowerCase().includes(query))  // Verifica si alguna etiqueta contiene la búsqueda
    );
  });

  const sortedRecipes = filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));  // Ordena las recetas por nombre

  renderRecipes(sortedRecipes);  // Renderiza las recetas filtradas y ordenadas
}

// Agrega un event listener al botón de búsqueda (si tienes uno)
const searchButton = document.getElementById("search-button");
if (searchButton) {
  searchButton.addEventListener("click", searchHandler);
}
