const baseUrl = 'http://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];

// const fetchMealData = async () => {
//   let responseArr = [];

//   mealIds.forEach(async (mealId) => {
//     const response = await fetch(`${baseUrl}${mealId}`);
//     const mealData = await response.json();
    
//     responseArr.push(mealData.meals);
//   });
//   //console.log(responseArr);
//   return responseArr;
// };

export const fetchMeals = async (mealId) => {
    
    let response = await fetch(`${baseUrl}${mealId}`) ;
    let data = await response.json();
    return data;
    
}


//export { fetchMealData };