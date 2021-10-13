import './style.css';
import './comment.css';
import './reservation.css';
import './reservation-desktop.css';
import fetchMeals from './api.js';
import { addReservationButtonEvent, addCrossImageEvent, addDateFocusEvent } from './reservationEvents.js';
import {
  body, container, popup, popupComment, userDataArr, loadCommentsSection,
} from './commentEvent.js';
import { getLikes } from './likes.js';

const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];

const populate = async () => {
  const data = [];

  const mealArray = [];

  const dataLikes = await getLikes();

  await mealIds.forEach((id) => data.push(fetchMeals(id)));
  data.forEach((data) => (data.then((meal) => {
    const card = document.createElement('div');
    /* eslint-disable */
    const likesArray = dataLikes.filter((like) => like.item_id == meal.meals[0].idMeal);
    /* eslint-enable */
    card.className = 'card';
    card.innerHTML = `<div class="card" id="${meal.meals[0].idMeal}">
                        <img src="${meal.meals[0].strMealThumb}
                        " alt="meal" class="foodPic">
                        <div class="like">
                          <h3>${meal.meals[0].strMeal}</h3>
                          <a href="#"><i class="fas fa-heart"></i></a>
                        </div>
                        <h4 class="likesNum">${likesArray[0].likes} likes</h4>
                        <button id = "${meal.meals[0].idMeal}" class="comment"><i class="fas fa-comment"></i>  Comment</button>
                        <button class="Reservaton">Reservaton <i class="fa fa-pencil" aria-hidden="true"></i></button>
                      </div>`;
    container.appendChild(card);
    mealArray.push(meal.meals);
    addReservationButtonEvent();

    localStorage.setItem('Meals', JSON.stringify(mealArray));
  })));

  addCrossImageEvent();
  addDateFocusEvent();
};

document.addEventListener('DOMContentLoaded', async () => {
  await populate();
});

container.addEventListener('click', (e) => {
  if (e.target && e.target.matches('.comment')) {
    popupComment(e.target);
    loadCommentsSection(userDataArr);
  }
});

body.addEventListener('click', (e) => {
  if (e.target && e.target.matches('.closepopup')) {
    const header = document.querySelector('header');

    popup.style.display = 'none';
    body.style.overflow = 'scroll';
    container.style.filter = 'blur(0px)';
    header.style.filter = 'blur(0px)';
  } else if (e.target && e.target.matches('.comment-btn')) {
    e.preventDefault();
  }
});
