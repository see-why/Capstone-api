const reservations = [
  {
    date_start: '2021-03-10',
    username: 'ricky',
    date_end: '2021-03-11',
  },
  {
    username: 'max',
    date_start: '2021-03-10',
    date_end: '2021-03-11',
  },
  {
    username: 'batman',
    date_start: '2021-03-10',
    date_end: '2021-03-11',
  },
  {
    date_start: '2021-03-10',
    date_end: '2021-03-11',
    username: 'aunty ',
  },
  {
    date_end: '2021-03-11',
    username: 'mummy',
    date_start: '2021-03-10',
  },
  {
    username: 'daddy',
    date_end: '2021-03-11',
    date_start: '2021-03-10',
  },
  {
    date_end: '2021-03-11',
    date_start: '2021-03-10',
    username: 'max',
  },
];

const getReservations = () => reservations;

const addReservations = (data) => reservations.push(data);

const displayReservations = (arrayOfReservations) => {
  let count = 0;
  const h1 = document.getElementById('reservations-number');

  if (typeof arrayOfReservations !== 'undefined' && arrayOfReservations !== null && arrayOfReservations.error === undefined) {
    count = arrayOfReservations.length;
  }

  if (count > 0) {
    h1.innerHTML = `Reservations <em>(${count})</em>`;
  } else {
    h1.innerHTML = 'Reservations';
  }
};

export { getReservations, addReservations, displayReservations };