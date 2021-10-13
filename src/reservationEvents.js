import { addReservation, getReservations } from './involvementApi.js';

const addNewScore = (buttonId) => {
  const nameInput = document.getElementById('player_name');
  const startDateInput = document.getElementById('player_startDate');
  const endDateInput = document.getElementById('player_endDate');
  addReservation(buttonId, nameInput.value, startDateInput.value, endDateInput.value);
  nameInput.placeholder = 'Your name';
};

const addProperties = (singleMeal) => {
  const h1 = document.getElementById('meal-name');
  h1.innerText = singleMeal[0].strMeal;

  const p = document.getElementById('info');
  p.innerHTML = `<strong>Region: ${singleMeal[0].strArea}</strong> &nbsp; <strong>Main Ingredient: ${singleMeal[0].strIngredient1}</strong> <br>
  <strong>Category: ${singleMeal[0].strCategory}</strong> &nbsp; <strong>Tag: ${singleMeal[0].strTags}</strong> <br>`;

  const img = document.getElementById('meal-img');
  img.src = singleMeal[0].strMealThumb;

  const addButton = document.getElementById('addButton');
  addButton.name = singleMeal[0].idMeal;

  getReservations(singleMeal[0].idMeal);

  addButton.onclick = async (e) => {
    await addNewScore(e.target.name);
  };
};

const showPopup = (index) => {
  const div = document.getElementById('reservation');
  div.style.display = 'flex';

  if (localStorage.getItem('Meals') !== null) {
    const arrayOfMeals = JSON.parse(localStorage.getItem('Meals'));
    const singleMeal = arrayOfMeals.find((meal) => meal[0].idMeal === index);

    addProperties(singleMeal);
  }
};

const addReservationButtonEvent = () => {
  const reservationButtons = document.querySelectorAll('.Reservaton');

  reservationButtons.forEach((button) => {
    button.onclick = (e) => {
      const index = e.target.parentNode.id;
      showPopup(index);
    };
  });
};

const closeClick = () => {
  const menu = document.getElementById('reservation');
  menu.style.display = 'none';
};

const addCrossImageEvent = () => {
  const cancelImage = document.getElementById('cancel-img');
  cancelImage.addEventListener('click', closeClick);
};

const addDateFocusEvent = () => {
  const startDate = document.getElementById('player_startDate');
  const endDate = document.getElementById('player_endDate');

  startDate.addEventListener('focus', (e) => {
    e.target.type = 'date';
  });

  endDate.addEventListener('focus', (e) => {
    e.target.type = 'date';
  });

  startDate.addEventListener('blur', (e) => {
    e.target.type = 'text';
    e.target.placeholder = 'Start date';
  });

  endDate.addEventListener('blur', (e) => {
    e.target.type = 'text';
    e.target.placeholder = 'End date';
  });
};

export { addReservationButtonEvent, addCrossImageEvent, addDateFocusEvent };
