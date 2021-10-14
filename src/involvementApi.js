const appID = async () => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
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
};

const displayReservations = (data) => {
  let count = 0;
  const paragraphOfReservations = document.getElementById('reservations-list');
  const h1 = document.getElementById('reservations-count');

  if (typeof data !== 'undefined' && data !== null && data.error === undefined) {
    count = data.length;
    let stringOfLists = '';
    data.forEach((reservation) => {
      if (reservation.username === ' ') {
        reservation.username = 'John Doe';
      }
      stringOfLists += `<em>${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</em><br>`;
    });
    paragraphOfReservations.innerHTML = stringOfLists;
  }

  if (count > 0) {
    h1.innerHTML = `Reservations <em>(${count})</em>`;
  } else {
    h1.innerHTML = 'Reservations';
    paragraphOfReservations.innerHTML = '';
  }

  return count;
};

const getReservations = async (itemId) => {
  const baseUrlGet = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HAaVpDPtc9PaGxeihttl/reservations?item_id=';
  const getData = async () => (await fetch(`${baseUrlGet}${itemId}`)).json();

  const data = await getData();
  await displayReservations(data);
};

const displayMessage = (message) => {
  const p = document.getElementById('info-message');
  p.innerText = message;
  p.style.color = '#fff';
  setTimeout(() => {
    p.style.color = 'transparent';
  }, 3000);
};

const addReservation = async (itemId, name, startDate, endDate) => {
  if (name || startDate || endDate) {
    const reservation = {
      item_id: itemId,
      username: name,
      date_start: startDate,
      date_end: endDate,
    };

    const baseUrlWithId = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HAaVpDPtc9PaGxeihttl/reservations/';
    const message = async () => (await fetch(baseUrlWithId, {
      method: 'POST',
      body: JSON.stringify(reservation),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })).text();

    const updateStatus = await message();
    await getReservations(itemId);

    if (updateStatus.toLocaleLowerCase() === 'created') {
      displayMessage('New Reservation made...');
    } else {
      displayMessage('An error occured, Please try again...');
    }
  }
};

export { appID, addReservation, getReservations };