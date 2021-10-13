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
                    <button type="submit" id="comment-btn" class="btn-btn">Comment</button> 
                </form>
                </div>
                `;

    const tagsArr = mealArray[tmp][0].strTags.split(',');
    /* eslint-disable */
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

const loadComment = (name, comment) => {
  const commentInfo = document.createElement('li');
  commentInfo.innerHTML = `
      <span class="user">${name}:  </span>
      &nbsp;
      <span class="user_score">${comment}</span>
      `;
  document.querySelector('.user-comments').appendChild(commentInfo);
};

const loadCommentsSection = (userArr) => {
  userArr.forEach((data) => {
    loadComment(data.name, data.comment);
  });
};

const userCommentData = {
  name: '',
  comment: '',
};
const userDataArr = JSON.parse(localStorage.getItem('userData')) || [];
userDataArr.push(userCommentData);
localStorage.setItem('userData', JSON.stringify(userDataArr));

export {
  container, body, popup, popupComment, userDataArr, loadCommentsSection,
};