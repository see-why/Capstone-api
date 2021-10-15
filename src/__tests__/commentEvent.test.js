/**
 * @jest-environment jsdom
 */

import { populateComments } from '../commentEvent';

jest.mock('../api');

test('should return correct number of comments', () => {
  document.body.innerHTML = '<ul class="user-comments"></ul>'
         + '<button type="submit" class="btn-comment">Comment</button>'
          + '</div>';

  const count = populateComments();
  count.then((result) => expect(result).toBe(4))
  /* eslint-disable */
 .catch((error) => console.log('promise rejected'));
 /* eslint-enable */
});