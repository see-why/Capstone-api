import './style.css';
import './reservation.css';
import './reservation-desktop.css';
import fetchMeals from './api.js';
import { addReservationButtonEvent, addCrossImageEvent, addDateFocusEvent } from './reservationEvents.js';
import {popup,userDataArr, loadCommentsSection} from './commentEvent.js'

const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];
const container = document.querySelector('.container');
let mealArr = [];


const populate = async () => {
  const data = [];


  mealIds.forEach((id) => data.push(fetchMeals(id)));
  data.forEach((data) => (data.then((meal) => {
    const card = document.createElement('div');

    card.className = 'card';
    card.innerHTML = `<div class="card" id="${meal.meals[0].idMeal}">
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
    addReservationButtonEvent();

    localStorage.setItem('Meals', JSON.stringify(mealArray));
  })));

  addCrossImageEvent();
  addDateFocusEvent();
};

const popupComment = (eventTarget) => {

  popup.classList.add('popupView');
  popup.style.display = 'block';
  const mealArray =  JSON.parse(localStorage.getItem('Meals'));
  
  
  const tmp = mealArray.findIndex((el) => el[0].idMeal == parseInt(eventTarget.id, 10));


  popup.innerHTML = `<div class ="popup-child"> 
            <div>
            <ul class="user-comments">
            
            </ul>
          </div>      
           <button class="closepopup">
               &times;
             </button>
               <img class="popupimg"  src="${mealArray[tmp][0].strMealThumb}" />
            
             <div>
             <h3>${mealArray[tmp][0].strMeal}</h3>
              <div class="meal-instructions-parent"><i class="fas fa-hat-chef"></i>
             <div class="meal-instructions-child">${mealArray[tmp][0].strInstructions}</div>
             </div>
             
             
             
             </div>
  
             <div>
               <ul class="mealInfo">
               <li>${mealArray[tmp][0].strCategory}</li>
                <li>${mealArray[tmp][0].strArea}</li>
               </ul>
            </div>
            
            <form action="" method="get" class="comment-section">
               <h4>Add your comment</h4>
              <input type="text" id="name" maxlength="30" name="user_name" placeholder="Full name" required />
              <textarea maxlength="500" id="msg" name="user_message" placeholder="Your insight" rows="5" cols="5"required></textarea>
              <button type="submit" id="comment-btn" class="btn-btn">Comment</button> 
          </form>
          </div>
            `;

          

          let tagsArr = mealArray[tmp][0].strTags.split(',');

          for(const tag of tagsArr){

            if(tag === ''){
              continue
            }

            else {

              let Tagli = document.createElement('li');
            Tagli.innerHTML += `${tag}`;
            document.querySelector('.mealInfo').appendChild(Tagli);

            }
            

          }

            
        
            body.style.overflow = 'hidden';
            container.style.filter = 'blur(5px)';
            document.querySelector('header').style.filter = 'blur(5px)';
            



}


document.addEventListener('DOMContentLoaded', async () => {
  await populate();
});



container.addEventListener('click', (e) => {

  if(e.target && e.target.matches('.comment')){
    
    popupComment(e.target);
    loadCommentsSection(userDataArr);

  }
  
  
})


body.addEventListener('click', (e) => {

   if (e.target && e.target.matches('.closepopup') ){

      const header  = document.querySelector('header');
      
        console.log('hello');
        popup.style.display = 'none';
        body.style.overflow = 'scroll';
        container.style.filter = 'blur(0px)';
        header.style.filter = 'blur(0px)';  
    
  }

  else if (e.target && e.target.matches('.comment-btn')){

    e.preventDefault();
      
  }

  
})
