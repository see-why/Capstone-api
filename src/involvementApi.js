const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

async function appID() {
  const response = await fetch(baseURL,
    {
      method: 'POST',
      body: '{}',
      headers: {
        'Content-type': 'application/json',
      },
    });
  const id = await response.text();
  return id;
}
export default appID;