const popup = document.querySelector('.popup');




const loadComment = (name, comment) => {

    const commentInfo = document.createElement('li');
      commentInfo.innerHTML = `
      <span class="user">${name}:  </span>
      &nbsp;
      <span class="user_score">${comment}</span>
      `;
      document.querySelector('.user-comments').appendChild(commentInfo);
  
}
  
  
const loadCommentsSection = (userArr) => {
  
    userArr.forEach((data) => {
        loadComment(data.name, data.comment);
    })
  
}
  

  
let userCommentData = {
    name : '',
    comment : ''
}
let userDataArr = JSON.parse(localStorage.getItem('userData')) || [];
userDataArr.push(userCommentData);
localStorage.setItem('userData', JSON.stringify(userDataArr));
  
export {popup, userDataArr, loadCommentsSection}