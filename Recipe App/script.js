const searchBox=document.querySelector('.searchBox');
const searchBtn=document.querySelector('.searchBtn');
const recipeContainer=document.querySelector('.recipe-container');
const fetchRecipes=async(query) =>{
   const data=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`)
   const  response=await data.json();
  response.meal.forEach(meal => {
    const recipeDiv=document.createElement('div')
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML=
    `
    <img src="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    <p><span>${meal.strArea}</span>Dish</p>
    <p>Belongs to <span>${meal.strCategory}</span>Category</p>
    `
    const button =document.createElement('button')
    button.textContent="View Recipe"
    recipeContainer.appendChild(recipeDiv)
    
  });
}
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput=searchBox.value.trim()
    fetchRecipes(searchInput);
   // console.log("Button clicked")
})