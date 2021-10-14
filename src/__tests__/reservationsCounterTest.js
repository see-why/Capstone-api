import { getReservations, addReservations, displayReservations } from '../__mocks__/involvement.js';

describe('Check Add reservations Counter', () => {
  test('Counter after getting all reservations', () => {
    document.body.innerHTML = '<h2 id="reservations-number">Reservations</h2>';
    const reservations = getReservations();
    displayReservations(reservations);

    const h1 = document.getElementById('reservations-number');

    expect(h1.innerHTML).toBe('Reservations <em>(7)</em>');
  });

  test('Counter after adding a new reservations', () => {
    document.body.innerHTML = '<h2 id="reservations-number">Reservations</h2>';
    addReservations({
      username: 'chaw',
      date_end: '2021-15-11',
      date_start: '2021-15-10',
    });
    const reservations = getReservations();
    displayReservations(reservations);

    const h1 = document.getElementById('reservations-number');

    expect(h1.innerHTML).toBe('Reservations <em>(8)</em>');
  });
});
