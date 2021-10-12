import './style.css';
import fetchMeals from './api.js';

const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];
const container = document.querySelector('.container');

const populate = async () => {
  const data = [];

  const mealArray = [];

  await mealIds.forEach((id) => data.push(fetchMeals(id)));
  data.forEach((data) => (data.then((meal) => {
    const card = document.createElement('div');

    card.className = 'card';
    card.innerHTML = `<div class="card">
                        <img src="${meal.meals[0].strMealThumb}
                        " alt="meal" class="foodPic">
                        <div class="like">
                          <h3>${meal.meals[0].strMeal}</h3>
                          <a href="#"><i class="fas fa-heart"></i></a>
                        </div>
                        <h4 class="likesNum"></h4>
                        <button class="comment"><i class="fas fa-comment"></i>  Comment</button>
                        <button class="Reservaton">Reservaton <i class="fa fa-pencil" aria-hidden="true"></i></button>
                      </div>`;
    container.appendChild(card);

    mealArray.push(meal.meals);
    localStorage.setItem('Meals', JSON.stringify(mealArray));
  })));
};

document.addEventListener('DOMContentLoaded', async () => {
  await populate();
});