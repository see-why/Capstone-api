import { getLikes, createLikes } from './likes.js';

const updateLikes = async (eventTarget) => {
  await createLikes(parseInt(eventTarget.id, 10));
  let dataLikes = await getLikes();
  /* eslint-disable */
  dataLikes = dataLikes.filter((like) => typeof (like.item_id) == 'number');
  const likesArray = dataLikes.filter((like) => like.item_id == parseInt(eventTarget.id, 10));
  /* eslint-enable */
  let count = likesArray[0].likes;
  count += 1;
  eventTarget.parentNode.parentNode.lastChild.previousSibling.innerHTML = `${count} likes`;
  return count;
};

export default updateLikes;