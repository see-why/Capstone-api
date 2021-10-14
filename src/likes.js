const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = '1jTZg5AjMH1qouB9viL2';

async function appID() {
  const response = await fetch(baseURL, { method: 'POST' });
  const id = await response.text();
  return id;
}

const mealIds = [52768, 52776, 52765, 52935, 52960, 52962];

const data = [];

const createLikes = async (mealId) => {
  const response = await fetch(`${baseURL}${appId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: mealId }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const likes = await response.text();
  return likes;
};

mealIds.forEach((id) => data.push(createLikes(id)));

const getLikes = async () => {
  const response = await fetch(`${baseURL}${appId}/likes/`);
  const likes = await response.json();
  return likes;
};

export { createLikes, appID, getLikes };