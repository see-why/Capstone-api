import { populateComments } from '../commentEvent.js';

jest.mock('../api');

test('should return correct number of comments', () => {
  document.body.innerHTML = '<ul class="user-comments"></ul>'
         + '<button type="submit" class="btn-comment">Comment</button>'
          + '</div>';

  const count = populateComments();
  count.then((result) => expect(result).toBe(4));
});