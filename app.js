const searchInput = document.getElementById('search-input');
const searchBtn =  document.getElementById('search-btn');
const mealsContainer =  document.getElementById('meals-container');

searchBtn.addEventListener('click', function(){
  let searchInputValue = searchInput.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`)
  .then(res => res.json())
  .then(data => {
    data.meals.forEach(meal => {
      let domStr = `<img src="${meal.strMealThumb}"><h3>${meal.strMeal}</h3>`;
      const singleMeal = document.createElement('div');
      singleMeal.classList.add('single-meal')
      singleMeal.innerHTML = domStr;
      mealsContainer.prepend(singleMeal);
      searchInput.value = '';
    })



    // let domStr = `<h3>${data.meals[0].strMeal}</h3>`;
    // const singleMeal = document.createElement('div');
    // singleMeal.innerHTML = domStr;
    // mealsContainer.appendChild(singleMeal)
  })
})
