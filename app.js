const searchInput = document.getElementById('search-input');
const searchBtn =  document.getElementById('search-btn');
const mealsContainer =  document.getElementById('meals-container');
const detailsContainer = document.getElementById('details');


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
      singleMeal.addEventListener('click', function(){
        let mealName = meal.strMeal;
        console.log(mealName)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => {
          let allDetails = `<img src="${data.meals[0].strMealThumb}"> <h6>${data.meals[0].strMeal}</h6>`;
          detailsContainer.innerHTML = allDetails;
          for (const [key, value] of Object.entries(data.meals[0])){
            for(let i = 1; i<20;i++){
              if(key == `strIngredient${i}` && value != '' && value != null){
                let li = document.createElement('li')
                li.innerText = `${value}`;
                detailsContainer.appendChild(li)
              }
            }
          }
        })
      });
    })
  })
})