// Search all Content
function searchMealContent() {
    document.getElementById('mealContainer').innerHTML = ``
    const inputValue = document.getElementById('searchMeal').value;
    const inputLength = inputValue.length;
    if (inputLength == 1) {
        searchByLetter(inputValue);
    } else {
        mealItemName(inputValue)
    };
};

function searchByLetter(letter) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(res => res.json())
        .then(data => displayMeal(data))
       
};

// Searched Content Name
function mealItemName(mealName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => displayMeal(data))
};

const displayMeal = mealItem => {
    const items = mealItem.meals;
    items.forEach(meal => {
        const mealDiv = document.getElementById('mealContainer');
        console.log("here: ", meal);
        const mealContainer = document.getElementById('mealItems');
        const mealName = meal.strMeal
        const mealId = meal.idMeal
        const mealThumb = meal.strMealThumb
        const mealDetails = `
        <div class="col">
        <div class="card menu-style">
            <a href="#${mealId}">
                <img src="${mealThumb}" class="card-img-top " alt="${mealId}">
                <div class="card-body">
                    <h5 class="menu-name">${mealName}</h5>
                </div>
            </a>
            </div>
        </div>
        `;
        mealDiv.innerHTML += mealDetails
        mealContainer.appendChild(mealDiv)

        
    });
};