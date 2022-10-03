
<<<<<<< HEAD
const baseURL = 'http://192.168.100.139:8080/bookings/';

=======
const baseURL = 'http://192.168.100.248:8080/bookings/';
>>>>>>> a8842d4 (added IPs)


// IDEAS FOR BOOKING ROUTES ⬇️



// Add booking to db
export function postBooking(booking) {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

