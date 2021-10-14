const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = '1jTZg5AjMH1qouB9viL2';

async function appID() {
  const response = await fetch(baseURL, { method: 'POST' });
  const id = await response.text();
  return id;
}

const createLikes = async (mealId) => {
  const response = await fetch(`${baseURL}${appId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: mealId }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const likes = await response.text();
  return likes;
};

const getLikes = async () => {
  const response = await fetch(`${baseURL}${appId}/likes/`);
  const likes = await response.json();
  return likes;
};

const updateLikes = async (eventTarget) => {
  await createLikes(parseInt(eventTarget.id, 10));
  let dataLikes = await getLikes();
  dataLikes = dataLikes.filter((like) => typeof (like.item_id) == 'number');
  const likesArray = dataLikes.filter((like) => like.item_id == parseInt(eventTarget.id, 10));
  let count = likesArray[0].likes;
  count += 1;
  eventTarget.parentNode.parentNode.lastChild.previousSibling.innerHTML = `${count} likes`;
};

export {
  createLikes, appID, getLikes, updateLikes,
};