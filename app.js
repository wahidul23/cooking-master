document.getElementById('searchBtn').addEventListener('click', function() {
    const mealInput = document.getElementById('inputMeal').value;
    //console.log(mealInput);
    getMealInput();

})

const getMealInput = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}

