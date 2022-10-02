
const baseURL = 'http://192.168.0.4:8080/bookings/';


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


// Update selected booking availability to false 
// updateBookingAvailabilityToFalse(booking) {
//   return fetch(baseURL + booking._id, {
//     method: 'PUT',
//     body: JSON.stringify(booking),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => res.json());
// };