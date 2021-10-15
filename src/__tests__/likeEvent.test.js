/**
 * @jest-environment jsdom
 */
import updateLikes from '../likeEvent.js';

jest.mock('../likes');

describe('Count likes', () => {
  test('Counter after clicking the like button', () => {
    document.body.innerHTML = `<div class="card">
                                   <img src="#" alt="meal" class="foodPic">
                                   <div class="like">
                                     <h3></h3>
                                     <a href="#"><i class="fas fa-heart give-like" id="52768"></i></a>
                                     <h4 class="likesNum">likes</h4>
                                   </div>
                                   <button class="comment"><i class="fas fa-comment"></i>  Comment</button>
                                   <button class="Reservaton">Reservaton <i class="fa fa-pencil" aria-hidden="true"></i></button>
                                 </div>`;

    const button = document.querySelector('.give-like');

    const count = updateLikes(button);

    count.then((result) => expect(result).toBe(3));
  });
});