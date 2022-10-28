
const meals = document.getElementById("meals");

getrandomMeal();

async function getrandomMeal() {

    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const respdata = await resp.json();
    const randommeal = respdata.meals[0];

    addMeals(randommeal, true);

}
async function getmealById(Id) {

    const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + Id);


}
async function getmealsBysearch(term) {

    const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}

function addMeals(mealData, random = false) {

    const meal = document.createElement('div');

    meal.classList.add('meal');

    meal.innerHTML =
        `<div class="meals-head">
            ${random ? `
            <span class="recipe">Recipes</span>` : ""}
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />

        </div>
            <div class="meals-body">

                <h4>${mealData.strMeal}</h4>
                <button class="fav-btn"><i class="fa  fa-heart"></i></button>

            </div>`;

    const btn = meal.querySelector(".meals-body .fav-btn");

    btn.addEventListener("click", () => {

        if (btn.classList.contains("active")) {
            removeMealLS(mealData.idMeal);
            btn.classList.remove("active");
        } else {
            addMealLS(mealData.idMeal);
            btn.classList.add("active");
        }

    });

    meals.appendChild(meal);
}


function addMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));

}

function removeMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter((id) => id !== mealId)));

}

function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));

    return mealIds === null ? [] : mealIds;
}