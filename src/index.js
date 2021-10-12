import './style.css';
import { fetchMealData } from './api.js';

const populate = async () => {
  const data = await fetchMealData();
  const container = document.querySelector('.container');
  const card = document.createElement('div');

  card.className = 'card';
  console.log(data[0]);
  card.innerHTML = `${data[0].strMeal} ${data[0].strMealThumb}`;
  container.appendChild(card);
}

document.addEventListener('DOMContentLoaded', async () => {
  await populate();
});