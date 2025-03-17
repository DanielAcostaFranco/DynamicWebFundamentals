import recipes from './recipes.mjs';

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(recipeList) {
  const randomIndex = getRandomNumber(recipeList.length);
  return recipeList[randomIndex];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="image of ${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>
      <h2><a href="#">${recipe.name}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}
      </p>
      <p class="recipe__description">${recipe.description}</p>
    </figcaption>
  </figure>`;
}

function renderRecipes(recipeList) {
  const outputElement = document.getElementById("recipe-container");
  outputElement.innerHTML = "";
  recipeList.forEach(recipe => {
    outputElement.innerHTML += recipeTemplate(recipe);
  });
}

function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
}

document.addEventListener("DOMContentLoaded", init);

function searchHandler(e) {
  e.preventDefault();
  const query = document.getElementById("search-input").value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });
  const sortedRecipes = filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
  renderRecipes(sortedRecipes);
}

const searchButton = document.getElementById("search-button");
if (searchButton) {
  searchButton.addEventListener("click", searchHandler);
}