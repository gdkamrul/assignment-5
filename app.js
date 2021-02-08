// Search all Content
const searchMeal = () => {
    document.getElementById('mealPreview').style.display = "none"
    document.getElementById('error-text').style.display = "none"
    document.getElementById('mealBox').innerHTML = ``
    const inputValue = document.getElementById('item-searched').value
    const inputLength = inputValue.length
    if (inputLength == 1) {
        searchByLetter(inputValue)
    } else {
        mealItemName(inputValue)
    }
}

const searchByLetter = (letter) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(res => res.json())
        .then(data => displayFoodItem(data))
        .catch((error) => {
            document.getElementById('error-text').style.display = "block"
        })
}

const mealItemName = (mealName) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => displayFoodItem(data))
        .catch((error) => {
            document.getElementById('error-text').style.display = "block"
        })
}
const displayFoodItem = mealItem => {
    const items = mealItem.meals
    items.forEach(meal => {
        const mealDiv = document.getElementById('mealBox')
        const mealContainer = document.getElementById('singleMealBox')
        const mealName = meal.strMeal
        const mealId = meal.idMeal
        const mealThumb = meal.strMealThumb
        const mealDetails = `
        <div class="col">
        <div class="card card-style">
            <a href="#meal-details"><div onclick="displayDetails(${mealId})">
                <img src="${mealThumb}" class="card-img-top " alt="${mealId}">
                <div class="card-body">
                    <h5 class="card-title">${mealName}</h5>
                </div>
            </div>
            </div></a>
        </div>
        `
        mealDiv.innerHTML += mealDetails
        mealContainer.appendChild(mealDiv)
    });
}

const displayDetails = (mealId) => {
    const detailsContainer = document.getElementById('mealPreview')
    detailsContainer.style.display = "block"
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {
            const items = data.meals[0]
            const insertedItem = `
        <img  src="${items.strMealThumb}" width="400px" alt="">
        <h1 id="preview-img">${items.strMeal}</h1>
        <h5 id="preview-img">Ingredients</h5>
        <ul id="mealPreviewList">
        
        </ul>
        `
            detailsContainer.innerHTML = insertedItem
            ingredientAdd(items.strIngredient1)
            ingredientAdd(items.strIngredient2)
            ingredientAdd(items.strIngredient3)
            ingredientAdd(items.strIngredient4)
            ingredientAdd(items.strIngredient5)
            ingredientAdd(items.strIngredient6)
            ingredientAdd(items.strIngredient7)
            ingredientAdd(items.strIngredient8)
            ingredientAdd(items.strIngredient9)
            ingredientAdd(items.strIngredient10)
            ingredientAdd(items.strIngredient11)
            ingredientAdd(items.strIngredient12)
            ingredientAdd(items.strIngredient13)
            ingredientAdd(items.strIngredient14)
            ingredientAdd(items.strIngredient15)
            ingredientAdd(items.strIngredient16)
            ingredientAdd(items.strIngredient17)
            ingredientAdd(items.strIngredient18)
            ingredientAdd(items.strIngredient19)
            ingredientAdd(items.strIngredient20)
        })
}
const ingredientAdd = (ingredientDetails) => {

    if (ingredientDetails != '' && ingredientDetails != null) {
        const gradients = `
            <li>${ingredientDetails}</li>
        `
        document.getElementById('mealPreviewList').innerHTML += gradients
    }
    console.log(ingredientDetails);
}
