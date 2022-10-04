const baseURL = 'http://192.168.100.248:8080/bookings/';



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

