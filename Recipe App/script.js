const searchBox=document.querySelector('.searchBox');
const searchBtn=document.querySelector('.searchBtn');
const recipeContainer=document.querySelector('.recipe-container');
const fetchRecipe=() =>{
   const data=fetch(`https://www.themealdb.com/api/json/v1/search.php?s=Arrabiata`)
}
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput=searchBox.ariaValueMax.trim()
    fetchRecipe();
    //console.log("Button clicked")
})