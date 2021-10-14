import './style.css';
import './comment.css';
import './reservation.css';
import './reservation-desktop.css';
import fetchMeals from './api.js';
import { addReservationButtonEvent, addCrossImageEvent, addDateFocusEvent } from './reservationEvents.js';
import { createComments } from './comments_api.js';
import {
  body, container, popup, popupComment, populateComments,
} from './commentEvent.js';
import { getLikes, updateLikes } from './likes.js';

const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];

const populate = async () => {
  const data = [];

  const mealArray = [];

  let dataLikes = await getLikes();
  dataLikes = dataLikes.filter((like) => typeof (like.item_id) == 'number');

  mealIds.forEach((id) => data.push(fetchMeals(id)));
  data.forEach((data) => (data.then((meal) => {
    const card = document.createElement('div');
    const likesArray = dataLikes.filter(
      (like) => like.item_id == parseInt(meal.meals[0].idMeal, 10),
    );
    card.className = 'card';
    card.innerHTML = `<div class="card" id="${meal.meals[0].idMeal}">
                        <img src="${meal.meals[0].strMealThumb}
                        " alt="meal" class="foodPic">
                        <div class="like">
                          <h3>${meal.meals[0].strMeal}</h3>
                          <a href="#"><i class="fas fa-heart give-like" id="${meal.meals[0].idMeal}"></i></a>
                          <h4 class="likesNum">${likesArray[0].likes + 1} likes</h4>
                        </div>
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

body.addEventListener('click', async (e) => {
  if (e.target && e.target.matches('.give-like')) {
    updateLikes(e.target);
  }
});

container.addEventListener('click', (e) => {
  if (e.target && e.target.matches('.comment')) {
    popupComment(e.target);
  }
});

body.addEventListener('click', async (e) => {
  if (e.target && e.target.matches('.closepopup')) {
    const header = document.querySelector('header');

    popup.style.display = 'none';
    body.style.overflow = 'scroll';
    container.style.filter = 'blur(0px)';
    header.style.filter = 'blur(0px)';
  } else if (e.target && e.target.matches('.btn-comment')) {
    e.preventDefault();
    const userName = document.getElementById('name').value;
    const userComment = document.getElementById('msg').value;

    if (userName !== '' && userComment !== '') {
      await createComments(e.target.id, userName, userComment);
      populateComments(e.target.id);
    }
  }
});
