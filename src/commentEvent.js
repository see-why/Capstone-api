import { fetchComments } from './comments_api.js';

const popup = document.querySelector('.popup');
const body = document.querySelector('body');
const container = document.querySelector('.container');

const popupComment = (eventTarget) => {
  const mealArray = JSON.parse(localStorage.getItem('Meals'));

  if (mealArray !== null) {
    popup.classList.add('popupView');
    popup.style.display = 'block';
    /* eslint-disable */
    const tmp = mealArray.findIndex((el) => el[0].idMeal == parseInt(eventTarget.id, 10));
    /* eslint-enable */

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
                    <div class="meal-instructions-parent"> <i class="fas fa-hat-chef">Recipe</i>
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
                    <button type="submit" id="${mealArray[tmp][0].idMeal}" class="btn-comment">Comment</button> 
                </form>
                </div>
                `;
    /* eslint-disable */
    populateComments(mealArray[tmp][0].idMeal);
    const tagsArr = mealArray[tmp][0].strTags.split(',');
    
                for (const tag of tagsArr) {
                  if (tag === '') {
                    continue;
                  } else {
                    const Tagli = document.createElement('li');
                    Tagli.innerHTML += `${tag}`;
                    document.querySelector('.mealInfo').appendChild(Tagli);
                  }
                }
    /* eslint-enable */

    body.style.overflow = 'hidden';
    container.style.filter = 'blur(5px)';
    document.querySelector('header').style.filter = 'blur(5px)';
  }
};

const populateComments = (mealId) => {
  const commentSection = document.querySelector('.user-comments');
  const commentBtn = document.querySelector('.btn-comment');
  let count = 0;
  while (commentSection.lastElementChild) {
    commentSection.removeChild(commentSection.lastElementChild);
  }

  fetchComments(mealId).then((data) => {
    if (data !== undefined) {
      data.forEach((comment) => {
        const commentInfo = document.createElement('li');
        commentInfo.innerHTML = `
        <span class="comment_date">${comment.creation_date}</span>
        <span class="user">${comment.username.toUpperCase()}:  </span>
        &nbsp;
        <span class="user_comment">${comment.comment}</span>
      
        `;
        commentSection.appendChild(commentInfo);
        count += 1;
      });
    }

    while (commentBtn.lastElementChild) {
      commentBtn.removeChild(commentBtn.lastElementChild);
    }
    const countSpan = document.createElement('span');
    countSpan.classList.add('count');
    countSpan.innerHTML = `&nbsp;&nbsp;${count}`;
    commentBtn.appendChild(countSpan);
  });
};

export {
  container, body, popup, popupComment, populateComments,
};