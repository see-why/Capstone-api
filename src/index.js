import './style.css';
import { fetchMealData, fetchMeals } from './api.js';
const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];

const populate = async () => {
  //const data = await fetchMealData();

  const data = [];

  await mealIds.forEach(id => data.push(fetchMeals(id)))
  //console.log(data);
  data.forEach((data) => (data.then((meal) => {
      //console.log(meal.meals[0])

      const card = document.createElement('div');

    card.className = 'card';
    //console.log(data.all());
    card.innerHTML = `  <span>${meal.meals[0].strMeal}</span> <img src="${meal.meals[0].strMealThumb}" alt="logo">`;
    container.appendChild(card);
  })))
    
//  const data = await fetchMeals()
  const container = document.querySelector('.container');
  
}

document.addEventListener('DOMContentLoaded', async () => {
  await populate();
});