const baseAppUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const AppId = 'HAaVpDPtc9PaGxeihttl';

const createComments = async (mealId, username, comment) => {
  const response = await fetch(`${baseAppUrl}${AppId}/comments`, {
    method: 'POST',
    body: JSON.stringify({ item_id: mealId, username, comment }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await response.text();
  return data;
};

const fetchComments = async (mealId) => {
  const response = await fetch(`${baseAppUrl}${AppId}/comments?item_id=${mealId}`);
  const data = await response.json();
  return data;
};

export { fetchComments, createComments };