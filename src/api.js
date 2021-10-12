const baseUrl = 'http://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];

export const fetchMeals = async (mealId) => {

  let response = await fetch(`${baseUrl}${mealId}`);
  let data = await response.json();
  return data;
}