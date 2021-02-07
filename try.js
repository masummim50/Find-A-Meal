fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => {
  for (const [key, value] of Object.entries(data.meals[0])){
  for(let i = 1; i<20;i++){
    if(key == `strIngredient${i}` && value != '' && value != null){
      console.log(`${key} : ${value}`)
    }
  }
}
})
